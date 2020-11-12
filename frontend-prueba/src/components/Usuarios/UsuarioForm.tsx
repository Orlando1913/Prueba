import React, {ChangeEvent, FormEvent, useState, useEffect } from "react";
import { Usuario } from "./Usuario";
import * as UsuarioServices from "./UsuarioServices";
import { toast } from "react-toastify";
import { useHistory, useParams } from "react-router-dom";

 interface Params{
     id: string;
 }

const UsuarioForm = () => {

    const history = useHistory()
    const params = useParams<Params>()

    const initialState = {
        nombre: '',apellido: '',correo:'',sexo:''
    }

    const[usuario, setUsuario] = useState<Usuario>(initialState);

 const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
     setUsuario({...usuario,[e.target.name]: e.target.value})
 }

 const handleSubmit = async (e: FormEvent<HTMLFormElement>) =>{
     e.preventDefault()


    if (!params.id) {
        await UsuarioServices.createUsusarios(usuario)
    toast.success('Usuario Guardado exitosamente')
    setUsuario(initialState)
    }else{
        await UsuarioServices.updateUsusario(params.id, usuario)
    }


    history.push('/')
 }

  const getUsusario = async (id: string)=>{
     const res = await UsuarioServices.getUsusario(id)
     const {nombre, apellido, sexo, correo} = res.data
     setUsuario({nombre, apellido, sexo, correo})
  }
 useEffect(()=>{
    if(params.id)getUsusario(params.id)
 },[])

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>Nuevo Usuario</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  className="form-control"
                  autoFocus
                  value={usuario.nombre}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="apellido"
                  placeholder="Apellido"
                  className="form-control"
                  value={usuario.apellido}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="sexo"
                  placeholder="Sexo"
                  className="form-control"
                  value={usuario.sexo}
                  onChange={handleChange}
                />
              </div>
                
                <div className="form-group">
                <input
                  type="email"
                  name="correo"
                  placeholder="Correo"
                  className="form-control"
                  value={usuario.correo}
                  onChange={handleChange}
                />
              </div>
              
              {
                  params.id ?
                        <button className="btn btn-info">
                         Actualizar
                        </button>:
                        <button className="btn btn-primary">
                        Guardar
                        </button>
              }
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsuarioForm;
