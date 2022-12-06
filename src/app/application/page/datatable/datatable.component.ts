import { Component, OnInit } from '@angular/core';
import { traceDeprecation } from 'process';
import { SeoService } from '../../service/seo/seo.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  constructor(
    public seo: SeoService
  ) { }

  ngOnInit(): void {
    this.seo.SetMetaTitle('Datatable')
    this.seo.SetMetaDescription('This page is about function to zoomin and zoomout only the data table. Created on 05/December/2022.')
    this.seo.SetMetaImage('https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular-1520x800.png')
  }

  Zoomin(){
    const trs = Array.from(document.getElementsByTagName('td') as HTMLCollectionOf<HTMLElement>)
    const ths = Array.from(document.getElementsByTagName('th') as HTMLCollectionOf<HTMLElement>)
    trs.forEach((tr: any) => {
      const style = window.getComputedStyle(tr).getPropertyValue('font-size');
      const currentSize = parseFloat(style)
      tr.style.fontSize = (currentSize + 1) + 'px'
    })
    ths.forEach((th: any) => {
      const style = window.getComputedStyle(th).getPropertyValue('font-size');
      const currentSize = parseFloat(style)
      th.style.fontSize = (currentSize + 1) + 'px'
    })
  }

  Zoomout(){
    const trs = Array.from(document.getElementsByTagName('td') as HTMLCollectionOf<HTMLElement>)
    const ths = Array.from(document.getElementsByTagName('th') as HTMLCollectionOf<HTMLElement>)
    trs.forEach((tr: any) => {
      const style = window.getComputedStyle(tr).getPropertyValue('font-size');
      const currentSize = parseFloat(style)
      tr.style.fontSize = (currentSize - 1) + 'px'
    })
    ths.forEach((th: any) => {
      const style = window.getComputedStyle(th).getPropertyValue('font-size');
      const currentSize = parseFloat(style)
      th.style.fontSize = (currentSize - 1) + 'px'
    })
  }
}
