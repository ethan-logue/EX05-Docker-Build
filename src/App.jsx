import Header from './pages/Header';
import Nav from './pages/Nav';
import About from './pages/about/About';
import Degrees from './pages/degrees/Degrees';
import Careers from './pages/careers/Careers';
import People from './pages/people/People';
import './App.css';

function App() {
	return (
		<>
		<Header />

		<main className='app'>
			<Nav />
			<section className='content'>
				<About />
				<Degrees />
				<Careers />
				<People />
			</section>
		</main>
		</>
	);
};

export default App
