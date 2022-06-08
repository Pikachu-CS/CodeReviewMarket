/**
 * 
 * @Author Aaron
 * @Date  06/7/22 
 * @React Component: Listing Box
 * @description Prop Drilling from Container: - Name | Details | Pay
 */
import React from 'react';
import { BoxState } from '../../types/types';

function ListingBox(props: BoxState): JSX.Element {
  // const handleBoxClick = props.handleBoxClick;
  // // button, id, content
  // return <button className='listingBox' onClick={handleBoxClick}></button>
  // return(
  // <div className="listingBox" id="listingBox">
  //   <div className="projectName" id="name">{props.projectName}</div>
  //   <div className="projectDetails" id="details">{props.projectDetails}</div>
  //   <div className="projectPay" id="pay">{props.payRange}</div>
  // </div>
  // )
 return ( 
  <div className=" flex flex-col h-fit box-border border-4 border-black text-center w-64">
  <label>Project Name</label>
  <h3>{props.projectName}</h3>
  <h3> Project Details {props.projectDetails}</h3>
  <h3> Pay Range{props.payRange}</h3>
  <h3> Code Snippet 
    <code>
    {props.codeSnippet}
    </code>
    </h3>
  <h3> Details {props.details}</h3>
  <h3> Contacts {props.contact}</h3>

  </div>
 )
}

export default ListingBox;