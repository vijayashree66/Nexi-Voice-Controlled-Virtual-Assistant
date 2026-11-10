let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="en-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishme() {
    let day = new Date();
    let hours = day.getHours();
    console.log(hours);

    if (hours >= 0 && hours < 12) {
        speak("Good Morning mam");
    }
    else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon mam");
    }
    else {
        speak("Good Evening mam");
    }
}

window.addEventListener('load', () => {
    wishme();
});


let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();
recognition.onresult = (event) => {

    console.log(event) // full speech event

    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript

    console.log("User said:", transcript)

    content.innerText = transcript
    takeCommand(transcript)
}
btn.addEventListener("click",()=>{
    recognition.start();
    btn.style.display ="none"
    voice.style.display ="block"

});
function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"

    message = message.toLowerCase().trim()
    if(message.includes("hello")){
        speak("Hello mam,what can i help you?")
    }
    else if(message.includes("who are you")){
        speak("i am virtual assistant,created  by vijayashree mam")

    }else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://www.youtube.com/","_blank")
}
else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://www.google.com/")


}else if(message.includes("open whatsapp")){
        speak("opening whatsapp...")
        window.open("whatsapp://")


}else if(message.includes("play song")){
        speak("playing your fav song...")
        window.open("https://youtu.be/vEe-UgJvUHE?si=-rMFC7CL1nFRce6y")


}else if(message.includes("which is your most liked song")){
        speak("My most liked song is aasa kooda")

}else if(message.includes("what is your name")){
        speak("Myname is Nexi")

}else if(message.includes("time")){
    let time = new Date().toLocaleTimeString()
    speak("The current time is " + time)
}else if(message.includes("Nexi do u like your boss")){
    speak("yes i like my boss")

}else{
    let query = message
.replace("what is","")
.replace("who is","")
.replace("what are","")
.replace("tell me about","")
.replace("search","")
.replace("shut off","")
.replace("shut me picture of","")
.replace("show me picture of","")

.trim()
    speak("This is what I found on the internet regarding " + message)
    window.open(`https://www.google.com/search?q=${message}`,"_blank")
}
}
particlesJS("particles-js", {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 800
      }
    },

    color: {
      value: "#ffffff"
    },

    shape: {
      type: "circle"
    },

    opacity: {
      value: 0.7,
      random: true
    },

    size: {
      value: 2,
      random: true
    },

    line_linked: {
      enable: false
    },

    move: {
      enable: true,
      speed: 0.6,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out"
    }
  },

  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      }
    },

    modes: {
      repulse: {
        distance: 80
      },

      push: {
        particles_nb: 4
      }
    }
  },

  retina_detect: true
});