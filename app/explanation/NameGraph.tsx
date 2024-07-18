import { Card } from "@/components/ui/card";
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

export const data = [
  {
    name_length: 1,
    score_multiplication: 1,
  },
  {
    name_length: 5,
    score_multiplication: 1,
  },
  {
    name_length: 10,
    score_multiplication: 1,
  },
  {
    name_length: 15,
    score_multiplication: 1,
  },
  {
    name_length: 20,
    score_multiplication: 1,
  },
  {
    name_length: 25,
    score_multiplication: 1,
  },
  {
    name_length: 30,
    score_multiplication: 0.95,
  },
  {
    name_length: 35,
    score_multiplication: 0.9,
  },
  {
    name_length: 40,
    score_multiplication: 0.85,
  },
  {
    name_length: 45,
    score_multiplication: 0.8,
  },
  {
    name_length: 50,
    score_multiplication: 0.75,
  },
  {
    name_length: 55,
    score_multiplication: 0.7,
  },
  {
    name_length: 115,
    score_multiplication: 0.1,
  },
  {
    name_length: 120,
    score_multiplication: 0.1,
  },
  {
    name_length: 125,
    score_multiplication: 0.1,
  },
];

export default function GaussianGraphs() {
  return (
    <Card className="h-96 overflow-x-hidden overflow-y-hidden p-2">
      <ResponsiveContainer className="h-full w-full">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name_length" />
          <YAxis dataKey="score_multiplication" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="score_multiplication"
            stroke="#457825"
          />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
