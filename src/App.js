import "./App.css";
import { useEffect } from "react";
import { fetchJobs } from "./modules/jobs/redux/actions";
import { connect } from "react-redux";

import JobsData from "./data/jobs.json";
import UserData from "./data/user.json";

import Jobs from "./modules/jobs/Jobs";
import { fetchUser } from "./modules/applicant/redux/action";

function App({ fetchJobs, jobLoading }) {
  // console.log('----------- loaging from redux', jobLoading);
  useEffect(() => {
    // console.log('useeffect appjs');
    fetchJobs(JobsData);
    fetchUser(UserData);
  }, []);

  return (
    <div className="App">
    {jobLoading ? <div>LOADING...</div> : <Jobs/>}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    jobLoading: state.jobReducer.loading,
  };
};

const mapDispatchToProps = {
  fetchJobs,
  fetchUser,
};

const connected = connect(mapStateToProps, mapDispatchToProps);

// console.log(connected);

export default connected(App);
