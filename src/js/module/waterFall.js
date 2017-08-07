
var WaterFall = (function () {
    var $items;

    function render($content) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
        $items=$content.children();
        var colLength = parseInt($(window).width() / $items.outerWidth(true));///列数
        var itemArr = []
        for (var i = 0; i < colLength; i++) {
            itemArr[i] = 0;//每一列高度均初始化为0
        }
        $items.each(function () {
            var minValue = Math.min.apply(null, itemArr)  //得到高度最小值
            var maxValue = Math.max.apply(null, itemArr)
            var minIndex = itemArr.indexOf(minValue)  //得到高度最小值所在的列
            $content.css({ height: maxValue })  //子元素绝对定位之后脱离文档流，只能如此撑开父元素；
            // console.log(this)
            $(this).css({
                top: minValue,
                left: $(this).outerWidth(true) * minIndex
            })
            itemArr[minIndex] += $(this).outerHeight(true) //给高度最小值的item赋值，即所在下标，所存储的高度
        })

        $(window).resize(function () {
            render($content);
        })  //使瀑布流随着浏览器窗口大小的改变而响应
    }


    return render
})()

module.exports=WaterFall