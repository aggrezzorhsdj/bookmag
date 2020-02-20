import {
    trigger, state, style, animate, transition,
} from '@angular/animations';

export const notifyAnimation = trigger('notify', [
    state('void', style({
        opacity: 0,
        transform: 'translateX(-120%)'
    })),
    state('show', style({
        opacity: 1,
        transform: 'none'
    })),
    transition('void => show, show => void', [
        animate('500ms cubic-bezier(0.35, 0, 0.25, 1)')
    ]),
]);
