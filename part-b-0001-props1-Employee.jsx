import React from 'react'

function Employee({employee}) {

    const {empName, empLastName, department, salary} = employee
  return (
    <div>

        <h6>Employee Info</h6>
        <p>Employee name: {empName}</p>
        <p>Employee lastname: {empLastName}</p>
        <p>Employee department: {department}</p>
        <p>Employee salary: {salary}</p>
      
    </div>
  )
}

export default Employee
