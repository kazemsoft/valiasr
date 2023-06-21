import {
  Box,
  Button,
  Grid,
  GridItem,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Logo from "./Logo";
import styles from "./styles.module.scss";
import { SearchIcon } from "@chakra-ui/icons";
import { GiHamburgerMenu } from "react-icons/gi";
import AccordianMenu from "./AccordianMenu";
import { RxCross2 } from "react-icons/rx";

export type MenuItems = {
  text: string;
}[];
const NavContainer = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  const menuItems: MenuItems = [
    {
      text: "Home",
    },
    {
      text: "Store",
    },
    {
      text: "Portfolio",
    },
    {
      text: "Blog",
    },
    {
      text: "Contact Us",
    },
  ];
  return (
    <Box padding={4}>
      <Grid
        templateColumns={{ base: "repeat(2,1fr)", lg: "repeat(8,1fr)" }}
        gap={4}
      >
        <GridItem
          colSpan={{ base: 1, lg: 4 }}
          display={"flex"}
          alignItems={"center"}
          cursor={"pointer"}
        >
          <Logo />
          <Box
            whiteSpace={"nowrap"}
            display={{ base: "none", lg: "flex" }}
            flexDirection={"column"}
            marginLeft={4}
          >
            <Text color={"main.blueColor"} fontSize={"xl"} fontWeight={"bold"}>
              Valiasr website design
            </Text>
            <Text fontSize={"sm"}>A path to infinity</Text>
          </Box>
        </GridItem>

        <GridItem
          colSpan={{ base: 5, lg: 4 }}
          display={{ base: "none", lg: "flex" }}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          {menuItems.map((menuItem) => {
            return (
              <Button
                color={"black"}
                fontSize={"xl"}
                variant={"unstyled"}
                className={styles.menuStyle}
                position={"relative"}
                fontWeight={"semibold"}
              >
                {menuItem.text}
              </Button>
            );
          })}
        </GridItem>
        <GridItem
          display={{ base: "flex", lg: "none" }}
          justifyContent={"end"}
          colSpan={1}
          alignItems={"center"}
        >
          {!isOpen ? (
            <GiHamburgerMenu
              onClick={onToggle}
              fontSize={24}
              color="black"
              cursor={"pointer"}
            />
          ) : (
            <RxCross2
              onClick={onToggle}
              fontSize={24}
              color="black"
              cursor={"pointer"}
            />
          )}
        </GridItem>
      </Grid>
      <AccordianMenu isOpen={isOpen} menuItems={menuItems} />
    </Box>
  );
};
export default NavContainer;
