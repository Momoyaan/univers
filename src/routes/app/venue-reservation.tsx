import VenueReservationForm from "@/components/venue-reservation/venueReservationForm";
import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/app/venue-reservation")({
    component: VenueReservationPage,
});

function VenueReservationPage() {
    return (
        <div className="bg-background">
            <div className="flex flex-col flex-1 overflow-hidden">
                <header className="flex items-center justify-between border-b px-6 py-3 h-16">
                    <div className="flex items-center gap-4">
                        <h1 className="text-xl font-semibold">
                            Venue Reservation
                        </h1>
                        <p className="text-muted-foreground">
                            Fill out the form below to reserve a venue for your
                            event
                        </p>
                    </div>
                </header>

                <main className="flex-1 overflow-auto p-6">
                    <VenueReservationForm />
                </main>
            </div>
        </div>
    );
}
