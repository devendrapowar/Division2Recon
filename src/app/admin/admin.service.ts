import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  get processList(): any[] {
    return [
      {
        "customerId": "3123",
        "customerName": "UMC Utrecht",
        "machineNr": "UMC-342",
        "machineId": "21",
        "machineTypeSerial": "EWD220;33819830413901",
        "process": "WashDisWash",
        "processTime": "Start:2019-13-02 21:13:11.328;End:2019-13-02 22:03:00.327",
        "sensorData": "WaterTemp:celcius:23;Pump10:off;Pump5:on;DrainSensor:off;WaterLevel:ml-432;",
        "onlineFrom": "27-07-2014 10:02:37"
      },
      {
        "customerId": "2954",
        "customerName": "UMC Utrecht",
        "machineNr": "UMC-536J",
        "machineId": "22",
        "machineTypeSerial": "EWD440;4813850810101",
        "process": "WashDis",
        "processTime": "Start:2019-20-04 20:10:04.129;End:2019-20-04 21:29:20.734",
        "sensorData": "WaterTemp:celcius:25;Pump10:on;Pump5:off;DrainSensor:off;WaterLevel:ml-382;",
        "onlineFrom": "08-09-2017 18:12:43"
      },
      {
        "customerId": "1224",
        "customerName": "AMC",
        "machineNr": "AMC1-32",
        "machineId": "21",
        "machineTypeSerial": "EWD440-PT;36849839827301",
        "process": "Dis",
        "processTime": "Start:2019-12-09 23:54:12.349;End:2019-12-09 23:59:14.343",
        "sensorData": "WaterTemp:celcius:22;Pump10:off;Pump5:on;DrainSensor:on;WaterLevel:ml-30;",
        "onlineFrom": "29-06-2016 16:55:02"
      },
      {
        "customerId": "2345",
        "customerName": "UMC",
        "machineNr": "AMC1-32J",
        "machineId": "22",
        "machineTypeSerial": "EWD440-PT;36849839827303424",
        "process": "diss",
        "processTime": "Start:2019-12-09 23:54:12.349;End:2019-12-09 23:59:14.343",
        "sensorData": "WaterTemp:celcius:22;Pump10:off;Pump5:on;DrainSensor:on;WaterLevel:ml-30;",
        "onlineFrom": "29-06-2016 16:55:02"
      }     
    ]
  }

  getDetails(id: string | null): any {
    return this.getValue(id)
  }

  getValue(id: string | null): any {
    return this.processList.find(element => element.customerId === id);
  }
}
