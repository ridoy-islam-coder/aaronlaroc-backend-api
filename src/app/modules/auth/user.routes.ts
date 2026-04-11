import express from "express";
import { adminDeleteUser, AdminEmail, adminLoginController, adminUpdateUser, alldatapercentage, codeverify,      forgetPassword,  getAllOwnUserDataController,  GetAllProfile, getAllProxysetController, getAllUserDataController, getCounts, getNewUsersLast10Days, GetProfileData, GetProxyUsers, getSystemPerformance, getUsersWhoAddedMeAsProxyController, getUsersWhoSetMyProxy, loginUser,  newforgotPassword,  newresetPassword,  ProxysetController, registerUser, removeProxyUserController, searchUsersController, updateProxyUserAtIndexController, updateUserController, UserAnalysisController, UserList, userSelfUpdate,  } from "./user.controller";
import { auth, isAdmin, } from './../../middleware/auth.middleware';





const router = express.Router();

// User Registration 
router.post("/registerUser",registerUser)

// User  Login
router.post("/login",loginUser)

// User ProfileDetails
router.get("/ProfileDetails",auth,GetProfileData)

// User Profile Update
router.put("/ProfileUpdate",auth,userSelfUpdate)

// Get All User Profile
router.get("/GetAllProfile",auth,GetAllProfile)

// GET request route for search
router.get("/search", auth, searchUsersController);

router.get("/alldata-percentage/:userId",auth, alldatapercentage);








// proxyset user
router.post("/proxyset/:proxysetId",auth,ProxysetController)
router.get("/getAllProxyset/:id",auth,getAllProxysetController)

// GET all user data (HomeAuto + Medical + Financial)
router.get("/proxyset-call-api/:userId", auth, getAllUserDataController);

router.get("/alluser-data", auth, getAllOwnUserDataController);

//all proxyset set user
router.get("/alluser-set-data",auth, getUsersWhoAddedMeAsProxyController);



// GET /api/users/my-proxy-users?userId=...
router.get("/my-proxy-users",auth, getUsersWhoSetMyProxy);














//admin routes

// admin Registration 
router.post("/adminregister",registerUser)

// admin  routes
router.post("/adminlogin",adminLoginController)


// admin  routes
router.post("/AdminEmail",AdminEmail)


// codeverify  routes
router.post("/codeverify",codeverify)



// codeverify  routes
router.post("/forgetPassword",forgetPassword)

// User List with Pagination
// router.get("/pagenationlist/:pageNo/:perPage/:searchKeyword",auth,isAdmin, UserList);

router.get("/pagenationlist", auth, isAdmin, UserList);

// New Users in Last 10 Days
router.get("/new-user-last",auth,isAdmin, getNewUsersLast10Days);


// Update User by Admin
router.put("/updateUser/:id",auth,isAdmin, updateUserController)


// User Analysis
router.get("/users/analysis", auth,isAdmin,UserAnalysisController.getAnalysis);

//count
router.get("/counts-user-report", auth,isAdmin, getCounts);



router.delete("/deleteUser/:id", auth,isAdmin, adminDeleteUser);


// User Profile Update
router.put("/adminUpdateUser/:id",auth,isAdmin,adminUpdateUser)

    

// system performance api 
router.get("/performance",auth,isAdmin, getSystemPerformance);




//agen user list

router.get("/my-proxyset-users", auth, GetProxyUsers);
router.put("/proxyset/update-index", auth, updateProxyUserAtIndexController);

// ✅ Create Proxy User
router.post("/proxyset",auth,ProxysetController);


router.delete("/remove",auth,removeProxyUserController);





//new password reset routes
router.post("/forgot-password", newforgotPassword);
router.post("/reset-password", newresetPassword);




export const userRoutes = router;