import { Component } from '@angular/core';
import { IntroNavComponent } from "../../components/intro-nav/intro-nav.component";
import { animate, svg, stagger } from 'animejs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IntroNavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  ngAfterViewInit(): void {
    animate(svg.createDrawable('.welcome'), {
      draw: ['0 0', '0 1', '1 1'],
      ease: 'inOutQuad',
      duration: 2000,
      delay: stagger(100),
      loop: true
    });
  } 
}