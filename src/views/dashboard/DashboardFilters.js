/* eslint-disable prettier/prettier */
import {
  CCard,
  CCardBody,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CRow,
} from '@coreui/react'
import React from 'react'

const DashboardFilters = () => {
  return (
    <CCard className="mb-4 p-3">
      <h5 className="mb-3">View</h5>
      <CForm>
        <CRow className="g-3">
          {/* اللغة */}
          <CCol md={3}>
            <CFormLabel htmlFor="language">Language</CFormLabel>
            <CFormSelect id="language">
              <option>English</option>
              <option>Arabic</option>
              <option>French</option>
            </CFormSelect>
          </CCol>

          {/* التاريخ */}
          <CCol md={3}>
            <CFormLabel htmlFor="date">Date</CFormLabel>
            <CFormInput type="date" id="date" />
          </CCol>

          {/* الوقت */}
          <CCol md={3}>
            <CFormLabel htmlFor="time">Time</CFormLabel>
            <CFormInput type="time" id="time" />
          </CCol>

          {/* العمليات الحسابية */}
          <CCol md={3}>
            <CFormLabel htmlFor="operator">Comparison</CFormLabel>
            <CFormSelect id="operator">
              <option value=">">{'>'}</option>
              <option value="<">{'<'}</option>
              <option value="=">{'='}</option>
            </CFormSelect>
            <input type="number" className="form-control mt-2" placeholder="Enter value" />
          </CCol>

          {/*radio*/}
          <CCol xs={12}>
            <CFormLabel>Filter Type</CFormLabel>
            <div className="d-flex gap-4">
              <CFormCheck
                inline
                type="radio"
                name="type"
                id="type1"
                label="Type 1"
                defaultChecked
              />
              <CFormCheck inline type="radio" name="type" id="type2" label="Type 2" />
              <CFormCheck inline type="radio" name="type" id="type3" label="Type 3" />
            </div>
          </CCol>

          <CCol md={2}>
            <CFormCheck label="Show Images" />
          </CCol>

          <CCol md={2}>
            <CFormCheck label="Show Videos" />
          </CCol>

          {/* معلومات Admin */}
          <CCol md={2} className="mb-3">
            <CFormCheck inline type="radio" name="info" id="type4" label="Show Admin Info" />
          </CCol>
          <CCol md={2}>
            <CFormCheck inline type="radio" name="info" id="type4" label="Show Technical Info" />
          </CCol>
          <CRow className="mt-4 d-flex justify-content-center">
          <CCol md={4}>
            <button className="btn btn-primary w-100">Apply Filters</button>
          </CCol>
          </CRow>

        </CRow>
      </CForm>
    </CCard>
  )
}

export default DashboardFilters
