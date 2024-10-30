import React from "react";
import Image from "next/image";
import Vision from "../../../../public/pictures/vision.png";

export default function Page() {
  return (
    <section id="about">
      <div className="container p-10 mx-auto bg-background text-default rounded-xl">
        {/* Title */}
        <h1 className="my-16 text-4xl font-extrabold text-center text-primaryBase">
          ກ່ຽວກັບເຮົາ
        </h1>

        {/* Two Columns Layout */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left Column - Image and Vision */}
          <div className="flex flex-col items-center p-6 border border-gray-500 rounded-lg shadow-md bg-card">
            <h2 className="mb-6 text-2xl font-bold text-primaryBase">
              ວິໄສທັດ
            </h2>
            <div className="relative w-full h-56 mb-4">
              <Image src={Vision} alt="vision image" width={500} height={300} />
            </div>
            <p className="italic text-center text-primary-foreground ">
              “ນະວັດຕະກໍາເທັກໂນໂລຍີທີ່ທັນສະໃໝ ພ້ອມແລ້ວທີ່ຈະສົ່ງມອບ ແລະ
              ບໍລິການໃຫ້ທ່ານ ດ້ວຍຄວາມເອົາໃຈໃສ່”
            </p>
          </div>

          {/* Right Column - Text Description */}
          <div className="relative text-lg leading-relaxed text-gray-500">
            <p>
              ບໍລິສັດຄົງສົມບູນເຕັກໂນໂລຍີ (KHONGSOMBOUNTECHNOLOGY)
              ແມ່ນໄດ້ປ່ຽນຊື່ຈາກ ບໍລິສັດ ວຽງຈັນລະບົບຮັກສາຄວາມປອດໄພ ແລະ ໄອທີ
              (VIENTIANE SECURITY AND IT
              SYSTEMS:VSITs)ກໍໍ່ສ້າງຂຶ້ນນໃນປີ2016ພາຍໄຕ້ວິໃສທັດ
              ຂອງຜູ້ບໍລິຫານທີ່ມີຄວາມຊ່ຽວຊານດ້ານການອອກແບບລະບົບເອເລັກ ໂຕຣນິກ ແລະ
              ລະບົບໄອທີທີ່ທັນສະໄໝ ເຊິ່ງມີ
              ຄວາມປາດຖະໜາທີື່ຈະມອບການບໍລິການຄົບວົງຈອນໃຫ້ກັບລູກຄ້າ
              ນັບຕັ້ງແຕ່ການໃຫ້ຄໍາປຶກສາ ການອອກແບບການປະຍຸກໃຊ້ ການຕິດຕັ້ງ ແລະ
              ການບໍາລຸງຮັກສາ ເພື່ອຕອບສະໜອງຄວາມຕ້ອງການທີ່ຫຼາກຫຼາຍຂອງລູກຄ້າ
              ໃນດ້ານການໃຊ້ງານ ການແກ້ບັນຫາທາງທຸລະກິດ
              ລວມໄປເຖີງການເພີ່ມສັກກະຍະພາບໃນການແຂ່ງຂັນ
              ເພື່ອກ້າວນໍາຄູ່ແຂ່ງໃນໂລກທຸກລະກິດທັງໃນປະຈຸບັນ ແລະ ອະນາຄົດ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
