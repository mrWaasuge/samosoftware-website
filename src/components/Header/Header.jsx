import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'

const NAV_LINKS = [
    { to: '/', label: 'Home', end: true },
    { to: '/services', label: 'Services' },
    { to: '/subscriptions', label: 'Software & Plans' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/about', label: 'About Us' },
]

const WHATSAPP_URL = 'https://wa.me/252613502123'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()
    const panelRef = useRef(null)
    const closeRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 12)
        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsMenuOpen(false)
    }, [location.pathname])

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [isMenuOpen])

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 1100) setIsMenuOpen(false)
        }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    useEffect(() => {
        if (!isMenuOpen) return undefined

        closeRef.current?.focus()

        const onKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false)
                return
            }

            if (event.key !== 'Tab' || !panelRef.current) return

            const focusable = panelRef.current.querySelectorAll('a, button')
            if (focusable.length === 0) return

            const first = focusable[0]
            const last = focusable[focusable.length - 1]

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault()
                last.focus()
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault()
                first.focus()
            }
        }

        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    }, [isMenuOpen])

    return (
        <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
            <div className="header-bar">
                <NavLink to="/" className="brand" aria-label="SamoSoftware home">
                    <img src="/logo.svg" alt="SamoSoftware" className="brand-logo" />
                </NavLink>

                <nav className="desktop-nav" aria-label="Primary">
                    <ul className="nav-links">
                        {NAV_LINKS.map((link) => (
                            <li key={link.to}>
                                <NavLink
                                    to={link.to}
                                    end={link.end}
                                    className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                        <li>
                            <NavLink to="/contact" className="nav-cta">
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <button
                    type="button"
                    className="hamburger"
                    aria-label="Open menu"
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-drawer"
                    onClick={() => setIsMenuOpen(true)}
                >
                    <span aria-hidden="true">☰</span>
                </button>
            </div>

            <div className={`drawer-root${isMenuOpen ? ' is-open' : ''}`} id="mobile-drawer">
                <button
                    type="button"
                    className="drawer-backdrop"
                    aria-label="Close menu"
                    tabIndex={isMenuOpen ? 0 : -1}
                    onClick={() => setIsMenuOpen(false)}
                />
                <aside
                    ref={panelRef}
                    className="drawer-panel"
                    role="dialog"
                    aria-modal="true"
                    aria-hidden={!isMenuOpen}
                    aria-label="Site menu"
                >
                    <div className="drawer-top">
                        <img src="/logo.svg" alt="SamoSoftware" className="drawer-logo" />
                        <button
                            ref={closeRef}
                            type="button"
                            className="drawer-close"
                            aria-label="Close menu"
                            tabIndex={isMenuOpen ? 0 : -1}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <span aria-hidden="true">✕</span>
                        </button>
                    </div>

                    <nav className="drawer-nav" aria-label="Mobile">
                        <ul>
                            {NAV_LINKS.map((link) => (
                                <li key={link.to}>
                                    <NavLink
                                        to={link.to}
                                        end={link.end}
                                        className={({ isActive }) => `drawer-link${isActive ? ' is-active' : ''}`}
                                        tabIndex={isMenuOpen ? 0 : -1}
                                    >
                                        {link.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="drawer-cta">
                        <NavLink to="/contact" className="btn btn-primary drawer-quote" tabIndex={isMenuOpen ? 0 : -1}>
                            Get a Quote
                        </NavLink>
                        <a
                            href={WHATSAPP_URL}
                            className="drawer-whatsapp"
                            target="_blank"
                            rel="noopener noreferrer"
                            tabIndex={isMenuOpen ? 0 : -1}
                        >
                            <MessageCircle size={18} aria-hidden="true" />
                            WhatsApp Us
                        </a>
                    </div>
                </aside>
            </div>
        </header>
    )
}

export default Header
