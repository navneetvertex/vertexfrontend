
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
    "route": "/skilludaan"
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
    'index.csr.html': {size: 6686, hash: 'da4a826c4d7016de3db46148d47ac42a1e1192e0a2d12b52d7061f4d3c0138a9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5543, hash: 'f1a75de040cef5a34d4a8f9f617406ef54670a8f961cec59ecaec1a19396fdd8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'landing/index.html': {size: 65264, hash: 'a27f05fb4f81f8e4429bba5740a760465b35233239a965ca9dd73d4cf16041fc', text: () => import('./assets-chunks/landing_index_html.mjs').then(m => m.default)},
    'skilludaan/index.html': {size: 71805, hash: '9f280e4fef4762544be827a1ffc18197af9445ff236d36df61af3a0e028b2f0e', text: () => import('./assets-chunks/skilludaan_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 77826, hash: '6dd3b4bdad03b28b2f98b5730afd2b799a18db10b3a160e02956d0d1b0779f16', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'loans-services/index.html': {size: 70603, hash: '4fe995837d65df5990d46279c6b852873bcfa884b1323271e8580a9decfb12b0', text: () => import('./assets-chunks/loans-services_index_html.mjs').then(m => m.default)},
    'membership/index.html': {size: 73576, hash: '5971528d44e8a1549c864c1be35ae1bdf6e720dafb422efeb0e4b44d61b0e805', text: () => import('./assets-chunks/membership_index_html.mjs').then(m => m.default)},
    'service-details/index.html': {size: 102431, hash: 'c5e0e19a0996226dff8690f40eb3c72c300b846088d5c5b40ad953f3f420c33a', text: () => import('./assets-chunks/service-details_index_html.mjs').then(m => m.default)},
    'testimonials/index.html': {size: 78284, hash: '955b655b4d7717ca70c2a0ed848b53e7d3d323647d6f7fd78340e29b48ad113f', text: () => import('./assets-chunks/testimonials_index_html.mjs').then(m => m.default)},
    'team/index.html': {size: 67425, hash: '3f122e835b84ec1f6bca159d558f5178c2b8b89c5135b3b0fd52df9a2aa26426', text: () => import('./assets-chunks/team_index_html.mjs').then(m => m.default)},
    'calculator/index.html': {size: 76695, hash: 'f4cec6d18a7054be782dc1b998123aef4512d38a1d2759c91ee938384c2ed419', text: () => import('./assets-chunks/calculator_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 82357, hash: '12a31a8f5f6e83734285d431b99619eeb8daa11ee30ca2fee21c5c0ace726ecf', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 67361, hash: 'b6d9204658f1140b4a972b78f24eb301c8e105b12832c066402d60c0296c4b6d', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'deposits-services/index.html': {size: 70604, hash: '3bc2253867ec5122de62bec9295dc93461b5b4ca79f766705794048e8f62e45e', text: () => import('./assets-chunks/deposits-services_index_html.mjs').then(m => m.default)},
    'index.html': {size: 105516, hash: '877088b491c5b2f6fcf4dc9889218ceedc38cd81aa8963fe81a6b8b6ec7eaca5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'news-and-events/index.html': {size: 76294, hash: '0c858216c2c811367ffdb608739396b32b6815c2b763d99b10b6edf9b16ac570', text: () => import('./assets-chunks/news-and-events_index_html.mjs').then(m => m.default)},
    'self-help-groups/index.html': {size: 68255, hash: 'a50cd11094d06d2daa718e34e5922ff43e28224745733bb7ad135278147cd74c', text: () => import('./assets-chunks/self-help-groups_index_html.mjs').then(m => m.default)},
    'branches/index.html': {size: 72327, hash: '6787938ebe4db042410f831faaf9b8c918d4980d489cccd95e59730292e9066c', text: () => import('./assets-chunks/branches_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 69230, hash: 'ff634960752067a8925a82d40b7c26f02a9b9ea988c7e3a132ee165907781e04', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'gifts/index.html': {size: 69442, hash: '35b1c691893c1eaa6f49f0f0a5752666a4da391fa2101076b0c310c6c83ee40e', text: () => import('./assets-chunks/gifts_index_html.mjs').then(m => m.default)},
    'awards-recognition/index.html': {size: 76295, hash: 'f4b45af610ccdb9b08576752180d46e40b4683b663c1a1fac50c39ea2f4abddd', text: () => import('./assets-chunks/awards-recognition_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 76613, hash: '1c19d9109e0b63c75944ac310195a114d6cd622e35c03dff0558ac521413d86d', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 77923, hash: '9aaf09bb636e3841881bc256ffa4aae9a32e23d5ba0d8d59a7842a5b9d0f0d02', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 74873, hash: '61dd3defbb207486e8ad7254f794e5e75022c854c89ed83bc0db1682e01a8c61', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'terms-conditions/index.html': {size: 79852, hash: '248031ba9f894290e816575c7c701f3fca60638709db4b09c56d7b6c9aacbf75', text: () => import('./assets-chunks/terms-conditions_index_html.mjs').then(m => m.default)},
    'bank/index.html': {size: 69723, hash: '6846eebfb46cbbe488299cca4a1e0266da09c026acabd0588950fb05ed0c2b24', text: () => import('./assets-chunks/bank_index_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 72548, hash: '6c9fb896da9f945c870a55ecf6060bbd00db8caa200d33b0b8f23492e1edbb8f', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'kyc/index.html': {size: 70636, hash: '79f6fc0bb4a7a12135f852ef602d9d6d15021653c23101afb607d029d1faf5b7', text: () => import('./assets-chunks/kyc_index_html.mjs').then(m => m.default)},
    'address/index.html': {size: 71131, hash: '3a51bce3ec3949f9b42e7844e14e57e2ca4cde8ea772c3c42d8b0f313efa4ee1', text: () => import('./assets-chunks/address_index_html.mjs').then(m => m.default)},
    'manage-loans/index.html': {size: 72548, hash: '6c9fb896da9f945c870a55ecf6060bbd00db8caa200d33b0b8f23492e1edbb8f', text: () => import('./assets-chunks/manage-loans_index_html.mjs').then(m => m.default)},
    'manage-compulsary-deposits/index.html': {size: 72548, hash: '6c9fb896da9f945c870a55ecf6060bbd00db8caa200d33b0b8f23492e1edbb8f', text: () => import('./assets-chunks/manage-compulsary-deposits_index_html.mjs').then(m => m.default)},
    'apply-loan/index.html': {size: 72548, hash: 'ce0322218e697a5a83edd248a24330a776cd903bb9f10f8947c5957dbd776a91', text: () => import('./assets-chunks/apply-loan_index_html.mjs').then(m => m.default)},
    'transanction-compulsary-deposits/index.html': {size: 72549, hash: '4c2139515a493a71d113361855af76e4ab47e5976b1dcffc35d4ebb5d9aafad2', text: () => import('./assets-chunks/transanction-compulsary-deposits_index_html.mjs').then(m => m.default)},
    'manage-recurring-deposits/index.html': {size: 72548, hash: '6c9fb896da9f945c870a55ecf6060bbd00db8caa200d33b0b8f23492e1edbb8f', text: () => import('./assets-chunks/manage-recurring-deposits_index_html.mjs').then(m => m.default)},
    'transanction-recurring-deposits/index.html': {size: 72548, hash: '6c9fb896da9f945c870a55ecf6060bbd00db8caa200d33b0b8f23492e1edbb8f', text: () => import('./assets-chunks/transanction-recurring-deposits_index_html.mjs').then(m => m.default)},
    'manage-fixed-deposits/index.html': {size: 72548, hash: 'ce0322218e697a5a83edd248a24330a776cd903bb9f10f8947c5957dbd776a91', text: () => import('./assets-chunks/manage-fixed-deposits_index_html.mjs').then(m => m.default)},
    'transanction-fixed-deposits/index.html': {size: 72549, hash: '4c2139515a493a71d113361855af76e4ab47e5976b1dcffc35d4ebb5d9aafad2', text: () => import('./assets-chunks/transanction-fixed-deposits_index_html.mjs').then(m => m.default)},
    'credit-card/index.html': {size: 72548, hash: '6c9fb896da9f945c870a55ecf6060bbd00db8caa200d33b0b8f23492e1edbb8f', text: () => import('./assets-chunks/credit-card_index_html.mjs').then(m => m.default)},
    'transanction-history/index.html': {size: 72548, hash: '6c9fb896da9f945c870a55ecf6060bbd00db8caa200d33b0b8f23492e1edbb8f', text: () => import('./assets-chunks/transanction-history_index_html.mjs').then(m => m.default)},
    'styles-JIXBJ5LZ.css': {size: 191895, hash: '009To/6S3zM', text: () => import('./assets-chunks/styles-JIXBJ5LZ_css.mjs').then(m => m.default)}
  },
};
