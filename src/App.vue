<script>
import { mapMutations } from 'vuex'
export default {
	globalData: {
		test: ''
	},
	methods:{
		...mapMutations(['setUniverifyErrorMsg','setUniverifyLogin'])
	}
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.flex-center{
	@apply flex items-center justify-center;
}

page{
	font-size: 32rpx;
}

button {
	background-color: transparent;
	padding-left: 0;
	padding-right: 0;
	line-height:inherit;
	border-radius:0;
}

button::after {
	border: none !important;
}
</style>
