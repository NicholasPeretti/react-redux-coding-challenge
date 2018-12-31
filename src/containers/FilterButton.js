import { connect } from 'react-redux'
import Button from '../components/Button'
import { selectManufacturer } from '../redux/ducks/manufacturersFilter'
import { selectColor } from '../redux/ducks/colorsFilter'
import { fetchPage } from '../redux/middleware/app/cars'

const mapDispatchToProps = dispatch => ({
  onClick: ({ manufacturerFilter, colorFilter }) => {
    dispatch(selectManufacturer(manufacturerFilter))
    dispatch(selectColor(colorFilter))
    dispatch(fetchPage(1))
  }
})

export default connect(
  null,
  mapDispatchToProps,
  (stateProps, { onClick }, ownProps) => ({
    ...ownProps,
    onClick () {
      onClick(ownProps.filters)
    }
  })
)(Button)
