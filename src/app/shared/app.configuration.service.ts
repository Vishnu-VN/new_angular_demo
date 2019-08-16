import { Injectable } from '@angular/core'

@Injectable()
export class AppConfigurationService {
  public lineChartOptions = {
    responsive: true
  }
  public lineChartLegend = true
  public lineChartType = 'line'
  public lineChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
}
