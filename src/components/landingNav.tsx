import { ModeToggle } from "@/components/modeToggle";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
export default function LandingNav() {
    return (
        <header className="flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4 w-full">
                <Link to="/" className="[&.active]:font-bold">
                    Home
                </Link>{" "}
                <Link to="/about" className="[&.active]:font-bold">
                    About
                </Link>
                <div className="flex items-center gap-2 ml-auto">
                    <Link
                        to="/app/dashboard"
                        className={buttonVariants({ variant: "secondary" })}
                    >
                        Go to App
                    </Link>
                    <Link
                        to="/auth/login"
                        className={buttonVariants({ variant: "default" })}
                    >
                        Sign In
                    </Link>
                    <ModeToggle />
                </div>
            </div>
        </header>
    );
}
