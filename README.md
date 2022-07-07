## 在小程序中使用谷歌统计4
### 1.安装
```javascript
npm i @mayupai/ga-tracker   
```
### 2.设置全局实例
```js
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
```
### 3.发送页面事件
```js
 const tracker = this.$gaTracker.getInstance()
 const event = new ga.PageViewEvent()
 event.setParams({ page_title: '页面标题' })
 tracker.send(event)
```
### 4.发送自定义事件
```js
 const tracker = this.$gaTracker.getInstance()
 const event = new ga.Event()
 event.setName('信息提交')
 event.setParams({ action: 'click', 'label': '用户' })
 tracker.send(event)
```


