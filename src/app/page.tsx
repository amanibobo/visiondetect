"use client"
import { ModeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import React, { useRef, useState } from 'react'
import { FlipHorizontal, Camera, Video } from 'lucide-react';
import Webcam from '../../node_modules/react-webcam/dist/react-webcam';

type Props = {}

const HomePage = (props: Props) => {

  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  //state of webcam
  const [mirrored, setMirrored] = useState<boolean>(false);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  
  return (
    <>
     <div className='flex h-screen'>
      {/* Left Side */}
      <div className='relative'>
        <div className='relative h-screen w-full'>
          <Webcam ref={webcamRef}
          mirrored={mirrored}
          className = 'h-full w-full object-contain p-2'
          />
          <canvas ref={canvasRef}
            className='absolute top-0 left-0 h-full w-full object-contain'
          ></canvas>
        </div>
      </div>

      <div className='flex flex-row flex-1'>
        <div className='border-primary/5 border-2 max-w-xs flex flex-col gap-2 justify-between shadow-md rounded-md p-4'>
          <div className='flex flex-col gap-2'>
            <ModeToggle />
            <Button
              variant={'outline'} size={'icon'}
              onClick={() => {
                setMirrored((prev) => !prev)
              }}
            ><FlipHorizontal /></Button>

            <Separator className="my-2" />
          </div>

          <div className='flex flex-col gap-2'>
          <Separator />
          <Button
            variant={'outline'} size={'icon'}
            onClick={userPromptScreenshot}
          ><Camera />
          </Button>

          <Button
            variant={isRecording ? 'desctructive' : 'outline'} size={'icon'}
            onClick={userPromptRecord}
          ><Video />
          </Button>

          <Separator />
          </div>

          <div className='flex flex-col gap-2'>
          <Separator />
          <Separator />
          </div>
        </div>
      </div>
     </div>
    </>
  )

  function userPromptScreenshot() {

  }

  function userPromptRecord() {

  }

}

export default HomePage