import { tokens } from "../theme";

export const mockDataTeam = [
  {
    id: 1,
    name: "Praveen KS",
    email: "praveen@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    access: "admin",
  },
  {
    id: 2,
    name: "Pavithra",
    email: "pavithra@gmail.com",
    age: 32,
    phone: "(421)314-2288",
    access: "manager",
  },
  {
    id: 3,
    name: "Jayasarangan",
    email: "jai@gmail.com",
    age: 25,
    phone: "(422)982-6739",
    access: "Student",
  },
  {
    id: 4,
    name: "Santhosh",
    email: "stark@gmail.com",
    age: 22,
    phone: "(921)425-6742",
    access: "admin",
  },
  {
    id: 5,
    name: "Naveen",
    email: "naveen@gmail.com",
    age: 21,
    phone: "(921)445-1189",
    access: "Student",
  },
 
];

export const mockDataContacts = [
  {
    id: 1,
    name: "Praveen",
    email: "praveen@gmail.com",
    age: 35,
    phone: "965121-5454",
    address: "912 Street, Sarvanampatti, 641605",
    city: "Coimbatore",
    zipCode: "631621",
    registrarId: 123512,
  }
];

export const mockDataInvoices = [
  {
    id: 1,
    name: "Kavin",
    email: "kavin@gmail.com",
    cost: "4LPA",
    phone: "9360790855",
    date: "03/12/2022",
  },
  {
    id: 2,
    name: "Barath",
    email: "ragav@gmail.com",
    cost: "5LPA",
    phone: "984382086",
    date: "06/15/2021",
  },
  {
    id: 3,
    name: "Suresh",
    email: "Suresh@gmail.com",
    cost: "6LPA",
    phone: "7373245162",
    date: "05/02/2022",
  },
  {
    id: 4,
    name: "Naveen",
    email: "Navstark@gmail.com",
    cost: "6LPA",
    phone: "9214256742",
    date: "03/21/2022",
  },
  {
    id: 5,
    name: "Praveenraj",
    email: "vpr@gmail.com",
    cost: "5LPA",
    phone: "8214451189",
    date: "01/12/2021",
  }
];

export const mockTransactions = [
  {
    txId: "Praveenraj",
    user: "vpr@gmail.com",
    date: "2021-09-01",
    cost: "5LPA",
  },
  {
    txId: "Naveen",
    user: "Navstark@gmail.com",
    date: "2022-04-01",
    cost: "6LPA",
  },
  {
    txId: "Suresh",
    user: "Suresh@gmail.com",
    date: "2021-09-01",
    cost: "6LPA",
  },
  {
    txId: "Barath",
    user: "ragav@gmail.com",
    date: "2022-11-05",
    cost: "5LPA",
  },
  {
    txId: "Kavin",
    user: "kavin@gmail.com",
    date: "2022-11-02",
    cost: "4LPA",
  },
];

export const mockBarData = [
  {
    country: "SP",
    "Female": 137,
    "FemaleColor": "hsl(229, 70%, 50%)",
    Male: 96,
    MaleColor: "hsl(296, 70%, 50%)",
  },
  {
    country: "IMS",
    "Female": 109,
    "FemaleColor": "hsl(72, 70%, 50%)",
    Male: 23,
    MaleColor: "hsl(96, 70%, 50%)",
  },
  {
    country: "SAP",
    "Female": 133,
    "FemaleColor": "hsl(257, 70%, 50%)",
    Male: 52,
    MaleColor: "hsl(326, 70%, 50%)",
  },
  {
    country: "DM",
    "Female": 66,
    "FemaleColor": "hsl(208, 70%, 50%)",
    Male: 111,
    MaleColor: "hsl(334, 70%, 50%)",
  }
];

export const mockPieData = [
  {
    id: "A.I>5LPA",
    label: "A.I>5LPA",
    value: 239,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "A.I>6LPA",
    label: "A.I>6LPA",
    value: 170,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "A.I>3.5LPA",
    label: "A.I>3.5LPA",
    value: 322,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "A.I>4LPA",
    label: "A.I>4LPA",
    value: 503,
    color: "hsl(229, 70%, 50%)",
  },
  {
    id: "A.I>3LPA",
    label: "A.I>3LPA",
    value: 584,
    color: "hsl(344, 70%, 50%)",
  },
];

export const mockLineData = [
  {
    id: "Got Placed",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "B-1",
        y: 101,
      },
      {
        x: "B-2",
        y: 75,
      },
      {
        x: "B-3",
        y: 36,
      },
      {
        x: "B-4",
        y: 216,
      },
      {
        x: "B-5",
        y: 35,
      },
      {
        x: "B-6",
        y: 236,
      },
      {
        x: "B-7",
        y: 88,
      },
      {
        x: "B-8",
        y: 232,
      },
      {
        x: "B-9",
        y: 281,
      },
      {
        x: "B-10",
        y: 1,
      },
      {
        x: "B-11",
        y: 35,
      },
      {
        x: "B-12",
        y: 14,
      },
    ],
  },
  {
    id: "Not Yet",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "B-1",
        y: 212,
      },
      {
        x: "B-2",
        y: 190,
      },
      {
        x: "B-3",
        y: 270,
      },
      {
        x: "B-4",
        y: 9,
      },
      {
        x: "B-5",
        y: 75,
      },
      {
        x: "B-6",
        y: 175,
      },
      {
        x: "B-7",
        y: 33,
      },
      {
        x: "B-8",
        y: 189,
      },
      {
        x: "B-9",
        y: 97,
      },
      {
        x: "B-10",
        y: 87,
      },
      {
        x: "B-11",
        y: 299,
      },
      {
        x: "B-12",
        y: 251,
      },
    ],
  },
  {
    id: "Passed Out",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "B-1",
        y: 191,
      },
      {
        x: "B-2",
        y: 136,
      },
      {
        x: "B-3",
        y: 91,
      },
      {
        x: "B-4",
        y: 190,
      },
      {
        x: "B-5",
        y: 211,
      },
      {
        x: "B-6",
        y: 152,
      },
      {
        x: "B-7",
        y: 189,
      },
      {
        x: "B-8",
        y: 152,
      },
      {
        x: "B-9",
        y: 8,
      },
      {
        x: "B-10",
        y: 197,
      },
      {
        x: "B-11",
        y: 107,
      },
      {
        x: "B-12",
        y: 170,
      },
    ],
  },
];

export const mockGeographyData = [
  {
    id: "AFG",
    value: 520600,
  },
  {
    id: "AGO",
    value: 949905,
  },
  {
    id: "ALB",
    value: 329910,
  },
  {
    id: "ARE",
    value: 675484,
  },
  {
    id: "ARG",
    value: 432239,
  },
  {
    id: "ARM",
    value: 288305,
  },
  {
    id: "ATA",
    value: 415648,
  },
  {
    id: "ATF",
    value: 665159,
  },
  {
    id: "AUT",
    value: 798526,
  },
  {
    id: "AZE",
    value: 481678,
  },
  {
    id: "BDI",
    value: 496457,
  },
  {
    id: "BEL",
    value: 252276,
  },
  {
    id: "BEN",
    value: 440315,
  },
  {
    id: "BFA",
    value: 343752,
  },
  {
    id: "BGD",
    value: 920203,
  },
  {
    id: "BGR",
    value: 261196,
  },
  {
    id: "BHS",
    value: 421551,
  },
  {
    id: "BIH",
    value: 974745,
  },
  {
    id: "BLR",
    value: 349288,
  },
  {
    id: "BLZ",
    value: 305983,
  },
  {
    id: "BOL",
    value: 430840,
  },
  {
    id: "BRN",
    value: 345666,
  },
  {
    id: "BTN",
    value: 649678,
  },
  {
    id: "BWA",
    value: 319392,
  },
  {
    id: "CAF",
    value: 722549,
  },
  {
    id: "CAN",
    value: 332843,
  },
  {
    id: "CHE",
    value: 122159,
  },
  {
    id: "CHL",
    value: 811736,
  },
  {
    id: "CHN",
    value: 593604,
  },
  {
    id: "CIV",
    value: 143219,
  },
  {
    id: "CMR",
    value: 630627,
  },
  {
    id: "COG",
    value: 498556,
  },
  {
    id: "COL",
    value: 660527,
  },
  {
    id: "CRI",
    value: 60262,
  },
  {
    id: "CUB",
    value: 177870,
  },
  {
    id: "-99",
    value: 463208,
  },
  {
    id: "CYP",
    value: 945909,
  },
  {
    id: "CZE",
    value: 500109,
  },
  {
    id: "DEU",
    value: 63345,
  },
  {
    id: "DJI",
    value: 634523,
  },
  {
    id: "DNK",
    value: 731068,
  },
  {
    id: "DOM",
    value: 262538,
  },
  {
    id: "DZA",
    value: 760695,
  },
  {
    id: "ECU",
    value: 301263,
  },
  {
    id: "EGY",
    value: 148475,
  },
  {
    id: "ERI",
    value: 939504,
  },
  {
    id: "ESP",
    value: 706050,
  },
  {
    id: "EST",
    value: 977015,
  },
  {
    id: "ETH",
    value: 461734,
  },
  {
    id: "FIN",
    value: 22800,
  },
  {
    id: "FJI",
    value: 18985,
  },
  {
    id: "FLK",
    value: 64986,
  },
  {
    id: "FRA",
    value: 447457,
  },
  {
    id: "GAB",
    value: 669675,
  },
  {
    id: "GBR",
    value: 757120,
  },
  {
    id: "GEO",
    value: 158702,
  },
  {
    id: "GHA",
    value: 893180,
  },
  {
    id: "GIN",
    value: 877288,
  },
  {
    id: "GMB",
    value: 724530,
  },
  {
    id: "GNB",
    value: 387753,
  },
  {
    id: "GNQ",
    value: 706118,
  },
  {
    id: "GRC",
    value: 377796,
  },
  {
    id: "GTM",
    value: 66890,
  },
  {
    id: "GUY",
    value: 719300,
  },
  {
    id: "HND",
    value: 739590,
  },
  {
    id: "HRV",
    value: 929467,
  },
  {
    id: "HTI",
    value: 538961,
  },
  {
    id: "HUN",
    value: 146095,
  },
  {
    id: "IDN",
    value: 490681,
  },
  {
    id: "IND",
    value: 549818,
  },
  {
    id: "IRL",
    value: 630163,
  },
  {
    id: "IRN",
    value: 596921,
  },
  {
    id: "IRQ",
    value: 767023,
  },
  {
    id: "ISL",
    value: 478682,
  },
  {
    id: "ISR",
    value: 963688,
  },
  {
    id: "ITA",
    value: 393089,
  },
  {
    id: "JAM",
    value: 83173,
  },
  {
    id: "JOR",
    value: 52005,
  },
  {
    id: "JPN",
    value: 199174,
  },
  {
    id: "KAZ",
    value: 181424,
  },
  {
    id: "KEN",
    value: 60946,
  },
  {
    id: "KGZ",
    value: 432478,
  },
  {
    id: "KHM",
    value: 254461,
  },
  {
    id: "OSA",
    value: 942447,
  },
  {
    id: "KWT",
    value: 414413,
  },
  {
    id: "LAO",
    value: 448339,
  },
  {
    id: "LBN",
    value: 620090,
  },
  {
    id: "LBR",
    value: 435950,
  },
  {
    id: "LBY",
    value: 75091,
  },
  {
    id: "LKA",
    value: 595124,
  },
  {
    id: "LSO",
    value: 483524,
  },
  {
    id: "LTU",
    value: 867357,
  },
  {
    id: "LUX",
    value: 689172,
  },
  {
    id: "LVA",
    value: 742980,
  },
  {
    id: "MAR",
    value: 236538,
  },
  {
    id: "MDA",
    value: 926836,
  },
  {
    id: "MDG",
    value: 840840,
  },
  {
    id: "MEX",
    value: 353910,
  },
  {
    id: "MKD",
    value: 505842,
  },
  {
    id: "MLI",
    value: 286082,
  },
  {
    id: "MMR",
    value: 915544,
  },
  {
    id: "MNE",
    value: 609500,
  },
  {
    id: "MNG",
    value: 410428,
  },
  {
    id: "MOZ",
    value: 32868,
  },
  {
    id: "MRT",
    value: 375671,
  },
  {
    id: "MWI",
    value: 591935,
  },
  {
    id: "MYS",
    value: 991644,
  },
  {
    id: "NAM",
    value: 701897,
  },
  {
    id: "NCL",
    value: 144098,
  },
  {
    id: "NER",
    value: 312944,
  },
  {
    id: "NGA",
    value: 862877,
  },
  {
    id: "NIC",
    value: 90831,
  },
  {
    id: "NLD",
    value: 281879,
  },
  {
    id: "NOR",
    value: 224537,
  },
  {
    id: "NPL",
    value: 322331,
  },
  {
    id: "NZL",
    value: 86615,
  },
  {
    id: "OMN",
    value: 707881,
  },
  {
    id: "PAK",
    value: 158577,
  },
  {
    id: "PAN",
    value: 738579,
  },
  {
    id: "PER",
    value: 248751,
  },
  {
    id: "PHL",
    value: 557292,
  },
  {
    id: "PNG",
    value: 516874,
  },
  {
    id: "POL",
    value: 682137,
  },
  {
    id: "PRI",
    value: 957399,
  },
  {
    id: "PRT",
    value: 846430,
  },
  {
    id: "PRY",
    value: 720555,
  },
  {
    id: "QAT",
    value: 478726,
  },
  {
    id: "ROU",
    value: 259318,
  },
  {
    id: "RUS",
    value: 268735,
  },
  {
    id: "RWA",
    value: 136781,
  },
  {
    id: "ESH",
    value: 151957,
  },
  {
    id: "SAU",
    value: 111821,
  },
  {
    id: "SDN",
    value: 927112,
  },
  {
    id: "SDS",
    value: 966473,
  },
  {
    id: "SEN",
    value: 158085,
  },
  {
    id: "SLB",
    value: 178389,
  },
  {
    id: "SLE",
    value: 528433,
  },
  {
    id: "SLV",
    value: 353467,
  },
  {
    id: "ABV",
    value: 251,
  },
  {
    id: "SOM",
    value: 445243,
  },
  {
    id: "SRB",
    value: 202402,
  },
  {
    id: "SUR",
    value: 972121,
  },
  {
    id: "SVK",
    value: 319923,
  },
  {
    id: "SVN",
    value: 728766,
  },
  {
    id: "SWZ",
    value: 379669,
  },
  {
    id: "SYR",
    value: 16221,
  },
  {
    id: "TCD",
    value: 101273,
  },
  {
    id: "TGO",
    value: 498411,
  },
  {
    id: "THA",
    value: 506906,
  },
  {
    id: "TJK",
    value: 613093,
  },
  {
    id: "TKM",
    value: 327016,
  },
  {
    id: "TLS",
    value: 607972,
  },
  {
    id: "TTO",
    value: 936365,
  },
  {
    id: "TUN",
    value: 898416,
  },
  {
    id: "TUR",
    value: 237783,
  },
  {
    id: "TWN",
    value: 878213,
  },
  {
    id: "TZA",
    value: 442174,
  },
  {
    id: "UGA",
    value: 720710,
  },
  {
    id: "UKR",
    value: 74172,
  },
  {
    id: "URY",
    value: 753177,
  },
  {
    id: "USA",
    value: 658725,
  },
  {
    id: "UZB",
    value: 550313,
  },
  {
    id: "VEN",
    value: 707492,
  },
  {
    id: "VNM",
    value: 538907,
  },
  {
    id: "VUT",
    value: 650646,
  },
  {
    id: "PSE",
    value: 476078,
  },
  {
    id: "YEM",
    value: 957751,
  },
  {
    id: "ZAF",
    value: 836949,
  },
  {
    id: "ZMB",
    value: 714503,
  },
  {
    id: "ZWE",
    value: 405217,
  },
  {
    id: "KOR",
    value: 171135,
  },
];
