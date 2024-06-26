import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

interface LinkProps {
  setFilter: () => any;
  active: boolean;
  children: any;
}

const Link = ({ active, children, setFilter }: LinkProps) =>
  (
    <a
      className={classnames({ selected: active })}
      style={{ cursor: 'pointer' }}
      onClick={() => setFilter()}
    >
      {children}
    </a>
  )


Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  setFilter: PropTypes.func.isRequired
}

export default Link
