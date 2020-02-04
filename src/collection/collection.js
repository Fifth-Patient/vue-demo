/**
 * 代码片段收集
 */

/* 今天是星期几 */
const weekDay = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
console.log(weekDay[new Date().getDay()])

/* 判断数据是否为空 */
var arr = []
console.log(arr.length > 0)
console.log(arr.length === 0)
console.log(!arr.length)

/* 深拷贝对象 */
var obj = {
  k: 'y',
  a: [0],
  o: {
    key: 'value'
  }
}
var deepCopyObj = JSON.parse(JSON.stringify(obj))
console.log(deepCopyObj)

/* JS 获取当天零点时间戳 */
new Date(new Date().toLocaleDateString()).getTime()
new Date(new Date().setHours(0, 0, 0, 0)).valueOf()
Date.parse(new Date().toLocaleDateString())

/* 判断空对象 */
var emptyObj = {}
JSON.stringify(emptyObj) === '{}'
const flag = !Object.keys(emptyObj).length
console.log(flag)

/* 图片转base64 */
function getBase64(imgUrl, callback) {
  window.URL = window.URL || window.webkitURL;
  var xhr = new XMLHttpRequest();
  xhr.open("get", imgUrl, true);
  // 至关重要
  xhr.responseType = "blob";
  xhr.onload = function () {
    if (this.status == 200) {
      //得到一个blob对象
      var blob = this.response;
      console.log("blob", blob)
      //  至关重要
      let oFileReader = new FileReader();
      oFileReader.onloadend = function (e) {
        callback(e)
      }
      oFileReader.readAsDataURL(blob);
    }
  }
  xhr.send();
}
getBase64('/favicon.ico', function callback(e) {
  let base64 = e.target.result;
  console.log("方式一》》》》》》》》》", base64)
  // var img = document.createElement("img");
  // img.onload = function () {
  //   window.URL.revokeObjectURL(img.src); // 清除释放
  // };
  // img.src = base64
  // document.getElementById("container1").appendChild(img);

  // ====为了在页面显示图片，可以删除====
  // var img = document.createElement("img");
  // img.onload = function (e) {
  //     window.URL.revokeObjectURL(img.src); // 清除释放
  // };
  // let src = window.URL.createObjectURL(blob);

  // img.src = src
  // document.getElementById("container1").appendChild(img);
  // ====为了在页面显示图片，可以删除====
})

/* js事件拦截 */
// TODO 功能未验证
function stopEvent($event, isStop) {
  if (isStop) {
    $event = $event || window.event
    $event.cancalBubbe = true // 阻止冒泡
    $event.stopPropagation() // 阻止捕获
    $event.preventDefault() // 阻止浏览器默认行为
    return false // 结束执行
  }
}

window.onclick = function (e) {
  stopEvent(e, true)
}
