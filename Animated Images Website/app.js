/* Image Credits 
stairs : https://unsplash.com/@jsnbrsc 
https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

kitchen : https://unsplash.com/@jsnbrsc
https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D

outdoors : https://unsplash.com/@sonniehiles
https://images.unsplash.com/photo-1533044309907-0fa3413da946?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D
*/

let btns = document.querySelectorAll(".btn");
let banner = document.getElementById("banner");

let images = [
  "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1533044309907-0fa3413da946?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
];

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    banner.src = images[index];
    animation();
    btn.classList.add("active");
  });
});

function animation() {
  banner.classList.add("zoom");

  setTimeout(() => {
    banner.classList.remove("zoom");
  }, 1000);

  for(b of btns) {
    b.classList.remove("active");
  }
}