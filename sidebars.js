// type Sidebar = {
// [sidebarId: string]:
//     | {
//   [sidebarCategory: string]: SidebarItem[];
// }
//   | SidebarItem[];
// };

//it is based on the id of the file

module.exports = {
  firstSidebar: {
    Math: [
      {
        type: "category",
        label: "Basic Math",
        items: ["basic-algebra-1"],
      },
      {
        type: "category",
        label: "Basic Algebra",
        items: [
          "basic-algebra/basic-algebra-1",
          "basic-algebra/basic-algebra-2",
          "basic-algebra/basic-algebra-3",
          "basic-algebra/basic-algebra-4",
          "basic-algebra/basic-algebra-5",
          "basic-algebra/basic-algebra-6",
          "basic-algebra/basic-algebra-7",
          "basic-algebra/basic-algebra-8",
          "basic-algebra/basic-algebra-9",
          "basic-algebra/basic-algebra-10",
          "basic-algebra/basic-algebra-11",
        ],
      },
      {
        type: "category",
        label: "Geometry",
        items: ["doc2"],
      },
      {
        type: "category",
        label: "Graph and Functions",
        items: ["doc3"],
      },
    ],
  },
};
