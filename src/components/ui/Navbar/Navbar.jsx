import { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    state = {}
    render() {
        return  <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                        <button type="button" className="btn btn-home"/>
                        <button type="button" className="btn btn-new-entry"/>
                        <button type="button" className="btn btn-settings"/>
                    </div>
                </nav>;
    }
}

export default Navbar;
