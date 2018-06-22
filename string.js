const fname = "salman ";
const lname = "khan";
const str= "sk salman khan shajana bad"
let val;

//val = fname +" "+ lname;

//val =fname + lname ;

//val = fname.concat(' ',lname);

val = fname.toLowerCase;
val = fname.toUpperCase;

val = fname.length;
val = fname[0];
val = fname.indexOf('m');
val = fname.lastIndexOf('i');
val = fname.charAt(2);
val = fname.slice(0,-5);
val = str.split(" ");
val = fname.substring(0,5);
val = str.replace("salman","abdul rashid saleem salman khan");
val = str.includes(" ");

console.log(val);