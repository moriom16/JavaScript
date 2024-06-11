const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  //Display Properties
  document.getElementById("demo").innerHTML = person.name + ' is ' + person.age + ' years old';
  //Display Properties in a loop
let text = ' ';
for(let x in person){
    text += person[x]+" ";
}
document.getElementById("demo2").innerHTML = text;
/*You must use person[x] in the loop.
person.x will not work (Because x is the loop variable).*/

//Object.values()
const myArray = Object.values(person);
document.getElementById("demo3").innerHTML = myArray;
//Object.values by 'for of' loop
for(x of myArray){
    console.log(x);
}
//Object.entries()