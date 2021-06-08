import "../Css/counter.css";
const Counter = (props) => {
  return (
    <>
      <div className="container">
        <div className="flex-container">
          <div className="clock counter">
            <i className="far fa-clock"></i>
          </div>
          <div className="col counter">{props.six} </div>
          <div className="col counter">{props.five}</div>
          <div className="col counter">{props.four}</div>
          <div className="col counter">{props.three}</div>
          <div className="col counter">{props.two}</div>
          <div className="col counter">{props.one}</div>
          <div className="unit counter">S</div>
        </div>
      </div>
    </>
  );
};
export default Counter;
