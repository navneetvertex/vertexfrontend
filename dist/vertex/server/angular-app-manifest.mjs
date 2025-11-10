
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
    'index.csr.html': {size: 6686, hash: '8d93a2e9f9caa8d99f3706c037b2e7ab37adad70cf9aa7e6034c72b1c30f2757', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5543, hash: 'fbb13f564095e203a3a062f48a7a30149b3742ad9f74716cfb13449ed0207ca8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'landing/index.html': {size: 88365, hash: '65c6f8838f178326df956e5aa6345d1c9ea7a10bed78b1021e3c5bbcf29ea565', text: () => import('./assets-chunks/landing_index_html.mjs').then(m => m.default)},
    'sahyogCard/index.html': {size: 94776, hash: '763789c08b1fa065a0be14db0ebb80fa27efe2d564f5345e72f9fda7126c0335', text: () => import('./assets-chunks/sahyogCard_index_html.mjs').then(m => m.default)},
    'savingdeposit/index.html': {size: 93921, hash: '6dd0c6e7b902de3d0424c636553715ba1f37097d72df20ebd7c6a1428c9ce2ac', text: () => import('./assets-chunks/savingdeposit_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 100060, hash: '2817bbbaa2ee3b8c83fa846db8514a876bbf2cc04e545fb1fb35a75ea5efa113', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'fixeddeposit/index.html': {size: 93015, hash: 'fd13c2cf93750e929b4fac368de14ba9e0a89200eabe7a3fbfd92917217112e5', text: () => import('./assets-chunks/fixeddeposit_index_html.mjs').then(m => m.default)},
    'index.html': {size: 161006, hash: 'dd14e294fe29ff32cb5ad5f4aa4fcb51b1108cc25f52f4b51281db6848888d2c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'selfhelpgroup/index.html': {size: 87180, hash: '9b26297bb0fe766a8bf11c12683d9dafb4e59b6fecf28413756c500d63db70a3', text: () => import('./assets-chunks/selfhelpgroup_index_html.mjs').then(m => m.default)},
    'PersonalLoan/index.html': {size: 88277, hash: '79faa9ac064fb646c9ebd8b7129bc62ea2e7a1c74808d72e7eca819905057209', text: () => import('./assets-chunks/PersonalLoan_index_html.mjs').then(m => m.default)},
    'monthlyincomscgeme/index.html': {size: 92991, hash: '0a3cd22324b66029b7e13753725736ee5af41bebfffff5148e53e400e6c833a0', text: () => import('./assets-chunks/monthlyincomscgeme_index_html.mjs').then(m => m.default)},
    'recurringdeposit/index.html': {size: 104817, hash: '7f8f56b77216136e9232573e2999d0442d564530683fb2295892d2c6b5f3c474', text: () => import('./assets-chunks/recurringdeposit_index_html.mjs').then(m => m.default)},
    'loanagainstFD/index.html': {size: 87183, hash: 'fddd1438ae2557ba16c6e16285d8489342e8c952bac30f50599897911846adfa', text: () => import('./assets-chunks/loanagainstFD_index_html.mjs').then(m => m.default)},
    'deposits-services/index.html': {size: 98573, hash: '3680f2b61a70928fdbbbec9554bc88e30a98abaa244d5e35748faec6eec3edd0', text: () => import('./assets-chunks/deposits-services_index_html.mjs').then(m => m.default)},
    'loansservices/index.html': {size: 91795, hash: 'f834cbdb4d5e4f2e6fbfa271c7ad96020174211b37db889010d2a1495cf5188b', text: () => import('./assets-chunks/loansservices_index_html.mjs').then(m => m.default)},
    'skilludaan/index.html': {size: 94836, hash: 'bf56c1c86ace728f61a7ba2f260028ee17aa8e28c9532ad3ac5836b88a5bc2ba', text: () => import('./assets-chunks/skilludaan_index_html.mjs').then(m => m.default)},
    'membership/index.html': {size: 96472, hash: 'b75774960449faf32e87dc06656cba8509091846293c56bd66d11a36d59f8b27', text: () => import('./assets-chunks/membership_index_html.mjs').then(m => m.default)},
    'testimonials/index.html': {size: 101276, hash: '1f9d5c250c7f31a85d49e160a1ca09084f9f630d99a673da964d48f323d6665a', text: () => import('./assets-chunks/testimonials_index_html.mjs').then(m => m.default)},
    'service-details/index.html': {size: 131888, hash: '68bbe840587d9985758d5c2b974e796508050fcdc2616395bb257062c6327037', text: () => import('./assets-chunks/service-details_index_html.mjs').then(m => m.default)},
    'calculator/index.html': {size: 98049, hash: '9f1caaa3bc4a584a72a7521286e65316f7dc53f2fa7567ac0526f69e4c0d4fbe', text: () => import('./assets-chunks/calculator_index_html.mjs').then(m => m.default)},
    'team/index.html': {size: 90591, hash: '9b9df79a1894a2174a8f1298bee0391b6ee2d1c6c0f489492566c45467e414ba', text: () => import('./assets-chunks/team_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 105098, hash: '282ba4c06040ca9e1be39a554232a63685cce5df63097822f5f7dfdc0a7d551b', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'news-and-events/index.html': {size: 99101, hash: '1b0f9b1ada9371402a81c4313e806f27e8afda2e62075eda4ff85895d2cef9c7', text: () => import('./assets-chunks/news-and-events_index_html.mjs').then(m => m.default)},
    'self-help-groups/index.html': {size: 91306, hash: 'c43b049b7ff5fb485030bffa02c3afaa529bd7c65b0f0b1717595220dd0244f2', text: () => import('./assets-chunks/self-help-groups_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 90443, hash: '0af0a1672823ed2413999e86c658062573ded1a3139288a10a67f7ecfeba5fc8', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'awards-recognition/index.html': {size: 99101, hash: '1b0f9b1ada9371402a81c4313e806f27e8afda2e62075eda4ff85895d2cef9c7', text: () => import('./assets-chunks/awards-recognition_index_html.mjs').then(m => m.default)},
    'gifts/index.html': {size: 92504, hash: 'ef1831c03c2874dbd85ff5eefdedf534c170da2fab7360410add694cdcd323b9', text: () => import('./assets-chunks/gifts_index_html.mjs').then(m => m.default)},
    'branches/index.html': {size: 95601, hash: 'b9f59ace9ecf5d58485f48fbddf28a9178900df0592d317d3aed28fe1040c633', text: () => import('./assets-chunks/branches_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 92504, hash: 'ccf4cb8700b5f29c80469df1175c58c76497cc82286c29779862b9aaa4d1c5b4', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 101141, hash: '9baffb018b99e88ff271416180f49c385fb3749e635ea91ef1c6984017e7e523', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'refund-policy/index.html': {size: 95235, hash: 'a57e0e4e6398ed0d6b2b0f319478470e32f72df54178a80786c058cf7b599f8a', text: () => import('./assets-chunks/refund-policy_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 101856, hash: '168d8944f007268c00ac3abbd03c41edb68eecfa4b9d0fb674208f5d525c0e52', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 93205, hash: '53079bf9804b15e1169e393c97a32a97e28e1958a2f1657244feb420fc290db9', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 95443, hash: '2b0bd708aab16d3e97482869df35b237773ce783e197d016c0ec5951395c4960', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'terms-conditions/index.html': {size: 97625, hash: 'e44efb3e3ce4d9c0e31e88f107a7f55fc8e233fad6b6f1469fee76f28bc2ab2f', text: () => import('./assets-chunks/terms-conditions_index_html.mjs').then(m => m.default)},
    'bank/index.html': {size: 92620, hash: '9f414f57659b8258dbd054577fa54e729a235476b03eac98b32622b46b149f5d', text: () => import('./assets-chunks/bank_index_html.mjs').then(m => m.default)},
    'address/index.html': {size: 94006, hash: '9b6051edda1fd60692373d1f08b3d7783b206818a29e9b46adaca1f8c8674954', text: () => import('./assets-chunks/address_index_html.mjs').then(m => m.default)},
    'kyc/index.html': {size: 93531, hash: 'edeac51baa397f46080a9da0c602f2401376a188d65dad1aabaaeae46aea33f3', text: () => import('./assets-chunks/kyc_index_html.mjs').then(m => m.default)},
    'apply-loan/index.html': {size: 95443, hash: '2b0bd708aab16d3e97482869df35b237773ce783e197d016c0ec5951395c4960', text: () => import('./assets-chunks/apply-loan_index_html.mjs').then(m => m.default)},
    'manage-loans/index.html': {size: 95443, hash: '2b0bd708aab16d3e97482869df35b237773ce783e197d016c0ec5951395c4960', text: () => import('./assets-chunks/manage-loans_index_html.mjs').then(m => m.default)},
    'manage-recurring-deposits/index.html': {size: 95443, hash: '2b0bd708aab16d3e97482869df35b237773ce783e197d016c0ec5951395c4960', text: () => import('./assets-chunks/manage-recurring-deposits_index_html.mjs').then(m => m.default)},
    'transanction-compulsary-deposits/index.html': {size: 95443, hash: '2b0bd708aab16d3e97482869df35b237773ce783e197d016c0ec5951395c4960', text: () => import('./assets-chunks/transanction-compulsary-deposits_index_html.mjs').then(m => m.default)},
    'manage-compulsary-deposits/index.html': {size: 95443, hash: '2b0bd708aab16d3e97482869df35b237773ce783e197d016c0ec5951395c4960', text: () => import('./assets-chunks/manage-compulsary-deposits_index_html.mjs').then(m => m.default)},
    'transanction-recurring-deposits/index.html': {size: 95443, hash: '2b0bd708aab16d3e97482869df35b237773ce783e197d016c0ec5951395c4960', text: () => import('./assets-chunks/transanction-recurring-deposits_index_html.mjs').then(m => m.default)},
    'transanction-fixed-deposits/index.html': {size: 95443, hash: '2b0bd708aab16d3e97482869df35b237773ce783e197d016c0ec5951395c4960', text: () => import('./assets-chunks/transanction-fixed-deposits_index_html.mjs').then(m => m.default)},
    'manage-fixed-deposits/index.html': {size: 95443, hash: '2b0bd708aab16d3e97482869df35b237773ce783e197d016c0ec5951395c4960', text: () => import('./assets-chunks/manage-fixed-deposits_index_html.mjs').then(m => m.default)},
    'credit-card/index.html': {size: 95443, hash: '2b0bd708aab16d3e97482869df35b237773ce783e197d016c0ec5951395c4960', text: () => import('./assets-chunks/credit-card_index_html.mjs').then(m => m.default)},
    'transanction-history/index.html': {size: 95443, hash: '2b0bd708aab16d3e97482869df35b237773ce783e197d016c0ec5951395c4960', text: () => import('./assets-chunks/transanction-history_index_html.mjs').then(m => m.default)},
    'main-3VLHCOPL.css': {size: 39218, hash: 'qmgaBo2BjZI', text: () => import('./assets-chunks/main-3VLHCOPL_css.mjs').then(m => m.default)},
    'main.server.css': {size: 39218, hash: 'qmgaBo2BjZI', text: () => import('./assets-chunks/main_server_css.mjs').then(m => m.default)},
    'styles-K3MGYYEK.css': {size: 195280, hash: 'CQPWsc73Hcw', text: () => import('./assets-chunks/styles-K3MGYYEK_css.mjs').then(m => m.default)}
  },
};
