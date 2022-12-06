import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, pipe } from 'rxjs';
import { User } from '../../model/user.model';
import { isLoggedin } from '../../store/selector/auth.selector';
import { SeoService } from '../../service/seo/seo.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  providers: [CookieService]
})
export class AccountComponent implements OnInit {

  isLoggedin$: Observable<void>
  name: string = this.cookie.get('name')

  constructor(
    public store: Store,
    public seo: SeoService,
    public cookie: CookieService
  ) { 
    this.cookie.set('des', 'wtf')
  }

  ngOnInit(): void {

    console.log(this.name)
    this.seo.SetMetaDescription(this.cookie.get('des'))
    // this.store.pipe(select(isLoggedin)).subscribe((data: any) => {
    //   console.log(data.value)
    // })
    
  }

}
