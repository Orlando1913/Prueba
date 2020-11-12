import { Console } from "console";
import { RequestHandler } from "express";
import Usuario from "./Usuario";

export const getUsuarios: RequestHandler = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    return res.json(usuarios);
  } catch (error) {
    res.json(error);
  }
};

export const getUsuario: RequestHandler = async (req, res) => {
  const usuarioencontrado = await Usuario.findById(req.params.id);
  if (!usuarioencontrado) return res.status(204).json();
  return res.json(usuarioencontrado);
};

export const createUsuario: RequestHandler = async (req, res) => {
  const correoencontrado = await Usuario.findOne({ correo: req.body.correo });

  if (correoencontrado)
    return res.status(301).json({
      mensaje: "el correo que ingreso pertenece a un usuario existente",
    });

  const usuario = new Usuario(req.body);
  const usuarioguardado = await usuario.save();
  res.json(usuarioguardado);
};

export const updateUsuario: RequestHandler = async (req, res) => {
   const usuarioactualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, {new : true})
   if(!usuarioactualizado) return res.status(204).json()
   return res.json(usuarioactualizado)
};

export const deleteUsuario: RequestHandler = async (req, res) => {
    const usuarioencontrado = await Usuario.findByIdAndDelete(req.params.id);
    if (!usuarioencontrado) return res.status(204).json();
    return res.json(usuarioencontrado);
};
