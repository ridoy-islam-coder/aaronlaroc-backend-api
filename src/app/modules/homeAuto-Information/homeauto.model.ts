


// for mongoose model

import { model, Schema, Types } from 'mongoose'

import { string } from 'zod';
import { IHomeVehicle } from './homeauto.interface';




const homeautoSchema =  new Schema<IHomeVehicle>({
     // Vehicle
    vehicleOwnership: {
      type: String,
      default: undefined,
    },
    vehicleMakeModel: {
      type: String,
      trim: true,
      default: undefined,
    },
    carInsurance: {                                         
      type: String,
      default: undefined,
    },
    hasAtvBoatMotorcycle: {
      type: String,
      trim: true,
      default: undefined,
    },

    // ATV / Boat / Motorcycle
    vehicleOwnershipDuplicate: {
      type: String,
      default: undefined,
    },
    vehicleMakeModelDuplicate: {
      type: String,
      default: undefined,
    },

    // Home
    atvBoatMotorcycleDetails: {
      type: String,
      default: undefined,
    },
    homeOwnership: {
      type: String,
      default: undefined,
    },
    homeInsurance: {
      type: String,
      default: undefined,
    },
    homeOwnershipDuplicate: {
      type: String,
      default: undefined,
    },
    homeInsuranceDuplicate: {
      type: String,
      default: undefined,
    },
  
    homeautoPercentage: { type: Number },
    userID: { type: Types.ObjectId,   ref: 'User', required: true},

    },{
    timestamps: true, versionKey: false
})

export const HomeAutoModel = model<IHomeVehicle>("homeauto", homeautoSchema);