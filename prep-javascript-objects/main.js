const person = {
  firstName: 'Eugene',
  lastName: 'Park',
  hobby: 'working out',
  job: 'student',
  previousJob: 'project manager'
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

console.log("The person's current job is:", person.job);
console.log("The person's previous job is:", person.previousJob);
console.log('The complete person object:', person);
