import * as React from 'react';
import { hot } from "react-hot-loader/root";
import ListingsContainer from './containers/ListingsContainer';
import ProfileBox from './components/ProfileBoxComp';
import ProfileModal from './components/ProfileModalComp';
import ProfilesContainer from './containers/ProfileContainer';
import LandingPage from './containers/LandingPage';
import { BrowserRouter, Router, Route, Link, Routes } from 'react-router-dom';
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
}]

const ListingsArray = [ {
  projectDetails: "these are the example project Details",
  projectName: 'Either the name of the project or person i guess',
  payRange: 20,
  codeSnippet: "5x+13-12=y",
  details: "details",
  contact: "String"
}, 
{
  projectDetails: "these are the example project Details",
  projectName: ' the name of the project',
  payRange: 10,
  codeSnippet: "5x+13-12=y",
  details: "details",
  contact: "String"
}, {
  projectDetails: "more project Details",
  projectName: 'name of the person i guess',
  payRange: 30,
  codeSnippet: "5x+13-12=y",
  details: "details",
  contact: "String"
}]


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/profiles' element={<ProfilesContainer profilesArray={ProfilesArray}/>} />
        <Route path='/listings' element={<ListingsContainer listingsArray={ListingsArray}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;