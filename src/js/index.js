require('../sass/index.scss')
require('../sass/starrySky.scss')
require('./module/starrySky.js')
// require('./module/navFixed.js')

var NoteControl = require('./module/noteControl.js').NoteControl;
var Event = require('./module/event.js');
var WaterFall = require('./module/waterFall.js');

NoteControl.load();


$('.add-note').on('click', function() {
    NoteControl.add();
 
})


Event.on('WaterFall', function(){
  WaterFall($('.wrapper'));
})


/**
 * 需求:
 * 1.只能弹出一个待输入新增
 * 2.通过向数据库发送，保留拖拽之后的位置，使用户下次进来时在相同的位置;不过最好，用户关闭页面c的时候保留，避免过多的请求
 */