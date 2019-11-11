import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        avatar={faker.image.avatar()}
        author={faker.name.findName()}
        text={faker.lorem.words()}
        time={"Monday"}
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        author={faker.name.findName()}
        text={faker.lorem.words()}
        time={"Tuesday"}
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        author={faker.name.findName()}
        text={faker.lorem.words()}
        time={"Wednesday"}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
