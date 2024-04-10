import Link from 'next/link';
import styles from './components.module.scss';

export default function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.text}>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</div>
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.6497976150454!2d16.370899176162087!3d45.496996471074496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4766f308f2280b81%3A0xfcac3b57125d4e67!2sBarberShop%20Fade!5e0!3m2!1shr!2shr!4v1712560039275!5m2!1shr!2shr" loading="lazy"></iframe>
		</div>
	);
}
