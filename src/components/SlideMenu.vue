<template>
	<div>
		<v-app 
			data-aos="zoom-in-right" 
			style="background-color:rgba(250, 250, 250, 1);"
		>
			<div class="header">
				<v-container fluid id="selectBar">
					<v-row>
						<v-col cols="12">
							<v-row justify="center">
								<v-col
									cols="6"
									md="2"
								>
									<v-icon>mdi-folder-open</v-icon>
									<v-select
										v-model="topic"
										:items="topicSelected"
										item-text="topic"
										label="Topic"
										@change = "topicChanged()"
										dense
										solo
									></v-select>
								</v-col>

								<v-col
									cols="6"
									md="2"
								>
									<v-icon>mdi-cards</v-icon>
									<v-select
										v-model="data"
										:items="topicData"
										item-text="data"
										label="論文"
										@change = "pdfpptChanged(data)"
										dense
										solo
									></v-select>
								</v-col>
							</v-row>
						</v-col>
					</v-row>
				</v-container>
			</div>
			<v-parallax
				:src="require('@/assets/jet.jpg')"
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
								frameborder="0"
								:src="pptLink"
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
import { SlideConfig } from '../config/SlideMenuConfig.js'
export default {
	components: {
		Footer
	},
	data () {
		return {
			// pdf ppt 預設值開始
			topicSelected: SlideConfig['topicSelected'],  
			topicData: SlideConfig['topicSelected'][0]['topicData'],
			topic: SlideConfig['topicSelected'][0]['topic'],
			data:  SlideConfig['topicSelected'][0]['topicData'][0],
			// pdf ppt 預設值結束
			window: {
				width: 0,
				height: 0
			},
			iframeWidth : 0,
			iframeHeight : 0,
			pdfLink : this.pdfpptChanged('')['pdf'],
			pptLink : this.pdfpptChanged('')['ppt'],
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
		},
		topicChanged(){
			console.log('topic: ', this.topic)
			console.log('pdfLinkHeader', this.pdfLinkHeader)
			for(const ts of this.topicSelected){
				if (ts['topic'] === this.topic){
					this.topicData = ts['topicData']
					console.log('topicData', this.topicData, this.pdfLinkHeader)
					break;
				}
			}
		},
		pdfpptChanged(dataSelected){
			if (this.topicData){
				for(const td of this.topicData){
					if (td === dataSelected && SlideConfig['pptAndPdf'][dataSelected]) {
						this.pdfLink = require('../assets/pdf/' + SlideConfig['pptAndPdf'][dataSelected]['pdf'])
						this.pptLink = SlideConfig['pptAndPdf'][dataSelected]['ppt']
						return {
							'pdf' : require('../assets/pdf/' + SlideConfig['pptAndPdf'][dataSelected]['pdf']),
							'ppt' : SlideConfig['pptAndPdf'][dataSelected]['ppt']
						}
					}
				}
				alert('論文尚未上傳')
			}
			return {  // 預設的ppt pdf
				'pdf' : require('../assets/pdf/' + SlideConfig['pptAndPdf']['單調性極限學習機模型於單類別分類之研究']['pdf']),
				'ppt' : SlideConfig['pptAndPdf']['單調性極限學習機模型於單類別分類之研究']['ppt']
			}
		}		
	}
}
</script>
<style scoped>
.header {
	height:120px; 
	background-color:rgb(255, 255, 255);
}
</style>
