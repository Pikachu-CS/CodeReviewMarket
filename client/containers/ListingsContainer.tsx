
import * as React from 'react';
import ListingBox from '../components/boxes/ListingBox';
import { BoxState } from '../types/types';
import ProfilesContainer from './ProfileContainer';
import { Link } from 'react-router-dom';
// function ListingsContainer(props: {listingsArray: BoxState[]}): any {
//   const listings: any[] = [];

//   for(let i = 0; i < props.listingsArray.length; i++) {
//     listings.push(
//         <ListingBox
//         projectDetails={props.listingsArray[i].projectDetails}
//         projectName={props.listingsArray[i].projectName}
//         payRange={props.listingsArray[i].payRange}
//       ></ListingBox>
//     );
//   }
//   return (
//     <div>
//       <h2>Listings</h2>
//       {listings}
//     </div>
//   );
// }
// export default ListingsContainer

const ListingsContainer = (props: {listingsArray: BoxState[]}): any => {
  const listings: any[] = []
      for (let i = 0; i < props.listingsArray.length; i++) {
        listings.push(<ListingBox 
          projectName ={props.listingsArray[i].projectName} 
          projectDetails  = {props.listingsArray[i].projectDetails} 
          payRange  = {props.listingsArray[i].payRange} 
          codeSnippet  = {props.listingsArray[i].codeSnippet}
          details  = {props.listingsArray[i].details} 
          contact  = {props.listingsArray[i].contact}></ListingBox>)
      }
      return (
        <div> 
          <Link to='/profiles'>
            <button>
            <button className ="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">See Profiles</button>
            </button>
          </Link>
            <div className = "flex justify-end p-3 grid-cols-1">
              {listings}
            </div>
            </div>
          );
 }
 export default ListingsContainer
