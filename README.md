## 在小程序中使用谷歌统计4
### 1.安装
```javascript
npm i @mayupai/ga-tracker
### 2.uniapp中使用

```javascript
const gaTracker = {
  instance: null,
  getInstance() {
    if (!this.instance) {
      this.instance = new ga.GoogleAnalytics().getTracker('G-XXXXXXXXXX') // 设置measurement id
      this.instance.setTrackerServer(
        'https://ga-proxy.example.com'  // 设置转发服务器
      )
    }
    return this.instance
  }
}
Vue.prototype.$gaTracker = gaTracker



