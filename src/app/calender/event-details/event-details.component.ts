import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit, OnChanges {
  @Input() eventOnDetails: any;
  ekadasis=[
      {id:1, name:"Utpana Ekadasi"},
      {id:2, name:"Mokshada / Vaikuntha/ Mukkoti/ Gita Ekadasi"},
      {id:3, name:"dwadasi"},
      {id:33, name:"Saphala Ekadasi"},
      {id:4, name:"Putrada Ekadasi"},
      {id:5, name:"Sattila Ekadasi"},
      {id:6, name:"Jaya / Bhishma Ekadasi"},
      {id:7, name:"Vijaya Ekadasi"},
      {id:8, name:"Amalaki Ekadasi"},
      {id:9, name:"Paapmochani Ekadasi"},
      {id:10, name:"Kamada Ekadasi"},
      {id:11, name:"Varutini Ekadasi"},
      {id:12, name:"Mohini Ekadasi"},
      {id:13, name:"Apara Ekadasi"},
      {id:14, name:"Nirjala Ekadasi"},
      {id:15, name:"Yogini Ekadasi"},
      {id:16, name:"Deva-Sayana / Padma Ekadasi"},
      {id:17, name:"Kamika Ekadasi"},
      {id:18, name:"Putrada / Pavitropana Ekadasi"},
      {id:19, name:"Aja / Annada Ekadasi"},
      {id:20, name:"Parvartini / Parsva /Vamana Ekadasi"},
      {id:21, name:"Indira Ekadasi"},
      {id:22, name:"Papankusha Ekadasi"},
      {id:23, name:"Rama Ekadasi"},
      {id:24, name:"Haribhodini / Utthana Ekadasi"},
      {id:25, name:"Adika masa - Padmini Ekadasi"},
      {id:26, name:"Adhika masa - Parama Ekadasi"}
  ]
  detailId: any;
  
 

  constructor() { }

  ngOnInit(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
  console.log(this.eventOnDetails);
   this.ekadasis.map((item:any)=>{
    if(this.eventOnDetails == item.id){
      console.log(item.name);
      this.detailId = item.name;
    }
   })
}
}
