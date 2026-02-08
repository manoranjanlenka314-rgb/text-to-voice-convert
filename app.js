function openpage()
{
    window.print();
}
  const input = document.getElementById("text");
const button = document.getElementById("speakBtn");

const textToSpeech = () => {
    let text = input.value;

    if (text === "") {
        alert("Please enter some text");
        return;
    }

    const voice = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(voice);
};

button.addEventListener("click", textToSpeech);