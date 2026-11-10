import { useState } from "react";
function EmployeeForm({}) {

  const[firstName, setFirstname] = useState("")
  const[lastName, setLastName] = useState("")
  const[role, setRole] = useState("")
  const[password, setPassword] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (password === "admin") {

      const newUser = {
        firstName: firstName,
        lastName: lastName,
        role: role
      }
      setEmployees([...employees,newUser])
    } else {
      console.log("Not valid password")
    }
  }

  return (
    <form className="NewItem">
     <input 
     type="text" 
     name="firstName" 
     placeholder="First Name"
     onChange={(e) => setFirstname(e.target.value)} />
      <input 
      type="text" 
      name="lastName" 
      placeholder="Last Name"
      onChange={(e) => setLastName(e.target.value)}/>
      <input 
      type="text" 
      name="role" 
      laceholder="Role Name"
      onChange={(e) => setRole(e.target.value)}/>
      <input 
      type="text" 
      name="password" 
      placeholder="Password"
      onChange={(e) => setPassword(e.target.value)}/>
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;