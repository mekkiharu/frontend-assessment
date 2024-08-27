interface CardProps {
  message: string;
  imgUrl: string;
}

export const Card = ({ message, imgUrl }: CardProps) => {
  return (
    <div className="bg-white border shadow-sm rounded-lg p-5 max-w-xs">
      <div className="flex flex-col gap-3 h-full w-full ">
        <img
          src={imgUrl}
          alt="card content img"
          className="rounded-lg max-h-max max-w-sm"
        />

        <div className="text-center">
          <p className="tracking-wide">{message}</p>
        </div>

        <button className="rounded-full border-[3px] border-black py-2 px-4 mt-auto mx-auto focus:outline-none focus:ring focus:ring-gray-300 hover:bg-slate-50 active:bg-slate-100 ">
          <p className="text-sm uppercase font-sans pt-[0.5px] font-black text-black tracking-widest">
            Read More
          </p>
        </button>
      </div>
    </div>
  );
};
