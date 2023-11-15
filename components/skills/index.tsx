import {Button, Card, Divider, Grid, StyledGridContainer, Text} from '@nextui-org/react';
import React from 'react';
import {AcmeLogo} from '../navbar/logo';
import {Flex} from '../styles/flex';
import { Box } from '../styles/box';
import Image from 'next/image';

export const Skills = () => {
   return (
      <>
         <Flex
            direction={'column'}
            align={'center'}
            css={{
               'pt': '$20',
               'px': '$6',
               '@md': {
                  px: '$64',
               },
            }}
         >
            <Box>
               <Text h2 css={{textAlign: 'center'}}>
                  Technologies I am Skillful at
               </Text>
               <Text
                  css={{
                     color: '$accents8',
                     maxWidth: '800px',
                     textAlign: 'center',
                  }}
                  weight="normal"
                  size={'$lg'}
               >
                  Throughout my career as a FullStack Developer, I have been exposed to different Technologies
                  in order to achieve my goal. Few of them are listed as follows:
                  {/* The following are the list of Technologies I am Skillful at to 
                  accomplish my goal as a FullStack Developer */}
                  {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. */}
               </Text>

            </Box>
            <Grid.Container

               css={{
                  'width': '100vw !important',
                  'display': 'grid',
                  'gap': '2rem',
                  'padding': '1.3rem',

                  '@xs': {
                     'gridTemplateColumns': 'repeat(2,minmax(0,1fr))'
                  },
                  '@sm': {
                     'gridTemplateColumns': 'repeat(4,minmax(0,1fr)) !important'
                  },
                  '&  span': {
                     whiteSpace: 'pre',
                  },
               }}
            >
               <Card className='hover-scale' css={{
                  'padding': '1rem 1.5rem',
                  'borderRadius': '0.75rem',
                  'transitionDuration': '0.3s',
                  'transitionTimingFunction': 'cubic-bezier(.4,0,1,1)',
                  'boxShadow': '0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1)',
                  'cursor': 'pointer',
               }}>
                  <Flex align={'center'} css={{
                     gap: '$10'
                  }}>
                     <Image src={"/assets/skills/react.png"} width={64} height={64} alt="/" blurDataURL='URL' placeholder='blur' loading='lazy' />{' '}
                     <Text weight={'semibold'} span size={'$lg'}>
                        REACT
                     </Text>
                  </Flex>
               </Card> 
               <Card className='hover-scale' css={{
                  'padding': '1.5rem',
                  'borderRadius': '0.75rem',
                  'transitionDuration': '0.3s',
                  'boxShadow': '0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1)',
                  'transitionTimingFunction': 'cubic-bezier(.4,0,1,1)',
                  'cursor': 'pointer',
               }}>
                  <Flex align={'center'} css={{
                     gap: '$10'
                  }}>
                     <Image src={"/assets/skills/html.png"} width={64} height={64} alt="/" blurDataURL='URL' placeholder='blur' loading='lazy' />{' '}
                     <Text weight={'semibold'} span size={'$lg'}>
                        HTML
                     </Text>
                  </Flex>
               </Card>
               <Card className='hover-scale' css={{
                  'padding': '1rem 1.5rem',
                  'borderRadius': '0.75rem',
                  'transitionDuration': '0.3s',
                  'boxShadow': '0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1)',
                  'transitionTimingFunction': 'cubic-bezier(.4,0,1,1)',
                  'cursor': 'pointer',
               }}>
                  <Flex align={'center'} css={{
                     gap: '$10'
                  }}>
                     <Image src={"/assets/skills/css.png"} width={64} height={64} alt="/" blurDataURL='URL' placeholder='blur' loading='lazy' />{' '}
                     <Text weight={'semibold'} span size={'$lg'}>
                        CSS
                     </Text>
                  </Flex>
               </Card>
               <Card className='hover-scale' css={{
                  'padding': '1rem 1.5rem',
                  'borderRadius': '0.75rem',
                  'transitionDuration': '0.3s',
                  'boxShadow': '0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1)',
                  'transitionTimingFunction': 'cubic-bezier(.4,0,1,1)',
                  'cursor': 'pointer',
               }}>
                  <Flex align={'center'} css={{
                     gap: '$10'
                  }}>
                     <Image src={"/assets/skills/javascript.png"} width={64} height={64} alt="/" blurDataURL='URL' placeholder='blur' loading='lazy' />{' '}
                     <Text weight={'semibold'} span size={'$lg'}>
                        JAVASCRIPT
                     </Text>
                  </Flex>
               </Card>

               <Card className='hover-scale' css={{
                  'padding': '1rem 1.5rem',
                  'borderRadius': '0.75rem',
                  'transitionDuration': '0.3s',
                  'boxShadow': '0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1)',
                  'transitionTimingFunction': 'cubic-bezier(.4,0,1,1)',
                  'cursor': 'pointer',
               }}>
                  <Flex align={'center'} css={{
                     gap: '$10'
                  }}>
                     <Image src={"/assets/skills/vue.png"} width={64} height={64} alt="/" blurDataURL='URL' placeholder='blur' loading='lazy' />{' '}
                     <Text weight={'semibold'} span size={'$lg'}>
                        VUE
                     </Text>
                  </Flex>
               </Card>
               <Card className='hover-scale' css={{
                  'padding': '1rem 1.5rem',
                  'borderRadius': '0.75rem',
                  'transitionDuration': '0.3s',
                  'boxShadow': '0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1)',
                  'transitionTimingFunction': 'cubic-bezier(.4,0,1,1)',
                  'cursor': 'pointer',
               }}>
                  <Flex align={'center'} css={{
                     gap: '$10'
                  }}>
                     <Image src={"/assets/skills/sql.png"} width={64} height={64} alt="/" blurDataURL='URL' placeholder='blur' loading='lazy' />{' '}
                     <Text weight={'semibold'} span size={'$lg'}>
                        SQL
                     </Text>
                  </Flex>
               </Card>
               <Card className='hover-scale' css={{
                  'padding': '1rem 1.5rem',
                  'borderRadius': '0.75rem',
                  'transitionDuration': '0.3s',
                  'boxShadow': '0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1)',
                  'transitionTimingFunction': 'cubic-bezier(.4,0,1,1)',
                  'cursor': 'pointer',
               }}>
                  <Flex align={'center'} css={{
                     gap: '$10'
                  }}>
                     <Image src={"/assets/skills/php.png"} width={64} height={64} alt="/" blurDataURL='URL' placeholder='blur' loading='lazy' />{' '}
                     <Text weight={'semibold'} span size={'$lg'}>
                        PHP
                     </Text>
                  </Flex>
               </Card>
               <Card className='hover-scale' css={{
                  'padding': '1rem 1.5rem',
                  'borderRadius': '0.75rem',
                  'transitionDuration': '0.3s',
                  'boxShadow': '0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1)',
                  'transitionTimingFunction': 'cubic-bezier(.4,0,1,1)',
                  'cursor': 'pointer',
               }}>
                  <Flex align={'center'} css={{
                     gap: '$10'
                  }}>
                     <Image src={"/assets/skills/laravel.png"} width={64} height={64} alt="/" blurDataURL='URL' placeholder='blur' loading='lazy' />{' '}
                     <Text weight={'semibold'} span size={'$lg'}>
                        LARAVEL
                     </Text>
                  </Flex>
               </Card>
               <Card className='hover-scale' css={{
                  'padding': '1rem 1.5rem',
                  'borderRadius': '0.75rem',
                  'transitionDuration': '0.3s',
                  'boxShadow': '0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1)',
                  'transitionTimingFunction': 'cubic-bezier(.4,0,1,1)',
                  'cursor': 'pointer',
               }}>
                  <Flex align={'center'} css={{
                     gap: '$10'
                  }}>
                     <Image src={"/assets/skills/nextjs.png"} width={64} height={64} alt="/" blurDataURL='URL' placeholder='blur' loading='lazy' />{' '}
                     <Text weight={'semibold'} span size={'$lg'}>
                        NEXT JS
                     </Text>
                  </Flex>
               </Card>
               <Card className='hover-scale' css={{
                  'padding': '1rem 1.5rem',
                  'borderRadius': '0.75rem',
                  'transitionDuration': '0.3s',
                  'boxShadow': '0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1)',
                  'transitionTimingFunction': 'cubic-bezier(.4,0,1,1)',
                  'cursor': 'pointer',
               }}>
                  <Flex align={'center'} css={{
                     gap: '$10'
                  }}>
                     <Image src={"/assets/skills/node.png"} width={64} height={64} alt="/" blurDataURL='URL' placeholder='blur' loading='lazy' />{' '}
                     <Text weight={'semibold'} span size={'$lg'}>
                        NODE
                     </Text>
                  </Flex>
               </Card>
               <Card className='hover-scale' css={{
                  'padding': '1rem 1.5rem',
                  'borderRadius': '0.75rem',
                  'transitionDuration': '0.3s',
                  'boxShadow': '0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1)',
                  'transitionTimingFunction': 'cubic-bezier(.4,0,1,1)',
                  'cursor': 'pointer',
               }}>
                  <Flex align={'center'} css={{
                     gap: '$10'
                  }}>
                     <Image src={"/assets/skills/mongo.png"} width={64} height={64} alt="/" blurDataURL='URL' placeholder='blur' loading='lazy' />{' '}
                     <Text weight={'semibold'} span size={'$lg'}>
                        MONGO
                     </Text>
                  </Flex>
               </Card>
               <Card className='hover-scale' css={{
                  'padding': '1rem 1.5rem',
                  'borderRadius': '0.75rem',
                  'transitionDuration': '0.3s',
                  'boxShadow': '0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1)',
                  'transitionTimingFunction': 'cubic-bezier(.4,0,1,1)',
                  'cursor': 'pointer',
               }}>
                  <Flex align={'center'} css={{
                     gap: '$10'
                  }}>
                     <Image src={"/assets/skills/github.png"} width={64} height={64} alt="/" blurDataURL='URL' placeholder='blur' loading='lazy' />{' '}
                     <Text weight={'semibold'} span size={'$lg'}>
                        GITHUB
                     </Text>
                  </Flex>
               </Card>
               <Card className='hover-scale' css={{
                  'padding': '1rem 1.5rem',
                  'borderRadius': '0.75rem',
                  'transitionDuration': '0.3s',
                  'boxShadow': '0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1)',
                  'transitionTimingFunction': 'cubic-bezier(.4,0,1,1)',
                  'cursor': 'pointer',
               }}>
                  <Flex align={'center'} css={{
                     gap: '$10'
                  }}>
                     <Image src={"/assets/skills/tailwind.png"} width={64} height={64} alt="/" blurDataURL='URL' placeholder='blur' loading='lazy' />{' '}
                     <Text weight={'semibold'} span size={'$lg'}>
                        TAILWIND
                     </Text>
                  </Flex>
               </Card>
               <Card className='hover-scale' css={{
                  'padding': '1rem 1.5rem',
                  'borderRadius': '0.75rem',
                  'transitionDuration': '0.3s',
                  'boxShadow': '0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1)',
                  'transitionTimingFunction': 'cubic-bezier(.4,0,1,1)',
                  'cursor': 'pointer',
               }}>
                  <Flex align={'center'} css={{
                     gap: '$8'
                  }}>
                     <Image src={"/assets/skills/typescript.png"} width={88} height={64} alt="/" blurDataURL='URL' placeholder='blur' loading='lazy' />{' '}
                     <Text weight={'semibold'} span size={'$lg'}>
                        TYPESCRIPT
                     </Text>
                  </Flex>
               </Card>
               <Card className='hover-scale' css={{
                  'padding': '1rem 1.5rem',
                  'borderRadius': '0.75rem',
                  'transitionDuration': '0.3s',
                  'boxShadow': '0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1)',
                  'transitionTimingFunction': 'cubic-bezier(.4,0,1,1)',
                  'cursor': 'pointer',
               }}>
                  <Flex align={'center'} css={{
                     gap: '$10'
                  }}>
                     <Image src={"/assets/skills/antdesign.png"} width={64} height={64} alt="/" blurDataURL='URL' placeholder='blur' loading='lazy' />{' '}
                     <Text weight={'semibold'} span size={'$lg'}>
                        ANT DESIGN
                     </Text>
                  </Flex>
               </Card>
               <Card className='hover-scale' css={{
                  'padding': '1rem 1.5rem',
                  'borderRadius': '0.75rem',
                  'transitionDuration': '0.3s',
                  'boxShadow': '0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1)',
                  'transitionTimingFunction': 'cubic-bezier(.4,0,1,1)',
                  'cursor': 'pointer',
               }}>
                  <Flex align={'center'} css={{
                     gap: '$10'
                  }}>
                     <Image src={"/assets/skills/firebase.png"} width={64} height={64} alt="/" blurDataURL='URL' placeholder='blur' loading='lazy' />{' '}
                     <Text weight={'semibold'} span size={'$lg'}>
                        FIREBASE
                     </Text>
                  </Flex>
               </Card>
            </Grid.Container>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
