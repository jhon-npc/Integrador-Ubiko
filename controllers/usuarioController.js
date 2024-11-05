import { check, validationResult } from "express-validator";
import bcrypt from "bcrypt";
import Usuario from "../models/Usuario.js";
import axios from "axios";
import { generarJWT, generarId } from "../helpers/token.js";
import { emailRegistro, emailOlvidePassword } from "../helpers/emails.js";
import Documento from "../models/Documento.js";

/* ---------------------------------------- */

/*----------------------------------------*/
const formularioLogin = (req, res) => {
  res.render("auth/login", {
    pagina: "Login",
    csrfToken: req.csrfToken(),
  });
};
const cerrarSesión = (req, res) => {
  return res.clearCookie("_token").status(200).redirect("/");
};

const crear = async (req, res) => {
  //Consulta el Modelo de Precio y Categoria
  const [documentos] = await Promise.all([Documento.findAll()]);

  res.render("auth/login", {
    pagina: "Iniciar Sesión",
    barra: true,
    csrfToken: req.csrfToken(),
    documentos,
    datos: {},
    errores: resultado.array(),
  });
};

const autenticar = async (req, res) => {
  //Validacion
  await check("email")
    .isEmail()
    .withMessage("El Email es Obligatorio")
    .run(req);
  await check("password")
    .notEmpty()
    .withMessage("El Password es Obligatorio")
    .run(req);

  let resultado = validationResult(req);

  //return res.json(resultado.array())
  // Verificar que el resultado este vacío
  if (!resultado.isEmpty()) {
    //Errores
    return res.render("auth/login", {
      pagina: "Iniciar Sesión",
      csrfToken: req.csrfToken(),
      errores: resultado.array(),
    });
  }

  const { email, password } = req.body;

  // Comprobar si el usuario existe
  const usuario = await Usuario.findOne({ where: { email } });
  if (!usuario) {
    return res.render("auth/login", {
      pagina: "Iniciar Sesión",
      csrfToken: req.csrfToken(),
      errores: [{ msg: "El Usuario No Existe" }],
    });
  }
  //Comprobar si el usuario esta confirmado
  if (!usuario.confirmado) {
    return res.render("auth/login", {
      pagina: "Iniciar Sesión",
      csrfToken: req.csrfToken(),
      errores: [{ msg: "Tu Cuenta No ha sido Confirmado" }],
    });
  }
  //Revisar el password
  if (!usuario.verificarPassword(password)) {
    return res.render("auth/login", {
      pagina: "Iniciar Sesión",
      csrfToken: req.csrfToken(),
      errores: [{ msg: "El Password es Incorrecto" }],
    });
  }

  const recaptchaToken = req.body["g-recaptcha-response"];
  const secretKey = "6LcbHHIqAAAAAGxNKJq7S_zdQAUJWQEjgsRR5S5r";
  const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;

  try {
    const response = await axios.post(verificationURL);
    const isHuman = response.data.success;

    if (!isHuman) {
      return res.status(400).send("Por favor, confirma que no eres un robot.");
    }

    // AUTENTICAR EL PASSWORD
    const token = generarJWT({ id: usuario.id, nombre: usuario.nombre });
    /*   console.log(token) */
    // Almacenar en un cookie
    // Aqui redireccionamos a la pagina principal

    if (isHuman) {
      return res
        .cookie("_token", token, {
          httpOnly: true,
          //secure: true
        })
        .redirect("/mis-propiedades"); //redireccion
    }
  } catch (error) {
    console.error("Error al verificar el reCAPTCHA:", error);
    res.status(500).send("Ocurrió un problema al procesar el formulario.");
  }
  //puedo redireccionar al usuario directo a 'mis-propiedades'
};
/*const formularioRegistro = (req, res) => {
    res.render('auth/registro', {
        pagina: 'Crear Cuenta',
        csrfToken: req.csrfToken()
    })
}*/

const formularioRegistro = async (req, res) => {
  try {
    const [documentos] = await Promise.all([Documento.findAll()]);
    res.render("auth/registro", {
      pagina: "Crear Cuenta",
      csrfToken: req.csrfToken(),
      documentos,
      datos: {},
      // Pasa `documentos` a la plantilla
    });
  } catch (error) {
    console.error("Error al obtener documentos:", error);
  }
};

const registro = async (req, res) => {
  const documentos = (await Documento.findAll()) || [];

  res.render("auth/registro", {
    pagina: "Crear Cuenta",
    barra: true,
    documentos,
    datos: {},
  });
};

const registrar = async (req, res) => {
  // valdiacion
  await check("nombre").notEmpty().withMessage("Campo vacío").run(req);

  await check("apellido").notEmpty().withMessage("Campo vacío").run(req);

  await check("telefono")
    .notEmpty()
    .withMessage("Campo vacío")
    .isNumeric()
    .withMessage("Solo numeros")
    .run(req);
  await check("telefono")
    .isLength({ min: 9, max: 9 })
    .withMessage("El telefono debe tener 9 caracteres")
    .run(req);

  await check("fechaNacimiento")
    .notEmpty()
    .withMessage("La fecha de nacimiento es obligatoria")
    .custom((value) => {
      const fechaNacimiento = new Date(value);
      const hoy = new Date();
      const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
      const mes = hoy.getMonth() - fechaNacimiento.getMonth();
      const dia = hoy.getDate() - fechaNacimiento.getDate();

      if (mes < 0 || (mes === 0 && dia < 0)) {
        edad--;
      }

      if (edad < 18) {
        throw new Error("Debes tener al menos 18 años");
      }

      return true;
    })
    .run(req);

  await check("email").isEmail().withMessage("Email no válido").run(req);

  await check("password")
    .isLength({ min: 6 })
    .withMessage("El Password debe ser al menos 6 caracteres")
    .run(req);
  await check("password")
    .matches(/[A-Z]/)
    .withMessage("El Password debe contener al menos una letra mayúscula")
    .run(req);
  await check("password")
    .matches(/[a-z]/)
    .withMessage("El Password debe contener al menos una letra minúscula")
    .run(req);
  await check("password")
    .matches(/[1-9]/)
    .withMessage("El Password debe contener al menos un numero")
    .run(req);
  await check("password")
    .matches(/[!@#~%&€*]/)
    .withMessage("El Password debe contener al menos un caracter especial")
    .run(req);

  await check("repetir_password")
    .equals(req.body.password)
    .withMessage("El Password no coinciden")
    .run(req);

  //console.log(req.body)
  let resultado = validationResult(req);
  //return res.json(resultado.array())
  // Verificar que el resultado este vacío
  if (!resultado.isEmpty()) {
    const documentos = (await Documento.findAll()) || [];

    return res.render("auth/registro", {
      pagina: "Crear Cuenta",
      csrfToken: req.csrfToken(),
      errores: resultado.array(),
      usuario: {
        nombre: req.body.nombre,
        email: req.body.email,
      },
      documentos,
      datos: req.body,
    });
  }

  const {
    nombre,
    apellido,
    telefono,
    fechaNacimiento,
    email,
    password,
    documento,
    identificacion,
  } = req.body;

  //Verificar que el usuario no este duplciado
  const existeUsuario = await Usuario.findOne({ where: { email } });
  if (existeUsuario) {
    return res.render("auth/registro", {
      pagina: "Crear Cuenta",
      csrfToken: req.csrfToken(),
      errores: [{ msg: "El Usuario ya está Registrado" }],
      usuario: {
        nombre: req.body.nombre,
        email: req.body.email,
      },
    });
  }

  // Almacenar un usuario
  const usuario = await Usuario.create({
    nombre,
    apellido,
    telefono,
    fechaNacimiento,
    email,
    password,
    DocumentoId: documento,
    identificacion,
    token: generarId(),
  });

  // Enviar email de confirmacion
  emailRegistro({
    nombre: usuario.nombre,
    email: usuario.email,
    token: usuario.token,
  });

  const recaptchaToken = req.body["g-recaptcha-response"];
  const secretKey = "6LcbHHIqAAAAAGxNKJq7S_zdQAUJWQEjgsRR5S5r";
  const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;

  try {
    const response = await axios.post(verificationURL);
    const isHuman = response.data.success;

    if (!isHuman) {
      return res.status(400).send("Por favor, confirma que no eres un robot.");
    }
    /*   console.log(token) */
    // Almacenar en un cookie
    // Aqui redireccionamos a la pagina principal

    if (isHuman) {
      //Mostrar un mensaje de condfirmacion
      res.render("templates/mensaje", {
        pagina: "Cuenta Creada Correctamente",
        mensaje: "Hemos Enviado un Email de Confirmación, revisa tu correo",
      });
    }
  } catch (error) {
    console.error("Error al verificar el reCAPTCHA:", error);
    res.status(500).send("Ocurrió un problema al procesar el formulario.");
  }
};
//Funcion que comprueba una cuenta
const comprobar = async (req, res) => {
  const { token } = req.params;

  // Verficar si el token es valido
  const usuario = await Usuario.findOne({ where: { token } });

  // Where don´t have token
  if (!usuario) {
    return res.render("auth/confirmar-cuenta", {
      pagina: "Error al confirmar cuenta",
      mensaje: "Hubo un error al confirmar tu cuenta, intenta de nuevo",
      error: true,
    });
  }

  //Confirmar la cuenta
  usuario.token = null;
  usuario.confirmado = true;
  await usuario.save();

  res.render("auth/confirmar-cuenta", {
    pagina: "Cuenta Confirmada",
    mensaje: "¡La Cuenta se confirmó Correctamente!",
  });
};

const formularioOlvidePassword = (req, res) => {
  res.render("auth/restaurar-password", {
    pagina: "Recuperar Password",
    csrfToken: req.csrfToken(),
  });
};
const resetPassword = async (req, res) => {
  // valdiacion
  await check("email").isEmail().withMessage("¡Email no válido!").run(req);

  let resultado = validationResult(req);

  //return res.json(resultado.array())
  // Verificar que el resultado este vacío
  if (!resultado.isEmpty()) {
    //Errores
    return res.render("auth/restaurar-password", {
      pagina: "Recuperar Password",
      csrfToken: req.csrfToken(),
      errores: resultado.array(),
    });
  }

  //Buscar el usuario
  const { email } = req.body;
  const usuario = await Usuario.findOne({ where: { email } });

  if (!usuario) {
    return res.render("auth/restaurar-password", {
      pagina: "Recuperar Password",
      csrfToken: req.csrfToken(),
      errores: [
        { msg: `El Email ${email} no está registrado. Intente de nuevo` },
      ],
    });
  }
  usuario.token = generarId();
  await usuario.save();

  //Enviar un email
  emailOlvidePassword({
    email: usuario.email,
    nombre: usuario.nombre,
    token: usuario.token,
  });

  //Renderizar un mensaje
  //Mostrar un mensaje de condfirmacion
  res.render("templates/mensaje", {
    pagina: "Reestablece tu Password",
    mensaje: "Hemos Enviado un Email con las instrucciones.",
  });
};
const comprobarToken = async (req, res) => {
  const { token } = req.params;

  const usuario = await Usuario.findOne({ where: { token } });
  if (!usuario) {
    return res.render("auth/confirmar-cuenta", {
      pagina: "Reestablece tu Password",
      mensaje: "Hubo un error al validar tu información, intenta de nuevo",
      error: true,
    });
  }

  // Mostrar Formualario para modificar el password
  res.render("auth/reset-password", {
    pagina: "Reestablece Tu Password",
    csrfToken: req.csrfToken(),
  });
};
const nuevoPassword = async (req, res) => {
  // Validar el password
  await check("password")
    .isLength({ min: 6 })
    .withMessage("El Password debe ser al menos 6 caracteres")
    .run(req);
  let resultado = validationResult(req);

  if (!resultado.isEmpty()) {
    //Errores
    return res.render("auth/reset-password", {
      pagina: "Restablece Tu Password",
      csrfToken: req.csrfToken(),
      errores: resultado.array(),
    });
  }

  const { token } = req.params;
  const { password } = req.body;

  //Identificar quien hace el cambio
  const usuario = await Usuario.findOne({ where: { token } });

  //Hashear el nuevo password
  const salt = await bcrypt.genSalt(10);
  usuario.password = await bcrypt.hash(password, salt);
  usuario.token = null;

  await usuario.save();

  res.render("auth/confirmar-cuenta", {
    pagina: "Pasword Reestablecido con Exito",
    mensaje: "El Password se guardó correctamente   ",
  });
};
export {
  crear,
  registro,
  autenticar,
  cerrarSesión,
  formularioLogin,
  formularioRegistro,
  registrar,
  comprobar,
  formularioOlvidePassword,
  resetPassword,
  comprobarToken,
  nuevoPassword,
};
