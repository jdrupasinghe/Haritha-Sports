import mongoose from "mongoose";



const userModel = mongoose.models.user || mongoose.model('user',userSchema);

export default userModel