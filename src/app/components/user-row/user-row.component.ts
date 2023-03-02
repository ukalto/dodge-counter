import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {Timestamp} from "../../models/Timestamp";

@Component({
  selector: 'app-user-row',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.css']
})
export class UserRowComponent implements OnInit {
  @Input("user") user!: User;
  @Input("timestamps") timestamps!: Timestamp[];

  constructor() {
  }

  ngOnInit(): void {
  }

  decrementCounter(): void {
    this.user.decrementCounter();
    for (let i = this.timestamps.length-1; i >= 0; i--) {
      if(this.timestamps[i].name == this.user.name){
        this.timestamps.splice(i, 1);
        break;
      }
    }
  }

  incrementCounter(): void {
    this.user.incrementCounter();
    this.timestamps.push(new Timestamp(this.user.name, + Date.now()));
  }
}
