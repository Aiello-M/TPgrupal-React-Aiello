

function Contact  () { 
    return (
      <>
        <div className="section" id="contact">
          <header className="header">
              <div className="container">
                  <div className="header2"> CONTACTANOS</div>
                  <div className="header1">Realizá tu <em>consulta</em></div>
              </div>
  
              
  
              <div className="container-fluid" > 
              <form id="form" className="row g-2">
          
                  <div className="col-md-6 mb-3">
                      <input 
                          type="text" 
                          name="nombre"
                          className="form-control" 
                          placeholder="Nombre" 
                      />
                  </div>
  
                  <div className="col-md-6 mb-3">
                      <input 
                          type="text"
                          name="apellido" 
                          className="form-control" 
                          placeholder="Apellido" 
                      />
                  </div>
                    
                  <div className="col-md-12 mb-1">
                      <input 
                          type="text"
                          name="consulta"
                          className="form-control" 
                          placeholder="Escriba su consulta aquí" 
                      />
                  </div>  
  
                  <p> Recuerde incluir un tema para tu consulta</p>
  
                  <div className="col mb-3">
                      <button className="btn btn-success">
                          Enviar
                      </button>
                  </div>
              
              </form>
            </div>
  
  
          </header>
        </div>    
      </>
    )
}
export default Contact;