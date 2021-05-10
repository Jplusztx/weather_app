import React, {memo} from 'react'
import { Link } from 'react-router-dom'

import StartStyled from './style'

export default memo(function StartPage() {
  return (
    <StartStyled>
      <Link to='/weather' className="start center"></Link>
    </StartStyled>
  )
})
