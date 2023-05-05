import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  list: String = "";
  ajouter: String = "";


  constructor(private route: Router) {
  }

  ngOnInit(): void {
  }

  activeList(): String {
    if (this.route.url == "/contrats") {
      this.list = "active";
    } else
      this.list = "";
    return this.list;
  }

  activeAjouter(): String {
    if (this.route.url == "/contrats/ajouter") {
      this.ajouter = "active";
    } else
      this.ajouter = "";
    return this.ajouter;
  }

  getRoute(): string {
    console.log(this.route.url + "#");
    return this.route.url + "#";
  }

}
