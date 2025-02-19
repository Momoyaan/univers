import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import CalendarView from "@/components/calendarView";
import type { FilterState } from "@/components/filter";
import { useState } from "react";
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
			<div className="p-2 flex gap-2">
				<Link to="/" className="[&.active]:font-bold">
					Home
				</Link>{" "}
				<Link to="/about" className="[&.active]:font-bold">
					About
				</Link>
				<Link to="/login" className="[&.active]:font-bold">
					Sign In
				</Link>
			</div>
			<hr />
			<h3>Welcome Home!</h3>
			<CalendarView filters={filters} />
		</div>
	);
}
