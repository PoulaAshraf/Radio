class Volum{
    constructor(){
        this.audio_file = document.getElementById("audio");
        this.audio_file.volume = 50/100;
        this.audio_file.playbackRate = 1;

        this.volume_range = document.getElementById("vol");
        this.volume_range.addEventListener("change", ()=>{
            this.audio_file.volume = this.volume_range.value / 100;
        }); 

        this.volume_speed = document.getElementById("speed");
        this.volume_speed.addEventListener("change", ()=>{
            this.audio_file.playbackRate = this.volume_speed.value / 100;
        }); 
    }
}

onload = new Volum();