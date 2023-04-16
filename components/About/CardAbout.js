export default function CardAbout(props) {
  return (
    <div
      className="w-6/12 rounded-[20px] grid place-content-center  bg-cover h-[400px] "
      style={{ backgroundImage: `url(${props.src})` }}
    >
      <div className="text-center">
        <h3 className="text-white uppercase mb-4 font-semibold text-[32px]">
          {props.title}
        </h3>
        <button className="px-10 py-6 text-white bg-transparent border border-white rounded-full hover:bg-light-blue hover:border-light-blue">
          {props.but}
        </button>
      </div>
    </div>
  );
}
