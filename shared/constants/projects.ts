export const Projects = [
  {
    img: '/images/projects/brinecleanup.jpg',
    name: 'Brine Cleanup',
    url: 'http://brinecleanup.com/',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: ['web'],
    featured: false
  },
  {
    img: '/images/projects/carl.jpg',
    name: 'CARL SRM',
    url: 'http://carlresearch.org/',
    // tags: ['HTML', 'CSS', 'JavaScript'],
    // category: ['web', 'app', 'ui-ux'],
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: ['web'],
    featured: false
  },
  {
    img: '/images/projects/connekt.png',
    name: 'ConneKt',
    tags: ['Angular 8', 'Firebase'],
    category: ['web'],
    featured: false
  },
  {
    img: '/images/projects/daa.jpg',
    name: 'Directorate of Alumni Affairs',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    category: ['web'],
    featured: false
  },
  {
    img: '/images/projects/dr-jeewan.jpg',
    name: 'Dr. Jeewan Porfolio',
    url: 'https://harshgoel05.github.io/dr-jeewan-web/',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: ['web'],

    featured: false
  },
  {
    img: '/images/projects/goco.png',
    name: 'GoCo Tracker',
    url: 'https://gocotracker.herokuapp.com/',
    tags: ['Angular 8', 'NodeJS', 'Express', 'MongoDB'],
    category: ['web'],
    featured: false
  },
  {
    img: '/images/projects/hhs.png',
    name: 'Handholding Solution',
    url: 'https://handholdingsolution.com/',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: ['web'],
    featured: false
  },
  {
    img: '/images/projects/idy-dashboard.png',
    name: 'Idy Dashboards',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: ['web'],
    featured: false
  },
  {
    img: '/images/projects/inception_wave.jpg',
    name: 'Inception Wave',
    url: 'https://inceptionwave.in/',
    tags: ['Angular 8', 'NodeJS', 'Express', 'MongoDB'],
    featured: false
  },
  {
    img: '/images/projects/kzilla-xyz.png',
    name: 'KZILLA-XYZ',
    url: 'http://kzilla.xyz/',
    tags: ['Svelte', 'NodeJS', 'Express', 'MongoDB'],
    category: ['web'],
    featured: true
  },
  {
    img: '/images/projects/labelfuse.jpg',
    name: 'LabelFuse',
    url: 'https://www.labelfuse.com/',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: ['web'],
    featured: false
  },
  {
    img: '/images/projects/milan-20.jpg',
    name: "SRM MILAN'20",
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: ['web'],
    featured: false
  },
  {
    img: '/images/projects/mirate.jpg',
    name: 'Mirate',
    url: 'http://mirate.co.in/',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: ['web'],
    featured: false
  },
  {
    img: '/images/projects/portfolio_v1.jpg',
    name: 'Porfolio 1.0',
    url: 'https://harshgoel05.github.io/portfolio-v1/',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: ['web'],
    featured: false
  },
  {
    img: '/images/projects/recruitments-srmkzilla.png',
    name: 'Recruitments 2020',
    url: 'https://recruitments.srmkzilla.net/',
    tags: ['ReactJS', 'NodeJS', 'Express', 'MongoDB'],
    category: ['web'],

    featured: true
  },
  {
    img: '/images/projects/social_dukan.jpg',
    name: 'Social Dukan',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: ['web'],
    featured: false
  },
  {
    img: '/images/projects/srm_sce.jpg',
    name: 'SRM Sociey of Civil Engineers',
    url: 'http://srmsce.in/',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: ['web'],
    featured: false
  },
  {
    img: '/images/projects/srmiec-2020.png',
    name: 'SRM Indian Energy Conference 2020',
    url: 'http://srmiec.co.in/',
    category: ['web', 'ui-ux'],
    featured: true
  },
  {
    img: '/images/projects/workmailcommunity.png',
    name: 'Work Mail Community',
    url: 'http://workmailcommunity.in/',
    featured: true
  },
  {
    img: '/images/projects/insolvers.png',
    name: 'Insolvers',
    url: 'https://insolvers.herokuapp.com/',
    tags: ['React', 'React Native', 'NodeJS', 'Express', 'MongoDB'],
    category: ['web', 'app', 'ui-ux'],
    featured: true
  },
  {
    img: '/images/projects/jack.png',
    name: 'Jack',
    url: 'https://community.srmkzilla.net/',
    tags: ['NodeJS', 'Discord', 'Typescript'],
    category: ['discord'],
    featured: true
  }
];

export type Project = {
  img: string;
  name: string;
  url?: string;
  featured?: boolean;
};
