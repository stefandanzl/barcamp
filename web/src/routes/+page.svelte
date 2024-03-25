<script lang="ts">
	import './layout.css';
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
		<Layout.Content.Body class="flex items-center justify-center min-h-[600px]"
			>
        <h1>Welcome to BarCamp 2024 User App!</h1>


			</Layout.Content.Body
		>
	</Layout.Content>

</Layout>