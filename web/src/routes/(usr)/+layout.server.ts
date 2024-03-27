import { redirect } from '@sveltejs/kit';

export function load({ locals }) {
	if (!locals.user || !locals.pb.authStore.isValid) redirect(303, '/login');

	

}


