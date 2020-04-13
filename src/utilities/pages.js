export const HOME = {
  title: 'Full Stack Developer & Designer',
  stackColors: ['#F2CD88', '#88C1F2', '#C4E1F2', '#FFFFFF'],
  breadcrumbs: [{
    link: '#',
    title: 'Erika Kishi'
  }],
  skills: [
    { skill: 'Back-end Development', competency: 95 },
    { skill: 'Front-end Development', competency: 70 },
    { skill: 'API Integration', competency: 80 },
    { skill: 'AWS Architecture', competency: 35 },
    { skill: 'Design', competency: 50 },
  ],
  projects: [
    {
      project: 'Fusion Entertainment',
      folderName: 'FusionEntertainment',
      skills: [
        'Back-end Development',
        'API Integration',
      ],
      technologies: ['Craft CMS'],
      link: '/projects/fusion',
    },
    {
      project: 'Magnity Web Application',
      folderName: 'MagnityApp',
      skills: [
        'Front-end Development',
        'Back-end Development',
        'API Integration',
        'AWS Architecture',
        'Design'
      ],
      technologies: ['Laravel', 'Vue.js', 'Sketch', 'Amazon Web Services'],
      link: '/projects/magnity',
    },
    {
      project: 'Online Portfolio',
      folderName: 'OnlinePortfolio',
      skills: [
        'Front-end Development',
        'Design',
      ],
      technologies: ['React', 'Sketch'],
      link: '/projects/portfolio',
    },
    {
      project: 'Magnity Marketing Website',
      folderName: 'MagnityWebsite',
      skills: [
        'Front-end Development',
        'Design',
      ],
      technologies: ['Laravel', 'Sketch', 'Amazon Web Services'],
      link: '/projects/magnity-marketing',
    },
    {
      project: 'Boardingware',
      folderName: 'Boardingware',
      skills: [
        'Front-end Development',
      ],
      technologies: ['Sass', 'JADE', 'BEM'],
      link: '/projects/boardingware',
    },
    {
      project: 'LJ Hooker NZ',
      folderName: 'LJH',
      skills: [
        'Front-end Development',
        'Back-end Development',
        'API Integration',
      ],
      technologies: ['Drupal 7'],
      link: '/projects/ljhooker',
    },
    {
      project: 'Pasifika TV',
      folderName: 'PasifikaTv',
      skills: [
        'Front-end Development',
        'Back-end Development',
      ],
      technologies: ['Drupal 7'],
      link: '/projects/pasifikatv',
    },
  ],
  architecture: [
    {
      project: 'Architectural Portfolio',
      folderName: 'ArchitecturalPortfolio',
      skills: [
        'Adobe Photoshop',
        'Adobe Illustrator',
        'Rhinoceros 3d',
        'AutoCad',
        'Adobe Indesign'
      ],
      technologies: ['Adobe Photoshop', 'Adobe Illustrator', 'Rhinoceros 3d', '3DS Max', 'AutoCad', 'Adobe InDesign'],
      link: '/architecture/portfolio',
    },
    {
      project: 'Ironbank Article',
      folderName: 'Ironbank',
      skills: [
        'Adobe Illustrator',
        'Adobe Indesign'
      ],
      technologies: ['Adobe Illustrator', 'Adobe InDesign'],
      link: '/architecture/ironbank',
    }
  ],
}

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
      '<a href="//www.magnity.io" target="_blank" style="color:#343057">Magnity</a> was a project where I was involved in the full life cycle of the web application including design, front-end development, back-end development, cloud architecture and deployment.',
      'After the initial decision to use Laravel was made, many of the other development/architectural decisions fell into place. There were opportunities to use new technologies, new methodologies and refine development processes to add to my pool of skills.',
      'One of the biggest challenges/learning curves with this project was architecting and deploying Magnity into an AWS architected cloud environment. The decision to use AWS was made because of the sheer variety and reliability of services available. It also provided a streamlined set up for the specific type of architecture Magnity required which was offloading process intensive jobs via a message queue system to a different environment from the user facing web environment within a secure VPC.',
      'Through research and testing, I was able to architect and implement the web & worker tier using AWS. It was rewarding to learn not only how to implement these services, but how they work together as a cohesive unit, how to optimise each service and - just like most aspects of web development - the nuances that were not initially obvious.',
      'The web application itself required API integration, webhook integration, tasks scheduling and a strong front-end, via Vue.js, to provide the appropriate interface to build customised digests.'
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
    text: [],
    facets: [
      {
        icons: ['Laravel'],
        title: 'Laravel',
        text: [
          'Laravel was an easy choice for Magnity as it provided the following',
          '<ul><li>Logical implementation of the MVC pattern</li><li>A vast pool of libraries, incredible documentation + community, which was a major plus when it came to deploying a Laravel application in AWS Elastic Beanstalk</li><li>Streamlined non-business logic specific functionality, for example, integrating with Stripe as a payment gateway via Cashier, authentication etc...</li><li>Easy use of webpack and compilation of front-end assets via Laravel Mix</li></ul>',
          'I was also able to improve my skills with task scheduling and working with a queue system within the Laravel ecosystem as this was a big focus within the project.'
        ]
      },
      {
        icons: ['Vue.js'],
        title: 'Vue.js',
        text: [
          'Vue was the front-end framework that shined in Magnity’s digest builder. Using a JavaScript framework meant that I could achieve what was set out with the digest builder design. This being a highly interactive experience that served and updated data asynchronously via an organised set of components.',
          'Integration with a few existing libraries for key functionality meant that we did not have to reinvent the wheel via npm and then built via webpack. This included a library that allowed a user to move a vue component around the page (dragging), a wysiwyg and also integration with the Unsplash API so users can search the Unsplash pool of images.',
          'A lot of the challenges with this phase of development involved the interaction of components within a page, as they are free to move wherever within the page container (with content such as text, graphs, metrics) while simultaneously asynchronously updating information in the back-end. There were also significant challenges surrounding integrating a wysiwyg for the text component as it also included uploading files, images, and adding intercom tags, while being a secure/safe html editor.'
        ]
      },
      {
        icons: ['Sass', 'BEM'],
        title: 'Sass/BEM',
        text: [
          'Sass is ready-to-use in Laravel and compiled via Laravel-mix, therefore was an easy choice. Sass allowed for clear organisation and structure to Magnity’s CSS styles - which can easily become unruly. We also used Sass in combination with BEM methodology, to further enhance readability, re-usability and consistency throughout Magnity’s HTML and CSS.'
        ]
      },
      {
        icons: ['Intercom', 'Google Analytics', 'Bugsnag', 'Stripe', 'Unsplash', 'TinyPng'],
        title: 'API Integration',
        text: [
          'Magnity integrated with API’s including Intercom, Unsplash, TinyPng, Stripe and Bugsnag. Whether we required data or pushed data to other services, API integration was at the forefront of building Magnity.',
          'Intercom was the most pivotal API integration, as Magnity created custom digests based on user’s Intercom event data. This involved authentication handling and importing and processing a large amount of data.',
          'There were also peripheral API integrations such as using Stripe as the payment gateway or using Bugsnag to track errors that occur - this was especially important with queue messages and cron jobs because errors that occurred in the worker tier were in a way ‘silent’,  therefore, a lot more difficult to track down and debug.'
        ]
      },
      {
        icons: ['Intercom', 'Stripe', 'Ngrok'],
        title: 'Webhooks',
        text: [
          'Magnity integrates with webhooks provided by Intercom and Stripe. This is so we can fire off certain jobs off certain events triggered in corresponding applications.',
          'One particularly useful tool I found testing and developing with webhooks is Ngrok. Ngrok allows you to tunnel webhook test responses to local development servers and provides an interface for you to clearly see how the responses are coming in, rather than testing everything straight on a staging server first.'
        ]
      },
      {
        icons: ['Amazon Web Services'],
        title: 'Message Queue',
        text: [
          'The message queue provided communication between two building blocks i.e. the web and worker Elastic Beanstalk environments. With the nature of Magnity, we could see the potential for spikes in workload with heavy importing of data periodically. Therefore, Magnity could send jobs to the message queue which transported these jobs but also acted as a buffer, temporarily holding jobs while other jobs were being processed.'
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
          'I researched solutions that others have used for managing code bases via Git & was able to architect one that worked for Magnity.',
          'This was important when it came to the web/worker environment structure as it influenced the ease of managing each tiers code base.'
        ]
      }
    ]
  },
  cloud: {
    heading: 'AWS Solutions',
    subheading: 'A deeper look in.',
    text: [],
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
          'ElastiCache(caching-as-a-service) offered Magnity solutions for it’s caching and session management through using Redis engines.',
          'Because we were using Elastic Beanstalk, and taking advantage of EB’s autoscaling where servers will be provisioned and destroyed based on traffic load, we required a service where all the instances could read and write from the same cache. Therefore Redis caching via ElastiCache was a straightforward service to integrate with our existing architecture.',
          'We also required distributed session management, therefore opted to use Redis engines again - using cache for session management.'
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
      subheading: 'Dashboard of user’s published, live and archived digests.',
      path: '/MagnityApp/002_w-1000px_compressed.png',
    },
    {
      heading: 'Digest Builder - Audience',
      subheading: 'Target the intended audience for a digest via Intercom segments and tags.',
      path: '/MagnityApp/003_w-1000px_compressed.png',
    },
    {
      heading: 'Digest Builder - Design',
      subheading: 'Design custom digests with text, metrics and graphs based on each target audience user’s event data.',
      path: '/MagnityApp/004_w-1000px_compressed.png',
    },
    {
      heading: 'Digest Builder - Channel',
      subheading: 'Tailor how to send digest via Intercom’s in-app messenger.',
      path: '/MagnityApp/005_w-1000px_compressed.png',
    },
    {
      heading: 'Published Digest',
      subheading: 'Personalised tailored digests for each user.',
      path: '/MagnityApp/006_w-1000px_compressed.png',
    },
    {
      heading: 'Digest Summary',
      subheading: 'Display engagement and feedback with a real time overview of how each digest is performing.',
      path: '/MagnityApp/001_w-1000px_compressed.png',
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
      'I was involved and spearheaded with the design, development and deployment of this <a href="//www.magnity.io" target="_blank">project</a>.',
      'I was able to develop my design skills further with this project and improve my knowledge and familiarity with Sketch. Coming from a background of Adobe suite, I found Sketch very intuitive and allowed for quicker prototyping and design for websites more than other alternatives.',
      'The main aims of the website was to communicate the product clearly and succinctly, have in-built best practices for SEO and fast loading speeds. This meant a variety of solutions such as using semantic html tags, images with meaningful alternative tests, loading page on scroll, loading images when being viewed etc… This meant a combination of thoughtful layout, smart use of loading methods, use of javascript, and using CDN to cache images.'
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
    text: [],
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
        icons: ['Google Page Speed Insights'],
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
      heading: 'Long one',
      subheading: 'Dashboard of user’s digests, published, live and archived.',
      path: '/MagnityWebsite/002_w-1000px_compressed.png',
      auto: true,
    },
    {
      heading: 'Digest Builder - Audience',
      subheading: 'Select the target audience for a digest via Intercom segments and tags.',
      path: '/MagnityWebsite/003_w-1000px_compressed.png',
      auto: true,
    },
    {
      heading: 'Digest Builder - Design',
      subheading: 'Design custom digests with text, metrics and graphs based on each target audience user’s event data',
      path: '/MagnityWebsite/004_w-1000px_compressed.png',
      auto: true,
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
      '<a href="//www.boardingware.com" target="_blank" style="color:#1C4891">Boardingware</a> is a boarding school management system that spans across multiple platforms and applications. I was contracted to implement a major redesign of their web application. This mainly involved building html structure via Jade templates, CSS and a touch of javascript for their existing platform.',
      'The main challenge with this project was organisation of the CSS. CSS can easily get messy and Boardingware wanted a CSS system that was structured in a way that can be easily maintained and built upon. The way this problem was tackled was two-fold, one, standardising naming conventions throughout the HTML(BEM - encouraging re-usable components), and two, structuring and separating files logically.',
      'Another enjoyable challenge was making the web application responsive and available across major browsers. The HTML structure was a lot more complicated than the standard website and thus pushed my skills further so that an elegant solution could be reached.'
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
    text: [],
    facets: [
      {
        icons: ['Sass', 'Bootstrap 4'],
        title: 'Sass',
        text: [
          'This stylesheet language made the Boardingware CSS more readable, clean and most importantly, maintainable.',
          'It helped determine some of the organisation of the stylesheets as we could split off group variables into their own files such as colors or typography. Simultaneously making it easy to ensure browser compatibility through browser prefix mixins for commonly used properties.'
        ]
      },
      {
        icons: ['BEM'],
        title: 'Block Element Modifier',
        text: [
          'Using the BEM methodology - Block Element Modifier - provided a logical and consistent naming convention through the HTML. This meant that the code became easier to read but also isolated reusable components which encouraged modular blocks of CSS code.'
        ]
      }
    ]
  },
  figures: [
    {
      heading: 'Digests Dashboard',
      subheading: 'Dashboard of user’s digests, published, live and archived.',
      path: '/Boardingware/002_w-1000px_compressed.png',
      auto: true,
    },
    {
      heading: 'Digest Builder - Audience',
      subheading: 'Select the target audience for a digest via Intercom segments and tags.',
      path: '/Boardingware/003_w-1000px_compressed.png',
    },
    {
      heading: 'Digest Builder - Design',
      subheading: 'Design custom digests with text, metrics and graphs based on each target audience user’s event data',
      path: '/Boardingware/004_w-1000px_compressed.png',
    },
    {
      heading: 'Digests Dashboard',
      subheading: 'Dashboard of user’s digests, published, live and archived.',
      path: '/Boardingware/005_w-1000px_compressed.png',
      auto: true,
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
      '<a href="//www.fusionentertainment.com" target="_blank" style="color:#80FF06">Fusion Entertainment</a> are leaders in creating audio equipment such as speakers, subwoofers and amplifiers for Marine and Lifestyle entertainment. I was contracted to assist their team in building the marketing teams ecosystem via back-end development of their website.',
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
    text: [],
    facets: [
      {
        icons: ['Sass', 'Boostrap 4'],
        title: 'API Integration',
        text: [
          'The majority of my time at Fusion required API integration with many different services via Craft CMS. This usually involved using the given API’s SDK (if provided, in some cases no SDK was available) and providing an interface for given custom modules to authorise and interact with these API’s seamlessly.'
        ]
      },
      {
        icons: ['BEM'],
        title: 'Webhooks',
        text: [
          'Coupled with many API integrations, there was also a need to subscribe to a few webhooks from specific services to enable Fusion the ability to act upon certain events. This is where Ngrok again became a useful tool in development over a local server, rather than having to resort to developing on a non-local environment.'
        ]
      },
      {
        icons: ['Craft CMS'],
        title: 'Craft Module Development',
        text: [
          'As with most CMS systems, modules and plugins is where most of the customisations exist. And therefore the biggest focus of my contract was implementing all the required features, customisations and extensions for Fusions marketing ecosystem within Craft’s ecosystem. Although different to Drupal custom module development, I was able to take that knowledge to provide a base grounding and go forth from there with great upskilling in learning Yii2.'
        ]
      },
      {
        icons: ['Imgix'],
        title: 'Image Transformation/Optimisation',
        text: [
          'As a marketing website of products, displaying high quality, accurately sized images fast was highly prioritised. Imgix was the API that helped optimize, transform and cache their images.',
          'During my time, I implemented a customisation on top of an existing image optimisation plugin to enable greater control for content editors to have over images being displayed. This meant providing options that were available via Imgix that wasn’t previously exposed through the original plugin. This helped content editors be able to make decisions themselves over how an image should be cropped and transformed without interventions/fixes from the development team.'
        ]
      }
    ]
  },
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
      'The <a href="//www.ljhooker.co.nz" target="_blank" style="color:#F0231E">LJ Hooker NZ</a> website was a re-implementation, an improvement on their old website during my time at Applicable. My role with this project was to:',
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
    text: [],
    facets: [
      {
        icons: ['Drupal 7'],
        title: 'Drupal 7',
        text: [
          'Although most of their core data came from their own API, LJ Hooker required CMS functionality for peripheral blog and static content. On top of classic CMS functionality, Drupal was able to provide the flexibility to implement custom functionality and also a substantial library of modules that took care of many features within the scope of the project, without us having to spend time developing on. This involved modules that provided extensibility on SEO, sitemaps but perhaps most importantly multiple domains. Having the ability to have multiple domains was important as the main site needed to be split into different sites per real estate category e.g. residential, commercial, rural and coastal. Then on top of this, splitting further into local branch websites.',
          'Therefore using Drupal allowed us to focus on LJ Hooker’s business logic and rely on the plethora of existing modules for generic functionality.'
        ]
      },
      {
        icons: ['Drupal 7'],
        title: 'Drupal Themes',
        text: [
          'Creating a custom theme for the custom design was a given for the project. The custom theme was where custom blocks of HTML and CSS were implemented so the designs could be accurately represented, consistent, responsive and have the cross-browser compatibility the specifications required.'
        ]
      },
      {
        icons: ['Drupal 7'],
        title: 'Drupal Modules',
        text: [
          'This was a big part of this project development that was built using PHP. Modules house custom functionality and features for a drupal site, and this was a core requirement with LJ Hooker’s new design being highly custom as most of its core data being rendered from external services.',
          'We had to extend knowledge on the Drupal module file organisation, available Drupal hooks and understand which points of the thread of execution to interact with.',
          'Some examples of modules built include API integration, custom Drupal blocks, Google Analytics feature and custom templates.'
        ]
      },
      {
        icons: ['Drupal 7'],
        title: 'API Integration',
        text: [
          'API Integration was a core aspect in the development of this website as the majority of the data displayed is via an API. ',
          'The client already had established systems that manage their real estate content. Therefore, we had to integrate with their API in order to display all their real estate content on the new Drupal site. This included creating an interface that interacts with the API efficiently with authentication, caching etc...',
          'The site also had to integrate with NZ locality API’s, Property Management API’s and the Google Maps API to extend features for real estate listings that benefit the users and administrators.',
        ]
      }
      ,
      {
        icons: ['PDF'],
        title: 'PDF Generation',
        text: [
          'LJ Hooker required the ability to generate PDFs based on a property’s listing and search results.',
          'The biggest challenge with this PDF generation was, as with most PDF generation, the translation of web CSS into PDF friendly CSS, in order to achieve the desired result as close as we could. But also catering for many different scenarios when data for a property listing was incomplete or missing.',
        ]
      }
      ,
      {
        icons: ['Drupal 7'],
        title: 'Caching',
        text: [
          'LJ Hooker was already an established website with constant flow of traffic. Therefore we had to develop and deploy with the understanding that the website needs to be able to handle a large amount of traffic and to reduce the loading time as much as possible. This is where caching really played a vital role.',
          'Multiple tiers of caching was implemented for LJ Hooker to cater for the existing requirements. This included caching on a server level, API level, Drupal block level and of course browser level. This increased the website\'s performance while keeping in mind that data needs to expire and be refreshed when appropriate.',
        ]
      }
    ]
  },
  figures: [
    {
      heading: 'Digests Dashboard',
      subheading: 'Dashboard of user’s digests, published, live and archived.',
      path: '/LJH/002_w-1000px_compressed.png',
    },
    {
      heading: 'Digests Dashboard',
      subheading: 'Dashboard of user’s digests, published, live and archived.',
      path: '/LJH/003_w-1000px_compressed.png',
      auto: true,
    },
    {
      heading: 'Digests Dashboard',
      subheading: 'Dashboard of user’s digests, published, live and archived.',
      path: '/LJH/004_w-1000px_compressed.png',
      auto: true,
    },
    {
      heading: 'Digests Dashboard',
      subheading: 'Dashboard of user’s digests, published, live and archived.',
      path: '/LJH/005_w-1000px_compressed.png',
    },
    {
      heading: 'Digests Dashboard',
      subheading: 'Dashboard of user’s digests, published, live and archived.',
      path: '/LJH/006_w-1000px_compressed.png',
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
    text: [],
    facets: [
      {
        icons: ['Drupal 7'],
        title: 'Drupal 7',
        text: [
          'This website required a heavy amount of repetitive data to be inputted by administrators, thus the content types and content structure set up in Drupal was important to get right. There was also a need to set up the user types and permissions correctly, and provide a registration and log in flow for Broadcasters.'
        ]
      },
      {
        icons: ['Drupal 7'],
        title: 'Drupal Themes',
        text: [
          'I built a custom drupal theme which allowed for the styling of the site to be as per the provided designs. This was where the HTML and CSS was implemented so the designs could be accurately represented, consistent, responsive and have the cross-browser compatibility the specifications required.'
        ]
      },
      {
        icons: ['Drupal 7'],
        title: 'Drupal Modules',
        text: [
          'The customised functionality required for this site was for smaller features across the website. The custom modules mainly output custom blocks which could do a specific piece of logic such as the social media sharing block, the search bar for the schedule table, the faqs etc.. All custom modules are built in PHP and use Drupal hooks to plug in to Drupal functionality.'
        ]
      }
    ]
  },
  figures: [
    {
      heading: 'Digests Dashboard',
      subheading: 'Dashboard of user’s digests, published, live and archived.',
      path: '/PasifikaTv/002_w-1000px_compressed.png',
      auto: true,
    },
    {
      heading: 'Digests Dashboard',
      subheading: 'Dashboard of user’s digests, published, live and archived.',
      path: '/PasifikaTv/003_w-1000px_compressed.png',
      auto: true,
    },
    {
      heading: 'Digests Dashboard',
      subheading: 'Dashboard of user’s digests, published, live and archived.',
      path: '/PasifikaTv/004_w-1000px_compressed.png',
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
    heading: 'Collection of Past Projects & Works',
    subheading: 'A Brief Overview.',
    text: [
      'This project was an opportunity to redesign my previous online portfolio, upskill in React and use ITCSS in conjunction with BEM to optimise CSS styling structure, organisation and implementation.'
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
    text: [],
    facets: [
      {
        icons: ['React'],
        title: 'React',
        text: [
          'Learning and upskilling in React was an enjoyable experience. I tried to focus on creating functional components and making use of the Hooks system, which provided the interface for  functional components to become, in a sense, more ‘smarter’.',
          'Although this project wasn’t data heavy, it provided opportunities to use state and component life cycles through hooks, and also become familiar with props and data being shared among the hierarchy of components.'
        ]
      },
      {
        icons: ['CSS3'],
        title: 'ITCSS',
        text: [
          'After each project I’ve always reflected on how the CSS could be better. I believe it always starts out clean and organised, but inevitably becomes a bit unruly. Therefore, after coming across ITCSS, I wanted the opportunity to implement this system over using styled components with React.',
          'ITCSS or Inverted Triangle CSS is a fully managed architecture that can work extremely well with BEM. It forces you to organise your CSS files into several sections in the form of an inverted triangle. The further down the triangle your css is, the more specific and explicit would the css be. Among many benefits, one major is it reduces the number of times you override other CSS by controlling use of specificity. This in turn reduces the size of your CSS files and makes it easy to pinpoint where and when specific styles are being used - very useful when debugging.',
          'I would like to take this architecture further in other projects when the opportunity arises to refine and improve maintainability and scalability of CSS.',
        ]
      }
    ]
  },
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
      'The range of technical skills learnt to practice design and creativity was vast, spanning from drawing, to sketching, to modelling, to software prototyping - to name a few. The most exciting part was combining these skills to produce something completely unexpected. For example, for one project I began with the contours of the landscape, built a 3d model from it, abstracted the topography through sketches, overlayed these sketches, transferred the pattern on illustrator, and built a laser cut model so I could conceptualise a space that took inspiration from the surrounding landscape. I was never quite sure where iterations would lead me and that was always exciting.',
      'This portfolio is a culmination of projects undertaken during my studies. All projects starkly differ, therefore I hope you can see my experimentation with different processes, tools and ultimately see my journey in learning how to design and how to be creative.',
      '<a href="https://d3768789qe68al.cloudfront.net/ZKzYxRPszTLVZeq6HchM-ArchitecturalPortfolio.pdf" style="color:#606EE8" download>Download Portfolio</a>'
    ],
    tags: ['Design', 'Prototyping'],
    icons: [
      'Adobe Photoshop', 'Adobe Illustrator', 'Rhinoceros 3d', '3DS Max', 'AutoCad', 'Adobe InDesign',
    ]
  },
  development: {
    heading: 'Technical Skills',
    subheading: 'A sample of programmes used.',
    text: [
      'During my time at university, I had a lot of opportunity to try many different programmes to assist with creative design. Here are a few that I found incredibly useful.'
    ],
    facets: [
      {
        icons: ['AutoCad'],
        title: 'AutoCad',
        text: [
          'I favoured using AutoCAD for 2D drawings - especially architectural plans. It was an intuitive interface that covered a lot of the nuances with drawing architectural plans, encouraged best practices and always produced a clean and precise plan.'
        ]
      },
      {
        icons: ['Rhinoceros 3d'],
        title: 'Rhinoceros 3D',
        text: [
          'Rhino is a 3D modelling tool that I found to be very intuitive, versatile and powerful.',
          'Rhino provided an environment where you can build a 3D representation of the landscape, then build up the architectural design within this landscape. Having this 3D model gave me the ability to understand the relationship between the landscape and said building, be able to visual the 3D space, but also provided the tools to render the model, create the necessary pieces for a physical model, and get sections of the design.'
        ]
      },
      {
        icons: ['Adobe Photoshop'],
        title: 'Adobe Photoshop',
        text: [
          'Photoshop was incredibly useful at every stage of the design. It was a tool that captured and expressed the sensory/emotive side of a particular idea, concept or design. There is a lot that can be achieved with layering textures, colors, enhancing shadows and light on top of a render, thus, it was a vital program during my studies.'
        ]
      }
    ]
  },
  figures: [
    {
      heading: 'Site Plans',
      subheading: 'Site plans showing where designs sit, as well as the surrounding topography.',
      path: '/ArchitecturalPortfolio/002_w-1000px_compressed.png',
    },
    {
      heading: 'Technical Drawings',
      subheading: '',
      path: '/ArchitecturalPortfolio/003_w-1000px_compressed.png',
    },
    {
      heading: 'Typography Mapping',
      subheading: 'Cross referincing current map with previous river beds for conceptual inspiration.',
      path: '/ArchitecturalPortfolio/004_w-1000px_compressed.png',
    },
    {
      heading: 'Technical Drawings',
      subheading: '',
      path: '/ArchitecturalPortfolio/005_w-1000px_compressed.png',
    },
    {
      heading: 'Axo Media Drawings',
      subheading: '',
      path: '/ArchitecturalPortfolio/006_w-1000px_compressed.png',
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
      'This is an in-depth article on the Ironbank building in Auckland, New Zealand. Our main aim was to understand and explain the drivers and concepts behind this unique design, such as the choice of using iron as the facade - its namesake, the nuances with building with such a corrosive material and the challenges with adhering to Karangahape Road’s urban fabric.',
      'Through research and interviewing the architect, it was interesting to hear the process of how the building was realised and the intricate relationship between design and engineering.',
      '<a href="https://d3768789qe68al.cloudfront.net/qdjWVGpmftwWBVm2ND3w-Ironbank.pdf" style="color:#FF830F" download>Download Article</a>'
    ],
    tags: ['Architectural Technology'],
    icons: [
      'Adobe Illustrator',
      'Adobe InDesign'
    ]
  },
  figures: [
    {
      heading: 'Containers',
      subheading: 'Cranking of weathered stainless steel containers dictated from surrounding bridges & street lines.',
      path: '/Ironbank/004_w-1000px_compressed.png',
    },
    {
      heading: 'Facade',
      subheading: 'References the historical and unique character of the eclectic scene of Karangahape Road.',
      path: '/Ironbank/002_w-1000px_compressed.png',
    },
    {
      heading: 'Sustainability',
      subheading: 'Intentional sustainable design including strategic placement of windows, solar panels, re-use of rain water etc...',
      path: '/Ironbank/003_w-1000px_compressed.png',
    },
  ]
}