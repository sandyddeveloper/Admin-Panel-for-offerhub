import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <span className="ms-1">&copy; {new Date().getFullYear()} DEVxNET.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Developed by</span>
        <a href="https://santhosh.devxnet.cloud" target="_blank" rel="noopener noreferrer">
          Santhosh Raj
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
