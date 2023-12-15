function startSound()
{
    // get sound from my files
    mySound = new sound("music.mp3")
    //plays the sound
    mySound.play();

    document.getElementById("stopButton").disabled = false;
    document.getElementById("startButton").disabled = true;
}

function sound(src)
{
    // creates sound
    this.sound = document.createElement("audio");
    this.sound.src = src;
    //allows sound to be played
    this.play = function()
    {
        this.sound.play()
    }
}

function stopSound()
{
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
    // refreshs page
    window.location.reload();
}