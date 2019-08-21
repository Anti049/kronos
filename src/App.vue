<template>
	<v-app id="inspire">
		<v-navigation-drawer
			v-model="drawer"
			app
			clipped
			color="secondary darken-1"
		>
			<v-list>
				<v-list-item-group v-model="page" active-class="accent--text">
					<template v-for="(item, index) in sidebarPages">
						<v-list-item :key="item.text">
							<template v-slot:default="{ active, toggle }">
								<v-list-item-action>
									<v-icon>{{ item.icon }}</v-icon>
								</v-list-item-action>
								<v-list-item-content>
									<v-list-item-title
										v-text="item.text"
									></v-list-item-title>
								</v-list-item-content>
							</template>
						</v-list-item>
					</template>
					<v-divider class="secondary" />
					<template v-for="(item, index) in sidebarOptions">
						<v-list-item :key="item.text">
							<template v-slot:default="{ active, toggle }">
								<v-list-item-action>
									<v-icon>{{ item.icon }}</v-icon>
								</v-list-item-action>
								<v-list-item-content>
									<v-list-item-title
										v-text="item.text"
									></v-list-item-title>
								</v-list-item-content>
							</template>
						</v-list-item>
					</template>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar app clipped-left color="primary darken-1">
			<v-app-bar-nav-icon
				class="accent--text"
				@click.stop="drawer = !drawer"
			></v-app-bar-nav-icon>
			<v-toolbar-title class="headline text-uppercase">
				<span class="accent--text">Kronos</span>
				<span class="secondary--text"> //</span>
				<span class="font-weight-light accent--text text--darken-1"
					>Destiny Utility Tool</span
				>
			</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn
				text
				href="https://github.com/vuetifyjs/vuetify/releases/latest"
				target="_blank"
				color="accent"
			>
				<span class="mr-2">Latest Release</span>
				<v-icon>mdi-open-in-new</v-icon>
			</v-btn>
		</v-app-bar>

		<v-content class="primary darken-2">
			<v-container class="fill-height" fluid></v-container>
		</v-content>
	</v-app>
</template>

<script>
export default {
	name: 'Kronos',
	props: {
		source: String,
	},
	data: () => ({
		page: 'Inventory',
		drawer: null,
		sidebarPages: [
			{
				text: 'Inventory',
				icon: 'dashboard',
				link: './InventoryPage',
			},
			{
				text: 'Progress',
				icon: 'assignment_turned_in',
				link: './InventoryPage',
			},
			{
				text: 'Vendors',
				icon: 'shopping_cart',
				link: './InventoryPage',
			},
			{
				text: 'Collections',
				icon: 'collections_bookmark',
				link: './InventoryPage',
			},
			{
				text: 'Loadouts',
				icon: 'view_column',
				link: './InventoryPage',
			},
		],
		sidebarOptions: [
			{
				text: 'Settings',
				icon: 'settings',
				link: './InventoryPage',
			},
			{
				text: 'About KRONOS',
				icon: 'info',
				link: './InventoryPage',
			},
			{
				text: 'Changelog',
				icon: 'list',
				link: './InventoryPage',
			},
		],
	}),
	created() {
		this.$vuetify.theme.dark = true;
	},
};
</script>
