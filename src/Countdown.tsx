import { motion } from "framer-motion";
import Wish from "./Wish";

interface dataType {
  seconds: number;
  hours: number;
  minutes: number;
  days: number;
  isItBday: boolean;
}

interface data {
  countdownData: dataType;
  name: string;
}

const Countdown = ({ countdownData, name }: data) => {
  if (!countdownData.isItBday) {
    return (
      <div className="countdown-container">
        <motion.h1
          className="heading"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
        >
          <span className="highlight">{name}'s</span> Birthday Is In
        </motion.h1>
        <motion.div
          className="countdown-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          <div className="countdown-box">
            {countdownData.days}
            <span className="legend">Days</span>
          </div>
          <div className="countdown-box">
            {countdownData.hours}
            <span className="legend">Hours</span>
          </div>
          <div className="countdown-box">
            {countdownData.minutes}
            <span className="legend">Minutes</span>
          </div>
          <div className="countdown-box">
            {countdownData.seconds}
            <span className="legend">Seconds</span>
          </div>
        </motion.div>
      </div>
    );
  } else {
    return <Wish name={name} />;
  }
};

export default Countdown;
