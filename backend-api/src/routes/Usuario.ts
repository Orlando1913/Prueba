import { Schema, model} from 'mongoose'

const UsuarioSchema = new Schema({
    nombre:{
        type: String,
        required: true,
        trim: true
    },
    apellido:{
        type: String,
        required: true,
        trim: true
    },
    sexo:{
        type: String,
        required: true,
        trim: true
    },
    correo:{
        type:String,
        required:true,
        trim:true,
        unique: true
    }
},{
    versionKey:false,
    timestamps:true
});

export default model('Usuario', UsuarioSchema)