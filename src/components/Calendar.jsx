import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
export const Calendar = () => {
  return (
    <div className='flex'>
    <div>
        <LocalizationProvider
        dateAdapter={AdapterDayjs}
        localeText={{
            calendarWeekNumberHeaderText: '#',
            calendarWeekNumberText: (weekNumber) => `${weekNumber}.`,
        }}
        >
        <DateCalendar displayWeekNumber />
        </LocalizationProvider>
    </div>
    <div>
        <div className='bg-pink-100 rounded-xl my-2 mx-1 px-2 py-2'>4th April-South Delhi Weightlifting Competition</div>
        <div className='bg-blue-100 rounded-xl my-2 mx-1 px-2 py-2'>4th April-South Delhi Weightlifting Competition</div>
        <div className='bg-pink-100 rounded-xl my-2 mx-1 px-2 py-2'>4th April-South Delhi Weightlifting Competition</div>
        <div className='bg-blue-100 rounded-xl my-2 mx-1 px-2 py-2'>4th April-South Delhi Weightlifting Competition</div>
    </div>
    </div>
  )
}
