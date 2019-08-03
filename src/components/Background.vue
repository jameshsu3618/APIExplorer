<template>
	<div class="top" :style="{backgroundImage: `url('https://images.unsplash.com/photo-1564106048-cb031ce0985f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3000&q=80')`}">
		<div class="headerContainer">
			<h5 class="headline text-xs-center grey--text text--lighten-3 mb-4 mt-2">{{displayText(data)}}</h5>
		</div>
		<div class="top overlay" v-if="data.length">
			<div class="slide-div">
				<s id="s1" v-if="data.length >= 1"></s>
				<s id="s2" v-if="data.length >= 2"></s>
				<s id="s3" v-if="data.length >= 3"></s>
				<s id="s4" v-if="data.length >= 4"></s>
				<s id="s5" v-if="data.length >= 5"></s>
				<div class="slider">
					<div v-for="index in Math.min(5, data.length)"
					:key="index">
						<div :style="{backgroundImage: `url(${resizeArtworkUrl(data[index-1], '400x600')})`}">
						</div>
					</div>
				</div>
				<div class="prevNext">
					<div><a href="#s5"></a><a href="#s2"></a></div>
					<div><a href="#s1"></a><a href="#s3"></a></div>
					<div><a href="#s2"></a><a href="#s4"></a></div>
					<div><a href="#s3"></a><a href="#s5"></a></div>
					<div><a href="#s4"></a><a href="#s1"></a></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Backgound',
	props: ['data', 'search', 'error'],
	methods: {
		displayText: function(data){
			if (this.search == "" || this.search == null){
				return "iTunes Explorer";
			}
			else{
				if (data.length){
					return '';
				}
				else {
					if (this.error == ''){
						return 'Typing';
					}
					else {
						return this.error['message'];
					}
				}
			}
		},
		resizeArtworkUrl (album, size= '160x160') {
			return album.artworkUrl100 != undefined ? album.artworkUrl100.replace("100x100", `${size}`) : '';
		},
	}
}
</script>
<style scoped>
	.top {
		height: 30em;
		position: relative;
		background: linear-gradient( rgba(84, 77, 100, 0.75), rgba(36, 34, 41, 0.75) );
		background-position: center, left, right;
		background-size: cover;
		background-repeat: no-repeat;
		z-index: 0;

	}
	.top.overlay {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0px;
		left: 0px;
		z-index: 1;
	}
	.headerContainer {
		padding-top: 10em;
		vertical-align: center;
	}
	.slide-div {
		position: relative;
		overflow: hidden;
		height: 100%; /* Or set a fixed height */
		box-sizing: border-box; -webkit-box-sizing: border-box; }
		html, body { height: 100%; }
		body { margin: 0; font: 16px/1.3 sans-serif;
	}

	/* NAVIGATION BUTTONS */
	/* ALL: */
	.slide-div >s:target ~ .bullets >* {      background: rgba(255, 255, 255, 0.5);}
	/* ACTIVE */
	#s1:target ~ .bullets >*:nth-child(1) {background: rgba(255, 255, 255,   1);}
	#s2:target ~ .bullets >*:nth-child(2) {background: rgba(255, 255, 255,   1);}
	#s3:target ~ .bullets >*:nth-child(3) {background: rgba(255, 255, 255,   1);}
	#s4:target ~ .bullets >*:nth-child(4) {background: rgba(255, 255, 255,   1);}
	#s5:target ~ .bullets >*:nth-child(4) {background: rgba(255, 255, 255,   1);}

	/* PREV/NEXT CONTAINERS VISIBILITY */
	/* ALL: */
	.slide-div >s:target ~ .prevNext >* {      visibility: hidden;}
	/* ACTIVE: */
	#s1:target ~ .prevNext >*:nth-child(1) {visibility: visible;}
	#s2:target ~ .prevNext >*:nth-child(2) {visibility: visible;}
	#s3:target ~ .prevNext >*:nth-child(3) {visibility: visible;}
	#s4:target ~ .prevNext >*:nth-child(4) {visibility: visible;}
	#s5:target ~ .prevNext >*:nth-child(5) {visibility: visible;}

	/* SLIDER ANIMATION POSITIONS */

	#s1:target ~ .slider {transform: translateX(   0%); -webkit-transform: translateX(   0%);}
	#s2:target ~ .slider {transform: translateX(-100%); -webkit-transform: translateX(-100%);}
	#s3:target ~ .slider {transform: translateX(-200%); -webkit-transform: translateX(-200%);}
	#s4:target ~ .slider {transform: translateX(-300%); -webkit-transform: translateX(-300%);}
	#s5:target ~ .slider {transform: translateX(-400%); -webkit-transform: translateX(-400%);}
	/* More slides? Add here more rules */

	.slide-div .slider {
		height: 100%;
		white-space: nowrap;
		font-size: 0;
		transition: 0.8s;
	}

	/* SLIDES */

	.slide-div .slider div{
		font-size: 1rem;
		display: inline-block;
		white-space: normal;
		vertical-align: top;
		height: 100%;
		width: 100%;
		background: none 50% no-repeat;
		background-size: contain;
		background-repeat: no-repeat;
		margin: auto;
	}

	/* PREV/NEXT, CONTAINERS & ANCHORS */

	.slide-div .prevNext {
		position: absolute;
		z-index: 1;
		top: 50%;
		width: 100%;
		height: 0;
	}

	.slide-div .prevNext > div+div {
		visibility: hidden; /* Hide all but first P/N container */
	}

	.slide-div .prevNext a {
		background: #fff;
		position: absolute;
		top: 50%;
		width: 2em;
		padding-top: 30em;
		color: white;
		transition: 0.6s ease;
		opacity: 0.5;
		-webkit-transition: 0.3s;
						transition: 0.3s;
		-webkit-transform: translateY(-50%);
						transform: translateY(-50%);
		left: 0;
	}
	.slide-div .prevNext a:hover {
		opacity: 1;
	}
	.slide-div .prevNext a+a {
		left: auto;
		right: 0;
	}
</style>