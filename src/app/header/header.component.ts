import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
  
    this.matIconRegistry.addSvgIcon('home', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/home-icon.svg'));
    this.matIconRegistry.addSvgIcon('users', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/home-icon.svg'));
  }
}
