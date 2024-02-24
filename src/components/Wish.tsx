import { Snowfall } from "react-snowfall";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

function Wish({ name }: { name: string }) {
  return (
    <div className="wish">
      <div className="wish-container">
        <motion.h1
          className="wish-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
        >
          Happy Birthday <span className="highlight">{name}</span> !!!
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
        >
          <ReactTyped
            className="wish-wish"
            strings={[
              `Happy birthday ${name}! I hope all your birthday wishes and dreams come true.`,
              "Safe hir hli l cadeau ila makntich aslan hlitih 🙂",
              "Hope you like the notebooks 🙃",
              "Sara dart 16ans akhiran hadir 39lha u hatwal chwiya 😂",
            ]}
            typeSpeed={60}
            backSpeed={60}
            showCursor={false}
            loop
            fadeOut
          />
        </motion.div>
      </div>
      <Snowfall snowflakeCount={80} style={{ opacity: 0.5 }} color="#7360DF" />
    </div>
  );
}

export default Wish;
