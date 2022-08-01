import React from 'react'
import { Logotipo } from '../../ui/Logotipo/Logotipo';
import { Ancla } from '../Ancla/Ancla'

export const NavegacionHome = () => {
  return (
    <nav >
      
        <Logotipo/>
        <div className='derecha'>
          <Ancla textoAncla='Inicio'/>
          <Ancla textoAncla='Hackeos'/>
        </div>
    </nav>
  )
}
