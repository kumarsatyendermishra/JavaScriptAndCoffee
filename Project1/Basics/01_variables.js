const accountId = 123456
let accountEmail = "satyender@gmail.com"
var accountPassword = "12345"
accountCity = "Kolkata" 
let accountState;
accountEmail = "Satyen@gmail.com"
accountCity = "Mumbai"
/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/
//accountId = 2
console.log(accountId);
console.table([accountEmail, accountPassword, accountCity,accountState])