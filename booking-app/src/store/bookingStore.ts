import { create } from 'zustand';
import type { Service } from '../types';

export interface BookingData
{
  service: Service|null;
  date: string|null;
  time: string|null;
}
interface BookingStore
{
  booking: BookingData;
  setService: (service: Service) => void;
  setDate: (date: string) => void;
  setTime: (time: string) => void;
  clearBooking: () => void;
}
export const useBookingStore = create<BookingStore>((set) => ({
  booking: {
    service: null,
    date: null,
    time: null,
  },
  setService: (service) =>
    set((state) => ({
      booking: { ...state.booking, service },
    })),
  setDate: (date) =>
    set((state) => ({
      booking: { ...state.booking, date },
    })),
  setTime: (time) =>
    set((state) => ({
      booking: { ...state.booking, time },
    })),
  clearBooking: () =>
    set({
      booking: { service: null, date: null, time: null },
    }),
}));