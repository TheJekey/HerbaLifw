import { useState } from 'react'
import Menu from './Menu'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            <nav
                className={`fixed inset-x-0 top-0 z-[60] px-5 py-5 transition-colors sm:px-8 sm:py-7 lg:px-12 lg:py-8 ${isMenuOpen ? 'text-black' : 'text-white'}`}
                aria-label="Primary navigation"
            >
                <div className="mx-auto flex h-auto w-full max-w-7xl items-center justify-between">
                    <a href="#Home" className="font-[font-2] text-base uppercase tracking-[0.08em]">
                        JEKEY
                    </a>
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
                        aria-expanded={isMenuOpen}
                        aria-controls="site-menu"
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        className="cursor-pointer text-xs uppercase tracking-[0.12em] transition-opacity hover:opacity-65 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current sm:text-sm"
                    >
                        {isMenuOpen ? 'CLOSE' : 'MENU'}
                    </button>
                </div>
            </nav>

            <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    )
}

export default Navbar