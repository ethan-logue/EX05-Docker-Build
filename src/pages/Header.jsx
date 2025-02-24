import Logo from '.././assets/logo.svg';
import './Header.css';

const Header = () => {
    return (
        <>
        <header className='heading'>
			<a href='https://www.rit.edu'>
				<img className='rit-logo' src={Logo} alt="RIT Logo" />
			</a>
			<div>
				<h3 className='subtitle'>Golisano College</h3>
				<h1 className='title'>School of Information</h1>
			</div>
			<div className='quick-links'>
				<a href="https://www.rit.edu/computing/news">News</a>
				<a href="https://www.rit.edu/computing/directory">Directory</a>
				<a href="https://www.rit.edu/myrit/">myRIT</a>
			</div>
		</header>

		<div className='hero'>
			<div className='hero-overlay'></div>
			<img className='hero-image' src="https://cdn.rit.edu/images/program/2022-08/computing-and-information-technologies-bs_0.jpg" alt="student writing code" />
			<img className='hero-banner' src="https://www.rit.edu/marketing/drupal8base/sites/all/themes/uwbase/rit_bootstrap_2019/images/hero/big-orange-trail.png" alt="orange banner" />
			<h1 className='hero-title'>iSchool</h1>
		</div>
        </>
    );
};

export default Header;
