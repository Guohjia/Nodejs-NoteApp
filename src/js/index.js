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

