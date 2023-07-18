import { Box, Button, Collapse, Text } from '@chakra-ui/react';
import { MenuItems } from './Nav';
import Link from 'next/link';

type AccordianMenuProps = {
  isOpen: boolean;
  menuItems: MenuItems;
};
const AccordianMenu = ({ isOpen, menuItems }: AccordianMenuProps) => {
  return (
    <Collapse style={{ borderRadius: 8 }} in={isOpen} animateOpacity>
      <Box
        p="16px"
        color="main.textColor"
        mt="4"
        bg="main.modalBg"
        shadow="2xl"
      >
        {menuItems.map(({ text, link }, i) => (
          <Link href={link}>
            <Box
              key={i}
              style={{
                transition: 'all .3s ease',
                cursor: 'pointer',
                padding: 8,
              }}
              rounded={'md'}
              sx={{
                '&:hover': {
                  backgroundColor: 'white',
                  transition: 'all .3s ease',
                },
              }}
            >
              <Text>{text}</Text>
            </Box>
          </Link>
        ))}
      </Box>
    </Collapse>
  );
};

export default AccordianMenu;
