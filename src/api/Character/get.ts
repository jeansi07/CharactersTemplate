import { PAGE_NUMBER } from "@/Constants";
import { Character, ResponseBody, ResponsePaginatedData } from "@/interfaces";

export const FAKEDATA: Character[] = [
  {
    id: "1",
    name: "Albert Einstein",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
    description: "Físico teórico conocido por la teoría de la relatividad.",
    birthDate: new Date("1879-03-14"),
    deathDate: new Date("1955-04-18"),
  },
  {
    id: "2",
    name: "Marie Curie",
    description:
      "Pionera en el campo de la radiactividad, ganadora de dos premios Nobel.",
    birthDate: new Date("1867-11-07"),
    deathDate: new Date("1934-07-04"),
  },
  {
    id: "3",
    name: "Mahatma Gandhi",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d1/Portrait_Gandhi.jpg",
    description:
      "Líder del movimiento de independencia de la India y defensor de la no violencia.",
    birthDate: new Date("1869-10-02"),
    deathDate: new Date("1948-01-30"),
  },
  {
    id: "4",
    name: "Martin Luther King Jr.",
    description: "Líder del movimiento de derechos civiles en Estados Unidos.",
    birthDate: new Date("1929-01-15"),
    deathDate: new Date("1968-04-04"),
  },
  {
    id: "5",
    name: "Leonardo da Vinci",
    description:
      "Polímata del Renacimiento, conocido por sus obras de arte y descubrimientos científicos.",
    birthDate: new Date("1452-04-15"),
    deathDate: new Date("1519-05-02"),
  },
  {
    id: "6",
    name: "Nelson Mandela",
    description: "Líder anti-apartheid y primer presidente negro de Sudáfrica.",
    birthDate: new Date("1918-07-18"),
    deathDate: new Date("2013-12-05"),
  },
  {
    id: "7",
    name: "Cleopatra",
    description: "Última reina de Egipto de la dinastía ptolemaica.",
    birthDate: new Date("0069-01-01"),
    deathDate: new Date("0030-08-12"),
  },
  {
    id: "8",
    name: "William Shakespeare",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a2/Shakespeare.jpg",
    description:
      "Dramaturgo y poeta inglés, considerado uno de los más grandes escritores de la lengua inglesa.",
    birthDate: new Date("1564-04-23"),
    deathDate: new Date("1616-04-23"),
  },
  {
    id: "9",
    name: "Frida Kahlo",
    description:
      "Pintora mexicana conocida por sus retratos y obras inspiradas en la naturaleza y los artefactos de México.",
    birthDate: new Date("1907-07-06"),
    deathDate: new Date("1954-07-13"),
  },
  {
    id: "10",
    name: "Winston Churchill",

    description:
      "Primer ministro del Reino Unido durante la Segunda Guerra Mundial.",
    birthDate: new Date("1874-11-30"),
    deathDate: new Date("1965-01-24"),
  },
];

export const getAllCharacters = async (): Promise<
  ResponseBody<ResponsePaginatedData<Character>> | undefined
> => {
  const response = await new Promise<
    ResponseBody<ResponsePaginatedData<Character>>
  >((res) => {
    setTimeout(() => {
      res({
        message: "OK",
        status: 200,
        response: {
          page: 1,
          pageSize: PAGE_NUMBER,
          totalPage: 2,
          data: FAKEDATA,
        },
      });
    }, 1500);
  });
  if (response.status === 200) {
    return response;
  }
  throw new Error();
};
