import {
  Container,
  Stack,
  Spacer,
  Flex,
  useColorMode,
  Button,
  IconButton
} from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";
import Link from "next/link";

const Navbar = ({}) => {
  const { toggleColorMode } = useColorMode();
  return (
    <Container
      mt={1}
      position={"fixed"}
      zIndex={1}
      top={0}
      left={0}
      right={0}
      borderRadius={"lg"}
      width={"100%"}
      maxWidth={"container.md"}
      bg={'teal'}
      opacity={'90%'}
      style={{"backdropFilter": "blur(10px"}}
      p={3}
    >
      <Flex fontSize={"lg"} mx={2} alignItems={"center"} my={"auto"}>
        <Link href="/">Blog.Net</Link>
        <Spacer />
        <Stack direction={["column", "row"]} spacing={8} alignItems={'center'} my={'auto'}>
          <Link href="/Posting">Add</Link>
          <Link href={"/Profile"}>Profile</Link>
          <IconButton onClick={toggleColorMode} icon={<MoonIcon/>} size={'md'}/>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Navbar;
