"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Skill({
  tech,
}: Readonly<{
  tech: string;
}>) {
  return (

    <motion.div 
    whileHover={{ rotate: "180deg" }}
    transition={{ duration: 0.5 }}
    className="borderTechBox">
      <Image
        src={tech + ".svg"}
        alt={tech}
        className="size-6 md:size-8"
        width={32}
        height={32}
      />
      <p className="text-xs md:text-sm p-color pt-1">{tech}</p>
    </motion.div>
  );
}
