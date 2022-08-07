const carOwnerSchema = [
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
    text: " Show Your Car Requests",
    arText: "عرض الطلبات ",
    route: "Request",
  },
  {
    id: "Profile",
    icon: require("../../../assets/profile.png"),
    text: "Profile",
    route: "Profile",
  },
];
export default carOwnerSchema;
