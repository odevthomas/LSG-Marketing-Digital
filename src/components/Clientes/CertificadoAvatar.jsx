import React from 'react';
import * as Avatar from "@radix-ui/react-avatar";
import { motion } from 'framer-motion';

const avatarData = [
  {
    name: "Google Ads",
    imgURL: "https://static.vecteezy.com/system/resources/previews/025/732/723/non_2x/google-ads-logo-icon-free-vector.jpg",
  },
  {
    name: "Meta",
    imgURL: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
  },
  {
    name: "Kommo",
    imgURL: "https://d3v6byorcue2se.cloudfront.net/contents/KRsHs1KMsDqSwFEaCqAD50E0TIvxHBvjbmgVCQOR.png",
  },
];

const CertificadoAvatar = () => (
  <div className="flex flex-col md:flex-row items-center">
    <div className="flex items-center -space-x-2">
      {avatarData.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: idx * 0.1 }}
          className="relative"
        >
          <Avatar.Root className="h-14 w-14 flex items-center justify-center overflow-hidden rounded-full border-2 border-white">
            <Avatar.Image
              src={item.imgURL}
              className="h-full w-full object-cover"
            />
            <Avatar.Fallback delayMs={600}>{item.name}</Avatar.Fallback>
          </Avatar.Root>
        </motion.div>
      ))}
    </div>
    <motion.p
  className="text-sm text-white font-medium mt-2 md:mt-0 md:ml-2 md:block hidden"
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
  Certificações e Parcerias
</motion.p>
<motion.p
  className="text-sm text-white font-medium mt-2 md:hidden"
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
  Certificações e Parcerias
</motion.p>

  </div>
);

export default CertificadoAvatar;
