import { Button, Card, CardContent, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import bmi from '../../../public/bmi.jpg'

const BmiCard = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center mb-3">
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
                  type="number"
                  className="w-[80%] bg-transparent border-b-2 border-black  outline-none focus:border-black-400 mt-3 text-sm text-center"
                />
                <input
                  type="number"
                  className="w-[80%] bg-transparent border-b-2 border-black  outline-none focus:border-black-400 block mt-4 text-sm text-center"
                  placeholder="lb"
                />

                <input
                  type="number"
                  className="w-[80%] bg-transparent border-b-2 border-black  outline-none focus:border-black-400 block mt-5 text-sm text-center"
                  placeholder="ft"
                />
                <input
                  type="number"
                  className="w-[80%] bg-transparent border-b-2 border-black  outline-none focus:border-black-400 block mt-5 text-center text-sm"
                  placeholder="inches"
                />
              </div>
            </div>
            <div className="flex w-full justify-center mt-5">
              <button class="bg-lime-600 text-white font-bold p-2 rounded-full w-[50%]">
                Calculate
              </button>
            </div>
            <div className="mt-5">
              <Image src={bmi} alt=""></Image>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default BmiCard
