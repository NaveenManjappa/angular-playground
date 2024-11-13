# RxjsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.

## Rxjs playground
This app was created to experiment and learn the practical use cases of RxJs library in Angular projects

# switchMap
1. switchMap is used when you want to switch to a new observable based on values from another observable
2. It automatically unsubscribes from the previous inner observable when a new value arrives
3. This makes it perfect for scenarios like:
   - Search functionality (cancelling previous API calls)
   - Auto-complete features
   - Any case where you only care about the latest value

In the example above:
- When a user types, it creates input events
- Each input event triggers a new interval observable (simulating an API call)
- If the user types again before the previous "API call" completes, switchMap cancels the previous subscription and starts a new one

This is different from mergeMap or concatMap because:
- mergeMap would keep all subscriptions active
- concatMap would queue the subscriptions
- switchMap cancels the previous and only keeps the latest


