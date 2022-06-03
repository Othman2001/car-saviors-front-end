import { brandSchema, ReviewSchema, workshopSchema } from "./types";

interface IWorkshopsStore {
  brands: brandSchema[];
  workshops: workshopSchema[];
  loading: boolean;
  visitId: string;
  userLocation: {
    latitude: number;
    longitude: number;
  } | null;
  reviews: ReviewSchema[] | null;
}
export const WorkshopState: IWorkshopsStore = {
  loading: false,
  brands: [],
  workshops: [],
  visitId: "",
  userLocation: null,
  reviews: null,
};
