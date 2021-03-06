// Create an array  and object data structure with some data of fifth grade students convert it to a JSON String 


const studentData = [
    {
        nam         : 'Korim Molla',
        roll        : 01,
        bn          : 90,
        en          : 90,
        math        : 85,
        sci         : 85,
        socity      : 87,
        rel         : 90,
    },

    {
        nam         : 'Sheikh Ataur',
        roll        : 02,
        bn          : 88,
        en          : 85,
        math        : 80,
        sci         : 85,
        socity      : 87,
        rel         : 89,
    },

    {
        nam         : 'Sheikh Mohammad',
        roll        : 03,
        bn          : 85,
        en          : 87,
        math        : 80,
        sci         : 80,
        socity      : 87,
        rel         : 85,
    },

    {
        nam         : 'SM Abdullah',
        roll        : 04,
        bn          : 83,
        en          : 85,
        math        : 80,
        sci         : 80,
        socity      : 85,
        rel         : 84,
    },

    {
        nam         : 'Shawon Sheikh',
        roll        : 05,
        bn          : 81,
        en          : 84,
        math        : 80,
        sci         : 80,
        socity      : 80,
        rel         : 80,
    },

    {
        nam         : 'Abdul Rajjak',
        roll        : 06,
        bn          : 80,
        en          : 81,
        math        : 80,
        sci         : 75,
        socity      : 80,
        rel         : 80,
    },

    {
        nam         : 'Chayon Biswas',
        roll        : 07,
        bn          : 80,
        en          : 80,
        math        : 80,
        sci         : 75,
        socity      : 75,
        rel         : 80,
    },

    {
        nam         : 'Abdul Rajjak',
        roll        : 08,
        bn          : 80,
        en          : 80,
        math        : 75,
        sci         : 75,
        socity      : 77,
        rel         : 80,
    },

    {
        nam         : 'Abir Mostofa',
        roll        : 09,
        bn          : 75,
        en          : 80,
        math        : 75,
        sci         : 75,
        socity      : 77,
        rel         : 80,
    },

    {
        nam         : 'Mominur Islam',
        roll        : 10,
        bn          : 75,
        en          : 75,
        math        : 75,
        sci         : 75,
        socity      : 77,
        rel         : 80,
    },
];


let data = JSON.stringify(studentData);

console.log(data);




// Arrange a data sheet for a family phone book and publish it and convert it to a JSON String


const family = [
    {
        id          : 01,
        nam         : 'Jubayer Molla',
        relation    : 'Mother / Father / Daughter / Son',
        location    : 'Shodor, Narail',
        phn         : '01758975685',
    },

    {
        id          : 02,
        nam         : 'Hasan Anamul',
        relation    : 'Mother / Father / Son',
        location    : 'Mirzap, Narail',
        phn         : '01678547588',
    },

    {
        id          : 03,
        nam         : 'MD. Nasim',
        relation    : 'Half-sister / Half-brother',
        location    : 'Kalia, Narail',
        phn         : '01587415458',
    },

    {
        id          : 04,
        nam         : 'MD. Eman',
        relation    : '3/4-sister / 3/4-brother',
        location    : 'Kalia, Narail',
        phn         : '01888458754',
    },

    {
        id          : 05,
        nam         : 'Rasel Hasan',
        relation    : 'Grandmother / Grandfather / Granddaughter / Grandson',
        location    : 'Kalia, Narail',
        phn         : '01845861257',
    },

    {
        id          : 06,
        nam         : 'Shoriyot Molla',
        relation    : 'Sister / Brother',
        location    : 'Kalia, Narail',
        phn         : '01754584522',
    },

    {
        id          : 07,
        nam         : 'Golam Mostofa',
        relation    : 'Aunt / Uncle / Niece / Nephew',
        location    : 'Kalia, Narail',
        phn         : '01888545842',
    },

    {
        id          : 08,
        nam         : 'Sahariar Khondokar',
        relation    : 'Cousin',
        location    : 'Kalia, Narail',
        phn         : '01845487554',
    },

    {
        id          : 09,
        nam         : 'Mannu Sheikh',
        relation    : 'Great-grandmother / Great-grandfather / Great-granddaughter',
        location    : 'Kalia, Narail',
        phn         : '01845487777',
    },

    {
        id          : 10,
        nam         : 'SM Abdullah',
        relation    : 'Grandaunt / Granduncle / Grandniece / Grandnephew',
        location    : 'Kalia, Narail',
        phn         : '01854567785',
    },
];


let phnData = JSON.stringify(family);

console.log(phnData);



// Create a MERN stack, Laravel, Django, GoLan, WordPress, java deves  students data structure  and convert it to a json string 

const devs = [
    {
        nam     : 'Korim Molla',
        age     : 50,
        skills  : 'MERN stack Developer',
        income  : 4000,
    },

    {
        nam     : 'Sheikh Mohammad',
        age     : 35,
        skills  : 'Laravel Developer',
        income  : 3500,
    },

    {
        nam     : 'Shahin Sheikh',
        age     : 25,
        skills  : 'Django Developer',
        income  : 2500,
    },

    {
        nam     : 'Anowar Hossain',
        age     : 29,
        skills  : 'Golan Developer',
        income  : 2900,
    },

    {
        nam     : 'SM Abdullah',
        age     : 37,
        skills  : 'WordPress Developer',
        income  : 1000,
    },

    {
        nam     : 'Choyon Biswas',
        age     : 25,
        skills  : 'Java Developer',
        income  : 2500,
    },

    {
        nam     : 'Rohan Mostofa',
        age     : 22,
        skills  : 'MERN stack Developer',
        income  : 3000,
    },

    {
        nam     : 'Shawon Molla',
        age     : 24,
        skills  : 'MERN stack Developer',
        income  : 3500,
    },

    {
        nam     : 'Molla Faisal',
        age     : 20,
        skills  : 'Laravel Developer',
        income  : 2500,
    },

    {
        nam     : 'Abir Mostofa',
        age     : 20,
        skills  : 'Django Developer',
        income  : 3100,
    },

    {
        nam     : 'Hasan Anamul',
        age     : 22,
        skills  : 'Golan Developer',
        income  : 2700,
    },

    {
        nam     : 'Shohanur Rahman',
        age     : 21,
        skills  : 'WordPress Developer',
        income  : 700,
    },

    {
        nam     : 'Tibro Hasan',
        age     : 25,
        skills  : 'Java Developer',
        income  : 2300,
    }
];


console.log(JSON.stringify(devs));



// make a array of those JSON String and convert it to a JSON and after that find all data by json to a object 

let dataStr1 = '[{"nam":"Korim Molla","roll":1,"bn":90,"en":90,"math":85,"sci":85,"socity":87,"rel":90},{"nam":"Sheikh Ataur","roll":2,"bn":88,"en":85,"math":80,"sci":85,"socity":87,"rel":89},{"nam":"Sheikh Mohammad","roll":3,"bn":85,"en":87,"math":80,"sci":80,"socity":87,"rel":85},{"nam":"SM Abdullah","roll":4,"bn":83,"en":85,"math":80,"sci":80,"socity":85,"rel":84},{"nam":"Shawon Sheikh","roll":5,"bn":81,"en":84,"math":80,"sci":80,"socity":80,"rel":80},{"nam":"Abdul Rajjak","roll":6,"bn":80,"en":81,"math":80,"sci":75,"socity":80,"rel":80},{"nam":"Chayon Biswas","roll":7,"bn":80,"en":80,"math":80,"sci":75,"socity":75,"rel":80},{"nam":"Abdul Rajjak","roll":8,"bn":80,"en":80,"math":75,"sci":75,"socity":77,"rel":80},{"nam":"Abir Mostofa","roll":9,"bn":75,"en":80,"math":75,"sci":75,"socity":77,"rel":80},{"nam":"Mominur Islam","roll":10,"bn":75,"en":75,"math":75,"sci":75,"socity":77,"rel":80}]';

let dataStr2 = '[{"id":1,"nam":"Jubayer Molla","relation":"Mother / Father / Daughter / Son","location":"Shodor, Narail","phn":"01758975685"},{"id":2,"nam":"Hasan Anamul","relation":"Mother / Father / Son","location":"Mirzap, Narail","phn":"01678547588"},{"id":3,"nam":"MD. Nasim","relation":"Half-sister / Half-brother","location":"Kalia, Narail","phn":"01587415458"},{"id":4,"nam":"MD. Eman","relation":"3/4-sister / 3/4-brother","location":"Kalia, Narail","phn":"01888458754"},{"id":5,"nam":"Rasel Hasan","relation":"Grandmother / Grandfather / Granddaughter / Grandson","location":"Kalia, Narail","phn":"01845861257"},{"id":6,"nam":"Shoriyot Molla","relation":"Sister / Brother","location":"Kalia, Narail","phn":"01754584522"},{"id":7,"nam":"Golam Mostofa","relation":"Aunt / Uncle / Niece / Nephew","location":"Kalia, Narail","phn":"01888545842"},{"id":8,"nam":"Sahariar Khondokar","relation":"Cousin","location":"Kalia, Narail","phn":"01845487554"},{"id":9,"nam":"Mannu Sheikh","relation":"Great-grandmother / Great-grandfather / Great-granddaughter","location":"Kalia, Narail","phn":"01845487777"},{"id":10,"nam":"SM Abdullah","relation":"Grandaunt / Granduncle / Grandniece / Grandnephew","location":"Kalia, Narail","phn":"01854567785"}]';

let dataStr3 = '[{"nam":"Korim Molla","age":50,"skills":"MERN stack Developer","income":4000},{"nam":"Sheikh Mohammad","age":35,"skills":"Laravel Developer","income":3500},{"nam":"Shahin Sheikh","age":25,"skills":"Django Developer","income":2500},{"nam":"Anowar Hossain","age":29,"skills":"Golan Developer","income":2900},{"nam":"SM Abdullah","age":37,"skills":"WordPress Developer","income":1000},{"nam":"Choyon Biswas","age":25,"skills":"Java Developer","income":2500},{"nam":"Rohan Mostofa","age":22,"skills":"MERN stack Developer","income":3000},{"nam":"Shawon Molla","age":24,"skills":"MERN stack Developer","income":3500},{"nam":"Molla Faisal","age":20,"skills":"Laravel Developer","income":2500},{"nam":"Abir Mostofa","age":20,"skills":"Django Developer","income":3100},{"nam":"Hasan Anamul","age":22,"skills":"Golan Developer","income":2700},{"nam":"Shohanur Rahman","age":21,"skills":"WordPress Developer","income":700},{"nam":"Tibro Hasan","age":25,"skills":"Java Developer","income":2300}]';

const totalData = [dataStr1, dataStr2, dataStr3]

console.log(JSON.stringify(totalData));

console.log(totalData);





