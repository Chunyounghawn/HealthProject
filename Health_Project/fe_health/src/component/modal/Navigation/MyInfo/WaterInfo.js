import { Legend, Tooltip, PieChart, Pie, Cell } from "recharts"
import { Water } from "../../../../image/index.js"
import styled from "styled-components"

const Symbol = styled.img`
  width: 200px;
  height: 200px;
  position: absolute;
  top: 60px;
  left: 100px;
`
// Sample chart data
const data = [
  { name: "잔여 물 섭취량", students: 300 },
  { name: "오늘 나의 물 섭취량", students: 1700 },
]

const COLORS = ["#FFB399", "#289AFF"]

const WaterInfo = () => {
  return (
    <>
      <PieChart
        width={400}
        height={400}
        style={{
          position: "absolute",
          top: "-20px",
          left: "0px",
        }}
      >
        <Pie
          startAngle={-270}
          data={data}
          dataKey="students"
          outerRadius={150}
          innerRadius={130}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Legend wrapperStyle={{ bottom: 20, left: 10, fontSize: 20 }} />
        <Tooltip />
      </PieChart>
      <Symbol src={Water} />
    </>
  )
}

export default WaterInfo
