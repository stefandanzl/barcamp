import { redirect } from '@sveltejs/kit';

export function load({ locals }) {
	if (!locals.user) redirect(303, '/login');

	
	return {
		email : locals.user.email,
		id: locals.user.id
	}
}


