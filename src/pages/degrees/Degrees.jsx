import { useState, useEffect } from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from '@chakra-ui/react'
import getData from '../../utils/getData'
import Minors from './Minors';
import './Degrees.css';

const Degrees = () => {
    const [loaded, setLoaded] = useState(false);
	const [degrees, setDegrees] = useState();
	const [minors, setMinors] = useState();

	useEffect(() => {
		getData('degrees/')
			.then(json => { 
				setDegrees(json);
                setLoaded(true);
			});
		getData('minors/')
			.then(json => { 
				setMinors(json);
				setLoaded(true);
			});
	}, []);

    if (!loaded || !degrees || !minors) return (
        <h3>Loading...</h3>
	);

    const degreeList = [
        {
            title: 'Undergraduate Degrees',
            type: degrees.undergraduate,
        },
        {
            title: 'Graduate Degrees',
            type: degrees.graduate,
        },
    ];

    return (
        <>
        <section className='degrees' id='degrees'>
            {degreeList.map((degreeItem, index) => (
                <div key={index}>
                    <h2>{degreeItem.title}</h2>
                    <Accordion allowMultiple className='degree-menu'>
                        {degreeItem.type.map((degree, index) => (
                            <AccordionItem key={index}>
                                <h2>
                                <AccordionButton className='degree-item'>
                                    <Box as="span" flex='1' textAlign='left'>{degree.title ? degree.title : 'Graduate Advanced Certificates'}</Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                {degree.availableCertificates ? (
                                    <AccordionPanel pb={4} className='degree-desc'>
                                        The following certificates are available:
                                        <ul className='degree-listing'>
                                            {degree.availableCertificates.map((certificate, idx) => (
                                                <li key={idx}>{certificate}</li>
                                            ))}
                                        </ul>
                                    </AccordionPanel>
                                ) : (
                                    <AccordionPanel pb={4} className='degree-desc'>
                                        {degree.description}
                                        <p>Concentrations:</p>
                                        <ul className='degree-listing'>
                                            {degree.concentrations.map((concentration, idx) => (
                                                <li key={idx}>{concentration}</li>
                                            ))}
                                        </ul>
                                    </AccordionPanel>
                                )}
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            ))}
            <div>
                <h2>Minors</h2>
                <Minors minors={minors.UgMinors} />
            </div>
        </section>
        </>
    );
};

export default Degrees;
