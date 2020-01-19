import React from 'react'
import logo from '../images/logo.png'
import gbr from '../images/gbr.png'
import bag from '../images/bag.png'

export default class Header extends React.Component {

    render() {


        return <><div className="header">  <div className="headerleft"><p className="headertext">hi !</p>
            <p className="headerbutton">Sign in</p> <p className="headertext">or</p> <p className="headerbutton">Register</p> </div>


            <div className="options"> <p className="categories">Daily Deals</p> <p className="categories">Sell</p><p className="categories">Help & Contact </p>
            </div>


            <div className="headerright">
                <img src={gbr}></img>
                <p className="gdp">£ GDP</p>
                <img src={bag} className="baglogo"></img>
                <p className="bag"> Your bag:</p>
            </div>
        </div>

<div className="headertwo">  <img src={logo}></img>


            <div className="optionstwo"> <p className="categories">Women</p> <p className="categories">Men</p><p className="categories">Kids </p>   <p className="categories">Shoes</p> 
            <p className="categories">  Brands </p> 
            </div>


            <input className="searchbar" placeholder="search anything !"></input>
        </div>

</>



     


    }

}
