// src/components/sections/LoanForm.tsx
export default function LoanForm() {
  return (
    <section className="py-8">
      <div className="max-w-xl mx-auto p-4 border rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Apply for a Loan</h2>
        <form name="loan-application" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="loan-application" />
          
          <div className="mb-4">
            <label className="block mb-1">Full Name</label>
            <input type="text" name="name" required className="w-full border px-3 py-2 rounded" />
          </div>

          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input type="email" name="email" required className="w-full border px-3 py-2 rounded" />
          </div>

          <div className="mb-4">
            <label className="block mb-1">Phone Number</label>
            <input type="tel" name="phone" required className="w-full border px-3 py-2 rounded" />
          </div>

          <div className="mb-4">
            <label className="block mb-1">Loan Amount</label>
            <input type="number" name="amount" required className="w-full border px-3 py-2 rounded" />
          </div>

          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Apply Now
          </button>
        </form>
      </div>
    </section>
  );
}

        </form>
      </div>
    </section>
  );
}
