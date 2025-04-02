function TimelineEvent({ title, date, description }) {
  return (
    <div className="bg-white p-4 shadow rounded mb-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-sm text-gray-500">{date}</p>
      <p className="mt-2">{description}</p>
    </div>
  );
}

export default TimelineEvent;
