export const getBmiStatus = (bmi) => {
  if (bmi < 18.5) return 'Underweight'
  else if (bmi >= 18.5 && bmi <= 24.9) return 'Normal'
  else if (bmi > 24.9 && bmi <= 29.9) return 'Overweight'
  else if (bmi > 29.9) return 'Obese'
  else return ''
}
