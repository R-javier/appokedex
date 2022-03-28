import React, { useState } from "react";
import UseFetch from "./UseFetch";
import Cards from "./Cards";
import { Button, Stack, Icon, Text } from "@chakra-ui/react";
import { FaSpinner } from "react-icons/fa";
function Pokemon() {
  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon`);
  const estado = UseFetch(url);
  const { cargando, data } = estado;
  cargando ? console.log("cargando") : console.log(data.results);
  return (
    <div>
      {cargando ? (
        <Stack direction="row" justify="center" display="flex">
          <Icon fontSize="2xl" as={FaSpinner} />
        </Stack>
      ) : (
        <Stack>
          <Stack mb={12}>
            <Cards results={data.results} />
          </Stack>
          <Stack pb={6} direction="row" justify="center">
            <Button
              colorScheme="blackAlpha.300"
              variant="outline"
              onClick={() => setUrl(data.previous)}
            >
              Prev
            </Button>
            <Button
              colorScheme="blackAlpha.300"
              variant="outline"
              onClick={() => setUrl(data.next)}
            >
              Next
            </Button>
          </Stack>
        </Stack>
      )}
    </div>
  );
}

export default Pokemon;
