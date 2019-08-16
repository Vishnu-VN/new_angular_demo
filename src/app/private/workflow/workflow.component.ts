import { Component, OnInit } from '@angular/core'
import clientData from '../../shared/clientData.json'

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
})
export class WorkflowComponent implements OnInit {
  displayResult = []
  constructor() {}

  ngOnInit() {
    this.displayResult = clientData
    console.log(this.displayResult)

    // console.log(clientData)
    // this.displayResult = clientData.map(
    //   ({
    //     title,
    //     Adminconfig: [
    //       {
    //         bargeInResume: bargeInResume,
    //         confidenceScoreThreshold: confidenceScoreThreshold
    //       }
    //     ]
    //   }) => ({
    //     title,
    //     bargeInResume,
    //     confidenceScoreThreshold
    //   })
    // )
    // console.log(this.displayResult)
  }
}
