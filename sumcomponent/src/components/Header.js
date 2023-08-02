function Results() {
  return (
    <div className="text-center bg-gradient-to-b from-[#6843ff] to-[#312ce9]  rounded-b-3xl text-white flex flex-col justify-center items-center px-6 pb-10 py-6 xl:w-1/2 xl:rounded-xl">
      <header className="flex flex-col gap-5 w-full justify-center items-center">
        <h1 className="font-bold text-[#cac9ff]">Your Result</h1>
        <div className="w-36 h-36 xl:w-48 xl:h-48 xl:w- flex flex-col items-center justify-center rounded-full bg-gradient-to-b from-[#4c22cb] to-[#4635f0]">
          <div className="font-extrabold text-6xl xl:text-7xl">76</div>
          <div className="font-bold text-[#7872f5]">of 100</div>
        </div>
        <h2 className="text-2xl xl:text-3xl font-bold">Great</h2>
        <p className="text-[#cac9ff] xl:text-lg xl:w-5/6 w-4/5">
          Your performance exeed 65% of the people conductiong the test here!
        </p>
      </header>
    </div>
  );
}

export default Results;
