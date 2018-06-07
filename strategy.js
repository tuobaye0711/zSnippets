// JavaScript设计模式实现之策略模式
// 定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。
// 策略模式的目的就是将算法的使用与算法的实现分离开来。
// 一个基于策略模式的程序至少由两部分组成。第一个部分是一组策略类，策略类封装了具体的算法，并负责具体的计算过程。 第二个部分是环境类Context，Context接受客户的请求，随后把请求委托给某一个策略类。要做到这点，说明Context中要维持对某个策略对象的引用

// 策略
let strategies = {
	'S': function(salary){
		return salary * 4;
	},
	'A': function(salary){
		return salary * 3;
	},
	'B': function(salary){
		return salary * 2;
	}
}

// 环境
let calculate = (level, salary) => strategies[level](salary);
