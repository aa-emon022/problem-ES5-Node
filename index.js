import 'dotenv/config'
import  Express  from 'express';
import mongoose from 'mongoose';

import router from './routers/salesmanRouts';
console.log(SalesmenRoutes)
const app = Express();
const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/s", router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
