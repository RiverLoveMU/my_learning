function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function binary_search(arr, target) {
  let min = 0,
    max = arr.length - 1,
    mid;
  while (min <= max) {
    mid = parseInt((min + max) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (target > arr[mid]) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  return -1;
}

function bubble_sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j + 1, j);
      }
    }
  }
  return arr;
}

function select_sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let min = i;
      if (arr[min] > arr[j]) {
        min = j;
      }
      if (min !== i) {
        swap(arr, min, i);
      }
    }
  }

  return arr;
}

function insert_sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let target = i - 1;
    while (arr[target] > curr && target >= 0) {
      arr[target + 1] = arr[target];
      target -= 1;
    }
    if (target + 1 !== i) {
      arr[target + 1] = curr;
    }
  }
  return arr;
}

function binary_insert_sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let min = 0,
      max = i - 1,
      mid;
    while (min <= max) {
      mid = parseInt((min + max) / 2);
      if (arr[mid] > curr) {
        max = mid - 1;
      } else {
        min = mid + 1;
      }
    }
    for (let index = i - 1; index > min - 1; index--) {
      arr[index + 1] = arr[index];
    }
    arr[min] = curr;
  }
  return arr;
}

function insert_sort_new(arr, gap) {
  gap = gap || 1;
  for (let i = gap; i < arr.length; i++) {
    let curr = arr[i];
    let target = i - gap;
    while (arr[target] > curr && target >= 0) {
      arr[target + gap] = arr[target];
      target -= gap;
    }
    if (target + gap !== i) {
      arr[target + gap] = curr;
    }
  }
  return arr;
}

function shell_sort(arr) {
  let length = arr.length;
  let gap = parseInt(length / 2);
  while (gap > 0) {
    insert_sort_new(arr, gap);
    gap = parseInt(gap / 2);
  }
  return arr;
}

function quick_sort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = parseInt(arr.length / 2);
  let midValue = arr.splice(mid, 1)[0];
  let left = [],
    right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= midValue) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quick_sort(left), midValue, ...quick_sort(right)];
}
