import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { WorkflowComponent } from './workflow.component'
import { AccordionModule } from 'primeng/accordion'

@NgModule({
  declarations: [WorkflowComponent],
  imports: [CommonModule, AccordionModule],
  exports: [WorkflowComponent]
})
export class WorkflowModule {}
