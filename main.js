var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

var Textbox = document.getElementById("textbox");

function start()
{   //Textbox.innerHTML = "";
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}



recognition.onresult = function(event) {

    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content =="take my selfie")
    {
        console.log("taking selfie ---");
        speak();
    }
}

function speak()
{
    var synth= window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds!";
    //speak_data = document.getElementById("textbox").innerHTML;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        take_snapshot();
        save();
    }, 5000);
}

camera = document.getElementById("camera");

Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90
});

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="piya.jpeg_image" src="'+ data_uri+'"/>';
    });
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("piya.jpeg_image").src;
    link.href = image;
    link.click();
}