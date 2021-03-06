import PropTypes from 'prop-types'

export default PropTypes.shape({
  stockNumber: PropTypes.number.isRequired,
  manufacturerName: PropTypes.string.isRequired,
  modelName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  mileage: PropTypes.shape({
    number: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired
  }).isRequired,
  fuelType: PropTypes.string.isRequired,
  pictureUrl: PropTypes.string.isRequired
})
