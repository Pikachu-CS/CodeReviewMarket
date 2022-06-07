import * as React from 'react';
import { hot } from "react-hot-loader/root";
import ProfileBox from './components/ProfileBoxComp';
import ProfileModal from './components/ProfileModalComp';
import ProfilesContainer from './containers/ProfileContainer';
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


class App extends React.Component {
  render() {
    return (
      <div>
        {/* <ProfileBox firstName={"Adam"} yearsExp= {"0-5"} rate= {"$40/h"} lastName={"Lang"} description={"Here is our description Here is our description Here is our description Here is our description Here is our description"} hobbies={"This is my hobby This is my hobby This is my hobby This is my hobby This is my hobby This is my hobby This is my hobby"}></ProfileBox>
        <ProfileModal></ProfileModal> */}
        <ProfilesContainer profilesArray = {ProfilesArray}></ProfilesContainer>



      </div>
    );
  }
}

export default hot(App);