# Intro to Javascript
Week 2, Monday Lecture

## Javascript intro
*  Interperted language that is often used in client side scripting to interact with user, browser, and communicate asynchronously with the server. 
*  Client Side Vs Server Side execution
  *  For our Learning - client side, in public folder.
  *  Server Side orginally created with Netscape in Dec, 1994 (nothing new here)
    *  Node has brought back the server side.
*  Functions
  *  First Class 
    *  Allows them to be passed around as objects, and stored in variables
    *  Show how to build / execute / pass functions in nodeA
*  Ruby Classes -> Javascript Classes

### The Module Pattern

    var squirrel = (function(){ 
      var name = "";
      var tailLength = 0;
      var treeMail = "";

      return {
        name:       name,
        tailLength: tailLength,
        treeMail:   treeMail
      };
    })();

*  squirrel will always be a singluar object, you cannot create new ones. Althought you can pass this object around and use it where you need to.
  *  Great way to encapsulate all off the logic for a perticular area of your application. i.e. The Header -> Logged in / Logged out logic. 

### The Constructor Pattern

    function Squirrel(name, tailLength, treeMail) {
      this.name = name; 
      this.tailLength = tailLength;
      this.treeMail = treeMail;

      this.sayHello = function(){
        return "Hello, My name is " + this.name;
      };
    }

*  Emulates the Class object in Ruby
*  Can Create multiple <i>new</i> instances

    var zack = new Squirrel("Zack", 123, "zack@tree.oak");

*  Then you can use them as you would in Ruby

    console.log( zack.sayHello() );

*  sayHello is created everytime we create a new squirrel... 20000 squirrels -> 20000 sayHello functions
  *  Hard to manage this

## Prototypes
*  We have methods that we want to give to each Instance of squirrel. 
*  Saves us from creating the same method over and over again.
*  Has the ability to access members of the instance object

The previous code example about translates to this

    function Squirrel(name, tailLength, treeMail){
      this.name = name;
      this.tailLength = tailLength;
      this.treeMail = treeMail;
    }

    Squirrel.prototype.sayHello = function(){ 
      return "Hello, My Name is " + this.name;
    };


