var name = "window";

var person = {
  name: "day",
  getName: function() {
    var self = this;
    return function() {
      return self.name;
    };
  },
};

var getName = person.getName();

getName();
