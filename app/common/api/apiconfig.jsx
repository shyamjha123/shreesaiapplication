
const BASE_URL =  `https://zevopay.online/api/v1`
// const BASE_URL =  `http://88.222.241.223:3040/api/v1`
const Api = {
   LOGIN_URL: `${BASE_URL}/auth/login`,
   MPIN_URL:`${BASE_URL}/user/verify-mpin`,
   USER_URL:`${BASE_URL}/user`,
   PAYOUT_URL:`${BASE_URL}/webhook/payout`,
   UPITRANSACTIONREPORT_URL:`${BASE_URL}/user/upireport`,
   PAYOUTREPORT_URL:`${BASE_URL}/user/payoutreport`,
   VIRTUAL_REPORT:`${BASE_URL}/user/virtualreport`,
   HDFC_REPORT:`${BASE_URL}/user/hdfc-virtualreport`,
   FORGOTPASSWORD_URL:`${BASE_URL}/auth/forgot-password`,
   FORGOTMPIN_URL:`${BASE_URL}/auth/forgot-mpin`,
   REACTION_URL:`${BASE_URL}/wallet/reaction`,
   TRANSACTION_URL:`${BASE_URL}/wallet/transactions`
};

export default Api;