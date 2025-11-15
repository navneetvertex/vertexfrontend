
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
    "route": "/landing"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/sahyogCard"
  },
  {
    "renderMode": 2,
    "route": "/savingdeposit"
  },
  {
    "renderMode": 2,
    "route": "/fixeddeposit"
  },
  {
    "renderMode": 2,
    "route": "/PersonalLoan"
  },
  {
    "renderMode": 2,
    "route": "/selfhelpgroup"
  },
  {
    "renderMode": 2,
    "route": "/loanagainstFD"
  },
  {
    "renderMode": 2,
    "route": "/recurringdeposit"
  },
  {
    "renderMode": 2,
    "route": "/monthlyincomscgeme"
  },
  {
    "renderMode": 2,
    "route": "/skilludaan"
  },
  {
    "renderMode": 2,
    "route": "/deposits-services"
  },
  {
    "renderMode": 2,
    "route": "/loansservices"
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
    "route": "/refund-policy"
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
    'index.csr.html': {size: 6686, hash: 'd728852c68d726a38e7113ade19cc6f5d48f23723ea730bf33fc67d683d56ea2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5543, hash: '1447b1d46cef3ce9d92a8e46e0554a80938e4c779ccedc313b959162b82399f9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 162100, hash: '38d4bc6b4eb86ea7a844ef273c22902f4ba4ca516d3116d7aa6abe26ce13b2c9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'landing/index.html': {size: 87575, hash: '1359a62431c3339f3a1f70bbe6b26a71bad04655476430c5b32049cc498d016f', text: () => import('./assets-chunks/landing_index_html.mjs').then(m => m.default)},
    'sahyogCard/index.html': {size: 94047, hash: 'e3531e70cf3d4b54ace005cb32fbbee06a36bb123bffea82c2177647f0012f12', text: () => import('./assets-chunks/sahyogCard_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 99219, hash: '91ad5bd6bb1ff074b188843c484459b370dff05abd2950852bf694d7fd577577', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'savingdeposit/index.html': {size: 93109, hash: 'aebfa1d14fd5aded757b4e43f3cb7ed31434382e88568a32180a0e1713ec784e', text: () => import('./assets-chunks/savingdeposit_index_html.mjs').then(m => m.default)},
    'fixeddeposit/index.html': {size: 92186, hash: 'af158b19f95292d57f42626c8bf24118defc838b9312d71c0318c56b13288b8c', text: () => import('./assets-chunks/fixeddeposit_index_html.mjs').then(m => m.default)},
    'selfhelpgroup/index.html': {size: 86390, hash: '151f1f5d69a6965a5ddc3a42cdfb9cff41c1b05f11ea0a11a24da57dff5b235f', text: () => import('./assets-chunks/selfhelpgroup_index_html.mjs').then(m => m.default)},
    'PersonalLoan/index.html': {size: 87448, hash: '3c241170cff219ffcaf18881ee6d3c7cf50db779dbee4dc51332896cac1e35bb', text: () => import('./assets-chunks/PersonalLoan_index_html.mjs').then(m => m.default)},
    'loanagainstFD/index.html': {size: 86393, hash: '98f1d043d36f4e3707574d30519367aea311c47dbc11255f90fdb190a4302185', text: () => import('./assets-chunks/loanagainstFD_index_html.mjs').then(m => m.default)},
    'recurringdeposit/index.html': {size: 103988, hash: 'a774920a145bbf94bbe3ab8f12618b02d3dde0139be16c9f72bcf10c98083d1c', text: () => import('./assets-chunks/recurringdeposit_index_html.mjs').then(m => m.default)},
    'monthlyincomscgeme/index.html': {size: 92162, hash: 'b54d93ba71db9ad93d0705387e72d8b9d2cc4002f893be781a329c388a45ab2a', text: () => import('./assets-chunks/monthlyincomscgeme_index_html.mjs').then(m => m.default)},
    'deposits-services/index.html': {size: 97855, hash: '198ee7899e68623325bb26785972ad4e986d468da14ab8419c8bf0b0d5af0565', text: () => import('./assets-chunks/deposits-services_index_html.mjs').then(m => m.default)},
    'skilludaan/index.html': {size: 94007, hash: 'e88ad967aad722cca5fce0763f74d1e372a80e0dfc3c50dc3749964a6bac7c0d', text: () => import('./assets-chunks/skilludaan_index_html.mjs').then(m => m.default)},
    'service-details/index.html': {size: 131171, hash: '7c9d93447c06ab6ad5b6d6a04dfc75b1f26b8404250b69af82140170d8a3ca27', text: () => import('./assets-chunks/service-details_index_html.mjs').then(m => m.default)},
    'loansservices/index.html': {size: 91066, hash: '6afcd1165b15189d485c865a36acd8aee704726eebd6428d7d2a3427b5cbfcc3', text: () => import('./assets-chunks/loansservices_index_html.mjs').then(m => m.default)},
    'membership/index.html': {size: 95743, hash: '65aba4e80fb3944dd10ae4b09f1b13018ae9650003e781fc25e40d01b06e05e4', text: () => import('./assets-chunks/membership_index_html.mjs').then(m => m.default)},
    'team/index.html': {size: 89924, hash: '1948e5950fc88ed3949546d2393e811bdb64fc43225c81b540738a54d2ab2adb', text: () => import('./assets-chunks/team_index_html.mjs').then(m => m.default)},
    'testimonials/index.html': {size: 100609, hash: 'f801ec1b2d73b3d4ce075bca7bc5f50d2c72813c2cdc5d032981d75c81de5156', text: () => import('./assets-chunks/testimonials_index_html.mjs').then(m => m.default)},
    'calculator/index.html': {size: 104226, hash: '71302ec200226282f0bc20aa2c7cdc38feba623ade75c5bac84910b285c43ca7', text: () => import('./assets-chunks/calculator_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 89776, hash: '69d7532308352b8c80c0f441223333ada96dcb19c0898146b45052810a206af6', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 104440, hash: '11ff7da32fcbdf85e16274803373bae09471274e745533118587d5c050df6a21', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'self-help-groups/index.html': {size: 90639, hash: 'a8c0bae8754b1da57924ab3420273e59b5aa17ad98d450468fa6a6b0d4472f81', text: () => import('./assets-chunks/self-help-groups_index_html.mjs').then(m => m.default)},
    'news-and-events/index.html': {size: 98450, hash: 'db05102b65583c346c31c204b5a078ef2fbfcd99049a77ccb09321928822ecb3', text: () => import('./assets-chunks/news-and-events_index_html.mjs').then(m => m.default)},
    'awards-recognition/index.html': {size: 98450, hash: 'db05102b65583c346c31c204b5a078ef2fbfcd99049a77ccb09321928822ecb3', text: () => import('./assets-chunks/awards-recognition_index_html.mjs').then(m => m.default)},
    'gifts/index.html': {size: 91837, hash: '423e198e4236b8493604ccb03d135df3ed9759b6f9ffc949f133ca332a894988', text: () => import('./assets-chunks/gifts_index_html.mjs').then(m => m.default)},
    'branches/index.html': {size: 94868, hash: '0f0366093cfe57930a6178e797de372b14e87935671b4b9979e714433beb7137', text: () => import('./assets-chunks/branches_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 91776, hash: '01d1883f8e3456bd1487cd5b4bd67ef4c0d2ed9c700ea86e362fda5893688df2', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 100413, hash: '7022f3be4085cad50b46fbdc9f073c7f9886c57a4ed80f699d30f3f314871fcd', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'refund-policy/index.html': {size: 94540, hash: '1014073740bb024cebf5a9dd5de0f55670dab3324a4e1875d06217d3866ee04b', text: () => import('./assets-chunks/refund-policy_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 101161, hash: '2208de95d2acaca554bead5a0056930b2032bf38c4cd62dfef6cc94b174b717c', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'terms-conditions/index.html': {size: 96930, hash: 'ba8f78eae5e506feba1d2e802d462bae0163de5a734976e8b3d21f6e26ecbc4d', text: () => import('./assets-chunks/terms-conditions_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 92508, hash: '9161499f9c620755cf9e013709f12bc402fc3bb51e280d37262b166697cea9f0', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 94748, hash: '0f405a822cb5c0988f19b96f93b52fc2f8294a4b60b9c185d828fbf002bcc28e', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'kyc/index.html': {size: 92836, hash: '74e4090058de3039638b806698ef47ab0651a82a9d9ba51f88a6a72938f373b2', text: () => import('./assets-chunks/kyc_index_html.mjs').then(m => m.default)},
    'address/index.html': {size: 93311, hash: 'c2b52a304bf315fd42f188a205e1e3d10d9d309cd75b954d2e7d07f1c86062d1', text: () => import('./assets-chunks/address_index_html.mjs').then(m => m.default)},
    'bank/index.html': {size: 91925, hash: '5fcb54c9194a1d30796e7a121e871a4375af6109a93f44ddb0b7fb239ef6b902', text: () => import('./assets-chunks/bank_index_html.mjs').then(m => m.default)},
    'apply-loan/index.html': {size: 94748, hash: '0f405a822cb5c0988f19b96f93b52fc2f8294a4b60b9c185d828fbf002bcc28e', text: () => import('./assets-chunks/apply-loan_index_html.mjs').then(m => m.default)},
    'manage-compulsary-deposits/index.html': {size: 94748, hash: '0f405a822cb5c0988f19b96f93b52fc2f8294a4b60b9c185d828fbf002bcc28e', text: () => import('./assets-chunks/manage-compulsary-deposits_index_html.mjs').then(m => m.default)},
    'manage-loans/index.html': {size: 94748, hash: '0f405a822cb5c0988f19b96f93b52fc2f8294a4b60b9c185d828fbf002bcc28e', text: () => import('./assets-chunks/manage-loans_index_html.mjs').then(m => m.default)},
    'transanction-recurring-deposits/index.html': {size: 94748, hash: '0f405a822cb5c0988f19b96f93b52fc2f8294a4b60b9c185d828fbf002bcc28e', text: () => import('./assets-chunks/transanction-recurring-deposits_index_html.mjs').then(m => m.default)},
    'manage-recurring-deposits/index.html': {size: 94748, hash: '0f405a822cb5c0988f19b96f93b52fc2f8294a4b60b9c185d828fbf002bcc28e', text: () => import('./assets-chunks/manage-recurring-deposits_index_html.mjs').then(m => m.default)},
    'transanction-compulsary-deposits/index.html': {size: 94748, hash: '0f405a822cb5c0988f19b96f93b52fc2f8294a4b60b9c185d828fbf002bcc28e', text: () => import('./assets-chunks/transanction-compulsary-deposits_index_html.mjs').then(m => m.default)},
    'manage-fixed-deposits/index.html': {size: 94748, hash: '0f405a822cb5c0988f19b96f93b52fc2f8294a4b60b9c185d828fbf002bcc28e', text: () => import('./assets-chunks/manage-fixed-deposits_index_html.mjs').then(m => m.default)},
    'credit-card/index.html': {size: 94748, hash: '0f405a822cb5c0988f19b96f93b52fc2f8294a4b60b9c185d828fbf002bcc28e', text: () => import('./assets-chunks/credit-card_index_html.mjs').then(m => m.default)},
    'transanction-fixed-deposits/index.html': {size: 94748, hash: '0f405a822cb5c0988f19b96f93b52fc2f8294a4b60b9c185d828fbf002bcc28e', text: () => import('./assets-chunks/transanction-fixed-deposits_index_html.mjs').then(m => m.default)},
    'transanction-history/index.html': {size: 94748, hash: '0f405a822cb5c0988f19b96f93b52fc2f8294a4b60b9c185d828fbf002bcc28e', text: () => import('./assets-chunks/transanction-history_index_html.mjs').then(m => m.default)},
    'main-3VLHCOPL.css': {size: 39218, hash: 'qmgaBo2BjZI', text: () => import('./assets-chunks/main-3VLHCOPL_css.mjs').then(m => m.default)},
    'main.server.css': {size: 39218, hash: 'qmgaBo2BjZI', text: () => import('./assets-chunks/main_server_css.mjs').then(m => m.default)},
    'styles-3YDKYJK5.css': {size: 195387, hash: 'qaGj5Sr2+7k', text: () => import('./assets-chunks/styles-3YDKYJK5_css.mjs').then(m => m.default)}
  },
};
