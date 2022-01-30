const User = function (data) {
  this.data = data;
  console.log(this);
};

User.prototype.jump = function () {
  console.log(this);
  console.log("Jump");
};

const user = new User();
user.jump();
