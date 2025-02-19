import { createFileRoute } from "@tanstack/react-router";
import { GalleryVerticalEnd } from "lucide-react";
import { RegisterForm } from "@/components/registerForm";

export const Route = createFileRoute("/(auth)/register")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="grid min-h-svh lg:grid-cols-2">
			<div className="flex flex-col gap-4 p-6 md:p-10">
				<div className="flex justify-center gap-2 md:justify-start">
					<a href="#" className="flex items-center gap-2 font-medium">
						<div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
							<GalleryVerticalEnd className="size-4" />
						</div>
						Acme Inc.
					</a>
				</div>
				<div className="flex flex-1 items-center justify-center">
					<div className="w-full max-w-xs">
						<RegisterForm />
					</div>
				</div>
			</div>
			<div className="relative hidden bg-muted lg:block">
				<img
					src="https://images.unsplash.com/photo-1739826155350-db63e78c098c"
					alt="Image"
					className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
				/>
			</div>
		</div>
	);
}
