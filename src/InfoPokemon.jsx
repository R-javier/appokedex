import React, { useState } from "react";
import {
  Stack,
  Text,
  Image,
  Button,
  Icon,
  Box,
  Container,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Table,
  Tbody,
  Progress,
} from "@chakra-ui/react";

import { CgPokemon } from "react-icons/cg";
import UseFetch from "./UseFetch";

import { useParams } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
function InfoPokemon() {
  let { id } = useParams();
  const estado = UseFetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const { cargando, data } = estado;

  return (
    <Stack>
      {cargando ? (
        <Stack direction="row" justify="center" display="flex">
          <Icon fontSize="2xl" as={FaSpinner} />
        </Stack>
      ) : (
        <Stack spacing={-9} direction="column">
          <Box backgroundColor={`${data.types[0].type.name}.400`} p={3}>
            <Stack direction="column">
              <Stack direction="row" display="flex" justify="space-around">
                <Stack>
                  <Text fontSize="4xl" color="#fff">
                    {data.name}
                  </Text>
                  <Stack direction="row">
                    <Text
                      color="#fff"
                      w={20}
                      borderRadius="lg"
                      textAlign="center"
                      p={1.4}
                      backgroundColor={`${data.types[0].type.name}.300`}
                    >
                      {data.types[0].type.name}
                    </Text>
                    <Text
                      color="#fff"
                      w={20}
                      borderRadius="lg"
                      textAlign="center"
                      p={1.4}
                    ></Text>
                  </Stack>
                </Stack>
                <Stack
                  alignItems="center"
                  justify="flex-end"
                  display="flex"
                  direction="column"
                >
                  <Icon
                    fontWeight="light"
                    fontSize="3xl"
                    color="#fff"
                    as={CgPokemon}
                  />
                  <Text fontSize="2xl" color="#fff">
                    #{data.id}
                  </Text>
                </Stack>
              </Stack>
            </Stack>
            <Stack alignItems="center" justify="center" display="flex">
              <Image
                w={220}
                h={220}
                mb={12}
                objectFit="contain"
                src={data.sprites.front_default}
                alt={data.name}
              ></Image>
            </Stack>
          </Box>
          <Box h={80} pt={12} borderRadius="30px 30px 0px 0px">
            <Tabs variant="soft-rounded" isFitted height="auto">
              <TabList>
                <Tab color="">About</Tab>
                <Tab color="">Stats</Tab>
              </TabList>

              <TabPanels>
                <TabPanel
                  paddingX={16}
                  marginTop={6}
                  marginBottom={6}
                  width="100%"
                  justifyContent="space-between"
                >
                  <Table fontWeight="bolder" h="auto" w="70%">
                    <tbody>
                      <tr>
                        <td>Height</td>
                        <td>{data.height}</td>
                      </tr>
                      <tr>
                        <td>Weight</td>
                        <td>{data.weight}</td>
                      </tr>
                      <tr>
                        <td>Abilities</td>
                        <td> {data.types[0].type.name} </td>
                      </tr>
                    </tbody>
                  </Table>
                </TabPanel>
                <TabPanel
                  paddingX={16}
                  marginTop={6}
                  marginBottom={6}
                  width="100%"
                  justifyContent="space-around"
                >
                  <Table fontWeight="bolder" h="auto" w="100%">
                    <tbody>
                      <tr>
                        <td>HP</td>
                        <td>{data.stats[0].base_stat}</td>
                        <Progress
                          size="xs"
                          w={60}
                          hasStripe
                          as="td"
                          value={`${data.stats[0].base_stat}`}
                        />
                      </tr>
                      <tr>
                        <td>Attack</td>
                        <td>{data.stats[1].base_stat}</td>
                        <Progress
                          size="xs"
                          w={60}
                          hasStripe
                          as="td"
                          value={`${data.stats[1].base_stat}`}
                        />
                      </tr>
                      <tr>
                        <td>Defense</td>
                        <td>{data.stats[2].base_stat}</td>
                        <Progress
                          size="xs"
                          w={60}
                          as="td"
                          hasStripe
                          value={`${data.stats[2].base_stat}`}
                        />
                      </tr>
                      <tr>
                        <td>Sp.Atk</td>
                        <td>{data.stats[3].base_stat}</td>
                        <Progress
                          size="xs"
                          w={60}
                          as="td"
                          hasStripe
                          value={`${data.stats[3].base_stat}`}
                        />
                      </tr>
                      <tr mb={2}>
                        <td>Sp.Def</td>
                        <td>{data.stats[4].base_stat}</td>
                        <Progress
                          size="xs"
                          w={60}
                          as="td"
                          hasStripe
                          value={`${data.stats[4].base_stat}`}
                        />
                      </tr>

                      <tr>
                        <td>Speed</td>
                        <td>{data.stats[5].base_stat}</td>

                        <Progress
                          size="xs"
                          w={60}
                          hasStripe
                          as="td"
                          value={`${data.stats[5].base_stat}`}
                        />
                      </tr>
                    </tbody>
                  </Table>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Stack>
      )}
    </Stack>
  );
}

export default InfoPokemon;
