// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  modal.classList.add("hidden");

  const likeButtons = document.querySelectorAll(".like-glyph");

  likeButtons.forEach((heart) => {
    heart.addEventListener("click", function () {
      const isFull = heart.classList.contains("activated-heart");
      if (isFull) {
        heart.textContent = EMPTY_HEART;
        heart.classList.remove("activated-heart");
      } else {
        heart.textContent = FULL_HEART;
        heart.classList.add("activated-heart");

        mimicServerCall()
          .then((resp) => {
            changeHeartFill(resp, e);
          })
          .catch((error) => {
            modal.innerHTML = error;
          });
        setTimeout(() => {
          modal.classList.add("hidden");
        }, 3000);
      }
    });
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
