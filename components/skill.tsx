import { Box } from "@mui/system";
import Image from "next/image";

export default function Skill({
  tech,
}: Readonly<{
  tech: string;
}>) {
  return (
    <Box className="borderTechBox">
      <Image
        src={tech + ".svg"}
        alt={tech}
        className="size-6 md:size-8"
        width={32}
        height={32}
      />
      <p className="text-xs md:text-sm p-color pt-1">{tech}</p>
    </Box>
  );
}
