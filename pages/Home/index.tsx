import React, { useEffect, useRef } from 'react';
import HeaderDescriptions from '../../components/Header/HeaderDiscriptions/HeaderDescriptions';
import CustomContainer from '../../components/global/CustomContainer/CustomContainer';
import MainComponent from '../../components/Main/Main';

const HomePage = () => {
  const end = useRef();
  const scrollToBottom = () => {
    window.scrollTo({
      top: 9000,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    scrollToBottom();
  }, []);
  return (
    <>
      <CustomContainer>
        <div style={{ margin: '100px 0' }}>
          <HeaderDescriptions />
        </div>
      </CustomContainer>
      <CustomContainer>
        <div style={{ margin: '100px 0' }}>
          <MainComponent />
        </div>
      </CustomContainer>
      <div id="end" ref={end}></div>
    </>
  );
};

export default HomePage;
