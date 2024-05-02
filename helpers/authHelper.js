import bcrypt from 'bcrypt';
export const hashPassword=async()=>{
    try{
       const hashedPassword=await bcrypt.hash(password,seltRounds);
       return hashedPassword;
    }catch(error){
        console.log(error);
    }
};

export const comparePassword=async(password,hashedPassword)=>{
    return bcrypt.compare(password,hashedPassword);
};