import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-kirtan',
  templateUrl: './kirtan.component.html',
  styleUrls: ['./kirtan.component.scss']
})
export class KirtanComponent implements OnInit {
  audioObj = new Audio();
  audioEvents = [
    "ended",
    "error",
    "play",
    "playing",
    "pause",
    "timeupdate",
    "canplay",
    "loadedmetadata",
    "loadstart"
  ];
  kirtans = [
    {id:1, name: "HARE KRISHNA KIRTANS"},
    {url:"../assets/mp3/harekrishna1.mp3", name: "Hare Krsihna kirtan 1"},
    {url:"../assets/mp3/hareKrisnamantra2.mp3", name: "Hare Krsihna Kirtan2"},
    {url:"../assets/mp3/hareKrishnaKirtan3.mp3", name: "Hare Krsihna Kirtan 3"},
    {url:"../assets/mp3/hareKrishnamantra4.mp3", name: "Hare Krsihna Kirtan 4"},
    {url:"../assets/mp3/hareKrishna5.mp3", name: "Hare Krsihna Kirtan 5"}
  ];
  currentTime = "00:00:00";
  duration = "00:00:00";
  seek = 0;
  idValue: any;
  // duration!: number;
  constructor() { }

  ngOnInit(): void {
  }
  playSound(toggle:any){
    if (toggle.checked == true) {
     
    let audio = new Audio();
    // audio.src = "../assets/mp3/hareKrishnaKirtan.mp3"
    audio.load();
    audio.play(); 
    } else if (toggle.checked == false) {
      let audio = new Audio();
    // audio.src = "../assets/mp3/hareKrishnaKirtan.mp3"
    audio.load();
    audio.play(); 
    } 
  }
  openKirtan(url:any){
  this.streamObserver(url).subscribe(event =>{})
  // this.audioObj.load();
  // this.audioObj.play();
  }
  setVolume(event:any){
  this.audioObj.volume = event.target.value;
  }
  play(){
  this.audioObj.play();
  }
  pause(){
  this.audioObj.pause();
  }
  stop(){
  this.audioObj.pause();
  this.audioObj.currentTime = 0;
  }
  streamObserver(url:any){
    return new Observable(observer =>{
  this.audioObj.src = url;
  this.audioObj.load();
  this.audioObj.play();
  
  const handler = (event: Event) => {
    console.log(event);
    // this.duration = this.audioObj.duration;
    this.seek = this.audioObj.currentTime
    this.currentTime = this.timeFormat(this.audioObj.currentTime);
    this.duration=this.timeFormat(this.audioObj.duration);
  }
  this.addEvent(this.audioObj, this.audioEvents, handler);
      return ()=>{
        this.audioObj.pause();
        this.audioObj.currentTime = 0;

        this.removeEvent(this.audioObj, this.audioEvents, handler);
      }
    })
  }
  addEvent(obj:any, events:any, handler:any){
  events.forEach((event: any) => {
  obj.addEventListener(event, handler); 
  });
  }
  removeEvent(obj:any, events:any, handler:any){
    events.forEach((event: any) => {
      obj.removeEventListener(event, handler); 
      });
  }
  
  timeFormat(time:any, format="HH:mm:ss"){
  const momentTime = time*1000;
  return moment.utc(momentTime).format(format);
  }
setSeekto(ev:any){
this.audioObj.currentTime = ev.target.value;
}
}
