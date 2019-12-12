<template>
	<!-- 右侧，至于global-ui中 -->
	<div class="right-bar" v-if="displayState">
		<div class="iframe-mobile-view">
			<iframe :src="iframeURL" frameborder="0"></iframe>
		</div>
	</div>
</template>

<script>
export default {
  name: 'right-bar',
  data () {
    return {
			displayState: true,
			iframeURL: ''
		}
	},
	created () {},
	watch: {
		// 控制其他文档页面不显示手机示例
		'$frontmatter.sidebar': {
			handler: function (value) {
				//  不可以使用!value，大部分的文档是没设置sidebar的，默认为true
				if (value === false) {
					this.displayState = false
				} else {
					this.displayState = true
				}
			},
			immediate: true
		},
		// 根据当前路由控制手机示例路由
		'$frontmatter.componentUrl': {
			handler: function (value) {
				if (value) {
					this.iframeURL = `https://cpm828.github.io/cpm-ui/demo/index.html#/${value}`
				} else {
					this.iframeURL = `https://cpm828.github.io/cpm-ui/demo/index.html#/`
				}
			},
			immediate: true
		}
	}
}
</script>

<style lang="stylus" scoped>
.right-bar{
	overflow-y: scroll;
	background-color: #fff;
	width: 24rem;
	height: 100%;
	position: fixed;
	z-index: 10;
	margin: 0;
	top: 3.6rem;
	right: 0;
	bottom: 0;
	border-left: 1px solid #eaecef;
	.iframe-mobile-view{
		width: 24rem;
		height: 48.288rem;
		box-sizing border-box;
		padding: 31.1% 6.293% 23.2% 6.6%;
		background: url('https://pimichen.com/cpm-ui/images/iphone7plus.png') no-repeat;
		background-size: 100% 100%;
		transform: scale(0.88);
		iframe{
			width: 100%;
			height 100%;
		}
	}
}
@media (max-width: 1150px) {
	.right-bar{
		display: none;
	}
}
</style>
