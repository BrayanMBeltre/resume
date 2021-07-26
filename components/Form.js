export default function Form() {
  return (
    <form className="w-full">
      <div className="floating-input mb-5 relative">
        <input
          type="email"
          id="email"
          className="bg-gray-100 border-b-2 border-gray-600 focus:outline-none focus:border-gray-900 focus:shadow-sm w-full p-3 h-16"
          placeholder="name@example.com"
          autoComplete="off"
        />
        <label
          htmlFor="email"
          className="absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out "
        >
          Email
        </label>
      </div>

      <div className="floating-input mb-5 relative">
        <input
          type="email"
          id="email"
          className="bg-gray-100 border-b-2 border-gray-600 focus:outline-none focus:border-gray-900 focus:shadow-sm w-full p-3 h-16"
          placeholder="name@example.com"
          autoComplete="off"
        />
        <label
          htmlFor="email"
          className="absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out "
        >
          Email
        </label>
      </div>

      <div className="floating-input mb-5 relative">
        <input
          type="email"
          id="email"
          className="bg-gray-100 border-b-2 border-gray-600 focus:outline-none focus:border-gray-900 focus:shadow-sm w-full p-3 h-16"
          placeholder="name@example.com"
          autoComplete="off"
        />
        <label
          htmlFor="email"
          className="absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out "
        >
          Email
        </label>
      </div>

      <button className="w-full bg-indigo-600 text-white p-3 rounded-md">
        Submit
      </button>
    </form>
  );
}
