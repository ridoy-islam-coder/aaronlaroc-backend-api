
// for mongoose model

import { model, Schema, Types } from 'mongoose'
import { FINANCIAL } from './financial.interface';




const financialSchema =  new Schema<FINANCIAL>({
    bankAccount: { type: String, required: true },                    
    retirementAccount: { type: String, required: true },

    assets: { type: String, required: true },
    assetsValue: { type: String, required: true },
    hasDebt: { type: String, required: true },
    businessOwnership: { type: String, required: true },
    otherFinancialInfo : { type: String, required: true },

   
    debt: { type: String, required: true },
    financialPercentage: { type: Number },
    userID: { type: Types.ObjectId,   ref: 'User', required: true},

    },{
    timestamps: true,versionKey: false
})

export const FinancialModel = model<FINANCIAL>("financial", financialSchema);


 