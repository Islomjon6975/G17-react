
const use1 = {
  name: 'John',
  last: 'Johnov'
}

const use2 = {
  name: 'Ilhom',
  last: 'Jakov'
}


class User {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
}

const user1 = new User('John', 'Johnov')
const user2 = new User('Ilhom', 'Jackov')

console.log(user1)