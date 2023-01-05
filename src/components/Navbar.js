import { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };
  handleClicked = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="Navbar-logo">
          <i class="fa-solid fa-plane-departure"></i> Thrifty Traveler.
        </h1>

        <div className="menu-icons" onClick={this.handleClicked}>
          <i
            className={this.state.clicked ? "fa-solid fa-xmark" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "Nav-menu active" : "Nav-menu"}>
          {MenuItems.map((items, index) => {
            return (
              <li key={index}>
                <Link className={items.cName} to={items.url}>
                  <i className={items.icon}></i>
                  {items.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
export default Navbar;
