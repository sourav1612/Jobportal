import Modal from "../../components/Modal";
import React, { useState } from "react";
import { connect } from "react-redux";
import Job from "./screens/Job";
import Tabs from "./screens/Tabs";

function Jobs({ jobs, userSavedJobs, appliedJobs }) {
  //   console.log(userSavedJobs, jobs);
  console.log(appliedJobs);

  const [open, setOpen] = useState(false);
  const [currentJob, setCurrentJob] = useState(false);
  const [JobsShown, setJobsShown] = useState(jobs);


  return (
    <div>
      <Tabs jobs={jobs} userSavedJobs={userSavedJobs} appliedJobs={appliedJobs}  setJobsShown={setJobsShown}/>
      <div className="jobs_container">
        <div className="filters">Filters</div>
        <div className="jobs_list">
          {open && <Modal setOpen={setOpen} currentJob={currentJob} />}
          {JobsShown.map((job) => (
            <Job
              job={job}
              setOpen={setOpen}
              key={job.job_id}
              setCurrentJob={setCurrentJob}
              userSavedJobs={userSavedJobs}
              userAppliedJobs={appliedJobs}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    jobs: state.jobReducer.jobs,
    userSavedJobs: state.userReducer.savedJobs,
    appliedJobs: state.userReducer.appliedJobs,
  };
};

export default connect(mapStateToProps, {})(Jobs);
