import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useRouterState } from "@tanstack/react-router";
import {
	Home,
	Settings,
	Menu,
	ChevronLeft,
	CalendarDays,
	LayoutGrid,
	Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
	TooltipProvider,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";

const mainNavigation = [
	{ name: "Dashboard", href: "/app/dashboard", icon: Home },
	{ name: "Calendar", href: "/app/calendar", icon: CalendarDays },
	{ name: "Events", href: "/app/events", icon: LayoutGrid },
	{ name: "Team", href: "/app/team", icon: Users },
];

const workspaces = [
	{
		name: "Marketing Events",
		href: "/workspace/marketing",
		color: "bg-blue-500",
	},
	{
		name: "Product Launches",
		href: "/workspace/product",
		color: "bg-green-500",
	},
	{ name: "Team Building", href: "/workspace/team", color: "bg-purple-500" },
	{
		name: "Conferences",
		href: "/workspace/conferences",
		color: "bg-orange-500",
	},
];

export function Sidebar() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [isMobileOpen, setIsMobileOpen] = useState(false);

	return (
		<TooltipProvider>
			<>
				<Button
					className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-primary rounded-md shadow-md"
					onClick={() => setIsMobileOpen(!isMobileOpen)}
					aria-label="Toggle sidebar"
				>
					<Menu className="text-foreground h-6 w-6" />
				</Button>
				<div
					className={cn(
						"fixed inset-y-0 z-20 flex flex-col bg-background transition-all duration-300 ease-in-out lg:static",
						isCollapsed ? "w-[72px]" : "w-72",
						isMobileOpen
							? "translate-x-0"
							: "-translate-x-full lg:translate-x-0",
					)}
				>
					<div className="border-b border-r border-border">
						<div
							className={cn(
								"flex h-16 items-center gap-2 px-4",
								isCollapsed && "justify-center px-2",
							)}
						>
							{!isCollapsed && (
								<Link to="/" className="flex items-center font-semibold">
									<span className="text-lg">UniVERS</span>
								</Link>
							)}
							<Button
								variant="ghost"
								size="sm"
								className={cn("ml-auto h-8 w-8", isCollapsed && "ml-0")}
								onClick={() => setIsCollapsed(!isCollapsed)}
							>
								<ChevronLeft
									className={cn(
										"h-4 w-4 transition-transform",
										isCollapsed && "rotate-180",
									)}
								/>
								<span className="sr-only">
									{isCollapsed ? "Expand" : "Collapse"} Sidebar
								</span>
							</Button>
						</div>
					</div>
					<div className="flex-1 border-r">
						<ScrollArea className="flex-1 px-2 py-4">
							<div className="space-y-1">
								{mainNavigation.map((item) => (
									<Link
										key={item.name}
										to={item.href}
										className={cn(
											"flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
											pathname === item.href
												? "bg-primary text-primary-foreground"
												: "text-foreground hover:bg-secondary hover:text-secondary-foreground",
											isCollapsed && "justify-center px-2",
										)}
									>
										<item.icon
											className={cn("h-4 w-4", !isCollapsed && "mr-1")}
										/>
										{!isCollapsed && <span>{item.name}</span>}
									</Link>
								))}
							</div>

							<Separator className="my-4" />

							{!isCollapsed && (
								<h2 className="mb-2 px-4 text-xs font-semibold text-muted-foreground">
									WORKSPACES
								</h2>
							)}
							<div className="space-y-1">
								{workspaces.map((workspace) => (
									<Link
										key={workspace.name}
										to={workspace.href}
										className={cn(
											"flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
											pathname === workspace.href
												? "bg-primary text-primary-foreground"
												: "text-foreground hover:bg-secondary hover:text-secondary-foreground",
											isCollapsed && "justify-center px-2",
										)}
									>
										<div
											className={cn("h-2 w-2 rounded-full", workspace.color)}
										/>
										{!isCollapsed && <span>{workspace.name}</span>}
									</Link>
								))}
							</div>
						</ScrollArea>
					</div>
					<div className="flex items-center border-t border-r border-border gap-2 p-4">
						<Tooltip delayDuration={0}>
							<TooltipTrigger asChild>
								<div className="flex items-center gap-2">
									<Avatar className="h-8 w-8">
										<AvatarImage src="/placeholder.svg?height=32&width=32" />
										<AvatarFallback>JD</AvatarFallback>
									</Avatar>
									{!isCollapsed && (
										<div className="flex flex-col">
											<span className="text-sm font-medium">Jane Doe</span>
											<span className="text-xs text-muted-foreground">
												jane@example.com
											</span>
										</div>
									)}
								</div>
							</TooltipTrigger>
							{isCollapsed && (
								<TooltipContent side="right" className="flex flex-col gap-1">
									<span className="font-medium">Jane Doe</span>
									<span className="text-xs">jane@example.com</span>
								</TooltipContent>
							)}
						</Tooltip>
						{!isCollapsed && (
							<Link
								to="/app/settings"
								className={cn(
									buttonVariants({ variant: "ghost", size: "icon" }),
									"ml-auto",
								)}
							>
								<Settings className="h-4 w-4" />
							</Link>
						)}
					</div>
				</div>
			</>
		</TooltipProvider>
	);
}
