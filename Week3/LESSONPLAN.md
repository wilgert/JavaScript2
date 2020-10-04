# Lesson Plan JavaScript2 Week 3

## Agenda

The purpose of this class is to introduce to the student:

- The importance of scope (global, functional and block)
- What hoisting is and the difference between compile time and run time
- The use and purpose of closures

## Core concepts

FIRST HALF (12.00 - 13.30)
## 1. Q&A about last week's concepts & homework
- synchronous vs. asynchronous
- callbacks
- eventloops
- map, filter, reduce

Note: You can ask students to explain a concept or summerise the last lecture themselves

## 2. Scope (global, functional and block)
### Explanation
Scopes define the visibility of declarations of variables and functions. Variables and functions are accessible 
1. within the scope they where created
2. in all child scopes
3. Unless a variable/function with the same name is created in the child scope

1.
- `var` and `function` declarations are visible with function scope.
- `let` and `const` declarations are visible with block scope. A block can be seen as a set of statements enclosed in curly brackets({}).

1. Global scope is nothing special, it's just the outer scope. And because all other scopes are enclosed by it, everything from global scope is accessible in all other scopes.

Global scope:

- Can be a real useful tool or a nightmare.
- Useful in scenarios where we want to export JS modules, use third party libraries like jQuery etc.
- Big risk of causing namespace clashes with multiple variables with same name being created in different places.

Local Scope:

- Think of local scope as any new scope that is created within the global scope.
- Each function written in JavaScript creates a new local scope.
- Variables defined within a function aren't available outside it. They are created when a function starts and are _in a way_ destroyed/hidden when a function ends.

https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/scope.md
### Example
![Scopes](../assets/scopes.png)

```Javascript
let villain = "Joker";                       // | global scope
                                             // |
function myFunction() {                      // |  | function scope
    let hero = "Batman";                     // |  |
    if (hero === "Batman") {                 // |  |  | block scope
        let coHero = "Robin";                // |  |  |
        console.log(hero);                   // |  |  |
        console.log(coHero);                 // |  |  |
        console.log(villan);                 // |  |  |
    }                                        // |  |  |
    console.log("------")                    // |  |
    console.log(hero);                       // |  |
    console.log(coHero);                     // |  |
    console.log(villain);                    // |  |
}                                            // |  |
                                             // |
myFunction();                                // |
```

And the same link as Explanation 
### Exercise
What happens if we use the same variable name in different scopes?

```Javascript
function myFunction() {
    let hero = "Batman";
    if (true) {
        let hero = "The Flash";
        console.log(hero);
    }
    console.log(hero);
}

myFunction();
```
Made by Yash: https://github.com/yash-kapila/HYF-JS2-Week3/blob/master/src/scope.js
### Essence
Same link as Explanation

## 3. What hoisting is and the difference between compile time and run time
### Explanation
### Example
### Exercise
Made by Yash: https://github.com/yash-kapila/HYF-JS2-Week3/blob/master/src/hoisting.js
### Essence
Notes:

- Compile time is when the JavaScript is prepared to be executed in the browser
- Run time is when the JavaScript is actually executed, line by line


SECOND HALF (14.00 - 16.00)

## 4. Closures
### Explanation
Credits to Yash:
A closure is when inner function remembers the environment in which it was created even after the outer function has returned.

One powerful use of closures is to use the outer function as a factory for creating functions that are somehow related.

In the code snippet underneath we can see that the `carColor` function has still got access to the outer function's properties like `wheels`, `seats` and `brand` even after the function `manufactureCar` has returned. We can then use the `carColor` as a factory to create multiple cards of the same type but with a different color.
### Example
```JavaScript
function manufactureCar() {
  const wheels = 4;
  const seats = 5;
  const brand = 'Some Brand';

  return function carColor(color) {
    return {
      wheels,
      seats,
      brand,
      color,
    }
  };
}

const basicCar = manufactureCar();

const redCar = basicCar('red');
const blueCar = basicCar('blue');
const greenCar = basicCar('green');
```

``` Javascript
{
  'use strict';

  const printName = () => {
    const message = 'My name is ';

    const displayName = name => {
      console.log(`${message}${name}`);
    }

    return displayName;
  };
  
  const name = printName();
  name('Yash Kapila');
}
```

### Exercise

### Essence


