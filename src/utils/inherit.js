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

function testParent(name) {
  this.name = { name };
}

testParent.prototype.sayName = function() {
  console.log(this.name);
};

function testChildren(name, age, sex) {
  this.age = age;
  this.sex = sex;
  testParent.call(this, name);
}

testChildren.prototype = new testParent();

testChildren.prototype.sayHello = function() {
  console.log('hello');
};

testChildren.prototype.constructor = testChildren;
