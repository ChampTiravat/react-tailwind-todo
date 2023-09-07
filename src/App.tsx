import * as React from "react";

export const SideBar = () => {
  return (
    <>
      <aside className="flex flex-col justify-between items-center py-5 px-3 w-[300px] h-screen bg-white fixed top-0 left-0 bottom-0 drop-shadow-xl z-50">
        <h1 className="text-center text-2xl font-bold text-lime-600 mx-0 mt-3 mb-3">
          Application Name
        </h1>
        <Button fullWidth label="SETTINGS" />
      </aside>
      {/* <div className="w-full h-full fixed top-0 left-0 right-0 bottom-0 bg-black opacity-75 z-40"></div> */}
    </>
  );
};

export const Button = (props: any) => {
  const {
    label,
    fullWidth,
    ...otherProps
  }: { label: string; fullWidth: boolean } = props;
  return (
    <button
      {...otherProps}
      className={`std-button ${fullWidth && "w-full mx-0"}`}
    >
      {label.toUpperCase()}
    </button>
  );
};

export const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="text-left shadow-lg w-[400px] h-auto p-4 bg-white rounded-lg my-3 mx-1">
    {children}
  </div>
);

const App = () => {
  return (
    <>
      <SideBar />
      <div className="flex flex-col items-center justify-around w-full min-h-[1000px] py-1 px-3 m-0 top-0 left-0">
        <Card>
          <h1 className="text-center text-2xl font-bold  mx-0 mt-3 mb-3">
            Information
          </h1>
          <form
            className="myy-2"
            onSubmit={(e) => {
              e.preventDefault();
              console.log("form submited");
            }}
          >
            <div className="mx-0 my-3">
              <label className="text-sm text-gray-500" htmlFor="A1">
                Username
              </label>
              <input
                className="w-full text-gray-500 rounded-md bg-gray-100 my-1 mx-0 py-2 px-4 border-[2px] border-gray-300"
                id="A1"
                type="text"
              />
            </div>
            <div className="mx-0 my-3">
              <label className="text-sm text-gray-500" htmlFor="A2">
                Password
              </label>
              <input
                className="w-full text-gray-500 rounded-md bg-gray-100 my-1 mx-0 py-2 px-4 border-[2px] border-gray-300"
                id="A2"
                type="password"
              />
            </div>
            <Button type="submit" fullWidth label="SUBMIT" />
          </form>
        </Card>
        <Card>
          <h1 className="text-2xl font-bold text-gray-600 mx-0 mt-3 mb-0">
            Information
          </h1>
          <p className="mt-4 mb-5 text-left font-normal text-gray-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, odio
            quasi repudiandae cum necessitatibus exercitationem animi, velit
            optio sit est voluptates pariatur beatae! Molestiae odio sed quo
            molestias.
          </p>
          <div className="w-full flex flex-column justify-end items-center">
            <div>
              <Button onClick={() => alert("hello")} label="LEARN MORE" />
              <Button label="CANCEL" />
            </div>
          </div>
        </Card>

        <Card>
          <Button label="CANCEL" />
          <Button label="CANCEL" />
          <Button label="CANCEL" />
          <Button label="CANCEL" />
        </Card>

        <h1 className="my-4 text-2xl font-medium text-white">Hello</h1>
        <div>
          <Button label="ADD" />
          <Button label="ADD" />
          <Button label="ADD" />
        </div>
      </div>
    </>
  );
};

export default App;
