
const me = {
    name: "lazare",
    surname: "kukava",
    age: 12
};


const familyMember = {
    name: "teodore",
    surname: "kukava",
    age: 7
};


console.log(me);
console.log(familyMember);

console.log(me.name, me.surname, me.age);
console.log(familyMember.name, familyMember.surname, familyMember.age);


me.age = 13;
familyMember.age = 8;
console.log(me, familyMember);


me.hobby = "Programming";
familyMember.hobby = "Reading";
console.log(me, familyMember);


delete me.surname;
delete familyMember.surname;
console.log(me, familyMember);