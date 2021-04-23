import React from 'react';

function Tabs({jobs, userSavedJobs, appliedJobs,setJobsShown }) {


    const appliedJobstoshow = jobs.filter(job => {
        return appliedJobs.find(id => id == job.job_id)
      })
      console.log(appliedJobstoshow);


      const SavedJobstoshow = jobs.filter(job => {
        return userSavedJobs.find(id => id == job.job_id)
        
      })


    return (
        <div className="tabs" style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly", marginBottom: '30px'
        }}>
            <div style={{ padding: '20px', border: '2px solid' }} onClick={() => {setJobsShown(jobs)}}>Jobs{jobs.length}</div>
            <div style={{ padding: '20px', border: '2px solid' }}  onClick={() => {setJobsShown(SavedJobstoshow)}}>Saved{userSavedJobs.length}</div>
            <div style={{ padding: '20px', border: '2px solid' }} onClick={() => {setJobsShown(appliedJobstoshow)}}>Applied{appliedJobs.length}</div>
        </div>
    );
}

export default Tabs;