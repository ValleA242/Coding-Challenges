/* BMI Calc and return feedback:

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese" */

function bmi(weight, height) {
  let bmiInt = weight / (height * height)
  if(bmiInt <= 18.5){
    return 'Underweight'
  } else if(bmiInt <= 25.0){
    return 'Normal'
  } else if(bmiInt <= 30){
    return 'Overweight'
  } else {
    return 'Obese'
  }
}
