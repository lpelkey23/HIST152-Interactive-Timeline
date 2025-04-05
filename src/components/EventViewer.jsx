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
          <iframe
            src={event.src}
            width="100%"
            height="800px"
            title={event.title}
            style={{ border: '1px solid #ccc', marginTop: '1rem' }}
          />
        </div>
      );
    default:
      return <p className="text-lg text-gray-700">Unsupported event type.</p>;
  }
}
