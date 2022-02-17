import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-data-dump',
  templateUrl: './data-dump.component.html',
  styleUrls: ['./data-dump.component.css']
})
export class DataDumpComponent implements OnInit {

  constructor(private service:UtilsService) { }

  ngOnInit(): void {
  }

}
