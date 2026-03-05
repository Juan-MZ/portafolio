import { Injectable, signal, computed } from '@angular/core';
import { TRANSLATIONS, Lang } from '../i18n/translations';

@Injectable({ providedIn: 'root' })
export class LangService {
  readonly lang = signal<Lang>('es');
  readonly t = computed(() => TRANSLATIONS[this.lang()]);

  toggle() {
    this.lang.set(this.lang() === 'es' ? 'en' : 'es');
  }
}
