
export interface IUser {
    _id: string,
    wallet: string;
    name: string;
    email: string;
    phoneNumber: string;
    nationalIdNumber?: string;
    password: string;
    role: string;
    isVerified: boolean;
    status: string;

    //only for agents   `
    approved: boolean
    commissionRate: number
    approvedBy: string

    createdAt: Date;
    updatedAt: Date

}