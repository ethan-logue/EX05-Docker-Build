import { useState } from 'react';
import { useDisclosure } from '@chakra-ui/react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from '@chakra-ui/react';
import MinorModal from "./MinorModal";

const Minors = ({ minors }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedCourse, setSelectedCourse] = useState(null);

    const openModal = (course) => {
        setSelectedCourse(course);
        onOpen();
    };

    return (
        <>
        <Accordion allowMultiple className='degree-menu'>
            {minors.map((minor, index) => {
                return (
                    <AccordionItem key={index}>
                        <h2>
                            <AccordionButton className='degree-item'>
                                <Box as="span" flex='1' textAlign='left'>{minor.title}</Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} className='degree-desc'>
                            {minor.description}
                            <p>Courses:</p>
                            <ul className='minor-listing'>
                                {minor.courses.map((course, idx) => (
                                    <li className='minor-course' key={idx} onClick={() => openModal(course)}>{course}</li>
                                ))}
                            </ul>
                            {minor.note ? ( <p className='minor-note'>{minor.note}</p> ) : ('')}
                        </AccordionPanel>
                    </AccordionItem>
                );
            })}
        </Accordion>

        {selectedCourse && (
            <MinorModal
                isOpen={isOpen}
                onClose={onClose}
                selectedCourse={selectedCourse}
            />
        )}
        </>
    );
};

export default Minors;