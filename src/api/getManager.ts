import { api } from '@/lib/axios';

interface Restaurant {
  id: string;
  name: string;
  description: string;
  managerId: string;
  createdAt: Date | null;
  updatedAt: Date | null;
}

export async function getRestaurant() {
  const response = await api.get<Restaurant>('/managed-restaurant');

  return response.data;
}
