import type React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Link } from "@tanstack/react-router";

const forgotPasswordSchema = z.object({
	email: z.string().email({
		message: "Please enter a valid email address.",
	}),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export function ForgotPasswordForm({
	className,
	...props
}: React.ComponentPropsWithoutRef<"div">) {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

	const form = useForm<ForgotPasswordFormValues>({
		resolver: zodResolver(forgotPasswordSchema),
		defaultValues: {
			email: "",
		},
	});

	async function onSubmit(data: ForgotPasswordFormValues) {
		setIsLoading(true);

		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 2000));

		console.log(data);
		setIsLoading(false);
		setIsSubmitted(true);
		// TODO: Implement actual password reset logic
	}

	if (isSubmitted) {
		return (
			<div className="text-center">
				<h2 className="text-2xl font-bold mb-2">Check your email</h2>
				<p className="text-muted-foreground">
					We have sent a password reset link to your email.
				</p>
			</div>
		);
	}

	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<div className="flex flex-col items-center gap-2 text-center">
				<h1 className="text-2xl font-bold">Forgot your password?</h1>
				<p className="text-balance text-sm text-muted-foreground">
					No worries, we'll send you reset instructions.
				</p>
			</div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input type="email" placeholder="m@example.com" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit" className="w-full" disabled={isLoading}>
						{isLoading ? "Sending..." : "Reset Password"}
					</Button>
				</form>
			</Form>
			<div className="text-center text-sm">
				<Link to="/login" className="underline underline-offset-4">
					Back to Login
				</Link>
			</div>
		</div>
	);
}
