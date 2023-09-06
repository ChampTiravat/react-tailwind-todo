import * as React from "react";

export const Button = (props: any) => {
  const { label } = props;
  return (
    <button {...props} className="std-button">
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
    <div className="flex flex-col items-center justify-around w-full min-h-[1000px] py-1 px-3 m-0 top-0 left-0">
      <Card>
        <h1 className="text-2xl font-bold text-gray-600 mx-0 mt-3 mb-0">Information</h1>
        <p className="mt-4 mb-5 text-left font-normal text-gray-700">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, odio
          quasi repudiandae cum necessitatibus exercitationem animi, velit optio
          sit est voluptates pariatur beatae! Molestiae odio sed quo molestias.
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
      <Button label="Download" />
      <Button label="Sign Me Up" />
      <Button label="Toogle Block Comment" />
      <Button label="Automatically Check for Updates" />
    </div>
  );
};

export default App;
