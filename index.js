const Box = (props) => {
  const { boxSizing, text } = props;
  return (
    <div className={boxSizing}>
      <p className={`text-formate`}>{text}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <div>
      <h1 className="heading">Boxes</h1>
    </div>
    <div className="boxes-container">
      <Box boxSizing="small-box" text="Small" />
      <Box boxSizing="medium-box" text="Medium" />
      <Box boxSizing="large-box" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
