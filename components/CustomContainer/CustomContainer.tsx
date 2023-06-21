import { Container, ContainerProps } from "@chakra-ui/react"
import { ChakraComponent, Box, BoxProps } from '@chakra-ui/react'

type CustomContainerProps = {
    children: React.ReactNode
}
const CustomContainer = ({ children, ...props }: CustomContainerProps) => {
    return (
        <Container maxW={{ base: "full", lg: "6xl" }} marginX={"auto"} {...props}>
            {children}
        </Container>
    )
}

export default CustomContainer