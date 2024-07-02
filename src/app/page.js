"use client";
import React from "react";
import { useEffect, useState } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import { Banner } from "../components/Banner";
import { Property } from "../components/Property";

const imageUrl = {
  img1: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4",
  img2: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008",
};

export default function Home() {
  const [propertiesForSale, setPropertiesForSale] = useState([]);
  const [propertiesForRent, setPropertiesForRent] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const propertyForSale = await fetchApi(
          `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
        );
        const propertyForRent = await fetchApi(
          `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
        );

        setPropertiesForSale(propertyForSale?.hits || []);
        setPropertiesForRent(propertyForRent?.hits || []);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    }

    fetchData();
  }, []);

  return (
    <Box>
      <Banner
        purpose="Rent a Home"
        title1="Rental Homes for"
        title2="Everyone"
        description1="Explore Apartments, Villas, Homes"
        description2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl={imageUrl.img1}
      />
      <Flex flexWrap="wrap">
        {propertiesForRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      <Banner
        purpose="Buy a Home"
        title1="Find, Buy & Own Your"
        title2="Dream Home"
        description1="Explore Apartments, Villas, Homes"
        description2="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl={imageUrl.img2}
      />
      <Flex flexWrap="wrap">
        {propertiesForSale.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
    </Box>
  );
}
