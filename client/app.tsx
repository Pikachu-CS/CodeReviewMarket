import * as React from 'react';
import { hot } from "react-hot-loader/root";
import ListingsContainer from "./components/containers/ListingContainer"
import ProfileBox from './components/ProfileBoxComp';
import ProfileModal from './components/ProfileModalComp';
import ProfilesContainer from './containers/ProfileContainer';
import { BoxState } from './types/types';
const ProfilesArray = [ {
  firstName : "1 First",
  lastName: "1 Last",
  yearsExp: "1 Years",
  rate: "1 Rate",
  description: "1 descr",
  hobbies: "1 hobbies"
}, 
{
  firstName : "2 First",
  lastName: "2 Last",
  yearsExp: "2 Years",
  rate: "2 Rate",
  description: "2 descr",
  hobbies: "2 hobbies"
},
{
  firstName : "3 First",
  lastName: "3 Last",
  yearsExp: "3 Years",
  rate: "3 Rate",
  description: "3 descr",
  hobbies: "3 hobbies"
}, 
{
  firstName : "1 First",
  lastName: "1 Last",
  yearsExp: "1 Years",
  rate: "1 Rate",
  description: "1 descr",
  hobbies: "1 hobbies"
}, 
{
  firstName : "2 First",
  lastName: "2 Last",
  yearsExp: "2 Years",
  rate: "2 Rate",
  description: "2 descr",
  hobbies: "2 hobbies"
},
{
  firstName : "3 First",
  lastName: "3 Last",
  yearsExp: "3 Years",
  rate: "3 Rate",
  description: "3 descr",
  hobbies: "3 hobbies"
},
{
  firstName : "1 First",
  lastName: "1 Last",
  yearsExp: "1 Years",
  rate: "1 Rate",
  description: "1 descr",
  hobbies: "1 hobbies"
}, 
{
  firstName : "2 First",
  lastName: "2 Last",
  yearsExp: "2 Years",
  rate: "2 Rate",
  description: "2 descr",
  hobbies: "2 hobbies"
},
{
  firstName : "3 First",
  lastName: "3 Last",
  yearsExp: "3 Years",
  rate: "3 Rate",
  description: "3 descr",
  hobbies: "3 hobbies"
},
{
  firstName : "1 First",
  lastName: "1 Last",
  yearsExp: "1 Years",
  rate: "1 Rate",
  description: "1 descr",
  hobbies: "1 hobbies"
}, 
{
  firstName : "2 First",
  lastName: "2 Last",
  yearsExp: "2 Years",
  rate: "2 Rate",
  description: "2 descr",
  hobbies: "2 hobbies"
},
{
  firstName : "3 First",
  lastName: "3 Last",
  yearsExp: "3 Years",
  rate: "3 Rate",
  description: "3 descr",
  hobbies: "3 hobbies"
}]

const ListingsArray: BoxState[] = [ {
  projectDetails: "these are the example project Details",
  projectName: 'Either the name of the project or person i guess',
  payRange: 20,
}, 
{
  projectDetails: "these are the example project Details",
  projectName: ' the name of the project',
  payRange: 10,
}, {
  projectDetails: "more project Details",
  projectName: 'name of the person i guess',
  payRange: 30,
}]
class App extends React.Component {
  render() {
    return (
      <div>
      <div>
        <h1 className="text-4xl text-white bg-black">
      Code Review Market
        </h1>
        <ListingsContainer listingsArray= {ListingsArray} ></ListingsContainer>
      </div>
      <div>
        {/* <ProfileBox firstName={"Adam"} yearsExp= {"0-5"} rate= {"$40/h"} lastName={"Lang"} description={"Here is our description Here is our description Here is our description Here is our description Here is our description"} hobbies={"This is my hobby This is my hobby This is my hobby This is my hobby This is my hobby This is my hobby This is my hobby"}></ProfileBox>
        <ProfileModal></ProfileModal> */}
        <ProfilesContainer profilesArray = {ProfilesArray}></ProfilesContainer>
      </div>
      </div>
    );
  }
}

export default hot(App);