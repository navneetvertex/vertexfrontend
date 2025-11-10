export class User {
    _id: number;
    status: string;
    password: string;
    name?: string;
    accessToken?: string;
    email_id: string;
    profile_image?: string;
}

export interface RegisterForm {
    name: string;
    email_id: string;
    password: string;
    confirm_password: string;
    guardian_name: string;
    date_of_birth: string;
    area: string;
    district: string;
    pin_code: string;
    terms_accepted: boolean;
    gender: string;
    mobile_number: string;
    payment_method: string;
    aadhar_number: string;
}
