import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NavigationModule } from './navigation/navigation.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css'],
  imports:[RouterModule,NavigationModule]
})
export class AppComponent {
  title = 'navigation-site';

  constructor(
    public router: Router,
		public activatedRoute: ActivatedRoute,
  ) {}
}