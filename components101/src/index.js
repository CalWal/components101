import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

// used for CommentApp
import CommentDetail from "./comments/CommentDetail";
import ApprovalCard from "./comments/ApprovalCard";

// used for SeasonsApp
import SeasonDisplay from "./seasons/SeasonDisplay";

const CommentApp = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author={faker.name.findName()}
          text={faker.lorem.words()}
          time={"Monday"}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author={faker.name.findName()}
          text={faker.lorem.words()}
          time={"Tuesday"}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author={faker.name.findName()}
          text={faker.lorem.words()}
          time={"Wednesday"}
        />
      </ApprovalCard>
    </div>
  );
};

const SeasonsApp = () => {
  return (
    <div>
      <SeasonDisplay />
    </div>
  );
};

ReactDOM.render(<SeasonsApp />, document.querySelector("#root"));
