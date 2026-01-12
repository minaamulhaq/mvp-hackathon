import React from 'react'
import Announcements from './Announcements'
import AssignmentDashboard from './AssignmentDashboard'
import QuizWorkspace from './QuizWorkspace'

const Dashboard = () => {
    return (
        <div className='py-10'>
            <Announcements />

            <AssignmentDashboard />
            <QuizWorkspace />
        </div>
    )
}

export default Dashboard
