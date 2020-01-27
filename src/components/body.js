import React from "react";
import suit from "../images/suit.png";
import GridItem from "./GridItem";
import fetchItems from "../cnx/fetchItems";

export default class Body extends React.Component {
  state = {
    items: []
  };

  async componentDidMount() {
    const response = await fetchItems();

    this.setState({ items: response });
  }

  render() {
    return (
      <div className="bodycontainer">
        <div className="bodyimage">
          <img src={suit} className="bi" />
          <p className="menswear">Mens Wear</p>
        </div>
        <div className="leftcat">
          <p className="catimg">Acessories</p>
          <p className="catimg">ASOS Basic Tops</p>
          <p className="catimg"> Bags</p>
          <p className="catimg">Caps & Hats</p>
          <p className="catimg">Gifts</p>
          <p className="catimg">Grooming</p>
        </div>
        <div className="midcat">
          <p className="catimg"> Hoodies & Sweatshirts</p>
          <p className="catimg">Jackets & Coats</p>
          <p className="catimg">Jeans</p>
          <p className="catimg">Jewellery</p>
          <p className="catimg">Joggers</p>
          <p className="catimg">Jumpers & Cardigans</p>
        </div>
        <div className="rightcat">
          <p className="catimg">Leather Jackets</p>
          <p className="catimg">Long Sleeve T-shirt</p>
          <p className="catimg">Loungewear</p>
          <p className="catimg">Oversized & Longline</p>
          <p className="catimg"> Polo Shirts</p>
          <p className="catimg">Shirts</p>
        </div>
        <div className="bodycontent">
          <div className="sideNav">
            <p className="filter">Filter Items</p>
            <hr></hr>
            <p className="gender">Gender</p>
            <p className="catz">categories</p>
            <hr></hr>
            <p className="colors">Colors</p>
            <div className="colorpicker">
              <div className="c1"></div>
              <div className="c2"></div>
              <div className="c3"></div>
              <div className="c4"></div>
              <div className="c5"></div>
              <div className="c6"></div>
            </div>
            <hr></hr>
            <p className="sizes"> Sizes </p>
          </div>
          <div className="grid-container">
            {this.state.items.map(element => (
              // calls each element of the array and return it in an array that contains the result such as element
              <GridItem itemName={element.name} itemImage={element.thumbnail} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
