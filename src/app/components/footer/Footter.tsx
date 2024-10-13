import React from "react";
import Image from "next/image";
import Logo from "../../../../public/pictures/logo.png";

function Footer() {
  return (
    <div className="bg-black text-white py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Logo centered on all screen sizes */}
        <div className="flex justify-center md:justify-center mb-6 md:mb-0">
          <Image src={Logo} alt="logo" width={500} height={300} />
        </div>

        {/* Contact information */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">ຕິດຕໍ່ພວກເຮົາ</h1>
          <p className="mb-2">
            ຖະໜົນມິດຕະພາບລາວ-ໄທ, ບ້ານວັດນາກ, ເມືອງສີສັດຕະນາກ, ນະຄອນຫຼວງວຽງຈັນ
          </p>
          <p className="mb-2">ໂທລະສັບ: +856-20-5511-8789, +856-20-7711-8789</p>
          <p>Email: khongsombountech@gmail.com</p>
        </div>
      </div>

      <hr className="my-6 border-gray-600" />

      <div className="text-center">
        <p>Copyright 2016-2024 Khongsomboun Tech Co., Ltd.</p>
      </div>
    </div>
  );
}

export default Footer;
