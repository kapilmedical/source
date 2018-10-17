import React from "react";
import classNames from "classnames";
import SiteNav from './site-nav'
import "./MainHeader.scss";
import backgroundImg from "./background.jpeg";

class MainHeader extends React.Component {
  render() {
    const { children, cover } = this.props;

    const classes = classNames("main-header", this.props.className, {
      "no-cover": !cover
    });

    const getStyle = () => {
      if (cover) {
        return {
          backgroundImage: `url("${backgroundImg}")`,
          backgroundPosition: '0% 20%'
        };
      }
      return null;
    };

    return (
      <header className={classes} style={getStyle()}>
        {children}
      </header>
    );
  }
}

export default MainHeader;
