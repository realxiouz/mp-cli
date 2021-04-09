module.exports = {
  purge: [
    './src/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // spacing: {
    //   1: '2rpx',
    //   2: '4rpx',
    //   3: '6rpx',
    //   4: '8rpx',
    //   5: '10rpx',
    //   6: '12rpx',
    //   7: '14rpx',
    //   8: '16rpx',
    //   9: '18rpx',
    //   10: '30rpx',
    //   11: '22rpx',
    //   12: '24rpx',
    // },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    // 涉及到子代选择器（>），wx 小程序不支持
    space:false,
    divideStyle: false,
    divideWidth:false,
    divideColor: false,
    divideOpacity:false,// 涉及到通配符（*），wx 小程序不支持
    ringWidth:false,
    ringColor:false,
    ringOpacity:false,
    ringOffsetWidth:false,
    ringOffsetColor:false,// web 浏览器相关功能，wx 小程序不支持
    appearance: false,
    cursor: false,
    outline: false,
    placeholderColor: false,
    pointerEvents: false,
    stroke: false,
    tableLayout: false,
    userSelect: false,
  }
}
