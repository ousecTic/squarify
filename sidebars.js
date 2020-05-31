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
        items: [
          "basic-math-1",
          "basic-math/basic-math-2",
          "basic-math/basic-math-3",
          "basic-math/basic-math-4",
          "basic-math/basic-math-5",
          "basic-math/basic-math-6",
          "basic-math/basic-math-7",
          "basic-math/basic-math-8",
          "basic-math/basic-math-9",
          "basic-math/basic-math-10",
          "basic-math/basic-math-11",
          "basic-math/basic-math-12",
        ],
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
    ],
  },
};
