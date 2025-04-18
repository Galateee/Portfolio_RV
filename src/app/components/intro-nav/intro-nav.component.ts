import { Component, ElementRef, Renderer2 } from '@angular/core';
import { animate, svg, stagger } from 'animejs';

@Component({
  selector: 'app-intro-nav',
  standalone: true,
  imports: [],
  templateUrl: './intro-nav.component.html',
  styleUrl: './intro-nav.component.scss',
})
export class IntroNavComponent {
  isIntroOpen = false;
  isNavOpen = false;
  sections = [
    'Accueil',
    'Serveur',
    'Boutique',
    'Support',
    'Voter',
    'Forum',
    'Liste des membres',
  ];

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  toggleNav(): void {
    const nav = this.el.nativeElement.querySelector('nav');
    const button = this.el.nativeElement.querySelector('button');

    if (this.isNavOpen) {
      //close
      animate('nav', {
        opacity: 0,
        duration: 300,
      });
      this.renderer.removeClass(button, 'menu');
      setTimeout(() => {
        this.renderer.setStyle(nav, 'display', 'none');
      }, 300);
    } else {
      //open
      this.renderer.addClass(button, 'menu');
      this.renderer.setStyle(nav, 'display', 'flex');
      setTimeout(() => {
        this.renderer.setStyle(nav, 'opacity', '1');
      }, 10);
    }

    this.isNavOpen = !this.isNavOpen;
    console.log('nav:', this.isNavOpen);
  }

  onButtonClick(): void {
    const intro = this.el.nativeElement.querySelector('.intro');

    if (this.isIntroOpen) {
      this.toggleNav();
    } else {
      this.isIntroOpen = true;
      setTimeout(() => {
        this.renderer.setStyle(intro, 'display', 'none');
      }, 1000);
      console.log('intro:', this.isIntroOpen);
    }
  }

  scrollToSection(index: number) {
    const target = document.querySelectorAll('section')[index];
    this.toggleNav();
    setTimeout(() => {
      target?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  }


}
