import { extendTheme } from "@chakra-ui/react";
import type { Styles, GlobalStyleProps } from "@chakra-ui/theme-tools";

const colors = {
  main: {
    blueColor: "#2D8DB6",
    gColor: "#61CE70",
    textColor: "#7A7A7A",
    modalBg: "#bababa47",
  },
  greenButton: {
    100: "#00ff25",
    200: "#16d632",
    500: "#61CE70",
    800: "#0f7e1f",
    1000: "#056513",
  }
};

export const theme = extendTheme({
  colors,
  fonts: {
    heading: "Mulish, sans- serif",
    body: "Mulish, sans- serif",
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
