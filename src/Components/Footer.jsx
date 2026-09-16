import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react'

const footerGroups = [
    {
        title: 'MENU',
        links: ['Home', 'About', 'Result', 'Testimonials', 'FAQ', 'Contact us'],
    },
    {
        title: 'SOCIALS',
        links: [
            {
                label: 'WhatsApp',
                href: 'https://wa.me/919587489877?text=Hi!%20I%27m%20interested%20in%20your%20health%20%26%20wellness%20services.%20I%27d%20love%20to%20know%20more.',
            },
            { label: 'Facebook', href: 'https://www.facebook.com/' },
            { label: 'Instagram', href: 'https://www.instagram.com/fitwithjekey/' },
            { label: 'Gmail', href: 'mailto:workwithjekey@gmail.com' },
        ],
    },
    {
        title: 'LEGAL',
        links: ['Privacy Policy', 'Food Licence'],
    },
]

const Footer = () => {
    return (
        <footer id="Footer" className="upper relative w-full overflow-hidden bg-[#1D4E26] text-white" aria-label="Site footer">
            <ShaderGradientCanvas
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '110%',
                    height: '120%',
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

            <div className="relative z-10 mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
                <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-16">
                    {footerGroups.map(({ title, links }) => (
                        <nav key={title} aria-labelledby={`${title.toLowerCase()}-links`}>
                            <h2
                                id={`${title.toLowerCase()}-links`}
                                className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/65 sm:text-xs"
                            >
                                {title}
                            </h2>
                            {title === 'LEGAL' ? (
                                <div className="max-w-xs space-y-4">
                                    <a
                                        href="#privacy-policy"
                                        className="text-md inline-block leading-6 transition-opacity hover:opacity-65 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-base"
                                    >
                                        Privacy Policy
                                    </a>
                                    <p id="privacy-policy" className="text-sm leading-6 text-white/70">
                                        Your health information is treated with care and used only to support your wellness goals. We keep personal details private and never share them without your permission.
                                    </p>
                                    <a
                                        href="/food-licence.jpg"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group block focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                                    >
                                        <img
                                            src="/Foodlicence.webp"
                                            alt="View food licence"
                                            className="aspect-[4/3] w-full max-w-[15rem] rounded-lg border border-white/20 bg-white/10 object-cover transition-opacity group-hover:opacity-80"
                                        />
                                        <span className="mt-2 inline-block text-sm leading-6 transition-opacity group-hover:opacity-65">
                                            Food Licence
                                        </span>
                                    </a>
                                </div>
                            ) : (
                                <ul className="space-y-1.5 text-">
                                    {links.map((link) => {
                                        const href = typeof link === 'string' ? '#' : link.href
                                        const label = typeof link === 'string' ? link : link.label

                                        return (
                                            <li key={label}>
                                                <a
                                                    href={href}
                                                    target={typeof link === 'string' ? undefined : '_blank'}
                                                    rel={typeof link === 'string' ? undefined : 'noopener noreferrer'}
                                                    className="text-md inline-block leading-6 transition-opacity hover:opacity-65 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-base"
                                                >
                                                    {label}
                                                </a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            )}
                        </nav>
                    ))}
                </div>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                    <a
                        href="https://wa.me/919587489877?text=Hi!%20I'm%20interested%20in%20your%20health%20%26%20wellness%20services.%20I'd%20love%20to%20know%20more."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-medium text-[#1D4E26] transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                        WhatsApp Chat
                    </a>
                    <a
                        href="tel:+919587489877"
                        className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 font-medium text-white transition-colors hover:bg-white hover:text-[#1D4E26] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                        Call 9587489877
                    </a>
                </div>

                <div className="mt-12 flex flex-col gap-1.5 border-t border-white/20 pt-5 text-[0.6875rem] leading-5 tracking-normal text-white/65 sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:text-xs">
                    <p>&copy; {new Date().getFullYear()} JEKEY. All rights reserved.</p>
                    <p className="mt-2 sm:mt-0">Build by WESIGGN</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer