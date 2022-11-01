import React from 'react'



export default function Flecha(props) {
        let {verbo} = props // saco la propiedad verbo del objeto props - Desestructuracion
        // atravez de las llavez desestructura
    
        let {estilo} = props
        let {onClick} = props
     
  return (
    <div className={`gray flecha {estilo} r25 flex j-center a-center`}estilo={estilo} onClick={onClick}> {verbo} </div>



  )
}





// RFC



