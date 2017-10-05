var numOperate = require("./../src/number-operate.js");
var expect = require("chai").expect;//chai是一个引入的、常用的断言库，这里引入了expect风格

describe("获取最大值测试", function() {
    //it是测试用例
    it("1、2、3、4、5中的最大值是5", function() {
        //expect是断言
        expect(numOperate.getMax(1, 2, 3, 4, 5)).to.be.equal(5);
    });

    it("1、2、3、4、5中的最小值是1", function() {
        expect(numOperate.getMin(1, 2, 3, 4, 5)).to.be.equal(1);
    });
});
