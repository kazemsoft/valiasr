import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';

type CommentCardProps = {
  src: string;
  alt: string;
  comment: string;
  userInfo: string;
};

const CommentCard = ({ src, alt, comment, userInfo }: CommentCardProps) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <Card>
      <CardHeader>
        <Image alt={alt} src={src} width={100} height={100} />
      </CardHeader>
      <CardBody>
        <Box height={'40px'}>
          <Text
            noOfLines={showMore ? 0 : 2}
            onClick={() => setShowMore(!showMore)}
            cursor={'pointer'}
            color={'black'}
            fontWeight={'bold'}
          >
            {comment}
          </Text>
        </Box>
      </CardBody>
      <CardFooter>
        <Text>{userInfo}</Text>
      </CardFooter>
    </Card>
  );
};

export default CommentCard;
