import Image from 'next/image';
import GridyImages from './components/GridyImages';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';

export default function Home() {
	return (
		<>
			<HeroSection />
			<div className="my-16 mx-8">
				<GridyImages />
			</div>
			<Footer />
		</>
	);
}
