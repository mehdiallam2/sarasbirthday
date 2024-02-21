import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
          143
        </motion.h1>
      </div>
    </div>
  );
}

export default Secret;
