const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}
// this is factory function - kis object ke basis me new object create kre of tea me refer kro 
const tea = Object.create(User)
console.log(tea.email);