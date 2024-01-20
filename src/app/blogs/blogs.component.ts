import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { map } from 'rxjs';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {
  data: any =[1, 2, 3, 4];



  constructor(private breakpointObserver: BreakpointObserver ,
    private matIconRegistry: MatIconRegistry,
     private domSanitizer: DomSanitizer) {
  
    this.matIconRegistry.addSvgIcon('timer', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/timer.svg'));
    this.matIconRegistry.addSvgIcon('person', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/person.svg'));
  }
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 1 },
          table: { cols: 1, rows: 4 },
        };
      }
 
     return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 1, rows: 1 },
         table: { cols: 4, rows: 4 },
      };
    })
  );
}
