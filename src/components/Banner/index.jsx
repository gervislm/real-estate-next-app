import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export const Banner = ({
  imageUrl,
  purpose,
  title1,
  title2,
  description1,
  description2,
  linkName,
  buttonText,
}) => {
  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m={10}>
      <Image
        src={imageUrl}
        priority={true}
        width={400}
        height={200}
        alt="banner"
      />
      <Box p={5}>
        <Text color="#7799a8" fontSize="md" fontWeight="medium">
          {purpose}
        </Text>
        <Text fontSize="3xl" fontWeight="bold">
          {title1}
          <br />
          {title2}
        </Text>
        <Text fontSize="lg" pt="3" pb="3" fontWeight="medium" color="gray.700">
          {description1}
          <br />
          {description2}
        </Text>
        <Button
          fontSize="xl"
          bg="#609ba8"
          boxShadow="md"
          p="5"
          borderRadius="5"
          color={"white"}
        >
          <Link href={linkName ? linkName : ""}>{buttonText}</Link>
        </Button>
      </Box>
    </Flex>
  );
};
