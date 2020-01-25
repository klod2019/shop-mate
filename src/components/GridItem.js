import React from "react";

export default class GridItem extends React.Component {
  render() {
    const { itemName, itemImage } = this.props;

    return (
      <div className="gridItem">
        <img src={require("../images/product_images/" + itemImage)} />
        <div className="products">
          <p>{itemName}</p>{" "}
        </div>
        <button className="buyNow">Buy Now </button>
      </div>
    );
  }
}
