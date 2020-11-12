import React from "react";
import { Usuario } from "./Usuario";
import { useHistory } from "react-router-dom";
import *as UsuarioServices from "./UsuarioServices";

import "./UsuarioItem.css";

interface Props {
  usuario: Usuario;
  cargarUsuarios: () => void
}

const UsuarioItem = ({ usuario, cargarUsuarios }: Props) => {
  const history = useHistory();

    const handleDelete = async (id: string) => {
     await UsuarioServices.deleteUsusario(id)
     cargarUsuarios()
    }

  return (
    <div className="col-md-4">
      <div
        className="card card-body usuario-card"
        style={{ cursor: "pointer" }}
      >
        <div className="d-flex justify-content-between">
          <h1 onClick={() => history.push(`/actualizar/${usuario._id}`)}>
            {usuario.nombre}
          </h1>
          <span
            className="text-danger"
            onClick={() => usuario._id && handleDelete(usuario._id)}
          >
            x
          </span>
        </div>
        <h2>{usuario.apellido}</h2>
        <p>{usuario.sexo}</p>
        <p>{usuario.correo}</p>
      </div>
    </div>
  );
};

export default UsuarioItem;
