import React from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CRow,
  CCol,
  CWidgetStatsA,
  CProgress,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMemory, cilSpeedometer, cilStorage, cilBug } from '@coreui/icons'
import { CChartLine } from '@coreui/react-chartjs'

const TechnicalDashboard = () => {
  return (
    <>
      <h2 className="mb-4">Technical </h2>

      {/*Widgets */}
      <CRow>
        <CCol sm={6} lg={3}>
          <CWidgetStatsA
            color="primary"
            value="62%"
            title="CPU Usage"
            className="pb-2"
            icon={<CIcon icon={cilSpeedometer} height={36} />}
          />
        </CCol>
        <CCol sm={6} lg={3}>
          <CWidgetStatsA
            color="info"
            value="3.4 GB"
            title="Memory Usage"
            className="pb-2"
            icon={<CIcon icon={cilMemory} height={36} />}
          />
        </CCol>
        <CCol sm={6} lg={3}>
          <CWidgetStatsA
            color="warning"
            value="120 GB"
            title="Disk Space Remaining"
            className="pb-2"
            icon={<CIcon icon={cilStorage} height={36} />}
          />
        </CCol>
        <CCol sm={6} lg={3}>
          <CWidgetStatsA
            color="danger"
            value="5 Errors"
            title="Today Errors"
            className="pb-2"
            icon={<CIcon icon={cilBug} height={36} />}
          />
        </CCol>
      </CRow>

      {/*Progress Bar */}
      <CCard className="mt-4">
        <CCardHeader>System Usage Overview</CCardHeader>
        <CCardBody>
          <div className="mb-3">
            CPU Load <strong>62%</strong>
          </div>
          <CProgress thin color="primary" value={62} className="mb-3" />
          <div className="mb-3">
            Memory Used <strong>70%</strong>
          </div>
          <CProgress thin color="info" value={70} className="mb-3" />
          <div>
            Disk Usage <strong>35%</strong>
          </div>
          <CProgress thin color="warning" value={35} />
        </CCardBody>
      </CCard>

      {/*Line Chart */}
      <CCard className="mt-4">
        <CCardHeader>API Hits (Last 7 Days)</CCardHeader>
        <CCardBody>
          <CChartLine
            data={{
              labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              datasets: [
                {
                  label: 'Hits',
                  backgroundColor: 'rgba(0,123,255,0.1)',
                  borderColor: '#007bff',
                  pointBackgroundColor: '#007bff',
                  data: [520, 760, 610, 480, 790, 900, 860],
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: { display: false },
              },
            }}
          />
        </CCardBody>
      </CCard>

      {/*Logs*/}
      <CCard className="my-4">
        <CCardHeader>System Logs</CCardHeader>
        <CCardBody>
          <CTable striped hover responsive>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell>Time</CTableHeaderCell>
                <CTableHeaderCell>Type</CTableHeaderCell>
                <CTableHeaderCell>Message</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableDataCell>10:41 AM</CTableDataCell>
                <CTableDataCell>
                  <span className="text-danger">Error</span>
                </CTableDataCell>
                <CTableDataCell>Failed login attempt from IP 192.168.1.10</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell>11:02 AM</CTableDataCell>
                <CTableDataCell>
                  <span className="text-warning">Warning</span>
                </CTableDataCell>
                <CTableDataCell>High memory usage on Server-1</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell>11:45 AM</CTableDataCell>
                <CTableDataCell>
                  <span className="text-success">Info</span>
                </CTableDataCell>
                <CTableDataCell>API /auth/login responded in 120ms</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </>
  )
}

export default TechnicalDashboard
