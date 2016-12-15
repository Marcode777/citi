import React from 'react';
import TweenMax from 'gsap';



export default class Display extends React.Component{

  render(){
     const Styled={
        color: 'blue'
      }
    return(
      <div ref="citi">
        <h2>INTERFACE</h2>
        <h3 style={Styled}>CITI INTERFACE</h3>
        <input type="text"/>
      </div>
      );
  }
}