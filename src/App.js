import React, {memo} from 'react'
import { renderRoutes } from 'react-router-config';
import { withRouter } from 'react-router-dom'

import AppStyled from './style'
import routes from './router'

export default withRouter(memo(function App() {
  return (
    <AppStyled>
      {renderRoutes(routes)}
    </AppStyled>
  );
}))
