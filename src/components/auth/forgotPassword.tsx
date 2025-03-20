import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Form schema with validation
const forgotPasswordSchema = z.object({
    idNumber: z
        .string()
        .min(5, { message: "ID number must be at least 5 characters" }),
});

type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const form = useForm<ForgotPasswordValues>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            idNumber: "",
        },
    });

    const onSubmit = async (values: ForgotPasswordValues) => {
        setIsLoading(true);

        try {
            // Here you would typically call your backend API to send a reset link
            console.log("Password reset requested for:", values.idNumber);

            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Show success message
            setIsSubmitted(true);
        } catch (error) {
            console.error("Password reset request failed:", error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isSubmitted) {
        return (
            <Card>
                <CardContent className="pt-6">
                    <Alert className="mb-6">
                        <AlertTitle>Check your email</AlertTitle>
                        <AlertDescription>
                            We've sent a password reset link to the email
                            associated with your account. The link will expire
                            in 1 hour.
                        </AlertDescription>
                    </Alert>
                    <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-4">
                            Didn't receive an email? Check your spam folder or
                            try again.
                        </p>
                        <Button
                            variant="outline"
                            onClick={() => {
                                setIsSubmitted(false);
                                form.reset();
                            }}
                        >
                            Try again
                        </Button>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-center border-t px-6 py-4">
                    <Link
                        to="/auth/login"
                        className="text-sm text-primary flex items-center hover:underline"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to login
                    </Link>
                </CardFooter>
            </Card>
        );
    }

    return (
        <Card>
            <CardContent className="pt-6">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                    >
                        <div className="space-y-4">
                            <FormField
                                control={form.control}
                                name="idNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>ID Number</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter your ID number"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full"
                            disabled={isLoading}
                        >
                            {isLoading ? "Sending..." : "Send Reset Link"}
                        </Button>
                    </form>
                </Form>
            </CardContent>
            <CardFooter className="flex justify-center border-t px-6 py-4">
                <Link
                    to="/auth/login"
                    className="text-sm text-primary flex items-center hover:underline"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to login
                </Link>
            </CardFooter>
        </Card>
    );
}
