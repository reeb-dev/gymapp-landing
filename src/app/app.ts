import {
  afterNextRender,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';

const MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271!2d-61.9454806!3d-37.4566468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95eb731cc913f63d%3A0xcbe62afd85b646b1!2sGYM%20FITNESS%20CENTER!5e0!3m2!1ses-419!2sar!4v1';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  /** Marca sutil solo cuando el ejemplo vive en webconreeb.com/demos/gimnasio */
  readonly showcase =
    typeof location !== 'undefined' && location.pathname.includes('/demos/gimnasio');

  readonly mapSrc = signal<string | null>(null);
  private readonly mapHost = viewChild<ElementRef<HTMLElement>>('mapHost');
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const el = this.mapHost()?.nativeElement;
      if (!el) {
        this.mapSrc.set(MAP_EMBED);
        return;
      }
      if (typeof IntersectionObserver === 'undefined') {
        this.mapSrc.set(MAP_EMBED);
        return;
      }
      const io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            this.mapSrc.set(MAP_EMBED);
            io.disconnect();
          }
        },
        { rootMargin: '240px' },
      );
      io.observe(el);
      this.destroyRef.onDestroy(() => io.disconnect());
    });
  }
}
