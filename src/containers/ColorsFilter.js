import { connect } from 'react-redux'
import DropdownFilter from '../components/DropdownFilter'
import { getColors } from '../redux/ducks/colorsFilter'
import { fetchColors } from '../redux/middleware/app/colorsFilter'

const defaultVal = 'All car colors'

const mapStateToProps = (state, { onChange }) => ({
  label: 'Colors',
  items: [defaultVal].concat(getColors(state)),
  onChange: val => {
    if (val === defaultVal) {
      val = null
    }

    onChange(val)
  }
})

const mapDispatchToProps = dispatch => ({
  initialFetch: () => {
    dispatch(fetchColors())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropdownFilter)
