import React from "react";

export const LoginScreen = () => {
  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Bienvenido</h3>
          <form>
            <div className="form-group">
              <p>Email:</p>
              <input
                type="text"
                className="form-control"
                placeholder="Ingresa tu email:"
              />
            </div>
            <div className="form-group">
              <p>Contraseña:</p>
              <input
                type="password"
                className="form-control"
                placeholder="Ingresa tu contraseña:"
              />

              <p>
                <a href="./forgotpassword">
                  <>¿Olvidaste la contraseña?</>
                </a>
              </p>
            </div>
            <div className="form-group">
              <input
                type="submit"
                className="btnSubmit"
                value="INICIAR SESION"
              />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2">
          ¿Todavía no tienes una cuenta?{" "}
          <a href="./singup">
            <b>Cree una ahora</b>
          </a>
        </div>
      </div>
    </div>
  );
};
