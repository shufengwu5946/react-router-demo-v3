import React from "react";
import { withRouter } from "react-router";

// const Home = () => {
//   return <h3>Home</h3>;
// };

class Home extends React.Component {
  componentDidMount() {
    this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
  }
  routerWillLeave(nextLocation) {
    return "Your work is not saved! Are you sure you want to leave?";
  }

  render() {
    return <h3>Home</h3>;
  }
}

export default withRouter(Home);
