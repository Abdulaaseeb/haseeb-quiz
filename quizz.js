// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
// import { initializeApp }  from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCaYoBJO0rc-2c1hcqR9IjmFjioc_5qlEus",
    authDomain: "haseeb-quiz-app-with-database.firebaseapp.com",
    projectId: "haseeb-quiz-app-with-database",
    storageBucket: "haseeb-quiz-app-with-database.appspot.com",
    messagingSenderId: "881545556247",
    appId: "1:881545556247:web:44bc7e3942c26ecd170752"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const data = getDatabase()


var question = document.getElementById('question')
var option = document.getElementById('option')
var optionsParent = document.getElementById('optionsParent')
var correctAnswerElem = document.getElementById('correctAnswer')

var options = []
var correctAnswer

function renderOption() {
    optionsParent.innerHTML = ''
    for (var i = 0; i < options.length; i++) {
        optionsParent.innerHTML += `<button onclick = "setCorrectAnswer('${options[i]}')" class = "btn btn-light shadow mx-2 my-2 p-2 w-50">${options[i]}</button>`
    }
}

window.addOption = function () {
    options.push(option.value)
    console.log(options)
    renderOption()
}

window.setCorrectAnswer = function (a) {
    correctAnswer = a
    correctAnswerElem.innerHTML = correctAnswer
}

window.submitQuestion = function () {
    var obj = {
        question: question.value,
        options: options,
        correctAnswer: correctAnswer
    }
    
    obj.id = push(ref(data,'Questions/')).key

    const reference = ref(data,`Questions/${obj.id}`)
    set(reference,obj)
    console.log(obj)
}