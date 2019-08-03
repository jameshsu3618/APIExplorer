<template>
	<v-card-text v-if="data.length">
		<v-layout row wrap justify-center v-for="i in 13">
			<div class="category" v-if="filterData(data,i)[0]"><h4 class="category-title">{{kinds[i-1]}}</h4></div>
			<div
				class="shadow text-xs-center my-3 mx-3 tile-card"
				v-for="tile in filterData(data,i)"
			>
				<v-avatar
					:tile="true"
					size="160"
					class="elevation-4 tile-box mt-3"
					@click="toiTunes(tile)"
				>
					<img :src="resizeArtworkUrl(tile)" alt="Image Cover" class="tile-cover">
					<v-icon x-large class="play-btn" color="white">play_circle_filled</v-icon>
				</v-avatar>
				<v-flex class="text-xs-left mx-2 py-3 tile-info" xs12>
					<div class="subheading font-weight-medium white--text">{{ getName(tile) }}</div>
					<div class="text--lighten-1 grey--text">{{ tile.artistName}}</div>
					<div class="grey--text">{{ getReleaseYear(tile) }}</div>
					<div class="grey--text">{{ getGenre(tile) }}</div>
					<v-icon :class="{favorited: isFav(tile),'favorite-btn': true}" :key="favLength" v-on:click="favorite(tile)" >favorite</v-icon>
				</v-flex>
			</div>
		</v-layout>
	</v-card-text>
</template>
<script>
	export default {
		props: ['data', 'favoriteList'],
		data: function(){
			return {
				kinds: ['artist', 'collection', 'book', 'album', 'coached-audio', 'feature-movie', 'interactive- booklet', 'music-video', 'podcast', 'podcast-episode', 'software-package', 'song', 'tv- episode'],
				favLength: Object.keys(this.favoriteList).length,
			}
		},
		methods:{
			filterData(data, index){
				let kind = this.kinds[index-1];
				if (index < 3){
					return data.filter(function(t) {
	         			return t.wrapperType == kind;
	    		 })
				}
				else{
					return data.filter(function(t) {
	         			return t.kind == kind;
	    			})
	    		}
			},
			isFav(data){
				return this.isInFavList(data);
			},
			isInFavList(data){
				let url = "";
				if (data.collectionViewUrl == undefined){
					url = data.artistLinkUrl != undefined? data.artistLinkUrl : data.previewUrl;
				}else{
					url = data.collectionViewUrl;
				}
				let isInFavList = url in this.favoriteList;
				return isInFavList;
			},
			updateFavStore(){
				let favList = JSON.stringify(this.favoriteList);
				localStorage.setItem('favoriteList', favList);
			},
			favorite (data){
				let url = "";
				if (data.collectionViewUrl == undefined){
					url = data.artistLinkUrl != undefined? data.artistLinkUrl : data.previewUrl;
				}else{
					url = data.collectionViewUrl;
				}
				if (this.isInFavList(data)){
					delete this.favoriteList[url];
					this.updateFavStore();
					this.favLength -=1;
				}
				else{
					this.favoriteList[url] = data;
					this.updateFavStore();
					this.favLength +=1;
				}
			},
			getReleaseYear (data) {
				return data.releaseDate != undefined ? data.releaseDate.substr(0, 4) : '';
			},
			getGenre (data) {
				return data.primaryGenreName != undefined ? data.primaryGenreName : '';
			},
			getName (data) {
				return data.collectionName != undefined ? data.collectionName : data.trackName;
			},
			resizeArtworkUrl (data, size= '160x160') {
				return data.artworkUrl100 != undefined ? data.artworkUrl100.replace("100x100", `${size}`) : '';
			},
			toiTunes (data) {
				if (data.collectionViewUrl == undefined){
					window.open(data.artistLinkUrl, '_blank');
				}else{
					window.open(data.collectionViewUrl, '_blank');
				}
			},
		},
	}
</script>
<style>
	img[src=""] {
	    display: none;
	}
	.v-icon {
		color: white !important;
	}
	.v-icon.favorite-btn {
		position: absolute;
    	padding-left: 150px;
    	margin-top: -20px;
	}
	.v-icon.favorited{
		color: pink !important;
	}
	@media screen and (min-width: 800px) {
		.tile-card:hover {
			-webkit-transform: scale(1.12, 1.12);
			transform: scale(1.12, 1.12);
		}
	}

	.tile-card {
		width: 200px;
		background: #807c7c;
		border-radius: 5%;
	}

	.tile-card:hover {
		cursor: pointer;
	}

	.tile-card:hover .play-btn {
		display: block;
	}

	.tile-cover,
	.tile-cover img {
		border-radius: 2px !important;
	}

	.tile-cover:active {
		animation: pop 0.3s linear 1;
	}

	@keyframes pop{
		50%  { transform: scale(1.02); }
	}

	.tile-info div {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.v-card {
		height: 100%;
	}

	.v-card__title,
	.v-card__text {
		background: #262B48;
	}
	.play-btn {
		padding-top: 110px;
		padding-left: 100px;
		position: absolute;
		right: 0;
		top: 0;
		display: none;
		z-index: 9;
	}
	.category {
		height: 50px;
	    text-align: center;
	    width: 100%;
	    font-size: 28px;
	    text-transform: uppercase;
	}
	.v-card__title, .v-card__text {
		background: #473f41;
	}
	.category-title {
		width: 20em;
		margin:auto;
		background: linear-gradient(to right, #5d5a61 0, #af9a9a 50%, #5d5a61 100%);
	    border-radius: 16px;
	    color: white;
	}
</style>
