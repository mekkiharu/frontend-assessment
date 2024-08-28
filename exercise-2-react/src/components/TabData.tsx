import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Transition,
} from "@headlessui/react";
import { useState } from "react";

interface TabDataProps {
  dataList: { title: string; content: string | JSX.Element | JSX.Element[] }[];
}

export const TabData = ({ dataList }: TabDataProps) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="flex w-full justify-center pt-24 px-4">
      <div className="w-full max-w-lg">
        <TabGroup selectedIndex={selectedTab} onChange={setSelectedTab}>
          <TabList className={"flex gap-4 items-center justify-center"}>
            {dataList.map((data, index) => {
              return (
                <Tab
                  key={`title-${data.title}-${index}`}
                  className={
                    "rounded-full py-1 px-3 text-lg font-semibold focus:outline-none border border-black/10 data-[selected]:bg-black/10  data-[hover]:bg-black/5 data-[selected]:data-[hover]:bg-black/10 data-[focus]:outline-1 data-[focus]:outline-black dark:data-[selected]:bg-white/15 dark:data-[hover]:bg-white/5 dark:data-[selected]:data-[hover]:bg-white/10 dark:data-[focus]:outline-whitedark:border-white/10"
                  }
                >
                  {data.title}
                </Tab>
              );
            })}
          </TabList>

          <TabPanels
            className={
              "mt-3 min-h-64 rounded-xl bg-black/5 border border-black/10 p-3 dark:bg-white/5 dark:border-white/10"
            }
          >
            {dataList.map((data, index) => {
              return (
                <TabPanel
                  key={`content-${data.title}-${index}`}
                  className={"text-lg tracking-wide"}
                >
                  <Transition show={selectedTab === index} appear>
                    <div className="transition ease-in duration-300 data-[closed]:opacity-0">
                      {data.content}
                    </div>
                  </Transition>
                </TabPanel>
              );
            })}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};
