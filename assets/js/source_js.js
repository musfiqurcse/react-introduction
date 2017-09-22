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

//string feature

let theString = 'Hello I love Javascript'


//startswith()
//endswith()
//includes()

console.log(theString.startsWith('Hello'))

console.log(theString.endsWith('Hello'))

let args = [1,2,2,3]
let args1 =[3,4,5,6]

function greet($greeting= 'Hello World'){
    console.log($greeting)
    console.log(args+','+args1)
}


greet(...args,...args1)

greet(...args,...args1)
/*


*/


let carWeakSet = new WeakSet()
let car1 = {
    make: 'Honda',
    model: 'Civic'
    
}

let car2 = {
    make: 'Cara',
    model: 'Cic'
    
}
console.log(carWeakSet)
carWeakSet.add(car1)
carWeakSet.add(car2)
console.log(carWeakSet)
carWeakSet.delete(car1)
console.log(carWeakSet)

function Prefixer(prefix){
    this.prefix = prefix 
}
Prefixer.prototype.prefixArray  = function(arr){
    let self  = this;
    return arr.map(function(x){

        console.log(self.prefix + x)
    });
}
let pre  = new Prefixer('Hello')
pre.prefixArray(['Shubho', ' Saha'])


//Promise

var myPromise = new Promise(function(resolve,reject){
    setTimeout(() => resolve(4), 2000)
})

myPromise.then((res) => {
    res += 3
    console.log(res)
})

function getData(method,url){
    return new Promise(function(resolve,reject){
        let xhr = new XMLHttpRequest()
        xhr.open(method,url)
        xhr.onload = function(){
            if(this.status >= 200 && this.status < 300){
                resolve(xhr.response);
            }else{
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                })
            }
        };
        xhr.onerror = function(){
            reject({
                status: this.status,
                statusText: xhr.statusTExt
            })
        };
        xhr.send();
    })
}

getData('GET','http://jsonplaceholder.typicode.com/todos').then((data) => {
    console.table(data)
    console.log('testing')
}).catch(function(err){
  console.log(err)  
});