import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import BMI from '../../public/bmi.jpg'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { getBmiStatus } from './utils/getBmiStatus'

const BmiCard = () => {
  const [feet, setFeet] = useState()
  const [weight, setWeight] = useState()
  const [age, setAge] = useState()
  const [inches, setInches] = useState()
  const [bmi, setBmi] = useState()

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const schema = z.object({
    age: z.string().min(1, { message: 'Age is required !' }),
    weight: z.string().min(1, { message: 'Weight is required !' }),
    height: z.object({
      ft: z.string().min(1, { message: 'ft is required' }),
      inches: z.string().min(1, { message: 'inches is required' }),
    }),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  })

  const handleAge = (event) => {
    const value = event.target.value
    setAge(value)
  }

  const handleWeight = (event) => {
    const value = event.target.value
    setWeight(value)
  }

  const handleFeet = (event) => {
    const value = event.target.value
    setFeet(value)
  }

  const handleInches = (event) => {
    const value = event.target.value
    setInches(value)
    console.log(value)
  }

  const onCalculate = () => {
    const height = feet * 12 + (Number(inches) || 0) //convert height to inches

    const bmi = ((weight / height ** 2) * 703).toFixed(2) //calculat bmi result

    console.log(bmi)

    setBmi(bmi)
    setOpen(true)

    const status = getBmiStatus(bmi)

    console.log(status)
  }
  return (
    <>
      <form onSubmit={handleSubmit(onCalculate)}>
        <div className="flex justify-center mt-5">
          <Card
            sx={{
              minWidth: '300px',
              maxWidth: '90%',
              margin: '3px',
              borderRadius: '15px',
            }}
          >
            <CardContent>
              <div className="w-full flex justify-between">
                <div className="w-[45%] text-center flex flex-col">
                  <label htmlFor="name" className="text-sm font-semibold mt-4">
                    Age :
                  </label>
                  <label htmlFor="name" className="text-sm font-semibold mt-5">
                    Weight :
                  </label>

                  <label htmlFor="name" className="text-sm font-semibold mt-5">
                    Height :
                  </label>
                </div>

                <div className="w-[45%]">
                  <input
                    type="text"
                    className="w-[80%] bg-transparent border-b-2 border-black  outline-none focus:border-black-400 mt-3 text-sm text-center"
                    id="age"
                    onChange={handleAge}
                    value={age}
                    {...register('age')}
                  />

                  <p className="text-warningClr mt-3 font-poppins">
                    {errors.age?.message?.toString()}
                  </p>
                  <input
                    type="text"
                    className="w-[80%] bg-transparent border-b-2 border-black  outline-none focus:border-black-400 block mt-4 text-sm text-center"
                    placeholder="lb"
                    id="weight"
                    onChange={handleWeight}
                    value={weight}
                    {...register('weight')}
                  />
                  <p className="text-warningClr mt-3 font-poppins">
                    {errors.weight?.message?.toString()}
                  </p>

                  <input
                    type="number"
                    className="w-[80%] bg-transparent border-b-2 border-black  outline-none focus:border-black-400 block mt-5 text-sm text-center"
                    placeholder="ft"
                    id="height"
                    onChange={handleFeet}
                    value={feet}
                  />
                  <p className="text-warningClr mt-3 font-poppins">
                    {errors.ft?.message?.toString()}
                  </p>
                  <input
                    type="number"
                    className="w-[80%] bg-transparent border-b-2 border-black  outline-none focus:border-black-400 block mt-5 text-center text-sm"
                    placeholder="inches"
                    id="height"
                    onChange={handleInches}
                    value={inches}
                  />
                  <p className="text-warningClr mt-3 font-poppins">
                    {errors.inches?.message?.toString()}
                  </p>
                </div>
              </div>
              <div className="flex w-full justify-center mt-5">
                <button
                  class="bg-lime-600 text-white font-bold p-2 rounded-full w-[50%]"
                  type="submit"
                  onClick={onCalculate}
                >
                  Calculate
                </button>
              </div>
              <div className="mt-5">
                <Image src={BMI} alt=""></Image>
              </div>
            </CardContent>

            {feet ||
              weight ||
              inches ||
              (age && (
                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle id="alert-dialog-title">
                    <div className="flex gap-5">
                      <span className="font-bold">Your BMI is:</span>
                      <span>{bmi}</span>
                    </div>
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      {bmi && bmi >= 18.5 && bmi <= 24.9 ? (
                        <span>
                          You are normal. A healthy life, healthy body!
                        </span>
                      ) : bmi < 18.5 ? (
                        <span>
                          You are underweight. Please consume food contains
                          protein more.
                        </span>
                      ) : bmi > 24.9 && bmi <= 29.9 ? (
                        <span>
                          You are overweight!Try to do some exercises and
                          consume less fast foods!
                        </span>
                      ) : bmi > 29.9 ? (
                        <span>You are obese! Please see a doctor!</span>
                      ) : (
                        ''
                      )}
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <div className="flex justify-center w-full ">
                      <button
                        onClick={handleClose}
                        className="bg-purple-300 w-[50%] h-7 rounded-xl mb-1"
                      >
                        OK
                      </button>
                    </div>
                  </DialogActions>
                </Dialog>
              ))}
          </Card>
        </div>
      </form>
    </>
  )
}

export default BmiCard
