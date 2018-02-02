/**
 * [404页面]
 */
"use strict";
import React,{Component} from 'react';

export default function NotFoundPage(props){
  const styleP = {
      textAlign:'center',
      fontFamily:'cursive',
      fontSize:35,
      paddingTop:'14%'
  };
  const styleH = {
      textAlign:'center',
      fontFamily:'cursive',
      fontSize:100,
      paddingBottom:300
  };
  return (
      <div>
          <p style={styleP}>OOPS! - Could not Find it.</p>
          <h1 style={styleH}>404</h1>
      </div>
  );
}
