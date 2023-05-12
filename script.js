//Declare variable
var artistAge = prompt("Enter age of your favorite artist: ");

//Check age
function getAge(){
if (artistAge < 25){
    document.write(`They're ${artistAge} years old and they're younger than Google.`);
} else if (artistAge == 25){
    document.write(`They're ${artistAge} years old and they're as old as Google.`)
} else if (artistAge > 25){
    document.write(`They're ${artistAge} years old and they're older than Google.`);
} else{
    document.write(`That is not a valid input`)
}}

getAge();
