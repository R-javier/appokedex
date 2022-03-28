import React from "react";
import CardPokemon from "./CardPokemon";
import { Stack, Grid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function Cards({ results }) {
  return (
    <Stack direction="row" display="flex" justify="center">
      <Grid templateColumns="repeat(2, 1fr)" columnGap={3} gap={3}>
        {results.map((x) => {
          return (
            <Stack key={x.name}>
              <Link to={`${x.name}`}>
                <CardPokemon url={x.url} />
              </Link>
            </Stack>
          );
        })}
      </Grid>
    </Stack>
  );
}

export default Cards;
