import React from 'react';
import '../../styles/login.css';

export const LoginScreen = () => {
        return (
            
            <div className="container login-container">
                <div className="row i">
                    <div className="foto"></div>
                </div>
                <div className="row d">
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
                        ¿Todavía no tienes una cuenta? <a href='./singup' ><b>Cree una ahora</b></a>
                    </div>

                </div>
            </div>
        )
    }