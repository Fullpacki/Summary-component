import ImgReaction from "../images/icon-reaction.svg";
import ImgMemory from "../images/icon-memory.svg";
import ImgVerbal from "../images/icon-verbal.svg";
import ImgVisual from "../images/icon-visual.svg";

function Summary() {
  return (
    <section className="p-6 flex flex-col gap-4">
      <h3 className="font-bold text-lg">Summary</h3>
      <div className="flex flex-col gap-5">
        <div className="p-4 bg-red-500/5 rounded-xl">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-3">
              <img src={ImgReaction} alt="" />
              <p className="text-[#ff7d7d] font-semibold">Reaction</p>
            </div>
            <div className="flex flex-row gap-2">
              <span className="font-bold">80</span>
              <span className="font-bold text-[#9899a8]">/</span>
              <span className="font-bold text-[#9899a8]">100</span>
            </div>
          </div>
        </div>
        <div className="p-4 bg-yellow-500/5 rounded-xl">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-3">
              <img src={ImgMemory} alt="" />
              <p className="text-[#ffb21e] font-semibold">Memory</p>
            </div>
            <div className="flex flex-row gap-2">
              <span className="font-bold">92</span>
              <span className="font-bold text-[#9899a8]">/</span>
              <span className="font-bold text-[#9899a8]">100</span>
            </div>
          </div>
        </div>
        <div className="p-4 bg-green-500/5 rounded-xl">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-3">
              <img src={ImgVerbal} alt="" />
              <p className="text-[#1ec39c] font-semibold">Verbal</p>
            </div>
            <div className="flex flex-row gap-2">
              <span className="font-bold">61</span>
              <span className="font-bold text-[#9899a8]">/</span>
              <span className="font-bold text-[#9899a8]">100</span>
            </div>
          </div>
        </div>
        <div className="p-4 bg-blue-500/5 rounded-xl">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-3">
              <img src={ImgVisual} alt="" />
              <p className="text-[#6673e5] font-semibold">Visual</p>
            </div>
            <div className="flex flex-row gap-2">
              <span className="font-bold">73</span>
              <span className="font-bold text-[#9899a8]">/</span>
              <span className="font-bold text-[#9899a8]">100</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Summary;
