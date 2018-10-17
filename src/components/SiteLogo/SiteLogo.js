import React, { Component } from "react";
import Link from "gatsby-link";
import "./SiteLogo.scss";

class SiteLogo extends Component {
  render() {
    const { logo, url, title } = this.props;
    if (logo) {
      return (
        <Link className="site-logo" to={url || "/"}>
          {/* style={{ boxShadow: "none" }}> */}
          <img src={logo} alt={title} />
        </Link>
      );
    }
    return null;
  }
}

export default SiteLogo;
