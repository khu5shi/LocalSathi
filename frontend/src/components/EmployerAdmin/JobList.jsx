import React from 'react';
import JobCard from './JobCard';
import { FiPlus } from 'react-icons/fi';

const JobList = ({ jobs = [], onOpenAddJob, theme }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>Your Job Posts</h2>
        <button onClick={onOpenAddJob} className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl">
          <FiPlus /> <span>Post New Job</span>
        </button>
      </div>

      <div className="grid gap-6">
        {jobs.map((job, i) => <JobCard key={job.id} job={job} theme={theme} index={i} />)}
      </div>
    </div>
  );
};

export default JobList;
