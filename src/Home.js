import React from "react";
import { withRouter } from "react-router";

// const Home = () => {
//   return <h3>Home</h3>;
// };

class Home extends React.Component {
  componentDidMount() {
    console.log("this.props.route", this.props.route);
    if (this.props.route.path === "/home") {
      this.props.router.setRouteLeaveHook(
        this.props.route,
        this.routerWillLeave
      );
    }
  }
  routerWillLeave(nextLocation) {
    return "Are you sure you want to leave?";
  }

  render() {
    return <h3>Home</h3>;
  }
}

export default withRouter(Home);
