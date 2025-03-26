'use client';
import robotImg from "@/assets/images/1.png";
import { Button } from "@/components/Button";
import Image from "next/image";
import underlineImage from "@/assets/images/underline.svg?url";
import Loader from "@/assets/images/loader-animated.svg";
import { Orbit } from "@/components/Orbit";
import { Planet } from "@/components/Planet";
import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "@/components/SectionContent";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const useMousePosition = () =>{
  const [innerWidth, setInnerWidth] = useState(1)
  const [innerHeight, setInnerHeight] = useState(1)
  const clientX = useMotionValue(0)
  const clientY = useMotionValue(0)

  const xProgress = useTransform(clientX, [0, innerWidth], [0, 1]);
  const yProgress = useTransform(clientY, [0, innerHeight], [0,1]);

  useEffect(()=>{
    setInnerWidth(window.innerWidth)
    setInnerHeight(window.innerHeight)

    window.addEventListener('resize', () =>{
      setInnerWidth(window.innerWidth)
      setInnerHeight(window.innerHeight)
    })
  },[])

  useEffect(() =>{
    window.addEventListener('mousemove', (e) =>{
      clientX.set(e.clientX)
      clientY.set(e.clientY)
    })
  },[])

  return { xProgress, yProgress }
}

export const Hero = () => {
  const { xProgress, yProgress } = useMousePosition()
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['end start', 'start end'],
  })

  const transformedY = useTransform(scrollYProgress, [0, 1], [200, -200])

  const springX = useSpring(xProgress)
  const springY = useSpring(yProgress)

 const translateLargeX = useTransform(springX, [0, 1], ['-25%', '25%'])
 const translateLargeY = useTransform(springY, [0, 1], ['-25%', '25%'])


 const translateMediumX = useTransform(springX, [0, 1], ['-50%', '50%'])
 const translateMediumY = useTransform(springY, [0, 1], ['-50%', '50%'])

 const translateSmallX = useTransform(springX, [0, 1], ['-200%', '200%'])
 const translateSmallY = useTransform(springY, [0, 1], ['-200%', '200%'])

  return (
    <section ref={sectionRef}>
      <div className="container">
        <SectionBorder> 
          <SectionContent className="relative isolate [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"> 
            <div className="absolute -z-10 inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]"></div>
            <div className="absolute inset-0 -z-10">
              <div className="absolute-center">
                <Orbit className="size-[350px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[600px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[850px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[1100px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[1350px]" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl md:text-5xl font-semibold text-gray-100 text-center leading-tight">
              Unleash the power of AI <br />
              technology with{" "}
              <span className="relative">
                <span>Circular</span>
                <span
                  className="absolute w-full left-0 top-full -translate-y-1/2 h-4 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))]"
                  style={{
                    maskImage: `url(${underlineImage.src})`,
                    maskSize: "contain",
                    maskPosition: "center",
                    maskRepeat: "no-repeat",
                  }}
                ></span>
              </span>
            </h1>
            <p className="text-center md:text-xl max-w-3xl mx-auto text-lg mt-8">
              Harness the power of AI with Circular . Elevate your productivity
              and streamline our workflow with our cutting-edge AI chat
              platform.
            </p>
            <div className="flex justify-center">
              <Button variant="secondary" className="mt-10">
                Start Chatting
              </Button>
            </div>
            <div className="relative isolate max-w-5xl mx-auto">
              <div className="absolute left-1/2 top-0">
              <motion.div
              style={{
                x: translateLargeX,
                y: translateLargeY,
              }}
              >
                <Planet
                  size="lg"
                  color="violet"
                  className="-translate-x-[316px] -translate-y-[76px] rotate-135"
                />
              </motion.div>
              <motion.div
              style={{
                x: translateLargeX,
                y: translateLargeY,
              }}
              >
                <Planet
                  size="lg"
                  color="violet"
                  className="-translate-y-[188px] translate-x-[330px] -rotate-135"
                />
              </motion.div>
              <motion.div
              style={{
                x: translateSmallX,
                y: translateSmallY,
              }}
              >
                <Planet
                  size="sm"
                  color="fuchsia"
                  className="-translate-y-[372px] -translate-x-[508px] rotate-135"
                />
              </motion.div>
                <motion.div
                style={{
                  x:translateMediumX,
                  y: translateMediumY,
                }}
                >
                <Planet
                  size="md"
                  color="teal"
                  className="-translate-y-[342px] translate-x-[488px] -rotate-135"
                />
                </motion.div>
              </div>
              <div className="absolute hidden lg:block top-[30%] -translate-x-10 left-0 z-10">
                <motion.div 
                style={{
                  y: transformedY,
                }}
                className="bg-gray-800/70 backdrop-blur-md border rounded-xl border-gray-700 p-4 w-72">
                  <div className="">
                    Can you generate an incredible frontend dev video?
                  </div>
                  <div className="text-right text-gray-400 text-sm font-semibold">
                    1m ago
                  </div>
                </motion.div>
              </div>
              <div className="absolute hidden lg:block top-[50%] translate-x-10 right-0 z-10">
                <motion.div 
                style={{
                  y: transformedY,
                }}
                className="bg-gray-800/70 backdrop-blur-md border rounded-xl border-gray-700 p-4 w-72">
                  <div className="">
                    <strong>Brainwave:</strong> I created one video for
                    enhancing frontend skills.
                  </div>
                  <div className="text-right text-gray-400 text-sm font-semibold">
                    Just Now
                  </div>
                </motion.div>
              </div>
              <div className="mt-20 relative rounded-2xl border-gradient overflow-hidden max-w-full">
                <Image src={robotImg} alt="robot-image" />
                <div className="absolute lg:bottom-10 md:bottom-4 bottom-2 left-0 w-full px-4 flex justify-center">
                  <div className="bg-gray-950/80 flex items-center gap-4 px-4 py-2 rounded-2xl w-[320px]">
                    <Loader className="text-violet-400" />
                    <div className="font-semibold text-xl text-gray-100">
                      AI is generating<span className="animate-cursor-blink">|</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionContent>
          </SectionBorder>
      </div>
    </section>
  );
};

export default Hero;
