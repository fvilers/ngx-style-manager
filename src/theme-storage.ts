import { Injectable, EventEmitter } from '@angular/core';

export interface Theme {
  name: string;
  href: string;
}

const storageKey = '__theme';

@Injectable()
export class ThemeStorage {
  public onThemeUpdate: EventEmitter<Theme> = new EventEmitter<Theme>();

  public storeTheme(theme: Theme) {
    window.localStorage[storageKey] = JSON.stringify(theme);
    this.onThemeUpdate.emit(theme);
  }

  public getStoredTheme(): Theme {
    const theme = JSON.parse(window.localStorage[storageKey] || null);
    return theme;
  }

  public clearStorage() {
    window.localStorage.removeItem(storageKey);
  }
}
