import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { verifyOTP } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { useNavigate } from "@tanstack/react-router";
import { CheckCircle2, Mail } from "lucide-react";
import { useState } from "react";

const FormSchema = z.object({
    pin: z.string().min(6, {
        message: "Your verification code must be 6 characters.",
    }),
});

export function InputOTPForm() {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const navigate = useNavigate();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            pin: "",
        },
    });

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        try {
            setIsLoading(true);

            const email = localStorage.getItem("email");
            // Attempt to sign in user
            const response = await verifyOTP(email, data.pin);
            console.log(email, data.pin);
            console.log("OTP successful:", response);
            navigate({ to: "/login" });
        } catch (error) {
            // Handle login error
            console.error("OTP failed:", error);
            // You might want to show an error message to the user
        } finally {
            setIsLoading(false);
        }
    }

    const [isResending, setIsResending] = useState<boolean>(false);
    const [resendSuccess, setResendSuccess] = useState<boolean>(false);
    const [resendTimer, setResendTimer] = useState<number>(0);
    const handleResendCode = async () => {
        try {
            setIsResending(true);
            const email = localStorage.getItem("email");

            // Simulate API call for resending code
            await new Promise((resolve) => setTimeout(resolve, 1000));

            console.log("Resending verification code to:", email);
            setResendSuccess(true);

            // Start a 60-second timer
            setResendTimer(60);
            const interval = setInterval(() => {
                setResendTimer((prev) => {
                    if (prev <= 1) {
                        clearInterval(interval);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        } catch (error) {
            console.error("Failed to resend code:", error);
        } finally {
            setIsResending(false);
        }
    };

    return (
        <Card className="w-full max-w-md mx-auto shadow-lg">
            <CardHeader className="space-y-1">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                    <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-center">
                    Email Verification
                </CardTitle>
                <CardDescription className="text-center">
                    We've sent a verification code to your email
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                    >
                        <FormField
                            control={form.control}
                            name="pin"
                            render={({ field }) => (
                                <FormItem className="space-y-3">
                                    <FormLabel className="text-center block">
                                        Verification Code
                                    </FormLabel>
                                    <FormControl>
                                        <InputOTP
                                            maxLength={6}
                                            {...field}
                                            className="flex justify-center"
                                        >
                                            <InputOTPGroup className="flex items-center justify-center w-full">
                                                <InputOTPSlot index={0} />
                                                <InputOTPSlot index={1} />
                                                <InputOTPSlot index={2} />
                                                <InputOTPSlot index={3} />
                                                <InputOTPSlot index={4} />
                                                <InputOTPSlot index={5} />
                                            </InputOTPGroup>
                                        </InputOTP>
                                    </FormControl>
                                    <FormDescription className="text-center">
                                        Please enter the 6-digit verification
                                        code sent to your email.
                                    </FormDescription>
                                    <FormMessage className="text-center" />
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            className="w-full font-medium"
                            disabled={isLoading}
                            size="lg"
                        >
                            {isLoading ? "Verifying..." : "Verify Email"}
                        </Button>
                    </form>
                </Form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 pt-0">
                <div className="text-center text-sm">
                    {resendSuccess && (
                        <div className="flex items-center justify-center text-green-600 mb-2 gap-1">
                            <CheckCircle2 className="h-4 w-4" />
                            <span>Verification code resent successfully!</span>
                        </div>
                    )}

                    <div className="text-muted-foreground">
                        Didn't receive the code?
                    </div>
                </div>

                <Button
                    variant="outline"
                    type="button"
                    className={cn(
                        "w-full",
                        resendTimer > 0 && "cursor-not-allowed opacity-70",
                    )}
                    onClick={handleResendCode}
                    disabled={isResending || resendTimer > 0}
                >
                    {resendTimer > 0
                        ? `Resend code in ${resendTimer}s`
                        : isResending
                          ? "Sending..."
                          : "Resend verification code"}
                </Button>
            </CardFooter>
        </Card>
    );
}
