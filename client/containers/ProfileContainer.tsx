import *  as React from 'react'
import ProfileBox from '../components/ProfileBoxComp'
import ProfileModal from '../components/ProfileModalComp'

type ProfileBoxProps  = {
    firstName : String,
    lastName: String,
    yearsExp: String,
    rate: String,
    description: String,
    hobbies: String
}  


function ProfilesContainer (props: {profilesArray: ProfileBoxProps[]}): any {
     const [showProfile, setShowProfile] = React.useState(false)
     const profiles: any[] = []
    
         for (let i = 0; i < props.profilesArray.length; i++) {
            profiles.push(<ProfileBox 
                firstName ={props.profilesArray[i].firstName} 
                lastName  = {props.profilesArray[i].lastName} 
                yearsExp  = {props.profilesArray[i].yearsExp} 
                rate = {props.profilesArray[i].rate} 
                description = {props.profilesArray[i].description} 
                hobbies = {props.profilesArray[i].hobbies}></ProfileBox>)
         }
        return (
            <div>
            <div className = "flex justify-end p-10">
                <button className ="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick = {() => !showProfile ? setShowProfile(true) : setShowProfile(false)}>Submit Profile</button>
            </div>
            <div className='w-2/3 mx-auto my-20'>
                <div className = "grid grid-cols-4 grid-flow-row gap-x-10 gap-y-10 justify-center">
                {profiles}
                {showProfile ? <ProfileModal></ProfileModal> : <></>}
                </div>
            </div>
            </div>
        )
    }
    export default ProfilesContainer
