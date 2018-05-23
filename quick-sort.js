// js实现快排序
const quickSort = arr => {
    if (!Array.isArray(arr)) {
        return 'input format error!'
    }

    if (arr.length <= 1){
        return arr
    }

    let chosen = arr[0];
    let left = [];
    let right = [];
    let len = arr.length;

    for (let i = 1; i < len; i++) {
        if (arr[i] < chosen) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    let sorted_left = fastSort(left);
    let sorted_right = fastSort(right);

    return [...sorted_left, chosen, ...sorted_right]
}
