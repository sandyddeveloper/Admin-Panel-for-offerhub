import React from 'react'

import { CFooter } from '@coreui/react-pro'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="" target="_blank" rel="noopener noreferrer">
          DEVXNET
        </a>
        <span className="ms-1">&copy; 2025.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Developed by</span>
        <a
          href="https://santhosh.devxnet.cloud/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Santhosh Raj 
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
