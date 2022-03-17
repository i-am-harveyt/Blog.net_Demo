import { Box, Button, Heading, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
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
  const [passwordShow, setPasswordShow] = useState(false)
  const [passwordCheck, setPasswordCheck] = useState("");
  let handlePasswordCheckChange = (e) => {
    setPasswordCheck(e.target.value);
  };
  const [passwordCheckShow, setPasswordCheckShow] = useState(false)
  const [email, setEmail] = useState("");
  let handleEmailChange = (e) => {
    setEmail(e.target.value);
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
      <InputGroup size={'md'}>
        <Input
          mt={"1rem"}
          value={password}
          onChange={handlePasswordChange}
          placeholder="請輸入英數半形"
          type={"password"}
        />
        <InputRightElement width={'3rem'}>
        <Button h={'2rem'} size={'md'} mt={'2rem'}></Button>
        </InputRightElement>
      </InputGroup>
      <Heading size={"lg"} mt={"1rem"}>
        Password(type again!)
      </Heading>
      <Input
        mt={"1rem"}
        value={passwordCheck}
        onChange={handlePasswordCheckChange}
        placeholder="請再輸入一次密碼"
        type={"password"}
      />
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
      <Button mt={"2rem"}>Register!</Button>
    </Box>
  );
}

export default SignUp;
