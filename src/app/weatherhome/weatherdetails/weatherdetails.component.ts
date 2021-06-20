import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseUrl, Cities } from '../../constants';
import { HelperService } from 'src/app/helper.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-weatherdetails',
  templateUrl: './weatherdetails.component.html',
  styleUrls: ['./weatherdetails.component.css']
})
export class WeatherdetailsComponent implements OnInit {
  title: string = "Weather App"
  cities:any[] = Cities;
  baseUrl: string = BaseUrl;
  fiveDaysData: any =[];
  homeData: any;
  constructor(private http: HttpClient, private helper: HelperService, private route: Router) { }
  DetailData: any;
  ngOnInit() {
    var cityname = this.helper.getCityname();
    this.homeData=this.helper.getData();
    if (cityname == "") {
      this.route.navigate(["/home"]);
    }
    var url = this.baseUrl + "forecast?q=" + cityname + "&appid=3d8b309701a13f65b660fa2c64cdc517&units=metric";
    // var url = this.baseUrl + "forecast/daily?q=" + cityname + "&appid=0d82ab68f2c379a4b829896547582b52&units=metric&cnt=6";;
    this.http.get(url).subscribe((res: any) => {
      if(res&&res!=""&&res!=null){
        //five days data at 9 .
        this.fiveDaysData =res.list.filter(ele=>ele.dt_txt.split(" ")[1].split(":")[0]=="09");
      }else{
        this.helper.ErrorMessage("Something Went Wrong", this.title);
      }
    }, error => {
      if(cityname!=""){
        this.helper.ErrorMessage("Something Went Wrong", this.title);
      }
     
    })

  }
  Round(deg): number {
    return this.helper.Round(deg);
  }
  SetImage(data): string {
    var iconname = data.weather[0].icon;
    return this.helper.SetImage(iconname);

  }
  ShowDateTime(ndate,offset, flag): string {
    if(offset==""){
       offset=this.helper.getTimeZone();
    }
    return this.helper.DateTimeFormat(ndate,offset,flag);
  }
}
