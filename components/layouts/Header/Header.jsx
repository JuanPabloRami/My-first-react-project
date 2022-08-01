import React from 'react'

import { NavegacionHome } from '../../ui/NavegacionHome/NavegacionHome';
import { Contador } from '../../ui/WelcomeHome/Contador';

export const Header = () => {
  return (
    <div>
        <NavegacionHome/>
        <Contador/>
    </div>
  )
}
