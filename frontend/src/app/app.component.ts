import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { LoaderService } from './services/Loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})

export class AppComponent {
}
