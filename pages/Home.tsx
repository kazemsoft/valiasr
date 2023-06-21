import React from "react";
import NavContainer from "../components/Nav/Nav";
import HeaderDescriptions from "../components/HeaderDiscriptions/HeaderDescriptions";
import { Box } from "@chakra-ui/react";
import CustomContainer from "../components/CustomContainer/CustomContainer";

const HomePage = () => {
  return (
    <CustomContainer>
      <HeaderDescriptions />
    </CustomContainer>
  );
};

export default HomePage;
