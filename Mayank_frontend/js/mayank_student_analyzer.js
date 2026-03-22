// add the data structure for the program calculation.
const students = [
    {
        name: "Lalit",
        marks: [
            { subject: "Math", score: 78 },
            { subject: "English", score: 82 },
            { subject: "Science", score: 74 },
            { subject: "History", score: 69 },
            { subject: "Computer", score: 88 }
        ],
        attendance: 82
    },
    {
        name: "Rahul",
        marks: [
            { subject: "Math", score: 90 },
            { subject: "English", score: 85 },
            { subject: "Science", score: 80 },
            { subject: "History", score: 76 },
            { subject: "Computer", score: 92 }
        ],
        attendance: 91
    },
    {
        name: "Aman",
        marks: [
            { subject: "Math", score: 50 },
            { subject: "English", score: 55 },
            { subject: "Science", score: 60 },
            { subject: "History", score: 58 },
            { subject: "Computer", score: 62 }
        ],
        attendance: 70
    }
];

// This function calculates total marks of a student by looping through subjects

function getTotalMarks(student) {
  let total = 0;

  for (let i = 0; i < student.marks.length; i++) {
      total += student.marks[i].score;
  }

  return total;
}

console.log("Total Marks:");
students.forEach(s => {
  console.log(`${s.name} Total Marks: ${getTotalMarks(s)}`);
});
//
// Printing total marks for each student 
function getAverageMarks(student) {
  let total = getTotalMarks(student);
  return total / student.marks.length;
}

// I reused total marks function to calculate average marks by dividing total marks by number of subjects.
function getAverageMarks(student) {
  let total = getTotalMarks(student);
  return total / student.marks.length;
}
console.log("\nAverage Marks:");
// Printing average marks
students.forEach(s => {
  console.log(s.name + " Average:", getAverageMarks(s).toFixed(2));
});


console.log(" \nHighest Scorers in each Subject:");
// This function finds highest scorer in each subject
function getHighestBySubject() {
  let subjects = ["Math", "English", "Science", "History", "Computer"];

  for (let sub of subjects) {
    let maxScore = 0;
    let topper = "";

    for (let student of students) {
      for (let mark of student.marks) {
        if (mark.subject === sub && mark.score > maxScore) {
          maxScore = mark.score;
          topper = student.name;
        }
      }
    }

    console.log(`Highest in ${sub}: ${topper} (${maxScore})`);
  }
}

getHighestBySubject();


console.log("\n average marks for each subject across all students: ");
// Calculating average marks for each subject across all students
function getSubjectAverage() {
  let subjects = ["Math", "English", "Science", "History", "Computer"];

  for (let sub of subjects) {
    let total = 0;

    for (let student of students) {
      for (let mark of student.marks) {
        if (mark.subject === sub) {
          total += mark.score;
        }
      }
    }

    console.log(`Average ${sub}: ${total / students.length}`);
  }
}

getSubjectAverage();

// This function finds the student with highest total marks
function getTopper() {
  let highest = 0;
  let topper = "";

  for (let student of students) {
    let total = getTotalMarks(student);

    if (total > highest) {
      highest = total;
      topper = student.name;
    }
  }

  console.log(`\n Class Topper: ${topper} with ${highest} marks`);
}

getTopper();


console.log("\n Grades: ");
// I added grading logic based on average and fail conditions
function getGrade(student) {
  let avg = getAverageMarks(student);

  // If any subject is below or equal to 40, student fails
  for (let mark of student.marks) {
    if (mark.score <= 40) {
      return "Fail (Failed in " + mark.subject + ")";
    }
  }

  // If attendance is less than 75, student fails
  if (student.attendance < 75) {
    return "Fail (Low Attendance)";
  }

  // Assigning grade based on average
  if (avg >= 85) return "A";
  if (avg >= 70) return "B";
  if (avg >= 50) return "C";

  return "Fail";
}

// Printing grades
students.forEach(s => {
  console.log(s.name + " Grade:", getGrade(s));
});
// Just added this to make output more readable in console
console.log("----- Student Performance Report Completed -----");