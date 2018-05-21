let Character = function(name, proff, gender, age, str, hp) {
  this.name = name;
  this.proff = proff;
  this.gender = gender;
  this.age = age;
  this.str = str;
  this.hp = hp;

  this.printStats = function() {
    console.log("name: " + this.name);
    console.log("proff: " + this.proff);
    console.log("gender: " + this.gender);
    console.log("age: " + this.age);
    console.log("str: " + this.str);
    console.log("hp: " + this.hp);
    console.log("---------");
  };
};

let Ruby = new Character("Ruby", "Hunter", "Female", 14, 9, 18);

Ruby.printStats();

let Saitama = new Character("Saitama", "Hero", "Male", 27, 1000000, 500);

Saitama.printStats();

let attack = function(a, b) {
  console.log(a.name + " attacks " + b.name);
  b.hp = b.hp - a.str;
  if (b.hp < 1) {
    console.log(a.name + " killed " + b.name + " with that last attack");
  } else {
    console.log(b.name + " has " + b.hp + " remaining!");
  }
};

let levelUp = function(a) {
  console.log(a.name + " LEVEL UP");
  a.age = a.age + 1;
  a.str = a.str + 5;
  a.hp = a.hp + 25;
  a.printStats();
};

// levelUp(Ruby);
attack(Ruby, Saitama);
attack(Ruby, Saitama);
attack(Ruby, Saitama);
attack(Ruby, Saitama);
attack(Saitama, Ruby);
levelUp(Saitama);
