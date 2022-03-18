import {
  Container,
  Stack,
  Spacer,
  Flex,
  useColorMode,
  IconButton,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Link from "next/link";

const Navbar = ({ login }) => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("teal.200", "teal");
  const icon = useColorModeValue(<SunIcon />, <MoonIcon />);
  const iconBGHover = useColorModeValue("gray.500", "gray.200");
  const iconHover = useColorModeValue(<MoonIcon />, <SunIcon />);
  return (
    <Container
      mt={0}
      position={"fixed"}
      zIndex={1}
      top={0}
      left={0}
      right={0}
      // borderRadius={"lg"}
      width={"100%"}
      maxWidth={"container.md"}
      bg={bgColor}
      opacity={"90%"}
      style={{ backdropFilter: "blur(10px" }}
      p={3}
    >
      <Flex fontSize={"lg"} mx={2} alignItems={"center"} my={"auto"}>
        <Link href="/">Blog.Net</Link>
        <Spacer />
        <Stack direction={"row"} spacing={8} alignItems={"center"} my={"auto"}>
          {login ? <Box>Logout</Box> : <Link href={"/Login"}>Login</Link>}
          {login ? <Link href="/Posting">Add</Link> : ""}
          {login ? <Link href={"/Profile"}>Profile</Link> : ""}
          <IconButton
            onClick={toggleColorMode}
            icon={icon}
            size={"md"}
            bg={bgColor}
            _hover={{ bg: iconBGHover }}
          />
        </Stack>
      </Flex>
    </Container>
  );
};

export default Navbar;
