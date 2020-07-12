class subPub {
  constructor() {
    this.list = {};
  }

  sub(key, fn) {
    if (this.list[key]) {
      this.list[key] = [...this.list[key], fn];
    } else {
      this.list[key] = [fn];
    }
  }

  pub(key) {
    if (!this.list[key] || this.list[key].length === 0) {
      return -1;
    }
    this.list[key].forEach(fn => {
      fn(...arguments);
    });
  }
}

function debounce(fn, wait) {
  let timer = null;
  return function() {
    let context = this;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.call(context, ...arguments);
    }, wait);
  };
}

function throttle(fn, wait) {
  let timer = null;
  return function() {
    let context = this;
    if (!timer) {
      timer = setTimeout(() => {
        fn.call(context, ...arguments);
        timer = null;
      }, wait);
    }
  };
}
