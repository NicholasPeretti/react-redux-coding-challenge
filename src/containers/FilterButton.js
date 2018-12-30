import { connect } from 'react-redux'
import Button from '../components/Button'
import { selectManufacturer } from '../redux/ducks/manufacturersFilter'

const mapDispatchToProps = dispatch => ({
  onClick: ({ manufacturerFilter }) => {
    dispatch(selectManufacturer(manufacturerFilter))
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
