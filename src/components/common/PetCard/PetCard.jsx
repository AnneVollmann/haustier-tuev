import { Component } from "react";
import "./PetCard.css"

class PetCard extends Component {
  state = {}
  render() {
    return <div className="pet-card card" styles={{ width: '18rem' }}>
              <img src={"/assets/img/pet-" + this.props.img + ".png"} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{this.props.petName}</h5>
                <button type="button" class="btn btn-add"/>
              </div>
            </div>;
  }
}

export default PetCard;