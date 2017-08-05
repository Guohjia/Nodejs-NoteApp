require('../sass/test.scss')

var NoteControl = require('./module/noteControl.js').NoteManager;
var Event = require('./module/event.js');
var WaterFall = require('./module/waterFall.js');


// NoteManager.load();

$('.add-note').on('click', function() {
  NoteControl.add();
})

Event.on('waterfall', function(){
  WaterFall($('#content'));
})