
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/deposits-services"
  },
  {
    "renderMode": 2,
    "route": "/loans-services"
  },
  {
    "renderMode": 2,
    "route": "/membership"
  },
  {
    "renderMode": 2,
    "route": "/service-details"
  },
  {
    "renderMode": 2,
    "route": "/testimonials"
  },
  {
    "renderMode": 2,
    "route": "/calculator"
  },
  {
    "renderMode": 2,
    "route": "/team"
  },
  {
    "renderMode": 2,
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "route": "/gallery"
  },
  {
    "renderMode": 2,
    "route": "/self-help-groups"
  },
  {
    "renderMode": 2,
    "route": "/news-and-events"
  },
  {
    "renderMode": 2,
    "route": "/awards-recognition"
  },
  {
    "renderMode": 2,
    "route": "/gifts"
  },
  {
    "renderMode": 2,
    "route": "/branches"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/register"
  },
  {
    "renderMode": 2,
    "route": "/privacy-policy"
  },
  {
    "renderMode": 2,
    "route": "/terms-conditions"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/profile"
  },
  {
    "renderMode": 2,
    "route": "/kyc"
  },
  {
    "renderMode": 2,
    "route": "/address"
  },
  {
    "renderMode": 2,
    "route": "/bank"
  },
  {
    "renderMode": 2,
    "route": "/apply-loan"
  },
  {
    "renderMode": 2,
    "route": "/manage-loans"
  },
  {
    "renderMode": 2,
    "route": "/manage-compulsary-deposits"
  },
  {
    "renderMode": 2,
    "route": "/transanction-compulsary-deposits"
  },
  {
    "renderMode": 2,
    "route": "/manage-recurring-deposits"
  },
  {
    "renderMode": 2,
    "route": "/transanction-recurring-deposits"
  },
  {
    "renderMode": 2,
    "route": "/manage-fixed-deposits"
  },
  {
    "renderMode": 2,
    "route": "/transanction-fixed-deposits"
  },
  {
    "renderMode": 2,
    "route": "/credit-card"
  },
  {
    "renderMode": 2,
    "route": "/transanction-history"
  },
  {
    "renderMode": 2,
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6686, hash: 'fd579bb9f071e7cbdf15d21e97aaf73929a3472bcb35760c5dd03b590fb84e69', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5543, hash: '9737510d918f923cd3486802c36057fcaafaaa97148b4026693189a4e27f8475', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 84304, hash: '5db09bea9c34e5dee8a715828909d7786ba5103ebc4e7d6bf8b3e5c05337a363', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 123456, hash: '43a6bf2319cd57c77a350cb06cfe49006fa4b502f1c3e3b2586a4dd7e0c487c1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'deposits-services/index.html': {size: 78223, hash: '1c0cae575af0c02d8be2d7fa47cac50b60e511f095649ee4e51f0c17b7ac8de1', text: () => import('./assets-chunks/deposits-services_index_html.mjs').then(m => m.default)},
    'loans-services/index.html': {size: 78212, hash: 'ea3040a0c7ac718ac9ab9558bb55537818804234104a3a21315ae5c20fd83f5c', text: () => import('./assets-chunks/loans-services_index_html.mjs').then(m => m.default)},
    'testimonials/index.html': {size: 89799, hash: 'e9e78892e8a72996182e2865564a797b3f4f229bea50d65185ece4c7e6c16d57', text: () => import('./assets-chunks/testimonials_index_html.mjs').then(m => m.default)},
    'membership/index.html': {size: 86861, hash: 'a4164ab6660333b90432731be5e8506b0c3d76d6d0bc2e1410fb36b72ddca46c', text: () => import('./assets-chunks/membership_index_html.mjs').then(m => m.default)},
    'service-details/index.html': {size: 113864, hash: '27280c880c83dd6f15ab8dfd89a2d297823e0ae9a25caaa03923d99d89dbd168', text: () => import('./assets-chunks/service-details_index_html.mjs').then(m => m.default)},
    'team/index.html': {size: 75229, hash: '5e7a33e0b4973faecc985787636fef2af18257d41c87ce595ac91e18ec6ad2cc', text: () => import('./assets-chunks/team_index_html.mjs').then(m => m.default)},
    'calculator/index.html': {size: 91689, hash: '550eb46e12977ab95f259961750c8180e0f2de69063ef9361ccf57ddfa24e3a0', text: () => import('./assets-chunks/calculator_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 75165, hash: '40a32b54648c87f5661b6291b16fb49044431ee47afe0235b9ee8aff59cf9485', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'self-help-groups/index.html': {size: 72874, hash: 'd977a26a789d59f7072c45587bf9e7820fe522065d7ec9b9a5f5462116dc8be0', text: () => import('./assets-chunks/self-help-groups_index_html.mjs').then(m => m.default)},
    'awards-recognition/index.html': {size: 80698, hash: '7419e81ab25a57779740b48c2b4405dc376c8e6582b64b5ff76ea1f01175311f', text: () => import('./assets-chunks/awards-recognition_index_html.mjs').then(m => m.default)},
    'news-and-events/index.html': {size: 80704, hash: '0bf8639a8c812751af572e3b8b33a2903eb2fbe47b5f0c0408baab4fb7ac045b', text: () => import('./assets-chunks/news-and-events_index_html.mjs').then(m => m.default)},
    'branches/index.html': {size: 75189, hash: 'af95a2b801c03869168a50091adbf1c910a762041f485f65658ef1fdde6106fe', text: () => import('./assets-chunks/branches_index_html.mjs').then(m => m.default)},
    'gifts/index.html': {size: 73899, hash: 'ff6681103159380b93a0f4f36a1b29de4da8587d5721cc7d42a2875f8d8f9345', text: () => import('./assets-chunks/gifts_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 73921, hash: '7d53d568d14b1bdb20273b9e4322a60f5703effdda5e335ecc28dcec81f89f54', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 84374, hash: '2402270623cec5253da8dfbae56647bbe4e4ccde3031b84e361df382ac2c2bd2', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'terms-conditions/index.html': {size: 87561, hash: '4d6d5c4dc727be9f760defdb454a05b45e06bd78856bfdf4787df3e3a4a851dd', text: () => import('./assets-chunks/terms-conditions_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 82648, hash: 'ee486bec11e8847c6c278957a695871847ff619817d6d3694003881b8099d711', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 79602, hash: '64ad44b51cc5ab46edbde09185cdfc136d9629659698be879828323277f2ddca', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 77206, hash: '8438a3df769393c8eba7eb9e4092faae8c3858e0acd4da03d8d02d30af604196', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'kyc/index.html': {size: 72963, hash: '0f35fe2605b56e83fc7f712d3c2560a255f02af713c34ffaf65f4068cba75155', text: () => import('./assets-chunks/kyc_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 86708, hash: '92c8692088a9b65d85fb4bb5904d2a1f3127c556c31f893dfb5e07cc9b509b28', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'address/index.html': {size: 75887, hash: 'f9197aeb37c63d506579926b140279e83fab984c1eb2fc4154d0e4f41e56d40c', text: () => import('./assets-chunks/address_index_html.mjs').then(m => m.default)},
    'bank/index.html': {size: 74467, hash: '79d985e3b22d346a8db5df6f6040fa4186dafd8370a3d3b8c8b4362cabd61ebc', text: () => import('./assets-chunks/bank_index_html.mjs').then(m => m.default)},
    'apply-loan/index.html': {size: 77207, hash: 'abcc3466adef37533d9604ad96d5253866179776fc1147d78d2543d2ef101cca', text: () => import('./assets-chunks/apply-loan_index_html.mjs').then(m => m.default)},
    'manage-loans/index.html': {size: 77206, hash: '8438a3df769393c8eba7eb9e4092faae8c3858e0acd4da03d8d02d30af604196', text: () => import('./assets-chunks/manage-loans_index_html.mjs').then(m => m.default)},
    'transanction-compulsary-deposits/index.html': {size: 77206, hash: '8438a3df769393c8eba7eb9e4092faae8c3858e0acd4da03d8d02d30af604196', text: () => import('./assets-chunks/transanction-compulsary-deposits_index_html.mjs').then(m => m.default)},
    'manage-compulsary-deposits/index.html': {size: 77207, hash: 'abcc3466adef37533d9604ad96d5253866179776fc1147d78d2543d2ef101cca', text: () => import('./assets-chunks/manage-compulsary-deposits_index_html.mjs').then(m => m.default)},
    'manage-recurring-deposits/index.html': {size: 77207, hash: 'abcc3466adef37533d9604ad96d5253866179776fc1147d78d2543d2ef101cca', text: () => import('./assets-chunks/manage-recurring-deposits_index_html.mjs').then(m => m.default)},
    'manage-fixed-deposits/index.html': {size: 77206, hash: '8438a3df769393c8eba7eb9e4092faae8c3858e0acd4da03d8d02d30af604196', text: () => import('./assets-chunks/manage-fixed-deposits_index_html.mjs').then(m => m.default)},
    'transanction-fixed-deposits/index.html': {size: 77207, hash: 'abcc3466adef37533d9604ad96d5253866179776fc1147d78d2543d2ef101cca', text: () => import('./assets-chunks/transanction-fixed-deposits_index_html.mjs').then(m => m.default)},
    'transanction-recurring-deposits/index.html': {size: 77206, hash: '8438a3df769393c8eba7eb9e4092faae8c3858e0acd4da03d8d02d30af604196', text: () => import('./assets-chunks/transanction-recurring-deposits_index_html.mjs').then(m => m.default)},
    'transanction-history/index.html': {size: 77206, hash: '8438a3df769393c8eba7eb9e4092faae8c3858e0acd4da03d8d02d30af604196', text: () => import('./assets-chunks/transanction-history_index_html.mjs').then(m => m.default)},
    'credit-card/index.html': {size: 77207, hash: 'abcc3466adef37533d9604ad96d5253866179776fc1147d78d2543d2ef101cca', text: () => import('./assets-chunks/credit-card_index_html.mjs').then(m => m.default)},
    'styles-GJ4PGCQV.css': {size: 193797, hash: 'MnJRR0XDzYw', text: () => import('./assets-chunks/styles-GJ4PGCQV_css.mjs').then(m => m.default)}
  },
};
