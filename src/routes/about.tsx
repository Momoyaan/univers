import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
	component: About,
});

function About() {
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
			Hello from About!
		</div>
	);
}
