import { useState, useEffect } from 'react';
import './Nav.css';

const Nav = () => {
    const [elementsReady, setElementsReady] = useState(false);
    const [activeSection, setActiveSection] = useState('about');

    const navItems = [
        {
            id: 'about',
            label: 'Overview'
        },
        {
            id: 'degrees',
            label: 'Degrees'
        },
        {
            id: 'careers',
            label: 'Careers'
        },
        {
            id: 'people',
            label: 'People'
        },
    ];

    // Observe the sections to determine which one is active
    const observeSections = () => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.2 }
        );

        navItems.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) {
                observer.observe(element);
            }
        });
    
        return () => {
            observer.disconnect();
        };
    };

    // Delay the observer to allow for the page to load everything
    useEffect(() => {
        const delay = setTimeout(() => {
            setElementsReady(true);
        }, 3000);

        return () => clearTimeout(delay);
    }, []);
    
    useEffect(() => {
        if (elementsReady) {
            observeSections();
        }
    }, [elementsReady]);

    return (
        <ul className='side-nav'>
            {navItems.map((item) => (
                <li key={item.id} className='side-nav-item'>
                    <a className={`side-nav-link ${ activeSection == `${item.id}` ? 'active-section' : '' }`} href={`#${item.id}`}>{item.label}</a>
                </li>
            ))}
        </ul>
    );
};

export default Nav;
