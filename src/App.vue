<template>
	<v-app>
		<v-content>
		<Search/>
		</v-content>
	</v-app>
</template>

<script>
	import Search from './components/Search'

	export default {
		components: {
			Search
		}
	}
</script>

<style>
	.application {
		background-image: linear-gradient(320deg, #000000 0%, #554e59 75%) !important;
	}
	.v--modal-overlay .v--modal-box {
		width: 30em;
		height: 60em;
		background: linear-gradient(to right, #e7d8fa 0, #b6b3d1 50%, #d8b2b2 100%);
		border-radius: 30px;
		font-family: Lato;
	}
</style>

