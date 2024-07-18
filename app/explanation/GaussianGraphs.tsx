import { Card } from "@/components/ui/card";
import { generateGaussianData } from "@/lib/math/generateGraphData";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

export default function GaussianGraphs() {
  // Generate data for the Gaussian graph
  const data = generateGaussianData(72, 20, 50);

  return (
    <Card className="h-96 overflow-x-hidden overflow-y-hidden p-2 my-3 shadow-md">
      <ResponsiveContainer className="h-full w-full">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="parameter_value" />
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
