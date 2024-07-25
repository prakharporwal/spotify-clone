interface IProps {}

const WebHeader = (props: IProps) => {
  return (
    <header className="h-12 bg-black fixed top-0 w-full flex">
      {/*  Header Spacer */}
      <div className="w-64 h-12"></div>
      <div
        className="flex flex-1 justify-end text-white"
        style={{ alignItems: "center" }}
      >
        <span className="px-8">Login</span>
      </div>
    </header>
  );
};

export default WebHeader;
