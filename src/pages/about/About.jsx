import { useState, useEffect } from 'react';
import getData from '../../utils/getData'
import './About.css';

const About = () => {
    const [loaded, setLoaded] = useState(false);
	const [about, setAbout] = useState();

	useEffect(() => {
		getData('about/')
			.then(json => { 
				setAbout(json);
				setLoaded(true);
			});
	}, []);

    if (!loaded) return (
        <h3>Loading...</h3>
	);

    return (
        <section className='about' id='about'>
            <h2>Overview</h2>
            <p className='about-tagline'>{about.title}.</p>
            <p>{about.description}</p>
            <div className='about-quote'>
                <p className='quote'>{about.quote}</p>
                <p className='quote-author'>&mdash; {about.quoteAuthor} </p>
            </div>
        </section>
    );
};

export default About;
