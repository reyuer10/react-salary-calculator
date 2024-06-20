import SalaryInputs from "./components/SalaryInputs";
import SalaryTable from "./components/SalaryTable";
import SalaryTitle from "./components/SalaryTitle";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="shadow-md shadow-gray-400 p-4 rounded-lg">
        <SalaryTitle />
        <SalaryInputs />
        <SalaryTable />
      </div>
    </div>
  );
}
