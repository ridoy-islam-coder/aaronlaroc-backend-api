import { Document, Types } from "mongoose";
import { IUser } from "../auth/user.interface";

export interface FINANCIAL extends Document{
  bankAccount: string;
  retirementAccount: string;
  assets: string;
  assetsValue: string;
  hasDebt: string;
  businessOwnership: string;
  otherFinancialInfo: string;
  debt: string;
  financialPercentage: number;
  userID: IUser | Types.ObjectId; 
  createdAt: Date;
  updatedAt: Date;
}
  