function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function sendMsg(){
    let txt = document.getElementById("msgToSend");
    if(txt.value.length < 3){
        console.log("Too short");
    }else{
        let msg = txt.value;
        txt.value = "";
        let msgHolder = document.createElement("p");
        msgHolder.innerText = `You: ${msg}`;
        msgHolder.className = "msgHolder";
        msgHolder.style.color = "#1c1c1c";
        document.getElementById("sendMsg").onclick = null;
        document.getElementById("qnaBody").appendChild(msgHolder);

        fetch("/grumiobot", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({msg})
        })

        .then(response=>{
            if(!response.ok){
                console.log("response not ok");
            }else{
                return response.json();
            }
        })

        .then(data=>{
            if(data.message == "euge"){
                let responseHolder = document.createElement("p");
                responseHolder.className = "msgHolder";
                responseHolder.innerText = `Grumio: ${data.response}`;
                document.getElementById("sendMsg").onclick = sendMsg;
                document.getElementById("qnaBody").appendChild(responseHolder);
            }else{
                console.log("eheu!");
            }
        })

        .catch(e=>{
            console.log(`Error: ${e}`);
        });
    }
}

function explore(){
    window.location.href = "/explore";
}

//gsap stuff (anims and whatnot eugepae!!!)

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

ScrollTrigger.create({
    trigger: ".header-intro",
    start: "top bottom",
    end: "bottom bottom",
    onEnter: ()=>{
        let headerIntroTml = gsap.timeline();
        headerIntroTml.to(window, {
            duration: 1.5,
            scrollTo: ".header-intro",
            ease:"power3.out"
        })
        .to(".flexbox", {
            duration: 3,
            opacity: "1",
            ease:"power3.out"
        }, "<")
        .to(".motto", {
            duration: 1.5,
            bottom: "0",
            ease:"power3.out"
        }, "<")
    }
});

ScrollTrigger.create({
    trigger: ".header-intro",
    start: "bottom top",
    end: "top top",
    scrub: "true",
    onUpdate: (self)=>{
        if(self.direction == -1){
            let headerIntroTml = gsap.timeline();
            headerIntroTml.to(window, {
                duration: 1.5,
                scrollTo: ".title",
                ease:"power3.out"
            })
            .to(".flexbox", {
                duration: 3,
                opacity: "0",
                ease:"power3.out"
            }, "<")
            .to(".motto", {
                duration: 1.5,
                bottom: "-70",
                ease:"power3.out"
            }, "<")
        }
    }
});

ScrollTrigger.create({
    trigger: ".intro-faq",
    start: "top bottom",
    end: "bottom bottom",
    onEnter: ()=>{
        let headerIntroTml = gsap.timeline();
        headerIntroTml.to(window, {
            duration: 1.5,
            scrollTo: ".intro-faq",
            ease:"power3.out"
        })
        .to(".flexbox", {
            duration: 3,
            opacity: "0",
            ease:"power3.out"
        }, "<")
        .to(".motto", {
            duration: 1.5,
            bottom: "-70",
            ease:"power3.out"
        }, "<")
    }
});

ScrollTrigger.create({
    trigger: ".motto",
    start: "bottom top",
    end: "top top",
    scrub: "true",
    onUpdate: (self)=>{
        if(self.direction == -1){
            let headerIntroTml = gsap.timeline();
            headerIntroTml.to(window, {
                duration: 1.5,
                scrollTo: "#introSection",
                ease:"power3.out"
            })
            .to(".flexbox", {
                duration: 3,
                opacity: "1",
                ease:"power3.out"
            }, "<")
            .to(".motto", {
                duration: 1.5,
                bottom: "0",
                ease:"power3.out"
            }, "<")
        }
    }
});