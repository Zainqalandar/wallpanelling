import Image from 'next/image';
import GridyImages from './components/GridyImages';
import Footer from './components/Footer';

export default function Home() {
	return (
		<>
		
			<div className="my-16 mx-8">
				<GridyImages />
			</div>
			<Footer />
		</>
	);
}
