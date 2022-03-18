import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";

function SignUp() {
  const [userID, setUserID] = useState("");
  let handleUserIDChange = (e) => {
    setUserID(e.target.value);
  };
  const [password, setPassword] = useState("");
  let handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const [passwordShow, setPasswordShow] = useState(false);
  let handlePasswordShow = () => {
    setPasswordShow(!passwordShow);
  };
  const [passwordCheck, setPasswordCheck] = useState("");
  let handlePasswordCheckChange = (e) => {
    setPasswordCheck(e.target.value);
  };
  const [passwordCheckShow, setPasswordCheckShow] = useState(false);
  let handlePasswordCheckShow = () => {
    setPasswordCheckShow(!passwordCheckShow);
  };
  const [email, setEmail] = useState("");
  let handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const register = async (user) => {
    const res = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  const getData = async () => {
    const res = await fetch("http://localhost:5000/users", {
      method: "GET",
    });
    let data = await res.json();
    return data;
  };

  const clickRegister = () => {
    let newUser = {
      id: Math.floor(Math.random() * 10000) + 1,
      userID: userID,
      password: password,
      email: email,
    };
    let existed = getData()
    console.log(existed)
    register(newUser);
  };

  return (
    <Box>
      <Heading as={"h2"} mt={"1rem"}>
        Register
      </Heading>
      <Heading size={"lg"} mt={"1rem"}>
        User ID
      </Heading>
      <Input
        mt={"1rem"}
        value={userID}
        onChange={handleUserIDChange}
        placeholder="請輸入英數半形"
      />
      <Heading size={"lg"} mt={"1rem"}>
        Password
      </Heading>
      <InputGroup mt={"1rem"} size={"md"}>
        <Input
          value={password}
          onChange={handlePasswordChange}
          placeholder="請輸入英數半形"
          type={passwordShow ? "text" : "password"}
        />
        <InputRightElement>
          <Button
            mr={"1rem"}
            h={"2rem"}
            size={"md"}
            onClick={handlePasswordShow}
          >
            {passwordShow ? <ViewOffIcon /> : <ViewIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Heading size={"lg"} mt={"1rem"}>
        Password(type again!)
      </Heading>
      <InputGroup>
        <Input
          mt={"1rem"}
          value={passwordCheck}
          onChange={handlePasswordCheckChange}
          placeholder="請再輸入一次密碼"
          type={passwordCheckShow ? "text" : "password"}
        />
        <InputRightElement>
          <Button
            mt={"2rem"}
            mr={"1rem"}
            h={"2rem"}
            size={"md"}
            onClick={handlePasswordCheckShow}
          >
            {passwordCheckShow ? <ViewOffIcon /> : <ViewIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Heading size={"lg"} mt={"1rem"}>
        Email
      </Heading>
      <Input
        mt={"1rem"}
        value={email}
        onChange={handleEmailChange}
        placeholder="請輸入信箱"
        type={"email"}
      />
      <Button mt={"2rem"} onClick={clickRegister}>
        Register!
      </Button>
    </Box>
  );
}

export default SignUp;
12;