numbers=[1,2,3];
new_numbers=[numbers,4,5];
new_num=[...numbers,7,8];
console.log(numbers);
console.log(new_numbers);
console.log(new_num);

let emp = {
    name: 'john',
    age: 25,
    designation: 'Programmer',
    department: 'IT'
  };
  console.log(emp);
  console.log("**********");
  emp= {...emp,
    department: 'software development',
    gender: 'male'
  };
  console.log(emp);

