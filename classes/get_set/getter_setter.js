// new codebase 
class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    // we have to take care of seeting the properties of the variables 
    // which are defined because we set values both in constructor and set functions
    // than call stack is full error come if we not take care of it because of race condition
    // to handle this we have to do slight changes in variable name use _ in front of name in get
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);
