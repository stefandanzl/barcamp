<script lang="ts">
import { Button, Layout } from 'stwui';
</script>
<Layout class=" h-full text-default-content">
	<div class="fixed top-0 left-0 right-0 h-[var(--sat)] z-10">
	<Layout.Header class="flex-row static z-0 justify-between p-8 bg-surface">
		<Button href="/"><h2>BarCamp Graz</h2></Button>
        <div>	
            <Button href="/login">Login</Button>
            <Button href="/register">Register</Button>
        </div>
	</Layout.Header>
	</div>
	<Layout.Content>
		<Layout.Content.Body >



<div class="h-screen">
	<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
		<div class="sm:mx-auto sm:w-full sm:max-w-sm">
			<slot />
		</div>
	</div>
</div>




</Layout.Content.Body
>
</Layout.Content>

</Layout>