import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StockapiService } from '../stockapi.service';
import { getDefaultStockModel, StockModel } from '../StockModel';

@Component({
  selector: 'app-my-stocks',
  templateUrl: './my-stocks.component.html',
  styleUrls: ['./my-stocks.component.scss']
})
export class MyStocksComponent implements OnInit {
  minDate = new Date(2000, 0, 1);
  maxDate = new Date();
  dateVal = "";
  stockVal = "";
  firstObj= 'Time Series (5min)';
  content: StockModel  = getDefaultStockModel();
  stockSource = new MatTableDataSource<StockModel>([]);
  displayedColumns=['name','open','close','high','low'];

  constructor(private stockapi:StockapiService) { }

  ngOnInit(): void {
  }
  
  triggerApi(){
    if(this.stockVal && this.dateVal) {
      this.stockapi.getValue(this.stockVal).subscribe((val: any) => {
        let stockList = [];
        this.content.name = this.stockVal;
        Object.keys(val[this.firstObj]['2021-11-05 19:30:00']).forEach(item => {
          if(item.includes('open')) {
             this.content.open = val[this.firstObj]['2021-11-05 19:30:00'][item];
          } else if(item.includes('close')) {
            this.content.close = val[this.firstObj]['2021-11-05 19:30:00'][item];
          } else if(item.includes('high')) {
          this.content.high = val[this.firstObj]['2021-11-05 19:30:00'][item];
          } else if(item.includes('low')) {
            this.content.low = val[this.firstObj]['2021-11-05 19:30:00'][item];
        }
        });
        stockList.push(this.content);
        this.stockSource = new MatTableDataSource<StockModel>(stockList);
      });
    }
  }

}
