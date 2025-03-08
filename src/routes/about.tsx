import LandingNav from "@/components/landingNav";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
    component: About,
});

function About() {
    return (
        <div className="p-2">
            <LandingNav />
            Hello from About!
        </div>
    );
}
