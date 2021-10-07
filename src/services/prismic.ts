import Prismic from '@prismicio/client';

export function getPrismiClient(req?: unknown) {
	const prismic = Prismic.client(
		process.env.PRISMIC_ENTRY_POINT,
		{ 
			req,
			accessToken: process.env.PRISMIC_ACCESS_TOKEN
		}
	)

	return prismic;
}