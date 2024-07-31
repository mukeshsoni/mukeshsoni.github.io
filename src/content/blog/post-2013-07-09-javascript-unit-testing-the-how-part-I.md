---
title: 'JavaScript Unit Testing - the HOW - Part I'
description: 'How to write tests for your javascript code?'
pubDate: 'Jul 09 2013'
---

Testing javascript is a tricky affair. Mainly because you can't directly run your javascript written for a browser us something like 'js myjstest.js' in the command line. Surely there are testing frameworks and task managers like grunt which finally enable you to do exactly that, but it's a lot of plumbing to get going.
The second reason it's tough to test javascript is because of it's async nature. Testing asynchronous functions is kind of a pain in the ass.

There are a lot of helpful libraries to tame the beast. But we will not start with any framework/library. We will start with the basics which would also allow us to better appreciate the frameworks.

Lets start with writing a very simple unit test (testing isolated pieces of code) for a very simple function.

```svelte
function add(x, y) {
  return x + y;
}
```

How do we test the above. We want to verify that if we call add(3, 9), the function should return 12 and so on.

One way we can do this is by putting the above function in a script tag in an html file, opening that file in a browser and then calling the 'add' function in the console.

```javascript
function add(x, y) {
	return x + y;
}
```

That is unit testing for you. The problem - it's not "automated".

How can we automate it? The simplest way to do it would be to make the test calls in the same html and check their validity.

```javascript
function add(x, y) {
  return x + y;
}

// start test code
if(add(2,5) === 7) {
  console.log(&quot;adding 2 and 5 passed&quot;);
} else {
  console.log(&quot;adding 2 and 5 failed&quot;);
}

if(add(-1,3) === 2) {
  console.log(&quot;adding -1 and 3 passed&quot;);
} else {
  console.log(&quot;adding -1 and 3 failed&quot;);
}
// end test code
```

We can do one better by putting the actual code and the test code in external files and link them in our html file.

But our test code is so verbose and non reusable that this might be the last time we test anything. We even have to keep track of what we put in the console.log messages (e.g. a copy paste error would result in "adding 2 and 5 passed" twice).

Assertions -
All we wanted to do above was something like "i am telling you, 2+5 is equal to 7. If not, ask the function writer to repeat 2nd standard". And this should happen is as less code as possible. Assertions allow you to do exactly that in just a single line. So you go something like -

```javascript
assert(add(2, 5) === 7, 'learn your maths');
```

And the assert function should throw out pass and fail messages accordingly. Let's try writing one -

```javascript
function assert(expression, message) {
  if(!expression) {
    return console.log(message || &quot;Test case failed&quot;); //if no fail message was passed by the function caller
  }

  return console.log(&quot;Test case passed&quot;);
}
```

Now we can drop this function whenever we want to test stuff. In our case -

```javascript
assert(add(2,5)===7, &quot;learn your maths&quot;);
assert(add(-1,3)===2, &quot;learn your maths&quot;);
assert(add(-1,-4)===-5, &quot;learn your maths&quot;);
```

We can go ahead and enhance the assert function to tell us the number of test cases which passed -

```javascript
var passedTestCount = 0;
function assert(expression, message) {
  if(!expression) {
    return console.log(message || &quot;Test case failed&quot;); //if no fail message was passed by the function caller
  }

  passedTestCount++;
  return console.log(&quot;Test case passed&quot;);
}
```

That is it. Not at all perfect but atleast we have a goto function for testing equality related stuff. In real world we will not print to the console in the assert function. Too much coupling there. The assert function will simply test whether the assertion is true or not. If not, raise an exception.

```javascript
function assert(expression, message) {
  if(!expression) {
    throw new Error(message || &quot;Test case failed&quot;); //if no fail message was passed by the function caller
  }

  passedTestCount++;
  return true;
}
```

If we want to be purist, we should also remove passedTestCount++ from assertion function. There is no reason for assertion function to deal with correct/incorrect assertion counts. But i will leave that to you.

In the next article we will try to see how we can enhance our little testing framework (ok, just one function for now) to handle more complicated cases. Till then, adios!
