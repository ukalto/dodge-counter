import {Component, OnInit} from '@angular/core';
import {User} from "./models/User";
import {Timestamp} from "./models/Timestamp";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  timestamps: Timestamp[] = [];
  users: User[] = [];

  constructor() {
  }

  public ngOnInit(): void {
    this.users.push(new User("Max", 0));
    this.users.push(new User("Raphi", 0));
  }

  public convertTimestamp(timestamp: Timestamp): string[] {
    const dateFormat = new Date(timestamp.timestamp);
    const date =
      ('0' + dateFormat.getDate()).slice(-2)
      + '.' + ('0' + (dateFormat.getMonth() + 1)).slice(-2)
      + '.' + dateFormat.getFullYear();
    const time =
      ('0' + dateFormat.getHours()).slice(-2) +
      ":" + ('0' + dateFormat.getMinutes()).slice(-2);
    return [date, time];
  }
}
