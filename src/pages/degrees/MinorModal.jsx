import { useState, useEffect } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, ModalHeader } from '@chakra-ui/react';
import he from 'he';
import getData from '../../utils/getData';
import './Degrees.css';

const MinorModal = ({ isOpen, onClose, selectedCourse }) => {
    const [course, setCourse] = useState(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getData(`course/courseID=${selectedCourse}`)
        .then(json => { 
            setCourse(json);
            setLoaded(true);
        });
	}, [selectedCourse]);

    // Wait for the course to match selectedCourse
    if (!loaded || course.courseID != selectedCourse) return (
        <h3 className='course-loading'>Loading Course...</h3>
    );

    return ( 
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            returnFocusOnClose={false}
            isCentered
            size={'xl'}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader className='course-title'>
                    <h1>{ course.courseID + " - " + he.decode(course.title) }</h1>
                    <ModalCloseButton />
                </ModalHeader>

                <ModalBody className='course-desc'>
                    <p>{course.description}</p>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default MinorModal;