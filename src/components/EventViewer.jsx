export default function EventViewer({ event }) {
  switch (event.type) {
    case 'image':
      return <img src={event.src} alt={event.title} className="mx-auto max-w-full max-h-[70vh]" />;
    case 'video':
      return (
        <iframe
          src={event.src}
          className="w-full max-w-4xl h-[60vh] mx-auto"
          title={event.title}
          allowFullScreen
        />
      );
    case 'pdf':
      return (
        <div>
          <p className="font-serif text-2xl text-blackTimeline font-bold">{event.description}</p>
          <a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline mt-4 inline-block text-lg"
          >
            View Original Source
          </a>
          <iframe
            src={`${import.meta.env.BASE_URL}${event.src}`}
            width="100%"
            height="800px"
            title={event.title}
            style={{ border: '1px solid #ccc', marginTop: '1rem' }}
          />
        </div>
      );
    case 'external':
      return (
        <div>
          <p className="font-serif text-2xl text-blackTimeline font-bold">{event.description}</p>
          <a
            href={event.src}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline mt-4 inline-block text-lg"
          >
            View Original Source
          </a>
        </div>
      );
    default:
      return <p className="text-lg text-gray-700">Unsupported event type.</p>;
  }
}
