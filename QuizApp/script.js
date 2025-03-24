window.addEventListener(("load"), () => {
    console.log("js loaded");
    let currentQuestionIndex = 0;
    let score = 0;
    const questionList = [
        {
            question: "Q. What is the capital of India?",
            options: ["Delhi", "Uttar Pradesh", "Mumbai", "Goa"],
            answer: "Delhi",
        }, {
            question: "Q. What is the capital of France?",
            options: ["Pays de la Loire", "Corse", "Normandy", "Paris"],
            answer: "Paris",
        }, {
            question: "Q. What is the capital of United States Of Ameria?",
            options: ["Texas", "Ohia", "Washington DC", "Flordia"],
            answer: "Washington DC",
        }];

    document.getElementById("start-quiz-btn").addEventListener(("click"), () => {
        document.getElementById("start-quiz-btn").classList.add("hidden");
        document.getElementById("Quiz-Content").classList.remove("hidden");
        renderQuiz(currentQuestionIndex);
    });

    function renderQuiz(idx) {
        console.log("inside renderQuizList function");
        let answered = false;

        const questions = questionList[idx];
        document.getElementById("Quiz-Content").innerHTML = `
        <div id="question-div"><h2 class="text-3xl font-semibold  text-center ">${questions.question}</h2></div>
<ul id="options-div">
        ${questions.options.map((option, index) => `
            <li id="Option-${index + 1}" class="bg-purple-600 rounded-md w-auto my-2 mx-4 p-2 active:bg-gray-400 active:text-black hover:bg-purple-800 active:font-bold list-none">
                <span class="font-semibold" data-option="${option}">${option}</span>
            </li>
        `).join('')}

</ul>
<div id="answers-div" class="text-green-500 font-bold"></div>
<div id="Next-Question-div" class="">
<button class="text-white  font-bold bg-blue-500 p-2 rounded-md mt-4 active:bg-blue-900  hover:bg-blue-400 " id="next-question-btn">Next Question</button>
</div>`;
        // Attach event listeners AFTER the HTML is set

        document.querySelectorAll('#options-div li').forEach(li => {
            li.addEventListener('click', e => {
                const selectedOption = e.target.dataset.option;
                // document.getElementById("answers-div").innerHTML=`<h2>Correct Answer: ${questions.answer}`;       
                if (answered) return;

                answered = true;

                if (selectedOption === questions.answer) {
                    e.target.classList.add("text-green-600");
                    score++;
                } else {
                    e.target.classList.add("text-red-600")
                }


            })
        })
        // Get the "Next" button after it's created
        const nextBtn = document.getElementById("next-question-btn");

        // Remove any previously attached event listener (workaround)
        nextBtn.replaceWith(nextBtn.cloneNode(true));



        document.getElementById('Next-Question-div').addEventListener('click', () => {
            if (currentQuestionIndex < questionList.length - 1) {
                ++currentQuestionIndex;
                renderQuiz(currentQuestionIndex);
            }
            else {
                document.getElementById("Quiz-Content").classList.add("hidden");
                document.getElementById("start-quiz-btn").innerText = "Re-Start Quiz";
                document.getElementById("start-quiz-btn").classList.remove("hidden");

                document.getElementById('final-score-div').classList.remove('hidden');
                document.getElementById('final-score-div').innerHTML = `<h2 id="final-score" class="text-3xl font-bold ">Your Score: ${score}</h2>`;
                currentQuestionIndex = 0;
            }
        });
    }
});
