let userName = "JamesAmayo";
let userAge = 20;

if (userAge >= 18) {
  console.log(`${userName} is an adult.`);
} else {
  console.log(`${userName} is a minor.`);
}
function greetUser(name) {
  return `Hello, ${name}! Welcome to the project.`;
}
function generateNumbers(limit) {
  let numbers = [];
  for (let i = 1; i <= limit; i++) {
    numbers.push(i);
  }
  return numbers;
}
for (let i = 0; i < 3; i++) {
  console.log(`For loop iteration: ${i}`);
}document.getElementById("changeTextBtn").addEventListener("click", () => {
  document.getElementById("message").textContent = greetUser(userName);
});
document.getElementById("showListBtn").addEventListener("click", () => {
  let numbers = generateNumbers(5);
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // clear list before adding
  numbers.forEach(num => {
    let li = document.createElement("li");
    li.textContent = `Number: ${num}`;
    list.appendChild(li);
  });
});
document.getElementById("title").style.color = "blue";
