import RentalCarsComponent from "../../components/rentalCars/RentalCars";
import React from "react";
import { useRentalActions } from "../../../application/custom-hooks/useRentalActions";
import { useEffect } from "react";
import { useRentalState } from "../../../application/custom-hooks/useRentalState";

export default function RentalCars() {
  const { fetchCars } = useRentalActions();
  const { cars } = useRentalState();

  useEffect(() => {
    fetchCars();
  }, []);
  return <RentalCarsComponent cars={cars && cars} />;
}
