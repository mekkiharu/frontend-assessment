import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

interface AccordionDataProps {
  dataList: { title: string; content: string | JSX.Element | JSX.Element[] }[];
}

type DisclosureType = {
  key: string;
  panel: {
    open: boolean;
    close: () => void;
  };
};

export const AccordionData = ({ dataList }: AccordionDataProps) => {
  const [activeDisclosure, setActiveDisclosure] =
    useState<DisclosureType | null>(null);

  const togglePanels = (newPanel: DisclosureType) => {
    if (activeDisclosure) {
      if (activeDisclosure.key !== newPanel.key) {
        activeDisclosure.panel.close();
      }
    }

    setActiveDisclosure(newPanel);
  };

  return (
    <div className="flex w-full justify-center pt-24">
      <div className="w-full max-w-lg">
        {dataList.map((data, index) => {
          return (
            <Disclosure
              key={`title-${data.title}-${index}`}
              as={"div"}
              defaultOpen={index === 0}
              className={"p-4 w-full group"}
            >
              {({ open, close }) => {
                const handleOnClick = () => {
                  // Close default open disclosure when clicked
                  if (!open) {
                    close();
                  }

                  togglePanels({ key: data.title, panel: { open, close } });
                };

                return (
                  <>
                    <DisclosureButton
                      onClick={handleOnClick}
                      className="flex w-full items-center justify-between data-[open]:rounded-b-none rounded-xl px-4 py-2 focus:outline-none border border-black/10 bg-black/5 dark:bg-white/5 dark:border-white/10 "
                    >
                      <span className="font-extrabold">{data.title}</span>

                      <ChevronDownIcon className="size-5 fill-black/60 group-data-[hover]:fill-black/50 dark:fill-white/60 dark:group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                    </DisclosureButton>
                    <DisclosurePanel
                      transition
                      className={
                        "tracking-wide rounded-xl rounded-t-none bg-black/5 border border-black/10 p-3 border-t-0 dark:bg-white/5 dark:border-white/10 origin-top transition duration-200 ease-in-out data-[closed]:opacity-0"
                      }
                    >
                      {data.content}
                    </DisclosurePanel>
                  </>
                );
              }}
            </Disclosure>
          );
        })}
      </div>
    </div>
  );
};
