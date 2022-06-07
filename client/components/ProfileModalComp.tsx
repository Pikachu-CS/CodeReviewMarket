import *  as React from 'react'

const ProfileModal = (props: any): JSX.Element => {

    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [yearsExp, setYearsExp] = React.useState('0-5')
    const [rate, setRate] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [hobbies, setHobbies] = React.useState('')

  const onSubmit =  () => {
    if (!firstName || !lastName || !yearsExp || !rate || !description) {
      alert('Please input all required fields');
      return;
    }
    const formObject = { firstName,
                         lastName,
                         yearsExp,
                         rate,
                         description,
                         hobbies }
     
    //   fetch('http://localhost:8080/endpoint', 
    //   {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json'
        
    //   },
    //   body: JSON.stringify(formObject)
    //     }
    //   )
    
    console.log("formObject", formObject)
}
  



    return (
        <div>
        <div className="box-border h-100 w-100 border-4 border-black text-center grid grid-cols-2">
         <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Name
      </label>
      </div>
      <div className = "flex justify-between">
      <input className="shadow appearance-none border rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text" placeholder="First Name" onChange = {(e) => setFirstName(e.target.value)}/>
      <input className="shadow appearance-none border rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text" placeholder="Last Name" onChange = {(e) => setLastName(e.target.value)}/>
      </div>


    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Years of Experience
      </label>
      </div>
    

      <select className="classic"  onChange = {(e) => setYearsExp(e.target.value)}>
                    <option value="0-5" >0-5</option>
                    <option value="5-10">5-10</option>
                    <option value="10-15">10-15</option>
                    <option value="15">15+</option>
                </select>
    
      <label className="block text-gray-700 text-sm font-bold mb-2" >
          Rate (per hour)
      </label>
      <input className="shadow appearance-none border rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="$40/hour" onChange = {(e) => setRate(e.target.value)} />
      
      <label className="block text-gray-700 text-sm font-bold mb-2" >
          Description
      </label>
      <textarea className="border-2 border-black text-center" placeholder="Describe your experience" onChange = {(e) => setDescription(e.target.value)}/>
      <label className="block text-gray-700 text-sm font-bold mb-2" >
          Hobbies
      </label>
      <textarea className="border-2 border-black text-center" placeholder="Tell us about yourself!" onChange = {(e) => setHobbies(e.target.value)}/>
</div>
<button className ="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick = {onSubmit}>Submit</button>
    </div>     
    )
}


export default ProfileModal;
