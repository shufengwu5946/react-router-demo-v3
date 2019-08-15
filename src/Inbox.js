import React from "react";
const Inbox = props => {
  return (
    <div>
      <h3>Inbox</h3>
      {props.children}
    </div>
  );
};

// 只适this.props.params.id用于 /message/:id 形式的路由参数
// 若要获取 ?id=yourId 形式的参数，使用this.props.location.query.id
export const Message = props => {
  return (
    <h3>
      Message {props.params.id} {props.location.query.address}
    </h3>
  );
};
export default Inbox;
