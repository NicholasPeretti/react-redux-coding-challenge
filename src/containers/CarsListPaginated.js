import { connect } from 'react-redux'
import CarsListPaginated from '../components/CarsListPaginated'
import { getCars, getPage, isFetching, getResultsCount } from '../redux/ducks/cars'
import { fetchPage } from '../redux/middleware/app/cars'

const mapStateToProps = state => ({
  cars: getCars(state),
  page: getPage(state),
  resultsCount: getResultsCount(state),
  fetching: isFetching(state)
})

const mapDispatchToProps = dispatch => ({
  fetchPage: page => dispatch(
    fetchPage(page)
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarsListPaginated)
