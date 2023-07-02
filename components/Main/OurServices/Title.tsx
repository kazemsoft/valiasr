import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Title = () => {
    return (
        <Box>
            <Box sx={{
                width: "78px",
                height: "4px",
                marginBottom: "1rem",
                backgroundColor: 'main.secondaryColor'
            }} ></Box>
            <Heading as={'h2'} color={'main.lightBlueColor'} >Our services:</Heading>
            <Text marginTop={"1rem"}>Website design, mobile and desktop application design and programming, SEO and social network management.</Text>
            <Heading marginTop={"1.75rem"} as={'h4'} size='md'>Below you can see some examples of our recent works:</Heading>
        </Box>
    )
}

export default Title

