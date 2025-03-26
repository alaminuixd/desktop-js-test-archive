const person = {};

const collections = [
  {
    id: new Date().getTime(),
    colName: "alamin",
    name: "Al Amin",
    age: 38,
    father: "Syed Ahmed",
    mother: "Mamataz Begum",
    kids: [
      {
        id: 1,
        name: "Abrar Syed",
        age: 6,
      },
      {
        id: 2,
        name: "Arshiya Amin",
        age: 4,
      },
    ],
  },
];

collections.forEach((col) => {
  const kidsObj = {};
  col.kids.forEach((kid) => {
    kidsObj[kid.id] = {
      // Using kid.id as key instead of non-existent kid.colName
      getKids: () => {
        return {
          id: kid.id,
          name: kid.name,
          age: kid.age,
        };
      },
    };
  });

  person[col.colName] = {
    kids: kidsObj,
    showSelf: () => {
      const kidsList = col.kids.map((kid) => kid.name).join(" and ");
      return `My name is ${col.name} I am ${col.age} years old. My father name is ${col.father} and my mother name is ${col.mother}. I've got ${col.kids.length} children. They are ${kidsList}`;
    },
  };
});

console.log(person.alamin.showSelf());
