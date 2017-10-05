//获取最大值
var getMax = function() {
    return Math.max.apply(this, arguments);
}

//获取最小值
var getMin = function() {
    return Math.min.apply(this, arguments);
}

module.exports = {
    getMax: getMax,
    getMin: getMin
};
