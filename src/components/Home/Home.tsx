import React, { useEffect, useRef, useState } from "react";
import { layouts } from "./layouts";
import { calendarDate } from "../../types/calendarDate";
import { getSubscriptions } from "../../api/subscription";
import {
  Responsive as ResponsiveGridLayout,
  WidthProvider,
} from "react-grid-layout";
import { user } from "../../types/user";
import { subscription } from "../../types/subscription";
import CalendarCard from "./CalendarCard";
import { service } from "../../types/service";
import ListCard from "./ListCard";
const ResponsiveReactGridLayout = WidthProvider(ResponsiveGridLayout);

const services: service[] = [];

const serviceDates: calendarDate[] = [];

const subscriptions: subscription[] = [];

const curUser: user = {
  displayName: "User",
  auth: "auth",
  subscriptions: [],
  contacts: [],
};

const Home = () => {
  const [calendarDates, setCalendarDates] = useState(serviceDates);
  const [serviceList, setServiceList] = useState(services);
  const [serviceSubscriptions, setServiceSubscriptions] =
    useState(subscriptions);

  const getSubscriptionRenewalDates = (
    data: subscription[]
  ): calendarDate[] => {
    return data.map((sub) => ({
      year: sub.renewalDate.getFullYear(),
      month: sub.renewalDate.getMonth(),
      day: sub.renewalDate.getDate(),
      className: sub.category || "",
    }));
  };

  useEffect(() => {
    getSubscriptions(curUser.displayName).then((data: subscription[]) =>
      setCalendarDates(getSubscriptionRenewalDates(data))
    );
  }, []);

  return (
    <React.Fragment>
      <ResponsiveReactGridLayout
        onResize={(e) => console.log("resized", e)}
        onLayoutChange={(c, a) => console.log("layout", "current", c, "all", a)}
        className="layout"
        layouts={layouts}
        rowHeight={100}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      ></ResponsiveReactGridLayout>
      <div key="calendar">
        <CalendarCard susbcriptionDates={calendarDates} />
      </div>
      <div key="list">
        <ListCard subscriptions={serviceSubscriptions} />
      </div>
    </React.Fragment>
  );
};

export default Home;
