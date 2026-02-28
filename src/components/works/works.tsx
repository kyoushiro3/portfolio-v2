import PanelSelection from "../panelselection";
import TwoPanelCard from "../twoPanelCard";

export default function WorksComponent() {
  return (
    <div className="w-full bg-background px-5 selection:bg-white selection:text-black">
      <PanelSelection
        spans={[3, 1]}
        borders="border-white/15 divide-y lg:divide-x divide-white/15 border-y"
        panelGap="pt-24"
      >
        <TwoPanelCard label="Case Studies" className="text-9xl">
          Work 1
        </TwoPanelCard>
        <div className="p-6 text-xs uppercase tracking-widest font-mono text-right flex justify-end">
          A sleek template for video producers and filmmakers to showcase their
          work.
        </div>
      </PanelSelection>
      <PanelSelection spans={[1]}>
        <div>Image</div>
      </PanelSelection>
      <PanelSelection
        spans={[1, 1, 2]}
        borders="border-white/15 divide-y lg:divide-x divide-white/15 border-y"
        panelGap="pt-6 lg:pt-24"
      >
        <div />
        <div />
        <div className="font-mono uppercase text-xs">
          <div className="flex flex-col">
            <div className="px-6 py-5 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="flex border-b border-white/15">
              <span className="flex-1 px-6 py-5 text-white/50">Date</span>
              <span className="flex-1 px-6 py-5 text-right">Date</span>
            </div>

            <div className="flex border-b border-white/15">
              <span className="flex-1 px-6 py-5 text-white/50">Client</span>
              <span className="flex-1 px-6 py-5 text-right">Date</span>
            </div>

            <div className="flex border-b border-white/15">
              <span className="flex-1 px-6 py-5 text-white/50">Industry</span>
              <span className="flex-1 px-6 py-5 text-right">Date</span>
            </div>

            <div className="flex border-b border-white/15">
              <span className="flex-1 px-6 py-5 text-white/50">Services</span>
              <span className="flex-1 px-6 py-5 text-right">Date</span>
            </div>

            <div className="flex">
              <span className="flex-1 px-6 py-5 text-white/50">Live project</span>
              <span className="flex-1 px-6 py-5 text-right">Date</span>
            </div>
          </div>
        </div>
      </PanelSelection>
    </div>
  );
}
