import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";

function Login() {
  const [userID, setuserID] = useState("");
  let handleUserIDChange = (e) => {
    setuserID(e.target.value);
  };
  const [password, setPassword] = useState("");
  let handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const buttonColor = useColorModeValue("teal.300", "teal")

  return (
    <Box>
      <Heading as="h2" mt={"1rem"}>
        Login
      </Heading>
      <Heading mt={"1rem"} size={"lg"}>
        User ID
      </Heading>
      <Input mt={"1rem"} value={userID} onChange={handleUserIDChange} />
      <Heading mt={"1rem"} size={"lg"}>
        Password
      </Heading>
      <InputGroup mt={"1rem"} size={"md"}>
        <Input
          value={password}
          onChange={handlePasswordChange}
          type={show ? "text" : "password"}
        />
        <InputRightElement>
          <Button mr={'1rem'} h={"2rem"} size={"md"} onClick={handleClick}>
            {show ? <ViewOffIcon /> : <ViewIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Box mt={"1rem"} float={'right'}>
        <Link href={"/SignUp"}>Sign Up</Link>
      </Box>
      <Button bg={buttonColor} mt={"2rem"}>Log In!</Button>
    </Box>
  );
}

export default Login;
