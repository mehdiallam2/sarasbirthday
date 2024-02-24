import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Snowfall } from "react-snowfall";

function NotFound() {
  return (
    <main className="notFound">
      <div className="notFound-countainer">
        <motion.h1 className="notFound-title">Page Not found</motion.h1>
        <motion.div>
          <Link className="notFound-link" to="/">
            Go to Home
          </Link>
        </motion.div>
      </div>
      <Snowfall snowflakeCount={80} style={{ opacity: 0.5 }} color="#7360DF" />
    </main>
  );
}

export default NotFound;
