<script lang="ts">
	import { pb } from '$lib/pocketbase/client';
    import { Button, Layout } from 'stwui';
    let records : string;
    let rec: Array<unknown> = []






</script>


<div class="flex flex-col w-full h-full p-10">
    
    
<div class="w-5">
<Button type="default" on:click={async ()=> {

    records = JSON.stringify(await pb.collection('topics').getFullList(),null,4)



}}><span>Show me</span></Button>
</div>
<div class="whitespace-pre-wrap w-1/3">{records}</div>



</div>




