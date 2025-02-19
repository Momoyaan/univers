import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { FilterState } from "@/components/calendarFilter";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Simulated events
const events = [
	{
		id: 1,
		title: "Team Meeting",
		category: "work",
		date: new Date(2025, 1, 20),
	},
	{
		id: 2,
		title: "Family Dinner",
		category: "family",
		date: new Date(2025, 1, 22),
	},
	{
		id: 3,
		title: "Gym Session",
		category: "personal",
		date: new Date(2025, 1, 25),
	},
];

type CalendarViewProps = {
	filters: FilterState;
};

export default function CalendarView({ filters }: CalendarViewProps) {
	const [currentDate, setCurrentDate] = useState(new Date(2025, 1, 1)); // Set to February 2025 for demonstration
	const [filteredEvents, setFilteredEvents] = useState(events);

	useEffect(() => {
		const filtered = events.filter((event) => {
			const categoryMatch =
				filters.categories.length === 0 ||
				filters.categories.includes(event.category);
			const dateMatch =
				(!filters.dateRange.from || event.date >= filters.dateRange.from) &&
				(!filters.dateRange.to || event.date <= filters.dateRange.to);
			return categoryMatch && dateMatch;
		});
		setFilteredEvents(filtered);
	}, [filters]);

	const getDaysInMonth = (date: Date) => {
		const year = date.getFullYear();
		const month = date.getMonth();
		const daysInMonth = new Date(year, month + 1, 0).getDate();
		const firstDayOfMonth = new Date(year, month, 1).getDay();
		return { daysInMonth, firstDayOfMonth };
	};

	const { daysInMonth, firstDayOfMonth } = getDaysInMonth(currentDate);

	const prevMonth = () => {
		setCurrentDate(
			new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
		);
	};

	const nextMonth = () => {
		setCurrentDate(
			new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
		);
	};

	return (
		<div className="m-12">
			<div className="mb-4 flex items-center justify-between">
				<h2 className="text-2xl font-semibold">
					{currentDate.toLocaleString("default", {
						month: "long",
						year: "numeric",
					})}
				</h2>
				<div>
					<Button variant="outline" size="icon" onClick={prevMonth}>
						<ChevronLeft className="h-4 w-4" />
					</Button>
					<Button
						variant="outline"
						size="icon"
						onClick={nextMonth}
						className="ml-2"
					>
						<ChevronRight className="h-4 w-4" />
					</Button>
				</div>
			</div>
			<div className="grid grid-cols-7 gap-1">
				{daysOfWeek.map((day) => (
					<div key={day} className="text-center font-semibold">
						{day}
					</div>
				))}
				{Array.from({ length: firstDayOfMonth }).map((_, index) => (
					<div key={`empty-${index}`} className="h-24 border" />
				))}
				{Array.from({ length: daysInMonth }).map((_, index) => {
					const day = index + 1;
					const isToday =
						day === new Date().getDate() &&
						currentDate.getMonth() === new Date().getMonth() &&
						currentDate.getFullYear() === new Date().getFullYear();
					const dayEvents = filteredEvents.filter(
						(event) =>
							event.date.getDate() === day &&
							event.date.getMonth() === currentDate.getMonth(),
					);
					return (
						<div
							key={day}
							className={cn("h-24 border p-1", isToday && "bg-blue-100")}
						>
							<span className={cn("text-sm", isToday && "font-bold")}>
								{day}
							</span>
							{dayEvents.map((event) => (
								<div key={event.id} className="mt-1 text-xs truncate">
									{event.title}
								</div>
							))}
						</div>
					);
				})}
			</div>
		</div>
	);
}
