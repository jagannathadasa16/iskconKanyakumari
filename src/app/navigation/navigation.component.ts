import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoCollectComponent } from '../info-collect/info-collect.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  text: string = '';
books = [
  "Bhagavad-gita As It Is",
  "Srimad-Bhagavatam",
  "Sri Caitanya-caritamrta",
  "Teachings of Lord Caitanya",
  "The Nectar of Devotion",
  "The Nectar of Instruction",
  "Easy Journey to Other Planets",
  "Krsna Consciousness The Topmost Yoga System",
  "KRSNA, The Supreme Personality of Godhead",
  "Perfect Questions, Perfect Answers",
  "Teachings of Lord Kapila, the Son of Devahuti",
  "Teachings of Queen Kunti",
  "Krsna, the Reservoir of Pleasure",
  "The Science of Self Realization",
  "The Path of Perfection",
  "Life Comes From Life",
  "The Perfection of Yoga",
  "Beyond Birth and Death",
  "On the Way to Krsna",
  "Raja - Vidya: The King of Knowledge",
  "Elevation to Krsna Consciousness",
  "Krsna Consciousness, The Matchless Gift",
  "Light of the Bhagavata",
  "Sri Isopanisad - 1974 Edition",
  "The Journey of Self - Discovery",
  "Transcendental Teachings of Prahlada Maharaja",
  "A Second Chance: The Story of a Near - Death Experience",
  "Mukunda - mala - stotra",
  "Narada-bhakti-sutra",
];
articles = [
  "Devotee and the Divinity",
 "Solution of Present Crisis by Bhagwat Geeta",
 "Liberation in Practice",
 "Man is the Architect of His Own Fortune",
" Religion is Godly Life",
" Shaktipujah",
" World Pacifist and the Bhagwat gita",
" Fragment of an Untitled Essay on His Divine Grace Srila",
" Cult of Lord Sri Caitanya.",
" Conception of Gita-nagari Part 1",
" Conception of Gita-nagari Part 2",
" Interpretations of Bhagavad-gita",
" Divinity of Lord Caitanya",
" What is the Matter with the World?",
" Perfection at Home-A Novel Contribution to the Fallen Humanity",
" Comment of Visva Dharma",
" Vyasa-puja Offering to His Divine Grace Srila Bhaktisiddhanta Sarasvati Gosvami Maharaja, 1961",
" Vrndavana Bhajana, 1958",
" Prahlad Maharaja",
" International Institution for God Consciousness 1965/66",
" Srimad Bhawatam- India's Message of Peace and Goodwill",
" An Analysis of Bhagwat Geeta",
" Analysis of Bhagwat Geeta",
" Viraha Astaka",
" The Real Peace Formula",
" Who is Crazy?",
" Manifestation of Dharma in Human Being - Feb 1972",
" Message of Krishna Consciousness",
" Who is Crazy? (Original)",
" How Should One Cultivate Human Spirit-Part 1",
" How Should One Cultivate Human Spirit-Part 2 "
];
 array: any[] = [];
cantos: any[] = [];
  constructor(private dialog: MatDialog, private httpClient: HttpClient) { }

  ngOnInit(): void {
    // this.httpClient.get('https://kanyakumari-iskcon-default-rtdb.firebaseio.com/users.json').subscribe(res =>{
    //   console.log(res);
    // });
    for(let i = 1; i <= 18; i++){
      this.array.push("Chapter "+ i)
  }
  for (let j = 1; j<=12; j++){
    this.cantos.push("Cantos "+j)
  }

  }
  openDialog(){
    
      const dialogRef = this.dialog.open(InfoCollectComponent,{
        width: '450px',
        disableClose: true
      })
  }
}
