import React from 'react'

export const LoginScreen = () => {
        return (
            <div className="container login-container">
                <div className="row">
                    <div className="col-md-6 login-form-1">
                        <h3>Ingreso</h3>
                        <form>
                            <div className="form-group">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Ingresa tu email:"
                                />
                            </div>
                            <div className="form-group">
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
                    </div>

                </div>
            </div>
        )
    }