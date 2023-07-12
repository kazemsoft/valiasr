import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { BsMap } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { SiMaildotru } from 'react-icons/si';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';

const Footer = () => {
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      gap={16}
      height="350px"
      bgColor={'main.textColor'}
      padding={'1rem 3rem'}
    >
      <GridItem colSpan={1}>
        <Image
          width={100}
          height={100}
          alt="valiasr-logo"
          src={'/images/valiasrcs-transparent.png'}
        />
        <Text
          marginY={'1rem'}
          fontSize={'xl'}
          fontWeight={'extrabold'}
          color={'white'}
        >
          Valiasr website design
        </Text>
        <Box display={'flex'} alignItems={'center'}>
          <BsMap color={'white'} fontSize={'2rem'} />
          <Text
            ms={'.5rem'}
            // noOfLines={2}
            marginY={'.75rem'}
            fontSize={'13px'}
            color={'main.grayTextColor'}
          >
            Garmsar, the beginning of Shahid Chamran-Shahid Gholami
            intersection, Valiasr programming office
          </Text>
        </Box>
        <Box display={'flex'} alignItems={'center'}>
          <BsFillTelephoneFill color={'white'} fontSize={'1rem'} />
          <Text
            fontSize={'13px'}
            ms={'.5rem'}
            marginY={'.75rem'}
            color={'main.grayTextColor'}
          >
            +982334235094
          </Text>
        </Box>
        <Box display={'flex'} alignItems={'center'}>
          <SiMaildotru color={'white'} fontSize={'1rem'} />
          <Text
            fontSize={'13px'}
            ms={'.5rem'}
            marginY={'.75rem'}
            color={'main.grayTextColor'}
          >
            support@valiasrcs.com
          </Text>
        </Box>
      </GridItem>
      <GridItem colSpan={1}>
        <Text
          marginY={'1rem'}
          fontSize={'xl'}
          fontWeight={'extrabold'}
          color={'white'}
          lineHeight={'10'}
        >
          Our Services
        </Text>
        <Text
          fontSize={'14px'}
          fontWeight={'bold'}
          marginY={'.75rem'}
          color={'main.grayTextColor'}
        >
          Development and design of WordPress plugins
        </Text>
        <Text
          fontSize={'14px'}
          fontWeight={'bold'}
          marginY={'.75rem'}
          color={'main.grayTextColor'}
        >
          Designing and building Telegram robots
        </Text>
        <Text
          fontSize={'14px'}
          fontWeight={'bold'}
          marginY={'.75rem'}
          color={'main.grayTextColor'}
        >
          Web application programming (PWA)
        </Text>
        <Text
          fontSize={'14px'}
          fontWeight={'bold'}
          marginY={'.75rem'}
          color={'main.grayTextColor'}
        >
          Designing store and service websites
        </Text>
      </GridItem>
      <GridItem colSpan={1}>
        <Text
          marginY={'1rem'}
          fontSize={'xl'}
          fontWeight={'extrabold'}
          color={'white'}
          lineHeight={'10'}
        >
          Social Networks
        </Text>
        <Box display={'flex'} justifyContent={'start'} alignItems={'center'}>
          <AiOutlineInstagram color="white" fontSize={'1.5rem'} />
          <AiOutlineWhatsApp
            color="white"
            fontSize={'1.5rem'}
            style={{ marginLeft: '.25rem' }}
          />
          <AiOutlineLinkedin
            color="white"
            fontSize={'1.5rem'}
            style={{ marginLeft: '.25rem' }}
          />
          <BsTelegram
            color="white"
            fontSize={'1.5rem'}
            style={{ marginLeft: '.25rem' }}
          />
        </Box>
        <Text
          fontSize={'14px'}
          fontWeight={'bold'}
          marginY={'.75rem'}
          color={'main.grayTextColor'}
        >
          Invited to cooperate
        </Text>
      </GridItem>
    </Grid>
  );
};

export default Footer;
