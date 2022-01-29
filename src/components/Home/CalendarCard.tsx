import React, { useEffect, useRef, useState } from "react";
import Card from "@mui/material/Card";
import { calendarDate } from "../../types/calendarDate";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import { CardContent } from "@mui/material";
import "../../assets/css/Component.scss";

const today: calendarDate = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
  day: new Date().getDate(),
  className: "today",
};

interface CalendarCardProps {
  susbcriptionDates: calendarDate[];
}

const CalendarCard = (props: CalendarCardProps) => {
  const [todayDay, setTodayDay] = useState(today);
  const [serviceDates, setServiceDates] = useState(props.susbcriptionDates);
  return (
    <Card
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CardContent>
        <Calendar
          value={todayDay}
          shouldHighlightWeekends
          customDaysClassName={serviceDates}
        />
      </CardContent>
    </Card>
  );
};

export default CalendarCard;
