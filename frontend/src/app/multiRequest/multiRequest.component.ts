import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { getQueryValue } from '@angular/core/src/view/query';
import { Subscription } from 'rxjs';
import { LoaderService } from '../services/Loader.service';

interface ICounterDTO {
    value: number;
}

@Component({
  selector: 'app-multi-request',
  templateUrl: './multiRequest.component.html',
  styleUrls: ['./multiRequest.component.css']
})
export class MultiRequestComponent implements OnInit {

    showLoader$ = this.loaderService.loadingBoolean$;
    msTimer:number = 0;
    interval;
    private backendUrl = 'http://localhost:8080/api/hiring/counter';
    private headerValues = ['A','B','C'];
    public lastValue = 0;
    public valueA;
    public valueB;
    public valueC;

    constructor(
        private http: HttpClient,
        private loaderService: LoaderService,
        private elementRef:ElementRef
        ) {}

    ngOnInit() {
        console.log('Your code here');
        this.loaderService.showLoader();
        this.showLoader$ = this.loaderService.loadingBoolean$;
        this.startTimer();
        const iterations = 3;

        this.delay(iterations, 0)

    }

    refresh() {
      this.loaderService.showLoader();
      this.startTimer();
      this.showLoader$ = this.loaderService.loadingBoolean$;
      const iterations = 3;

      this.delay(iterations, 0)
    }


    delay(iterations:number, startNum:number) {
      if (startNum != iterations) {
        let timer = setTimeout(() => {
          this.fetchValue(startNum);
          clearTimeout(timer);
          startNum++;
          this.delay(iterations, startNum);
        }, 100);
      } else {
        this.loaderService.hideLoader();
        this.showLoader$ = this.loaderService.loadingBoolean$;
        this.pauseTimer();
      }

    }

    fetchValue(i:number): any {
        this.http.get(this.backendUrl, {headers: new HttpHeaders({ 'X-Request-Type': this.headerValues[i] })}).subscribe((result: ICounterDTO) => {
            console.log(result.value);
            this.lastValue = result.value;

            if (this.headerValues[i] == "A") {
              this.valueA = result.value;
            } else if (this.headerValues[i] == "B"){
              this.valueB = result.value;
            } else if (this.headerValues[i] == "C"){
              this.valueC = result.value;
            }
        });

    }


    startTimer() {
      this.msTimer = 0;
      this.interval = setInterval(() => {
        this.msTimer += 3;
      },3)
    }

    pauseTimer() {
      clearInterval(this.interval);
    }

}
