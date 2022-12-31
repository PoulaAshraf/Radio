class Player{
    constructor(){
        var heightMain = document.getElementById("player");
        heightMain.style.height = screen.height + "px";
        if(screen.width < 500){
            heightMain.style.width = screen.width + "px";
        }

        var heightSection = document.getElementById("content");
        heightSection.style.height = screen.height-300 + "px";
    }
}

onload = new Player();

// Class for buttons 
class AudioPlayer{
    constructor(){
        this.audio_file = document.getElementById("audio");
        this.audio_title = document.getElementById("audio_title");
        this.play = document.getElementById("play_pause");
        this.isPlayed;
        this.play.addEventListener("click", ()=>{
            this.play_pause();
        });

        this.names_radio = [];
        this.names_radio[0] = "Radio FM";
        this.names_radio[1] = "My Music";
        this.names_radio[2] = "Radio Egypt";

        // momken nstbdl elAudio Files blLive Radio mn ay Website 
        this.source_audio = [];
        this.source_audio[0] = "https://audio.nrpstream.com/listen/nogoumfm/radio.mp3"; 
        this.source_audio[1] = "./audio/audio.mp3";
        this.source_audio[2] = "https://s3.radio.co/s9cb11828c/listen";

        this.server = 0;
        this.setSource();

        document.getElementById("next").addEventListener("click", ()=>{
            if(this.server < this.source_audio.length-1){
                ++this.server;
                this.isPlayed = false;
            }else{
                this.server = 0;
            }
            localStorage.setItem("point", this.server); // 3shan lma yft7 yla2y a5r Channel kan fate7ha 
            this.setSource();
        });

        document.getElementById("back").addEventListener("click", ()=>{
            if(this.server > 0){
                --this.server;
                this.isPlayed = false;
            }else{
                this.server = this.source_audio.length-1;
            }
            this.setSource();
        });
    }

    setSource(){
        if(localStorage.getItem("point") != null){
            this.server = localStorage.getItem("point");
        }
        this.audio_file.src = this.source_audio[this.server];
        this.audio_title.innerHTML = this.names_radio[this.server];
        this.play_pause();
    }
    play_pause(){
        if(this.isPlayed == false){
            this.play.src = "./img/pause.png";
            this.audio_file.play();
            this.isPlayed = true;
        }else{
            this.play.src = "./img/play.png";
            this.audio_file.pause();
            this.isPlayed = false;
        }
    }
}

onload = new AudioPlayer();