import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const Calender = () => {
    const [date, setDate] = useState(new Date());
    const onChange = date => {
        setDate(date)
    }
    return (
        <div className='flex justify-center items-center'>
            <Calendar onChange={onChange} value={date} />
        </div>
    );
};

export default Calender;