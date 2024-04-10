import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Barbershop Fade',
	icons: {
		icon: '/favicon.ico'
	},
	description: 'Barbershop Fade je moderna brijačnica i frizerski salon u gradu Sisku',
	authors: [{name:'VelikaPalacinka'}],
	keywords: ['brijačnica', 'barbershop', 'barber shop', 'frizerski salon', 'fade', 'frizerski salon fade', 'barber shop fade', 'barbershop fade'],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
