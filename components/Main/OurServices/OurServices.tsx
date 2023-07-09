import React from 'react';
import Section from '../../global/Section/Section';
import SwiperContainer from '../../global/Swiper/Swiper';
import CustomCard from '../../global/CustomCard/CustomCard';
import { SimpleGrid } from '@chakra-ui/react';
const portfolios = [
  {
    title: 'Corporate website - Soroush e Hagh',
    description:
      'Soroush Haq mobile application and website design. Duration of the project: 3 months June 2019',
    imageSrc: '/images/soroushHagh.png',
    alt: 'soroushHagh-smaple',
    buttonTitle: 'View portfolio',
    linkTo: 'https://sorushehagh.ir/',
  },
  {
    title: 'Footab Project',
    description:
      'Corporate website, Android app, PWA app Duration of the project: Fall 2018 (Developing)...',
    imageSrc: '/images/Footab.png',
    alt: 'footab-smaple',
    buttonTitle: 'View portfolio',
    linkTo: 'https://footab.ir/',
  },
  {
    title: 'Shop website - Kavali Mod',
    description:
      'Online clothing and accessories store website Duration of the project: 1 month February 2019',
    imageSrc: '/images/cavaliMod.png',
    alt: 'Kavali-Mod-smaple',
    buttonTitle: 'View portfolio',
    linkTo: 'https://cavalimod.com/',
  },
];

const OurServices = () => {
  return (
    <div>
      <Section
        // title="Our services"
        title="Our Safest"
        description="Website design, mobile and desktop application design and programming, SEO and social network management."
        boldText="Below you can see some examples of our recent works:"
      />
      {/* <SwiperContainer cards={} /> */}
      <SimpleGrid
        spacing={4}
        // templateColumns={'repeat(auto-fill, minmax(300px, 1fr))'}
        templateColumns={{
          base: 'repeat(1,1fr)',
          md: 'repeat(2,1fr)',
          lg: 'repeat(3,1fr)',
        }}
      >
        {portfolios.map((item) => (
          <CustomCard
            title={item.title}
            description={item.description}
            imageSrc={item.imageSrc}
            alt={item.alt}
            buttonTitle={item.buttonTitle}
            linkTo={item.linkTo}
          />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default OurServices;
