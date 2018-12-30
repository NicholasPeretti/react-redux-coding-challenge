import { connect } from 'react-redux'
import DropdownFilter from '../components/DropdownFilter'
import { getManufacturers } from '../redux/ducks/manufacturersFilter'
import { fetchManufacturers } from '../redux/middleware/app/manufacturersFilter'

const defaultVal = 'All manufacturers'

const mapStateToProps = (state, { onChange }) => ({
  label: 'Manufacturers',
  items: [defaultVal].concat(getManufacturers(state)),
  onChange: val => {
    if (val === defaultVal) {
      val = null
    }

    onChange(val)
  }
})

const mapDispatchToProps = dispatch => ({
  initialFetch: () => {
    dispatch(fetchManufacturers())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropdownFilter)
