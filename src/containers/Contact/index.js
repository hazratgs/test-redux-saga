import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions/App'

import s from './style.pcss'

class App extends PureComponent {
  render () {
    return (
      <div className={s.contact}>
        <p>Контакты</p>
      </div>
    )
  }
}

export default withRouter(connect(
  state => ({
    state: state.App
  }),
  dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
  })
)(App))
