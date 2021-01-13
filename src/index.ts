/**
 *
 * @param arr 需要移除元素的数组
 * @param item 需要被移除的元素
 * @param 1. mode=false 删除元素,影响原数组,无返回值 2. mode=true 删除元素,不影响原数组,返回被删除后的数组
 * @return 返回移除元素后的数组
 * @description 移除数组中指定元素, 并且原
 */
export function ZXK_REMOVE_ARR_ITEM<T>(arr: Array<T>, item: T, mode?: boolean): Array<T> {
    if(mode) {
        return  arr
    } else {

    }
}

let persons = [
    {
        name: 'chelin',
        age: 18
    },
    {
        name: 'ermeng',
        age: 20
    }
]

persons.forEach(function (item, index) {
    item.name
})
