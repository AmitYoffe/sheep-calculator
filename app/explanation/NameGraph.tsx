import { Card } from "@/components/ui/card";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const nameGraphData = [
  {
    name_length: 1,
    "score multiplication": 1,
  },
  {
    name_length: 5,
    "score multiplication": 1,
  },
  {
    name_length: 10,
    "score multiplication": 1,
  },
  {
    name_length: 15,
    "score multiplication": 1,
  },
  {
    name_length: 20,
    "score multiplication": 1,
  },
  {
    name_length: 25,
    "score multiplication": 1,
  },
  {
    name_length: 30,
    "score multiplication": 0.95,
  },
  {
    name_length: 35,
    "score multiplication": 0.9,
  },
  {
    name_length: 40,
    "score multiplication": 0.85,
  },
  {
    name_length: 45,
    "score multiplication": 0.8,
  },
  {
    name_length: 50,
    "score multiplication": 0.75,
  },
  {
    name_length: 55,
    "score multiplication": 0.7,
  },
  {
    name_length: 115,
    "score multiplication": 0.1,
  },
  {
    name_length: 120,
    "score multiplication": 0.1,
  },
  {
    name_length: 125,
    "score multiplication": 0.1,
  },
];

export default function GaussianGraphs() {
  return (
    <Card className="h-96 overflow-x-hidden overflow-y-hidden my-1 p-2 shadow-md">
      <ResponsiveContainer className="h-full w-full">
        <LineChart data={nameGraphData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name_length" />
          <YAxis dataKey="score multiplication" />
          <Line
            type="monotone"
            dataKey="score multiplication"
            stroke="#457825"
          />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
