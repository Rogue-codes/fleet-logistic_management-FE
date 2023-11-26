import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function BarChartBox() {
  const data = [
    {
      name: "mon",
      visitors: 90,
    },
    {
      name: "tue",
      visitors: 14,
    },
    {
      name: "wed",
      visitors: 130,
    },
    {
      name: "thur",
      visitors: 200,
    },
    {
      name: "fri",
      visitors: 160,
    },
    {
      name: "sat",
      visitors: 60,
    },
    {
      name: "sun",
      visitors: 80,
    },
  ];

  return (
    <div className="w-[100%] p-6 ">
      <ResponsiveContainer width="99%" height={200} className="">
        <BarChart
          width={700}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
          className="rounded-xl"
        >
          <CartesianGrid horizontal={true} vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="visitors"
            barSize={30}
            fill="#845286"
            style={{
              background:
                "background: linear-gradient(180deg, #C34953 0%, #845286 100%)",
            }}
          />
          {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
