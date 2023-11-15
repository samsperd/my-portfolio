import {Divider, Grid, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {FeatureIcon} from '../icons/FeatureIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import { ManComputerIcon } from '../icons/ManComputerIcon';

export const About = () => {
   return (
      <>
         <Flex
            direction={'column'}
            css={{
               'gap': '1rem',
               'pt': '$20',
               'justifyContent': 'center',
               'alignItems': 'center',
               'px': '$6',
               '@sm': {
                  justifyContent: 'space-around',
                  px: '$32',
                  flexDirection: 'row',
               },
               '@md': {
                  px: '$64',
               },
            }}
         >
            <Flex direction="column">
               <Text span css={{color: '$blue600'}}>
                  Who Am I?
               </Text>
               <Text h3>Overview</Text>
               <Text
                  span
                  css={{
                     maxWidth: '550px',
                     color: '$accents8',
                  }}
               >
                  My name is Obinna Iloeje. I currently live in Lagos, Nigeria. <br />
                  I specialize in building mobile responsive front-end UI applications and Browser Extensions as well as Backend(Rest) APIs and Technologies that interacts with the frontend Applications.
                  I'm very passionate about learning new technologies and I understand there is more than one way to accomplish a task. <br />
                  <br />
                  I started Web Development in 2017 when I registered for its course at FemTech Institute of Technology Ilorin, Nigeria.
                  As I was taught how to use technologies like HTML, CSS, JavaScript, SQL and Procedural PHP to make a web application, 
                  I avariciously grabbed the knowledge and researched more on relevant topics as the Avid learner I am. <br />
                  Since then, I have acquired more skills; mastered more technologies; taught and delivered both Company projects, Freelancing projects and Personal projects alike.
               </Text>

               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  <BoxIcon />
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                        Frontend Development
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        {/* I have plenty exposure to many frontend technologies as quest to build Pixel-Perfect Frontend Applications.  */}
                        In my quest to build Pixel-Perfect Frontend Applications, I have been exposed to many frontend technologies.
                        Although I am most proficient in building front-end applications using HTML, CSS, JavaScript, React and Vue, 
                        I am a quick learner and can pick up new tech stacks as needed.
                     </Text>
                  </Flex>
               </Flex>
               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  <BoxIcon />
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                        Backend Development
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        Experienced and Equipped with backend technologies such as Firebase, PHP, Laravel, Node.js, MongoDB and SQL,
                        I build Rest API's to interact with frontend applications as well as Browser Extensions.
                     </Text>
                  </Flex>
               </Flex>
               {/* <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  <BoxIcon />
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                        Your title here
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed condimentum, nisl ut aliquam lacinia, nisl nisl
                        aliquet nisl,
                     </Text>
                  </Flex>
               </Flex> */}
            </Flex>
            <Flex align={'center'}>
               <ManComputerIcon />
            </Flex>
         </Flex>
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
