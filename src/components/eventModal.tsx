import { useState } from "react";
import { CalendarIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";

interface EventModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export function EventModal({ isOpen, onClose }: EventModalProps) {
	const [date, setDate] = useState<Date>();

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="sm:max-w-[500px]">
				<DialogHeader>
					<DialogTitle className="text-xl">Create New Event</DialogTitle>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid gap-2">
						<Label htmlFor="title">Event Title</Label>
						<Input id="title" placeholder="Enter event title" />
					</div>
					<div className="grid grid-cols-2 gap-4">
						<div className="grid gap-2">
							<Label>Event Date</Label>
							<Popover>
								<PopoverTrigger asChild>
									<Button
										variant="outline"
										className="w-full justify-start text-left font-normal"
									>
										<CalendarIcon className="mr-2 h-4 w-4" />
										{date ? format(date, "PPP") : <span>Pick a date</span>}
									</Button>
								</PopoverTrigger>
								<PopoverContent className="w-auto p-0">
									<Calendar
										mode="single"
										selected={date}
										onSelect={setDate}
										initialFocus
									/>
								</PopoverContent>
							</Popover>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="status">Status</Label>
							<Select>
								<SelectTrigger id="status">
									<SelectValue placeholder="Select status" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="planning">Planning</SelectItem>
									<SelectItem value="confirmed">Confirmed</SelectItem>
									<SelectItem value="completed">Completed</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
					<div className="grid gap-2">
						<Label htmlFor="location">Location</Label>
						<Input id="location" placeholder="Enter event location" />
					</div>
					<div className="grid gap-2">
						<Label htmlFor="attendees">Expected Attendees</Label>
						<Input
							id="attendees"
							type="number"
							placeholder="Enter number of attendees"
						/>
					</div>
					<div className="grid gap-2">
						<Label htmlFor="description">Description</Label>
						<Textarea id="description" placeholder="Enter event description" />
					</div>
				</div>
				<DialogFooter>
					<Button variant="outline" onClick={onClose}>
						Cancel
					</Button>
					<Button>Create Event</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
