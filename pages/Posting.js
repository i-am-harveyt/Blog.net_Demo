import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Posting = () => {
  let [value, setValue] = useState("");
  let handleValueChange = (e) => {
    setValue(e.target.value);
  };
  let [title, setTitle] = useState("");
  let handleTitleChange = (e) => {
    setTitle(e.target.value)
  }
  const isEmpty = (value === "" || title === "");
  let author = "";
  let today = new Date();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef();

  const addPost = async (post) => {
    const res = await fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(post),
    });

    const data = await res.json();
  };

  const clickAdd = () => {
    let newpost = {
      id: Math.floor(Math.random() * 10000) + 1,
      title: title,
      author: author,
      content: value,
      time: today.toLocaleDateString() + " " + today.toLocaleTimeString(),
      likes: 0,
      comment: [],
    };
    setTitle("");
    setValue("");
    // add post
    addPost(newpost);
    onOpen();
  };

  return (
    <>
      <Box width={"100%"} maxWidth={"container.md"}>
        <Heading as="h1" mt={'1rem'}>Posting</Heading>
        <FormControl>
          <Input
            mt={3}
            placeholder="Title"
            onChange={handleTitleChange}
            value={title}
          />
          <Textarea
            mt={3}
            height={"10rem"}
            placeholder="What are you thinking about?"
            resize={"none"}
            onChange={handleValueChange}
            value={value}
          />
          <Button mt={3} onClick={clickAdd} disabled={isEmpty}>
            Post!
          </Button>
        </FormControl>
      </Box>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Inform</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Post succeed!</ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Posting;
