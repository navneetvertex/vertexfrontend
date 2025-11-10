import { Routes } from '@angular/router';
import { HomeDemoOneComponent } from './pages/home-demo-one/home-demo-one.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { HeaderTopComponent } from './common/header-top/header-top.component';
import { HomeDemoTwoComponent } from './pages/home-demo-two/home-demo-two.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SahyogCardComponent } from './pages/sahyog-card/sahyog-card.component';
import { SavingDepositpageComponent } from './pages/saving-depositpage/saving-depositpage.component';
import { FixedDepositComponent } from './pages/fixed-deposit/fixed-deposit.component';
import { PersonalLoanComponent } from './pages/personal-loan/personal-loan.component';
import { SelfHelpgroupComponent } from './pages/self-helpgroup/self-helpgroup.component';
import { LoanAgainstFDComponent } from './pages/loan-against-fd/loan-against-fd.component';
import { RecurringDepositComponent } from './pages/recurring-deposit/recurring-deposit.component';
import { MonthlyIncomeSchemeComponent } from './pages/monthly-income-scheme/monthly-income-scheme.component';
import { SkillUdaanComponent } from './pages/skill-udaan/skill-udaan.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { LoansServicesComponent } from './common/loans-services/loans-services.component';
import { ServiceDetailsPageComponent } from './pages/service-details-page/service-details-page.component';
import { TestimonialsPageComponent } from './pages/testimonials-page/testimonials-page.component';
import { SendMoneyPageComponent } from './pages/send-money-page/send-money-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { SavingGoalsPageComponent } from './pages/saving-goals-page/saving-goals-page.component';
import { CashBackPageComponent } from './pages/cash-back-page/cash-back-page.component';
import { PricingPageComponent } from './pages/pricing-page/pricing-page.component';
import { HelpPageComponent } from './pages/help-page/help-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { PrivacyPolicyPageComponent } from './pages/privacy-policy-page/privacy-policy-page.component';
import { RefundPolicyComponent } from './pages/refund-policy/refund-policy.component';
import { TermsConditionsPageComponent } from './pages/terms-conditions-page/terms-conditions-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { BlogDetailsPageComponent } from './pages/blog-details-page/blog-details-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ServiceMembershipComponent } from './pages/service-membership/service-membership.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ShgComponent } from './pages/shg/shg.component';
import { NewsEventsComponent } from './pages/news-events/news-events.component';
import { GiftsComponent } from './pages/gifts/gifts.component';
import { BranchesComponent } from './pages/branches/branches.component';
import { ProfileComponent } from './pages/dashboard/profile/profile.component';
import { AuthGuard } from './core/guards/auth.guard';
import { KycComponent } from './pages/kyc/kyc.component';
import { AddressComponent } from './pages/address/address.component';
import { BankComponent } from './pages/bank/bank.component';
import { LandingComponent } from './common/landing/landing.component';

export const routes: Routes = [
    {path: '', component: HomeDemoTwoComponent},
    { path: 'landing', component: LandingComponent },
    {path: 'about', component: AboutPageComponent},  
    {path: 'sahyogCard', component: SahyogCardComponent},  
    {path: 'savingdeposit', component: SavingDepositpageComponent},  
    {path: 'fixeddeposit', component: FixedDepositComponent},  
    {path: 'PersonalLoan', component: PersonalLoanComponent},  
    {path: 'selfhelpgroup', component: SelfHelpgroupComponent}, 
    {path: 'loanagainstFD', component: LoanAgainstFDComponent},   
    {path: 'recurringdeposit', component: RecurringDepositComponent},  
    {path: 'monthlyincomscgeme', component: MonthlyIncomeSchemeComponent},  
    {path: 'skilludaan', component: SkillUdaanComponent},  
    {path: 'deposits-services', component: ServicesPageComponent},
    {path: 'loansservices', component: LoansServicesComponent},
    {path: 'membership', component: ServiceMembershipComponent},
    {path: 'service-details', component: ServiceDetailsPageComponent},
    {path: 'testimonials', component: TestimonialsPageComponent},
    {path: 'calculator', component: SendMoneyPageComponent},
    {path: 'team', component: TeamPageComponent},
    {path: 'faq', component: FaqPageComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'self-help-groups', component: ShgComponent},
    {path: 'news-and-events', component: NewsEventsComponent},
    {path: 'awards-recognition', component: NewsEventsComponent},
    {path: 'gifts', component: GiftsComponent},
    {path: 'branches', component: BranchesComponent},
    // {path: 'saving-goals', component: SavingGoalsPageComponent},
    // {path: 'cash-back', component: CashBackPageComponent},
    // {path: 'pricing', component: PricingPageComponent},
    // {path: 'help', component: HelpPageComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'register', component: RegisterPageComponent},
    {path: 'privacy-policy', component: PrivacyPolicyPageComponent},
    {path: 'refund-policy', component: RefundPolicyComponent},
    {path: 'terms-conditions', component: TermsConditionsPageComponent},
    // {path: 'blog', component: BlogPageComponent},
    // {path: 'blog-details', component: BlogDetailsPageComponent},
    {path: 'contact',component: ContactPageComponent},
    // Here add new pages component

    {path: 'profile', component: ProfileComponent },
    {path: 'kyc', component: KycComponent },
    {path: 'address', component: AddressComponent },
    {path: 'bank', component: BankComponent },
    
    {path: 'apply-loan', component: ProfileComponent },
    {path: 'manage-loans', component: ProfileComponent },
    
    {path: 'manage-compulsary-deposits', component: ProfileComponent },
    {path: 'transanction-compulsary-deposits', component: ProfileComponent },

    {path: 'manage-recurring-deposits', component: ProfileComponent },
    {path: 'transanction-recurring-deposits', component: ProfileComponent },

    {path: 'manage-fixed-deposits', component: ProfileComponent },
    {path: 'transanction-fixed-deposits', component: ProfileComponent },

    {path: 'credit-card', component: ProfileComponent },
    {path: 'transanction-history', component: ProfileComponent },
    
    {path: '**', component: NotFoundComponent},
    {path: '', component: HeaderTopComponent}
];