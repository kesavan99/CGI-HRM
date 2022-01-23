import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
export default function Calender() {
  
  const [value, onChange] = useState(new Date());
function Hi(){
 console.log(value)
}

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        onClickDay={Hi}
      />
    </div>
  );



}
