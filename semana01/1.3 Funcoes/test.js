let skills = [
  {'pizzicato': 'good', 'slap': 'average', 'tapping': 'unknown'}
]

function studyBass(pizzicato, slap, tapping) {
  let newSkills = {'pizzicato': pizzicato, 'slap': slap, 'tapping': tapping}
  skills.push(newSkills)
  console.log(skills);
}

console.log(studyBass("incredible", "excelent", "good"));