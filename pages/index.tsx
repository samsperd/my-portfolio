import type {NextPage} from 'next';
import {Nav} from '../components/navbar/navbar';
import {Layout} from '../components/navbar/layout';
import {Hero} from '../components/hero';
import {Box} from '../components/styles/box';
import {Features2} from '../components/features2';
import {Testimonials} from '../components/tesminonials';
import {Statistics} from '../components/statistics';
import {Faq} from '../components/faq';
import {Trial} from '../components/trial';
import {Footer} from '../components/footer';
import { Skills } from '../components/skills';
import { Experience } from '../components/experience';
import { About } from '../components/about';
import { Projects } from '../components/projects';

const Home: NextPage = () => {
   return (
      <Layout>
         <Nav />
         <Box as="main">
            <Hero />
            <Skills />
            <About />
            <Features2 />
            <Experience />
            <Testimonials />
            <Statistics />
            <Projects />
            <Faq />
            <Trial />
            <Footer />
         </Box>
      </Layout>
   );
};

export default Home;
