import express from 'express';

import auth from './auth.api';
import category from './category.api';
import users from './users.api';
import slides from './slides.api';
import footer from './footer.api';
import orders from './orders.api';
import superAdmin from './superAdmin.api';

const app = express();

// API
app.use('/auth', auth);
app.use('/category', category);
app.use('/users', users);
app.use('/slides', slides);
app.use('/footers', footer);
app.use('/orders', orders);
app.use('/superAdmin', superAdmin);

export default app;
