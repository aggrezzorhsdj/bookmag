import {IAppState} from '../state/app.state';
import {Store} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {NotificationsService} from '../../notifications/notifications.service';
import {Router} from '@angular/router';
import {CreateCheckout, CreateCheckoutSuccess, ECheckoutActions} from '../actions/checkout.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {CheckoutService} from '../../services/checkout.service';
import {getCart} from '../selectors/cart.selectors';
import {CreateProductError} from '../actions/product.actions';
import {of} from 'rxjs';

export class CheckoutEffects {
    @Effect()
    createCheckout$ = this.actions$.pipe(
        ofType<CreateCheckout>(ECheckoutActions.CreateCheckout),
        switchMap((data) => {
            return this.checkoutService.createOrder(data.payload).pipe(
                map(res => {
                    this.checkoutService.sendMail(res);
                    this.notify.notify('Заказ оформлен', 1);
                    this.router.navigate(['books']);
                    return new CreateCheckoutSuccess(res);
                }),
                catchError(err => of(new CreateProductError(err)))
            );
        }),
    )
    constructor(
        private store: Store<IAppState>,
        private actions$: Actions,
        private checkoutService: CheckoutService,
        private notify: NotificationsService,
        private router: Router
    ) {
    }
}