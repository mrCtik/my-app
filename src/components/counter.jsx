const Counter = (props) => {
  const { value } = props;

  const badgeClasses = `badge m-2 bg-${value === 0 ? "warning" : "primary"}`;

  // const getBadgeClasses = () => {
  //   let classes = "badge m-2 ";
  //   classes += value === 0 ? "bg-warning" : "bg-primary";
  //   return classes;
  // };
  return (
    <div>
      <span> {props.name}</span>
      <span className={badgeClasses}>{value || "empty"}</span>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => props.onIncrement(props.id)}
      >
        +
      </button>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => props.onDecrement(props.id)}
      >
        -
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
