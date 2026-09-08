import { useEffect, useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

const menuLinks = [
  { label: 'Home', href: '#Home' },
  { label: 'About', href: '#about' },
  { label: 'Results', href: '#results' },
  { label: 'Process', href: '#process' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact us', href: '#Footer' },
]

const Menu = ({ isOpen, onClose }) => {
  const menuRef = useRef(null)
  const closeButtonRef = useRef(null)

  useLayoutEffect(() => {
    const menu = menuRef.current
    if (!menu) return undefined

    const links = menu.querySelectorAll('[data-menu-link]')
    const contact = menu.querySelector('[data-menu-contact]')
    const timeline = gsap.timeline()

    if (isOpen) {
      timeline.set(menu, { visibility: 'visible', opacity: 1, yPercent: 100 })
      timeline.to(menu, { yPercent: 0, duration: 0.7, ease: 'power3.out' })
      timeline.fromTo(
        [closeButtonRef.current, links, contact],
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.06,
          delay: 0.18,
          ease: 'power3.out',
        },
        '<0.1',
      )
    } else {
      timeline.to(menu, {
        opacity: 0,
        yPercent: 100,
        duration: 0.5,
        ease: 'power3.inOut',
      })
      timeline.set(menu, { visibility: 'hidden' })
    }

    return () => timeline.kill()
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isOpen && event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    const previousOverflow = document.body.style.overflow
    if (isOpen) document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen, onClose])

  return (
    <aside
      id="site-menu"
      ref={menuRef}
      className={`fixed inset-0 z-50 flex min-h-screen flex-col bg-white px-5 py-5 text-black sm:px-8 sm:py-7 lg:px-12 lg:py-8 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-label="Site menu"
      aria-hidden={!isOpen}
      style={{ visibility: isOpen ? 'visible' : 'hidden', opacity: isOpen ? 1 : 0 }}
    >
      <div className="flex items-center justify-end">
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="text-[0.625rem] uppercase tracking-[0.08em] transition-opacity hover:opacity-60 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black sm:text-xs"
        >
         
        </button>
      </div>

      <nav className="flex flex-1 items-start justify-end pt-44 sm:pt-16" aria-label="Menu links">
        <ul className="space-y-1 text-right">
          {menuLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={onClose}
                data-menu-link
                className="font-[font-1] text-4xl uppercase leading-[1.08] tracking-tight transition-opacity hover:opacity-55 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <p data-menu-contact className="ml-auto max-w-44 text-right text-[0.6875rem] leading-[1.2] text-black/75 sm:text-xs">
        * Call for free health check up<br />
        (+91 8107286495)
      </p>
    </aside>
  )
}

export default Menu