<template>
	<v-flex>
		<v-card>
			<background
				:data="data"
				:search="search"
				:favoriteMode="favoriteMode"
				:error="error"
			/>
			<v-flex class="mt-0 align-right" xs2>
				<v-btn class="modal-btn" outline color="white" v-on:click='show()'>
					<v-icon>settings</v-icon>
				</v-btn>
			</v-flex>
			<modal name="setting-modal":width="300" :height="300" >
				<settings-modal :settings="settings">
				</settings-modal>
			</modal>
			<div class="search-panel">
				<div class="search-bar">
					<v-form @submit.prevent="submitSearch()">
						<v-layout row>
							<v-flex class="mt-0" xs2>
								 <v-btn outline :color="favoriteMode? settings['btnColor']:'white'"  v-on:click="toggleFavorite">
									<v-icon>favorite</v-icon>
								</v-btn>
							</v-flex>
							<v-flex xs10>
								<v-text-field
									v-model="search"
									class="mt-0"
									color="white"
									dark
									clearable
									v-on:keyout="submitSearch()"
									v-on:keyup="toggleError()"
									:label="getLabel()"
								></v-text-field>
							</v-flex>
							<v-flex class="mt-0" xs2>
								<v-btn outline color="white" type="submit">
									<v-icon>search</v-icon>
								</v-btn>
							</v-flex>
						</v-layout>
					</v-form>
				</div>
				<v-layout row class="filters">
					<v-flex xs4 class="mt-0">
						 <v-btn outline  key="filter"  :color="isFiltered(0) ? settings['btnColor']:'white'" v-on:click="toggleFilter('song', 0)">
							<v-icon>music_note</v-icon>
						</v-btn>
					</v-flex>
					<v-flex xs4 class="mt-0">
						 <v-btn outline key="filter" :color="isFiltered(1)? settings['btnColor']:'white'" v-on:click="toggleFilter('album', 1)">
							<v-icon>album</v-icon>
						</v-btn>
					</v-flex>
					<v-flex xs4 class="mt-0">
						 <v-btn outline :key="filter" :color="isFiltered(2)? settings['btnColor']:'white'" v-on:click="toggleFilter('movie', 2)" >
							<v-icon>movie</v-icon>
						</v-btn>
					</v-flex>
					<v-flex xs4 class="mt-0">
						 <v-btn outline  key="filter" :color="isFiltered(3)? settings['btnColor']:'white'" v-on:click="toggleFilter('podcast', 3)" >
							<v-icon>radio</v-icon>
						</v-btn>
					</v-flex>
					<v-flex xs4 class="mt-0">
						 <v-btn outline key="filter"  :color="isFiltered(4)? settings['btnColor']:'white'" v-on:click="toggleFilter('allArtist', 4)">
							<v-icon>people</v-icon>
						</v-btn>
					</v-flex>
				</v-layout>
			</div>
			<data-tiles
				:data="data"
				:favoriteList="favoriteList"
			/>
		</v-card>
	</v-flex>
</template>

<script>
	/* =====================================================
	to-do rewrite app to import search and everything else
	independently (refactor out favorite into a component)
	and utilize store
	====================================================== */
	import itunessearchapi from '../itunessearchapi';
	import DataTiles from './DataTiles.vue';
	import Background from './Background.vue'
	import SettingsModal from './SettingsModal.vue'
	export default {
		name: 'Search',
		components: {
			DataTiles,
			Background,
			SettingsModal,
		},
		data () {
			return {
				favoriteList: localStorage.getItem('favoriteList')? JSON.parse(localStorage.getItem('favoriteList')): {},
				favoriteMode: false,
				data: [],
				search: '',
				filter: '',
				filtered: [false, false, false, false, false],
				settings: localStorage.getItem('settings')? JSON.parse(localStorage.getItem('settings')): {'country': 'US', 'numResults': 50,'btnColor':'pink'},
				error: '',
			}
		},
		watch: {
			search: function (val) {
				if (!val) {
					this.data = []
				}
			}
		},

		methods: {
			show () {
				this.$modal.show('setting-modal');
			},
			hide () {
				this.$modal.hide('setting-modal');
			},
			getLabel(){
				if (this.filter =="" || this.filter =='all'){
					return "Enter whatever your heart desires"
				}
				else
					return `Enter ${this.filter != 'allArtist' ? this.filter: 'artist'} name`;
			},
			displayText: function(data){
				if (this.search == "" || this.search == null){
					return "iTunes Explorer";
				}
				else{
					return data.length ? "" : 'Typing.....';
				}
			},
			toggleError(){
				this.error = "";
			},
			isFiltered(index){
				return this.filtered[index];
			},
			toggleFilter(filter, index){
				if (this.filtered[index]){
					this.filtered[index] = false;
					this.filter = "";
				}
				else{
					this.filtered = [false, false, false, false, false];
					this.filtered[index] = true;
					this.filter = filter;
				}
				this.submitSearch();
			},
			toggleFavorite (){
				this.favoriteMode = !this.favoriteMode;
				if (this.favoriteMode){
					let favList = this.favoriteList
					this.data = Object.keys(favList).map(function(key) {return favList[key];});
				}
				else {
					this.data = [];
				}
			},
			submitSearch () {
				if (this.search == "" || this.search == null){
					return;
				}

				this.favoriteMode = false;
				const params = {
					country:  `${this.settings['country']}`,
					term: `${this.search}`,
					limit: `${this.settings['numResults']}`,
				};
				if (this.filter != "all" && this.filter != ""){
					params['entity'] = `${this.filter}`;
				}
				localStorage.setItem('settings', JSON.stringify(this.settings));
				itunessearchapi(params)
					.then((response) => {
						this.error = "";
						let data = response.results.sort((a, b) => a.releaseDate > b.releaseDate ? -1 : 1);
						data = data.sort((a, b) => a.wrapperType < b.wrapperType ? -1 : 1);
						data = data.sort((a, b) => a.kind < b.kind ? -1 : 1);
						this.data = data;
					})
					.catch(e => {
						this.error = e['message'];
					});
			},
		},
	}
</script>

<style scoped>
	.v-btn {
		min-width: 0px !important;
	}
	.flex.xs4 {
		margin-right: 39px
	}
	.modal-btn {
		position:absolute;
		top: 2em;
		right: 5em;
	}
	.filters {
		margin: auto;
		width: 600px;
		padding-right: 50px;
		padding-left: 20px;
	}
	.search-bar {
		margin: auto;
		width: 600px;
		font-size: 18px;
		height: 46px;
		padding-right: 50px;
		padding-left: 20px;
	}
	.search-panel {
		position: sticky;
		top: 0px;
		z-index: 20;
		padding: 10px 0;
		background: linear-gradient(to right, #5d5a61 0, #af9a9a 50%, #5d5a61 100%);
	}
</style>
