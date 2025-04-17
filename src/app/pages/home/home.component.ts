import { Component } from '@angular/core';
import { IntroNavComponent } from "../../components/intro-nav/intro-nav.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IntroNavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}