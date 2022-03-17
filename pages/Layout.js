import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";
import Navbar from "../component/Navbar";

const Layout = ({ children }) => {
  const [login, setLogin] = useState(false);
  return (
    <Box as="main" height={"100%"}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Blog - Home</title>
      </Head>
      <Container maxW="container.md">
        <Navbar login={login} />
      </Container>
      <Container maxW="container.md" pt={"4rem"}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
