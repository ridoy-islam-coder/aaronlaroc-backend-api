import { model, Schema, Types } from "mongoose"
import { IUser, Role } from "./user.interface"
// import bcrypt from 'bcrypt';

const userSchema =  new Schema<IUser>({
  firstName: {
    type: String,
     default: '',
  
  },
  lastName: {
    type: String,
    default: '',
  
  },
  dateOfBirth: {
    type: Date,
       default: null,
  
  },
  city: {
    type: String,
     default: '',
  },
  state: {
    type: String,

  
  },
  company: {
    type: String,
    default: '',
  },

  email: {
    type: String,
    required: true,
    unique: true,  // Ensures email is unique
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // You can adjust the minimum password length as needed
   
  },
  phoneNumber: {
    type: String,
     default: '',
    // match: /^\+[1-9]\d{1,14}$/,
  },
   otp:{type:String},

      imgUrl: {
        type: String,
         default: 'https://i.ibb.co/z5YHLV9/profile.png',
    },
   
     proxysetId: [{ type: Types.ObjectId, ref: "User" }],

       stripeCustomerId: {
               type: String,
               default: '',
          },
    userPercentage: { type: Number },
    role: {
        type: String,
        enum: Object.values(Role),
        default: Role.USER
    },
  
}, {
    timestamps: true,versionKey:false
})

// // Pre-save middleware to hash password
// userSchema.pre('save', async function (next) {
//   const user = this;
//   if (!user.isModified('password')) return next(); // Only hash if password changed
//   try {
//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(user.password, salt);
//     next();
//   } catch (err) {
//     next(err);
//   }
// });

// // Optional: method to compare password during login
// userSchema.methods.comparePassword = async function (candidatePassword: string) {
//   return bcrypt.compare(candidatePassword, this.password);
// };
// // Remove password from returned JSON
// userSchema.set('toJSON', {
//   transform: (doc, ret) => {
//     delete ret.password;
//     return ret;
//   }
// });


export const User = model<IUser>("User", userSchema)