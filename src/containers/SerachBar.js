import { connect } from 'react-redux'
import { setCityName } from '../actions'
import Form from './../components/Form'

const mapStateToProps = state => ({
    cityName: state.cityName
  })

const mapDispatchToProps = dispatch => ({
    setCityName: cityName => dispatch(setCityName(cityName))
})   

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Form)
