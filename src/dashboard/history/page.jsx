import CustomDropdown from "@/components/ui/history_dropdown";
export default function History() {
  let transactions = [
    {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      amount: "+1,999.00",
      avatar: "OM",
    },
    {
      name: "Jackson Lee",
      email: "jackson.lee@email.com",
      amount: "+39.00",
      avatar: "JL",
    },
    {
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      amount: "+299.00",
      avatar: "IN",
    },
  ];

  return (
    <>
      <section className="p-4">
        <div className=" min-w-10 max-w-full bg-slate-800 px-5 py-4 rounded-[14px]">
          {/* header */}

          <div className="flex md:flex-row md:gap-0 gap-4 flex-col justify-between mb-8 items-center">
            <h1 className="text-3xl font-bold">Transfer History</h1>

            <div className="flex items-center gap-3">
              {/* Month Dropdown */}
              <CustomDropdown
                placeholder="Month"
                width="w-40"
                options={[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ]}
              />

              {/* Year Dropdown */}
              <CustomDropdown
                placeholder="Year"
                width="w-28"
                options={["2026", "2025", "2024", "2023"]}
              />
              {/* Filter Button */}
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-2 rounded-md">
                Filter
              </button>
            </div>
          </div>

          <div className="mb-6 text-sm text-[oklch(0.556_0_0)]">
            You made 67 transaction this month.
          </div>

          {transactions.map((transaction, index) => (
            <div
              key={index}
              className="flex flex-row justify-between items-center mb-8"
            >
              <div className="flex flex-row gap-4 items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[oklch(0.97_0_0)] text-[oklch(0.556_0_0)] text-[16px]">
                  {transaction.avatar}
                </div>

                <div className="text-sm font-medium">
                  {transaction.name}
                  <p className="text-[oklch(0.556_0_0)] text-sm">
                    {transaction.email}
                  </p>
                </div>
              </div>

              {transaction.amount}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
