//Function to Exrtact object from an array.
function EmployeeInformation(employees){
   let secondEmployee=employees[1];
   let secondEmployeeName=secondEmployee.name, secondEmployeeDepartment=secondEmployee.department;
   return ({secondEmployeeName, secondEmployeeDepartment});
}

//Custome inpute of an array.
const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];

  //Calling the Function to print employees information.
  let arr=EmployeeInformation(employees);
  console.log(arr);

  //Function to Calculate Average Salary of emlpoyees.
  function AverageSalary(employee){
    let total=0;
    for(let i=0;i<employee.length;i++){
      total+=employee[i].salary
    }
    return(total/employee.length)
  }

  //Custome inpute of an array.
  const employee = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];

  //Calling the Function to print employees Average Salary.
  let totalSalary=AverageSalary(employee);
  console.log(totalSalary);

  //Function to Extract the third employee information from Emlpoyees.
  function thirdEmployeeInfo(Employees){
    let thirdEmployee=Employees[2];
    let employeeInfo={
      employee:thirdEmployee.name, 
      age:thirdEmployee.age, 
      salary:thirdEmployee.salary, 
      bonus:thirdEmployee.salary*0.1
    };
    return(`Employee: ${thirdEmployee.name}, Age: ${thirdEmployee.age}, Salary: ${thirdEmployee.salary}, Bonus: ${thirdEmployee.salary * 0.1}`)
  }

  //Custome inpute of an array.
  const Employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];

  //Calling the Function to print third employee Information.
  final=thirdEmployeeInfo(Employees)
  console.log(final)