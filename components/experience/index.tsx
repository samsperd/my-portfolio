import {Card, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Experience = () => {
   return (
      <>
         <Box
            css={{
               px: '$6',
               pb: '$14',
            }}
         >
            <Flex
               direction={'column'}
               justify={'center'}
               align={'center'}
               css={{
                  pt: '$20',
               }}
            >
               <Text span css={{color: '$blue600'}}>
                  Work Experience
               </Text>
               <Text h3>Fullstack Developer</Text>
               <Text
                  span
                  css={{
                     maxWidth: '800px',
                     color: '$accents8',
                     textAlign: 'center',
                  }}
               >
                  The following informaation are tiles of my work experiences;
                  this excludes freelancing projects I have embarked on in my
                  tech career.
               </Text>
            </Flex>
            <Flex
               align={'center'}
               justify={'center'}
               wrap={'wrap'}
               css={{
                  gap: '1rem',
                  pt: '$14',
               }}
            >
               <Card css={{mw: '500px'}}>
                  <Card.Body css={{ gap: "$5"}}>
                     <Flex css={{gap: '0.5rem'}}>
                        <BoxIcon />
                        <Flex direction={'column'}>
                           {/* <Text h5>Founder & Software Developer</Text>
                           <Text h6>- ChatGPT Speechifier (Text-to-Speech) Chrome Extension </Text> */}

                           <Text h5>ChatGPT Speechifier (Text-to-Speech) Chrome Extension - Saas</Text>
                           <Text h6>- Founder & Software Developer</Text>
                           
                           <Text span css={{ 
                              color: '$accents7'
                           }}> June 2023 - Present </Text>
                           <Text span>
                              <li>Developed a Chrome extension called ChatGPT Speechifier that enhances the ChatGPT experience by converting the chat (text) responses into speech.</li>
                              <li>Implemented the extension using JavaScript, HTML, and CSS, leveraging the Chrome Extension API for integration and functionality.</li>
                              <li>{`Enabled users to listen to ChatGPT's text responses with a single click, improving accessibility and user experience.`}</li>
                              <li>Featured on Chrome Web Store as a recommended Chrome extension for ChatGPT users.</li>
                              <li>Received positive feedback from users for the added convenience and usability of the extension.</li>
                           </Text>
                        </Flex>
                     </Flex>
                        <Divider />
                        <Flex direction={'row'} style={{
                           gap: '8px',
                        }}>
                           <Text span>Stack: </Text>
                           <Card css={{
                              borderRadius: '$pill',
                              width: 'auto',
                              cursor: 'pointer',
                              padding: '$2 $4',
                              
                              '@dark': {
                                 backgroundColor: '$accents2'
                              },
                              '@light': {
                                 'backgroundColor': '$accents7'
                              }
                           }}>
                              <Text small css={{
                                 fontWeight: '$bold',

                                 '@light': {
                                    'color': '$accents0 !important'
                                 },
                              }}>Vanilla JavaScript</Text>
                              
                           </Card>
                        </Flex>
                  </Card.Body>
               </Card>
               <Card css={{mw: '500px'}}>
                  <Card.Body css={{ gap: "$5"}}>
                     <Flex css={{gap: '0.5rem'}}>
                        <BoxIcon />
                        <Flex direction={'column'}>
                           {/* <Text h5>JavaScript Developer (Contract)</Text>
                           <Text h6>- Future AI Wiki Company, India </Text> */}

                           <Text h5>Future AI Wiki Company - Delhi, India </Text>
                           <Text h6>- JavaScript Developer (Contract)</Text>
                           
                           <Text span css={{ 
                              color: '$accents7'
                           }}> June 2023 - July 2023 </Text>
                           <Text span>
                              <li>Contract Chrome Extension Developer for the Future Wiki AI browser extension that enhances the functionality of the ChatGPT website.</li>
                              <li>Responsible for DOM manipulation on the ChatGPT website using the extension, ensuring smooth integration and seamless User Experience.</li>
                              <li>Modifying the user interface (UI) and user experience (UX) of the extension, focusing on user-friendly design and intuitive navigation.</li>
                              <li>Identified and resolved bugs and technical issues related to the extension to improve its performance and stability.</li>
                              <li>Collaborated with the development team to implement new features and enhance the overall functionality of the extension.</li>
                              <li>Worked independently, managing project timelines and delivering high-quality results within deadlines.</li>
                              <li>Actively participated in team meetings, discussing ideas, providing suggestions, and contributing to the improvement of the extension.</li>
                           </Text>
                        </Flex>
                     </Flex>
                        <Divider />
                        <Flex direction={'row'} style={{
                           gap: '8px',
                        }}>
                           <Text span>Stack: </Text>
                           <Card css={{
                              borderRadius: '$pill',
                              width: 'auto',
                              cursor: 'pointer',
                              padding: '$2 $4',
                              
                              '@dark': {
                                 backgroundColor: '$accents2'
                              },
                              '@light': {
                                 'backgroundColor': '$accents7'
                              }
                           }}>
                              <Text small css={{
                                 fontWeight: '$bold',

                                 '@light': {
                                    'color': '$accents0 !important'
                                 },
                              }}>Vanilla JavaScript</Text>
                              
                           </Card>
                           <Card css={{
                              borderRadius: '$pill',
                              width: 'auto',
                              cursor: 'pointer',
                              padding: '$2 $4',
                              
                              '@dark': {
                                 backgroundColor: '$accents2'
                              },
                              '@light': {
                                 'backgroundColor': '$accents7'
                              }
                           }}>
                              <Text small css={{
                                 fontWeight: '$bold',

                                 '@light': {
                                    'color': '$accents0 !important'
                                 },
                              }}>Firebase</Text>
                              
                           </Card>
                           <Card css={{
                              borderRadius: '$pill',
                              width: 'auto',
                              cursor: 'pointer',
                              padding: '$2 $4',
                              
                              '@dark': {
                                 backgroundColor: '$accents2'
                              },
                              '@light': {
                                 'backgroundColor': '$accents7'
                              }
                           }}>
                              <Text small css={{
                                 fontWeight: '$bold',

                                 '@light': {
                                    'color': '$accents0 !important'
                                 },
                              }}>Node JS</Text>
                              
                           </Card>
                        </Flex>
                  </Card.Body>
               </Card>
               <Card css={{mw: '500px'}}>
                  <Card.Body css={{ gap: "$5"}}>
                     <Flex css={{gap: '0.5rem'}}>
                        <BoxIcon />
                        <Flex direction={'column'}>
                           {/* <Text h5>Electrical Engineering Intern</Text>
                           <Text h6>Manamuz Electric LTD - Enugu</Text> */}

                           <Text h5>Manamuz Electric LTD - Enugu, Nigeria </Text>
                           <Text h6>- Electrical Engineering Intern</Text>
                           
                           <Text span css={{ 
                              color: '$accents7'
                           }}> June 2021 - November 2021 </Text>
                           <Text span>
                              <li>Designing and Installation of Solar Powered Systems in residential homes, private firms and businesses.</li>
                              <li>Sales, Maintenance and Repairs of solar equipments.</li>
                           </Text>
                        </Flex>
                     </Flex>
                        {/* <Divider />
                        <Flex direction={'row'} style={{
                           gap: '8px',
                        }}>
                           <Text span>Stack: </Text>
                           <Card css={{
                              borderRadius: '$pill',
                              width: 'auto',
                              cursor: 'pointer',
                              padding: '$2 $4',
                              
                              '@dark': {
                                 backgroundColor: '$accents2'
                              },
                              '@light': {
                                 'backgroundColor': '$accents7'
                              }
                           }}>
                              <Text small css={{
                                 fontWeight: '$bold',

                                 '@light': {
                                    'color': '$accents0 !important'
                                 },
                              }}>Vanilla JavaScript</Text>
                              
                           </Card>
                        </Flex> */}
                  </Card.Body>
               </Card>
               <Card css={{mw: '500px'}}>
                  <Card.Body css={{ gap: "$5"}}>
                     <Flex css={{gap: '0.5rem'}}>
                        <BoxIcon />
                        <Flex direction={'column'}>
                           {/* <Text h5>Electrical Engineering Intern</Text>
                           <Text h6>Manamuz Electric LTD - Enugu</Text> */}

                           <Text h5>Djinpod Enterprises - Uturu, Abia State </Text>
                           <Text h6>- Founder & Fullstack Developer</Text>
                           
                           <Text span css={{ 
                              color: '$accents7'
                           }}> October 2019 - April 2021 </Text>
                           <Text span>
                              <li>Modified the entire sections of the web application both the frontend and the backend for error debugging, site enhancements and feature updates.</li>
                              <li>Managed a team of 5 people from various backgrounds.</li>
                              <li>Created and coordinated the communication and promotion policy of the brand. Built and implemented a distribution request process for all restaurants in the university by using the platform.</li>
                           </Text>
                        </Flex>
                     </Flex>
                        <Divider />
                        <Flex direction={'row'} style={{
                           gap: '8px',
                        }}>
                           <Text span>Stack: </Text>
                           <Card css={{
                              borderRadius: '$pill',
                              width: 'auto',
                              cursor: 'pointer',
                              padding: '$2 $4',
                              
                              '@dark': {
                                 backgroundColor: '$accents2'
                              },
                              '@light': {
                                 'backgroundColor': '$accents7'
                              }
                           }}>
                              <Text small css={{
                                 fontWeight: '$bold',

                                 '@light': {
                                    'color': '$accents0 !important'
                                 },
                              }}>Laravel</Text>
                              
                           </Card>
                           <Card css={{
                              borderRadius: '$pill',
                              width: 'auto',
                              cursor: 'pointer',
                              padding: '$2 $4',
                              
                              '@dark': {
                                 backgroundColor: '$accents2'
                              },
                              '@light': {
                                 'backgroundColor': '$accents7'
                              }
                           }}>
                              <Text small css={{
                                 fontWeight: '$bold',

                                 '@light': {
                                    'color': '$accents0 !important'
                                 },
                              }}>React.js</Text>
                              
                           </Card>
                           <Card css={{
                              borderRadius: '$pill',
                              width: 'auto',
                              cursor: 'pointer',
                              padding: '$2 $4',
                              
                              '@dark': {
                                 backgroundColor: '$accents2'
                              },
                              '@light': {
                                 'backgroundColor': '$accents7'
                              }
                           }}>
                              <Text small css={{
                                 fontWeight: '$bold',

                                 '@light': {
                                    'color': '$accents0 !important'
                                 },
                              }}>Vue</Text>
                              
                           </Card>
                           <Card css={{
                              borderRadius: '$pill',
                              width: 'auto',
                              cursor: 'pointer',
                              padding: '$2 $4',
                              
                              '@dark': {
                                 backgroundColor: '$accents2'
                              },
                              '@light': {
                                 'backgroundColor': '$accents7'
                              }
                           }}>
                              <Text small css={{
                                 fontWeight: '$bold',

                                 '@light': {
                                    'color': '$accents0 !important'
                                 },
                              }}>MySQL</Text>
                              
                           </Card>
                        </Flex>
                  </Card.Body>
               </Card>
            </Flex>
         </Box>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
