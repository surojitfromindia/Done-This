let links = [
  {
    name: "HOME",
    link: "/#top",
    current: true,
    sublinks: [
      {
        name: "New Studies",
        link: "/#newstudey",
        sublinks: [
          {
            name: "English",
            link: "/#oldstudy",
          },
          {
            name: "Math",
            link: "/#oldstudy",
          },
        ],
      },
      {
        name: "Old Studies",
        link: "/#oldstudy",
        sublinks: [
          {
            name: "English",
            link: "/#oldstudy",
          },
          {
            name: "Math",
            link: "/#oldstudy",
          },
        ],
      },
    ],
  },
  {
    name: "ABOUT",
    link: "/about",
    current: false,
    sublinks: [
      {
        name: "WHAT IS NEW",
        link: "/about#whatnew",
      },
    ],
  },
];

export { links };
