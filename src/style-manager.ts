import { Injectable } from '@angular/core';

@Injectable()
export class StyleManager {
  setStyle(key: string, href: string): Promise<void> {
    const element = getOrCreateLinkElement(key);

    return new Promise(resolve => {
      element.onload = () => resolve();
      element.setAttribute('href', href);
    });
  }

  removeStyle(key: string) {
    const existingLinkElement = getExistingLinkElement(key);
    if (existingLinkElement) {
      document.head.removeChild(existingLinkElement);
    }
  }
}

function getOrCreateLinkElement(key: string): HTMLElement {
  return getExistingLinkElement(key) || createLinkElement(key);
}

function getExistingLinkElement(key: string): HTMLElement {
  return document.head.querySelector(
    `link[rel="stylesheet"][data-style-manager=${key}]`
  ) as HTMLElement;
}

function createLinkElement(key: string): HTMLElement {
  const linkElement = document.createElement('link');

  linkElement.setAttribute('rel', 'stylesheet');
  linkElement.dataset.styleManager = key;
  document.head.appendChild(linkElement);

  return linkElement;
}
