import { motion } from "framer-motion";

function Secret() {
  return (
    <div className="wish">
      <div className="wish-message">
        We Love You <br />
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 0.8 }}
          transition={{ repeat: Infinity, repeatDelay: 0.8 }}
        >
          ❤️
        </motion.div>
      </div>
    </div>
  );
}

export default Secret;
