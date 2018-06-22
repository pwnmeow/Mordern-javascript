const person = {
    firstname:'sheeraz',
    lastname:'ali',
    age:19,
    email:'hacker.ascool@gmail.com',
    hobbies:['web dev', 'web design', 'learning'],
    address:{
        city:'bhopal',
        state:'M.P'
    },
    getBirthYear: function(){
        return 2018 - this.age; 
    }
}

let val;

val = person;
//Get Spesfic value 

val = person.firstname;
val = person['lastname'];

console.log(val);
