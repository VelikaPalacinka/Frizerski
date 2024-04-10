'use client'
import Link from 'next/link';
import styles from './components.module.scss';
import { useEffect, useState } from 'react';

export default function Navbar() {

	return (
		<>
		<div className={styles.navbar} >
			<Link className={styles.logo} href="/">
				LOGO
			</Link>
			<Link className={styles.naruci} href="/naruciSe">Narući se</Link>
		</div>
		</>
	);
}
