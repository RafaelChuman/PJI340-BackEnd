import express from "express";
import cors from 'cors';

import { usersRoutes } from "@routes/users.routes";
import { zonesRoutes } from "@src/routes/zones.routes";
import { authenticateRoutes } from "@routes/authenticate.routes";
import { activitiesRoutes } from "@src/routes/activities.routes";
import { lubrificationSystemServicesRoutes } from "./routes/lubricationSystemService.routes";
import { ensureAuthenticated } from "./midlewares/ensureAuthenticated";
import { collaboratorsRoutes } from "./routes/collaborators.routes";
import { ersRoutes } from "./routes/ers.routes";

const app = express();

app.use(cors());

app.use(express.json());


app.use(authenticateRoutes);



app.use("/users", usersRoutes);

app.use(ensureAuthenticated);

//Midleware para validar a autenticação de todas as rotas seguintes
app.use("/collaborators", collaboratorsRoutes);

app.use("/zones", zonesRoutes);
app.use("/activities", activitiesRoutes);
app.use("/lubrificationSystems", lubrificationSystemServicesRoutes);

app.use("/ers", ersRoutes);



export { app };
