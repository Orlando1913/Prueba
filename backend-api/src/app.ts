import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import UsuarioRoutes from './routes/usuarios.routes'



const app = express()

app.set('port',5000);

app.use(morgan('dev'));

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended: false}))

app.use(UsuarioRoutes);

export default app;