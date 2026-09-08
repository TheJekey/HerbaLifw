import React from 'react'
import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react'
import Navbar from './Navbar'
import Button from './Button'

const Home = () => {
    return (
        <section id='Home'
            className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-[#1D4E26] px-5 py-5 text-white sm:px-8 sm:py-7 lg:px-12 lg:py-8"
            aria-labelledby="home-heading"
        >
            <ShaderGradientCanvas
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                    pointerEvents: 'none',
                }}
                aria-hidden="true"
            >
                <ShaderGradient
                    animate="on"
                    axesHelper="off"
                    brightness={0.6}
                    cAzimuthAngle={180}
                    cDistance={3.61}
                    cPolarAngle={90}
                    cameraZoom={1}
                    color1="#000000"
                    color2="#1D4E26"
                    color3="#000000"
                    destination="onCanvas"
                    embedMode="off"
                    envPreset="city"
                    format="gif"
                    fov={45}
                    frameRate={10}
                    gizmoHelper="hide"
                    grain="off"
                    lightType="3d"
                    pixelDensity={2.5}
                    positionX={-1.4}
                    positionY={0}
                    positionZ={0}
                    range="disabled"
                    rangeEnd={40}
                    rangeStart={0}
                    reflection={0.1}
                    rotationX={0}
                    rotationY={10}
                    rotationZ={50}
                    shader="defaults"
                    type="plane"
                    uAmplitude={6.4}
                    uDensity={0.7}
                    uFrequency={5.5}
                    uSpeed={0.2}
                    uStrength={6.4}
                    uTime={0}
                    wireframe={false}
                />
            </ShaderGradientCanvas>

            <header className="relative z-[60] mx-auto w-full max-w-7xl">
                <Navbar />
            </header>

            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center py-20 sm:py-24 lg:py-28">
                <div className="max-w-4xl">
                    <h1
                        id="home-heading"
                        className="font-[font-3] text-[clamp(2.75rem,8vw,7.5rem)] uppercase leading-[0.9] tracking-tight"
                    >
                        <span className="block">Transform your</span>
                        <span className="block">body</span>
                        <span className="block">with us!</span>
                    </h1>
                    <div className="mt-8 sm:mt-10 lg:mt-12">
                        <Button text="Get Started" className="bg-[#1d4e26] text-black " />
                    </div>
                    <div className="video absolute top-[43%] left-[56%] overflow-hidden transform -translate-x-1/2 -translate-y-1/2 h-[65px] w-[120px] bg-black rounded-xl ">
                        <div className="overflow-hidden w-full h-full ">
                            <video src="./Video.mp4 " loop autoPlay muted></video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home