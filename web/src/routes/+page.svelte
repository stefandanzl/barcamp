<script lang="ts">
	// import './layout.css';
	import {  Layout } from 'stwui';
	import Button from 'stwui/button'
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
		<Layout.Content.Body class="flex flex-col items-center  min-h-[600px] z-0 p-20">
        <h1 class="p-8">Welcome to BarCamp 2024 User App!</h1>

	
		<div>
			<Button on:click={() => console.log("I've been clicked!")}>No Type</Button>
		
			<Button type="primary">primary</Button>
			<Button type="danger">danger</Button>
			<Button type="ghost">ghost</Button>
			<Button type="link" href="https://google.com">link</Button>
		</div>



			</Layout.Content.Body
		>
	</Layout.Content>

</Layout>