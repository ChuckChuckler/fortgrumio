function home(){
    window.location.href = "/home";
}

const exteriorImgs = ["imgs/exterior/exterior1.jpg", "imgs/exterior/exterior2.jpg", "imgs/exterior/exterior3.jpg", "imgs/exterior/exterior4.jpg"];
const principiaImgs = ["imgs/principia/principia1.png", "imgs/principia/principia2.png", "imgs/principia/principia3.jpg"];
const praetoriumImgs = ["imgs/praetorium/praetorium1.jpg", "imgs/praetorium/praetorium2.jpg"];
const horreumImgs = ["imgs/horreum/horreum1.jpg", "imgs/horreum/horreum2.jpg", "imgs/horreum/horreum3.jpg", "imgs/horreum/horreum4.jpg"];
const barracksImgs = ["imgs/barracks/barracks1.jpg", "imgs/barracks/barracks2.jpg", "imgs/barracks/barracks3.JPG"];
const vicusImgs = ["imgs/vicus/vicus1.jpg", "imgs/vicus/vicus2.jpg"];

let exteriorIndex = 0;
let principiaIndex = 0;
let praetoriumIndex = 0;
let horreumIndex = 0;
let barracksIndex = 0;
let vicusIndex = 0;

function next(carousel){
    if(carousel == "exterior"){
        if(exteriorIndex == exteriorImgs.length-1){
            exteriorIndex = 0;
        }else{
            exteriorIndex+=1;
        }
        document.getElementById(carousel).src = exteriorImgs[exteriorIndex];
    }else if(carousel == "principia"){
        if(principiaIndex == principiaImgs.length-1){
            principiaIndex = 0;
        }else{
            principiaIndex+=1;
        }
        document.getElementById(carousel).src = principiaImgs[principiaIndex];
    }else if(carousel == "praetorium"){
        if(praetoriumIndex == praetoriumImgs.length-1){
            praetoriumIndex = 0;
        }else{
            praetoriumIndex+=1;
        }
        document.getElementById(carousel).src = praetoriumImgs[praetoriumIndex];
    }else if(carousel == "horreum"){
        if(horreumIndex == horreumImgs.length-1){
            horreumIndex = 0;
        }else{
            horreumIndex+=1;
        }
        document.getElementById(carousel).src = horreumImgs[horreumIndex];
    }else if(carousel == "barracks"){
        if(barracksIndex == barracksImgs.length-1){
            barracksIndex = 0;
        }else{
            barracksIndex+=1;
        }
        document.getElementById(carousel).src = barracksImgs[barracksIndex];
    }else{
        if(vicusIndex == vicusImgs.length-1){
            vicusIndex = 0;
        }else{
            vicusIndex+=1;
        }
        document.getElementById(carousel).src = vicusImgs[vicusIndex];
    }
}

//gsap stuff again (ecce!)

ScrollTrigger.create({
    trigger: ".header-exterior",
    start: "top bottom",
    end: "bottom bottom",
    onEnter: ()=>{
        let headerIntroTml = gsap.timeline();
        headerIntroTml.to(window, {
            duration: 1.5,
            scrollTo: ".header-exterior",
            ease:"power3.out"
        })
    }
});

ScrollTrigger.create({
    trigger: ".exterior-principia",
    start: "top bottom",
    end: "bottom bottom",
    onEnter: ()=>{
        let headerIntroTml = gsap.timeline();
        headerIntroTml.to(window, {
            duration: 1.5,
            scrollTo: ".exterior-principia",
            ease:"power3.out"
        })
    }
});

ScrollTrigger.create({
    trigger: ".principia-praetorium",
    start: "top bottom",
    end: "bottom bottom",
    onEnter: ()=>{
        let headerIntroTml = gsap.timeline();
        headerIntroTml.to(window, {
            duration: 1.5,
            scrollTo: ".principia-praetorium",
            ease:"power3.out"
        })
    }
});

ScrollTrigger.create({
    trigger: ".praetorium-horrea",
    start: "top bottom",
    end: "bottom bottom",
    onEnter: ()=>{
        let headerIntroTml = gsap.timeline();
        headerIntroTml.to(window, {
            duration: 1.5,
            scrollTo: ".praetorium-horrea",
            ease:"power3.out"
        })
    }
});

ScrollTrigger.create({
    trigger: ".horrea-barracks",
    start: "top bottom",
    end: "bottom bottom",
    onEnter: ()=>{
        let headerIntroTml = gsap.timeline();
        headerIntroTml.to(window, {
            duration: 1.5,
            scrollTo: ".horrea-barracks",
            ease:"power3.out"
        })
    }
});

ScrollTrigger.create({
    trigger: ".barracks-vicus",
    start: "top bottom",
    end: "bottom bottom",
    onEnter: ()=>{
        let headerIntroTml = gsap.timeline();
        headerIntroTml.to(window, {
            duration: 1.5,
            scrollTo: ".barracks-vicus",
            ease:"power3.out"
        })
    }
});
