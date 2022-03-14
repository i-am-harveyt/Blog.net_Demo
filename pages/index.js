import { Box } from "@chakra-ui/react";
import Posts from "../component/Posts";

const Page = () => {
  return (
    <Box width={"100%"} maxWidth={"container.md"}>
      <Posts/>
    </Box>
  );
};

export default Page;
