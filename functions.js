//const axios = require("axios");

const functions = {
    stringLength: (string) => string.length,
    reversString : (string) => {
        let newstring="";
        for(let i = string.length-1; i >=0 ; i--){
            newstring +=string[i];
        }
        return newstring;
    },



    add:(num1,num2) => num1+num2,
    isNull : () => null,
    checkVlalue : (x) => x,
    createUser : () => {
        const user ={ firstName:'Miftah'}
        user['lastName'] = 'Amin';
        return user;
    },
    fetchUser :() => axios.get('https://jsonplaceholder.typicode.com/users/1')
                    .then(res => res.data)
                    .catch(err =>'error')
};
module.exports =functions;