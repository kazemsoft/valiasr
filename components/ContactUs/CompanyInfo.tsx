import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
} from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { AiOutlineMail } from 'react-icons/ai';
const CompanyInfo = () => {
  return (
    <Card>
      <CardHeader>
        <Heading color={'main.lightBlueColor'} as={'h5'} fontWeight={900}>
          Contact Us
        </Heading>
      </CardHeader>
      <CardBody>
        <Heading
          as={'h3'}
          fontSize={'18px'}
          fontWeight={700}
          color={'main.gColor'}
          marginBottom={'20px'}
        >
          Nothing is better than a free consultation!
        </Heading>
        <Text fontWeight={'100'} lineHeight={'2em'} marginBottom={'20px'}>
          If you have doubts about buying products or services, or if you need
          to ask us a question for any reason, choose one of the following
          communication methods:
        </Text>
        <Box>
          <Icon
            as={AiOutlineMail}
            boxSize={12}
            bg={'main.lightBlueColor'}
            borderRadius={'100%'}
            color={'white'}
          />
        </Box>
      </CardBody>
    </Card>
  );
};

export default CompanyInfo;
