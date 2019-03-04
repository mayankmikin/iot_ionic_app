import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonUserService {

  constructor() { }

   //State Management
    public  setSession(key: string, value: any): void {
        //sessionStorage.setItem(key, JSON.stringify(value));
        localStorage.setItem(key, JSON.stringify(value));
    }

    public getSession(key: string): any {
        if (typeof window !== 'undefined') {
            //let retrievedObject = sessionStorage.getItem(key) as string;
            let retrievedObject = localStorage.getItem(key) as string;
            return retrievedObject;
        }
    }
    
    clearSession(): void {
        localStorage.clear();
    }

}
