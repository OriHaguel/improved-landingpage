import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function AppHeader(): JSX.Element {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = (): void => {
        setIsMenuOpen((prev) => !prev);
    };

    const scrollToSection = (sectionId: string): void => {
        const section = document.getElementById(sectionId);
        if (section) {
            const yOffset = -80;
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const closeMenu = (e: MouseEvent): void => {
            if (
                isMenuOpen &&
                !(e.target instanceof HTMLElement &&
                    (e.target.closest('.app-header__nav') || e.target.closest('.app-header__menu-toggle')))
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', closeMenu);
        return () => document.removeEventListener('click', closeMenu);
    }, [isMenuOpen]);

    return (
        <header className="app-header">
            <div className="app-header__content">
                <h1 className="app-header__logo">
                    <span className="app-header__logo-highlight">Ori Haguel</span>
                </h1>
                <button
                    className={`app-header__menu-toggle ${isMenuOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <nav className={`app-header__nav ${isMenuOpen ? 'open' : ''}`}>
                    <Link className="app-header__link" to="#" onClick={() => scrollToSection('about')}>About</Link>
                    <Link className="app-header__link" to="#" onClick={() => scrollToSection('projects')}>Projects</Link>
                    <Link className="app-header__link" to="#" onClick={() => scrollToSection('contacts')}>Contacts</Link>
                </nav>
            </div>
        </header>
    );
}
