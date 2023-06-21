import { extendTheme } from "@chakra-ui/react";
import type { Styles, GlobalStyleProps } from "@chakra-ui/theme-tools";

const colors = {
  main: {
    blueColor: "#2D8DB6",
    gColor: "#61CE70",
    textColor: "#7A7A7A",
    modalBg: "#bababa47",
  },
};

export const theme = extendTheme({
  colors,
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  styles: {
    global: (props: GlobalStyleProps) => ({
      "span, p, div": {
        color: "#7A7A7A",
      },
      color: props.colorMode === "dark" ? "white" : "#7A7A7A",
    }),
  },
});
