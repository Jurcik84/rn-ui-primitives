import React from 'react';
import {Text, View} from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter'; // 2.0.0
import {tomorrow} from 'react-syntax-highlighter/styles/prism'; // 7.0.1

import AnimatedApp from './Animations';

const code = `
// 0. delare variable
var name;
// name is now undefined
// undefined is not null or nil
// it's unknow value :)


 // 1. create variable

 var name = "Juraj Hynek"
 
 //2.  mutate variable
 // reasign variable

 name = "Bc. Juraj Hynek"

 // 3. mutate variable by adding

 name = name + " " + is coder

 // var scope has global and
 // functional scope
 // but no block scope

 //5. block {} will not hide variables
 // delared by var


if (true) {
  var name = "Macka";
}

console.log(name);
// name is visible outside of if block 
// :(


// var is visible outside of for loop

for (var i = 0; i < 4; i++) {
  console.log("in loop", i);
}
console.log("outside of loo", i);
// idnex is visible outside of loop too
// :(


//var : repeated delaration is not error
// even with different type
// this can be problem
// anodther coder or program
// can exidently create variable with
// same name

var name = "Juraj Hynek";

var name = "George Hynek";

var name = 123;


// var is hoisted
// it's no error to read
// what doesnt exist :)))) yet
// all variables are initialy 
// undefined

console.log(name); // undefined
var name = "Juraj Hynek";


// var in global space is
// added to window object
// it can be security risk
// to add values to window object

var firstName = "Juraj Hynek";
console.log(window.firstName) // works
console.log(this.firstName)   // works

// but it's bad to use
// :(
// avoid it if possible
`;

const code2 = `
// declare variables with 
// let

// using let
let coder = "Juraj Hynek"

// reassigment is OK
coder = "George Hynek"

// but delare variable
// with the same name is not OK

let coder = "Juraj Hynek"
let coder = "Juraj Hynek" // the same value
let coder = 12345678     // different type
// browser will throw SyntaxError


let age;
console.log(age) // undefined  

// using the let with 'if block'

if (true) {
  let age = 123;
  console.log(age); // OK
}
console.log(age)
// ReferenceError: age is
// not defined

// using let with for loop

for (let i = 0; i < 4; i++) {
  console.log(i); // ok
}
console.log(i);
// ReferenceError: i is not defined
// let is has block scope

// let delaration is not hoisted
// hoisted means to place variables
// to the top start of function


// 
let age = 100;

function hoisting() {
  // refers to gobal variable age
  console.log(age);
}

hoisting();




}



`;
// syntax mastery :0)
// business logic mastery :)

// data from user via forms or events
// data  from server / remote or local
// data from local stroage / sync / async

const code3 = `

// what is class
// class is a way to
// oraginze data and logic
// create minimal class

class Person {
  constructor() {
    this.name = "Juraj Hynek";
  }
  speak() {
    return "Hello Coder";
  }
}

// operator new will create
// new object

const person = new Person();
console.log(person); // object
console.log(person.name); // "Juraj Hynek"
console.log(person.speak()); // "Hello Coder"

`;

function VStack(props) {
  const {children} = props;
  return (
    <View
      style={{
        flexDirection: 'column',
        borderWidth: 1,
        height: 200,
        justifyContent: 'space-between',
      }}>
      {children}
    </View>
  );
}

function HStack(props) {
  const {children} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        borderWidth: 1,
        justifyContent: 'space-between',
        flex: 1,
      }}>
      {children}
    </View>
  );
}

function GridStack(props) {
  const {data = [], rows, columns} = props;

  const chunk = (arr: typeof data, size: number) =>
    Array.from({length: Math.ceil(arr.length / size)}, (_, i) =>
      arr.slice(i * size, i * size + size),
    );

  const dataToRender = chunk(data, columns);

  return <VStack></VStack>;
}

export default function App() {
  return (
    <View style={{backgroundColor: '#E87A90', flex: 1, marginTop: 50}}>
      <AnimatedApp />
    </View>
  );
}

{
  /* <SyntaxHighlighter
{...this.props}
style={tomorrow}
customStyle={{ padding: 20, margin: 0 }}
language='javascript'
fontSize={18}
highlighter="prism"
>
{this.state.code3}
</SyntaxHighlighter> */
}
