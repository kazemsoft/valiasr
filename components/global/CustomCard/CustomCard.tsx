import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
} from '@chakra-ui/react';
import Image from 'next/image';
import { AiOutlineEye } from 'react-icons/ai';
import CustomButton from '../Button/CustomButton';
import Link from 'next/link';

type CustomCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  buttonTitle: string;
  alt: string;
  linkTo: string;
};

const CustomCard = ({
  imageSrc,
  title,
  description,
  buttonTitle,
  alt,
  linkTo,
}: CustomCardProps) => {
  return (
    <Link href={linkTo} target="_blank">
      <Card>
        <CardHeader>
          <Box width={'full'}>
            <Image
              src={imageSrc}
              width={250}
              height={200}
              alt={alt}
              style={{
                borderRadius: '1rem',
                width: '100%',
                maxHeight: '180px',
              }}
            />
          </Box>
        </CardHeader>
        <CardBody>
          <Heading
            color={'main.lightBlueColor'}
            as="h1"
            fontSize={'25px'}
            noOfLines={1}
          >
            {title}
          </Heading>
          <Heading
            lineHeight={'1.5rem'}
            marginTop={'1rem'}
            color={'main.textColor'}
            as="h6"
            size="xs"
          >
            {description}
          </Heading>
        </CardBody>
        <CardFooter>
          <CustomButton
            width={'full'}
            rightIcon={<AiOutlineEye color={'white'} />}
            colorScheme="green"
            variant="solid"
            fontSize={'xl'}
          >
            {buttonTitle}
          </CustomButton>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CustomCard;
