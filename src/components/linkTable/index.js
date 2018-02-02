"use strict";
import React, { Component } from 'react';
import Table from '../table';
import './style';

//Modify the data for the parent-child relationship
function update(data){
  //Defines the root parent class collection
  let parent = [];
  for(let i=0;i<data.length;i++){
    if(!data[i].parentId){
       parent.push(data[i]);
    }
    data[i].children = [];
    for(let j=0;j<data.length;j++){
       if(data[j].parentId == data[i].id){
           data[i].children.push(data[j]);
       }
    }
    if(data[i].children.length <= 0){
       data[i].children = undefined;
    }
  }
  return parent;
}
/**Link Tracking Table**/
export default function LinkTable(props){
  const {data = []} = props;
  const list = update(data);
  return(
    <div className="link-table">
        <Table
         {...props}
         dataSource={list}
        />
    </div>
    );
}
