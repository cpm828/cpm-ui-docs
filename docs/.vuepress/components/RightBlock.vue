<template>
	<!-- 右侧，至于global-ui中 -->
	<div class="right-block">
		<img src="https://cpm828.github.io/cpm-ui/images/cpm_ui_qrcode.png">
	</div>
</template>

<script>
export default {
  name: 'right-block',
  data () {
    return {}
	},
	created () {},
}
</script>

<style lang='stylus' scoped>
.right-block{
  position: fixed;
  bottom: 10rem;
  right: 0;
  width: 7rem;
  color: $accentColor;
  z-index: 1;
	img{
		display: block;
		width: 100%;
	}
}
@media (max-width: 959px) {
  .right-block {
    display: none;
  }
}
</style>
