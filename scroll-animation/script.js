// DOM Elements
const boxes = document.querySelectorAll('.box');

// Functions
const checkBoxes = () => {
  const triggerBottom = window.innerHeight / 5 * 4;
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  })
};

// Event Listeners
window.addEventListener('scroll', checkBoxes);

// One time call
checkBoxes();
