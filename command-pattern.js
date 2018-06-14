// JavaScript设计模式实现之命令模式
// 	一个命令对象相当于一个动词。还有一种说法是，命令模式是一种对象方法的封装方式。 简单来说，它会作为一个方法实现对象和一个方法调用对象中间的抽象层。

const setCommand = (btn, cmd) => {
    btn.onclick = () => {
        cmd.excute()
    }
}

const menu = {
    updateMenu() {
        console.log('update menu')
    }
}

const UpdateCommand = receive => {
    excute: receive.updateMenu
}

const updateCommand = UpdateCommand(menu);
const btn = document.getElementById('btn');
setCommand(btn, updateCommand)
