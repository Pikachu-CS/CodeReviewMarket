import *  as React from 'react'
type ProfileBoxProps  = {
    firstName : String,
    lastName: String,
    yearsExp: String,
    rate: String,
    description: String,
    hobbies: String
}   
const ProfileBox = (props: ProfileBoxProps): JSX.Element => {

    const [showDescription, setShowDescription] = React.useState([false, "Expand"])

    return (
        <div className=" flex flex-col h-fit box-border border-4 border-black text-center w-64">
        <h3>{props.firstName} {props.lastName}</h3>
        <h3>Years Experience {props.yearsExp}</h3>
        <h3>Rate {props.rate}</h3>
        <h3>{showDescription[0] ? `Description: ${props.description}` : ''}</h3>
        <h3>{showDescription[0] ? `Hobbies: ${props.hobbies}` : ''}</h3>
        <button className ="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded" onClick = {() => {!showDescription[0] ? setShowDescription([true, "Collapse"]) : setShowDescription([false, "Expand"])}}>{showDescription[1]}</button>
        </div>
    )
}


export default ProfileBox;
