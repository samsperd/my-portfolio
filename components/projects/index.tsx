import { Button, Card, Divider, Grid, Link, Text } from '@nextui-org/react';
import React from 'react';
import { CheckIcon } from '../icons/CheckIcon';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';
import Image from 'next/image';
import propertyImg from "../../public/assets/projects/property.jpg"

export const Projects = () => {
  return (
    <>
      <Flex
        css={{ py: '$20', gap: '1rem', px: '$6' }}
        justify={'center'}
        wrap={'wrap'}
        direction={'column'}
        align={'center'}
      >
        <Flex direction={'column'} align={'center'}>
          <Text span css={{ color: '$blue600' }}>
            Projects
          </Text>
          <Text h2>What I've Built</Text>
        </Flex>

        <Flex
          css={{ gap: '2rem', width: '100%' }}
          wrap={'wrap'}
          justify={'center'}
        >
          <Card css={{ p: '$6', mw: '550px' }}>
            <Card.Image src={'/assets/projects/property.jpg'} placeholder='blur'></Card.Image>
            {/* <Card.Header>
              <Grid.Container>
                <Grid xs={12}>
                  <Image src={propertyImg} alt='property' style={{ width: '100%'}} height={350}></Image>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: '$accents8' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    condimentum, nisl ut aliquam lacinia, elit
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header> */}
            <Card.Body css={{ py: '$4' }}>
              <Text css={{ display: 'contents' }} h2>
                $0{' '}
              </Text>
              <Text css={{ display: 'contents', color: '$accents8' }}>/mo</Text>
              <Button css={{ mt: '$7', mb: '$12' }}>Get Started</Button>

              <Divider />
              <Box as={'ul'}>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    1 Team Members
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    1 Website
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    1 GB Storage
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    1 TB Transfer
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Email Support
                  </Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>
          
        </Flex>
      </Flex>

      <Divider
        css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }}
      />
    </>
  );
};
