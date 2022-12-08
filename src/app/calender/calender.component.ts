import { HttpClient } from '@angular/common/http';
import {AfterViewInit, OnInit,  Component, ViewChild} from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; 

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {
  today = new Date();
  weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: "Utpana Ekadasi", date:'2022-11-20', color: 'red', EventId:1},
      { title: "Mokshada / Vaikuntha/ Mukkoti/ Gita Ekadasi", date:'2022-12-04', color: 'red', EventId: 2},
      { title: "Dwadasi", date:'2022-12-05', color: 'blue', EventId: 3},
      { title: "Saphala Ekadasi", date:'2022-12-19', color: 'red', EventId: 33},
      { title: "Putrada Ekadasi", date:'2023-01-02', color: 'red', EventId: 4},
      { title: "Sattila Ekadasi", date:'2023-01-18', color: 'red', EventId: 5},
      { title: "Jaya / Bhishma Ekadasi", date:'2023-02-01', color: 'red', EventId: 6},
      { title: "Vijaya Ekadasi", date:'2023-02-17', color: 'red', EventId: 7},
      { title: "Amalaki Ekadasi", date:'2023-03-03', color: 'red', EventId: 8},
      { title: "Paapmochani Ekadasi", date:'2023-03-18', color: 'red', EventId: 9},
      {  title: "Kamada Ekadasi", date:'2023-04-02', color: 'red', EventId: 10},
      {  title: "Varutini Ekadasi", date:'2023-04-16', color: 'red', EventId: 11},
      {  title: "Mohini Ekadasi", date:'2023-05-01', color: 'red', EventId: 12},
      {  title: "Apara Ekadasi", date:'2023-05-15', color: 'red', EventId: 13},
      {  title: "Nirjala Ekadasi", date:'2023-05-31', color: 'red', EventId: 14},
      {  title: "Yogini Ekadasi", date:'2023-06-14', color: 'red', EventId: 15},
      {  title: "Deva-Sayana / Padma Ekadasi", date:'2023-06-29', color: 'red', EventId: 16},
      {  title: "Kamika Ekadasi", date:'2023-07-13', color: 'red', EventId: 17},
      {  title: "Putrada / Pavitropana Ekadasi", date:'2023-08-27', color: 'red', EventId: 18},
      {  title: "Aja / Annada Ekadasi", date:'2023-09-11', color: 'red', EventId: 19},
      {  title: "Parvartini / Parsva /Vamana Ekadasi", date:'2023-09-26', color: 'red', EventId: 20},
      {  title: "Indira Ekadasi", date:'2023-10-10', color: 'red', EventId: 21},
      {  title: "Papankusha Ekadasi", date:'2023-10-25', color: 'red', EventId: 22},
      {  title: "Rama Ekadasi", date:'2023-11-09', color: 'red', EventId: 25},
      {  title: "Haribhodini / Utthana Ekadasi", date:'2023-11-23', color: 'red', EventId: 26},
      {  title: "Adika masa - Padmini Ekadasi", date:'2023-07-29', color: 'red', EventId: 27},
      {  title: "Adhika masa - Parama Ekadasi", date:'2023-08-12', color: 'red', EventId: 28}
    ]
  };
  eventOfDate: any;
  eventDate: any;
  getDay: string = "";
  eventObj!: number;
  brown:string = 'warn';
   
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
        this.eventOfDate = this.calendarOptions.events;
        // console.log(this.today.toDateString().slice(8, 10));
        this.getDay = this.weekday[this.today.getDay()];
        const dateFormat = this.today.getFullYear()+"-"+(this.today.getMonth()+1)+"-"+this.today.toDateString().slice(8, 10);
        console.log(dateFormat);
        this.eventOfDate.map((item:any)=>{
          if(dateFormat == item.date){
        this.eventDate = item;
          }
        })
      this.getDetails();  
      }
      getDetails(){
        this.http.get('https://sheetdb.io/api/v1/ufofhn680ebn3').subscribe(res=>{
          console.log(res);
          
        })
      }

  handleDateClick(arg:any) {
    console.log( arg.date.getDay());
    
    this.eventOfDate.map((item:any)=>{
      if(arg.dateStr === item.date){
        this.eventDate = item.title;
      }    
    });
    
    this.getDay =this.weekday[arg.date.getDay()]
  }
  openEvent(eventdate:any){
    this.eventObj = eventdate.EventId;
    console.log(this.eventObj);

  }
}


