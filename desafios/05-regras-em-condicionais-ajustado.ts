const necessaryGradeToBeApproved = 7
const studentGrade = 10

const numberOfAbsencesToFailSchool = 100
const studentNumberOfAbsences = 109

function checkIfStudentPassedTheSchoolYear() {
  if (studentGrade < necessaryGradeToBeApproved) {
    return { error: true, message: 'Student was not approved because their grade was below the required minimum.' }
  }

  if (studentNumberOfAbsences > numberOfAbsencesToFailSchool) {
    return { error: true, message: 'Student was not approved due to excessive absences.' }
  }

  return { error: false, message: 'Student was approved :)' }
}

console.log(checkIfStudentPassedTheSchoolYear())
