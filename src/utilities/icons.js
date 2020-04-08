import { ReactComponent as Resume } from '../icons/resume.svg';
import { ReactComponent as Email } from '../icons/email.svg';
import { ReactComponent as LinkedIn } from '../icons/linkedin.svg';
import { ReactComponent as LocationNz } from '../icons/new-zealand.svg';
import { ReactComponent as Php } from '../icons/php.svg';
import { ReactComponent as JavaScript } from '../icons/javascript.svg';
import { ReactComponent as Css } from '../icons/css3.svg';
import { ReactComponent as Html } from '../icons/html5.svg';
import { ReactComponent as Craft } from '../icons/craft-cms.svg';
import { ReactComponent as Sketch } from '../icons/sketch.svg';
import { ReactComponent as Vue } from '../icons/vue.svg';
import { ReactComponent as Bem } from '../icons/bem.svg';
import { ReactComponent as Aws } from '../icons/aws/aws.svg';
import { ReactComponent as Drupal } from '../icons/drupal-7.svg';
import { ReactComponent as Jade } from '../icons/jade.svg';
import { ReactComponent as Laravel } from '../icons/laravel.svg';
import { ReactComponent as Sass } from '../icons/sass.svg';
import { ReactComponent as Stripe } from '../icons/stripe.svg';
import { ReactComponent as Bugsnag } from '../icons/bugsnag.svg';
import { ReactComponent as Git } from '../icons/git.svg';
import { ReactComponent as GoogleAnalytics } from '../icons/google-analytics.svg';
import { ReactComponent as GoogleMaps } from '../icons/google-maps.svg';
import { ReactComponent as Intercom } from '../icons/intercom.svg';
import { ReactComponent as Jquery } from '../icons/jquery.svg';
import { ReactComponent as Pdf } from '../icons/pdf.svg';
import { ReactComponent as Rds } from '../icons/aws/aws-rds.svg';
import { ReactComponent as ElasticBeanstalk } from '../icons/aws/aws-eb.svg';
import { ReactComponent as Vpc } from '../icons/aws/aws-vpc.svg';
import { ReactComponent as ElastiCache } from '../icons/aws/aws-ec.svg';
import { ReactComponent as Sqs } from '../icons/aws/aws-sqs.svg';
import { ReactComponent as SimpleStorageService } from '../icons/aws/aws-s3.svg';
import { ReactComponent as ElasticComputeCloud } from '../icons/aws/aws-ec2.svg';
import { ReactComponent as Cloudwatch } from '../icons/aws/aws-cloudwatch.svg';
import { ReactComponent as Mysql } from '../icons/mysql.svg';
import { ReactComponent as Redis } from '../icons/redis.svg';
import { ReactComponent as Bootstrap } from '../icons/bootstrap-4.svg';
import { ReactComponent as Mailgun } from '../icons/mailgun.svg';
import { ReactComponent as Postman } from '../icons/postman.svg';
import { ReactComponent as Unsplash } from '../icons/unsplash.svg';
import { ReactComponent as TinyPng } from '../icons/tinypng.svg';
import { ReactComponent as Ngrok } from '../icons/ngrok.svg';
import { ReactComponent as GooglePageSpeedInsights } from '../icons/google/page-speed-insights.svg';
import { ReactComponent as Bitbucket } from '../icons/bitbucket.svg';
import { ReactComponent as Yii } from '../icons/yii.svg';
import { ReactComponent as Algolia } from '../icons/algolia.svg';
import { ReactComponent as Imgix } from '../icons/imgix.svg';
import { ReactComponent as Coassemble } from '../icons/coassemble.svg';
import { ReactComponent as Mandrill } from '../icons/mandrill.svg';
import { ReactComponent as AuthZero } from '../icons/auth0.svg';
import { ReactComponent as Twig } from '../icons/twig.svg';
import { ReactComponent as ReactJs } from '../icons/react.svg';
import { ReactComponent as Photoshop } from '../icons/adobe/photoshop.svg';
import { ReactComponent as Illustrator } from '../icons/adobe/illustrator.svg';
import { ReactComponent as Fireworks } from '../icons/adobe/fireworks.svg';
import { ReactComponent as InDesign } from '../icons/adobe/indesign.svg';
import { ReactComponent as Rhino } from '../icons/rhino.svg';
import { ReactComponent as AutoCad } from '../icons/autocad.svg';
import { ReactComponent as ThreeDs } from '../icons/3ds.svg';
import { ReactComponent as Unknown } from '../icons/unknown.svg';
import { find } from 'lodash';

export function findIcon(title) {
  const LOGOS = [
    { svg: Craft, title: 'Craft CMS' },
    { svg: Sketch, title: 'Sketch' },
    { svg: Vue, title: 'Vue.js' },
    { svg: Bem, title: 'BEM' },
    { svg: Sketch, title: 'Sketch' },
    { svg: Aws, title: 'Amazon Web Services' },
    { svg: Drupal, title: 'Drupal 7' },
    { svg: Jade, title: 'JADE' },
    { svg: Laravel, title: 'Laravel' },
    { svg: Sass, title: 'Sass' },
    { svg: Stripe, title: 'Stripe' },
    { svg: Git, title: 'Git' },
    { svg: GoogleAnalytics, title: 'Google Analytics' },
    { svg: GoogleMaps, title: 'Google Maps' },
    { svg: Intercom, title: 'Intercom' },
    { svg: Jquery, title: 'JQuery' },
    { svg: Bugsnag, title: 'Bugsnag' },
    { svg: Pdf, title: 'PDF' },
    { svg: Rds, title: 'AWS RDS' },
    { svg: ElasticBeanstalk, title: 'AWS ElasticBeanstalk' },
    { svg: Vpc, title: 'AWS VPC' },
    { svg: ElastiCache, title: 'AWS ElastiCache' },
    { svg: Sqs, title: 'AWS SQS' },
    { svg: SimpleStorageService, title: 'AWS S3' },
    { svg: ElasticComputeCloud, title: 'AWS EC2' },
    { svg: Cloudwatch, title: 'AWS Cloudwatch' },
    { svg: Mysql, title: 'MySQL' },
    { svg: Redis, title: 'Redis' },
    { svg: Bootstrap, title: 'Bootstrap 4' },
    { svg: Mailgun, title: 'Mailgun' },
    { svg: Postman, title: 'Postman' },
    { svg: Unsplash, title: 'Unsplash' },
    { svg: TinyPng, title: 'TinyPng' },
    { svg: Ngrok, title: 'Ngrok' },
    { svg: GooglePageSpeedInsights, title: 'Google Page Speed Insights' },
    { svg: Bitbucket, title: 'Bitbucket' },
    { svg: Yii, title: 'Yii' },
    { svg: Algolia, title: 'Algolia' },
    { svg: Imgix, title: 'Imgix' },
    { svg: Coassemble, title: 'Coassemble' },
    { svg: Mandrill, title: 'Mandrill' },
    { svg: AuthZero, title: 'Auth0' },
    { svg: Twig, title: 'Twig' },
    { svg: ReactJs, title: 'React' },
    { svg: Photoshop, title: 'Adobe Photoshop' },
    { svg: Illustrator, title: 'Adobe Illustrator' },
    { svg: Fireworks, title: 'Adobe Fireworks' },
    { svg: InDesign, title: 'Adobe InDesign' },
    { svg: Rhino, title: 'Rhinoceros 3d' },
    { svg: AutoCad, title: 'AutoCad' },
    { svg: ThreeDs, title: '3DS Max' },
    { svg: Php, title: 'PHP' },
    { svg: JavaScript, title: 'JavaScript' },
    { svg: Css, title: 'CSS3' },
    { svg: Html, title: 'HTML5' },
    { svg: Resume, title: 'Resume' },
    { svg: Email, title: 'Email' },
    { svg: LinkedIn, title: 'LinkedIn' },
    { svg: LocationNz, title: 'New Zealand' },
  ];

  const logo = find(LOGOS,['title', title]);

  if (logo === undefined) return { svg: Unknown, title: title };

  return logo;
}