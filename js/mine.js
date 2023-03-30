const startbutton = document.getElementById('start-btn');

const nextButton = document.getElementById('next-btn');




const questionContainerElement = document.getElementById('question-container');


const questionElement =document.getElementById('question')

const answersbuttonElements = document.getElementById('answer-buttons');

let shuffledQuestions , currentQuestionIndex;



startbutton.addEventListener('click', startgame);

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextquestion();
})


function startgame(){

shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0;
startbutton.classList.add('hide');
questionContainerElement.classList.remove('hide');
setNextquestion();
}


function setNextquestion(){
resetstate();
showQuestion(shuffledQuestions[currentQuestionIndex])

}


function showQuestion(question){

questionElement.innerText= question.question
questionElement.classList.add('qq')

question.answers.forEach(answer => {
    let button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    button.classList.add('cc')
    if (answer.correct) {
        button.dataset.correct =answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answersbuttonElements.appendChild(button)
});

}

function resetstate(){

    nextButton.classList.add('hide')
    while(answersbuttonElements.firstChild){
        answersbuttonElements.removeChild(answersbuttonElements.firstChild)
    }

   
}



function selectAnswer(e){
let selectedButton = e.target
let correct = selectedButton.dataset.correct
setStatusClass(document.body, correct)

console.log(document.body)

Array.from(answersbuttonElements.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
});
if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
}else{
    startbutton.innerText = 'ახლიდან თამაში'
    startbutton.classList.remove('hide')
}

}


 


function setStatusClass(element, correct){
clearStatuseClass(element)
if (correct) {
    element.classList.add('correct')
}else{
    element.classList.add('wrong')
}
}

function clearStatuseClass(element){
element.classList.remove('correct')
element.classList.remove('wrong')
}



const questions = [
{
    question: 'რომელია გლობალური ცვლადი',
    answers: [
        {text: 'const', correct:false},
        {text: 'let', correct:false},
        {text: 'var', correct:true}

    ]
},

{
    question: 'რა დაიბეჭდება კონსოლში?' + 
     '1) const a = 5;'  + ' ' +
     '2) const b = "5"'  +  ' ' +
      '3) console.log(a+b);' ,
    answers: [
        {text: '55', correct:true},
        {text: '10', correct:false}
        

    ]
},

{
    question: '20 + 10 ?',
    answers: [
        {text: '30', correct:true},
        {text: '25', correct:false},
        

    ]
},

{
    question: '10 + 5 * 2 =?',
    answers: [
        {text: '20', correct:true},
        {text: '30', correct:false},
        

    ]
}


]


