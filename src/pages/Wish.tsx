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
            "Happy birthday! I hope all your birthday wishes and dreams come true.",
            "A wish for you on your birthday, whatever you ask may you receive, whatever you seek may you find, whatever you wish may it be fulfilled on your birthday and always. Happy birthday!",
            "This birthday, I wish you abundant happiness and love. May all your dreams turn into reality and may lady luck visit your home today. Happy birthday to one of the sweetest people I’ve ever known",
          ]}
          typeSpeed={60}
          backSpeed={60}
          showCursor={false}
          loop
        />
      </div>
      <Snowfall color="white" />
    </div>
  );
}

export default Wish;
