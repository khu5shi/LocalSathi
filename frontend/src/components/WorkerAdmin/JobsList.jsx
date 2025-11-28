import React from 'react';
import JobCard from './JobCard';

const JobsList = ({ jobs = [], theme = 'light', onApplyClick = () => {} }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>Jobs Near You</h2>
      </div>

      <div className="grid gap-6">
        {jobs.map((job, i) => (
          <JobCard key={job.id} job={job} theme={theme} index={i} onApply={() => onApplyClick(job)} />
        ))}
      </div>
    </div>
  );
};

export default JobsList;
