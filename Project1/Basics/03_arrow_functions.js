const user = {
    username: "Satyender",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website` );
    }

}

user.welcomeMessage()
user.username = 'Pramee'
user.welcomeMessage()