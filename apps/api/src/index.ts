import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { authRouter } from './routes/auth.js';
import { reportRouter } from './routes/reports.js';
import { dashboardRouter } from './routes/dashboard.js';

const app = express();
app.use(cors()); app.use(express.json());
app.get('/health', (_, res) => res.json({ service: 'UHMRS API', status: 'healthy' }));
app.use('/api/auth', authRouter); app.use('/api/reports', reportRouter); app.use('/api/dashboard', dashboardRouter);
app.use((error: Error, _: express.Request, res: express.Response, __: express.NextFunction) => { console.error(error); res.status(500).json({ message: 'Something went wrong.' }); });
app.listen(Number(process.env.PORT || 4000), () => console.log('UHMRS API listening on port ' + (process.env.PORT || 4000)));
