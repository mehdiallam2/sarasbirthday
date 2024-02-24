import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Snowfall } from "react-snowfall";

function Secret() {
  const navigate = useNavigate();
  window.addEventListener("dblclick", () => navigate("/"));
  return (
    <div className="secret">
      <div className="secret-container">
        <motion.h1
          className="secret-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
        >
          I Love You
        </motion.h1>
      </div>
      <Snowfall snowflakeCount={80} style={{ opacity: 0.5 }} color="#7360DF" />
    </div>
  );
}

export default Secret;
