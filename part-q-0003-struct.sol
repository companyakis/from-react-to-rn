// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract CompanyAkis {

  struct Employee {

    string name;
    string ID;
    string department;
    uint32 salary;
  }

  Employee public emp;

  function addEmployee(string memory _name, string memory _ID, string memory _department, uint32 _salary) public {

    emp = Employee(_name, _ID, _department, _salary);
  }

}
