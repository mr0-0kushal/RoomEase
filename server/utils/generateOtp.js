
import crypto from 'crypto'


const generateOtp = () => {
  const otp = crypto.randomInt(100000, 999999); // 6-digit OTP
  return otp.toString();
};

export default generateOtp;
