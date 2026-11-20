let Employee =[{ name: "JOHN",department:"IT" },
               { name: "JACOB",department:"HR" },
               { name: "SUMA",department:"IT" },
                { name: "PAYAL",department:"HR" },
            { name: "RAVI",department:"Sales" }
];
let result = Employee.reduce((acc,emp)=>{
    if(!acc[emp.department]){
        acc[emp.department]=[];
    }
    acc[emp.department].push(emp.name);
    return acc;
  },{});
console.log(result);