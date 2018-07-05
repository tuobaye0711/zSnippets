// 遍历DOM节点
const scan = node => {
    console.log(node);
    for (let i = 0; i < node.children.length; i++) {
        const _node = node.children[i];
        scan(_node);
    }
}
