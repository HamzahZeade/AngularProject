import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  private breakpointObserver = inject(BreakpointObserver);
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
  
    this.matIconRegistry.addSvgIcon('home', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/home-icon.svg'));
    this.matIconRegistry.addSvgIcon('users', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/home-icon.svg'));
  }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
