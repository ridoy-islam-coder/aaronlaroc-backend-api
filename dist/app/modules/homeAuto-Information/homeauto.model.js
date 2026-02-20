"use strict";
// for mongoose model
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeAutoModel = void 0;
const mongoose_1 = require("mongoose");
const homeauto_interface_1 = require("./homeauto.interface");
const homeautoSchema = new mongoose_1.Schema({
    // Vehicle
    vehicleOwnership: {
        type: String,
        enum: homeauto_interface_1.VEHICLE_OWNERSHIP,
        default: undefined,
    },
    vehicleMakeModel: {
        type: String,
        trim: true,
        default: undefined,
    },
    hasCarInsurance: {
        type: Boolean,
        default: undefined,
    },
    carInsuranceProvider: {
        type: String,
        trim: true,
        default: undefined,
    },
    // ATV / Boat / Motorcycle
    hasPowerToys: {
        type: Boolean,
        default: undefined,
    },
    powerToyTypes: {
        type: [String],
        enum: homeauto_interface_1.POWER_TOYS,
        default: undefined,
    },
    // Home
    homeOccupancy: {
        type: String,
        enum: homeauto_interface_1.HOME_OCCUPANCY,
        default: undefined,
    },
    hasHomeInsurance: {
        type: Boolean,
        default: undefined,
    },
    homeInsuranceType: {
        type: String,
        enum: homeauto_interface_1.HOME_INSURANCE_TYPE,
        default: undefined,
    },
    homeautoPercentage: { type: Number },
    userID: { type: mongoose_1.Types.ObjectId, ref: 'User', required: true },
}, {
    timestamps: true, versionKey: false
});
exports.HomeAutoModel = (0, mongoose_1.model)("homeauto", homeautoSchema);
