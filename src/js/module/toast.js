// var $=require('jquery')
var $=require('../lib/jquery-3.2.0.min.js')

function toast(message, time) {
    this.message = message;
    this.dismissTime = time || 1000;
    this.createToast();
    this.showToast();
}

toast.prototype = {
    createToast: function () {
        var tpl = '<div class="toast">' + this.message + '</div>';
        this.$toast = $(tpl);
        $('body').append(this.$toast)
    },
    showToast: function () {
        var _this = this;
        this.$toast.fadeIn(300, function () {
            setTimeout(function () {
                _this.$toast.fadeOut(300, function () {
                    _this.$toast.remove();
                })
            }, _this.dismissTime);
        });
    }
};

function Toast(message,time){
    return new toast(message,time)
}

// Toast('hello')

module.exports.Toast=Toast