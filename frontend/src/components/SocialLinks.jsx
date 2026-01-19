function SocialLinks({ links }) {
  const iconMap = {
    // Changing up the icons for some actual social media icons
    linkedin: '💼',
    github: '🐙',
    itch_io: '🎮',
    youtube: '📺',
    hackthebox: '🔒',
    instagram: '🔗'
  };

  const linkLabels = {
    linkedin: 'LinkedIn',
    github: 'GitHub',
    itch_io: 'Itch.io',
    youtube: 'YouTube',
    hackthebox: 'HackTheBox'
  };

  // I could consider removing the key
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-6">
      {Object.entries(links).map(([key, url]) => (
        <a
          key={key}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center font-semibold gap-2 px-4 py-2 bg-red-400 text-white rounded-lg hover:bg-yellow-300 transition-colors"
        >
          <span>{iconMap[key] || '?'}</span>
          <span>{linkLabels[key] || key}</span>
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;

