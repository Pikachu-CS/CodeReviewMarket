/**
 * @method populateListing
 * @description - renders listings with props
 */

import * as React from 'react';
import ListingBox from '../components/boxes/ListingBox'
import { BoxState } from '../types/types';

// export type BoxState = {
//   projectName: string;
//   projectDetails: string;
//   payRange: number;
// };

function ListingsContainer(props: {listingsArray: BoxState[]}): any {
  const listings: any[] = [];

  for (let i = 0; i < props.listingsArray.length; i++) {
    listings.push(
        <ListingBox
        projectDetails={props.listingsArray[i].projectDetails}
        projectName={props.listingsArray[i].projectName}
        payRange={props.listingsArray[i].payRange}
      ></ListingBox>
    );
  }
  return (
    <div className="listingContainer">
      <h2>Listings</h2>
      {listings}
    </div>
  );
}
export default ListingsContainer