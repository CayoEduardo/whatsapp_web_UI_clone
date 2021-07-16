import { extendTheme } from "@chakra-ui/react";

const Text = {
  baseStyle: {
    color: "black",
  },
};

const theme = extendTheme({
  components: {
    Text,
  },
});

export default theme;
