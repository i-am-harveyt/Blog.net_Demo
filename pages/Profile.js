import { Box, Heading, Text } from "@chakra-ui/react";
import Posts from "../component/Posts";

const Profile = () => {
  let person = {
    name: "Tung Hao-Ting",
    posts: [],
  };
  return (
      <Box width={"100%"} maxWidth={"container.md"}>
        <Heading mt={'1rem'}>{person.name}</Heading>
        <Text mt={'1rem'}>post: {person.posts.length}</Text>
        <Posts/>
      </Box>
  );
};

export default Profile;
