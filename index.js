const Box = (props) => {
  const { text, className } = props;
  return (
    <div className={className}>
      <p>{text}</p>
    </div>
  );
};

const element = (
  <div className="bg">
    <h1 className="head">Boxes</h1>
    <div className="container">
      <Box text="Small" className="small" />
      <Box text="Medium" className="medium" />
      <Box text="Large" className="large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
