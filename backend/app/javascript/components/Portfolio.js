import React from 'react';

// Social Links Component
function SocialLinks({ links }) {
  const iconMap = {
    linkedin: '💼',
    github: '🐙',
    itch_io: '🎮',
    youtube: '📺',
    hackthebox: '🔒'
  };

  const linkLabels = {
    linkedin: 'LinkedIn',
    github: 'GitHub',
    itch_io: 'Itch.io',
    youtube: 'YouTube',
    hackthebox: 'HackTheBox'
  };

  return React.createElement('div', { className: 'flex flex-wrap gap-4 justify-center mt-6' },
    Object.entries(links).map(([key, url]) =>
      React.createElement('a', {
        key: key,
        href: url,
        target: '_blank',
        rel: 'noopener noreferrer',
        className: 'flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors'
      },
        React.createElement('span', null, iconMap[key] || '🔗'),
        React.createElement('span', null, linkLabels[key] || key)
      )
    )
  );
}

// Skills Section Component
function SkillsSection({ skills }) {
  return React.createElement('section', { className: 'mt-12' },
    React.createElement('h2', { className: 'text-3xl font-bold mb-6 text-center' }, 'Skills & Technologies'),
    
    React.createElement('div', { className: 'grid md:grid-cols-2 gap-8 mt-6' },
      Object.entries(skills).map(([category, items]) =>
        React.createElement('div', { key: category, className: 'bg-gray-50 p-6 rounded-lg' },
          React.createElement('h3', { className: 'text-xl font-semibold mb-4 capitalize' }, category),
          React.createElement('div', { className: 'flex flex-wrap gap-2' },
            items.map((item, index) =>
              React.createElement('span', {
                key: index,
                className: 'px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium'
              }, item)
            )
          )
        )
      )
    )
  );
}

// Tech Stack Component
function TechStack({ techStack }) {
  return React.createElement('section', { className: 'mt-12' },
    React.createElement('h2', { className: 'text-3xl font-bold mb-6 text-center' }, 'Tech Stack'),
    React.createElement('div', { className: 'flex flex-wrap gap-3 justify-center mt-6' },
      techStack.map((tech, index) =>
        React.createElement('span', {
          key: index,
          className: 'px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium shadow-lg'
        }, tech)
      )
    )
  );
}

// Education Component
function Education({ education }) {
  return React.createElement('section', { className: 'mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg' },
    React.createElement('h2', { className: 'text-3xl font-bold mb-4 text-center' }, 'Education'),
    React.createElement('div', { className: 'text-center' },
      React.createElement('h3', { className: 'text-2xl font-semibold text-gray-800' }, education.institution),
      React.createElement('p', { className: 'text-xl text-gray-600 mt-2' }, education.degree),
      React.createElement('p', { className: 'text-gray-700 mt-4 max-w-2xl mx-auto' }, education.description)
    )
  );
}

// Main Portfolio Component
function Portfolio({ data }) {
  return React.createElement('div', { className: 'min-h-screen py-8' },
    // Header Section
    React.createElement('header', { className: 'text-center py-12 px-4' },
      React.createElement('h1', { className: 'text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent' },
        data.name
      ),
      React.createElement('p', { className: 'text-2xl text-gray-600 mb-6' }, data.title),
      React.createElement('p', { className: 'text-lg text-gray-700 max-w-2xl mx-auto mb-8' }, data.bio),
      React.createElement(SocialLinks, { links: data.social_links })
    ),

    // Education Section
    React.createElement('div', { className: 'px-4' },
      React.createElement(Education, { education: data.education })
    ),

    // Skills Section
    React.createElement('div', { className: 'px-4' },
      React.createElement(SkillsSection, { skills: data.skills })
    ),

    // Tech Stack Section
    React.createElement('div', { className: 'px-4' },
      React.createElement(TechStack, { techStack: data.tech_stack })
    ),

    // Footer
    React.createElement('footer', { className: 'mt-16 py-8 text-center text-gray-600' },
      React.createElement('p', null, `© ${new Date().getFullYear()} ${data.name}. All rights reserved.`)
    )
  );
}

export default Portfolio;

