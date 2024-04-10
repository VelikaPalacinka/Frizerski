import styles from './page.module.scss';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function NaruciSe() {
	return (
		<main className={styles.main}>
			<Navbar />
			<div className={styles.form}>
				<form method='POST'>
					<div>
						<label>Name</label>
						<input type='text' name='name'/>
					</div>
					<div>
						<label>Email</label>
						<input type='email' name='email'/>
					</div>
					<div>
						<label>Telefon</label>
						<input type='tel' name='mobitel'/>
					</div>
					<div>
						<label>Vrijeme</label>
						<input type='date' name='date'/>
					</div>
					<button type='button' name='submit'>Submit</button>
				</form>
				<p>Ovo je samo placeholder</p>
			</div>
			<Footer />
		</main>
	);
}
