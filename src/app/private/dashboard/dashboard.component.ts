import { Component, OnInit } from '@angular/core'
import { AppConfigurationService } from '../../shared/app.configuration.service'
import apiData from '../../shared/apiData.json'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [AppConfigurationService]
})
export class DashboardComponent implements OnInit {
  showSideBar = false
  salesData = {
    data: '',
    colorCode: ''
  }
  viewsData = {
    data: '',
    colorCode: ''
  }
  usersData = {
    data: '',
    colorCode: ''
  }
  socialData = {
    data: '',
    colorCode: ''
  }
  currentStatus = {
    users: {
      data: '',
      color: ''
    },
    mobile: {
      data: '',
      color: ''
    },
    views: {
      data: '',
      color: ''
    },
    sales: {
      data: '',
      color: ''
    },
    total: ''
  }
  lineChartLabels = []
  lineChartOptions = {}
  lineChartColors = [
    {
      borderColor: 'black',
      backgroundColor: '#39a3f4'
    }
  ]
  lineChartLegend: boolean = false
  lineChartType: String = ''
  constructor(private _appConfig: AppConfigurationService) {}

  ngOnInit() {
    this.salesData = apiData.salesData
    this.viewsData = apiData.viewsData
    this.usersData = apiData.usersData
    this.socialData = apiData.socialData
    this.currentStatus = apiData.currentStatus

    this.lineChartLabels = this._appConfig.lineChartLabels
    this.lineChartOptions = this._appConfig.lineChartOptions
    this.lineChartLegend = this._appConfig.lineChartLegend
    this.lineChartType = this._appConfig.lineChartType
  }
}
