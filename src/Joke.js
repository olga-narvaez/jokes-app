import React from "react";

export default function Joke(props) {
  return (
    <div className="jokes">
      {props.setup && <h3> Setup: {props.setup} </h3>}
      <p className="light-text"> Punchline: {props.punchline} </p>
    </div>
  );
}
/**export default function Joke(props) {
  if (!props.setup) {
    return <h3> {props.punchline} </h3>;
  } else {
    return (
      <div>
        <h3> {props.setup} </h3>
        <h3 className="light-text"> {props.punchline} </h3>
      </div>
    );
  }
}
 */