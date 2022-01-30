import React, { useEffect, useRef, useState } from "react";
import { layouts } from "./layouts";
import { calendarDate } from "../../types/calendarDate";
import { getUser } from "../../api/user";
import {
  Responsive as ResponsiveGridLayout,
  WidthProvider,
} from "react-grid-layout";
import { user } from "../../types/user";
import { subscription } from "../../types/subscription";
import CalendarCard from "./CalendarCard";
import { service } from "../../types/service";
import ListCard from "./ListCard";
import { getServices } from "../../api/service";
const ResponsiveReactGridLayout = WidthProvider(ResponsiveGridLayout);

const services: service[] = [];

const serviceDates: calendarDate[] = [];

const subscriptions: subscription[] = [];

const curUser: user = {
  displayName: "User",
  user_id: "u1",
  password: "password",
  subscriptions: [],
  contacts: [],
};

const Home = () => {
  const [calendarDates, setCalendarDates] = useState(serviceDates);
  const [serviceList, setServiceList] = useState(services);
  const [serviceSubscriptions, setServiceSubscriptions] =
    useState(subscriptions);

  const getSubscriptionRenewalDates = (
    serviceData: service[],
    subsData: subscription[]
  ): calendarDate[] => {
    return subsData.map((sub) => ({
      year: new Date(sub.subscriptionDate).getFullYear(),
      month: new Date(sub.subscriptionDate).getMonth(),
      day: new Date(sub.subscriptionDate).getDate(),
      className: serviceData.filter(
        (x) => x.name.toUpperCase() === sub.service_id.toUpperCase()
      )[0].category,
    }));
  };

  useEffect(() => {
    getUser(curUser.user_id)
      .then(async (data: user) => {
        setServiceList(await getServices());
        return { serviceList: serviceList, subscriptions: data.subscriptions };
      })
      .then((jsonData) => {
        setServiceSubscriptions(jsonData.subscriptions);
        setCalendarDates(
          getSubscriptionRenewalDates(
            jsonData.serviceList,
            jsonData.subscriptions
          )
        );
      });
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
      >
        <div key="calendar" className="home-card">
          {console.log(calendarDates)}
          <CalendarCard susbcriptionDates={calendarDates} />
        </div>
        <div key="list" className="home-card">
          <ListCard subscriptions={serviceSubscriptions} />
        </div>
      </ResponsiveReactGridLayout>
    </React.Fragment>
  );
};

export default Home;
