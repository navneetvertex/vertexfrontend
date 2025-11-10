import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CalculateComponent } from '../../common/calculate/calculate.component';
import { CollectingPaymentsComponent } from '../../common/collecting-payments/collecting-payments.component';
import { DigitalBankingComponent } from '../../common/digital-banking/digital-banking.component';
import { SubscriptionComparisonComponent } from '../../common/subscription-comparison/subscription-comparison.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-service-membership',
  imports: [RouterLink,CommonModule, DigitalBankingComponent, CollectingPaymentsComponent, SubscriptionComparisonComponent],
  standalone: true,
  templateUrl: './service-membership.component.html',
  styleUrl: './service-membership.component.scss'
})    
export class ServiceMembershipComponent {
  activeTab = 0;

  tabs = [
    { title: 'Benefits' },
    { title: 'How to Join' },
    { title: 'Eligibility' },
    { title: 'Membership Fee' },
    { title: 'Resignation' }
  ];

  membershipContent = {
    benefits: `Vertex Kalyan Cooperative Society has developed an excellent reputation in taking care of the financial needs for a wide variety of businesses and individuals. You can count on us for professional service and a wealth of information.`,

    howToJoin: [
      { label: 'Photo ID', value: 'Voter ID, Aadhar, PAN' },
      { label: 'Address Proof', value: 'Electricity/Water bill' },
      { label: 'Rent Agreement', value: "With landlord's utility bill if tenant" },
      { label: 'Photos', value: '3 recent passport-size photos' }
    ],

    eligibility: `Vertex Kalyan Cooperative Society has developed an excellent reputation in taking care of the financial needs for a wide variety of businesses and individuals. You can count on us for professional service and a wealth of information.`,

    fees: [
      { label: 'Share Money', amount: 500 },
      { label: 'Compulsory Deposit', amount: 200 },
      { label: 'Miscellaneous', amount: 300 }
    ],

    resignationSteps: [
      'Submit resignation with Photo ID',
      '1-year minimum account age required',
      'Processing time: 1–3 months',
      'Non-refundable closure fee applies',
      'Refunds issued via cheque or online'
    ]
  };

  get totalFee(): number {
    return this.membershipContent.fees.reduce((sum, item) => sum + item.amount, 0);
  }
}
