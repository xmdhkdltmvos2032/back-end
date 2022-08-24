"use strict"

class UserStorage{
    static #users = {
        id: ["jbh2032", "itzy2032", "jbh3377"],
        pw: ["2032", "2032", "1234"],
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers,field)=>{
            console.log(field);
        })

    }
}

module.exports = UserStorage;