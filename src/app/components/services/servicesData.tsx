import {
  FaLock,
  FaLaptopCode,
  // FaMapMarkedAlt,
  FaDatabase,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { RiHomeWifiFill } from "react-icons/ri";
import { VscTerminalCmd } from "react-icons/vsc";

export const services = [
  {
    icon: <FaLock />,
    title: "ລະບົບລັກສາຄວາມປອດໄພ",
    items: [
      "ລະບົບກ້ອງວົງຈອນປິດ",
      "ລະບົບຈໍລະຈອນ ເຂົ້າ-ອອກ ໃນອາຄານ",
      "ລະບົບປ້ອງກັນອັກຄີໄພໃນ ໂຮງງານ ແລະ ອາຄານ",
      "ລະບົບຫ້ອງປະຊຸມນ້ອຍ, ໃຫຍ່",
      "ອອກແບບລະບົບຕິດຕາມຄວາມປອດໄພຂອງເຂື່ອນ ໄຟຟ້າດ້ວຍລະບົບເອເລັກໂຕຣນິກ ແບບ Real Time ແລະ Online",
    ],
  },
  {
    icon: <FaLaptopCode />,
    title: "ລະບົບໄອທີ",
    items: [
      "ອອກແບບລະບົບຖານຂໍໍ້ມູນສາງ, POS ແລະ ອື່ນໆ",
      "ອອກແບບເວັບໄຊ ແລະ Google application",
      "ອອກແບບ ແລະ ຕິດຕັ້ງລະບົບແຈ້ງເຕືອນອັກຄີໄພ ທັນ ສະໄໝ",
      "ອອກແບບແອບພລິເຄຊັນ (IOS ແລະAndroid)",
      "ອອກແບບ ແລະ ຕິດຕັຶ້ງລະບົບເຄືອຂ່າຍຄອມພິວເຕ",
      "ອອກແບບລະບົບອອກໃບທະບຽນລົດ ແລະ ໃບຂັບຂີ່ ",
      "ຈັດຝຶກອົບຮົມການຂຽນໂປຣແກຣມ ແລະ ອອກແບບລະບົບຖານຂໍໍ້ມູນ, ເວັບໄຊ ແລະ ແອບພລີເຄຊັນ",
    ],
  },
  {
    icon: <FaDatabase />,
    title: "ລະບົບຄວບຄຸ້ມອັດຕະໂນມັດ",
    items: [
      "ອອກແບບ ແລະ ຕິຕັ້ງລະບົບ SCADA ",
      "ອອກແບບ ແລະ ຕິດຕັ້ງລະບົບຄວາມປອດໄພເຂື່ອນ ",
      "ອອກແບບ ແລະ ຕິດຕັ້ງລະບົບຄວບຄຸມ ອັດຕະໂນມັດ ເຂື່ອນຂະໜາດນ້ອຍ ",
      "ອອກແບບ ແລະ ຕິດຕັ້ງລະບົບຄວບຄຸມອຸດສະຫະກໍາຂວດແກ້ວ",
      "ອອກແບບ ແລະ ຕິດຕັ້ງລະບົບຄວບຄຸມສາຍພານລໍາລຽງໃນໂຮງງານ",
      "ອອກແບບ ແລະ ຕິດຕັ້ງລະບົບໄຟຟ້າໃນໂຮງຈັກ ໂຮງງານ",
      "ອອກແບບ ແລະ ຕິດຕັ້ງລະບົບໄຟອໍານາດທັງແບບ AC ແລະ DC ",
    ],
  },
  {
    icon: <RiHomeWifiFill />,
    title: "ລະບົບໄອໂອທີ",
    items: [
      "ອອກແບບ ແລະ ຕິດຕັ້ງລະບົບ Smart City ",
      "ອອກແບບ ແລະ ຕິດຕັ້ງລະບົບ Smart Farm",
      "ອອກແບບ ແລະ ຕິດຕັ້ງລະບົບ Water and Pollution Monitoring",
      "ອອກແບບ ແລະ ຕິດຕັ້ງລະບົບການປະຍຸກໃຊ້ງານ GPS ແລະ Google map",
      "ຈັດຝຶກອົບຮົມການຂຽນໂປຣແກຣມ",
    ],
  },
  {
    icon: <VscTerminalCmd />,
    title: "ພັດທະນາໂປຣແກຣມ ແລະ ແອບພລິເຄຊັນ",
    items: [
      "ລະບົບຖານຂໍ້ມູນ",
      "ເວັບໄຊ ແລະ ແອບພລິເຄຊັນ",
      "ລະບົບເຄືອຂ່າຍຄອມພິວເຕີ",
      "ລະບົບ Enterprise Resources Planning (ERP)",
    ],
  },
  // {
  //   icon: <FaMapMarkedAlt />,
  //   title: "ພັດທະນາລະບົບຄວບຄຸມອັດຕະໂນມັດ",
  //   items: [
  //     "ລະບົບຄວາມປອດໄພເຂື່ອນ",
  //     "ລະບົບ SCADA",
  //     "ລະບົບຄວາມຄຸມເຂື່ອນຂະນາດນ້ອຍ ແລະ ໃຫຍ່",
  //     "ລະບົບໄຟອຳນາດ (ໄຟແດງ)",
  //   ],
  // },
  {
    icon: <FaChalkboardTeacher />,
    title: "ຝຶກອົບຮົມໄລຍະສັ້ນ",
    items: [
      "ການປະຍຸກນຳໃຊ້ AI ",
      "ການອອກແບບລະບົບຖານຂໍ້ມູນ",
      "ການອອກແບບ Graphics",
      "ລະບົບເຄືອຂ່າຍຄອມພິວເຕີ",
    ],
  },
];
