// JAVASCRIPT LAB 3 - STUDENT SUBMISSIONS

// Task: Create an array of objects representing student submissions. Define a variety of
// functions for working with such an array. Also call each of the functions at least once to test it.

// Build Specifications:

// 1. Declare a variable named submissions that is initialized to an array with the following
// objects:
// name score date passed
// Jane 95 2020-01-24 true
// Joe 77 2018-05-14 true
// Jack 59 2019-07-05 false
// Jill 88 2020-04-22 true

const submissions = [
    {name: "Jane", score: 95, date: "2020-01-24", passed: true},
    {name: "Joe", score: 77, date: "2018-05-14", passed: true},
    {name: "Jack", score: 59, date: "2019-07-05", passed: false},
    {name: "Jill", score: 88, date: "2020-04-22", passed: true},        
]


// 2. Declare a function named addSubmission
// ○ Parameter(s): array, newName, newScore, newDate
// ○ Functionality: construct an object and push it into the array. The object must
// have the same properties as the objects already in the array. Use conditional
// statements to set the value for the passed property to true if the score is
// greater than or equal to 60 and false otherwise.

function addSubmission(array, newName, newScore, newDate) {
    const newAdd = {
      name: newName,
      score: newScore,
      date: newDate,
    };

    if (newAdd.score >= 60) {
      newAdd.passed = true;
    } else {
      newAdd.passed = false;
    }

    array.push(newAdd);
}
// addSubmission(submissions, "Jennifer", 93, "2020-11-10");
// console.log("Add Submission:");
// console.log(submissions);


// 3. Declare a function named deleteSubmissionByIndex
// ○ Parameter(s): array, index
// ○ Functionality: remove the object from the array at the specified index using the
// splice method.

function deleteSubmissionByIndex(array, index) {
  array.splice(index, 1);
}
// deleteSubmissionByIndex(submissions, 2);
// console.log("Delete Submission by Index:");
// console.log(submissions);


// 4. Declare a function named deleteSubmissionByName
// ○ Parameter(s): array, name
// ○ Functionality: remove the object from the array that has the provided name.
// Incorporate the findIndex method and the splice method.

function deleteSubmissionByName(array, name) {
  const index = array.findIndex(sub => sub.name === name);
  array.splice(index, 1);  
}
// deleteSubmissionByName(submissions, "Jill");
// console.log("Delete Submission by Name:");
// console.log(submissions);


// 5. Declare a function named editSubmission
// ○ Parameter(s): array, index, score
// ○ Functionality: update an object’s score in the array at the specified index. Use
// conditional statements to set the value for the passed property to true if the
// score is greater than or equal to 60 and false otherwise.

function editSubmission(array, index, score){
  array[index].score = score;
  const updatedRecord = submissions[index];
  if (score >= 60) {
    array[index].passed = true;
  } else {
    array[index].passed = false;
  }
}
// editSubmission(submissions, 2, 100);
// console.log("Edit Submission:");
// console.log(submissions);


// 6. Declare a function named findSubmissionByName
// ○ Parameter(s): array, name
// ○ Functionality: return the object in the array that has the provided name. Use the
// find method.

function findSubmissionByName(array, name) {
  const nameFound = array.find(sub => sub.name === name);
  return nameFound;
}
// let studentFound = findSubmissionByName(submissions, "Jane");
// console.log("Find Submission by Name:");
// console.log(studentFound);


// 7. Declare a function named findLowestScore
// ○ Parameter(s): array
// ○ Functionality: return the object in the array that has the lowest score. Use the
// forEach method to loop through the whole array.

function findLowestScore(array){
  let lowestScore = 100;

  array.forEach(function(element) {
    if (element.score < lowestScore){
      lowestScore = element.score;
    } 
  });  
  return lowestScore;
}
// console.log("Find Lowest Score:");
// console.log(findLowestScore(submissions));


// 8. Declare a function named findAverageScore
// ○ Parameter(s): array
// ○ Functionality: return the average quiz score. Use a for...of loop.

function findAverageScore(array) {
  let scoreTotal = 0;
  for (const record of array) {
    scoreTotal += record.score;
  }
  let averageScore = scoreTotal / array.length;

  return averageScore;
}
// let average = findAverageScore(submissions);
// console.log("Find Average Score:");
// console.log(average);


// 9. Declare a function named filterPassing
// ○ Parameter(s): array
// ○ Functionality: return a new array using the filter method. The filter method
// should find objects in the array that have passing scores.

function filterPassing(array) {
  const studentPassed = array.filter(pass => pass.passed === true);
  return studentPassed;
}
// let passedQuiz = filterPassing(submissions);
// console.log("Filter Passing:");
// console.log(passedQuiz);


// 10. Declare a function named filter90AndAbove
// ○ Parameter(s): array
// ○ Functionality: return a new array using the filter method. The filter method
// should find objects in the array that have scores greater than or equal to 90.

function filter90AndAbove(array) {
  const gradeA = array.filter(grade => grade.score >= 90);
  return gradeA;
}
// let gotAnA = filter90AndAbove(submissions);
// console.log("Filter 90 and Above:");
// console.log(gotAnA);

