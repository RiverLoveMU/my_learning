/**
 * binary_search
 * @param {Array} arr
 * @param {String} target
 * @return {Number}
 */

function binary_search(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = parseInt((high + low) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else if (arr[mid] < target) {
      low = mid + 1;
    }
  }

  return -1;
}

/**
 * bubble_sort
 * @param {Array} arr
 * @return {Array}
 */

function bubble_sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let change = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = change;
      }
    }
  }
  return arr;
}

/**
 * select_sort
 * @param {Array} arr
 * @return {Array}
 */

function select_sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let change = arr[min];
      arr[min] = arr[i];
      arr[i] = change;
    }
  }
  return arr;
}

/**
 * insert_sort
 * @param {Array} arr
 * @param {Number} gap
 * @return {Array}
 */

function insert_sort(arr, gap) {
  gap = gap || 1;
  let length = arr.length,
    index,
    current;
  for (let i = gap; i < length; i++) {
    index = i - gap; // 待比较元素
    current = arr[i]; // 当前元素
    while (arr[index] > current && index >= 0) {
      arr[index + gap] = arr[index]; // 若待比较元素大于当前元素往前进一步
      index -= gap;
    }
    if (index + gap !== i) {
      //避免自己给自己赋值
      arr[index + gap] = current; //将当前元素插入到应该在的位置
    }
  }
  return arr;
}

/**
 * binary_insert_sort
 * @param {Array} arr
 * @return {Array}
 */

function binary_insert_sort(arr) {
  let length = arr.length,
    current,
    heigh,
    low,
    middle;
  for (let i = 1; i < length; i++) {
    low = 0;
    heigh = i - 1;
    current = arr[i]; // 当前元素;
    while (low <= heigh) {
      middle = parseInt((low + heigh) / 2);
      if (arr[i] >= arr[middle]) {
        low = middle + 1;
      } else {
        heigh = middle - 1;
      }
    }
    for (let j = i; j > low; j--) {
      arr[j] = arr[j - 1];
    }
    arr[low] = current;
  }
  return arr;
}

/**
 * shell_sort
 * @param {Array} arr
 * @return {Array}
 */

function shell_sort(arr) {
  let length = arr.length;
  let gap = parseInt(length / 2);
  while (gap > 0) {
    insert_sort(arr, gap);
    gap = parseInt(gap / 2);
  }
  return arr;
}

/**
 * quick_sort
 * @param {Array} arr
 * @return {Array}
 */

function quick_sort(arr) {
  let length = arr.length;
  if (length <= 1) return arr;
  let previot = parseInt(length / 2);
  let previotValue = arr.splice(previot, 1)[0];
  let left = [],
    right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < previotValue) left.push(arr[i]);
    if (arr[i] >= previotValue) right.push(arr[i]);
  }

  return [...quick_sort(left), previotValue, ...quick_sort(right)];
}
