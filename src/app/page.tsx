import styles from './page.module.scss';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Carousel from './components/carousel';

const IMG = [{image: 'https://picsum.photos/seed/123/500'}, 
{image: 'https://picsum.photos/seed/111/500'}, 
{image: 'https://picsum.photos/seed/114/500'},
{image: 'https://picsum.photos/seed/115/500'},
{image: 'https://picsum.photos/seed/116/500'},
{image: 'https://picsum.photos/seed/117/500'},
{image: 'https://picsum.photos/seed/118/500'},
{image: 'https://picsum.photos/seed/119/500'}, 
{image: 'https://picsum.photos/seed/112/500'}]

export default function Home() {
	return (
		<>
		<Navbar />
		<main className={styles.main}>
				<div className={styles.hero}>
						<h1>BarberShop fade</h1>
						<h3>Barbershop Fade je moderna brijačnica i frizerski salon u gradu Sisku.</h3>
				</div>
				<div className={styles.usluge}>
					<h2>Usluge</h2>
					<h3>U barbershopu Fade spajamo stare zanate sa novim načinima.</h3>
					<h4>U našoj ponudi nudimo klasično i moderno šišanje, klasčno brijanje, spa brijanje i uređivanje brade. Nudimo i tretmane za bradu i lice.</h4>
				</div>
				<Carousel data={IMG} />
		</main>
		<Footer />
		</>
	);
}
