import { Box, Button, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { CloseIcon } from "@chakra-ui/icons";

const Post = ({ id, title, author, content, time, likes, comment, onDelete }) => {
  const bg = useColorModeValue("gray.300", "gray.600");
  const font = useColorModeValue("gray.600", "aliceblue");
  return (
    <Box bg={bg} mt={3} borderRadius={"lg"} p={3} color={font} mx={"5%"}>
      <Button
        float={"right"}
        size={"xs"}
        variant={"ghost"}
        _hover={{ bg: "red", color: 'white' }}
        onClick={() => onDelete(id)}
      >
        <CloseIcon />
      </Button>
      <Box>
        <Text>{author}</Text>
        <Heading as="h3">{title}</Heading>
      </Box>
      <Box mt={'0.5rem'}>{content}</Box>
      <Box mt={'1rem'} display={"flex"} alignItems={"center"}>
        <AiFillHeart />
        {likes}
      </Box>
      <small>{time}</small>
      {/* <Box>{comment}</Box> */}
    </Box>
  );
};

export default Post;
