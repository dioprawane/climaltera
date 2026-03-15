import type { PageLoad } from './$types';
import { getServiceBySlug } from '$lib/data/services';
import { error } from '@sveltejs/kit';

export const load: PageLoad = ({ params }) => {
	const service = getServiceBySlug(params.slug);

	if (!service) {
		error(404, { message: 'Service introuvable' });
	}

	return { service };
};
