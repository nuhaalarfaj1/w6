




console.log("connected");
document.body.style.backgroundColor = 'skyblue'
alert("Welcome");
var firstname = prompt(" First Name?");
var lastname= prompt("Last Name?");
document.write ("Hello, " + firstname + " " + lastname + "!" );


var month = prompt(" what is your month of birth?");
var day = prompt("what is your day of birth?");
document.write ( month + " " + day + " " +"go party" );



var userage = prompt("how old are you ?");

if ( userage >= 21) {
    console.log("you may enter");
}
else if(userage <= 20){
    console.log("you shall not pass");

  
}