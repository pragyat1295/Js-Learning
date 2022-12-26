// how arrow functions work inside the class? .... What is class. How it behaves inside the JS

/*
===========================================================================================================

- Class: It is the tempelate to create objects. But class itself is no an object.
- constructor: It should be declared same name as 'constructor'. It is the method inside
                the class used to initialize the object properties. 
                Constructor method should be on the top of the class then other methods.
                Otherwise it will show an error.

===========================================================================================================
 */

class Name {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;


    }
    access = 'ss';

    fullName() {
        console.log(this.firstName + ' ' + this.lastName);
        console.log(this);
    }

    /* -------------------------- Arrow function --------------------
        The arrow functions you can access them inside a class if you create an object 
        and then print the object you can access this method for arrow function.

        -- But in case of normal function you cannot see them when you print it.
    */
//    fullName = () => {
//     console.log(this.firstName + ' ' + this.lastName);
//    }

}

const myName = new Name('Pragyat', 'Mishra');
console.log(myName);
myName.fullName()
// myName.firstName


const obj = {
    firstName: 'Vishrut',
    lastName: 'Mishra',
    // oneObj: {
    //     getName: () => {
    //         console.log(this);
    //     }
    // },

}

// myName.fullName.call(obj);
// console.log(obj.oneObj.getName());
// obj.getName.call(obj);
// same with bind.

// ============================================////////////////================================

/*
==========================================================================================

## Class Inheritance: 

    It means inheritting all the properties and methods on one class to 
    the other class.

## The super() method refers to the parent class.

## By calling the super() method in the constructor method, we call the parent's 
constructor method and gets access to the parent's properties and methods.

==========================================================================================
 */

class Car {
    constructor(props, brand) {
        // this.carName = brand;
        this.firstName = props.firstName;
        this.lastName = props.lastName;
        this.carName = brand;
    }
    carProp() {
        return `I have ${this.carName}.`;
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Now I will pass this Car class properties into my Modal class.

class Modal extends Car {
    constructor(place, props, brand) {
        super(props, brand);
        this.place = place;
    }

    carCountry() {
        return `I have car of ${this.carName} which is from ${this.place}`;
    }
}

const myCar = new Modal('India' , {firstName: 'P', lastName: 'M'}, 'Tata');
// const cars = myCar.carProp();
console.log(myCar.carCountry());
// console.log(myCar.firstName);
// myCar.firstName = 'Naman';
// console.log(myCar.firstName);
// myCar.fullName = 'P M';
// console.log(myCar.fullName);


// =================================//////////////////////================================


/*
#### Getters and Setters 
=========================================================================================

# Getters:
    If you want to access a method as the object properties you can use getters.

# Setters: 


=========================================================================================
 */

class StaticProp {
    constructor(name) {
        this.name = name;
        this.val = 123;
    } 

    static propertyValue = `check from static ${this}`;
}

const checkStatic = new StaticProp('Pragyat');

// console.log(checkStatic.name);
console.log(StaticProp.propertyValue);
