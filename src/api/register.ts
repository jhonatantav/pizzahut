import { api } from '@/lib/axios';

export interface RegisterRestaurantBody {
  restaurantName: string;
  email: string;
  managerName: string;
  phone: number;
}

export async function registerRestaurant({ email, restaurantName, managerName, phone }: RegisterRestaurantBody) {
  await api.post('/restaurants', { email, restaurantName, managerName, phone });
}
