import { connect } from 'react-redux'
import CarsListPaginated from '../components/CarsListPaginated'
import { getCars, getPage, isFetching, getResultsCount, hasNext, hasPrev, getTotalPages } from '../redux/ducks/cars'
import { fetchPage } from '../redux/middleware/app/cars'

const mapStateToProps = state => ({
  cars: getCars(state),
  page: getPage(state),
  resultsCount: getResultsCount(state),
  fetching: isFetching(state),
  hasNext: hasNext(state),
  hasPrev: hasPrev(state),
  totalPages: getTotalPages(state)
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
