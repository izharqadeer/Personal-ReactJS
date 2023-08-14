import Project1 from './assets/project1.jpg';
import Project2 from './assets/project2.jpg';
import Project3 from './assets/project3.webp';
import Project4 from './assets/Project4.jpg';
import Project5 from './assets/project5.png';
import Project6 from './assets/project6.jpg';

import Testimonial1 from './assets/testimonial1.jpg';
import Testimonial2 from './assets/testimonial2.jpg';
import Testimonial3 from './assets/testimonial3.jpg';
import Testimonial4 from './assets/testimonial4.jpg';
import Testimonial5 from './assets/testimonial5.jpg';

export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  // {
  //   name: 'Services',
  //   path: 'services',
  // },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Resume',
    path: 'resume',
  },
  {
    name: 'Works',
    path: 'work',
  },
  // {
  //   name: 'Testimonials',
  //   path: 'testimonial',
  // },
  // {
  //   name: 'Pricing',
  //   path: 'pricing',
  // },
  {
    name: 'Blog',
    path: 'blog',
  },
  {
    name: 'Contact',
    path: 'contact',
  },
];

export const services = [
  {
    id: 1,
    name: 'Web Development',
    title: 'Web Design & Logo',
    description:
      'Web designers craft the overall vision & plan for a website layout. Professional logo development: Business, Company, or Personal.',
  },
  {
    id: 2,
    name: ' Apps Development ',
    title: ' iOS & Android ',
    description:
      'Design Software applications to run on mobile devices. Modern and mobile-ready application that will help you reach all of your marketing.',
  },
  {
    id: 3,
    name: ' Game Development ',
    title: ' Unity & Unreal Engine ',
    description:
      ' Creating games & describes the design, development and release of a game. Developing unique mobile android and ios games. ',
  },
  {
    id: 4,
    name: ' Advertising ',
    title: ' Google Ads ',
    description:
      ' Advertising services include: Google search result pages, gmails, YouTube and other websites participated in Google Ads program. ',
  },
  {
    id: 5,
    name: ' Music Writing ',
    title: ' Sound Track ',
    description:
      'Music copying, writing, creating, transcription and composition services.',
  },
];

export const skills = [
  {
    id: 1,
    name: 'C/C++',
    percentage: 90,
    description:
      'Good in C++ programming language with good experience in OOPs and DSA concepts and mostly using this language for Problem Solving.'
  },

  {
    id: 2,
    name: 'JavaScript',
    percentage: 70,
    description:
      'I prefer using Javascript for Web Development in both Frontend as well as Backend, because it is a high-performance language.'
  },

  {
    id: 3,
    name: 'ReactJS',
    percentage: 80,
    description:
      'I personally a big fan of this Javascript Library as it helps me to develop many complex User Interfaces (UI) with high speed applications.'
  },

  {
    id: 4,
    name: 'Machine Learning',
    percentage: 75,
    description:
      'Loves working in Machine Learning because using this Technology we can remove the gap between Machines & Humans and build an AI Future.'
  },

  {
    id: 5,
    name: 'VLSI Design',
    percentage: 80,
    description:
      `One of my Favourite Tech which I'll love working with, using which we can make Semiconductor Devices which can outwork Humans also.`
  },

  {
    id: 6,
    name: 'Digital Electronics',
    percentage: 85,
    description:
      `I enjoy working in Digital Electronics and have good command in Boolean Algebra, Logic Gates, Digital Filters, Flip-Flop, IC's etc.`
  },
];

export const projects = [
  {
    id: 1,
    img: Project1,
    category: 'Web Development',
    title: 'Portfolio Website',
    link: '#',
    description:
      'This is my Personal Portfolio Website which I made using Vite + ReactJS, and also used Libraries like Axios and Framer Motion.'
  },
  {
    id: 2,
    img: Project2,
    category: 'Machine Learning',
    title: 'Fake News Detection Model',
    link: 'https://github.com/izharqadeer/Fake_News_Detection_Model',
    description:
      'LSTM Algorithm is used to make this ML project which detect whether any news is Fake or True. Approx 50,000 dataset is used to train this algo. which gives approx 99% Accuracy.'
  },
  {
    id: 3,
    img: Project3,
    category: 'Electronics',
    title: 'IoT-Electricity Theft Detection',
    description:
      'Electricity Theft is a major problem and this Project helps to detect theft by Fishing, and generate an alert Msg. Components used are Arduino UNO, Node MCU, Firebase.'
  },
  {
    id: 4,
    img: Project5,
    category: 'Web Development',
    title: 'Travel & Tour Website',
    link: 'https://izharqadeer.github.io/Travel-tour-website/',
    description:
      'This website has an Awesome UI which I made using ReactJS, where we can plan exciting Holidays with min cost and also provide many more features related to Travel.'
  },
  {
    id: 5,
    img: Project4,
    category: 'Other',
    title: 'Sugar Rocket',
    description:
      'Here we tried to make an Efficient and less Pollution Fuel for Rockets and for that we use Sugar (C12H22O11) and Potassium Nitrate (KNO3) in ratio 2:3.'
  },
  {
    id: 6,
    img: Project6,
    category: 'Web Development',
    title: 'Develpoment Phase',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
];

export const cv = [
  {
    id: 1,
    title: 'Bachelor of Technology (ECE)',
    subtitle: 'ABESIT, Ghaziabad',
    date: '2019 - 2023',
    description:
      'Graduated B.Tech in 2023 from ABESIT Ghaziabad, Affiliated to Dr. APJ Abdul Kalam Technical University Lucknow, Major- Electronics and Communication (ECE) with overall 8.5 CGPA - First Division with Distinction.',
    category: 'education',
  },

  {
    id: 2,
    title: 'Intermediate',
    subtitle: 'DAV Academy',
    date: '2016 - 2018',
    description:
      'Passed Senior Secondary in 2018 from DAV Academy Tanda, Distt. Ambedkar Nagar, with overall 81.20% and 79.33% in PCM.',
    category: 'education',
  },

  {
    id: 3,
    title: 'High School',
    subtitle: 'Radiant Academy',
    date: '2014 - 2016',
    description:
      'Passed High School in 2016 from Radiant Central Academy Jalalpur, Distt. Ambedkar Nagar with overall 81.70%.',
    category: 'education',
  },              

  {
    id: 4,
    title: 'Web Developer',
    subtitle: 'ReactJS',
    date: '2023 - PRESENT',
    description:
      'Have a rich experience with this famous Javascript Library and using this I made some awesome websites, even this Web Application is made using React and I also made 5 other Web Applications using ReactJS.',
    category: 'experience',
  },

  {
    id: 5,
    title: 'Electronics Engineer',
    subtitle: 'Student',
    date: '2020 - 2023',
    description:
      'Completed Major in ECE, while making some real life problem solving Projects like IoT based Electricity Theft Detection and many more.',
    category: 'experience',
  },

  {
    id: 6,
    title: 'C/C++',
    subtitle: 'OOPs / DSA',
    date: '2020 - 2022',
    description:
      'Solved more than 100s of DSA problem in Leetcode and Codechef using C++ and also have a good experience working with OOPs.',
    category: 'experience',
  },
];

export const testimonials = [
  {
    id: 1,
    img: Testimonial1,
    name: 'Barbara Wilson',
    author: 'CEO Company',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    img: Testimonial2,
    name: 'Charlie Smith',
    author: 'Designer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    img: Testimonial3,
    name: 'Roy Wang',
    author: 'Manager GYM',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 4,
    img: Testimonial4,
    name: 'Jennifer Smith',
    author: 'CEO & Founder',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 5,
    img: Testimonial5,
    name: 'Paul Freeman',
    author: 'Photographer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];
