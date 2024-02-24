import { useState, useEffect } from "react";
import Countdown from "../components/Countdown";
import { motion } from "framer-motion";
import { Snowfall } from "react-snowfall";
import Wish from "../components/Wish";

interface Info {
  name: string;
  day: number;
  month: number;
}

function Home({ name, day, month }: Info) {
  const [state, setState] = useState({
    seconds: 0,
    hours: 0,
    minutes: 0,
    days: 0,
    isItBday: false,
  });

  // get current time
  const currentTime = new Date();
  // get current year
  const currentYear = currentTime.getFullYear();

  // Getting the Birthday in Data Object
  // WE subtract 1 from momnth ; Months start from 0 in Date Object
  // Bithday Boolean
  const isItBday =
    currentTime.getDate() === day && currentTime.getMonth() === month - 1;

  useEffect(() => {
    setInterval(() => {
      function countdown() {
        // Getting the Current Date
        const dateAtm = new Date();

        // if the Birthday has passed
        // then set the Birthday countdown for next year
        let birthdayDay = new Date(currentYear, month - 1, day);
        if (dateAtm > birthdayDay) {
          birthdayDay = new Date(currentYear + 1, month - 1, day);
        } else if (dateAtm.getFullYear() === birthdayDay.getFullYear() + 1) {
          birthdayDay = new Date(currentYear, month - 1, day);
        }

        // Getitng Current Time
        const currentTime = dateAtm.getTime();
        // Getting Birthdays Time
        const birthdayTime = birthdayDay.getTime();

        // Time remaining for the Birthday
        const timeRemaining = birthdayTime - currentTime;

        let seconds = Math.floor(timeRemaining / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);

        seconds %= 60;
        minutes %= 60;
        hours %= 24;

        // Setting States
        setState((prevState) => ({
          ...prevState,
          seconds,
          minutes,
          hours,
          days,
          isItBday,
        }));
        // console.log(`${days}:${hours}:${minutes}:${seconds} , ${isItBday}`);
      }
      if (!isItBday) {
        countdown();
      } else {
        setState((prevState) => ({
          ...prevState,
          isItBday: true,
        }));
      }
    }, 1000);
  }, [currentYear, day, isItBday, month]);

  let birth = new Date(currentYear, month - 1, day);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let monthBday = monthNames[birth.getMonth()];

  if (isItBday) return <Wish name={name} />;
  return (
    <main className="home">
      <div className="home-container">
        <Countdown countdownData={state} name={name} />
        <motion.div
          className="birthdate"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
        >
          Birth-Date: {day} {monthBday} {currentYear}
        </motion.div>
      </div>
      <Snowfall color="white" />
    </main>
  );
}

export default Home;
