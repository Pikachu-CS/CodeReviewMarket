/**
 * 
 * @Author Aaron
 * @Date  06/7/22 
 * @React Component: Listing Box
 * @description Prop Drilling from Container: - Name | Details | Pay
 */
import { BoxState } from '../../types/types';
import React from 'react';
import ListingsContainer from '../containers/listingContainer';
// import {  } from './../types/types'

function ListingBox(props: BoxState): JSX.Element {
  // const handleBoxClick = props.handleBoxClick;
  // // button, id, content
  // return <button className='listingBox' onClick={handleBoxClick}></button>
  return(
  <div className="listingBox" id="listingBox">
    <div className="projectName" id="name">{props.projectName}</div>
    <div className="projectDetails" id="details">{props.projectDetails}</div>
    <div className="projectPay" id="pay">{props.payRange}</div>
  </div>
  )

}

export default ListingBox;