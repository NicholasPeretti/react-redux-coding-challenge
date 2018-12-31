import React from 'react'
import PropTypes from 'prop-types'
import CarPropType from '../utils/propTypes/car'
import CarDetails from '../components/CarDetailsPage'
import PageNotFound from './PageNotFound'
import ServerError from './ServerError'
import { connect } from 'react-redux'
import { fetchCar } from '../redux/middleware/app/car'
import { getCar, isFetching, getError, saveCar, unsaveCar, isCarSaved } from '../redux/ducks/car'

class CarDetailsPage extends React.Component {
  componentDidMount () {
    const { stockNumber } = this.props.match.params
    if (!this.props.car) {
      this.props.fetchCar(stockNumber)
    }
  }

  render () {
    const { car, fetching, error, unsaveCar, saveCar, isCarSaved } = this.props

    if (error && !car) return <ServerError />

    if (!fetching && !car) return <PageNotFound />

    return (
      <CarDetails
        car={car}
        isCarSaved={isCarSaved}
        saveCar={saveCar}
        unsaveCar={unsaveCar}
        fetching={fetching}
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
  error: getError(state),
  isCarSaved: isCarSaved(state)
})

const mapDispatchToProps = dispatch => ({
  fetchCar (stockNumber) {
    dispatch(fetchCar(stockNumber))
  },
  saveCar () {
    dispatch(saveCar())
  },
  unsaveCar () {
    dispatch(unsaveCar())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarDetailsPage)
