import { Box, Button } from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { CloseIcon } from "@chakra-ui/icons";

const Post = ({ id, content, time, likes, comment, onDelete }) => {
  return (
    <Box bg={"gray.400"} mt={3} borderRadius={"lg"} p={3}>
      <Button
        float={"right"}
        size={"xs"}
        variant={"ghost"}
        _hover={{ bg: "red" }}
        onClick={()=>onDelete(id)}
      >
        <CloseIcon />
      </Button>
      <Box>{content}</Box>
      <Box display={"flex"} alignItems={"center"}>
        <AiFillHeart />
        {likes}
      </Box>
      <Box>{time}</Box>
      <Box>{comment}</Box>
    </Box>
  );
};

export default Post;
