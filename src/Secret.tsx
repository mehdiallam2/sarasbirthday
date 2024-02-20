import { motion } from "framer-motion";
import Heart from "./assets/images/heart.png";
function Secret() {
  return (
    <div className="secret">
      <div className="secret-content">
        I Love You
        <motion.img
          className="secret-image"
          src={Heart}
          initial={{ scale: 1 }}
          animate={{ scale: 0.8 }}
          transition={{ repeat: Infinity, repeatDelay: 0.8 }}
        />
      </div>
    </div>
  );
}

export default Secret;
