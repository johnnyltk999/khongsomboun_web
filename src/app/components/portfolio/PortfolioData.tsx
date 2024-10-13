import one from "../../../../public/portfolio/card.png";
import two from "../../../../public/portfolio/twologo.png";
import three from "../../../../public/portfolio/three.png";
import four from "../../../../public/portfolio/four.png";
import five from "../../../../public/portfolio/five.png";
import six from "../../../../public/portfolio/six.png";
interface Slide {
  title: string;
  description: string;
  image: string;
}
export const PortfolioData: Slide[] = [
  {
    title: "ລະບົບຈັດການອອກໃບຂັບຂີ່ ແລະ ໃບທະບຽນລົດກອງທັບ",
    description: "ກົມຄຸ້ມຄອງລົດ, ກົມໃຫຍ່ເຕັກນິກ, ກອງທັບ.",
    image: one.src,
  },
  {
    title: "ລະບົບຖານຂໍ້ມູນເຄມີ ແຫ່ງຊາດ ",
    description: "ກະຊວງອຸດສາຫະກຳ ແລະ ການຄ້າ",
    image: two.src,
  },
  {
    title: "ລະບົບການຕິດຕາມລົດກອງທັບ ",
    description: "ກົມອຸດສາຫະກຳ, ກົມໃຫຍ່ເຕັກນິກ, ກອງທັບ",
    image: three.src,
  },
  {
    title: "ລະບົບຈັດການລະບົບຈຳໜ່າຍ DDSP ",
    description: "ລັດວິສາຫະກິດໄຟຟ້າລາວ",
    image: four.src,
  },
  {
    title: "ລະບົບຈັດການ ແລະ ຕິດຕາມການນຳໃຊ້ທາດວັດຖຸລະເບີດ ",
    description: "ກົມອຸດສາຫະກຳ, ກົມໃຫຍ່ເຕັກນິກ, ກອງທັບ",
    image: five.src,
  },
  {
    title: "ລະບົບ Enterprise Resource Planning (ERP System) ",
    description: "ບໍລິສັດວາຣີນໍ້າດື່ມ",
    image: six.src,
  },
];
