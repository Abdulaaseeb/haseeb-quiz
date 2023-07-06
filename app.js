// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getDatabase,ref,onChildAdded } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
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
const data = getDatabase();


function getDatabaseFromDatabase(){
    const reference = ref(data,'Questions/')
    onChildAdded(reference,function(a){
        console.log(a.val())
        questions.push(a.val())
        render()
    })

}
getDatabaseFromDatabase()

var questions = []

var currentNum = document.getElementById("currentNum")
var totalNum = document.getElementById("totalNum")
var Que = document.getElementById("Que")
var opt = document.getElementById("opt")
var indexVal = 0
var marks = 0
var showMark = "Your Marks is"



 window.next = function(){
    if (indexVal + 1 == questions.length) {
                alert(showMark + " " + marks)
                marks = 0
                indexVal = 0
                render()
           }
           else{
indexVal++
render()
}
}

window.correct = function(a,b){
    if(a == b){
     marks = marks + 1
    } 
   next()
 }

function render(){
    var obj = questions[indexVal]
    Que.innerHTML = obj.question
    currentNum.innerHTML = indexVal + 1
    totalNum.innerHTML = questions.length
    opt.innerHTML = ""
    for(var i = 0; i < obj.options.length; i++){
         opt.innerHTML += 
         `<button class="btn btn-outline-dark mt-3 fs-5 w-75" onclick = "correct('${obj.correctAnswer}','${obj.options[i]}')"> 
         ${obj.options[i]}</button>`
    }
}
render()

