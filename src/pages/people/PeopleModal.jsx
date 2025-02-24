import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, Badge, Tooltip } from '@chakra-ui/react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { SlLocationPin } from 'react-icons/sl';
import { BsLink45Deg } from 'react-icons/bs';
import './PeopleModal.css';

const PeopleModal = ({ isOpen, onClose, person }) => {
    const interests = person.interestArea.split(' ');

    const contactDetails = [
        person.office ? {
            icon: <SlLocationPin />,
            link: 'https://maps.rit.edu/?details=Golisano+Hall',
            text: person.office,
        } : null,
        person.email ? {
            icon: <AiOutlineMail />,
            link: `mailto:${person.email}`,
            text: person.email,
        } : null,
        person.phone ? {
            icon: <AiOutlinePhone />,
            link: `tel:${person.phone}`,
            text: person.phone,
        } : null,
        person.website ? {
            icon: <BsLink45Deg />, 
            link: person.website, 
            text: 'Personal Website' 
        } : null,
    ].filter(Boolean);

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
                <ModalCloseButton />

                <ModalBody className='modal-body'>
                    <div className='person-main-info'>
                        <img src={person.imagePath} alt={person.name} />
                        <div className='person-details'>
                            <h1>{person.name}</h1>
                            <h3>{person.title}</h3>
                            <h4>{person.tagline}</h4>
                            <div className='contact-details-container'>
                                {contactDetails.map((detail, index) => (
                                    <span key={index} className='contact-details'>
                                        {detail.icon}
                                        <a target='_blank' href={detail.link}>{detail.text}</a>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    {person.interestArea && (
                        <Tooltip label='Interest Areas'>
                            <div className='interests'>
                                {interests.map((interest, index) => (
                                    <Badge bg='main.gray.200' key={index} mr='1'>
                                        {interest}
                                    </Badge>
                                ))}
                            </div>
                        </Tooltip>
                    )}
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default PeopleModal;