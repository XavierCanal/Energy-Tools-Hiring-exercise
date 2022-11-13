import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loadingSubject = new Subject<boolean>();
  loadingAction$ = this.loadingSubject.asObservable();
  loadingBoolean$:boolean;

  showLoader() {
    console.log("showloader - service");
    this.loadingSubject.next(true);
    this.loadingBoolean$ = true;
  }

  hideLoader() {
    console.log("hideLoader - service");
    this.loadingSubject.next(false);
    this.loadingBoolean$ = false;
  }
}
