import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'app/restaurants/restaurants.service';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: Restaurant
  restaurantId: string;

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.restaurantId = this.route.snapshot.params['id'];

    this.restaurantService.restaurantById(this.restaurantId)
      .subscribe((restaurant: Restaurant) => this.restaurant = restaurant)
  }
}
