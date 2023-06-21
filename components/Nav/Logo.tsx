import React from "react";
import Image from "next/image";
import { Box } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Box>
      <Image
        width={70}
        height={70}
        alt="valiasr-logo"
        src={"/images/Logo.png"}
      />
    </Box>
  );
};

export default Logo;
