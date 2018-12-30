import { connect } from 'react-redux'
import Button from '../components/Button'
import { selectManufacturer } from '../redux/ducks/manufacturersFilter'
import { selectColor } from '../redux/ducks/colorsFilter'

const mapDispatchToProps = dispatch => ({
  onClick: ({ manufacturerFilter, colorFilter }) => {
    dispatch(selectManufacturer(manufacturerFilter))
    dispatch(selectColor(colorFilter))
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
