import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'myCustomTransform',
  standalone:true
})
export class MyCustomTransformationPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    return args[0] && args[0] === 'lower' 
      ? `Custom transformation is: ${value.toLowerCase()}` 
      : value.toUpperCase();
  }

}