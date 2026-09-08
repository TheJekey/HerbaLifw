import Button from './Button'

const About = () => {
    return (
        <section
            id="about"
            className="w-full bg-[#f4f7f1] px-5 py-16 text-[#1d4e26] sm:px-8 sm:py-20 lg:px-12 lg:py-28"
            aria-labelledby="about-heading"
        >
            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
                <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                    <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#d9ead8]">
                        <img
                            src=".//image.jpg"
                            alt="Wellness coach guiding a healthy lifestyle"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-5 right-4 max-w-[12rem] rounded-xl bg-[#1d4e26] px-5 py-4 text-white shadow-xl sm:right-8">
                        <p className="font-[font-3] text-3xl leading-none">6+</p>
                        <p className="mt-1 text-[0.6875rem] uppercase leading-4 tracking-[0.14em] text-white/70">
                            years of wellness coaching
                        </p>
                    </div>
                </div>

                <div className="pt-4 lg:pt-0">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#1d4e26]/60 sm:text-sm">
                        About the coach
                    </p>
                    <h2 id="about-heading" className="max-w-3xl font-[font-3] text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
                        Your better life starts with one decision.
                    </h2>
                    <div className="mt-7 max-w-xl space-y-4 text-sm leading-6 text-[#1d4e26]/75 sm:mt-9 sm:text-base sm:leading-7">
                        <p>
                            I help people build a healthier relationship with food, movement, and everyday habits.
                        </p>
                        <p>
                            Every plan is personal, practical, and designed to fit your real life. No extreme rules, just consistent support and progress you can feel proud of.
                        </p>
                    </div>

                    <div className="mt-8 grid max-w-xl grid-cols-3 border-y border-[#1d4e26]/15 py-5 sm:mt-10 sm:py-6">
                        <div>
                            <p className="font-[font-3] text-2xl sm:text-3xl">40+</p>
                            <p className="mt-1 text-[0.625rem] uppercase tracking-[0.12em] text-[#1d4e26]/60 sm:text-xs">clients</p>
                        </div>
                        <div className="border-l border-[#1d4e26]/15 pl-4 sm:pl-6">
                            <p className="font-[font-3] text-2xl sm:text-3xl">95%</p>
                            <p className="mt-1 text-[0.625rem] uppercase tracking-[0.12em] text-[#1d4e26]/60 sm:text-xs">success rate</p>
                        </div>
                        <div className="border-l border-[#1d4e26]/15 pl-4 sm:pl-6">
                            <p className="font-[font-3] text-2xl sm:text-3xl">24/7</p>
                            <p className="mt-1 text-[0.625rem] uppercase tracking-[0.12em] text-[#1d4e26]/60 sm:text-xs">support</p>
                        </div>
                    </div>

                    <div className="mt-8 sm:mt-10">
                        <Button text="Know more" className="bg-[#1d4e26] text-black " />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About