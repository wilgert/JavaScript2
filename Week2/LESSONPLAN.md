# Lesson Plan JavaScript2 Week 2

## Agenda

The purpose of this class is to introduce to the student:

- What synchronous vs. asynchronous processes are
- What callbacks are and how to write your own
- How the event loop works
- Show 3 commonly used array functions (filter, reduce, map)

## Core concepts

FIRST HALF (12.00 - 13.30)

## 1. Q&A about last week's concepts & homework

- DOM
- DOM manipulation
- browser defined functions

Note: You can ask students to explain a concept or summarize the last lecture themselves

## 2. What synchronous vs. asynchronous processes are

### Explanation

Story time.

Imagine that you are at the shopping center to buy some vegetables, bread, and cheese. `switch scene`
You first go to the [greengrocer](https://indebuurt.nl/rotterdam/wp-content/uploads/2018/11/dsc_0102-3.jpeg). He has all the the fruits en vegetables you need: `show pictures` some apples, tomatoes and a nice big cauliflower.
Next stop is the [bakery](https://brands-b.prod.onewp.net/app/uploads/sites/23/2018/08/Bakkerij-Terpstra-Gorssel-LvdP-8776.jpg). You ask for your favorite 'fijn volkoren' bread. "I'm sorry" says the lady at the bakery. "I'm all out of that bread".
But you're lucky, it's in the oven right now and if you come back later it will be ready! And you say hey: here is my cellphone number, give me a call when it's ready!

So you go to the [cheese shop](https://s.numrush.nl/wp-content/uploads/2017/09/Kaans-Stream-Store_2_Willem-de-Kam-copyright.jpg) to buy that lovely Dutch cheese. The 'kaasboer' (cheese salesman) is happy to cut a good piece for you.
During some chit-chat at the cheese shop about the price of milk and the variability of the weather lately your phone rings.
It's the lady from the bakery with some good news: you can come pick up your bread now!

In this story we can recognize two synchronous and one asynchronous process.

- The greengrocer had everything you need right away so that was synchronous.
- The 'kaasboer' needed to cut your cheese, but because this is a quick operation you were willing to wait on it right there. So this was also synchronous.
- At the bakery however it did not make sense to stay there waiting. You went on to do some other tasks while the baker took your bread out of the oven. This was an asynchronous process.

### Example

See: sync-async.js

### Exercise

### Essence

Notes:

- Synchronous refers to a linear execution process: one step at a time
- Asynchronous helps us do multiple things in parallel

## 3. Callbacks

### Explanation

A callback in JavaScript is basically a function(callback) being passed as a parameter to another function which after some point of time would execute the function passed or invoke the callback.

Callbacks were primarily introduced in JavaScript to achieve asynchronous behaviour
(https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced)

### Example

Consider a situation where person A wishes to go out for a movie with a friend person B one evening. Person A finds out the time and place and now needs to share it with B. A picks up the phone and tries to call B. Let's say that B is currently busy with some work and can't answer the phone. Person A has now got two options. One option is to stay on the line until B picks up the phone and then share the movie details. Or A could drop a voicemail and ask B to **callback** once free.

```javascript
function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
}
function alertFinished() {
  alert('Finished my homework');
}
doHomework('math', alertFinished);
```

more examples (made by Yash): https://github.com/HackYourFuture/JavaScript2/blob/master/assets/callbacks.js

### Exercise

#### 1. What will happen?

#### 2. How to turn the output order around?

```javascript
function first() {
  // Simulate a code delay
  setTimeout(function() {
    console.log(1);
  }, 500);
}
function second() {
  console.log(2);
}

first();
second();
```

### Essence

you can’t just call one function after another and hope they execute in the right order. Callbacks are a way to make sure certain code doesn’t execute until other code has already finished execution.

SECOND HALF (14.00 - 16.00)

## 4. Event loops

### Explanation

https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/event_loop.md

### Example

http://latentflip.com/loupe/?code=Y29uc3QgZ3JlZW5Hcm9jZXIgPSB7CiAgICBidXlBcHBsZXM6IGZ1bmN0aW9uKHF1YW50aXR5KSB7CiAgICByZXR1cm4gcXVhbnRpdHkgKyAnIGFwcGxlcyc7CiAgfQp9OwoKY29uc3QgY2hlZXNlU2hvcCA9IHsKICAgYnV5Q2hlZXNlOiBmdW5jdGlvbih0eXBlLCB3ZWlnaHQpIHsKICAgIHRoaXMuY3V0Q2hlZXNlKHR5cGUsIHdlaWdodCk7CgogICAgcmV0dXJuIHdlaWdodCArICdnciAnICsgdHlwZSArICcgY2hlZXNlJzsKICB9LAoKICBjdXRDaGVlc2U6IGZ1bmN0aW9uKHR5cGUsIHdlaWdodCkgewogICAgY29uc3Qgc3RvcFRpbWUgPSBEYXRlLm5vdygpICsgMTUwMDsKICAgIHdoaWxlIChEYXRlLm5vdygpIDwgc3RvcFRpbWUpOwogIH0sCn07Cgpjb25zdCBiYWtlcnkgPSB7CiAgICBidXlCcmVhZDogZnVuY3Rpb24oYnJlYWRSZWFkeUNhbGxiYWNrLCB0eXBlLCBxdWFudGl0eSkgewogICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgICAgYnJlYWRSZWFkeUNhbGxiYWNrKHF1YW50aXR5ICsgJyAnICsgdHlwZSk7CiAgICB9LCA1MDAwKTsKICB9LAp9OwoKZnVuY3Rpb24gdmlzaXRHcmVlbmdyb2NlcigpIHsKICBjb25zdCBmcnVpdHNBbmRWZWdldGFibGVzID0gWwogICAgZ3JlZW5Hcm9jZXIuYnV5QXBwbGVzKDIpLAogIF07CgogIGNvbnNvbGUubG9nKCdZb3UgYm91Z2h0OiAnLCBmcnVpdHNBbmRWZWdldGFibGVzLCAnIGF0IHRoZSBncmVlbmdyb2Nlci4nKTsKfQoKZnVuY3Rpb24gdmlzaXRDaGVlc2VTaG9wKCkgewogIGNvbnN0IGNoZWVzZSA9IGNoZWVzZVNob3AuYnV5Q2hlZXNlKCdiZWxlZ2VuJywgNTAwKTsKCiAgY29uc29sZS5sb2coJ1lvdSBib3VnaHQ6ICcgKyBjaGVlc2UgKyAnIGF0IHRoZSBjaGVlc2Ugc2hvcCcpOwp9CgpmdW5jdGlvbiB2aXNpdEJha2VyeSgpIHsKICBiYWtlcnkuYnV5QnJlYWQoCiAgICBmdW5jdGlvbiBicmVhZFJlYWR5KGJyZWFkKSB7CiAgICAgIGNvbnNvbGUubG9nKCdZb3UgYm91Z2h0OiAnICsgYnJlYWQgKyAnIGF0IHRoZSBiYWtlcnknKTsKICAgIH0sCiAgICAnZmlqbiB2b2xrb3JlbicsCiAgICAxCiAgKTsKfQoKdmlzaXRHcmVlbmdyb2NlcigpOwp2aXNpdEJha2VyeSgpOwp2aXNpdENoZWVzZVNob3AoKTsK!!!PGltZyBpZD0ic2hvcCIgd2lkdGg9IjQwMHB4Ij4%3D

http://latentflip.com/loupe/?code=Y29uc3QgZ3JlZW5Hcm9jZXIgPSB7CiAgYnV5QXBwbGVzOiBmdW5jdGlvbihxdWFudGl0eSkgewogICAgcmV0dXJuIHF1YW50aXR5ICsgJyBhcHBsZXMnOwogIH0KfTsKCgpmdW5jdGlvbiB2aXNpdEdyZWVuZ3JvY2VyKCkgewogIGNvbnN0IGZydWl0c0FuZFZlZ2V0YWJsZXMgPSBbCiAgICBncmVlbkdyb2Nlci5idXlBcHBsZXMoMiksCiAgXTsKCiAgY29uc29sZS5sb2coJ1lvdSBib3VnaHQ6ICcsIGZydWl0c0FuZFZlZ2V0YWJsZXMsICcgYXQgdGhlIGdyZWVuZ3JvY2VyLicpOwp9Cgp2aXNpdEdyZWVuZ3JvY2VyKCk7!!!PGltZyB3aWR0aD0iNDAwcHgiIHNyYz0naHR0cHM6Ly9pbmRlYnV1cnQubmwvcm90dGVyZGFtL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzExL2RzY18wMTAyLTMuanBlZyc%2BCg%3D%3D

http://latentflip.com/loupe/?code=Y29uc3QgY2hlZXNlU2hvcCA9IHsKICBidXlDaGVlc2U6IGZ1bmN0aW9uKHR5cGUsIHdlaWdodCkgewogICAgdGhpcy5jdXRDaGVlc2UodHlwZSwgd2VpZ2h0KTsKCiAgICByZXR1cm4gd2VpZ2h0ICsgJ2dyICcgKyB0eXBlICsgJyBjaGVlc2UnOwogIH0sCgogIGN1dENoZWVzZTogZnVuY3Rpb24odHlwZSwgd2VpZ2h0KSB7CiAgICBjb25zdCBzdG9wVGltZSA9IERhdGUubm93KCkgKyAxNTAwOwogICAgd2hpbGUgKERhdGUubm93KCkgPCBzdG9wVGltZSk7CiAgfSwKfTsKCmZ1bmN0aW9uIHZpc2l0Q2hlZXNlU2hvcCgpIHsKICBjb25zdCBjaGVlc2UgPSBjaGVlc2VTaG9wLmJ1eUNoZWVzZSgnYmVsZWdlbicsIDUwMCk7CgogIGNvbnNvbGUubG9nKCdZb3UgYm91Z2h0OiAnICsgY2hlZXNlICsgJyBhdCB0aGUgY2hlZXNlIHNob3AnKTsKfQoKdmlzaXRDaGVlc2VTaG9wKCk7Cg%3D%3D!!!PGltZyB3aWR0aD0iNDAwcHgiIHNyYz0naHR0cHM6Ly9zLm51bXJ1c2gubmwvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDkvS2FhbnMtU3RyZWFtLVN0b3JlXzJfV2lsbGVtLWRlLUthbS1jb3B5cmlnaHQuanBnJz4K

http://latentflip.com/loupe/?code=Y29uc3QgYmFrZXJ5ID0gewogIGJ1eUJyZWFkOiBmdW5jdGlvbihicmVhZFJlYWR5Q2FsbGJhY2ssIHR5cGUsIHF1YW50aXR5KSB7CiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgICBicmVhZFJlYWR5Q2FsbGJhY2socXVhbnRpdHkgKyAnICcgKyB0eXBlKTsKICAgIH0sIDQwMDApOwogIH0sCn07CgpmdW5jdGlvbiB2aXNpdEJha2VyeSgpIHsKICBiYWtlcnkuYnV5QnJlYWQoCiAgICBmdW5jdGlvbiBicmVhZFJlYWR5KGJyZWFkKSB7CiAgICAgIGNvbnNvbGUubG9nKCdZb3UgYm91Z2h0OiAnICsgYnJlYWQgKyAnIGF0IHRoZSBiYWtlcnknKTsKICAgIH0sCiAgICAnZmlqbiB2b2xrb3JlbicsCiAgICAxCiAgKTsKfQoKdmlzaXRCYWtlcnkoKTsK!!!PGltZyB3aWR0aD0iNDAwcHgiIHNyYz0iaHR0cHM6Ly9icmFuZHMtYi5wcm9kLm9uZXdwLm5ldC9hcHAvdXBsb2Fkcy9zaXRlcy8yMy8yMDE4LzA4L0Jha2tlcmlqLVRlcnBzdHJhLUdvcnNzZWwtTHZkUC04Nzc2LmpwZyI%2B

```Javascript
const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  bar()
  baz()
}


foo()
```

Output:

```Javascript
foo
bar
baz
```

Call stack
![Call Stack](../assets/call_stack_example.png)

### Exercise

> [Visualisation of an eventloop](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

### Essence

## 5. filter, reduce, map

### Explanation

**map**, **filter** and **reduce** are three array methods that iterate (loop!) over the whole array and preform a computation or a transformation.
They have in common that they return a new array based on the transformations/calculations.

> [MDN definition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map): The **map()** method creates a new array with the results of calling a provided function on every element in the calling array.

> [MDN definition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter): The **filter()** method creates a new array with all elements that pass the test implemented by the provided function

> [MDN definition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce): The **reduce()** method executes a **reducer** function (that you provide) on each member of the array resulting in a single output value†.

Writing the functions yourself: https://github.comz/HackYourFuture/fundamentals/blob/master/fundamentals/map_filter.md

### Example

```Javascript
const numbers = [1, 2, 3, 4];
const square = x => x * x;
const squaredNumbers = numbers.map(square);

console.log(squaredNumbers); // -> [ 1, 4, 9, 16 ]
```

```Javascript
const numbers = [1, 2, 3, 2];
const isTwo = x => x === 2;
const Twos = numbers.filter(isTwo);

console.log(Twos); // -> [ 2, 4 ]
```

```Javascript
const numbers = [1, 2, 3, 4];

const sum = (a, b) => a + b;
const total = numbers.xxx(sum, 0);

console.log(total); // -> 10
```

### Exercise

Fill in the xxx with map, filter or reduce:

```Javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.xxx(item => item * 2);
console.log(doubled); // [2, 4, 6, 8]
```

```Javascript
const numbers = [1, 2, 3, 4];

const times = (a, b) => a * b;
const total = numbers.xxx(times, 0);

console.log(total); // -> 10
```

```Javascript
const numbers = [1, 2, 3, 4];
const evens = numbers.xxx(item => item % 2 === 0);
console.log(evens); // [2, 4]
```

Yash made a very nice exercise (with answers):
https://github.com/yash-kapila/HYF-JS2-Week2/tree/master/src

### Essence

Easy methodes to transform arrays, which you'll have to do quite often, while keeping the original array intact.
You can see it as a shortcut. Of course you can write these methodes yourself many times, but 'they' already did it for you
