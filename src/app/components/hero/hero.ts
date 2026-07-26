import { Component, OnInit } from '@angular/core';
import gsap from 'gsap/all';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit {
  ngOnInit(): void {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.hero-photo', { scale: 1.08, opacity: 0, duration: 1.2 })
      .from('.black-panel', { xPercent: -100, duration: 0.9 }, '-=1.0')
      .from('.headline .line', { y: 24, opacity: 0, stagger: 0.08, duration: 0.6 }, '-=0.4')
      .from('.arrow', { opacity: 0, y: -10, duration: 0.5 }, '-=0.2')
      .from('.nav-label, .burger', { opacity: 0, y: -10, duration: 0.5, stagger: 0.06 }, '-=0.6')
      .from('.wordmark .main', { xPercent: -20, opacity: 0, duration: 0.9 }, '-=0.3')
      .from('.wordmark .sub', { opacity: 0, x: 20, duration: 0.6 }, '-=0.5');

    gsap.to('.arrow', {
      y: 8,
      duration: 0.9,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 1.6,
    });
  }
}
