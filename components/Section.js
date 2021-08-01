export default function Section({ Name, children }) {
  return (
    <section name={Name} id={Name} className="mb-48">
      <h2 className="text-4xl mb-4 md:mb-7 dark:text-gray-50">{Name}</h2>
      <div className="w-full border-b-2 border-gray-900 dark:border-gray-50 mb-10 md:mb-24"></div>
      {children}
    </section>
  );
}
