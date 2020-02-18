<template>
	<div 
		data-aos="zoom-in-right">
		<v-app 
			data-aos="zoom-in-right" 
			style="background-color:rgba(250, 250, 250, 0.65);"
		>
			<div style="height:300px"></div>
			<v-container fluid id="selectBar">
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
			<v-parallax
				:src="require('@/assets/jet.jpg')"
				style="overflow-y:scroll;"
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
						data-aos="fade-right"
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
						<v-col cols="12">
							<v-btn
								color="blue"
								dark
							>
								Open v-model
							</v-btn>
						</v-col>
					</v-flex>
					<v-flex 
						xl 
						style="text-align:right; margin-right:20px"
						data-aos="fade-left"
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
								@click="zoomIn()"
							>
								放大
							</v-btn>
						</v-col>
					</v-flex>
				</v-layout>
			</v-parallax>
			<div style="height:300px"> </div>
		</v-app>
	</div>
</template>
<script>
export default {
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
			pdfLink : require('../assets/pdf/ElmPDF.pdf')     // tried with relative path
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
		zoomIn(){
			// const bottomNav = document.getElementById('pdf-iframe')
			// this.iframeWidth = 1400;
		}
  }
}
</script>
