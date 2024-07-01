import { Box, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

export const Search = () => {
  const [searchFilters, setSearchFilters] = useState([]);
  const router = useRouter();
  return (
    <Box>
      <Flex cursor="pointer" bg="gray.100"></Flex>
    </Box>
  );
};
