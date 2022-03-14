import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../component/Navbar";

const Layout = ({ children }) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Blog - Home</title>
      </Head>
      <Container maxW="container.md">
        <Navbar />
      </Container>
      <Container maxW="container.md" pt={'5.5rem'}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
