import React from 'react'

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Dashboard = () => {

  const tableExample = [
    {
      id: 1,
      user: { name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2023' },
      productName: 'Wireless Headphones',
      slug: 'wireless-headphones',
      time: '10 sec ago',
    },
    {
      id: 2,
      user: { name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2023' },
      productName: 'Smartphone Case',
      slug: 'smartphone-case',
      time: '5 minutes ago',
    },
    {
      id: 3,
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2023' },
      productName: 'Gaming Mouse',
      slug: 'gaming-mouse',
      time: '1 hour ago',
    },
    {
      id: 4,
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2023' },
      productName: 'Bluetooth Speaker',
      slug: 'bluetooth-speaker',
      time: 'Last month',
    },
    {
      id: 5,
      user: { name: 'Agapetus Tadeáš', new: true, registered: 'Jan 1, 2023' },
      productName: 'Mechanical Keyboard',
      slug: 'mechanical-keyboard',
      time: 'Last week',
    },
    {
      id: 6,
      user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2023' },
      productName: 'USB-C Hub',
      slug: 'usb-c-hub',
      time: 'Last week',
    },
  ];
  

  return (
    <>
      <WidgetsDropdown className="mb-4" />
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Updates {' & '} Uploads</CCardHeader>
            <CCardBody>
              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
  <CTableHead className="text-nowrap">
    <CTableRow>
      <CTableHeaderCell className="bg-body-tertiary text-center">ID</CTableHeaderCell>
      <CTableHeaderCell className="bg-body-tertiary">User</CTableHeaderCell>
      <CTableHeaderCell className="bg-body-tertiary">Product Name</CTableHeaderCell>
      <CTableHeaderCell className="bg-body-tertiary">Slug</CTableHeaderCell>
      <CTableHeaderCell className="bg-body-tertiary">Time</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    {tableExample.map((item, index) => (
      <CTableRow key={index}>
        <CTableDataCell className="text-center">{item.id}</CTableDataCell>
        <CTableDataCell>
          <div>{item.user.name}</div>
          <div className="small text-body-secondary text-nowrap">
            <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
            {item.user.registered}
          </div>
        </CTableDataCell>
        <CTableDataCell>{item.productName}</CTableDataCell>
        <CTableDataCell>
          <span className="text-primary">{item.slug}</span>
        </CTableDataCell>
        <CTableDataCell>{item.time}</CTableDataCell>
      </CTableRow>
    ))}
  </CTableBody>
</CTable>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
