import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SrilaPrabhupadaComponent } from './article/srila-prabhupada/srila-prabhupada.component';
import { CalenderComponent } from './calender/calender.component';
import { EventDetailsComponent } from './calender/event-details/event-details.component';
import { JapaComponent } from './japa/japa.component';
import { KirtanComponent } from './kirtan/kirtan.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/navigation', pathMatch: 'full' },
  { path: "navigation", component: NavigationComponent },
  { path: "srilaPrabhupada", component: SrilaPrabhupadaComponent },
  { path: "footer", component: FooterComponent },
  { path: "japa", component: JapaComponent },
  { path: "kirtan", component: KirtanComponent },
  { path: "calender", component: CalenderComponent},
  { path: "event-details", component: EventDetailsComponent},
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
