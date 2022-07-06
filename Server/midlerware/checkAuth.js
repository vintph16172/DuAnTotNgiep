import expressJWT from 'express-jwt'

export  const checkAuth = (response , require, next) => {
    const isAdmin = true;
    if (isAdmin) {
        console.log("Xin chào admin");
        next();
    }else{
        console.log("Bạn không có quyền truy cập");
    }
};