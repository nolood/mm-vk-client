import { FaHome, FaMoneyBill } from "react-icons/fa";
import { GrCafeteria } from "react-icons/gr";
import { AiFillMedicineBox } from "react-icons/ai";
import { PiHandCoins, PiStudent } from "react-icons/pi";
import {
  MdEmojiTransportation,
  MdEventNote,
  MdFamilyRestroom,
} from "react-icons/md";
import { CiCircleQuestion, CiShoppingBasket } from "react-icons/ci";
import { type IconType } from "react-icons";
import { GiStrongMan } from "react-icons/gi";
import { IoGift } from "react-icons/io5";

const ArticleIcons: Record<string, IconType> = {
  home: FaHome,
  cafe: GrCafeteria,
  medicine: AiFillMedicineBox,
  family: MdFamilyRestroom,
  money: FaMoneyBill,
  note: MdEventNote,
  student: PiStudent,
  basket: CiShoppingBasket,
  sport: GiStrongMan,
  gift: IoGift,
  coins: PiHandCoins,
  transport: MdEmojiTransportation,
  other: CiCircleQuestion,
};

export default ArticleIcons;
