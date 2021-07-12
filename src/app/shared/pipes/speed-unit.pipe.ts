import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'speedUnit'
})
export class SpeedUnitPipe implements PipeTransform {
  kmToMile = 0.621371
  transform(value: number, speedUnit: String): number {

    return speedUnit === 'mph' ? value * this.kmToMile : value ;
  }

}
