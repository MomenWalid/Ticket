import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const fadeToLeftAnimation = trigger('fadeToLeftAnimation', [
  state('void', style({ opacity: 0, transform: 'translateX(100%)' })),
  transition(':enter', [
    animate('2000ms', style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
]);

export const fadeToRightAnimation = trigger('fadeToRightAnimation', [
  state('void', style({ opacity: 0, transform: 'translateX(-100%)' })),
  transition(':enter', [
    animate('2000ms', style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
]);

export const fadeToUpAnimation = trigger('fadeToUpAnimation', [
  state('void', style({ opacity: 0, transform: 'translateY(100%)' })),
  transition(':enter', [
    animate('1000ms', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);
