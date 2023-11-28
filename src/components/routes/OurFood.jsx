import { Link } from 'react-router-dom'
import plato1 from '../../assets/plato1.jpg'
import plato2 from '../../assets/plato2.jpg'
import plato3 from '../../assets/plato3.jpg'
import { useState } from 'react'

function OurFood  () { 

    const[data, fetchData] = useState([])

  return (
    <>
        <div className="section" id="about">
            <header className="header">
                <div className="container">
                    <div className="header2 text-uppercase">¡Animate a probarlos!</div>
                    <div className="header1">Todos nuestros <em>platos</em></div>
                </div>
            </header>
      
            <div className="titles">
                <h2 className="title border-top border-3 border-width-3">NUESTRAS SELECCIONES</h2>
                <h3 className="subtitle text-muted">¡Conocé los destacados de este mes! </h3>
            </div>  

            <div className="card-group">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col "> 
                <div className="card h-100">
                    <img src={plato3} className="card1" alt="plato1" />
                    <div className="card-body">
                        <Link  type="button" className="btn btn-success">Me gusta👍</Link>
                        <h5>Plato n°1</h5>
                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisi elit. Et voluptatibus perferendis delentini, totam fuga sequi iste! Facilis explicabo repellat ut similique incidunt? Ullam nobis beatae, corporis facilis veniam magni ratione!Lorem ipsum dolor sit amet consectetur adipisi elit. Et voluptatibus perferendis delentini, totam fuga sequi iste! Facilis explicabo repellat ut similique incidunt? Ullam nobis beatae, corporis facilis veniam magni ratione!</p>
                    </div>
                </div>
                </div>

                <div className="col"> 
                <div className="card h-100">
                    <img src={plato2} className="card2" alt="plato2"/> 
                    <div className="card-body">
                        <Link  type="button" className="btn btn-success">Me gusta👍</Link>
                        <h5>Plato n°2</h5>
                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisi elit. Et voluptatibus perferendis delentini, totam fuga sequi iste! Facilis explicabo repellat ut similique incidunt? Ullam nobis beatae, corporis facilis veniam magni ratione!Lorem ipsum dolor sit amet consectetur adipisi elit. Et voluptatibus perferendis delentini, totam fuga sequi iste! Facilis explicabo repellat ut similique incidunt? Ullam nobis beatae, corporis facilis veniam magni ratione!</p>
                    </div>
                </div>
                </div>

                <div className="col">
                <div className="card h-100">
                    <img src={plato1} className="card3" alt="plato3" />
                    <div className="card-body">
                        <Link  type="button" className="btn btn-success">Me gusta👍</Link>
                        <h5>Plato n°3</h5>
                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisi elit. Et voluptatibus perferendis delentini, totam fuga sequi iste! Facilis explicabo repellat ut similique incidunt? Ullam nobis beatae, corporis facilis veniam magni ratione!Lorem ipsum dolor sit amet consectetur adipisi elit. Et voluptatibus perferendis delentini, totam fuga sequi iste! Facilis explicabo repellat ut similique incidunt? Ullam nobis beatae, corporis facilis veniam magni ratione!</p>
                    </div>
                </div>
                </div>

            </div>
            </div>
        </div>

    
    </>
  )
}
export default OurFood;