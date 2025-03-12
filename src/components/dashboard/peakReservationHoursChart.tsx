import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const data = [
    { time: "8 AM", reservations: 5 },
    { time: "9 AM", reservations: 10 },
    { time: "10 AM", reservations: 15 },
    { time: "11 AM", reservations: 20 },
    { time: "12 PM", reservations: 18 },
    { time: "1 PM", reservations: 22 },
    { time: "2 PM", reservations: 25 },
    { time: "3 PM", reservations: 23 },
    { time: "4 PM", reservations: 18 },
    { time: "5 PM", reservations: 12 },
];

export function PeakReservationHoursChart() {
    return (
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="reservations"
                        stroke="#8884d8"
                        fill="#8884d8"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
