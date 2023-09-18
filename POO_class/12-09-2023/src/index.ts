const student = {
  studentName: "Victor",
  grade1: 8.5,
  grade2: 7.0,  
  grade3: 9.2,
};

// const { grade1, grade2, grade3, studentName } = student;
const averageGrade: number = (student.grade1 + student.grade2 + student.grade3) / 3;
const result: string = `Average grade is ${averageGrade.toFixed(2)}`;

if(averageGrade >= 6) {
    console.log(`${student.studentName} is approved! ${result}`);
} else {
    console.log(`${student.studentName} is reproved! ${result}`);
}

// console.log({ grade1, grade2, grade3, studentName })