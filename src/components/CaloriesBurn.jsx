import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
export const CaloriesBurn = () => {
  return (
    <div>
    <h2 className="text-blue-900 font-bold px-6 py-1">Calories Burn</h2>
<BarChart
    xAxis={[
      {
        id: "barCategories",
        data: ["lorem1", "lorem2", "lorem3", "lorem4", "lorem5", "lorem6"],
        scaleType: "band",
      },
    ]}
    series={[
      {
        data: [800, 750, 500, 1000, 740, 790, 750],
      },
    ]}
    width={380}
    height={300}
  />
  </div>
  )
}
