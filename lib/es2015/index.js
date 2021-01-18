/**
 *
 * @param arr 需要移除元素的数组
 * @param element 需要被移除的元素
 * @param is_effect_origin 1. true 删除元素,影响原数组,无返回值 2.false 删除元素,不影响原数组,返回被删除后的数组
 * @return 返回移除元素后的数组
 * @description 移除数组中指定元素, 并且原
 */
export function ZXK_ARR_REMOVE_ELEMENT(arr, element, is_effect_origin) {
    if (is_effect_origin === void 0) { is_effect_origin = true; }
    var index = arr.indexOf(element);
    if (!is_effect_origin) {
        return arr.filter((function (ele) {
            return ele != element;
        }));
    }
    else {
        arr.splice(index, 1);
    }
}
