import React, { useEffect } from 'react';
import HeaderDescriptions from '../../components/Header/HeaderDiscriptions/HeaderDescriptions';
import CustomContainer from '../../components/global/CustomContainer/CustomContainer';
import MainComponent from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
  // const scrollToBottom = () => {
  //   window.scrollTo({
  //     top: 9000,
  //     behavior: 'smooth',
  //   });
  // };
  // useEffect(() => {
  //   scrollToBottom();
  // }, []);
  return (
    <>
      <CustomContainer>
        <div>
          <HeaderDescriptions />
        </div>
      </CustomContainer>
      <CustomContainer>
        <div style={{ margin: '100px 0' }}>
          <MainComponent />
        </div>
      </CustomContainer>
    </>
  );
};

export default HomePage;
