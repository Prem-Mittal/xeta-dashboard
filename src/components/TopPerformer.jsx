import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const uData = [400, 300, 200, 278, 189, 230, 340];
const pData = [500, 138, 380, 398, 400, 380, 400];
const xLabels = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export const TopPerformer = () => {
    return (
        <div>
            <h2 className="text-blue-900 font-bold px-6 py-1">Top Performer of the Week</h2>
        <BarChart
          width={600}
          height={300}
          series={[
            { data: pData, label: 'pv', id: 'pvId' },
            { data: uData, label: 'uv', id: 'uvId' },
          ]}
          xAxis={[{ data: xLabels, scaleType: 'band' }]}
        />
        </div>
      );
}
