import { createFileRoute } from "@tanstack/react-router";
import CalendarView from "@/components/calendarView";
import type { FilterState } from "@/components/calendarFilter";
import { useState } from "react";
import LandingNav from "@/components/landingNav";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	const [filters, setFilters] = useState<FilterState>({
		categories: [],
		dateRange: { from: undefined, to: undefined },
	});

	const handleFilterChange = (newFilters: FilterState) => {
		setFilters(newFilters);
	};
	return (
		<div className="p-2">
			<LandingNav />
			<CalendarView filters={filters} />
		</div>
	);
}
