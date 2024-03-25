<script lang="ts">
	import { Button, Layout } from 'stwui';
</script>
<Layout class=" h-full text-default-content">
	<div class="fixed top-0 left-0 right-0 h-[var(--sat)] z-10">
	<Layout.Header class="flex-row static z-0 justify-between p-8 bg-surface">
		<Button href="/"><h2>BarCamp Graz</h2></Button>
        <div>	
            
        </div>
	</Layout.Header>
	</div>
	<Layout.Content>
		<Layout.Content.Body class="flex items-center justify-center min-h-[600px]"
			>
        <slot />


			</Layout.Content.Body
		>
	</Layout.Content>

</Layout>