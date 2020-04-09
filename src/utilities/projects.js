export const MAGNITY_APP = {
  name: 'Magnity Application',
  duration: '2018 - 2019',
  stackColors: ['#F6CE82', '#343057', '#6A6A8A','#FFFFFF'],
  breadcrumbs: [{
    link: '/',
    title: 'Erika Kishi'
  }, {
    link: '/#projects',
    title: 'Projects'
  }],
  languages: ['PHP','JavaScript','HTML5','CSS3'],
  intro: {
    heading: 'Personalised Digest',
    subheading: 'A Brief Overview.',
    text: [
      '<a href="//www.magnity.io" target="_blank">Magnity</a> was a project where I was involved in the full life cycle of the web application including design, front-end development, back-end development, cloud architecture and deployment.',
      'After the initial decision to use Laravel was made, many of the other development/architectural decisions fell into place. There were many opportunities to use new technologies, new methodologies and refine development processes to add to my pool of skills.',
      'I believe one of the biggest challenges/learning curves with this project was architecting and deploying Magnity into an AWS architected cloud environment. The decision to use AWS was made because of the sheer variety and reliability of services available. It also provided a streamlined set up for the specific type of architecture Magnity which was offloading process intensive jobs via a message queue system to a different environment from the user facing web environment within a secure VPC.',
      'Through research and testing, I was able to architect and implement the web & worker tier using many of the AWS services. It was rewarding to learn not only how to implement these services, but how they work together as a cohesive unit, how to optimise each service and - just like most aspects of web development - the nuances that were not initially apparent.',
      'The web application itself required a lot of API integration, webhook integration, tasks scheduling and a strong front-end, via Vue.js, to provide the appropriate interface to build such a custom digest.'
    ],
    tags: [
      'Back-end Development',
      'Front-end Development',
      'AWS Architecture',
      'Design',
      'Webhooks',
      'API Integration',
      'Database',
      'Version Control',
      'Cron Jobs',
      'Queue',
      'oAuth',
    ],
    icons: [
      'Laravel',
      'Vue.js', 
      'Sketch', 
      'Sass', 
      'Bootstrap 4',
      'Git',
      'Google Analytics',
      'BEM', 
      'Bugsnag', 
      'Intercom',
      'MySQL',
      'Amazon Web Services', 
      'Redis',
      'Stripe', 
      'Mailgun',
      'Postman',
      'Unsplash',
      'TinyPng',
      'Ngrok'
    ]
  },
  development: {
    heading: 'Development',
    subheading: 'A deeper look in.',
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    ],
    facets: [
      {
        icons: ['Laravel'],
        title: 'Laravel',
        text: [
          'Laravel was an easy choice for Magnity as it provided the following:',
          '<ul><li>Logical implementation of the MVC pattern.</li><li>A vast pool of libraries, incredible documentation + community, which was a major plus when it came to deploying a Laravel application in AWS Elastic Beanstalk.</li><li>Streamlined non-business logic specific functionality, for example, integrating with Stripe as a payment gateway via Cashier, authentication etc...</li><li>Easy use of webpack and compilation of front-end assets via Laravel Mix.</li></ul>',
          'I was also able to improve my skills with task scheduling and working with a queue system within the Laravel ecosystem as this was a big focus within the project.'
        ]
      },
      {
        icons: ['Sass'],
        title: 'Sass',
        text: [
          'Sass is already ready-to-use in Laravel & compiled via Laravel-mix.',
          'It is a stylesheet language that helped implement organisation & structure to Magnity’s CSS code. In combination with the BEM methodology, it was also easy to maintain consistency and reusability throughout.'
        ]
      },
      {
        icons: ['Vue.js'],
        title: 'Vue.js',
        text: [
          'Vue was the front-end framework that shined in Magnity’s digest builder. Using a JavaScript framework meant that we could achieve what was set out with the digest builder design. This being a highly interactive experience that served and updated data asynchronously via an organised set of components.',
          'We also had to integrate with a few existing libraries for key functionality that meant we did not have to reinvent the wheel via npm and then built via webpack. This included a library that allowed a user to move a vue component around the page (dragging), a wysiwyg and also integration with the Unsplash API so users can search the Unsplash pool of images.',
          'A lot of the challenges with this phase of development involved the interaction of components within a page, as they are free to move wherever within the page container (with content such as text, graphs, metrics) while simultaneously asynchronously updating information in the back-end. There was also significant challenges surrounding integrating a wysiwyg for the text component as it also included uploading files, images, and adding intercom tags, while being a secure/safe html editor.'
        ]
      },
      {
        icons: ['Intercom', 'Google Analytics', 'Bugsnag', 'Stripe'],
        title: 'API Integration & Webhooks',
        text: [
          'Magnity required integration with a few API’s including Intercom, Stripe & Bugsnag. Whether we required data or pushed data to other services, API integration was at the forefront of building Magnity.',
          'Intercom was the most important integration as user’s set up their Magnity account through their Intercom account, requiring authentication handling and a large amount of Intercom data processing.'
        ]
      },
      {
        icons: ['PDF'],
        title: 'PDF Generation',
        text: [
          'Magnity required the ability for published digests to be exportable as PDF’s.',
          'The biggest challenge with PDF generation is the translation of the web CSS into PDF friendly CSS - which is very restricted compared to the latter. This required quite a bit of creativity on my end.',
          'The toughest translations were around positioning of the text, metric and chart elements as per the digests design. Another challenge was using images as backgrounds at the correct scale and again position because CSS such as background-position does not translate properly on PDF.'
        ]
      },
      {
        icons: ['Git'],
        title: 'Version Control',
        text: [
          'As for most projects, Magnity required a version control system for their code base - hence the use of Git.',
          'We researched solutions that others have used for managing code bases via Git & was able to architect one that worked for Magnity.',
          'This was important when it came to the web/worker environment structure as it influenced the ease of managing each tiers code base.',
        ]
      }
    ]
  },
  cloud: {
    heading: 'AWS Solutions',
    subheading: 'A deeper look in.',
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    ],
    facets: [
      {
        icons: ['AWS ElasticBeanstalk', 'AWS EC2'],
        title: 'Elastic Beanstalk',
        text: [
          'Elastic Beanstalk was chosen because Magnity required a Platform as a Service that provided streamlined deployment of cloud architectural components (via EB CLI) and allowed for a web / queue / worker infrastructure. This also gave Magnity straightforward integration with a vast range of AWS services that are available.',
          'Provisioning an Elastic Beanstalk environment automatically sets up EC2 instances within a VPC, with auto scaling while utilising a load balancer and a working daemon for the worker tier.',
          'The EB CLI provided an intuitive command line that uploaded the most recent version of your git repository and re-deploys all your EC2 instances with the updated application code.',
        ]
      },
      {
        icons: ['AWS VPC'],
        title: 'Virtual Private Cloud',
        text: [
          'Setting up a VPC correctly was vital in meeting Magnity’s security specifications. In its most basic terms, a VPC allowed us to set up a framework where we control the organisation and traffic between Magnity’s components/services and the world.',
          'We utilised AWS’s VPC service by setting up an ecosystem made up of subnets, gateways, routes, security groups, network ACLs, etc... to build a solid, secure landscape for Magnity and its data to be deployed in.'
        ]
      },
      {
        icons: ['AWS RDS', 'MySQL'],
        title: 'Relational Database Service',
        text: [
          'We utilised AWS RDS for Magnity’s relational data storage using MySQL. It is very straightforward and well-documented to set up securely within a VPC, offers great recovery options, regular backup of data and fallback mechanisms with, for example, deployment in multiple availability zones within our selected region.'
        ]
      },
      {
        icons: ['AWS ElastiCache', 'Redis'],
        title: 'ElastiCache',
        text: [
          'Magnity required integration with a few API’s including Intercom, Stripe & Bugsnag. Whether we required data or pushed data to other services, API integration was at the forefront of building Magnity.',
          'Intercom was the most important integration as user’s set up their Magnity account through their Intercom account, requiring authentication handling and a large amount of Intercom data processing.'
        ]
      },
      {
        icons: ['AWS SQS'],
        title: 'Simple Queue Service (SQS)',
        text: [
          'Decoupling the web application from resource intensive jobs was pivotal in not hammering the application server, which would ultimately improve the user’s experience. AWS SQS is a message queue service that was pivotal in connecting the two environments. The web environment sends a message to the given SQS queue, who makes it available for the worker environment to pick up and process.',
          'The way that SQS works differs from Laravel’s standard queue job flow, and therefore required a bit of work to smooth out the nuances with integrating SQS with Laravle. Magnity also used a non FIFO queue (First In First Out), which created a few difficult scenarios especially surrounding mass import of data.'
        ]
      },
      {
        icons: ['AWS S3'],
        title: 'Simple Storage Service (S3)',
        text: [
          'The digest builder allows users to upload high quality images of their own and from Unsplash and therefore storage of assets was an important aspect we had to consider. This was easily fulfilled by AWS S3. Using S3 as part of the Magnity ecosystem was generally straightforward as the integration with the service has been streamlined by Laravel.',
          'We did our best to implement best practices to get the most out of S3. The most important being the naming pattern of your files. This is due to S3’s high level design concepts around how object keys are mapped and thus partitioned. By using a somewhat counter-intuitive naming system i.e. an “anti-pattern”, we could take advantage of S3’s way of looking up objects and in hope to reduce the request rate on a single partition.'
        ]
      },
      {
        icons: ['AWS Cloudwatch'],
        title: 'Cloudfront',
        text: [
          'AWS Cloudfront is a Content Delivery Network (CDN) which proxies & caches data at edge locations as close to the user as possible.',
          'This was a better alternative to serving content via S3 - which was never intended to be a direct web host. This is because if your intended users aren’t located in one area of the world, you can’t really guess where you should put your S3 bucket (as the closer the user is to the storage of data, the reduced latency). Therefore, by using AWS Cloudfront, images for Magnity will be served a lot faster and from closer locations to the user. It also doesn’t expose your S3 bucket in the URL which is a bonus.'
        ]
      }
    ]
  },
  figures: [
    {
      heading: 'Digests Dashboard',
      subheading: 'Dashboard of user’s digests, published, live and archived.',
      path: '/images/Projects/FusionEntertainment/001_w-1000px_compressed.png',
    },
    {
      heading: 'Digest Builder - Audience',
      subheading: 'Select the target audience for a digest via Intercom segments and tags.',
      path: '/images/Projects/MagnityApp/001_w-1000px_compressed.png',
    },
    {
      heading: 'Digest Builder - Design',
      subheading: 'Design custom digests with text, metrics and graphs based on each target audience user’s event data',
      path: '/images/Projects/FusionEntertainment/001_w-1000px_compressed.png',
    },
    {
      heading: 'Digest Builder - Audience',
      subheading: 'Select the target audience for a digest via Intercom segments and tags.',
      path: '/images/Projects/MagnityApp/001_w-1000px_compressed.png',
    },
  ]
}

export const MAGNITY_WEB = {
  name: 'Magnity Marketing Website',
  duration: '2019',
  stackColors: ['#EB457B', '#343057', '#6A3FEB','#FFFFFF'],
  breadcrumbs: [{
    link: '/',
    title: 'Erika Kishi'
  }, {
    link: '/#projects',
    title: 'Projects'
  }],
  languages: ['PHP','JavaScript','HTML5','CSS3'],
  intro: {
    heading: 'Marketing Digests for Intercom',
    subheading: 'A Brief Overview.',
    text: [
      'This <a href="//www.magnity.io" target="_blank">project</a> was another that I was responsible for the whole process - design, development and deployment.',
      'I was able to develop my design skills further with this project and improve my knowledge and familiarity with Sketch. Coming from a background of Adobe suite, I found Sketch very intuitive and allowed for quicker prototyping and design for websites more than say Adobe Fireworks.',
      'The main aims of the website was to communicate the product clearly and succinctly, have in-built best practices for SEO and fast loading speeds. This meant a variety of solutions such as using semantic html tags, images with meaningful alternative test, loading page on scroll, loading images when being viewed etc… This meant a combination of thoughtful layout, smart use of loading methods, use of javascript, and using CDN’s to use cache images.'
    ],
    tags: [
      'Back-end Development',
      'Front-end Development',
      'AWS Architecture',
      'Design',
      'SEO',
      'Version Control',
    ],
    icons: [
      'Laravel',
      'Google Analytics',
      'Amazon Web Services', 
      'Sass', 
      'Git',
      'Sketch', 
      'BEM',
      'Bootstrap 4',
      'Google Page Speed Insights'
    ]
  },
  development: {
    heading: 'Development',
    subheading: 'A deeper look in.',
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    ],
    facets: [
      {
        icons: ['Google Analytics'],
        title: 'Search Engine Optimization',
        text: [
          'To assist in appearing in organic, unpaid search engine ranking, we implemented a variety of best practises for organic SEO. This is so the website had a good foundation which at its base appeared favourable to search engine bots.',
          'This included adhering to known best practices in regards to page titles and descriptions, using meaningful URL’s, ensuring meaningful image alt tags are added, and having an XML sitemap available.',
        ]
      },
      {
        icons: ['Google Page Speed Insights', 'JavaScript'],
        title: 'Optimize Site Loading',
        text: [
          'With marketing websites, generally, the faster a page loads, the more likely the user will stay on the page and overall have a better experience with the website. Therefore it was important to actively increase and improve site loading for Magnity’s marketing website.',
          'With the use of Google Page Speed Insights, we were able to isolate and improve facets of how the page loaded. This was mainly done through compression of loaded files and by implementing functionality that loaded content asynchronously, as opposed to all at once.',
          'A good example of this is image loading, where the website initially loads a tiny, blurry, thumbnail version of an image. Then when the image is within the viewport, the full image is loaded asynchronously.'
        ]
      }
    ]
  },
  figures: [
    {
      heading: 'Digests Dashboard',
      subheading: 'Dashboard of user’s digests, published, live and archived.',
      path: '/images/Projects/FusionEntertainment/001_w-1000px_compressed.png',
    },
    {
      heading: 'Digest Builder - Audience',
      subheading: 'Select the target audience for a digest via Intercom segments and tags.',
      path: '/images/Projects/MagnityApp/001_w-1000px_compressed.png',
    },
    {
      heading: 'Digest Builder - Design',
      subheading: 'Design custom digests with text, metrics and graphs based on each target audience user’s event data',
      path: '/images/Projects/FusionEntertainment/001_w-1000px_compressed.png',
    },
    {
      heading: 'Digest Builder - Audience',
      subheading: 'Select the target audience for a digest via Intercom segments and tags.',
      path: '/images/Projects/MagnityApp/001_w-1000px_compressed.png',
    },
  ]
}

export const BOARDINGWARE = {
  name: 'Boardingware Web Application',
  duration: '2017 - 2018',
  stackColors: ['#1C4891', '#091440', '#D9E1EB', '#FFFFFF'],
  breadcrumbs: [{
    link: '/',
    title: 'Erika Kishi'
  }, {
    link: '/#projects',
    title: 'Projects'
  }],
  languages: ['JavaScript','HTML5','CSS3'],
  intro: {
    heading: 'The New Standard in Boarding',
    subheading: 'A Brief Overview.',
    text: [
      '<a href="//www.boardingware.com" target="_blank">Boardingware</a> is a boarding school management system that spans across multiple platforms and applications. I was contracted to implement a major redesign of their web application. This mainly involved building html structure via Jade templates, CSS and a touch of javascript for their existing platform.',
      'The main challenge with this project was organisation of the CSS. CSS can easily get messy and Boardingware wanted a CSS system that was structured in a way that can be easily maintained and built upon. The way this problem was tackled was two-fold, one, standardising naming conventions throughout the HTML (BEM), and two, structuring and separating files logically.',
      'Another enjoyable challenge was making the web application responsive and available across major browsers. The HTML structure was a lot more complicated than the standard website and thus pushed my skills further so that an elegant solution could be reached.',
      'Contracted to implement a major re-design of their web application. This involved pure front-end development: translating designs into responsive HTML (via Jade templates), CSS (using Sass as the style sheet language and Bootstrap), integrating JavaScript libraries and using BEM methodology to manage their styling system.'
    ],
    tags: [
      'Front-end Development',
      'Version Control',
    ],
    icons: [
      'JADE',
      'Sass', 
      'Git',
      'BEM',
      'Bootstrap 4',
    ]
  },
  development: {
    heading: 'Development',
    subheading: 'A deeper look in.',
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    ],
    facets: [
      {
        icons: ['Sass', 'Boostrap 4'],
        title: 'Sass/Bootstrap',
        text: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus viverra vitae congue eu consequat ac felis. Eget nunc lobortis mattis aliquam.',
          'Ut sem nulla pharetra diam sit amet nisl. Tellus orci ac auctor augue mauris augue neque. Morbi non arcu risus quis varius quam. Varius vel pharetra vel turpis nunc eget lorem dolor. In dictum non consectetur a. ',
          'Massa tincidunt dui ut ornare lectus sit amet. Ornare arcu odio ut sem nulla pharetra diam sit amet. Dictum non consectetur a erat nam at lectus urna. Elementum pulvinar etiam non quam lacus suspendisse. Congue mauris rhoncus aenean vel elit scelerisque. Congue mauris rhoncus aenean vel. Amet est placerat in egestas erat.'
        ]
      },
      {
        icons: ['BEM'],
        title: 'Block Element Modifier',
        text: [
          'Interdum varius sit amet mattis. Feugiat sed lectus vestibulum mattis ullamcorper. Sagittis vitae et leo duis ut. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Tincidunt ornare massa eget egestas purus. In aliquam sem fringilla ut morbi tincidunt. Volutpat commodo sed egestas egestas fringilla phasellus faucibus.',
          'Tristique senectus et netus et malesuada fames ac turpis egestas. Orci sagittis eu volutpat odio facilisis mauris sit amet. Sed elementum tempus egestas sed. '
        ]
      }
    ]
  },
  figures: [
    {
      heading: 'Digests Dashboard',
      subheading: 'Dashboard of user’s digests, published, live and archived.',
      path: '/images/Projects/FusionEntertainment/001_w-1000px_compressed.png',
    },
    {
      heading: 'Digest Builder - Audience',
      subheading: 'Select the target audience for a digest via Intercom segments and tags.',
      path: '/images/Projects/MagnityApp/001_w-1000px_compressed.png',
    },
    {
      heading: 'Digest Builder - Design',
      subheading: 'Design custom digests with text, metrics and graphs based on each target audience user’s event data',
      path: '/images/Projects/FusionEntertainment/001_w-1000px_compressed.png',
    },
    {
      heading: 'Digest Builder - Audience',
      subheading: 'Select the target audience for a digest via Intercom segments and tags.',
      path: '/images/Projects/MagnityApp/001_w-1000px_compressed.png',
    },
  ]
}

export const FUSION = {
  name: 'Fusion Entertainment Website',
  duration: '2019',
  stackColors: ['#80FF06', '#2779BC', '#000000','#FFFFFF'],
  breadcrumbs: [{
    link: '/',
    title: 'Erika Kishi'
  }, {
    link: '/#projects',
    title: 'Projects'
  }],
  languages: ['PHP'],
  intro: {
    heading: 'Marine Entertainment',
    subheading: 'A Brief Overview.',
    text: [
      'Fusion Entertainment are leaders in creating audio equipment such as speakers, subwoofers and amplifiers for Marine and Lifestyle entertainment. I was contracted to assist their team in building the marketing teams ecosystem via back-end development of their website.',
      'Their marketing website is built on Craft CMS, which gave me the opportunity to expand my experience and knowledge surrounding custom module development for a Craft CMS - improving on my previous work with Drupal 7(LJH, PTV). This resulted in heavy PHP development with a great emphasis on implementing API Integrations throughout the contract.',
      'Craft CMS is built on top of the Yii2 framework, most of my other projects have been based off Symfony so this was a first. And unlike Drupal, with Craft custom development, referring to Yii2 often yielded more instructive results, and therefore I was able to grow and expand my familiarity with the framework.',
      'During my contract I was involved in:',
      '<ul><li>Developing a portal for their dealers to access, search and download a pool of resources. This involved tight integration with Algolia and also implementing methods to download a large number of files at a single time.</li><li>Developing a portal for their Dealers which involved a multi-tier user registration flow and integrations with their Learning Management System, Coassemble, via their API and webhooks.</li><li>Automating a few manual processes through API Integrations and scheduled tasks such as cache clean up.</li></ul>'
    ],
    tags: [
      'Back-end Development',
      'Webhooks',
      'API Integration',
      'Version Control',
      'CMS',
      'Cron Jobs'
    ],
    icons: [
      'Craft CMS',
      'Postman', 
      'Ngrok',
      'Bitbucket',
      'Yii',
      'Algolia',
      'Imgix',
      'Coassemble',
      'Mandrill',
      'Auth0',
      'Twig'
    ]
  },
  development: {
    heading: 'Development',
    subheading: 'A deeper look in.',
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    ],
    facets: [
      {
        icons: ['Sass', 'Boostrap 4'],
        title: 'Sass/Bootstrap',
        text: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus viverra vitae congue eu consequat ac felis. Eget nunc lobortis mattis aliquam.',
          'Ut sem nulla pharetra diam sit amet nisl. Tellus orci ac auctor augue mauris augue neque. Morbi non arcu risus quis varius quam. Varius vel pharetra vel turpis nunc eget lorem dolor. In dictum non consectetur a. ',
          'Massa tincidunt dui ut ornare lectus sit amet. Ornare arcu odio ut sem nulla pharetra diam sit amet. Dictum non consectetur a erat nam at lectus urna. Elementum pulvinar etiam non quam lacus suspendisse. Congue mauris rhoncus aenean vel elit scelerisque. Congue mauris rhoncus aenean vel. Amet est placerat in egestas erat.'
        ]
      },
      {
        icons: ['BEM'],
        title: 'Block Element Modifier',
        text: [
          'Interdum varius sit amet mattis. Feugiat sed lectus vestibulum mattis ullamcorper. Sagittis vitae et leo duis ut. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Tincidunt ornare massa eget egestas purus. In aliquam sem fringilla ut morbi tincidunt. Volutpat commodo sed egestas egestas fringilla phasellus faucibus.',
          'Tristique senectus et netus et malesuada fames ac turpis egestas. Orci sagittis eu volutpat odio facilisis mauris sit amet. Sed elementum tempus egestas sed. '
        ]
      }
    ]
  },
  figures: [
    {
      heading: 'Digests Dashboard',
      subheading: 'Dashboard of user’s digests, published, live and archived.',
      path: '/images/Projects/FusionEntertainment/001_w-1000px_compressed.png',
    },
    {
      heading: 'Digest Builder - Audience',
      subheading: 'Select the target audience for a digest via Intercom segments and tags.',
      path: '/images/Projects/MagnityApp/001_w-1000px_compressed.png',
    },
    {
      heading: 'Digest Builder - Design',
      subheading: 'Design custom digests with text, metrics and graphs based on each target audience user’s event data',
      path: '/images/Projects/FusionEntertainment/001_w-1000px_compressed.png',
    },
    {
      heading: 'Digest Builder - Audience',
      subheading: 'Select the target audience for a digest via Intercom segments and tags.',
      path: '/images/Projects/MagnityApp/001_w-1000px_compressed.png',
    },
  ]
}

export const LJHOOKER = {
  name: 'LJ Hooker NZ Website',
  duration: '2015 - 2016',
  stackColors: ['#FAB722', '#F0231E', '#000000','#FFFFFF'],
  breadcrumbs: [{
    link: '/',
    title: 'Erika Kishi'
  }, {
    link: '/#projects',
    title: 'Projects'
  }],
  languages: ['PHP','JavaScript','HTML5','CSS3'],
  intro: {
    heading: 'New Zealand Real Estate',
    subheading: 'A Brief Overview.',
    text: [
      'The <a href="//www.ljhooker.co.nz" target="_blank">LJ Hooker NZ</a> website was a re-implementation, an improvement on their old website during my time at Applicable. My role with this project was to:',
      '<ul><li>Set up the website on Drupal through settings, content types, admin etc...</li><li>Implement a custom responsive theme for the designs provided to us</li><li>Implement custom PHP development on top of Drupal - through custom modules - to meet all of the clients expectations of a highly custom and functional CMS/website.</li></ul>',
      'LJ Hooker’s ecosystem was already established, and therefore, we needed to build a website where they could manage static content such as blog posts and general information pages but also show all their real estate data from their in house API.',
      'The nature of this project was a re-implementation. This meant there was already a wide-range of established traffic. Therefore we needed to ensure that the website worked seamlessly work across major browsers (IE, Chrome, Safari and Firefox) and devices. But also, we needed to make sure the website could handle considerable traffic and load from day one.',
      'A big requirement that added complexity to the site was the need to have different sections for each category e.g. Residential, Commercial, etc... Consequently the Drupal site needed to be able to display category specific data and search depending on the current category i.e domain the user is on. And to extend this further, branch sites based on the main site needed to be created and managed via Drupal.'
    ],
    tags: [
      'Back-end Development',
      'Front-end Development',
      'Module Development',
      'API Integration',
      'Version Control',
      'CMS',
      'Cron Jobs',
    ],
    icons: [
      'Drupal 7',
      'Postman', 
      'Git',
      'JQuery',
      'Google Analytics',
      'Google Maps',
    ]
  },
  development: {
    heading: 'Development',
    subheading: 'A deeper look in.',
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    ],
    facets: [
      {
        icons: ['Sass', 'Boostrap 4'],
        title: 'Sass/Bootstrap',
        text: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus viverra vitae congue eu consequat ac felis. Eget nunc lobortis mattis aliquam.',
          'Ut sem nulla pharetra diam sit amet nisl. Tellus orci ac auctor augue mauris augue neque. Morbi non arcu risus quis varius quam. Varius vel pharetra vel turpis nunc eget lorem dolor. In dictum non consectetur a. ',
          'Massa tincidunt dui ut ornare lectus sit amet. Ornare arcu odio ut sem nulla pharetra diam sit amet. Dictum non consectetur a erat nam at lectus urna. Elementum pulvinar etiam non quam lacus suspendisse. Congue mauris rhoncus aenean vel elit scelerisque. Congue mauris rhoncus aenean vel. Amet est placerat in egestas erat.'
        ]
      },
      {
        icons: ['BEM'],
        title: 'Block Element Modifier',
        text: [
          'Interdum varius sit amet mattis. Feugiat sed lectus vestibulum mattis ullamcorper. Sagittis vitae et leo duis ut. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Tincidunt ornare massa eget egestas purus. In aliquam sem fringilla ut morbi tincidunt. Volutpat commodo sed egestas egestas fringilla phasellus faucibus.',
          'Tristique senectus et netus et malesuada fames ac turpis egestas. Orci sagittis eu volutpat odio facilisis mauris sit amet. Sed elementum tempus egestas sed. '
        ]
      }
    ]
  },
  figures: [
    {
      heading: 'Digests Dashboard',
      subheading: 'Dashboard of user’s digests, published, live and archived.',
      path: '/images/Projects/FusionEntertainment/001_w-1000px_compressed.png',
    },
    {
      heading: 'Digest Builder - Audience',
      subheading: 'Select the target audience for a digest via Intercom segments and tags.',
      path: '/images/Projects/MagnityApp/001_w-1000px_compressed.png',
    },
    {
      heading: 'Digest Builder - Design',
      subheading: 'Design custom digests with text, metrics and graphs based on each target audience user’s event data',
      path: '/images/Projects/FusionEntertainment/001_w-1000px_compressed.png',
    },
    {
      heading: 'Digest Builder - Audience',
      subheading: 'Select the target audience for a digest via Intercom segments and tags.',
      path: '/images/Projects/MagnityApp/001_w-1000px_compressed.png',
    },
  ]
}

export const PASIFIKA_TV = {
  name: 'Pasifika TV Website',
  duration: '2016 - 2017',
  stackColors: ['#06BDB4', '#333333', '#025180','#FFFFFF'],
  breadcrumbs: [{
    link: '/',
    title: 'Erika Kishi'
  }, {
    link: '/#projects',
    title: 'Projects'
  }],
  languages: ['PHP','JavaScript','HTML5','CSS3'],
  intro: {
    heading: 'Satellite Schedule for the Pacific',
    subheading: 'A Brief Overview.',
    text: [
      '<a href="//pasfikatv.co.nz" target="_blank">Pasifika TV</a> was a custom Drupal project during my time at Applicable. It was a New Zealand government initiative, funded by the Ministry of Foreign Affairs and Trade and Pacific Cooperation Foundation in hopes to support the Pacific regions media sector to build stronger relationships. The project was two-fold with the first stage being a comprehensive website, and the second stage being a native app.',
      'I was involved with the first-stage of the project, this included:',
      '<ul><li>setting up the Drupal site, specifically the content types for the broadcasting timetable, blog etc… and different groups of users that accessed the website</li><li>creating custom modules for custom Pasifika TV specific functionality</li><li>implementing provided designs that were responsive and consistent across all major browsers</li></ul>',
      'The main focus of the site was the satellite schedule that displayed when and what will be available for distribution in the Pacific. The client specified it was to be inputted through the site, thus, I had to structure the content logically, while also implementing custom functionality such as cloning, as this is incredibly repetitive work.',
      'While all users could see the upcoming broadcast, there were also requirements specific for broadcasters in the Pacific. This included the ability to be able request shows, request access to one-time events such as sports games etc.. thus there was a fair bit of setting up/planning around the user groups and permissions for each tier.',
      'Later on the Drupal site was used to expose an API that a native app could then display all the website timetable content on.'
    ],
    tags: [
      'Back-end Development',
      'Front-end Development',
      'Module Development',
      'Version Control',
      'CMS',
    ],
    icons: [
      'Drupal 7',
      'Git',
      'JQuery',
      'Adobe Fireworks'
    ]
  },
  development: {
    heading: 'Development',
    subheading: 'A deeper look in.',
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    ],
    facets: [
      {
        icons: ['Sass', 'Boostrap 4'],
        title: 'Sass/Bootstrap',
        text: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus viverra vitae congue eu consequat ac felis. Eget nunc lobortis mattis aliquam.',
          'Ut sem nulla pharetra diam sit amet nisl. Tellus orci ac auctor augue mauris augue neque. Morbi non arcu risus quis varius quam. Varius vel pharetra vel turpis nunc eget lorem dolor. In dictum non consectetur a. ',
          'Massa tincidunt dui ut ornare lectus sit amet. Ornare arcu odio ut sem nulla pharetra diam sit amet. Dictum non consectetur a erat nam at lectus urna. Elementum pulvinar etiam non quam lacus suspendisse. Congue mauris rhoncus aenean vel elit scelerisque. Congue mauris rhoncus aenean vel. Amet est placerat in egestas erat.'
        ]
      },
      {
        icons: ['BEM'],
        title: 'Block Element Modifier',
        text: [
          'Interdum varius sit amet mattis. Feugiat sed lectus vestibulum mattis ullamcorper. Sagittis vitae et leo duis ut. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Tincidunt ornare massa eget egestas purus. In aliquam sem fringilla ut morbi tincidunt. Volutpat commodo sed egestas egestas fringilla phasellus faucibus.',
          'Tristique senectus et netus et malesuada fames ac turpis egestas. Orci sagittis eu volutpat odio facilisis mauris sit amet. Sed elementum tempus egestas sed. '
        ]
      }
    ]
  },
  figures: [
    {
      heading: 'Digests Dashboard',
      subheading: 'Dashboard of user’s digests, published, live and archived.',
      path: '/images/Projects/FusionEntertainment/001_w-1000px_compressed.png',
    },
    {
      heading: 'Digest Builder - Audience',
      subheading: 'Select the target audience for a digest via Intercom segments and tags.',
      path: '/images/Projects/MagnityApp/001_w-1000px_compressed.png',
    },
    {
      heading: 'Digest Builder - Design',
      subheading: 'Design custom digests with text, metrics and graphs based on each target audience user’s event data',
      path: '/images/Projects/FusionEntertainment/001_w-1000px_compressed.png',
    },
    {
      heading: 'Digest Builder - Audience',
      subheading: 'Select the target audience for a digest via Intercom segments and tags.',
      path: '/images/Projects/MagnityApp/001_w-1000px_compressed.png',
    },
  ]
}

export const PORTFOLIO = {
  name: 'Online Portfolio',
  duration: '2020',
  stackColors: ['#F2CD88', '#88C1F2', '#C4E1F2', '#FFFFFF'],
  breadcrumbs: [{
    link: '/',
    title: 'Erika Kishi'
  }, {
    link: '/#projects',
    title: 'Projects'
  }],
  languages: ['JavaScript','HTML5','CSS3'],
  intro: {
    heading: 'Lorem Ipsum Dolar',
    subheading: 'A Brief Overview.',
    text: [
      'Amet dictum sit amet justo donec. Ornare quam viverra orci sagittis eu volutpat odio. Tellus id interdum velit laoreet id. Feugiat in fermentum posuere urna nec tincidunt.',
      'Dignissim cras tincidunt lobortis feugiat. Praesent semper feugiat nibh sed pulvinar proin. Vulputate eu scelerisque felis imperdiet proin. Erat pellentesque adipiscing commodo elit at imperdiet. Mauris sit amet massa vitae tortor condimentum. Enim sed faucibus turpis in eu mi bibendum neque egestas.',
      'Malesuada fames ac turpis egestas maecenas pharetra convallis. Ultrices dui sapien eget mi proin sed libero enim.'
    ],
    tags: [
      'Front-end Development',
      'Design',
      'Version Control',
    ],
    icons: [
      'React',
      'Sketch',
      'Adobe Photoshop',
      'Git',
    ]
  },
  development: {
    heading: 'Development',
    subheading: 'A deeper look in.',
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    ],
    facets: [
      {
        icons: ['Sass', 'Boostrap 4'],
        title: 'Sass/Bootstrap',
        text: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus viverra vitae congue eu consequat ac felis. Eget nunc lobortis mattis aliquam.',
          'Ut sem nulla pharetra diam sit amet nisl. Tellus orci ac auctor augue mauris augue neque. Morbi non arcu risus quis varius quam. Varius vel pharetra vel turpis nunc eget lorem dolor. In dictum non consectetur a. ',
          'Massa tincidunt dui ut ornare lectus sit amet. Ornare arcu odio ut sem nulla pharetra diam sit amet. Dictum non consectetur a erat nam at lectus urna. Elementum pulvinar etiam non quam lacus suspendisse. Congue mauris rhoncus aenean vel elit scelerisque. Congue mauris rhoncus aenean vel. Amet est placerat in egestas erat.'
        ]
      },
      {
        icons: ['BEM'],
        title: 'Block Element Modifier',
        text: [
          'Interdum varius sit amet mattis. Feugiat sed lectus vestibulum mattis ullamcorper. Sagittis vitae et leo duis ut. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Tincidunt ornare massa eget egestas purus. In aliquam sem fringilla ut morbi tincidunt. Volutpat commodo sed egestas egestas fringilla phasellus faucibus.',
          'Tristique senectus et netus et malesuada fames ac turpis egestas. Orci sagittis eu volutpat odio facilisis mauris sit amet. Sed elementum tempus egestas sed. '
        ]
      }
    ]
  },
  figures: [
    {
      heading: 'Digests Dashboard',
      subheading: 'Dashboard of user’s digests, published, live and archived.',
      path: '/images/Projects/FusionEntertainment/001_w-1000px_compressed.png',
    },
    {
      heading: 'Digest Builder - Audience',
      subheading: 'Select the target audience for a digest via Intercom segments and tags.',
      path: '/images/Projects/MagnityApp/001_w-1000px_compressed.png',
    },
    {
      heading: 'Digest Builder - Design',
      subheading: 'Design custom digests with text, metrics and graphs based on each target audience user’s event data',
      path: '/images/Projects/FusionEntertainment/001_w-1000px_compressed.png',
    },
    {
      heading: 'Digest Builder - Audience',
      subheading: 'Select the target audience for a digest via Intercom segments and tags.',
      path: '/images/Projects/MagnityApp/001_w-1000px_compressed.png',
    },
  ]
}

export const ARCHITECTURAL_PORTFOLIO = {
  name: 'Architectural Portfolio',
  duration: '2010 - 2013',
  stackColors: ['#D0C7DF', '#606EE8','#FFF1D7', '#FFFFFF'],
  breadcrumbs: [{
    link: '/',
    title: 'Erika Kishi'
  }, {
    link: '/#architecture',
    title: 'Architecture'
  }],
  languages: [],
  intro: {
    heading: 'Bachelor of Architectural Studies',
    subheading: 'University of Auckland.',
    text: [
      'Before traversing the web development landscape, I studied Architecture at the University of Auckland. Through my studies I honed my skills in designing - learning how to go from ideas and concepts, to a polished realisation.',
      'The range of technical skills learnt to practice design and creativity was vast, spanning from drawing, to sketching, to modelling, to software prototyping - to name a few. The most exciting part was combining these skills to produce something completely unexpected. For example, for one project I began with the contours of the landscape, built a 3d model from it, abstracted the topography through sketches, overlayed these sketches, transferred the pattern on illustrator, and built a laser cut model so I could conceptualise a space that took inspiration from the surrounding landscape. I was never quite sure where iterations would lead me and that was always thrilling.',
      'This portfolio is a culmination of projects undertaken during my studies. All projects starkly differ, therefore I hope you can see my experimentation with different process, tools and ultimately see my journey in learning how to design and how to be creative.',
      '<a href="https://dog1qqresop9s.cloudfront.net/ZKzYxRPszTLVZeq6HchM-ArchitecturalPortfolio.pdf" download>Download Portfolio</a>'
    ],
    tags: [
      'Front-end Development',
      'Design',
      'Version Control',
    ],
    icons: [
      'Adobe Photoshop', 'Adobe Illustrator', 'Rhinoceros 3d', '3DS Max', 'AutoCad', 'Adobe InDesign',
    ]
  },
  figures: [
    {
      heading: 'Digests Dashboard',
      subheading: 'Dashboard of user’s digests, published, live and archived.',
      path: '/images/Projects/FusionEntertainment/001_w-1000px_compressed.png',
    },
    {
      heading: 'Digest Builder - Audience',
      subheading: 'Select the target audience for a digest via Intercom segments and tags.',
      path: '/images/Projects/MagnityApp/001_w-1000px_compressed.png',
    },
    {
      heading: 'Digest Builder - Design',
      subheading: 'Design custom digests with text, metrics and graphs based on each target audience user’s event data',
      path: '/images/Projects/FusionEntertainment/001_w-1000px_compressed.png',
    },
    {
      heading: 'Digest Builder - Audience',
      subheading: 'Select the target audience for a digest via Intercom segments and tags.',
      path: '/images/Projects/MagnityApp/001_w-1000px_compressed.png',
    },
  ]
}

export const IRONBANK = {
  name: 'Ironbank ArchTech Article',
  duration: '2013',
  stackColors: ['#FF830F', '#792F16', '#0070CD','#FFFFFF'],
  breadcrumbs: [{
    link: '/',
    title: 'Erika Kishi'
  }, {
    link: '/#architecture',
    title: 'Architecture'
  }],
  languages: [],
  intro: {
    heading: 'Bachelor of Architectural Studies',
    subheading: 'University of Auckland.',
    text: [
      'This was a group project for an Architectural Technology paper for my Architectural studies.',
      'This is an in-depth article on the Ironbank building in Auckland, New Zealand. Our main aim was to understand and explain the main ideas and concepts behind the unique design, the choice of using iron as the facade(as it is part of its namesake) and the nuances with building with such a corrosive material.',
      'Through research and interviewing the architect, it was interesting to hear the process of how the building was realised and the intricate relationship between design and engineering.',
      '<a href="https://dog1qqresop9s.cloudfront.net/qdjWVGpmftwWBVm2ND3w-Ironbank.pdf" download>Download Article</a>'
    ],
    tags: [
      'Front-end Development',
      'Design',
      'Version Control',
    ],
    icons: [
      'Adobe Illustrator',
      'Adobe InDesign'
    ]
  },
  figures: [
    {
      heading: 'Digests Dashboard',
      subheading: 'Dashboard of user’s digests, published, live and archived.',
      path: '/images/Projects/FusionEntertainment/001_w-1000px_compressed.png',
    },
    {
      heading: 'Digest Builder - Audience',
      subheading: 'Select the target audience for a digest via Intercom segments and tags.',
      path: '/images/Projects/MagnityApp/001_w-1000px_compressed.png',
    },
    {
      heading: 'Digest Builder - Design',
      subheading: 'Design custom digests with text, metrics and graphs based on each target audience user’s event data',
      path: '/images/Projects/FusionEntertainment/001_w-1000px_compressed.png',
    },
    {
      heading: 'Digest Builder - Audience',
      subheading: 'Select the target audience for a digest via Intercom segments and tags.',
      path: '/images/Projects/MagnityApp/001_w-1000px_compressed.png',
    },
  ]
}