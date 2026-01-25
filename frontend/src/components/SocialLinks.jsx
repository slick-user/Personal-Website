function SocialLinks({ links }) {
  const linkLabels = {
    linkedin: 'LinkedIn',
    github: 'GitHub',
    itch_io: 'Itch.io',
    youtube: 'YouTube',
    hackthebox: 'HackTheBox'
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center mt-6">
      {Object.entries(links).map(([key, data]) => {
        const { url, img, icon } = data;

        return (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center font-semibold gap-2 px-4 py-2 bg-red-400 text-white rounded-lg hover:bg-yellow-300 transition-colors"
          >
            {/* ICON / IMAGE */}
            {img ? (
              <img
                src={img}
                alt={key}
                className="w-5 h-5 object-contain"
                loading="lazy"
              />
              ) : (
              <span>{iconMap[key] || '?'}</span> 
            )}
            
            {/* LABEL */}
            <span>{linkLabels[key] || key}</span>
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;

