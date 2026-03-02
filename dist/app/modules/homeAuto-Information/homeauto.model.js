"use strict";
// for mongoose model
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeAutoModel = void 0;
const mongoose_1 = require("mongoose");
const homeautoSchema = new mongoose_1.Schema({
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
    addAnotherVehicle: {
        type: String,
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
    userID: { type: mongoose_1.Types.ObjectId, ref: 'User', required: true },
}, {
    timestamps: true, versionKey: false
});
exports.HomeAutoModel = (0, mongoose_1.model)("homeauto", homeautoSchema);
