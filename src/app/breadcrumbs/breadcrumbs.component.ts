import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {IBreadcrumbs} from './breadcrumbs.interface';
import { filter, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.less']
})
export class BreadcrumbsComponent implements OnInit {
    breadcrumbs: IBreadcrumbs[];

  constructor(
      private router: Router,
      private activatedRoute: ActivatedRoute
  ) {
    this.breadcrumbs = this.buildBreadCrumbs(this.activatedRoute.root);
    console.dir(this.breadcrumbs);
  }

  ngOnInit() {
    this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        distinctUntilChanged(),
    ).subscribe(() => {
      this.breadcrumbs = this.buildBreadCrumbs(this.activatedRoute.root);
    });
  }
  buildBreadCrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadcrumbs[] = []): IBreadcrumbs[] {
    // If no routeConfig is avalailable we are on the root path
    let label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data.breadcrumb : '';
    let path = route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';

    // If the route is dynamic route such as ':id', remove it
    const lastRoutePart = path.split('/').pop();
    const isDynamicRoute = lastRoutePart.startsWith(':');
    if (isDynamicRoute && !!route.snapshot) {
      const paramName = lastRoutePart.split(':')[1];
      path = path.replace(lastRoutePart, route.snapshot.params[paramName]);
      label = route.snapshot.params[paramName];
    }

    // In the routeConfig the complete path is not available,
    // so we rebuild it each time
    const nextUrl = path ? `${url}/${path}` : url;

    const breadcrumb: IBreadcrumbs = {
      label,
      url: nextUrl,
    };
    // Only adding route with non-empty label
    const newBreadcrumbs: IBreadcrumbs[] = breadcrumb.label ? [ ...breadcrumbs, breadcrumb ] : [ ...breadcrumbs];
    if (route.firstChild) {
      // If we are not on our current path yet,
      // there will be more children to look after, to build our breadcumb
      return this.buildBreadCrumbs(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }
}
