import { CommonModule } from '@angular/common';
import { Component, computed, input, Input, InputSignal, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { DateTime, Info, Interval } from 'luxon';
import { Meetings } from './meetings.interface';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent implements OnInit {
  meetings:InputSignal<Meetings>=input.required();
  today:Signal<DateTime>=signal(DateTime.local());
  firstDayOfActiveMonth:WritableSignal<DateTime>=signal(this.today().startOf('month'));
  weekDays:Signal<string[]>=signal(Info.weekdays('short'));
  activeDay:WritableSignal<DateTime | null>=signal(this.today().startOf('day'));
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
  
  DATE_MED=DateTime.DATE_MED;


  constructor() {
    //console.log(this.daysOfMonth());    
  }

  ngOnInit(): void {
    console.log(this.meetings());
  }

  activeDayMeetings:Signal<string[]>=computed(() => {
    const activeDay = this.activeDay();
    if(activeDay === null)
      return [];
    const activeDayIso = activeDay.toISODate();
    console.log('activeDayIso',activeDayIso);

    if(!activeDayIso) return [];

    return this.meetings()[activeDayIso] ?? [];
  });

  goToPreviousMonth():void {
    this.firstDayOfActiveMonth.set(this.firstDayOfActiveMonth().minus({month:1}));
  }

  goToNextMonth():void {
    this.firstDayOfActiveMonth.set(this.firstDayOfActiveMonth().plus({month:1}));
  }

  goToToday():void {
    this.firstDayOfActiveMonth.set(this.today().startOf('month'));
  }
}

