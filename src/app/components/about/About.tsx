import React from "react";
import Image from "next/image";
import Vision from "../../../../public/pictures/vision.png";

export default function Page() {
  return (
    <section id="about">
      <div className="container mx-auto p-10 bg-background text-default rounded-xl">
        {/* Title */}
        <h1 className="text-primaryBase text-4xl font-extrabold text-center my-16">
          ກ່ຽວກັບເຮົາ
        </h1>

        {/* Two Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Image and Vision */}
          <div className="flex flex-col items-center bg-card border border-gray-500 rounded-lg p-6 shadow-md">
            <h2 className="text-primaryBase text-2xl font-bold mb-6">
              ວິໄສທັດ
            </h2>
            <div className="relative w-full h-56 mb-4">
              <Image src={Vision} alt="vision image" width={500} height={300} />
            </div>
            <p className="text-center italic text-primary-foreground ">
              “ນະວັດຕະກໍາເທັກໂນໂລຍີທີ່ທັນສະໃໝ ພ້ອມແລ້ວທີ່ຈະສົ່ງມອບ ແລະ
              ບໍລິການໃຫ້ທ່ານ ດ້ວຍຄວາມເອົາໃຈໃສ່”
            </p>
          </div>

          {/* Right Column - Text Description */}
          <div className="text-lg leading-relaxed text-gray-500 relative">
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
