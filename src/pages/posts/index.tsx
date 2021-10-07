/* eslint-disable @next/next/no-document-import-in-page */
import { GetStaticProps } from 'next';
import { getPrismiClient } from '../../services/prismic';
import Prismic from '@prismicio/client';
import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts () {
	return (
		<>
			<Head>
				<title>Posts | Ignews</title>
			</Head>

			<main className={styles.container}>
				<div className={styles.posts}>
					<a href='#'>
						<time>12 de março de 2021</time>
						<strong>Creating some post for the website</strong>
						<p>Lorem ipsum dolor sit amet, consectetur adip</p>
					</a>
					<a href='#'>
						<time>12 de março de 2021</time>
						<strong>Creating some post for the website</strong>
						<p>Lorem ipsum dolor sit amet, consectetur adip</p>
					</a>
					<a href='#'>
						<time>12 de março de 2021</time>
						<strong>Creating some post for the website</strong>
						<p>Lorem ipsum dolor sit amet, consectetur adip</p>
					</a>
				</div>
			</main>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const prismic = getPrismiClient();

	const response = await prismic.query(
		[Prismic.predicates.at('document.type', 'post')],
		{
			fetch: ['post.title', 'post.content'],
			pageSize: 100,
		}
	);

	console.log(response);

	return { 
		props: {}
	};
}