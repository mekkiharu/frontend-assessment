import { TabData } from "components/TabData";
import "./App.css";
import { useMemo } from "react";
import dataList from "utils/data.json";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import { AccordionData } from "components/AccordionData";

function App() {
  const title = ("b" + "a" + +"a" + "a").toLowerCase();

  const parsedData = useMemo(() => {
    const data = dataList.map((data) => {
      const purifiedContent = DOMPurify.sanitize(data.content);
      const content = parse(purifiedContent);

      return {
        title: data.title,
        content,
      };
    });

    return data;
  }, []);

  return (
    <main className="container sm:mx-auto">
      <div className="flex flex-col w-full justify-center">
        <p className="text-4xl font-extrabold text-center">{title}</p>
        <p className="text-lg font-semibold text-center mt-1">
          Because unary operator + and operand '+a' results in NaN.
        </p>
        <p className="font-semibold text-center mt-1">
          Brought to you by JavaScript's type coercion
        </p>
      </div>

      <div className="hidden sm:block">
        <TabData dataList={parsedData} />
      </div>

      <div className="block sm:hidden">
        <AccordionData dataList={parsedData} />
      </div>
    </main>
  );
}

export default App;
