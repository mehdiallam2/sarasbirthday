import { Snowfall } from "react-snowfall";
import { ReactTyped } from "react-typed";

function Wish({ name }: { name: string }) {
  return (
    <div className="wish">
      <div className="wish-container">
        <h1 className="wish-title">
          Happy Birthday <span className="highlight">{name}</span> !!!
        </h1>
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
      </div>
      <Snowfall snowflakeCount={80} style={{ opacity: 0.4 }} color="#7360DF" />
    </div>
  );
}

export default Wish;
