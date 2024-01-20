import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-resent-bplgs',
  templateUrl: './resent-bplgs.component.html',
  styleUrl: './resent-bplgs.component.scss'
})
export class ResentBplgsComponent {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
  
    this.matIconRegistry.addSvgIcon('home', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/home-icon.svg'));
    this.matIconRegistry.addSvgIcon('users', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/home-icon.svg'));
  }
  
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
}
