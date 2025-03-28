import { CreateEventButton } from "@/components/events/createEventButton";
import { EventList } from "@/components/events/eventList";
import { EventModal } from "@/components/events/eventModal";
import { EventTimeline } from "@/components/events/eventTimeline";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { useState } from "react";
export const Route = createFileRoute("/app/events/timeline")({
    component: Events,
    // beforeLoad: async ({ location }) => {
    // 	if (!isAuthenticated) {
    // 		throw redirect({
    // 			to: "/login",
    // 			search: {
    // 				// Use the current location to power a redirect after login
    // 				// (Do not use `router.state.resolvedLocation` as it can
    // 				// potentially lag behind the actual current location)
    // 				redirect: location.href,
    // 			},
    // 		});
    // 	}
    // },
});

function Events() {
    const [view, setView] = useState<"list" | "timeline">("list");
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className="bg-background">
            <div className="flex flex-col flex-1 overflow-hidden">
                <header className="flex items-center justify-between border-b px-6 py-4">
                    <div className="flex items-center gap-4">
                        <h1 className="text-xl font-semibold">Events</h1>
                        <div className="flex items-center gap-2">
                            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                            <button
                                onClick={() => setView("list")}
                                className={`px-3 py-1 text-sm rounded-md ${
                                    view === "list"
                                        ? "bg-primary/10 text-primary"
                                        : "text-muted-foreground hover:bg-muted"
                                }`}
                            >
                                List
                            </button>
                            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                            <button
                                onClick={() => setView("timeline")}
                                className={`px-3 py-1 text-sm rounded-md ${
                                    view === "timeline"
                                        ? "bg-primary/10 text-primary"
                                        : "text-muted-foreground hover:bg-muted"
                                }`}
                            >
                                Timeline
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <CreateEventButton
                            onClick={() => setIsModalOpen(true)}
                        />
                    </div>
                </header>
                <main className="flex-1 overflow-auto p-6">
                    {view === "list" ? <EventList /> : <EventTimeline />}
                </main>
            </div>
            <EventModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
}
