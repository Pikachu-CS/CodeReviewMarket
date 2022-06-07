import * as React from 'react';
import { hot } from "react-hot-loader/root";
import ProfileBox from './components/ProfileBoxComp';
import ProfileModal from './components/ProfileModalComp';
class App extends React.Component {
  render() {
    return (
      <div className='h-56 grid grid-cols-3 gap-4 content-between'>
        <h1 className="text-3xl text-black font-bold">
          Reinforcment Project
        </h1>
        <ProfileBox firstName={"Adam"} yearsExp= {"0-5"} rate= {"$40/h"} lastName={"Lang"} description={"Here is our description Here is our description Here is our description Here is our description Here is our description"} hobbies={"This is my hobby This is my hobby This is my hobby This is my hobby This is my hobby This is my hobby This is my hobby"}></ProfileBox>
        <ProfileModal></ProfileModal>
      </div>
    );
  }
}

export default hot(App);