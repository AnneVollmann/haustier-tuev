import { Component } from "react";
import "./HomePage.css"
import PetCard from "../../components/common/PetCard/PetCard";

class HomePage extends Component {
    state = {  } 
    render() { 
        return  <div className='pets-list'>
                    <PetCard petName="meeri a" img="1"/>
                    <PetCard petName="meeri b" img="2"/>
                    <PetCard petName="meeri c" img="3"/>
                </div>;
    }
}
 
export default HomePage;