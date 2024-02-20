function Wish({ name }: { name: string }) {
  return (
    <div className="wish">
      <div className="wish-container">
        <h1 className="wish-title">
          Happy Birthday <span className="highlight">{name}</span> !!!
        </h1>
      </div>
    </div>
  );
}

export default Wish;
