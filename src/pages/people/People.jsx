import { useState, useEffect } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react'
import getData from '../../utils/getData'
import PeopleList from './PeopleList';
import './People.css';

const People = () => {
    const [loaded, setLoaded] = useState(false);
    const [people, setPeople] = useState();
    
	useEffect(() => {
        getData('people/')
        .then(json => { 
            setPeople(json);
            setLoaded(true);
        });
	}, []);

    if (!loaded) return (
        <h3>Loading...</h3>
	);

    return (
        <section className='people' id='people'>
            <h2>{people.title}</h2>
            <p>{people.subTitle}</p>

            <Tabs isFitted variant='unstyled'>
                <TabList borderBottom='1px' borderColor='main.gray.200'>
                    <Tab _selected={{ fontWeight: 'bold',}}>Faculty</Tab>
                    <Tab _selected={{ fontWeight: 'bold',}}>Staff</Tab>
                </TabList>
                <TabIndicator
                    height='2px'
                    bg='main.orange'
                    mt='-1.45px'
                />
                <TabPanels>
                    <TabPanel>
                        <PeopleList people={people.faculty} />
                    </TabPanel>
                    <TabPanel>
                        <PeopleList people={people.staff} />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </section>
    );
};

export default People;
