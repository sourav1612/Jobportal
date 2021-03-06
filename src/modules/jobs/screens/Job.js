import React from 'react';
import { BookmarkBorderOutlined, Bookmark } from '@material-ui/icons';
import { connect } from 'react-redux';
import { saveJobRequest } from '../../applicant/redux/action';
import { unsaveJobRequest } from '../../applicant/redux/action';
import { applyJobRequest } from '../../applicant/redux/action';

function Job({ job, userSavedJobs, saveJobRequest, unsaveJobRequest
     ,userAppliedJobs,applyJobRequest,setOpen,setCurrentJob}) {
    const {
        job_id,
        job_name,
        type,
        date_created,
        skill_required,
        location,
        job_type,
        job_descrition
    } = job;
    const isSaved = userSavedJobs.includes(job_id)

    const isApplied = userAppliedJobs.includes(job_id)

    return (
        <div className="job" style={{ position: "relative" }}>
            <div style={{
                position: "absolute",
                right: 0,
                top: -5,
            }}> {isSaved ?
                <Bookmark onClick={() => {unsaveJobRequest(job_id)}}>save</Bookmark>
                : <BookmarkBorderOutlined onClick={() => {saveJobRequest(job_id)}}>Unsave</BookmarkBorderOutlined>
                }</div>

            {isApplied?
            <div>Applied</div>:
            <button onClick={()=>{applyJobRequest(job_id)}}>Apply</button>}
            <button onClick={()=>{
                setOpen(true)
                setCurrentJob(job);
            }}>Job details</button>
            <div className="job_title"><div>{job_name}  {`job id :` + job_id}</div><div>{job_type}</div></div>
            <div>{location}</div>
            <div><p>{job_descrition}</p></div>
            <div className="skills"><ul>{skill_required.map(skill => <li key={skill}><span className="skill">{skill}</span></li>)}</ul></div>
        </div >
    );
}

export default connect(null, { saveJobRequest ,unsaveJobRequest, applyJobRequest})(Job);