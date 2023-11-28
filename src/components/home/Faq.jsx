import React from "react";
import { Collapse } from "antd";
import Header from "../Header";
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
   Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
  {
    key: "1",
    label: "This is panel header 1",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
  {
    key: "1s",
    label: "This is panel header 1",
    children: <p>{text}</p>,
  },
  {
    key: "s2",
    label: "This is panel header 2",
    children: <p>{text}</p>,
  },
  {
    key: "d3",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
  {
    key: "t1",
    label: "This is panel header 1",
    children: <p>{text}</p>,
  },
  {
    key: "z2",
    label: "This is panel header 2",
    children: <p>{text}</p>,
  },
  {
    key: "35",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
  {
    key: "135",
    label: "This is panel header 1",
    children: <p>{text}</p>,
  },
  {
    key: "aa2",
    label: "This is panel header 2",
    children: <p>{text}</p>,
  },
  {
    key: "sa3",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
];
const FAQPage = () => (
    <>
    <Header/>
    <h1 className="text-center text-5xl  md:text-8xl text-gray-900 font-bold m-2 p-4">
      Faq
    </h1>{" "}
    <Collapse defaultActiveKey={["1", "2", "3"]} ghost items={items} />
  </>
);
export default FAQPage;
