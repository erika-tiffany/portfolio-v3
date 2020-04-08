export const MAGNITY_APP = {
  name: 'Magnity Application',
  duration: '2018 - 2019',
  stackColors: [
    'magnity-yellow', 
    'magnity-purple', 
    'magnity-purple-grey',
    'base-white',
  ],
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
      '<a href="//www.magnity.io">Magnity</a> was a project where I was involved in the full life cycle of the web application including design, front-end development, back-end development, cloud architecture and deployment.',
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