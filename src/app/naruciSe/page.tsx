import styles from './page.module.scss';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function NaruciSe() {
	return (
		<main className={styles.main}>
			<Navbar />
			<p>Narući se</p>
			<Footer />
		</main>
	);
}
