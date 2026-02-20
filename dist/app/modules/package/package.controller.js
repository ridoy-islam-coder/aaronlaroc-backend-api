"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageController = void 0;
const http_status_codes_1 = require("http-status-codes");
const package_service_1 = require("./package.service");
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const createPackage = (0, catchAsync_1.default)(async (req, res) => {
    const result = await package_service_1.PackageService.createPackageToDB(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: 'Package created Successfully',
        data: result,
    });
});
const updatePackage = (0, catchAsync_1.default)(async (req, res) => {
    const result = await package_service_1.PackageService.updatePackageToDB(req.params.id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: 'Package updated Successfully',
        data: result,
    });
});
const getPackage = (0, catchAsync_1.default)(async (req, res) => {
    const result = await package_service_1.PackageService.getPackageFromDB(req.query);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: 'Package Retrieved Successfully',
        data: result.packages,
        meta: result.meta,
    });
});
const getPackageByUser = (0, catchAsync_1.default)(async (req, res) => {
    const result = await package_service_1.PackageService.getPackageByUserFromDB(req.query);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: 'Package Retrieved Successfully',
        data: result.packages,
        meta: result.meta,
    });
});
const packageDetails = (0, catchAsync_1.default)(async (req, res) => {
    const result = await package_service_1.PackageService.getPackageDetailsFromDB(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: 'Package Details Retrieved Successfully',
        data: result,
    });
});
const deletePackage = (0, catchAsync_1.default)(async (req, res) => {
    const result = await package_service_1.PackageService.deletePackageToDB(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: 'Package Deleted Successfully',
        data: result,
    });
});
exports.PackageController = {
    createPackage,
    updatePackage,
    getPackage,
    packageDetails,
    deletePackage,
    getPackageByUser,
};
