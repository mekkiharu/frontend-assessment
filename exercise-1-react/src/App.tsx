import { Card } from "components/Card";
import "./App.css";

function App() {
  return (
    <main>
      <section className="bg-white">
        <div
          aria-hidden="true"
          className="relative isolate w-full overflow-hidden"
        >
          <div className="absolute inset-x-0 -z-10 inset-y-0 sm:right-8">
            <div className="bg-hero-banner-mobile h-full w-full bg-cover bg-no-repeat bg-center sm:bg-hero-banner sm:scale-x-[2.5] sm:scale-y-[3.3]" />
          </div>

          <div className="absolute inset-x-0 -z-10 inset-y-0 ">
            <div className="bg-black h-full w-full bg-opacity-30" />
          </div>

          <div className="mx-auto mt-4  pt-40 pb-28  md:pt-52 md:pb-48">
            <div className="text-center">
              <h1 className="text-6xl font-bold tracking-wide text-white">
                Hello Developer!
              </h1>
              <p className="mt-6 text-3xl tracking-wider text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-8 pb-32">
        <div className="flex items-center flex-col w-full justify-center gap-9 sm:flex-row sm:items-stretch flex-wrap">
          <Card
            imgUrl="https://via.placeholder.com/400x300"
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <Card
            imgUrl="https://via.placeholder.com/400x300"
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Card
            imgUrl="https://via.placeholder.com/400x300"
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
          />
        </div>
      </section>
    </main>
  );
}

export default App;
