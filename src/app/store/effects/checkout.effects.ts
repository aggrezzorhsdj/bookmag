import {IAppState} from '../state/app.state';
import {Store} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {NotificationsService} from '../../notifications/notifications.service';
import {Router} from '@angular/router';
import {CreateCheckout, CreateCheckoutSuccess, ECheckoutActions} from '../actions/checkout.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {CheckoutService} from '../../services/checkout.service';
import {CreateProductError} from '../actions/product.actions';
import {of} from 'rxjs';
import {ICheckoutState} from '../state/checkout.state';
import {Injectable} from '@angular/core';
import {CartService} from '../../services/cart.service';
@Injectable()
export class CheckoutEffects {
    @Effect()
    createCheckout$ = this.actions$.pipe(
        ofType<CreateCheckout>(ECheckoutActions.CreateCheckout),
        switchMap((data) => {
            console.log(data);
            return this.checkout.createOrder(data.payload).pipe(
                map(res => {
                    this.checkout.sendMail(data.payload);
                    this.notify.notify('Заказ оформлен', 1);
                    this.router.navigate(['products']);
                    this.cartService.clearCart();
                    return new CreateCheckoutSuccess(res);
                }),
                catchError(err => of(new CreateProductError(err)))
            );
        }),
    )
    constructor(
        private actions$: Actions,
        private checkout: CheckoutService,
        private store: Store<ICheckoutState>,
        private notify: NotificationsService,
        private router: Router,
        private cartService: CartService
    ) {
    }
}