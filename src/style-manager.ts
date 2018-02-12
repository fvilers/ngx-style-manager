import { Injectable } from '@angular/core';

@Injectable()
export class StyleManager {
  setStyle(key: string, href: string) {
    getOrCreateLinkElement(key).setAttribute('href', href);
  }

  removeStyle(key: string) {
    const existingLinkElement = getExistingLinkElement(key);
    if (existingLinkElement) {
      document.head.removeChild(existingLinkElement);
    }
  }
}

function getOrCreateLinkElement(key: string): Element {
  return getExistingLinkElement(key) || createLinkElement(key);
}

function getExistingLinkElement(key: string): Element {
  return document.head.querySelector(`link[rel="stylesheet"][data-style-manager=${key}]`);
}

function createLinkElement(key: string): Element {
  const linkElement = document.createElement('link');

  linkElement.setAttribute('rel', 'stylesheet');
  linkElement.dataset.styleManager = key;
  document.head.appendChild(linkElement);

  return linkElement;
}
