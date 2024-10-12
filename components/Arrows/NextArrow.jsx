function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#817f7f",
        padding: "0px",
        margin: "0px",
      }}
      onClick={onClick}
    />
  );
}
export default SampleNextArrow;
