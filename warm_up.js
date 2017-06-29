// apples = 14
// puts apples
//
// puts "I have #{apples} apples."

var apples = 14;
console.log(apples)
console.log("I have " + apples + " apples")

// materials = ['wood', 'metal', 'stone']
// words = {
//   'elephant' => "The world's largest land mammal.",
//   'school' => 'A place of learning.',
//   'ice cream' => 'A delicious milk-based dessert.',
// }

var materials = ['wood', 'metal', 'stone'];
var words = {
  elephant: "The world's largest land mammal.",
  school: "A place of learning",
  ice_cream:  "A delicious milk-based dessert"
};

// num = 16
// if num > 10
//   puts "#{num} is greater than 10."
// elsif num == 10
//   puts "#{num} is exactly 10."
// else
//   puts "#{num} must be less than 10."
// end

var num = 16
  if (num > 10) {
  console.log(num + " is greater than 10")

  } else if (num == 10){
  console.log(num + " is exactly 10")

  } else {
  console.log(num + " must be less than 10")
}

// 10.times do
//   puts "Doing the same thing over and over."
// end

for (var i = 0; i < 10; i++) {
  console.log("Doing the same thing over and over.")
}

// base = 5
// 20.times do |num|
//   puts num + base
// end

var base = 5;
for (var num = 0; num < 20; num++){
  console.log(num + base)
}

// total = 0
// 100.times do |num|
//   total += num
// end
// puts total

var total = 0;
for (var num = 0; num < 100; num++){
  total += num
}
console.log(total)

// (3..15).each do |height|
//   if height > 9
//     puts "You can get on the rollercoaster!"
//   else
//     puts "You are too short to ride this rollercoaster."
//   end
// end


for (var num = 3; num < 16; num++){
  if (num > 9) {
    console.log("You can get on the rollercoaster!")}
  else {
    console.log("You are too short to ride this rollercoaster")
  }
}

// containers = ['purse', 'wallet', 'backback']
// containers.each do |container|
//   puts container
// end

var containers = ['purse', 'wallet', 'backpack'];

for(var index = 0; index < containers.length; index++) {
  console.log(containers[index])
}

// def hello_world
//   puts "Hello world!"
// end
//
// hello_world

function helloWorld(){
  console.log("Hello World")
}
helloWorld();

// def add(first_num, second_num)
//   first_num + second_num
// end
//
// amount = add(5, 7)
// puts amount

function add(firstNum, secondNum){
  return(firstNum + secondNum)
}
var amount = add(5, 7)
  console.log(amount)
