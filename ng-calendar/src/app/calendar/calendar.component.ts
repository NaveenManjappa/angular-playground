import { CommonModule } from '@angular/common';
import { Component, computed, signal, Signal, WritableSignal } from '@angular/core';
import { DateTime, Info, Interval } from 'luxon';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  today:Signal<DateTime>=signal(DateTime.local());
  firstDayOfActiveMonth:WritableSignal<DateTime>=signal(this.today().startOf('month'));
  weekDays:Signal<string[]>=signal(Info.weekdays('short'));
  daysOfMonth:Signal<DateTime[]>=computed(()=> {
    return Interval.fromDateTimes(
      this.firstDayOfActiveMonth().startOf('week'),
      this.firstDayOfActiveMonth().endOf('month').endOf('week')
    )
    .splitBy({day:1})
    .map(d => {
      if(d.start === null)
        throw new Error('Wrong dates');
      return d.start;
    });
  });
  /**
   *
   */
  constructor() {
    console.log(this.daysOfMonth());
    
  }
}
