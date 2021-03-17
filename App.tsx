
import React from 'react';
import { Text, View } from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter'; // 2.0.0
import { tomorrow } from 'react-syntax-highlighter/styles/prism' // 7.0.1

const code = `

// Primitives
let name:string = ''
let age:number = 1
let isManager:boolean = true

// Arrays
let names:Array<string> = ["Juraj"];
let ages:Array<number> = [12, 34, 77];
let users:Array<boolean> = [true, false, true];

// tutpels
let user1: [string, number, boolean] = ["Jurja", 45, true]



// Objects
let userDescription: {
  name: string,
  age: number,
  isCoder: boolean,
  isDancer: boolean
} = {
  name: 'Juraj',
  age: 123,
  isCoder: true,
  isDancer: false
}


// typed object 2

let anima: {

  [key: string]: string | number
  
} = {
  name: "Cat",
  age: 12,

}


// Enums
enum Colors {Red, Green, Yellow}


enum DaysInWeek {
  M = "Monday",
  T = "Tuesday",
  W = "Wednesday",
  Th = "Thuesday",
  Fr = "friday",
  Sat = "Saturday",
  Sun = "Sunday"
}

// Function type
type FuncType1= ()=> void
type FuncType2= (name: string)=> string
type FuncType3= ()=> string


// never
// variable name cannot be given any value
let name: never
name = ""


// any
let name2:any = ""
name2 = 2   // not complaining


// Class example

class Greeter {
  greeting: string
  constructor(message: string){
    this.greeting = message
  }
  greet():string{
    return this.greeting
  }
}
let greeter = new Greeter('Hello Juraj')


// let greeter = new Greeter([])
// TS will complain about []


// String Literal Types
let value1: "Juraj" = "Juraj"
value1 = "Peter" // TS will complain


// Type Aliases and Union Types
// enum-like typing

`;



// Type guarding functions

function isString(value: any): value is string {
    return typeof value === "string"
}

function example(foo: any){
  if(isString(foo)){
    console.log("foo is string")
  }
  else {
    console.log("foo is not string")
  }

}

example(123)



export default class App extends React.Component {

  state = { code };
  
  render() {
    return (
      <View style={{ backgroundColor: '#E87A90', height: '100%' }}>
        <Text style={{ marginTop: 30, marginBottom: 30, textAlign: 'center', fontSize: 22, fontWeight: '900' }}>React Native Syntax Higlighter</Text>
        <SyntaxHighlighter
          {...this.props}
          style={tomorrow}
          customStyle={{ padding: 20, margin: 0 }}
          language='javascript'
          fontSize={18}
          highlighter="prism"
        >
          {this.state.code}
        </SyntaxHighlighter>
      </View>
    );
  }
}
