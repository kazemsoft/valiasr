import React, { Fragment } from "react";
import NavContainer from "../../components/Nav/Nav";
import HeaderDescriptions from "../../components/HeaderDiscriptions/HeaderDescriptions";
import { Box } from "@chakra-ui/react";
import CustomContainer from "../../components/CustomContainer/CustomContainer";

const HomePage = () => {
    return (
        <CustomContainer>
            <div style={{ margin: "100px 0" }}>
                <HeaderDescriptions />
            </div>
        </CustomContainer>
    );
};

export default HomePage;
