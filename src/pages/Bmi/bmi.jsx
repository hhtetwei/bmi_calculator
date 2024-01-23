import Divider from '@mui/material/Divider'
import BmiCard from './bmiCard'
const BMI = () => {
  return (
    <>
      <div className="w-full h-screen overflow-auto relative bg-slate-200">
        <div className="w-full h-[10%] text-center text-black p-3 mr-3 text-sm">
          BMI calculator
          <div className="flex justify-center">
            <Divider color="#FDA228" sx={{ height: 2, width: '140px' }} />
          </div>
        </div>
        <BmiCard />
      </div>
    </>
  )
}

export default BMI
