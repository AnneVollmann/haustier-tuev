import { Component } from "react";
import "./HomePage.css"
import PetCard from "../../components/common/PetCard/PetCard";

class HomePage extends Component {
    state = {  } 
    render() { 
        return  <div className='pets-list'>
                    <PetCard petName="Pauli" img="1"/>
                    <PetCard petName="Frieda" img="3"/>
                    <PetCard petName="Elli" img="2"/>
                </div>;
    }
}
 
export default HomePage;