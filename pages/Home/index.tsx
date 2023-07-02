import React from "react";
import HeaderDescriptions from "../../components/Header/HeaderDiscriptions/HeaderDescriptions";
import CustomContainer from "../../components/global/CustomContainer/CustomContainer";
import MainComponent from "../../components/Main/Main";

const HomePage = () => {
    return (
        <>
            <CustomContainer>
                <div style={{ margin: "100px 0" }}>
                    <HeaderDescriptions />
                </div>
            </CustomContainer>
            <CustomContainer>
                <div style={{ margin: "100px 0" }}>
                    <MainComponent />
                </div>
            </CustomContainer>
        </>
    );
};

export default HomePage;
