import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  showBotPage = false;

  ngOnInit() {
    const startButton = document.getElementById('startButton');
    
    if (startButton) {
      startButton.addEventListener('click', function() {
        alert('Start button clicked!');
      });
    }
  }


  startDashboard() {
    this.showBotPage = !this.showBotPage;
  }
}
