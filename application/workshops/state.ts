import { brandSchema, workshopSchema } from "./types";

interface IWorkshopsStore {
  brands: brandSchema[];
  workshops: workshopSchema[];
  loading: boolean;
  visitId: string;
}
export const WorkshopState: IWorkshopsStore = {
  loading: false,
  brands: [],
  workshops: [],
  visitId: "",
};
