import express from "express";
import cors from 'cors';

import { usersRoutes } from "@routes/users.routes";
import { productsRoutes } from "@routes/products.routes";
import { authenticateRoutes } from "@routes/authenticate.routes";
import { activitiesRoutes } from "@routes/categories.routes";
import { treatmentsRoutes } from "./routes/treatments.routes";
import { ensureAuthenticated } from "./midlewares/ensureAuthenticated";
import { clientsRoutes } from "./routes/clients.routes";
import { ensureIsAdmin } from "./midlewares/ensureIsAdmin";

const app = express();

app.use(cors());

app.use(express.json());


app.use(authenticateRoutes);



app.use("/users", usersRoutes);

app.use(ensureAuthenticated);

//Midleware para validar a autenticação de todas as rotas seguintes
app.use("/clients", clientsRoutes);

app.use("/products", productsRoutes);
app.use("/activities", activitiesRoutes);
app.use("/treatments", treatmentsRoutes);



export { app };
