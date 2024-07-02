"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import { SearchFilter } from "../../components/SearchFilter";
import { Property } from "../../components/Property";
import Image from "next/image";
import noResult from "../../assets/images/noresult.svg";

const Search = ({ property }) => {
  const [searchFilters, setSearchFilters] = useState(false);
  const searchParams = useSearchParams();
  const purpose = searchParams.get("purpose");

  return (
    <Box>
      <Flex
        cursor="pointer"
        bg="gray.100"
        borderBottom="1px"
        borderColor="gray.200"
        p="4"
        fontWeight="black"
        fontSize="lg"
        justifyContent="center"
        alignItems="center"
        onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
      >
        <Text>Search property by filtering</Text>
        <Icon pl="2" w="7" as={BsFilter} />
      </Flex>
      {searchFilters && <SearchFilter />}
      <Text fontSize="2xl" p="4" fontWeight="bold">
        Properties {purpose ? purpose : ""}
      </Text>
      <Flex wrap="wrap">
        {[].map((property) => (
          <Property key={property.id} property={property} />
        ))}
      </Flex>
      {[].length === 0 && (
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          mt="5"
          mb="5"
        >
          <Image alt="no result" src={noResult} />
        </Flex>
      )}
    </Box>
  );
};

export default Search;
