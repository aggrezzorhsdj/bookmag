import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {CartService} from '../../services/cart.service';
import {
    AddToCart,
    AddToCartSuccess,
    ECartActions,
    GetCart,
    GetCartSuccess,
    LoadCartInError, RemoveFromCart, RemoveFromCartSuccess
} from '../actions/cart.actions';
import {map, switchMap} from 'rxjs/operators';
import {ICart} from '../../interfaces/cart.interface';
import {of} from 'rxjs';
import {NotificationsService} from '../../notifications/notifications.service';
import {getCart} from '../selectors/cart.selectors';
import {IAppState} from '../state/app.state';
import {select, Store} from '@ngrx/store';

@Injectable()
export class CartEffects {
    @Effect()
    getCart$ = this.actions$.pipe(
        ofType<GetCart>(ECartActions.GetCart),
        switchMap(() => this.cartService.getItems()),
        switchMap((data: ICart[]) => of(new GetCartSuccess(data)))
    );
    @Effect()
    addToCart$ = this.actions$.pipe(
        ofType<AddToCart>(ECartActions.AddToCart),
        switchMap(data => {
            console.log(data);
            return this.cartService.addToCart(data.payload).pipe(
                map((cart) => {
                    this.notify.notify('Товар добавлен в корзину', 1);
                    return new AddToCartSuccess(cart);
                }),
            );
        })
    );
    @Effect()
    removeFromCart$ = this.actions$.pipe(
        ofType<RemoveFromCart>(ECartActions.RemoveFromCart),
        switchMap((data) => {
            return this.cartService.removeFromCart(data.payload).pipe(
                map((res: ICart[]) => {
                    this.store.dispatch(new GetCart());
                    return new RemoveFromCartSuccess(res);
                })
            );
        }),
    );
    constructor(
        private actions$: Actions,
        private cartService: CartService,
        private notify: NotificationsService,
        private store: Store<IAppState>
    ) {
    }
}
