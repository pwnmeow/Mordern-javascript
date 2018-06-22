const today = new Date();

let val;
let  birthday = new Date('3-19-1999 4:43:00');
birthday = new Date('mar 19 1999');


val = birthday;
val = today.getDate();
val = today.getMonth();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
val = today.setFullYear(1744);
val = today.setHours(5);
val = today.setMinutes(45);
val = today.setMilliseconds(5);
console.log(val);