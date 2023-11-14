import dotenv from 'dotenv';
dotenv.config();

const config = {
    app: {
        port: process.env.PORT
    }
};

export default Object.freeze(config);