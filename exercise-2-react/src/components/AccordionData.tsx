import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { createRef, useMemo, useState } from "react";

interface AccordionDataProps {
  dataList: { title: string; content: string | JSX.Element | JSX.Element[] }[];
}

type DisclosureType = {
  key: string;
  index: number;
  isOpen: boolean;
};

export const AccordionData = ({ dataList = [] }: AccordionDataProps) => {
  const [activeDisclosure, setActiveDisclosure] =
    useState<DisclosureType | null>({
      key: dataList[0].title,
      index: 0,
      isOpen: true,
    });

  const disclosureRefs = useMemo(() => {
    return dataList.map(() => createRef<HTMLButtonElement>());
  }, [dataList]);

  const togglePanels = (newPanel: DisclosureType) => {
    // set if null
    if (!activeDisclosure) {
      setActiveDisclosure(newPanel);

      // remove if clicked self
    } else if (activeDisclosure.key === newPanel.key) {
      setActiveDisclosure(null);
    } else {
      const activeRef = disclosureRefs[activeDisclosure.index];

      // Close active
      const isOpen = activeRef.current?.getAttribute("data-active") === "true";

      if (isOpen) {
        activeRef.current?.click();
      }

      setActiveDisclosure(newPanel);
    }
  };

  return (
    <div className="flex w-full justify-center pt-16">
      <div className="w-full max-w-lg">
        {dataList.map((data, index) => {
          return (
            <Disclosure
              key={`title-${data.title}-${index}`}
              as={"div"}
              defaultOpen={index === 0}
              className={"p-4 w-full group"}
            >
              {({ open }) => {
                const handleOnClick = () => {
                  togglePanels({ key: data.title, index, isOpen: open });
                };

                return (
                  <>
                    <DisclosureButton
                      onClick={handleOnClick}
                      ref={disclosureRefs[index]}
                      data-id={data.title}
                      data-active={open}
                      className="flex w-full items-center justify-between data-[open]:rounded-b-none rounded-xl px-4 py-2 focus:outline-none border border-black/10 bg-black/5 dark:bg-white/5 dark:border-white/10 "
                    >
                      <span className="font-extrabold">{data.title}</span>

                      <ChevronDownIcon className="size-5 fill-black/60 group-data-[hover]:fill-black/50 dark:fill-white/60 dark:group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                    </DisclosureButton>
                    <DisclosurePanel
                      transition
                      className={
                        "tracking-wide rounded-xl rounded-t-none bg-black/5 border border-black/10 p-3 border-t-0 dark:bg-white/5 dark:border-white/10 origin-top transition duration-200 ease-out data-[closed]:scale-y-0 "
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
