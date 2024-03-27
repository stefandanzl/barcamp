import { pbAsAdmin } from '$lib/server/pocketbase/admin.js'
import { error } from '@sveltejs/kit'

export async function load({ locals }) { 
    if (!locals.user?.id) return error

    const pb = await pbAsAdmin()
    const records = await pb.collection('topics').getFullList({filter: 'creator = "'+ locals.user.id + '"'})

    // const records = locals
    // return records
    return {records}
}