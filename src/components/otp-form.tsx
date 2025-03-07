import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
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
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

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

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
				<FormField
					control={form.control}
					name="pin"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email Verificaton</FormLabel>
							<FormControl>
								<InputOTP maxLength={6} {...field}>
									<InputOTPGroup>
										<InputOTPSlot index={0} />
										<InputOTPSlot index={1} />
										<InputOTPSlot index={2} />
										<InputOTPSlot index={3} />
										<InputOTPSlot index={4} />
										<InputOTPSlot index={5} />
									</InputOTPGroup>
								</InputOTP>
							</FormControl>
							<FormDescription>
								Please enter the verification code sent to your email.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit" className="w-full" disabled={isLoading}>
					{isLoading ? "Verifying..." : "Verify"}
				</Button>
			</form>
		</Form>
	);
}
