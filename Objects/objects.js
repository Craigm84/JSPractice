const me = {
name: "Craig",
age: 39,
job: "Trainee",
hobbies: ["Football", "Golf", "Games"],
pets: ["Stanley"],
}

const mark = {
name: "Mark",
age: 39,
job: "Water",
hobbies: ["Football", "Golf", "Games"],
pets: ["Daisy"] ,
}

const liz = {
name: "Liz",
age: 63,
job: "Retired",
hobbies: ["Music", "TV", "Games"],
pets: ["Harry"] ,
}

console.log("Name", me.name);
console.log("Age", me.age);
console.log("Job", me.job);
console.log("Hobbies", me.hobbies);
console.log("Pets", me.pets);

const people = [me, mark, liz]

for (let i = 0; i < people.length; i++) {
    console.log("I", i, "Person", people[i]);
    console.log("Name", people[i].name);

}

for (const person of people) {
    console.log("Name", person.name);
}

console.log(mark);
mark.age = 40;
console.log(mark);

let oldest = {age : 0};
for (const person of people) {
    if (person.age > oldest.age) oldest = person
   
}
     console.log(oldest.name);

     for (const person of people) {
        if (person.age > oldest.age) oldest = person

     }

     console.log("Age");

     
