const questions = document.getElementsByClassName("question");

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', function() {
      //make the question bold
        this.classList.toggle("active");

        //get the answer sibling from question and either set the max height to 0 or scrollheight
        let answer = this.nextElementSibling;
        if (answer.style.maxHeight) {
          answer.style.maxHeight = null;
        } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
    }
  })
}
