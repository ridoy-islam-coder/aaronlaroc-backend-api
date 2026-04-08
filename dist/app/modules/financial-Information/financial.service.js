"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialGetService = exports.FinancialUpdateService = void 0;
const financial_model_1 = require("./financial.model");
// export const FinancialUpdateService = async (req: Request) => {
//   try {
//     const user_id = req.user?.id;
//     const requestBody = req.body;
//     requestBody.userID = user_id;
//     const token = req.headers.authorization?.split(" ")[1] || null;
//     const allFields = [
//       requestBody.bankAccount,
//       requestBody.retirementAccount,
//       requestBody.assets,
//       requestBody.assetsValue,
//       requestBody.hasDebt,
//       requestBody.businessOwnership,
//       requestBody.otherFinancialInfo,
//       requestBody.debt,
//     ];
//     const filledFields = allFields.filter(
//       (field) => typeof field === "string" && field.trim() !== ""
//     ).length;
//     const totalFields = allFields.length;
//     const completenessPercentage = (filledFields / totalFields) * 100;
//     const updatedFinancialData = await FinancialModel.findOneAndUpdate(
//       { userID: user_id },
//       { 
//         ...requestBody, 
//         financialPercentage: completenessPercentage  
//       },
//       { upsert: true, new: true }
//     );
//     return {
//       status: "success",
//       message: `Financial data updated successfully (${completenessPercentage.toFixed(2)}%)`,
//       financialPercentage: completenessPercentage.toFixed(2),
//       updatedFinancialData,
//       token: token
//     };
//   } catch (error: any) {
//     return { status: "failed", message: error.message };
//   }
// };
const FinancialUpdateService = async (req) => {
    try {
        const user_id = req.user?.id;
        const requestBody = req.body;
        requestBody.userID = user_id;
        const token = req.headers.authorization?.split(" ")[1] || null;
        const allFields = [
            requestBody.bankAccount,
            requestBody.retirementAccount,
            requestBody.assets,
            requestBody.assetsValue,
            requestBody.hasDebt,
            requestBody.businessOwnership,
            requestBody.otherFinancialInfo,
            requestBody.debt,
        ];
        const filledFields = allFields.filter((field) => typeof field === "string" && field.trim() !== "").length;
        const totalFields = allFields.length;
        const completenessPercentage = (filledFields / totalFields) * 100;
        // 🔎 existing data check
        const existingData = await financial_model_1.FinancialModel.findOne({ userID: user_id });
        const updatedFinancialData = await financial_model_1.FinancialModel.findOneAndUpdate({ userID: user_id }, {
            ...requestBody,
            financialPercentage: completenessPercentage,
        }, { upsert: true, new: true });
        // ✅ message decide
        const message = existingData
            ? `Financial data updated successfully (${completenessPercentage.toFixed(2)}%)`
            : `Financial information created successfully (${completenessPercentage.toFixed(2)}%)`;
        return {
            status: "success",
            message,
            financialPercentage: completenessPercentage.toFixed(2),
            updatedFinancialData,
            token: token,
        };
    }
    catch (error) {
        return { status: "failed", message: error.message };
    }
};
exports.FinancialUpdateService = FinancialUpdateService;
const FinancialGetService = async (req) => {
    try {
        const user_id = req.user?.id;
        if (!user_id) {
            return { status: "failed", message: "Unauthorized" };
        }
        const financialData = await financial_model_1.FinancialModel.findOne({ userID: user_id }, "-createdAt -updatedAt");
        if (!financialData) {
            return { status: "failed", message: "No financial data found" };
        }
        return {
            status: "success",
            data: financialData,
        };
    }
    catch (error) {
        return { status: "failed", message: error.message };
    }
};
exports.FinancialGetService = FinancialGetService;
