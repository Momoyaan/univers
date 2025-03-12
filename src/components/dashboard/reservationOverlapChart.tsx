import {
    CartesianGrid,
    ResponsiveContainer,
    Scatter,
    ScatterChart,
    Tooltip,
    XAxis,
    YAxis,
    ZAxis,
} from "recharts";

// Sample data for reservation overlaps
// x-axis: hour of day (0-23)
// y-axis: day of week (0-6, 0 = Sunday)
// z-axis (size): number of overlapping reservations
const data = [
    { hour: 9, day: 1, overlaps: 2 }, // Monday 9am
    { hour: 10, day: 1, overlaps: 3 }, // Monday 10am
    { hour: 11, day: 1, overlaps: 5 }, // Monday 11am
    { hour: 13, day: 1, overlaps: 4 }, // Monday 1pm
    { hour: 14, day: 1, overlaps: 6 }, // Monday 2pm
    { hour: 15, day: 1, overlaps: 3 }, // Monday 3pm

    { hour: 9, day: 2, overlaps: 1 }, // Tuesday 9am
    { hour: 10, day: 2, overlaps: 4 }, // Tuesday 10am
    { hour: 11, day: 2, overlaps: 7 }, // Tuesday 11am
    { hour: 13, day: 2, overlaps: 5 }, // Tuesday 1pm
    { hour: 14, day: 2, overlaps: 8 }, // Tuesday 2pm - highest conflict
    { hour: 15, day: 2, overlaps: 4 }, // Tuesday 3pm

    { hour: 9, day: 3, overlaps: 2 }, // Wednesday 9am
    { hour: 10, day: 3, overlaps: 5 }, // Wednesday 10am
    { hour: 11, day: 3, overlaps: 6 }, // Wednesday 11am
    { hour: 13, day: 3, overlaps: 3 }, // Wednesday 1pm
    { hour: 14, day: 3, overlaps: 4 }, // Wednesday 2pm
    { hour: 15, day: 3, overlaps: 2 }, // Wednesday 3pm

    // Add more data points for other days...
    { hour: 10, day: 4, overlaps: 3 }, // Thursday 10am
    { hour: 14, day: 4, overlaps: 5 }, // Thursday 2pm
    { hour: 11, day: 5, overlaps: 4 }, // Friday 11am
];

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function ReservationOverlapChart() {
    return (
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <ScatterChart
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
                    <CartesianGrid />
                    <XAxis
                        type="number"
                        dataKey="hour"
                        name="Hour"
                        domain={[8, 17]}
                        tickCount={10}
                        tickFormatter={(hour) => `${hour}:00`}
                        label={{
                            value: "Hour of Day",
                            position: "insideBottom",
                            offset: -10,
                        }}
                    />
                    <YAxis
                        type="number"
                        dataKey="day"
                        name="Day"
                        domain={[0, 6]}
                        tickCount={7}
                        tickFormatter={(day) => dayNames[day]}
                        label={{
                            value: "Day of Week",
                            angle: -90,
                            position: "insideLeft",
                        }}
                        reversed
                    />
                    <ZAxis
                        type="number"
                        dataKey="overlaps"
                        range={[40, 400]}
                        name="Overlaps"
                    />
                    <Tooltip
                        cursor={{ strokeDasharray: "3 3" }}
                        contentStyle={{
                            backgroundColor: "hsl(var(--card))",
                            borderColor: "hsl(var(--border))",
                            borderRadius: "0.5rem",
                            color: "hsl(var(--foreground))",
                        }}
                        formatter={(value, name) => {
                            if (name === "Hour") return [`${value}:00`, name];
                            if (name === "Day") return [dayNames[value], name];
                            return [value, name];
                        }}
                    />
                    <Scatter
                        name="Reservation Overlaps"
                        data={data}
                        fill="#ff7300"
                        fillOpacity={0.6}
                    />
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    );
}
