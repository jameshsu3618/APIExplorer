<template>
	<v-flex>
		<div>
			<div xs8 class="settings-menu">
				<div class="header">
					iTunes Explorer Settings
				</div>
				<div class="setting-row">
					<div class="settings">
						Num. of Results
					</div>
					<select class="settings setting-select" v-model="settings['numResults']">
						<option disabled value="">Please select one</option>
						<option>50</option>
						<option>100</option>
						<option>200</option>
					</select>
				</div>
				<div class="setting-row">
					<div class="settings">
						Country
					</div>
					<select class="settings setting-select" v-model="settings['country']">
						<option disabled value="">Please select one</option>
						<option v-for="(country, index) in countries" :value="index">{{country}}</option>
					</select>
				</div>
				<div class="setting-row">
					<div class="settings">
						Button Color
					</div>
					<select class='settings setting-select' v-model="settings['btnColor']">
						<option disabled value="">Please select one</option>
						<option v-for="(color, index) in btnColor" :value="color"><span :class="color">{{color}}</span></option>
					</select>
				</div>
			</div>
		</div>
	</v-flex>
</template>
<script>
	export default {
	name: 'Settingmdodal',
	props: ['settings'],
	data: function (){
		return {
			countries: {'AU':	'Australia', 'BR':	'Brazil','CA':	'Canada', 'CN':	'China','TW':	'Taiwan','GB':	'United Kingdom','US':	'United States'},
			btnColor: ['red', 'orange', 'yellow', 'green','blue', 'pink', 'purple'],
		}
	}
}
</script>
<style scoped>
	.header{
		padding-top: 8px;
		margin-bottom: 6px
	}
	.settings-menu {
		text-align: center;
	}
	.setting-select {
		width: 45%;
		border: 1px solid #aaa;
		box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
		border-radius: .5em;
		-moz-appearance: none;
		-webkit-appearance: none;
		appearance: none;
	}
	.setting-row {
		padding-top: 1em;
	}
	.settings{
		width: 45%;
		display: inline-block;
		padding: 3px;
	}

</style>