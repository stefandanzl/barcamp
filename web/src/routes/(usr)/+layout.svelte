<script lang="ts">
	// import "../layout.css"
	import { Button, Layout } from 'stwui';
	import { Tabs } from 'stwui';
	import { Toggle } from 'stwui';
	import { page } from '$app/stores';  
	

    const home =  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>home-account</title><path d="M12,3L2,12H5V20H19V12H22L12,3M12,8.75A2.25,2.25 0 0,1 14.25,11A2.25,2.25 0 0,1 12,13.25A2.25,2.25 0 0,1 9.75,11A2.25,2.25 0 0,1 12,8.75M12,15C13.5,15 16.5,15.75 16.5,17.25V18H7.5V17.25C7.5,15.75 10.5,15 12,15Z" /></svg>';
    const topic = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>text-box-edit-outline</title><path d="M10 21H5C3.89 21 3 20.11 3 19V5C3 3.89 3.89 3 5 3H19C20.11 3 21 3.89 21 5V10.33C20.7 10.21 20.37 10.14 20.04 10.14C19.67 10.14 19.32 10.22 19 10.37V5H5V19H10.11L10 19.11V21M7 9H17V7H7V9M7 17H12.11L14 15.12V15H7V17M7 13H16.12L17 12.12V11H7V13M21.7 13.58L20.42 12.3C20.21 12.09 19.86 12.09 19.65 12.3L18.65 13.3L20.7 15.35L21.7 14.35C21.91 14.14 21.91 13.79 21.7 13.58M12 22H14.06L20.11 15.93L18.06 13.88L12 19.94V22Z" /></svg>';
    const vote =  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>vote</title><path d="M18,13H17.32L15.32,15H17.23L19,17H5L6.78,15H8.83L6.83,13H6L3,16V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V16L18,13M17,7.95L12.05,12.9L8.5,9.36L13.46,4.41L17,7.95M12.76,2.29L6.39,8.66C6,9.05 6,9.68 6.39,10.07L11.34,15C11.73,15.41 12.36,15.41 12.75,15L19.11,8.66C19.5,8.27 19.5,7.64 19.11,7.25L14.16,2.3C13.78,1.9 13.15,1.9 12.76,2.29Z" /></svg>';

    interface Tab {
		href: string;
		title: string;
		data: string;
	}

	const tabs: Tab[] = [
		{
			href: '/home',
			title: 'Home',
			data: home
		},
		{
			href: '/topic',
			title: 'Topic',
			data: topic
		},
		{
			href: '/vote',
			title: 'Vote',
			data: vote
		}
	];

	let currentTab = $page.url.pathname ;



	import { Dropdown, Badge } from 'stwui';

let visible = false;

 function closeDropdown() {
	 visible = false;
 }

 function toggleDropdown() {
	 visible = !visible;
 }
</script>



<Layout class=" h-full text-default-content">
	<div class="fixed top-0 left-0 right-0 h-[var(--sat)] z-10">
	<Layout.Header class="flex-row static z-0 justify-between p-8 bg-surface">
		<Button href="/"><h2>BarCamp Graz</h2></Button>

		<div class="w-10">
			<Button href="/dash" type="primary">Organisator</Button>
		</div>
		<div  class="w-1/2">
			<Tabs {currentTab} variant="bar">
				{#each tabs as tab}
					<Tabs.Tab key={tab.href} href={tab.href} on:click={() => (currentTab = tab.href)}>
						<Tabs.Tab.Icon slot="icon" data={tab.data} />
						{tab.title}
					</Tabs.Tab>
				{/each}
			</Tabs>
		</div>
		<div class="w-1/8">
			<Dropdown bind:visible={visible}>
				<button
					aria-label="dropdown toggle"
					slot="trigger"
					on:click={toggleDropdown}
					type="button"
					class="bg-white flex text-sm rounded-full h-10 w-10 active:hover:animate-none active:hover:scale-95"
					id="user-menu-button"
				>
					<span class="sr-only">Open user menu</span>
					<img
						class="h-full w-full rounded-full"
						src=""
						alt=""
					/>
				</button>
				<Dropdown.Items slot="items">
					<Dropdown.Items.Item on:click={closeDropdown} label="Item 1" />
					<Dropdown.Items.Item on:click={closeDropdown} label="Item 2" />
					<Dropdown.Items.Item on:click={closeDropdown} label="Item 3" />
				</Dropdown.Items>
			</Dropdown>
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