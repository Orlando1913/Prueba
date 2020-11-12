import app from './app'
import './routes/database'

app.listen(app.get('port'),() =>{
    console.log('server en el puerto', app.get('port'))
})

