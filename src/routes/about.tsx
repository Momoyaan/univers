import { createFileRoute } from "@tanstack/react-router";
import LandingNav from "@/components/landingNav";

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
