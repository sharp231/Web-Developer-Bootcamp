const bcrypt = require('bcrypt');

// const hashPassword = async (password) => {
//     const salt = await bcrypt.genSalt(10);
//     const hash = await bcrypt.hash(password, salt);
//     console.log(salt);
//     console.log(hash);
// };

const hashPassword = async (password) => {
   
    const hash = await bcrypt.hash(password, 12);
   
    console.log(hash);
};

const login = async (pw, hashepw) => {
    const result = await bcrypt.compare(pw, hashepw);
    if (result) {
        console.log('Login Success');
    } else {
        console.log('Login Fail');
    }
};

// hashPassword('123456');
login('123453', '$2b$12$ysAoW/0F0VVxXttrNlYd9OzYFmI.KBikaXdzXFCi0PEEl74fV9Qc6');