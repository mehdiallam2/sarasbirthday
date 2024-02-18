interface sara {
  name: string;
}

const Wish = ({ name }: sara) => {
  return (
    <div className="wish">
      <div className="wish-message">
        Happy Birthday <span className="highlight">{name}</span> !!!
      </div>
    </div>
  );
};

export default Wish;
