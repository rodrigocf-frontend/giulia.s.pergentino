import { Component, OnInit, signal } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import { Hero } from './components/hero/hero';
import { SectionModel } from './components/section-model/section-model';
import { SectionPresentation } from './components/section-presentation/section-presentation';

@Component({
  selector: 'app-root',
  imports: [Hero, SectionModel, SectionPresentation],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('giulia-s-pergentino');

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    // Animação do título
    const split = SplitText.create('.title', { type: 'chars' });
    gsap.from(split.chars, {
      duration: 0.8,
      x: 50,
      autoAlpha: 0,
      stagger: 0.04,
      ease: 'power2.out',
    });

    // Timeline sincronizada com o scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.container',
        start: 'top top',
        end: '+=200%',
        scrub: 1,
        pin: true,
        snap: {
          // Define os pontos exatos de parada dos slides no scroll total (0%, 50%, 100%)
          snapTo: (progress) => {
            const snaps = [0, 0.5, 1]; // Posições exatas de cada slide (Slide 1, Slide 2, Slide 3)

            // Descobre em qual trecho/transição o scroll atual está
            if (progress < 0.5) {
              // Transição do Slide 1 (0) para o Slide 2 (0.5)
              const localProgress = progress / 0.5; // Normaliza a primeira metade para 0 a 1
              return localProgress >= 0.3 ? 0.5 : 0;
            } else {
              // Transição do Slide 2 (0.5) para o Slide 3 (1.0)
              const localProgress = (progress - 0.5) / 0.5; // Normaliza a segunda metade para 0 a 1
              return localProgress >= 0.3 ? 1 : 0.5;
            }
          },
          delay: 0.05, // Resposta mais rápida ao soltar o scroll
          duration: { min: 0.2, max: 0.6 },
          ease: 'power2.out',
        },
      },
    });

    // Animações encadeadas dos slides
    tl.fromTo('.video', { yPercent: 100 }, { yPercent: 0, ease: 'none' }).fromTo(
      '.deitada',
      { yPercent: 100 },
      { yPercent: 0, ease: 'none' },
    );
  }
}
