import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html'
  // styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {
  items = [
    {
      label: 'Home',
      items: [
        { label: 'Dashboard', routerLink: ['/home/dashboard'] },
        { label: 'Workflow', routerLink: ['/home/workflow'] }
      ]
    },
    {
      label: 'investment',
      items: [
        { label: 'Fixed deposit', routerLink: ['/not_found'] },
        { label: 'Share Market', routerLink: ['/not_found'] },
        { label: 'Mutual Funds', routerLink: ['/not_found'] }
      ]
    }
  ]
  showSideBar = false
  constructor() {}

  ngOnInit() {
    console.log('routeChange')
  }

  ngOnChange() {
    console.log('routeChange')
  }

  public sideBarStatus() {
    this.showSideBar = !this.showSideBar
  }
}
