
let geoBike = document.getElementById("index--geoBike-container");

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        geoBike.style.transform = "rotateY(180deg)";
    } else if (event.key === "ArrowRight") {
        geoBike.style.transform = "rotateY(0deg)";
    }
});


let data = document.getElementById("data")
let est = document.getElementById("est")
let cursos = document.getElementById("cursos")
let lang = document.getElementById("lang")
let tech = document.getElementById("tech")
let trab = document.getElementById("trab")
let hab = document.getElementById("hab")
let ex = document.getElementById("ex")
let tiempo = document.getElementById("tiempo")
let dep = document.getElementById("dep")
let vida = document.getElementById("vida")
let sobre = document.getElementById("sobre")

let dispData = document.getElementById("disp-data")
let dispEst = document.getElementById("disp-est")
let dispCursos = document.getElementById("disp-cursos")
let dispLang = document.getElementById("disp-lang")
let dispTech = document.getElementById("disp-tech")
let dispTrab = document.getElementById("disp-trab")
let dispHab = document.getElementById("disp-hab")
let dispEx = document.getElementById("disp-ex")
let dispTiempo = document.getElementById("disp-tiempo")
let dispDep = document.getElementById("disp-dep")
let dispVida = document.getElementById("disp-vida")
let dispSobre = document.getElementById("disp-sobre")


// Datos Personales
data.addEventListener("click", ()=> {
    dispData.style.display = "block"
    dispEst.style.display = "none"
    dispCursos.style.display = "none"
    dispLang.style.display = "none"
    dispTech.style.display = "none"
    dispTrab.style.display = "none"
    dispHab.style.display = "none"
    dispEx.style.display = "none"
    dispTiempo.style.display = "none"
    dispDep.style.display = "none"
    dispVida.style.display = "none"
    dispSobre.style.display = "none"
})

// Estudios
est.addEventListener("click", ()=> {
    dispData.style.display = "none"
    dispEst.style.display = "block"
    dispCursos.style.display = "none"
    dispLang.style.display = "none"
    dispTech.style.display = "none"
    dispTrab.style.display = "none"
    dispHab.style.display = "none"
    dispEx.style.display = "none"
    dispTiempo.style.display = "none"
    dispDep.style.display = "none"
    dispVida.style.display = "none"
    dispSobre.style.display = "none"
})

// Cursos
cursos.addEventListener("click", ()=> {
    dispData.style.display = "none"
    dispEst.style.display = "none"
    dispCursos.style.display = "block"
    dispLang.style.display = "none"
    dispTech.style.display = "none"
    dispTrab.style.display = "none"
    dispHab.style.display = "none"
    dispEx.style.display = "none"
    dispTiempo.style.display = "none"
    dispDep.style.display = "none"
    dispVida.style.display = "none"
    dispSobre.style.display = "none"
})

// Idiomas
lang.addEventListener("click", ()=> {
    dispData.style.display = "none"
    dispEst.style.display = "none"
    dispCursos.style.display = "none"
    dispLang.style.display = "block"
    dispTech.style.display = "none"
    dispTrab.style.display = "none"
    dispHab.style.display = "none"
    dispEx.style.display = "none"
    dispTiempo.style.display = "none"
    dispDep.style.display = "none"
    dispVida.style.display = "none"
    dispSobre.style.display = "none"
})

// Tecnología
tech.addEventListener("click", ()=> {
    dispData.style.display = "none"
    dispEst.style.display = "none"
    dispCursos.style.display = "none"
    dispLang.style.display = "none"
    dispTech.style.display = "block"
    dispTrab.style.display = "none"
    dispHab.style.display = "none"
    dispEx.style.display = "none"
    dispTiempo.style.display = "none"
    dispDep.style.display = "none"
    dispVida.style.display = "none"
    dispSobre.style.display = "none"
})

// Trabajos
trab.addEventListener("click", ()=> {
    dispData.style.display = "none"
    dispEst.style.display = "none"
    dispCursos.style.display = "none"
    dispLang.style.display = "none"
    dispTech.style.display = "none"
    dispTrab.style.display = "block"
    dispHab.style.display = "none"
    dispEx.style.display = "none"
    dispTiempo.style.display = "none"
    dispDep.style.display = "none"
    dispVida.style.display = "none"
    dispSobre.style.display = "none"
})

// Habilidades
hab.addEventListener("click", ()=> {
    dispData.style.display = "none"
    dispEst.style.display = "none"
    dispCursos.style.display = "none"
    dispLang.style.display = "none"
    dispTech.style.display = "none"
    dispTrab.style.display = "none"
    dispHab.style.display = "block"
    dispEx.style.display = "none"
    dispTiempo.style.display = "none"
    dispDep.style.display = "none"
    dispVida.style.display = "none"
    dispSobre.style.display = "none"
})

// Experiencia (Ex)
ex.addEventListener("click", ()=> {
    dispData.style.display = "none"
    dispEst.style.display = "none"
    dispCursos.style.display = "none"
    dispLang.style.display = "none"
    dispTech.style.display = "none"
    dispTrab.style.display = "none"
    dispHab.style.display = "none"
    dispEx.style.display = "block"
    dispTiempo.style.display = "none"
    dispDep.style.display = "none"
    dispVida.style.display = "none"
    dispSobre.style.display = "none"
})

// Tiempo libre
tiempo.addEventListener("click", ()=> {
    dispData.style.display = "none"
    dispEst.style.display = "none"
    dispCursos.style.display = "none"
    dispLang.style.display = "none"
    dispTech.style.display = "none"
    dispTrab.style.display = "none"
    dispHab.style.display = "none"
    dispEx.style.display = "none"
    dispTiempo.style.display = "block"
    dispDep.style.display = "none"
    dispVida.style.display = "none"
    dispSobre.style.display = "none"
})

// Departamento (Dep)
dep.addEventListener("click", ()=> {
    dispData.style.display = "none"
    dispEst.style.display = "none"
    dispCursos.style.display = "none"
    dispLang.style.display = "none"
    dispTech.style.display = "none"
    dispTrab.style.display = "none"
    dispHab.style.display = "none"
    dispEx.style.display = "none"
    dispTiempo.style.display = "none"
    dispDep.style.display = "block"
    dispVida.style.display = "none"
    dispSobre.style.display = "none"
})

// Conocimientos de Vida
vida.addEventListener("click", ()=> {
    dispData.style.display = "none"
    dispEst.style.display = "none"
    dispCursos.style.display = "none"
    dispLang.style.display = "none"
    dispTech.style.display = "none"
    dispTrab.style.display = "none"
    dispHab.style.display = "none"
    dispEx.style.display = "none"
    dispTiempo.style.display = "none"
    dispDep.style.display = "none"
    dispVida.style.display = "block"
    dispSobre.style.display = "none"
})

// Sobre mí
sobre.addEventListener("click", ()=> {
    dispData.style.display = "none"
    dispEst.style.display = "none"
    dispCursos.style.display = "none"
    dispLang.style.display = "none"
    dispTech.style.display = "none"
    dispTrab.style.display = "none"
    dispHab.style.display = "none"
    dispEx.style.display = "none"
    dispTiempo.style.display = "none"
    dispDep.style.display = "none"
    dispVida.style.display = "none"
    dispSobre.style.display = "block"
})
