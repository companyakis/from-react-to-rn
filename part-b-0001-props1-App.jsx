import Employee from "./components/Employee"

function App() {

  const empAyhan = {
    empName: "Ayhan",
    empLastName: "Bilir",
    department: "HR",
    salary: 75000
  }

  const empBengu = {
    empName: "Bengü",
    empLastName: "Gök",
    department: "Sales",
    salary: 67500
  }


  return (
    <>

      <Employee employee={empAyhan} />

      <Employee employee={empBengu} />

    </>
  )
}

export default App
