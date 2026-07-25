import { Component, OnInit, signal } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('giulia-s-pergentino');

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Animação principal controlada 100% pelo scroll do usuário
    gsap.fromTo(
      '.video',
      { y: '100vh' },
      {
        y: '0vh',
        ease: 'none', // Deve ser 'none' para o movimento do scroll ser 1:1 e linear
        scrollTrigger: {
          trigger: '.video',
          start: 'top bottom',
          end: 'top top',
          snap: {
            // Regra dos 50%: se progress < 0.5 volta pra 0, se >= 0.5 vai pra 1
            snapTo: (value) => (value < 0.4 ? 0 : 1),
            delay: 0.1, // Espera 0.1s após soltar o scroll para ativar
            duration: { min: 0.4, max: 5 },
            ease: 'elastic.out(1, 0.5)', // O efeito de mola ao travar na posição
          },
          scrub: 1, // Mantém o scroll fluido e no controle do usuário

          // Quando o usuário para de rolar a página
        },
      },
    );

    gsap.registerPlugin(SplitText);
    let split = SplitText.create('.title', { type: 'chars' });

    // now animate the characters in a staggered fashion
    gsap.from(split.chars, {
      duration: 0.5,
      x: 50, // animate from 100px below
      autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
      stagger: 0.05, // 0.05 seconds between each
    });
  }
}
