import React from 'react';

export default class Display extends React.Component{
  render(){
     const Styled={
        color: 'blue'
      }
    return(
      <div>
        <h2>INTERFACE</h2>
        <h3 style={Styled}>CITI INTERFACE</h3>
      </div>
      );
  }
}