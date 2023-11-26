import Tr from "./Tr";

export default function Table() {
  const tableHeads: string[] = [
    "Date submitted",
    "Time submitted",
    "Submitted by",
    "Department",
    "Destination",
    "Date of trip",
  ];
  return (
    <div className="p-3">
      <table className="w-full !bg-white">
        <thead className="px-5">
          <tr className="!rounded-lg bg-[rgba(123,97,255,0.07)] h-16 mx-auto">
            {tableHeads.map((head, index) => (
              <th key={index} className="px-4 font-normal text-center text-sm">
                {head}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          <Tr />
        </tbody>
      </table>
    </div>
  );
}
