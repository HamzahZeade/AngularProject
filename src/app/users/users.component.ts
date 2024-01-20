import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { map } from 'rxjs';
import { UsersService } from '../Services/users.service';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
export enum ListModeEnum {
  AsCard = "card",
  AsTabel = "tabel",
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  showListAsSmallCard: boolean = false ;
  showListAsCard: boolean = true;
   ListUsers: any[] = [];
   countofUser: number = 0;
  constructor (private breakpointObserver: BreakpointObserver , private usersService :  UsersService ) {
    
  }
  tiles: Tile[] = [
    {text: 'One', cols: 4, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 4, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 4, rows: 1, color: 'lightpink'},
    // {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
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

 ngOnInit() {
  //Add 'implements OnInit' to the class.
  this.getUsers();
 }
 getUsers() {
  this.usersService.getData().subscribe(
    (data) => {
      // Handle the data here
      this.ListUsers =  data
      this.countofUser =  this.ListUsers.length
    },
    (error) => {
      // Handle errors here
      console.error(error);
    }
  );
}


  onChangeListMode(listMode: string) {
    // this.showListAsSmallCard = listMode === ListModeEnum.AsTabel ? true : false;
    this.showListAsCard = listMode === ListModeEnum.AsCard ? true : false;
  }

  onListModeChanged(listMode: boolean) {
    // Handle the event here
    this.showListAsCard  = listMode ;
    // You can perform any other actions based on the emitted event
  }
}
