import React from "react";
import { Stack, Text, Box, Image, theme, Container } from "@chakra-ui/react";
import UseFetch from "./UseFetch";

function CardPokemon({ url }) {
  const estado = UseFetch(url);
  const { cargando, data } = estado;
  return (
    <Stack theme={theme}>
      {cargando ? (
        <Text></Text>
      ) : (
        <Box
          borderRadius="lg"
          border="2px solid #000000"
          boxShadow="5px 5px 2px #07070790"
          p="4px 0px 0px 40px"
          backgroundColor={`${data.types[0].type.name}.400`}
        >
          <Container>
            <Stack
              w={[100, 200, 250]}
              h={[100, 200, 200]}
              alignItems="center"
              direction="row"
              display="flex"
              justify="space-between"
            >
              <Stack spacing={6}>
                <Text color="#fff" fontSize="2xl">
                  {data.name}
                </Text>
                <Text
                  color="#fff"
                  borderRadius="lg"
                  textAlign="center"
                  p={1.4}
                  backgroundColor={`${data.types[0].type.name}.300`}
                >
                  {data.types[0].type.name}
                </Text>
              </Stack>
              <Stack p={3} alignItems="center">
                <Text color="#fff">#{data.id}</Text>
                <Image
                  w={135}
                  objectFit="contain"
                  h="auto"
                  src={data.sprites.front_default}
                  alt={data.name}
                />
              </Stack>
            </Stack>
          </Container>
        </Box>
      )}
    </Stack>
  );
}

export default CardPokemon;
