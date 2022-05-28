const cardsSchema = [
  {
    id: "rent",
    icon: require("../../../assets/rentalkey.png"),
    text: "Rent a car",
    arText: "احجز سيارة",
    route: "Rent",
  },
  {
    id: "winch",
    icon: require("../../../assets/cane.png"),
    text: "Request a winch",
    arText: "طلب ونش",
    route: "Winch",
  },
  {
    id: "workshops",
    icon: require("../../../assets/work.png"),
    text: "see workshops",
    arText: "معاينة الصيانة",
    route: "WorkShops",
  },

  {
    id: "Request",
    icon: require("../../../assets/contract.png"),
    text: "Become a renter ",
    arText: "عرض سيارتك للايجار",
    route: "Request",
  },
];
export default cardsSchema;
