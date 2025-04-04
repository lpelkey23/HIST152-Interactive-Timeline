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
        <iframe src={event.src} className="w-full max-w-4xl h-[80vh] mx-auto" title={event.title} />
      );
    default:
      return <p className="text-lg text-gray-700">Unsupported event type.</p>;
  }
}
