import React from "react";
import HDItem from "./HDItem";
import { Text } from "@chakra-ui/react";

const HeaderDescriptions = () => {
  const desc1 = [{
    id: 1,
    text:
      <Text textAlign={'center'}>A programming group with a lot of creative ideas</Text>
  },
  {
    id: 2,
    text:
      <Text textAlign={'center'}>Ready to transform your business</Text>
  },
  {
    id: 3,
    text:
      <Text textAlign={'center'}>!To a lucrative startup</Text>
  }]
  const desc2 = [{
    id: 4,
    text:
      <Text textAlign={'center'} fontSize={'16px'} lineHeight={2} paddingX={100} marginBottom={8}>Honesty in our behavior and words and actions are our lifestyle commitments and this feature distinguishes us from other programmers out there. In other words, everyone can code</Text>
  },
  {
    id: 5,
    text: <Text fontSize={'16px'} lineHeight={'28px'} fontWeight={'500'} color={'black'} textAlign={'center'}>Highest response time</Text>
  },
  {
    id: 6,
    text: <Text fontSize={'16px'} lineHeight={'28px'} fontWeight={'500'} color={'black'} textAlign={'center'}>More than 15 years of experience</Text>
  },
  {
    id: 7,
    text: <Text fontSize={'16px'} lineHeight={'28px'} fontWeight={'500'} color={'black'} textAlign={'center'}>Examples of work in different fields</Text>
  },
  {
    id: 8,
    text: <Text fontSize={'16px'} lineHeight={'28px'} fontWeight={'500'} color={'black'} textAlign={'center'}>Exclusive products</Text>
  },
  {
    id: 9,
    text: <Text fontSize={'16px'} lineHeight={'28px'} fontWeight={'500'} color={'black'} textAlign={'center'}>free consultation</Text>
  },
  ]
  return <>
    <HDItem button={true} textArray={desc1} playerSource="/animations/109118-programming-effects.json" />
    <HDItem button={false} textArray={desc2} playerSource="/animations/animation2.json" />
  </>
};

export default HeaderDescriptions;
