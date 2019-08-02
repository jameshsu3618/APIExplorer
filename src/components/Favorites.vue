<template>
	<v-btn outline color="white" type="button">
		<v-icon>heart</v-icon>
	</v-btn>
</template>
<script>
	export default {
	  name: 'Favorites',
	  props: ['favorites'],
		methods: {
			displayText: function(data){
				if (this.search == "" || this.search == null)
					return "iTunes Explorer";
				else
					return data.length ? "" : 'Typing.....';
			},

			resizeArtworkUrl (album, size= 160) {
				return album.artworkUrl100.replace("100x100", `${size}`)
			},

		}
	}
</script>