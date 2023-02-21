 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
 import { getDatabase,set,ref,push} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
  apiKey: "AIzaSyA5dfJsRhu1Mb2JLZioSyiMjO43u71WjlM",
  authDomain: "quizapp-b9ab1.firebaseapp.com",
  databaseURL: "https://quizapp-b9ab1-default-rtdb.firebaseio.com",
  projectId: "quizapp-b9ab1",
  storageBucket: "quizapp-b9ab1.appspot.com",
  messagingSenderId: "227955187575",
  appId: "1:227955187575:web:4a2d20b7e1eed0df014b72",
  measurementId: "G-SQV6VZZYP3"
};

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const db = getDatabase()

 var question = document.getElementById("question")
 var option = document.getElementById("option")
 var correctanswerelem = document.getElementById("correctanswer")

 var options =[]
 var correctanswer

 function renderoptions(){
    optionsParent.innerHTML= ''
    for(var i=0;i<options.length;i++){
        optionsParent.innerHTML += `<li onclick="setCorrectAnswer('${options[i]}')" class ='p-2 bg-light fs-5 rounded shadow my-2'>${options[i]}</li.`
    }
 }
 window.addoption = function(){
options.push(option.value)
console.log(options)
renderoptions()


 }

 window.setCorrectAnswer = function(a){
correctanswer=a
correctanswerelem.innerHTML=correctanswer
 }


 window.submitquestion= function(){
    var obj = {
        question: question.value,
        options:options,
        correctanswer:correctanswer,
    }
    obj.id = push(ref(db,'questions/')).key

    const reference = ref(db,`questions/${obj.id}`)
    set(reference,obj)
    console.log(obj)
 }
