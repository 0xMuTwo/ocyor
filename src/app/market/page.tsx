import MarketDialogManager from "@/components/ManageMarket/MarketDialogManager";

let markets = [];
const Market = () => {
  const noMarkets = markets.length === 0;

  return (
    <div className="bg-slate-300 h-[calc(100vh-5rem)] flex w-[calc(100vw-5rem)] m-auto rounded-xl flex-col justify-between">
      {noMarkets ? (
        <>
          <div className="flex flex-1 items-center justify-center w-full text-3xl">
            No Markets Found
          </div>
          <div className="flex justify-center pb-8 w-full">
            <MarketDialogManager />
          </div>
        </>
      ) : (
        <div>Markets Found</div>
      )}
    </div>
  );
};
export default Market;
