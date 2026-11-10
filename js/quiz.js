// quiz
const chooses1 = document.querySelectorAll(".q1 .choose");
const chooses2 = document.querySelectorAll(".q2 .choose");
const chooses3 = document.querySelectorAll(".q3 .choose");
const chooses4 = document.querySelectorAll(".q4 .choose");
const questions = document.querySelectorAll(".quest");
const submitBtn = document.querySelector(".form button");
const alertWindow = document.querySelector(".alert");

// function to check answers
function checkAnswers() {
  const targetCount = questions.length;
  let checkedCount = document.querySelectorAll(
    'input[type="radio"]:checked',
  ).length;
  if (checkedCount == targetCount) {
    submitBtn.removeAttribute("disabled");
    submitBtn.classList.add("enable");
  } else {
    submitBtn.setAttribute("disabled", "disabled");
    submitBtn.classList.remove("enable");
  }
}

// function to handle choosing options
function choose(chooses) {
  chooses.forEach((c) => {
    c.addEventListener("click", () => {
      // for no options
      if (c.getAttribute("data-choose") === "no") {
        alertWindow.classList.add("active");
        setTimeout(() => alertWindow.classList.remove("active"), 1000);
        // active radio
        chooses.forEach((box) => {
          box.classList.remove("active");
          const radio = box.querySelector('input[type="radio"]');
          if (radio) radio.checked = false;
        });
        // check answers
        checkAnswers();
        return;
      }
      // remove active from all options
      chooses.forEach((box) => {
        box.classList.remove("active");
      });
      // add active to the clicked option
      c.classList.add("active");
      const radio = c.querySelector('input[type="radio"]');
      if (radio) {
        radio.checked = true;
        checkAnswers();
      }
    });
  });
}

choose(chooses1);
choose(chooses2);
choose(chooses3);
choose(chooses4);

// submit button
submitBtn.addEventListener("click", () => {
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 },
  });

  setTimeout(() => {
    confetti({ particleCount: 100, angle: 60, spread: 55, origin: { x: 0 } });
    confetti({ particleCount: 100, angle: 120, spread: 55, origin: { x: 1 } });
  }, 250);

  setTimeout(() => {
    window.location.href = "celebrate.html";
  }, 1500);
});
