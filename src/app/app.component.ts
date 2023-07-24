import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TwoWaysComponent } from './two-ways/two-ways.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TwoWaysComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-ng2';



  products = [
    { code : 'PD001' ,  name:'Product 1'},
    { code : 'PD002' ,  name:'Product 2'},
    { code : 'PD003' ,  name:'Product 3'},
    { code : 'PD004' ,  name:'Book 1'},
    { code : 'PD005' ,  name:'Book 2'}
  ];

  externalMessage = "cindy";
}
