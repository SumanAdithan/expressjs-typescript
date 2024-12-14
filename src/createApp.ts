import express from 'express';
import usersRouter from './routes/user';

export const createApp = () => {
    const app = express();
    app.use('/api/users', usersRouter);
    return app;
};
