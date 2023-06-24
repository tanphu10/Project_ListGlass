import React, { Component } from "react";
import "./style.css";
import { dataArr } from "./GlassEye";
// import img1 from "./glassesImage/background.jpg";
export default class ListEye extends Component {
  state = {
    glass: dataArr,
    detail: {},
  };
  handleChangeColor = (url, name, desc, price) => {
    this.setState({
      detail: {
        url: url,
        price: price,
        name: name,
        desc: desc,
      },
    });
  };

  render() {
    const { url, name, desc, price } = this.state.detail;
    return (
      <div>
        <div className="container">
          <h1 className="text-center">TRY GLASSES APP ONLINE</h1>
          <div className="banner">
            <img src={`./glassesImage/model.jpg`} classname="" />
            <div className="anhKinh">
              <img src={url} classname="" />
            </div>
            <div className="background">
              <h3 className="text-danger">{price}$</h3>
              <h3 className="">{name}</h3>
              <p className="">{desc}</p>
            </div>
            <div className="row">
              {dataArr.map(({ name, url, desc, price }, id) => {
                return (
                  <div key={id} className="col-4">
                    <div className="border border-dark">
                      <img
                        src={url}
                        onClick={() => {
                          this.handleChangeColor(url, name, desc, price);
                        }}
                        alt="imgGlass"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
