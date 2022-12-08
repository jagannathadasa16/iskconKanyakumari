import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-japa',
  templateUrl: './japa.component.html',
  styleUrls: ['./japa.component.scss']
})
export class JapaComponent implements OnInit {

  malaCounting = 0;
  beatCounting = 0;
  sixteenMalaCount = 0;
  constructor() { }

  ngOnInit(): void {
  }
  increaseCount(){
    this.beatCounting += 1;
    if(this.beatCounting === 108){
    this.oneHundredEight();
    }
  }
  resetIncreaseCount(){
    this.beatCounting = 0;
  }
  oneHundredEight(){
    this.malaCounting += 1;
    this.beatCounting = 0;
    if(this.malaCounting === 16){
      this.every16count();
    }
  }
  reset16Count(){
    this.malaCounting = 0;
  }
  every16count(){
    this.malaCounting = 0;
    this.sixteenMalaCount += 1;
  }
  reset64Count(){
    this.sixteenMalaCount = 0;
  }
  openKirtan(){
let audio = new Audio();
audio.src = '../assets/mp3/prabhupadaChant.mp3'
audio.load();
audio.play();
this.increaseCount();
  }

}
