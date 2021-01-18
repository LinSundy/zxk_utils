/**
 *
 * @param arr 需要移除元素的数组
 * @param element 需要被移除的元素
 * @param is_effect_origin 1. true 删除元素,影响原数组,无返回值 2.false 删除元素,不影响原数组,返回被删除后的数组
 * @return 返回移除元素后的数组
 * @description 移除数组中指定元素, 并且原
 */
function ARR_REMOVE_ELEMENT<T>(arr: Array<T>, element: T, is_effect_origin = true) {
    let index = arr.indexOf(element);
    if(index < 0) return
    if(!is_effect_origin) {
        return  arr.filter((ele => {
            return ele != element
        }))
    } else {
        arr.splice(index, 1)
    }
}

export default {
    ARR_REMOVE_ELEMENT
}
