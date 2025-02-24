import { useState } from 'react';
import { useDisclosure } from '@chakra-ui/react'
import PeopleModal from "./PeopleModal";

const PeopleList = ({ people }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedPerson, setSelectedPerson] = useState(null);

    const openModal = (person) => {
        setSelectedPerson(person);
        onOpen();
    };

    return (
        <>
        <div className='people-list'>
            { people.map((person) => {
                const [firstName, ...lastNames] = person.name.split(' ');
                const lastName = lastNames.join(' ');
                
                return (
                    <div className='person' key={person.username} onClick={() => openModal(person)}>
                        <img src={person.imagePath} alt={person.name} />
                        <div className="person-name">
                            <p>{firstName}</p>
                            <p>{lastName}</p>
                        </div>
                    </div>
                );
            })}
        </div>
        
        {selectedPerson && (
            <PeopleModal
                isOpen={isOpen}
                onClose={onClose}
                person={selectedPerson}
            />
        )}
        </>
    );
};

export default PeopleList;
