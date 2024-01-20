import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
export enum ListModeEnum {
  AsCard = "card",
  AsTabel = "tabel",
}
@Component({
  selector: 'app-headeruser',
  templateUrl: './headeruser.component.html',
  styleUrl: './headeruser.component.scss'
})

export class HeaderuserComponent {
  showListAsCard: boolean = true;
  isCardViewActive = true; // Initial active state, adjust as needed
    @Output() listModeChanged = new EventEmitter<boolean>();
   @Input() countofUser: any;
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
  
    this.matIconRegistry.addSvgIcon('list', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/list.svg'));
    this.matIconRegistry.addSvgIcon('apps', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/apps.svg'));
  }

  onChangeListMode(listMode: boolean) {
    this.isCardViewActive = listMode;
    this.listModeChanged.emit(listMode);
  }
}
