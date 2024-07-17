function getAnswer(event){
    event.preventDefault()
    console.log("jkhggojgyf");
    let q1= document.quiz.q1.value
    let q2= document.quiz.q2.value
    let q3= document.quiz.q3.value
    let q4= document.quiz.q4.value
    let score =0
    if(q1==="Less than a month"){
        score++
    }
    if(q2==="Daily"){
        score++
    }
    if(q3==="Neutral"){
        score++
    }
    if(q4==="Probably"){
        score++
    }

    alert(`you scored ${score} out of 3`)
}