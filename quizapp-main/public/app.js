 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
 import { getDatabase,ref,onChildAdded } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

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

 var loader= document.getElementById("loader")
 var showloader = document.getElementById("showloader")

 function getDataFromDatabase(){
    loader.style.display ='block'
    showloader.style.display = 'none'
    const reference = ref(db,'questions/')
    onChildAdded(reference,function(data){
        console.log(data.val())
        questions.push(data.val())
        loader.style.display ='none'
        showloader.style.display = 'block'
        questrender()
    })
 }
getDataFromDatabase()

var questions = []


    var currentquestion = document.getElementById("currentquestion");
    var totalquestion = document.getElementById("totalquestion");
    var question = document.getElementById("question");
    var answerparent = document.getElementById("answerparent");
    var indexnumber=0
    var score = 0

    window.checkquestion = function (a,b){
        if (a==b){
            score++
            console.log(score)
        }
        
        nextquestion()
    }
    var marks = document.getElementById("marks")

    
    window.nextquestion= function() {

        if(indexnumber + 1 == questions.length){
        // alert("Your score is"+ score)
        marks.innerHTML= "Your score is "+score
          
        } else{ 
            indexnumber++
            questrender()
        }
    }

    function questrender() {
currentquestion.innerHTML= indexnumber + 1
totalquestion.innerHTML = questions.length

var obj = questions[indexnumber]
question.innerHTML = obj.question

answerparent.innerHTML = ""

for(var i =0; i< obj.options.length; i++){
    answerparent.innerHTML += `<div class="col-md-4">
    <div class="py-2">
        <button onclick="checkquestion('${obj.options[i]}','${obj.correctanswer}')" class="btn btn-dark fs-4 rounded-pill w-100">
        ${obj.options[i]}
        </button>
        </div>
    </div>`

}

 
    }

    questrender()

    window.nextquestion= function() {
        indexnumber++
        questrender()
    }

  