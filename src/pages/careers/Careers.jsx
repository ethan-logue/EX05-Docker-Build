import { useState, useEffect } from 'react';
import getData from '../../utils/getData';
import EmploymentTable from './EmploymentTable';
import './Careers.css';

const Careers = () => {
    const [loaded, setLoaded] = useState(false);
	const [employment, setEmployment] = useState();
    
	useEffect(() => {
        getData('employment/')
        .then(json => { 
            setEmployment(json);
            setLoaded(true);
        });
	}, []);
    
    if (!loaded) return (
        <h3>Loading...</h3>
    );

    return (
        <section className='careers' id='careers'>
            <div>
                <h2>Careers</h2>
                <p className='about-tagline'>{employment.introduction.title}</p>
                {employment.introduction.content.map((item, index) => (
                    <div className='careers-about' key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>

            <div>
                <h3>{employment.degreeStatistics.title}</h3>
                <div className='careers-stats'>
                    {employment.degreeStatistics.statistics.map((item, index) => (
                        <div className='stat-item' key={index}>
                            <h4>{index == 2 ? item.value + "%" : item.value}</h4>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='careers-list-container'>
                <div className='careers-list'>
                    <h3>{employment.employers.title}</h3>
                    {employment.employers.employerNames.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>
    
                <div className='careers-list'>
                    <h3>{employment.careers.title}</h3>
                    {employment.careers.careerNames.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>
            </div>

            <EmploymentTable
                title={employment.coopTable.title}
                data={employment.coopTable.coopInformation}
                headings={['Employer', 'Degree', 'City', 'Term']}
            />

            <EmploymentTable
                title={employment.employmentTable.title}
                data={employment.employmentTable.professionalEmploymentInformation}
                headings={['Employer', 'Degree', 'City', 'Title', 'Start Date']} 
            />
        </section>
    );
};

export default Careers;
