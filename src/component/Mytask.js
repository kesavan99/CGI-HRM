import React from 'react'

import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import Sidebar from './Sidebar'
import Appbar from './Appbar'
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Mytask() {


  const random = () => Math.round(Math.random() * 100)




const {currentUser}=useAuth()
const history = useHistory()


    return (
        <div>
          
    <div  >
<div className="container">
  <div className="row align-items-start">
<Appbar/>
  </div>
    <div   className="row ">
    
      <Sidebar/>
<div  style={{paddingLeft:'15%',paddingTop:'5%'}}>  
     

<h2  style={{textAlign:'center',color :'lightblue'}}><strong>CGI Work Update</strong></h2>


<CRow>
      <CCol xs={12}>
        
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Your Contribution in Project Monthly Report</CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'Work Analysis',
                    backgroundColor: '#f87979',
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Analysis</CCardHeader>
          <CCardBody>
            <CChartLine
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'Last Year',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'rgba(220, 220, 220, 1)',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    pointBorderColor: '#fff',
                    data: [random(), random(), random(), random(), random(), random(), random()],
                  },
                  {
                    label: 'Current Year',
                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                    borderColor: 'rgba(151, 187, 205, 1)',
                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                    pointBorderColor: '#fff',
                    data: [random(), random(), random(), random(), random(), random(), random()],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Language Frequently Used</CCardHeader>
          <CCardBody>
            <CChartDoughnut
              data={{
                labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
                datasets: [
                  {
                    backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                    data: [40, 20, 80, 10],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Team Contribution in project</CCardHeader>
          <CCardBody>
            <CChartPie
              data={{
                labels: ['Krishna', 'kesavan', 'nandita'],
                datasets: [
                  {
                    data: [300, 50, 100],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Attendance</CCardHeader>
          <CCardBody>
            <CChartPolarArea
              data={{
                labels: ['Absent', 'Present'],
                datasets: [
                  {
                    data: [20,80],
                    backgroundColor: ['#FF6384', '#4BC0C0'],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>


</div>
</div>
</div>
</div>

        </div>
    )
}





























