'use client'
import Link from 'next/link';
import Image from 'next/image';
import styles from './components.module.scss';
import logo from '../img/logo.png';

export default function Navbar() {

	return (
		<>
		<div className={styles.navbar} >
			<Link className={styles.logo} href="/">
				<Image src={logo} fill alt='Logo'/>
			</Link>
			<Link className={styles.naruci} href="/naruciSe">Naruči se</Link>
		</div>
		</>
	);
}
