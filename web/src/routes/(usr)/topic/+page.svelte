
<script lang="ts">
    import { Post } from 'stwui';
    import { Card, Media, Button } from 'stwui';
 
    export let data;
    let chosen;
    // $: chosen;
        
 </script>
 
<!-- <div>{JSON.stringify(data.records, null, 4)}</div> -->
<div class="flex flex-col">

<div>{chosen}</div>

{#if chosen}
    <Button on:click={()=>{}}>Delete</Button>
{/if}






{#each data.records as topic}
<Card bordered={true} on:click={()=>{chosen = topic.id}}>
    <Card.Content slot="content">
       <Media>
          <Media.Content>
             <Media.Content.Title>{topic.title}</Media.Content.Title>
             <Media.Content.Description>{topic.description}</Media.Content.Description>
          </Media.Content>
       </Media>
    </Card.Content>
 </Card>
 {/each}


</div>