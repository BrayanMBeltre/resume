export default function Section({ Name, children }) {
  return (
    <section name={Name} id={Name} className="mb-48">
      <h2 className="text-4xl mb-7">{Name}</h2>
      <div className="w-full border-b-2 border-gray-900 mb-24"></div>
      {children}
    </section>
  );
}
