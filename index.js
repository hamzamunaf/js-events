window.addEventListener('click', function (event) {
  console.log("== window was clicked, event:", event);
});

// window.addEventListener('mousemove', function () {
//   console.log("== mouse moved in window");
// });

function handleBoxClick(event) {
  console.log("== A box was clicked");
  console.log("  - event.currentTarget:", event.currentTarget);
  console.log("  - event.target:", event.target);
  event.currentTarget.classList.toggle('highlighted');
}

var boxes = document.getElementsByClassName('box');
for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', handleBoxClick);
}

var buttons = document.getElementsByClassName('in-box-button');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function (event) {
    console.log("== A button was clicked");
    event.stopPropagation();
  });
}

var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function (event) {
    console.log("== A link was clicked");
    event.preventDefault();
  });
}
