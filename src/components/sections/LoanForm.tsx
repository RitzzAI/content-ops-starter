export default function LoanForm() {
  return (
    <section id="apply" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-xl bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Apply for a Personal Loan</h2>
        <form name="loan-application" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="loan-application" />
          <div className="mb-4">
            <label className="block mb-1 font-medium">Full Name</label>
            <input type="text" name="name" className="w-full border px-3 py-2 rounded" required />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Phone Number</label>
            <input type="tel" name="phone" className="w-full border px-3 py-2 rounded" required />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input type="email" name="email" className="w-full border px-3 py-2 rounded" required />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Loan Amount (INR)</label>
            <input type="number" name="amount" className="w-full border px-3 py-2 rounded" required />
          </div>
          <div className="mb-6">
            <label className="block mb-1 font-medium">Purpose</label>
            <input type="text" name="purpose" className="w-full border px-3 py-2 rounded" />
          </div>
          <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
}
