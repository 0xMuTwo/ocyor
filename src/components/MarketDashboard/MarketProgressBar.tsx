import { Progress } from "../ui/progress";

interface MarketProgressBarProps {
  amount: number;
  total: number;
}

const MarketProgressBar: React.FC<MarketProgressBarProps> = ({
  amount,
  total,
}) => {
  // Ensuring at runtime that 'amount' is not less than 0 and not greater than 'total'
  const validAmount = Math.max(0, Math.min(amount, total));
  const percent = (validAmount / total) * 100;
  return (
    <div className="w-full h-full flex flex-col items-center justify-between">
      <div></div>
      <Progress value={percent} className="w-[80%] h-10 bg-slate-50" />
      <div className="mb-0">
        {amount}/{total}
      </div>
    </div>
  );
};

export default MarketProgressBar;
