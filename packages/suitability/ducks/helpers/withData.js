import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const withData = ({ actions, states }) => (Component) => {
  const WithData = (props) => <Component {...props} />

  WithData.propTypes = {
    actions: PropTypes.object,
    states: PropTypes.func,
  }

  WithData.defaultProps = {
    actions: {},
    states: () => {},
  }

  WithData.displayName = `withData(${Component.displayName})`

  const mapStateToProps = (state) => states(state)
  const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

  return connect(mapStateToProps, mapDispatchToProps)(WithData)
}

export default withData
