<template>
	<div>
		<v-app 
			data-aos="zoom-in-right" 
			style="background-color:rgba(250, 250, 250, 1);"
		>
			<div class="header">
				<v-container 
					fluid id="selectBar" 
					style="margin-top: 1%">
					<v-row>
						<v-col cols="12">
							<v-row justify="center">
								<v-col
									cols="6"
									md="2"
								>
									<v-select
										v-model="alignment"
										:items="alignmentsAvailable"
										label="Align"
									></v-select>
								</v-col>

								<v-col
									cols="6"
									md="2"
								>
									<v-select
										v-model="justify"
										:items="justifyAvailable"
										label="Justify"
									></v-select>
								</v-col>
							</v-row>
						</v-col>
					</v-row>
				</v-container>
			</div>
			<v-parallax
				:src="require('@/assets/mountain.jpg')"
				height="1000"
				data-aos="zoom-in"
				data-aos-duration="1000"
			>
				<v-layout
					align-center
					row
					justify-center
				>
					<v-flex 
						xl 
						style="text-align:left; margin-left:20px"
						data-aos="fade-left"
						data-aos-duration="2000"
					>
						<v-col cols="12">
							<iframe 
								src="https://docs.google.com/presentation/d/e/2PACX-1vQEPaLJJYg-QGOpVuB5oHn31Fz6LQe25dSUTM3Pl5Zn0kI3Fy7iPBrjdGrfQwJL94GxxM7gKTq0CoKl/embed?start=false&loop=false&delayms=3000" 
								frameborder="0"
								:width="iframeWidth" 
								:height="iframeHeight"
								allowfullscreen="true" 
								mozallowfullscreen="true" 
								webkitallowfullscreen="true"
							>
							</iframe>
						</v-col>
						<v-col cols="12" style="visibility:hidden">
							<v-btn
								color="blue"
								dark
							>
								排版用
							</v-btn>
						</v-col>
					</v-flex>
					<v-flex 
						xl 
						style="text-align:right; margin-right:20px"
						data-aos="fade-right"
						data-aos-duration="3000"
					>
						<v-col cols="12">
							<iframe 
								id="pdf-iframe" 
								:src="pdfLink" 
								:width="iframeWidth" 
								:height="iframeHeight"
								allowfullscreen="true">
							</iframe>
						</v-col>
						<v-col cols="12">
							<v-btn
								color="blue"
								dark
								@click="zoom()"
							>
								放大
							</v-btn>
						</v-col>
					</v-flex>
				</v-layout>
			</v-parallax>
			<div v-if="buttonStatus === false">
				<iframe 
					id="pdf-iframe" 
					:src="pdfLink" 
					width="100%" 
					height="100%"
					allowfullscreen="true"
					style="z-index:0; position: fixed; top: 0;"
				>
				</iframe>
			</div>
		</v-app>
		<div class="sticky" v-if="buttonStatus === false">
			<v-btn
				style="background-color:#2196F3; color:white;"
				@click="zoom()"
			>
				縮小
			</v-btn>
		</div>
		<Footer/>
	</div>
</template>
<script>
import Footer from './Footer.vue'
export default {
	components: {
    Footer
  },
	data () {
		return {
			alignmentsAvailable: [
        'start',
        'center',
        'end',
        'baseline',
        'stretch',
      ],
      alignment: 'center',
      dense: false,
      justifyAvailable: [
        'start',
        'center',
        'end',
        'space-around',
        'space-between',
      ],
      justify: 'center',
			window: {
				width: 0,
				height: 0
			},
			iframeWidth : 0,
			iframeHeight : 0,
			pdfLink : require('../assets/pdf/ElmPDF.pdf'),     // tried with relative path
			buttonStatus: true
		}
	},
	created() {
		window.addEventListener('resize', this.handleResize)
		window.addEventListener('scroll', this.handleScroll)
		this.handleResize();
		
  },
  destroyed() {
		window.removeEventListener('resize', this.handleResize)
		window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleResize() {
			this.window.width = window.innerWidth;
			this.window.height = window.innerHeight;
			this.iframeWidth = this.window.width > 1000 ? this.window.width/2 - this.window.width/10 : this.window.width;
			this.iframeHeight = this.window.height - 200;
			console.log("this.window.width", this.window.width, "this.window.height", this.window.height)
		},
		handleScroll () {
		},
		zoom(){
			this.buttonStatus = !this.buttonStatus
		}
  }
}
</script>
<style scoped>
.header {
	height:150px; 
	background-color:rgb(255, 255, 255);
}
</style>
