import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import authAction from '../../store/action/auth.action';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SeoService } from '../../service/seo/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [CookieService] 
})
export class HomeComponent implements OnInit {
  name: string;
  password: string;

  constructor(
    public store: Store,
    public router: Router,
    public cookie: CookieService,
    public seo: SeoService
  ) { }

  ngOnInit(): void {
  }


  submit() {
    this.store.dispatch(authAction.saveAccount({user: {username: this.name, password: this.password}}))
    this.cookie.set('name', 'wtf');
    this.router.navigate(['/account'])
  }

  ngOnDestroy() {
    this.seo.SetMetaTitle(this.cookie.get('name'))
  }
}
