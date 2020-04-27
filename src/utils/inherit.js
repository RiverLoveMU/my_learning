function person(name) {
  this.name = name;
}

person.prototype.sayName = function() {
  console.log(this.name);
};

function boy(name) {
  this.sex = 'male';
  person.call(this, name);
}

boy.prototype = new person();

boy.prototype.sayHello = function() {
  console.log('hello');
};

boy.prototype.constructor = boy;

const jack = new boy('jack');

jack.sayHello();
jack.sayName();
