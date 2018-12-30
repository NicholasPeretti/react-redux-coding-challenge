import React from 'react'
import PropTypes from 'prop-types'
import CarPropType from '../utils/propTypes/car'
import CarDetails from '../components/CarDetailsPage'
import PageNotFound from './PageNotFound'
import { connect } from 'react-redux'
import { fetchCar } from '../redux/middleware/app/car'
import { getCar, isFetching, getError } from '../redux/ducks/car'

class CarDetailsPage extends React.Component {
  componentDidMount () {
    const { stockNumber } = this.props.match.params
    if (!this.props.car) {
      this.props.fetchCar(stockNumber)
    }
  }

  render () {
    const { car, fetching, error } = this.props

    if (fetching) return 'Loading'

    if (error) return <h1>ERROR - {error}</h1>

    if (!car) return <PageNotFound />

    return (
      <CarDetails
        car={car}
        isCarSaved={false}
        saveCar={() => {}}
        unsaveCar={() => {}}
      />
    )
  }
}

CarDetailsPage.propTypes = {
  fetchCar: PropTypes.func.isRequired,
  car: CarPropType,
  fetching: PropTypes.bool.isRequired,
  error: PropTypes.any
}

const mapStateToProps = state => ({
  car: getCar(state),
  fetching: isFetching(state),
  error: getError(state)
})

const mapDispatchToProps = dispatch => ({
  fetchCar (stockNumber) {
    dispatch(fetchCar(stockNumber))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarDetailsPage)
