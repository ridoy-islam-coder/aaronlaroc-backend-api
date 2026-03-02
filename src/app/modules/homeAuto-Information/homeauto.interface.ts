import { Document, Types } from "mongoose";
import { IUser } from "../auth/user.interface";









export interface IHomeVehicle extends Document {
  userID:IUser | Types.ObjectId;

  // Vehicle
  vehicleOwnership?: string;   
  vehicleMakeModel?: string;              
  carInsurance?: string; 
  addAnotherVehicle?: string;  

  hasAtvBoatMotorcycle?: string; 
       

 
  vehicleOwnershipDuplicate?: string;               
  vehicleMakeModelDuplicate?: string;            

  // Home
  atvBoatMotorcycleDetails?: string;         
  homeOwnership?: string;             
  homeInsurance?: string; 
  homeOwnershipDuplicate?: string;
  homeInsuranceDuplicate?: string;

  homeautoPercentage?: number;

  createdAt?: Date;
  updatedAt?: Date;
}