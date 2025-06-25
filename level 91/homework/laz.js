
const classInfo = {
    studentCount: 32,
    grade: "10th",
    favSubject: "Math"
  };
  
  console.log('The class has ${classInfo.studentCount} students and their favorite subject is ${classInfo.favSubject}.');
  

  if (classInfo.studentCount > 30) {
    console.log("Very big class");
  } else {
    console.log("Small Class");
  }
  
  if (classInfo.grade === "10th") {
    console.log(`The class is in ${classInfo.grade} grade.`);
  } else {
    console.log("The class is in a different grade.");
  }
  
  if (classInfo.favSubject === "Math") {
    console.log('The favorite subject is ${classInfo.favSubject}.');
  } else {
    console.log("The favorite subject is different.");
  }



