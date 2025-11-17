import { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    state = {}
    render() {
        return  <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Home</a>
                        <a className="navbar-brand" href="/">Neuer Eintrag</a>
                        <a className="navbar-brand" href="/">Einstellungen</a>
                    </div>
                </nav>;
    }
}

export default Navbar;
