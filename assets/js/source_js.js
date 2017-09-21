function testVar(){
    var a=50 
    if(true){
        var a=20
    }
    console.log(a)
}
testVar()

function testLet(){
    let a=50
    if(true){
      let  a=30
        console.log(a)
    }
    console.log(a)
}
console.log('TeST Let')
testLet()

//Uses of let and others

/*
Uses of Classes
*/

class User{
    constructor(username,email,password){
            this.username = username
            this.email=email
            this.password = password
    }
    // Methods are function which are belongs to a class
    static countUser(){
        console.log('There are 50 users')
    }

    register(){
        console.log(this.username + ' is now registered')
    }

}
let bob=new User('bob ', 'bob@mailinator.com','123456');

bob.register()

User.countUser();

class Member extends User{
    constructor(username,email,password,memberPackage){
        super(username,email,password);
        this.package=memberPackage
    }
    getPackage(){
        console.log(this.username + ' - '+ this.password+ ' - '+this.member)
    }
}
let mike = new Member('mike', 'mike@gmail.com','12345','no-bd')
mike.getPackage()
let name= ' testing'

function makeUppercase(word){
    return word.toUpperCase();
}

let template = "<h1> Hello </h1> This is a simple template in JavaScript"
let extra = 
`
Back ticket added ${name}
${
    makeUppercase('Hello')
}
`
document.getElementById('template').innerHTML = extra

