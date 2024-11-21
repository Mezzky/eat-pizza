import realCheese from "@/assets/images/menu/real-cheese.png";
import condensedMilk from "@/assets/images/menu/condensed-milk.png";
import sweetPotato from "@/assets/images/menu/sweet-potato.png";
import sweetPineapple from "@/assets/images/menu/sweet-pineapple.png";
import sweetCorn from "@/assets/images/menu/sweet-corn.png";
import pepperoni from "@/assets/images/menu/pepperoni.png";
import aloha from "@/assets/images/menu/aloha.png";
import crispyPotatoBacon from "@/assets/images/menu/crispy-potato-bacon.png";
import sweetBulgogi from "@/assets/images/menu/sweet-bulgogi.png";
import chickenLongSausage from "@/assets/images/menu/chicken-long-sausage.png";
import hotSpicyChicken from "@/assets/images/menu/hot-spicy-chicken.png";

export const MENU_PIZZA = [
  {
    img: realCheese,
    name: "100% real cheese",
    description: "Keju Spesial, Saus Pizza",
  },
  {
    img: condensedMilk,
    name: "the milky way",
    description: "Susu Kental Manis, Keju Spesial, Saus Putih",
  },
  {
    img: sweetPotato,
    name: "sweet potato",
    description: "Ubi Manis, Jagung, Saus Putih",
  },
  {
    img: sweetPineapple,
    name: "cheesy pineapple",
    description: "Nanas, Ubi Manis, Keju Spesial",
  },
  {
    img: sweetCorn,
    name: "pop pop corn",
    description: "Jagung, Keju Spesial, Saus Pizza",
  },
  {
    img: pepperoni,
    name: "beef pepperoni",
    description: "Pepperoni, Keju Spesial, Saus Pizza",
  },
  {
    img: aloha,
    name: "aloha hawaiian",
    description: "Ayam, Nanas, Saus Putih",
  },
  {
    img: crispyPotatoBacon,
    name: "crispy potato rasher",
    description: "Ayam, Kentang, Saus Pizza",
  },
  {
    img: sweetBulgogi,
    name: "k bulgogi chicken",
    description: "Ayam Bulgogi, Ayam Cincang, Saus Pizza",
  },
  {
    img: chickenLongSausage,
    name: "korean sausage",
    description: "K-Sosis, Ayam Cincang, Saus Honey Mustard",
  },
  {
    img: hotSpicyChicken,
    name: "hot spicy chicken",
    description: "Ayam Pedas ala Korea, Jagung, Saus Chipotle",
  },
];

export const CITIES = [
  "Aceh",
  "Ambon",
  "Balikpapan",
  "Bali",
  "Bandung",
  "Bekasi",
  "Bogor",
  "Cirebon",
  "Depok",
  "Jakarta",
  "Jambi",
  "Jayapura",
  "Kediri",
  "Kupang",
  "Lampung",
  "Lombok",
  "Makassar",
  "Malang",
  "Manado",
  "Mataram",
  "Medan",
  "Padang",
  "Palembang",
  "Palu",
  "Pangkal Pinang",
  "Pekanbaru",
  "Pontianak",
  "Probolinggo",
  "Samarinda",
  "Semarang",
  "Solo",
  "Sukabumi",
  "Surabaya",
  "Tangerang",
  "Ternate",
  "Yogyakarta",
];

export const BUSINESS_TYPES = ["Satu Unit", "Beberapa Unit"];

export const CAPITALS = [
  "Rp300.000.000 - Rp499.000.000",
  "Rp500.000.000 - Rp999.999.999",
  "> Rp999.999.999",
];

export const START_DATES = ["Segera", "3 - 6 Bulan", "> 6 Bulan"];

console.log(new Date().toISOString());
console.log(new Date().toLocaleString());
