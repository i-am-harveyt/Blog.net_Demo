import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
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
        <InputRightElement width={"3rem"}>
          <Button h={"2rem"} size={"md"} onClick={handleClick}>
            {show ? <ViewOffIcon /> : <ViewIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Box mt={"1rem"} float={'right'}>
        <Link href={"/SignUp"}>Sign Up</Link>
      </Box>
      <Button mt={"2rem"}>Log In!</Button>
    </Box>
  );
}

export default Login;
