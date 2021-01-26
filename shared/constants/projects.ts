export const Projects = [
  {
    img: '/images/projects/brinecleanup.jpg',
    name: 'Brine Cleanup',
    url: 'http://brinecleanup.com/',
    featured: false
  },
  {
    img: '/images/projects/carl.jpg',
    name: 'CARL SRM',
    url: 'http://carlresearch.org/',
    featured: false
  },
  {
    img: '/images/projects/connekt.png',
    name: 'ConneKt',
    featured: false
  },
  {
    img: '/images/projects/daa.jpg',
    name: 'Directorate of Alumni Affairs',
    featured: false
  },
  {
    img: '/images/projects/dr-jeewan.jpg',
    name: 'Dr. Jeewan Porfolio',
    url: 'https://harshgoel05.github.io/dr-jeewan-web/',
    featured: false
  },
  {
    img: '/images/projects/goco.png',
    name: 'GoCo Tracker',
    url: 'https://gocotracker.herokuapp.com/',
    featured: false
  },
  {
    img: '/images/projects/hhs.png',
    name: 'Handholding Solution',
    url: 'https://handholdingsolution.com/',
    featured: false
  },
  {
    img: '/images/projects/idy-dashboard.png',
    name: 'Idy Dashboards',
    featured: false
  },
  {
    img: '/images/projects/inception_wave.jpg',
    name: 'Inception Wave',
    url: 'https://inceptionwave.in/',
    featured: false
  },
  {
    img: '/images/projects/kzilla-xyz.png',
    name: 'KZILLA-XYZ',
    url: 'http://kzilla.xyz/',
    featured: true
  },
  {
    img: '/images/projects/labelfuse.jpg',
    name: 'LabelFuse',
    url: 'https://www.labelfuse.com/',
    featured: false
  },
  {
    img: '/images/projects/milan-20.jpg',
    name: "SRM MILAN'20",
    featured: false
  },
  {
    img: '/images/projects/mirate.jpg',
    name: 'Mirate',
    url: 'http://mirate.co.in/',
    featured: false
  },
  {
    img: '/images/projects/portfolio_v1.jpg',
    name: 'Porfolio 1.0',
    url: 'https://harshgoel05.github.io/portfolio-v1/',
    featured: false
  },
  {
    img: '/images/projects/recruitments-srmkzilla.png',
    name: 'Recruitments 2020',
    url: 'https://recruitments.srmkzilla.net/',
    featured: true
  },
  {
    img: '/images/projects/social_dukan.jpg',
    name: 'Social Dukan',
    featured: false
  },
  {
    img: '/images/projects/srm_sce.jpg',
    name: 'SRM Sociey of Civil Engineers',
    url: 'http://srmsce.in/',
    featured: false
  },
  {
    img: '/images/projects/srmiec-2020.png',
    name: 'SRM Indian Energy Conference 2020',
    url: 'http://srmiec.co.in/',
    featured: true
  },
  {
    img: '/images/projects/workmailcommunity.png',
    name: 'Work Mail Community',
    url: 'http://workmailcommunity.in/',
    featured: true
  }
];

export type Project = {
  img: string;
  name: string;
  url?: string;
  featured?: boolean;
};
