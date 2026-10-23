// Variables and constants
const PASS_MARK = 40;
const MIN_ATTENDANCE = 75;

// Array of objects
const students = [
  { name: "Aarav", marks: [78, 85, 90], attendance: 92 },
  { name: "Priya", marks: [65, 72, 58], attendance: 80 },
  { name: "Rohan", marks: [35, 60, 70], attendance: 85 },
  { name: "Sneha", marks: [88, 91, 95], attendance: 70 },
  { name: "Karan", marks: [45, 50, 40], attendance: 78 }
];

// Function: total using a loop
function calculateTotal(marks) {
  let total = 0;
  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
  }
  return total;
}

// Function: pass only if every subject >= PASS_MARK
function hasPassedAll(marks) {
  for (const m of marks) {
    if (m < PASS_MARK) {
      return false;
    }
  }
  return true;
}

// Function: decision making (if-else) for grade
function getGrade(avg, passed) {
  if (!passed) return "F";
  else if (avg >= 90) return "O";
  else if (avg >= 75) return "A";
  else if (avg >= 60) return "B";
  else if (avg >= 50) return "C";
  else return "D";
}

// Function: eligibility using logical operator
function checkEligibility(passed, attendance) {
  return passed && attendance >= MIN_ATTENDANCE;
}

// Main processing
let eligibleCount = 0;
let topper = null;
let topAvg = 0;

console.log("===== STUDENT RESULT AND ELIGIBILITY SYSTEM =====");

for (const s of students) {
  const total = calculateTotal(s.marks);
  const avg = total / s.marks.length;
  const passed = hasPassedAll(s.marks);
  const grade = getGrade(avg, passed);
  const eligible = checkEligibility(passed, s.attendance);

  if (eligible) eligibleCount++;
  if (avg > topAvg && passed) {
    topAvg = avg;
    topper = s.name;
  }

  console.log(
    `${s.name} | Total: ${total} | Avg: ${avg.toFixed(2)} | Grade: ${grade} | ` +
    `Result: ${passed ? "Pass" : "Fail"} | Attendance: ${s.attendance}% | ` +
    `Eligible: ${eligible ? "Yes" : "No"}`
  );
}

console.log("-------------------------------------------------");
console.log("Total students    : " + students.length);
console.log("Eligible students : " + eligibleCount);
console.log("Not eligible      : " + (students.length - eligibleCount));
console.log(`Topper            : ${topper} (${topAvg.toFixed(2)})`);