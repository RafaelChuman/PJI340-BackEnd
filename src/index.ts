import express from "express";
import cors from 'cors';

import { usersRoutes } from "@routes/users.routes";
import { productsRoutes } from "@routes/products.routes";
import { authenticateRoutes } from "@routes/authenticate.routes";
import { categoriesRoutes } from "@routes/categories.routes";
import { treatmentsRoutes } from "./routes/treatments.routes";
import { ensureAuthenticated } from "./midlewares/ensureAuthenticated";

const app = express();

app.use(cors());

app.use(express.json());


app.use(authenticateRoutes);

app.use(ensureAuthenticated);

app.use("/users", usersRoutes);

//Midleware para validar a autenticação de todas as rotas seguintes


app.use("/products", productsRoutes);
app.use("/categories", categoriesRoutes);
app.use("/treatments", treatmentsRoutes);



export { app };
