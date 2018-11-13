// Class decorators
function classDecorator(target: Function) {
    console.log(target);
}

@classDecorator
class MyClass {
    constructor() {
        console.log('My class')
    }
}

function changeName(data: string) {
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            name = data;
        }
    }
}

@changeName('Bob')
class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    sayHi() {
        console.log(`${this.name} says hi!`)
    }
}

new Person('John').sayHi(); // Bob says hi!