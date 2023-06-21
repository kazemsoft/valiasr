import React from "react";
import NavContainer from "../components/Nav/Nav";
import HeaderDescriptions from "../components/HeaderDiscriptions/HeaderDescriptions";
import { Box } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Box marginTop={"10rem"}>
      <HeaderDescriptions />
    </Box>
  );
};

export default HomePage;
