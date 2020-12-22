import DB from "helpers/db";
import Link from "next/link";
import React, { Component } from "react";
import { Collapse } from "reactstrap";
import AuthMenu from "./AuthMenu";
import Navigation from "./Navigation";
import Switch from "./Switch";

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      sticky: false,
      open: false,
    };
  }

  scroollHandler = (e) => {
    const scroollTop = e.target.scrollingElement.scrollTop;
    if (scroollTop > 60) {
      this.setState({ sticky: true });
    } else {
      this.setState({ sticky: false });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.scroollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scroollHandler);
  }

  render() {
    const userData = DB.get("userData");
    const { isDark } = this.props;

    return (
      <header
        id="topnav"
        className={
          this.state.sticky
            ? "defaultscroll sticky nav-sticky"
            : "defaultscroll  sticky py-1"
        }
      >
        <div className="container">
          <div className="logo d-lg-none">
            <Link href="/">
              <img
                src={require("../../../assets/images/logo-dark.png")}
                height="24"
                alt=""
              />
            </Link>
          </div>
          <div className="logo d-none d-lg-block">
            <Link href="/">
              <img
                src={
                  this.state.sticky
                    ? require("../../../assets/images/logo-dark.png")
                    : isDark
                    ? require("../../../assets/images/logo-dark.png")
                    : require("../../../assets/images/logo-light.png")
                }
                height="24"
                alt=""
              />
            </Link>
          </div>

          <AuthMenu isDark={isDark} />
          <div className="menu-extras">
            <div className="menu-item">
              <a
                className={
                  this.state.open ? "navbar-toggle open" : "navbar-toggle"
                }
                onClick={() => this.setState({ open: !this.state.open })}
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
            </div>
          </div>
          <div className="menu-extras">
            <div className="menu-item">
              <Switch />
            </div>
          </div>
          <Collapse isOpen={this.state.open} id="navigation">
            <Navigation isDark={isDark} />
          </Collapse>
        </div>
      </header>
    );
  }
}
