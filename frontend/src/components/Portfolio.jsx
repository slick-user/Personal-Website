import { useState, useEffect } from 'react';
import SocialLinks from './SocialLinks';
import SkillsSection from './SkillsSection';
import Education from './Education';
import ProjectsSection from './ProjectsSection'

import Spinner from './common/Spinner';
import Error from './common/Error'

function Portfolio() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/portfolio')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch portfolio data');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner/>
      </div>
    );
  }

  if (error) {
    return (
      // my Error component does not seem to be working
      <div className="min-h-screen flex items-center justify-center">
        <Error error={error}/> 
        <div className="text-xl text-red-600">Error: {error}</div>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  // If it successfully fetches portfolio data call this
  return (
    <div className="min-h-screen py-8">
      {/* Header Section */}
      <header className="text-center py-11 px-4">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
          {data.name}
        </h1>
        <p className="text-2xl font-semibold text-orange-500 mb-6">{data.title}</p>
        <p className="text-lg text-horizon1 max-w-2xl mx-auto mb-8">{data.bio}</p>
        <SocialLinks links={data.social_links}/>
      </header>

      {/* Education Section */}
      <div className="px-4">
        <Education education={data.education} />
      </div>

      {/* Skills Section */}
      <div className="px-4">
        <SkillsSection skills={data.skills} />
      </div>

      {/* Projects Section */}
      <div className='px-4'>
        <ProjectsSection projects={data.projects} />
      </div>

      {/* Footer */}
      <footer className="mt-16 py-8 text-center text-gray-600">
        <p>© {new Date().getFullYear()} {data.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Portfolio;

