import React from "react";
import classNames from "classnames";
import "./MainNav.scss";

class MainNav extends React.Component {
  render() {
    const { children, overlay } = this.props;

    const classes = classNames("main-nav", this.props.className, {
      overlay
    });

    return (
      <div className="nav-parent">
        <nav className={classes}>{children}</nav>
        <style jsx>{`
          .nav-parent {
            height: 100%;
            background: linear-gradient(0deg, transparent 60%, hsla(0, 1%, 2%, 0.4));
          }
        `}</style>
      </div>
    );
  }
}

export default MainNav;
