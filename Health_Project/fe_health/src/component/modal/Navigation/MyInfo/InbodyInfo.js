// Chart
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  Line,
  CartesianGrid,
} from "recharts"

const InBodyData = [
  {
    name: "1월",
    체지방: 11,
    골격근량: 16,
  },
  {
    name: "2월",
    체지방: 15,
    골격근량: 12,
  },
  {
    name: "3월",
    체지방: 5,
    골격근량: 10,
  },
  {
    name: "4월",
    체지방: 10,
    골격근량: 5,
  },
  {
    name: "5월",
    체지방: 9,
    골격근량: 4,
  },
  {
    name: "6월",
    체지방: 10,
    골격근량: 8,
  },
  {
    name: "7월",
    체지방: 11,
    골격근량: 19,
  },
  {
    name: "8월",
    체지방: 15,
    골격근량: 12,
  },
  {
    name: "9월",
    체지방: 5,
    골격근량: 10,
  },
  {
    name: "10월",
    체지방: 10,
    골격근량: 5,
  },
  {
    name: "11월",
    체지방: 9,
    골격근량: 4,
  },
  {
    name: "12월",
    체지방: 10,
    골격근량: 8,
  },
]

const InbodyInfo = () => {
  return (
    <>
      <ResponsiveContainer width="95%" aspect={2}>
        <LineChart data={InBodyData} margin={{ top: 70, bottom: 30 }}>
          <CartesianGrid />
          <XAxis dataKey="name" interval={"preserveStartEnd"} />
          <YAxis></YAxis>
          <Legend wrapperStyle={{ top: 20, left: 30, fontSize: 20 }} />
          <Tooltip />
          <Line dataKey="체지방" stroke="blue" activeDot={{ r: 8 }} />
          <Line dataKey="골격근량" stroke="red" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}

export default InbodyInfo
