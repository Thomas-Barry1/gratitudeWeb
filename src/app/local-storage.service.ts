import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly storageKey = 'gratitudes';

  constructor() { }

  saveGratitudes(gratitudes: string[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(gratitudes));
  }

  loadGratitudes(): string[] {
    const storedGratitudes = localStorage.getItem(this.storageKey);
    return storedGratitudes ? JSON.parse(storedGratitudes) : [];
  }
  
  // Set a value in local storage
  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  // Get a value from local storage
  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  // Remove a value from local storage
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Clear all items from local storage
  clear(): void {
    localStorage.clear();
  }
}