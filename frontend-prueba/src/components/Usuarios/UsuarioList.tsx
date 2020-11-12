import React, { useEffect, useState } from "react";
import {Usuario} from './Usuario'
import * as UsuarioServices from './UsuarioServices'
import UsuarioItem from "./UsuarioItem";




const UsuarioList = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  const cargarUsuarios = async () => {
    const res = await UsuarioServices.getUsusarios()

    const formatodeusuarios = res.data.map(usuarios=>{
      return{
        ...usuarios,
        createdAt: usuarios.createdAt ? new Date(usuarios.createdAt): new Date(),
        updatedAt: usuarios.updatedAt ? new Date(usuarios.updatedAt): new Date()
      }
    })

    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());


    setUsuarios(formatodeusuarios);
  };

  useEffect(() => {
    cargarUsuarios();
  }, []);

  return (
    <div className="row">
      {usuarios.map((usuario) => {
        return <UsuarioItem usuario ={usuario} key={usuario._id} cargarUsuarios={cargarUsuarios} />
      })}
    </div>
  );
};

export default UsuarioList;
