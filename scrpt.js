
let geoBike = document.getElementById("index--geoBike-container");

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        geoBike.style.transform = "rotateY(180deg)";
    } else if (event.key === "ArrowRight") {
        geoBike.style.transform = "rotateY(0deg)";
    }
});

let botData = document.getElementById("bot--data")
let botWorks = document.getElementById("bot--works")
let botStudies = document.getElementById("bot--studies")
let botCourses = document.getElementById("bot--courses")
let botExcelences = document.getElementById("bot--excelences")
let botSports = document.getElementById("bot--sports")
let botProgramming = document.getElementById("bot--programming")
let botTeaching = document.getElementById("bot--teaching")
let botSelling = document.getElementById("bot--selling")
let botPhones = document.getElementById("bot--phones")
let botSickness = document.getElementById("bot--sickness")
let botHobbies = document.getElementById("bot--hobbies")
let botBusiness = document.getElementById("bot--business")
let botGoals = document.getElementById("bot--goals")
let botDreams = document.getElementById("bot--dreams")

let disData = document.getElementById("dis--data")
let disWorks = document.getElementById("dis--works")
let disStudies = document.getElementById("dis--studies")
let disCourses = document.getElementById("dis--courses")
let disExcelences = document.getElementById("dis--excelences")
let disSports = document.getElementById("dis--sports")
let disProgramming = document.getElementById("dis--programming")
let disTeaching = document.getElementById("dis--teaching")
let disSelling = document.getElementById("dis--selling")
let disPhones = document.getElementById("dis--phones")
let disSickness = document.getElementById("dis--sickness")
let disHobbies = document.getElementById("dis--hobbies")
let disBusiness = document.getElementById("dis--business")
let disGoals = document.getElementById("dis--goals")
let disDreams = document.getElementById("dis--dreams")


botData.addEventListener("click", ()=>{
    disData.style.display="block"
    disWorks.style.display="none"
    disStudies.style.display="none"
    disCourses.style.display="none"
    disExcelences.style.display="none"
    disSports.style.display="none"
    disProgramming.style.display="none"
    disTeaching.style.display="none"
    disSelling.style.display="none"
    disPhones.style.display="none"
    disSickness.style.display="none"
    disHobbies.style.display="none"
    disBusiness.style.display="none"
    disGoals.style.display="none"
    disDreams.style.display="none"
})

botWorks.addEventListener("click", ()=>{
    disData.style.display="none"
    disWorks.style.display="block"
    disStudies.style.display="none"
    disCourses.style.display="none"
    disExcelences.style.display="none"
    disSports.style.display="none"
    disProgramming.style.display="none"
    disTeaching.style.display="none"
    disSelling.style.display="none"
    disPhones.style.display="none"
    disSickness.style.display="none"
    disHobbies.style.display="none"
    disBusiness.style.display="none"
    disGoals.style.display="none"
    disDreams.style.display="none"
})

botStudies.addEventListener("click", ()=>{
    disData.style.display="none"
    disWorks.style.display="none"
    disStudies.style.display="block"
    disCourses.style.display="none"
    disExcelences.style.display="none"
    disSports.style.display="none"
    disProgramming.style.display="none"
    disTeaching.style.display="none"
    disSelling.style.display="none"
    disPhones.style.display="none"
    disSickness.style.display="none"
    disHobbies.style.display="none"
    disBusiness.style.display="none"
    disGoals.style.display="none"
    disDreams.style.display="none"
})

botCourses.addEventListener("click", ()=>{
    disData.style.display="none"
    disWorks.style.display="none"
    disStudies.style.display="none"
    disCourses.style.display="block"
    disExcelences.style.display="none"
    disSports.style.display="none"
    disProgramming.style.display="none"
    disTeaching.style.display="none"
    disSelling.style.display="none"
    disPhones.style.display="none"
    disSickness.style.display="none"
    disHobbies.style.display="none"
    disBusiness.style.display="none"
    disGoals.style.display="none"
    disDreams.style.display="none"
})

botExcelences.addEventListener("click", ()=>{
    disData.style.display="none"
    disWorks.style.display="none"
    disStudies.style.display="none"
    disCourses.style.display="none"
    disExcelences.style.display="block"
    disSports.style.display="none"
    disProgramming.style.display="none"
    disTeaching.style.display="none"
    disSelling.style.display="none"
    disPhones.style.display="none"
    disSickness.style.display="none"
    disHobbies.style.display="none"
    disBusiness.style.display="none"
    disGoals.style.display="none"
    disDreams.style.display="none"
})

botSports.addEventListener("click", ()=>{
    disData.style.display="none"
    disWorks.style.display="none"
    disStudies.style.display="none"
    disCourses.style.display="none"
    disExcelences.style.display="none"
    disSports.style.display="block"
    disProgramming.style.display="none"
    disTeaching.style.display="none"
    disSelling.style.display="none"
    disPhones.style.display="none"
    disSickness.style.display="none"
    disHobbies.style.display="none"
    disBusiness.style.display="none"
    disGoals.style.display="none"
    disDreams.style.display="none"
})

botProgramming.addEventListener("click", ()=>{
    disData.style.display="none"
    disWorks.style.display="none"
    disStudies.style.display="none"
    disCourses.style.display="none"
    disExcelences.style.display="none"
    disSports.style.display="none"
    disProgramming.style.display="block"
    disTeaching.style.display="none"
    disSelling.style.display="none"
    disPhones.style.display="none"
    disSickness.style.display="none"
    disHobbies.style.display="none"
    disBusiness.style.display="none"
    disGoals.style.display="none"
    disDreams.style.display="none"
})

botTeaching.addEventListener("click", ()=>{
    disData.style.display="none"
    disWorks.style.display="none"
    disStudies.style.display="none"
    disCourses.style.display="none"
    disExcelences.style.display="none"
    disSports.style.display="none"
    disProgramming.style.display="none"
    disTeaching.style.display="block"
    disSelling.style.display="none"
    disPhones.style.display="none"
    disSickness.style.display="none"
    disHobbies.style.display="none"
    disBusiness.style.display="none"
    disGoals.style.display="none"
    disDreams.style.display="none"
})

botSelling.addEventListener("click", ()=>{
    disData.style.display="none"
    disWorks.style.display="none"
    disStudies.style.display="none"
    disCourses.style.display="none"
    disExcelences.style.display="none"
    disSports.style.display="none"
    disProgramming.style.display="none"
    disTeaching.style.display="none"
    disSelling.style.display="block"
    disPhones.style.display="none"
    disSickness.style.display="none"
    disHobbies.style.display="none"
    disBusiness.style.display="none"
    disGoals.style.display="none"
    disDreams.style.display="none"
})

botPhones.addEventListener("click", ()=>{
    disData.style.display="none"
    disWorks.style.display="none"
    disStudies.style.display="none"
    disCourses.style.display="none"
    disExcelences.style.display="none"
    disSports.style.display="none"
    disProgramming.style.display="none"
    disTeaching.style.display="none"
    disSelling.style.display="none"
    disPhones.style.display="block"
    disSickness.style.display="none"
    disHobbies.style.display="none"
    disBusiness.style.display="none"
    disGoals.style.display="none"
    disDreams.style.display="none"
})

botSickness.addEventListener("click", ()=>{
    disData.style.display="none"
    disWorks.style.display="none"
    disStudies.style.display="none"
    disCourses.style.display="none"
    disExcelences.style.display="none"
    disSports.style.display="none"
    disProgramming.style.display="none"
    disTeaching.style.display="none"
    disSelling.style.display="none"
    disPhones.style.display="none"
    disSickness.style.display="block"
    disHobbies.style.display="none"
    disBusiness.style.display="none"
    disGoals.style.display="none"
    disDreams.style.display="none"
})

botHobbies.addEventListener("click", ()=>{
    disData.style.display="none"
    disWorks.style.display="none"
    disStudies.style.display="none"
    disCourses.style.display="none"
    disExcelences.style.display="none"
    disSports.style.display="none"
    disProgramming.style.display="none"
    disTeaching.style.display="none"
    disSelling.style.display="none"
    disPhones.style.display="none"
    disSickness.style.display="none"
    disHobbies.style.display="block"
    disBusiness.style.display="none"
    disGoals.style.display="none"
    disDreams.style.display="none"
})

botBusiness.addEventListener("click", ()=>{
    disData.style.display="none"
    disWorks.style.display="none"
    disStudies.style.display="none"
    disCourses.style.display="none"
    disExcelences.style.display="none"
    disSports.style.display="none"
    disProgramming.style.display="none"
    disTeaching.style.display="none"
    disSelling.style.display="none"
    disPhones.style.display="none"
    disSickness.style.display="none"
    disHobbies.style.display="none"
    disBusiness.style.display="block"
    disGoals.style.display="none"
    disDreams.style.display="none"
})

botGoals.addEventListener("click", ()=>{
    disData.style.display="none"
    disWorks.style.display="none"
    disStudies.style.display="none"
    disCourses.style.display="none"
    disExcelences.style.display="none"
    disSports.style.display="none"
    disProgramming.style.display="none"
    disTeaching.style.display="none"
    disSelling.style.display="none"
    disPhones.style.display="none"
    disSickness.style.display="none"
    disHobbies.style.display="none"
    disBusiness.style.display="none"
    disGoals.style.display="block"
    disDreams.style.display="none"
})

botDreams.addEventListener("click", ()=>{
    disData.style.display="none"
    disWorks.style.display="none"
    disStudies.style.display="none"
    disCourses.style.display="none"
    disExcelences.style.display="none"
    disSports.style.display="none"
    disProgramming.style.display="none"
    disTeaching.style.display="none"
    disSelling.style.display="none"
    disPhones.style.display="none"
    disSickness.style.display="none"
    disHobbies.style.display="none"
    disBusiness.style.display="none"
    disGoals.style.display="none"
    disDreams.style.display="block"
})

let newsStand = document.getElementById("news-stand--container")
let moonSpeech = document.getElementById("index--ns-speech");

newsStand.addEventListener("click", () => {
    moonSpeech.style.display="block"
});

