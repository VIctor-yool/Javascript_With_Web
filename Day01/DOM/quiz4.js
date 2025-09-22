const data = [
  {
    company: "Shufflester",
    hexColor: "#689312",
    paragraphs: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    university: "Adigrat University",
  },
  {
    company: "Shuffletag",
    hexColor: "#18c94b",
    paragraphs:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    university: "Pennsylvania State University - Berks-Lehigh Valley College",
  },
  {
    company: "Yakidoo",
    hexColor: "#02770b",
    paragraphs:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    university: "Universidad Politécnica de Cartagena",
  },
  {
    company: "Wikizz",
    hexColor: "#7fa901",
    paragraphs:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    university: "Dicle (Tirgris) University",
  },
  {
    company: "Kwilith",
    hexColor: "#1c2d1e",
    paragraphs:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    university: "Dr. Hari Singh Gour University, formerly University of Sagar",
  },
  {
    company: "Podcat",
    hexColor: "#deca23",
    paragraphs:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    university: "Inner Mongolia Polytechnic University",
  },
  {
    company: "Livetube",
    hexColor: "#e09406",
    paragraphs:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    university: "Wisconsin Lutheran College",
  },
  {
    company: "Aibox",
    hexColor: "#1cb09e",
    paragraphs:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    university: "West Virginia Wesleyan College",
  },
  {
    company: "Flipbug",
    hexColor: "#336d42",
    paragraphs:
      "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    university: "Jagannath University",
  },
  {
    company: "Yombu",
    hexColor: "#df2b2e",
    paragraphs:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    university: "Katholieke Universiteit Leuven, Campus Kortrijk",
  },
  {
    company: "Pixope",
    hexColor: "#4afc78",
    paragraphs:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    university: "Perlis Islamic Higher Learning Institute",
  },
  {
    company: "Skimia",
    hexColor: "#838b3b",
    paragraphs:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    university: "Fachhochschule Münster",
  },
  {
    company: "Ooba",
    hexColor: "#8829eb",
    paragraphs:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    university: "University of Zürich",
  },
  {
    company: "Yamia",
    hexColor: "#241099",
    paragraphs:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    university: "Bethel College Mishawaka",
  },
  {
    company: "Zoonoodle",
    hexColor: "#3ba543",
    paragraphs:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    university: "Canadian College of Business & Computers",
  },
  {
    company: "Plambee",
    hexColor: "#764425",
    paragraphs:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    university: "Juniata College",
  },
  {
    company: "Meedoo",
    hexColor: "#ed2298",
    paragraphs:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    university: "Franklin Pierce Law Center",
  },
  {
    company: "Eimbee",
    hexColor: "#c8f8d7",
    paragraphs:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    university: "Americanos College",
  },
  {
    company: "Youfeed",
    hexColor: "#4e7fe0",
    paragraphs:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    university: "California Western School of Law",
  },
  {
    company: "Trilith",
    hexColor: "#baa4e6",
    paragraphs:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    university: "University of Fiji",
  },
  {
    company: "Fliptune",
    hexColor: "#e0cec2",
    paragraphs:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    university: "Fachhochschule Worms",
  },
  {
    company: "Youbridge",
    hexColor: "#177f04",
    paragraphs:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    university: "Fachhochschulstudiengänge Hagenberg",
  },
  {
    company: "Yakitri",
    hexColor: "#93108e",
    paragraphs:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    university: "St. Louis College of Pharmacy",
  },
  {
    company: "Youbridge",
    hexColor: "#2fb922",
    paragraphs:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    university: "Judson College Elgin",
  },
  {
    company: "Devbug",
    hexColor: "#d05143",
    paragraphs:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    university: "Birmingham-Southern College",
  },
  {
    company: "Zoomdog",
    hexColor: "#80e4fd",
    paragraphs:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    university: "Fachhochschulstudiengänge der Wiener Wirtschaft",
  },
  {
    company: "Demimbu",
    hexColor: "#4b6c16",
    paragraphs:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    university: "Najran University",
  },
  {
    company: "Dynava",
    hexColor: "#9154d4",
    paragraphs:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    university: "Universitas Negeri Malang",
  },
  {
    company: "Buzzster",
    hexColor: "#8b6d77",
    paragraphs:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    university: "Ecole Supérieure des Sciences Commerciales d'Angers",
  },
  {
    company: "Plambee",
    hexColor: "#7f9edd",
    paragraphs:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    university: "Illinois School of Professional Psychology - Chicago Campus",
  },
  {
    company: "Skidoo",
    hexColor: "#200e11",
    paragraphs:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    university: "University of Colorado at Boulder",
  },
  {
    company: "Zooxo",
    hexColor: "#e897d0",
    paragraphs:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    university: "University of Bologna",
  },
  {
    company: "Yambee",
    hexColor: "#60bd87",
    paragraphs:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    university: "American University in Bulgaria",
  },
  {
    company: "Edgetag",
    hexColor: "#5c90bb",
    paragraphs:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    university: "Perm State Pharmaceutical Academy",
  },
  {
    company: "Centimia",
    hexColor: "#b08a43",
    paragraphs:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    university: "Universidad de León",
  },
  {
    company: "Miboo",
    hexColor: "#82f661",
    paragraphs:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    university: "Yildirim Beyazit University",
  },
  {
    company: "Fivespan",
    hexColor: "#35b4e4",
    paragraphs:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    university: "Spertus Institute of Jewish Studies",
  },
  {
    company: "Youfeed",
    hexColor: "#223b04",
    paragraphs:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    university: "Methodist College",
  },
  {
    company: "Feedfire",
    hexColor: "#ff283b",
    paragraphs:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    university: "International People's College",
  },
  {
    company: "Voonix",
    hexColor: "#4cdfef",
    paragraphs:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    university: "Fachhochschule Salzburg",
  },
  {
    company: "Fiveclub",
    hexColor: "#a19470",
    paragraphs:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    university: "Keiwa College",
  },
  {
    company: "Voonder",
    hexColor: "#aa5de9",
    paragraphs:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    university: "Göteborg University",
  },
  {
    company: "Wordtune",
    hexColor: "#beab99",
    paragraphs:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    university: "Concordia University, Irvine",
  },
  {
    company: "Kanoodle",
    hexColor: "#2826f9",
    paragraphs:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    university: "University of California, Merced",
  },
  {
    company: "Meemm",
    hexColor: "#9a73a8",
    paragraphs:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    university: "City University of New York, York College",
  },
  {
    company: "Photospace",
    hexColor: "#3dc9f4",
    paragraphs:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    university: "Universidade de Cruz Alta",
  },
  {
    company: "Quaxo",
    hexColor: "#2c3fd6",
    paragraphs:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    university: "University of Massachusetts at Dartmouth",
  },
  {
    company: "Eadel",
    hexColor: "#236c68",
    paragraphs:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    university:
      "Universidad Nacional del Noroeste de la Provincia de Buenos Aires",
  },
  {
    company: "Thoughtworks",
    hexColor: "#4f3d8c",
    paragraphs:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    university: "Institut Armand-Frappier, Université du Québec",
  },
  {
    company: "Livetube",
    hexColor: "#5fffb5",
    paragraphs:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    university: "Crawford University ",
  },
  {
    company: "Centidel",
    hexColor: "#48ecf8",
    paragraphs:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    university: "Danang College Of Technology",
  },
  {
    company: "Roodel",
    hexColor: "#735e5e",
    paragraphs:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    university: "School of Management Fribourg",
  },
  {
    company: "Oyondu",
    hexColor: "#96e063",
    paragraphs:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    university: "North Carolina Agricultural and Technical State University",
  },
  {
    company: "Dabfeed",
    hexColor: "#c66d20",
    paragraphs:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    university:
      "Ecole Nationale du Génie de l'Eau et de l'Environnement de Strasbourg",
  },
  {
    company: "Browsezoom",
    hexColor: "#e4814b",
    paragraphs:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    university: "Université de Cergy-Pontoise",
  },
  {
    company: "Trupe",
    hexColor: "#29a3ad",
    paragraphs:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    university: "Novosibirsk State Academy of Economics and Mangement",
  },
  {
    company: "Flashset",
    hexColor: "#f2f884",
    paragraphs:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    university: "Ho Chi Minh City Open University",
  },
  {
    company: "Avamba",
    hexColor: "#9d95bb",
    paragraphs:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    university: "Fachhochschule Augsburg",
  },
  {
    company: "Pixope",
    hexColor: "#82f516",
    paragraphs:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    university: "American Jewish University",
  },
  {
    company: "Gabvine",
    hexColor: "#9dce22",
    paragraphs:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    university: "Cleveland Chiropractic College, Kansas City",
  },
  {
    company: "Devpulse",
    hexColor: "#66e612",
    paragraphs:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    university: "Fort Lewis College",
  },
  {
    company: "Edgeify",
    hexColor: "#a29ae3",
    paragraphs: "Fusce consequat. Nulla nisl. Nunc nisl.",
    university: "Laurentian University of Sudbury",
  },
  {
    company: "Meedoo",
    hexColor: "#06bd40",
    paragraphs:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    university: "Jarvis Christian College",
  },
  {
    company: "Skivee",
    hexColor: "#86122a",
    paragraphs:
      "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    university: "Dániel Berzsenyi Teacher Training College",
  },
  {
    company: "Trupe",
    hexColor: "#a7f93a",
    paragraphs:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    university: "Universitas Hasanuddin",
  },
  {
    company: "Quinu",
    hexColor: "#158a19",
    paragraphs:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    university: "Universidad de la República",
  },
  {
    company: "Pixonyx",
    hexColor: "#10cbe2",
    paragraphs:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    university: "University of North Carolina at Asheville",
  },
  {
    company: "Feedfire",
    hexColor: "#a0df49",
    paragraphs:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    university: "International Culture University ",
  },
  {
    company: "Devify",
    hexColor: "#c6f420",
    paragraphs:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    university: "Institute of Teachers Education, Ipoh",
  },
  {
    company: "Gabtype",
    hexColor: "#9715d8",
    paragraphs:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    university: "Technical University of Cracow",
  },
  {
    company: "Yoveo",
    hexColor: "#f202af",
    paragraphs:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    university: "Research College of Nursing - Rockhurst University",
  },
  {
    company: "Skimia",
    hexColor: "#08f797",
    paragraphs:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    university: "Nagoya Gakuin University",
  },
  {
    company: "Geba",
    hexColor: "#f28a8f",
    paragraphs:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    university: "University of Bath",
  },
  {
    company: "Mynte",
    hexColor: "#2f3c90",
    paragraphs:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    university: "Pennsylvania State University at Erie - Behrend College",
  },
  {
    company: "Meedoo",
    hexColor: "#842749",
    paragraphs:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    university: "Universidad de Córdoba",
  },
  {
    company: "Avaveo",
    hexColor: "#383287",
    paragraphs:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    university: "Shiraz University of Technology",
  },
  {
    company: "Brightdog",
    hexColor: "#387ccf",
    paragraphs:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    university: "Mokpo National Maritime University",
  },
  {
    company: "Yozio",
    hexColor: "#19e820",
    paragraphs: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    university: "University of Massachusetts at Dartmouth",
  },
  {
    company: "Blogtags",
    hexColor: "#0c4ea1",
    paragraphs:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    university: "West Bengal University of Animal and Fishery Sciences",
  },
  {
    company: "Cogibox",
    hexColor: "#a93572",
    paragraphs:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    university: "Universidade Católica de Brasília",
  },
  {
    company: "Pixoboo",
    hexColor: "#b6b141",
    paragraphs:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    university: "Universidad Interamericana de Puerto Rico, San Germán",
  },
  {
    company: "Bubblebox",
    hexColor: "#b46b40",
    paragraphs:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    university: "Metropolitan State University",
  },
  {
    company: "Flipstorm",
    hexColor: "#29dff5",
    paragraphs:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    university: "University of Oregon",
  },
  {
    company: "Feedspan",
    hexColor: "#52931b",
    paragraphs:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    university: "Islamic Azad University, Gorgan",
  },
  {
    company: "Trudeo",
    hexColor: "#014384",
    paragraphs:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    university: "Krishna University",
  },
  {
    company: "Zoozzy",
    hexColor: "#e58526",
    paragraphs:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    university: "Tver State Medical Academy",
  },
  {
    company: "Jabberbean",
    hexColor: "#a80e9c",
    paragraphs:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    university: "University of Benin",
  },
  {
    company: "Photobean",
    hexColor: "#c69350",
    paragraphs:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    university: "University Medical School of Debrecen",
  },
  {
    company: "Gabtune",
    hexColor: "#f0a023",
    paragraphs:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    university: "Université de Sidi-Bel-Abbès (Djillali Liabès)",
  },
  {
    company: "Quatz",
    hexColor: "#f6bc07",
    paragraphs:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    university: "Universidade de Franca",
  },
  {
    company: "Skyndu",
    hexColor: "#e299ad",
    paragraphs:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    university: "Universidad de La Laguna",
  },
  {
    company: "Quamba",
    hexColor: "#21b329",
    paragraphs:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    university: "Kochi University of Technology",
  },
  {
    company: "Layo",
    hexColor: "#bb199b",
    paragraphs:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    university: "Marian College of Fond Du Lac",
  },
  {
    company: "Zoombox",
    hexColor: "#d614b6",
    paragraphs:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    university: "Brewton-Parker College",
  },
  {
    company: "Blogtag",
    hexColor: "#3c626a",
    paragraphs:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    university: "Sichuan Fine Art Institute",
  },
  {
    company: "Digitube",
    hexColor: "#10c664",
    paragraphs:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    university: "Millersville University of Pennsylvania",
  },
  {
    company: "Lazz",
    hexColor: "#583b5c",
    paragraphs:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    university: "Pukyong National University",
  },
  {
    company: "Skynoodle",
    hexColor: "#1dcc47",
    paragraphs:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    university: "Kanto Gakuin University",
  },
  {
    company: "Yozio",
    hexColor: "#d07cb0",
    paragraphs:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    university: "Mogilev State University A.A. Kuleshov",
  },
  {
    company: "Viva",
    hexColor: "#3ad765",
    paragraphs:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    university: "Florida Southern College",
  },
  {
    company: "Kayveo",
    hexColor: "#4aa346",
    paragraphs:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    university: "Uganda Christian University",
  },
  {
    company: "Flipopia",
    hexColor: "#d70afc",
    paragraphs:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    university: "Indira Gandhi Agricultural University",
  },
  {
    company: "Meemm",
    hexColor: "#23f4e2",
    paragraphs:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    university: "University of Central Oklahoma",
  },
  {
    company: "Browsebug",
    hexColor: "#ecc1e4",
    paragraphs:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    university: "Fachhochschulstudiengänge Hagenberg",
  },
  {
    company: "Eamia",
    hexColor: "#fe3972",
    paragraphs:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    university: "Bushehr University of Medical Sciences",
  },
  {
    company: "Fadeo",
    hexColor: "#1f6989",
    paragraphs:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    university: "Universidad de la Tercera Edad",
  },
  {
    company: "Tagfeed",
    hexColor: "#e403df",
    paragraphs:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    university: "Malaspina University College",
  },
  {
    company: "Omba",
    hexColor: "#2933ee",
    paragraphs:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    university: "Universidade da Madeira",
  },
  {
    company: "Quimba",
    hexColor: "#d673c9",
    paragraphs:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    university: "Daito Bunka University",
  },
  {
    company: "Ntag",
    hexColor: "#b551a2",
    paragraphs:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    university: "Beijing International Studies University",
  },
  {
    company: "Chatterbridge",
    hexColor: "#b6556b",
    paragraphs:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    university: "DeSales University",
  },
  {
    company: "Rhynoodle",
    hexColor: "#c9985e",
    paragraphs:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    university: "Northwest Christian College",
  },
  {
    company: "Fanoodle",
    hexColor: "#2ba74a",
    paragraphs:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    university: "University of Toronto",
  },
  {
    company: "Riffwire",
    hexColor: "#32786f",
    paragraphs:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    university: "Damghan University of Basic Sciences",
  },
  {
    company: "Twiyo",
    hexColor: "#89fae6",
    paragraphs:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    university: "Pontificia Università della Santa Croce",
  },
  {
    company: "Twitternation",
    hexColor: "#0c552d",
    paragraphs:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    university: "Technological Education Institute of Larissa",
  },
  {
    company: "Tekfly",
    hexColor: "#df9588",
    paragraphs:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    university: "Armstrong Atlantic State University",
  },
  {
    company: "Zava",
    hexColor: "#ce7653",
    paragraphs:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    university: "Southern Taiwan University of Technology",
  },
  {
    company: "Twimm",
    hexColor: "#3b55d9",
    paragraphs:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    university: "National Yunlin University of Science and Technology",
  },
  {
    company: "Yamia",
    hexColor: "#9c9a33",
    paragraphs:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    university: "Southern Vermont College",
  },
  {
    company: "Tagfeed",
    hexColor: "#5458b9",
    paragraphs:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    university: "Gandhara Institute of Medical Sciences",
  },
  {
    company: "Skynoodle",
    hexColor: "#2a9db0",
    paragraphs:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    university: "University of Texas at San Antonio",
  },
  {
    company: "Quimba",
    hexColor: "#f06cc0",
    paragraphs:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
    university: "Université d'Oran Es-Senia",
  },
  {
    company: "Twinte",
    hexColor: "#94bfe2",
    paragraphs:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    university: "Ueno Gakuen College",
  },
  {
    company: "Edgepulse",
    hexColor: "#775877",
    paragraphs:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    university: "Hohai University Changzhou",
  },
  {
    company: "Yakijo",
    hexColor: "#624e02",
    paragraphs:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    university: "University of St. Francis",
  },
  {
    company: "Edgeify",
    hexColor: "#d72235",
    paragraphs:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    university: "Shinawatra University",
  },
  {
    company: "Browsedrive",
    hexColor: "#b2c9bf",
    paragraphs:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    university: "Fundacion Escuela Colombiana de Rehabiliación",
  },
  {
    company: "Zoomzone",
    hexColor: "#e110de",
    paragraphs:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    university: "Humboldt Universität Berlin",
  },
  {
    company: "Jayo",
    hexColor: "#d98801",
    paragraphs:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    university: "Bishkek Humanities University",
  },
  {
    company: "Tagchat",
    hexColor: "#69e7ad",
    paragraphs:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    university:
      "Ecole Nationale Supérieur des Ingénieur des Etudes et Techniques d'Armement",
  },
  {
    company: "Oyoyo",
    hexColor: "#a19bd3",
    paragraphs:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    university: "University of Sannio",
  },
  {
    company: "Dabfeed",
    hexColor: "#64309a",
    paragraphs:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    university: "St. Paul University",
  },
  {
    company: "Topiczoom",
    hexColor: "#8c0187",
    paragraphs:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    university: "Glion Institute of Higher Education",
  },
  {
    company: "Fivespan",
    hexColor: "#5ac351",
    paragraphs:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    university: "Universidad Autónoma del Estado de Hidalgo",
  },
  {
    company: "Innojam",
    hexColor: "#45359c",
    paragraphs:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    university: "Mizan Tepi University",
  },
  {
    company: "Rhybox",
    hexColor: "#624dd7",
    paragraphs:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    university: "Illinois School of Professional Psychology - Meadows Campus",
  },
  {
    company: "Kwinu",
    hexColor: "#fd4f23",
    paragraphs:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    university: "University of Pula",
  },
  {
    company: "Flipopia",
    hexColor: "#232f1b",
    paragraphs:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    university: "Tashkent State Technical University",
  },
  {
    company: "Vitz",
    hexColor: "#751e5d",
    paragraphs:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    university: "Ranchi University",
  },
  {
    company: "Dynazzy",
    hexColor: "#e3dbc8",
    paragraphs:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    university: "Lagos State Polytechnic",
  },
  {
    company: "Fatz",
    hexColor: "#c92642",
    paragraphs:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    university: "Zaman University",
  },
  {
    company: "Twiyo",
    hexColor: "#faa785",
    paragraphs:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    university: "Universidade Santa Úrsula",
  },
  {
    company: "Shufflebeat",
    hexColor: "#f30df1",
    paragraphs:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    university: "College of St. Benedict and St. John's University",
  },
  {
    company: "Gabvine",
    hexColor: "#3378ed",
    paragraphs:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    university: "South Gujarat University",
  },
  {
    company: "Cogilith",
    hexColor: "#0e61bc",
    paragraphs:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    university: "Khulna University",
  },
  {
    company: "Lazz",
    hexColor: "#4b64e0",
    paragraphs:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    university: "Shanghai Normal University",
  },
  {
    company: "Dabfeed",
    hexColor: "#56de0e",
    paragraphs:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    university: "Yasuda Women's University",
  },
  {
    company: "Blogspan",
    hexColor: "#24425b",
    paragraphs:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    university: "Northeast University at Qinhuangdao Campus",
  },
  {
    company: "Mycat",
    hexColor: "#665733",
    paragraphs:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    university: "Wuhan University of Technology",
  },
  {
    company: "Leenti",
    hexColor: "#a1e118",
    paragraphs:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    university: "Aga Khan University",
  },
  {
    company: "Pixoboo",
    hexColor: "#cb0211",
    paragraphs:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    university: "University of Catania",
  },
  {
    company: "Thoughtbridge",
    hexColor: "#d23369",
    paragraphs:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    university: "Indian Institute of Technology, Kanpur",
  },
  {
    company: "Tagtune",
    hexColor: "#615a29",
    paragraphs:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    university: "Xiamen University",
  },
  {
    company: "Camimbo",
    hexColor: "#45073e",
    paragraphs:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    university: "Szent István University",
  },
  {
    company: "Chatterpoint",
    hexColor: "#f21b94",
    paragraphs:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    university: "Université de Rouen - Haute Normandie",
  },
  {
    company: "Chatterpoint",
    hexColor: "#8594ba",
    paragraphs:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    university: "Hastings College",
  },
  {
    company: "Tekfly",
    hexColor: "#b67212",
    paragraphs:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    university: "Universidad de Panamá",
  },
  {
    company: "Brainbox",
    hexColor: "#dfbed9",
    paragraphs:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    university: "Nepal Sanskrit University",
  },
  {
    company: "Kazio",
    hexColor: "#6afc90",
    paragraphs:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    university: "Universidad Nacional de Río Cuarto",
  },
  {
    company: "Oozz",
    hexColor: "#ab78d8",
    paragraphs:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    university: "Shenyang University",
  },
  {
    company: "Jabbertype",
    hexColor: "#3c4782",
    paragraphs:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    university: "Moscow State Industrial University",
  },
  {
    company: "Izio",
    hexColor: "#7730ff",
    paragraphs:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    university: "Universidad del Bío-Bío",
  },
  {
    company: "Oyondu",
    hexColor: "#2b5d2c",
    paragraphs:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    university: "North Eastern Hill University",
  },
  {
    company: "Photofeed",
    hexColor: "#e9e317",
    paragraphs:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    university: "West Chester University of Pennsylvania",
  },
  {
    company: "Abata",
    hexColor: "#da9aab",
    paragraphs:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    university: "Rajasthan Agricultural University, Bikaner",
  },
  {
    company: "Livetube",
    hexColor: "#666039",
    paragraphs:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    university:
      "Ecole Nationale Supérieur des Ingénieur des Etudes et Techniques d'Armement",
  },
  {
    company: "Einti",
    hexColor: "#de3c2a",
    paragraphs:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    university: "Akdeniz University",
  },
  {
    company: "Nlounge",
    hexColor: "#ed2764",
    paragraphs:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    university: "Amirkabir College of Managmant & Technology",
  },
  {
    company: "Avavee",
    hexColor: "#489028",
    paragraphs:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    university: "Institut Teknologi Sepuluh Nopember",
  },
  {
    company: "Chatterbridge",
    hexColor: "#c0e13d",
    paragraphs:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    university: "University of Hargeisa",
  },
  {
    company: "Youspan",
    hexColor: "#de4529",
    paragraphs:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    university: "Instituto Politécnico de Bragança",
  },
  {
    company: "Quire",
    hexColor: "#798bbb",
    paragraphs:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    university: "Russell Berrie Nanotechnology Institute",
  },
  {
    company: "Tagfeed",
    hexColor: "#d6d288",
    paragraphs:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    university: "University of Iceland",
  },
  {
    company: "Roomm",
    hexColor: "#f642fd",
    paragraphs:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    university: "Universidad del Sagrado Corazon",
  },
  {
    company: "Oyope",
    hexColor: "#4e8a98",
    paragraphs:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    university: "Jinan University",
  },
  {
    company: "Skalith",
    hexColor: "#e581b2",
    paragraphs:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    university: "Eastern University",
  },
  {
    company: "Quire",
    hexColor: "#d3a957",
    paragraphs:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    university: "Azerbaijan University ol Languages",
  },
  {
    company: "Skibox",
    hexColor: "#bd569e",
    paragraphs:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    university: "College of Notre Dame",
  },
  {
    company: "Livefish",
    hexColor: "#52ed2e",
    paragraphs:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    university: "Kwan Dong University",
  },
  {
    company: "Gabspot",
    hexColor: "#28617c",
    paragraphs:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    university: "Tokyo Medical College",
  },
  {
    company: "Demivee",
    hexColor: "#fd57d2",
    paragraphs: "Fusce consequat. Nulla nisl. Nunc nisl.",
    university: "Eastern Kentucky University",
  },
  {
    company: "Tavu",
    hexColor: "#894971",
    paragraphs:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    university: "Nordic School of Public Health",
  },
  {
    company: "Livetube",
    hexColor: "#9479cb",
    paragraphs:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    university: "Holar University College",
  },
  {
    company: "Roombo",
    hexColor: "#a23d6e",
    paragraphs:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    university: "School of Banking and Management in Cracow",
  },
  {
    company: "Blognation",
    hexColor: "#80975b",
    paragraphs:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    university: "Shahrood University of Technology",
  },
  {
    company: "Oba",
    hexColor: "#de60c9",
    paragraphs:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    university: "Universidad Chileno Britanica de Cultura",
  },
  {
    company: "Tagcat",
    hexColor: "#2b213b",
    paragraphs:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    university: "Addis Ababa Science & Technology University",
  },
  {
    company: "Meejo",
    hexColor: "#f2bc3e",
    paragraphs:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    university: "KROK Economics and Law University",
  },
  {
    company: "Minyx",
    hexColor: "#91179b",
    paragraphs:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    university: "Delijan Payame Noor University",
  },
  {
    company: "Nlounge",
    hexColor: "#7567b8",
    paragraphs:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    university: "Universidad de Guayaquil",
  },
  {
    company: "Flashdog",
    hexColor: "#0f9ccd",
    paragraphs:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    university: "National Institute of Technology, Durgapur",
  },
  {
    company: "Katz",
    hexColor: "#0c53c7",
    paragraphs:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    university: "Setsunan University",
  },
  {
    company: "Skimia",
    hexColor: "#202470",
    paragraphs:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    university: "Royal University of Bhutan",
  },
  {
    company: "Wordpedia",
    hexColor: "#449a67",
    paragraphs:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    university: "Odense University",
  },
  {
    company: "Dazzlesphere",
    hexColor: "#cc40f8",
    paragraphs:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    university: "Colegio de Estudios Superiores de Administración (CESA)",
  },
  {
    company: "Pixoboo",
    hexColor: "#87e721",
    paragraphs:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    university: "Aoyama Gakuin University",
  },
  {
    company: "Yombu",
    hexColor: "#900339",
    paragraphs:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    university: "Gondar University",
  },
  {
    company: "Kwilith",
    hexColor: "#ce6f71",
    paragraphs:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    university: "University of Tripoli",
  },
  {
    company: "Flipbug",
    hexColor: "#7b42ae",
    paragraphs:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    university: "Universitas Udayana",
  },
  {
    company: "Thoughtstorm",
    hexColor: "#4d8140",
    paragraphs:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    university: "Hokkaido University of Education",
  },
  {
    company: "Mydo",
    hexColor: "#5a275b",
    paragraphs:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    university: "Technological Education Institute of Lamia",
  },
  {
    company: "Dabjam",
    hexColor: "#4b5ffb",
    paragraphs:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    university: "University College of Borås",
  },
  {
    company: "Dabfeed",
    hexColor: "#668967",
    paragraphs:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    university: "Leyte Normal University",
  },
  {
    company: "Riffpedia",
    hexColor: "#f64aa0",
    paragraphs:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    university: "Maritime University Constanta",
  },
  {
    company: "Tagchat",
    hexColor: "#6c1055",
    paragraphs:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    university: "Ilia Chavchavadze State University",
  },
  {
    company: "Feedbug",
    hexColor: "#905099",
    paragraphs:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    university: "Renaissance University",
  },
  {
    company: "Roodel",
    hexColor: "#1fd78b",
    paragraphs:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    university: "Virginia College",
  },
  {
    company: "Livetube",
    hexColor: "#d981c0",
    paragraphs:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    university: "Universidad del Pacifico",
  },
  {
    company: "Dabjam",
    hexColor: "#913e18",
    paragraphs:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    university: "Calvary Bible College",
  },
  {
    company: "Oyonder",
    hexColor: "#68553e",
    paragraphs:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    university: "Universidad José Maria Vargas",
  },
  {
    company: "Mita",
    hexColor: "#cbccfc",
    paragraphs:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    university: "Northwest Christian College",
  },
  {
    company: "Wikizz",
    hexColor: "#3fa49f",
    paragraphs:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    university: "Karachi School of Art",
  },
  {
    company: "Browsedrive",
    hexColor: "#a059fd",
    paragraphs:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    university: "Eastern Conservatory of Music",
  },
  {
    company: "Snaptags",
    hexColor: "#52d951",
    paragraphs:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    university: "Fachhochschulstudiengänge Hagenberg",
  },
  {
    company: "Wordtune",
    hexColor: "#a31bba",
    paragraphs:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    university: "Universidad Regional Miguel Hidalgo",
  },
  {
    company: "Eidel",
    hexColor: "#294da2",
    paragraphs:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    university: "Katholieke Hogeschool Kempen",
  },
  {
    company: "Topiczoom",
    hexColor: "#d80ae7",
    paragraphs:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    university: "St. Anthony College of Nursing",
  },
  {
    company: "Photofeed",
    hexColor: "#07d6fa",
    paragraphs:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    university: "University of Vermont",
  },
  {
    company: "Brainlounge",
    hexColor: "#43af36",
    paragraphs:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    university: "Universidad de Especialidades Turísticas ",
  },
  {
    company: "Topicware",
    hexColor: "#3fb908",
    paragraphs:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    university: "Western Connecticut State University",
  },
  {
    company: "Photojam",
    hexColor: "#b7d18f",
    paragraphs:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    university: "Togliatti State University",
  },
  {
    company: "Feedmix",
    hexColor: "#b1ac8d",
    paragraphs:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    university: "Universidad Nacional Agraria La Molina",
  },
  {
    company: "Photobug",
    hexColor: "#9d1627",
    paragraphs:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    university: "National Defence Medical College",
  },
  {
    company: "Pixope",
    hexColor: "#2ef430",
    paragraphs:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    university: "Hungarian University of Physical Education",
  },
  {
    company: "Flashset",
    hexColor: "#aa84ae",
    paragraphs:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    university: "Tuva State University",
  },
  {
    company: "Yombu",
    hexColor: "#9881d9",
    paragraphs:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    university: "University of the Sunshine Coast",
  },
  {
    company: "Twimbo",
    hexColor: "#506b43",
    paragraphs:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    university: "Stavropol State Technical University",
  },
  {
    company: "Livefish",
    hexColor: "#ffa580",
    paragraphs:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    university: "Calvary Bible College",
  },
  {
    company: "Skimia",
    hexColor: "#f16fba",
    paragraphs:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    university: "Flagler College",
  },
  {
    company: "Skynoodle",
    hexColor: "#108da7",
    paragraphs:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    university: "Universidade São Francisco",
  },
  {
    company: "Flipstorm",
    hexColor: "#79818a",
    paragraphs:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    university: "University of Anbar",
  },
  {
    company: "Gigazoom",
    hexColor: "#f727d7",
    paragraphs:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    university: "Agricultural-Technical Academy in Olsztyn",
  },
  {
    company: "Kaymbo",
    hexColor: "#bd5e87",
    paragraphs:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    university: "Kyungnam University",
  },
  {
    company: "Twimbo",
    hexColor: "#9d3393",
    paragraphs:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    university: "Instituto Superior de Ciênicas e Tecnologia de Moçambique",
  },
  {
    company: "Skidoo",
    hexColor: "#65bbc5",
    paragraphs:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    university: "University of Indianapolis",
  },
  {
    company: "Plambee",
    hexColor: "#0c582f",
    paragraphs:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    university: "University of Wah",
  },
  {
    company: "Thoughtworks",
    hexColor: "#24c061",
    paragraphs:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    university: "Sekolah Tinggi Akuntansi Negara (STAN)",
  },
  {
    company: "Tazzy",
    hexColor: "#9516cd",
    paragraphs:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    university: "Southwest Jiaotong University",
  },
  {
    company: "Oloo",
    hexColor: "#f48a51",
    paragraphs:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    university: "Ecole des Hautes Etudes Commerciales",
  },
  {
    company: "Dynabox",
    hexColor: "#a5f368",
    paragraphs: "Fusce consequat. Nulla nisl. Nunc nisl.",
    university: "Bayero University Kano",
  },
  {
    company: "Skivee",
    hexColor: "#0436ec",
    paragraphs:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    university: "Universitas Sumatera Utara",
  },
  {
    company: "Nlounge",
    hexColor: "#ab7193",
    paragraphs:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    university: "Hanoi University of Mining and Geology",
  },
  {
    company: "Rhynyx",
    hexColor: "#268f89",
    paragraphs:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    university: "Politeknik Negeri Jakarta",
  },
  {
    company: "Agivu",
    hexColor: "#60870e",
    paragraphs:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    university: "Fujian University of Traditional Chinese Medicine",
  },
  {
    company: "Skinte",
    hexColor: "#d2ef41",
    paragraphs:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    university: "Nebraska Methodist College of Nursing and Allied Health",
  },
  {
    company: "Youspan",
    hexColor: "#63761b",
    paragraphs:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    university: "University of California, Santa Cruz",
  },
  {
    company: "Tavu",
    hexColor: "#d79273",
    paragraphs: "Fusce consequat. Nulla nisl. Nunc nisl.",
    university: "Universitas Ngurah Rai",
  },
  {
    company: "Kazio",
    hexColor: "#658dc3",
    paragraphs:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    university: "Yale University",
  },
  {
    company: "Realpoint",
    hexColor: "#655cd3",
    paragraphs:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    university: "Universidade de Passo Fundo",
  },
  {
    company: "Realcube",
    hexColor: "#ee5206",
    paragraphs:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    university: "Zurich University of Applied Sciences Winterthur",
  },
  {
    company: "Divape",
    hexColor: "#d3b5de",
    paragraphs:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    university: "Télé-université, Université du Québec",
  },
  {
    company: "Demivee",
    hexColor: "#eda6f8",
    paragraphs:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    university: "Universidad de Las Palmas de Gran Canaria",
  },
  {
    company: "Wikizz",
    hexColor: "#961884",
    paragraphs:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    university: "Russian State Hydrometeorological University",
  },
  {
    company: "Jabbersphere",
    hexColor: "#c231f8",
    paragraphs:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    university: "Hobart and William Smith Colleges",
  },
  {
    company: "Photolist",
    hexColor: "#cb4fff",
    paragraphs:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    university: "Umm Al-Qura University",
  },
  {
    company: "Zoozzy",
    hexColor: "#26f78f",
    paragraphs:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    university: "Institute Of Technology, Australia",
  },
  {
    company: "Oyondu",
    hexColor: "#d7ff96",
    paragraphs:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    university: "Universidad Autónoma de Entre Ríos",
  },
  {
    company: "Rhycero",
    hexColor: "#2b6ab4",
    paragraphs:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    university: "University of Maryland at College Park",
  },
  {
    company: "Edgetag",
    hexColor: "#422efd",
    paragraphs:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    university: "Mount Allison University",
  },
  {
    company: "Gigabox",
    hexColor: "#7ba9ae",
    paragraphs:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    university: "Brooks Institute of Photography",
  },
  {
    company: "Skyba",
    hexColor: "#dc0cbd",
    paragraphs:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    university: "Aichi University",
  },
  {
    company: "Kwilith",
    hexColor: "#861e34",
    paragraphs:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    university: "Minia University",
  },
  {
    company: "Brightdog",
    hexColor: "#a0336d",
    paragraphs:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    university: "Universidad Autónoma del Estado de Morelos",
  },
  {
    company: "Gevee",
    hexColor: "#71b862",
    paragraphs:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    university: "An-Najah National University",
  },
  {
    company: "Layo",
    hexColor: "#429a96",
    paragraphs:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    university: "Escuela Colombiana de Carreras Industriales",
  },
  {
    company: "Fivebridge",
    hexColor: "#5cda62",
    paragraphs:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    university: "University of Wassit",
  },
  {
    company: "Snaptags",
    hexColor: "#225fa8",
    paragraphs:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    university: "Université de l'Uélé",
  },
  {
    company: "Quatz",
    hexColor: "#3e79c2",
    paragraphs:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    university: "American University of Tirana",
  },
  {
    company: "Trupe",
    hexColor: "#bbdd3c",
    paragraphs:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    university: "Technical University of Civil Engineering Bucharest",
  },
  {
    company: "Tanoodle",
    hexColor: "#7b196b",
    paragraphs:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    university: "Avila College",
  },
  {
    company: "Voonix",
    hexColor: "#be900c",
    paragraphs:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    university: "New York Instiute of Technology",
  },
  {
    company: "Zoomdog",
    hexColor: "#f3635c",
    paragraphs:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    university: "Universidade Potiguar",
  },
  {
    company: "Feednation",
    hexColor: "#52652e",
    paragraphs:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    university: "International University of Kyrgyzstan",
  },
  {
    company: "Fadeo",
    hexColor: "#c7360d",
    paragraphs:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    university: "Ecole Supérieure de Commerce de Toulouse",
  },
  {
    company: "Skinte",
    hexColor: "#4fdb85",
    paragraphs:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    university: "Spelman College",
  },
  {
    company: "Bubblemix",
    hexColor: "#7cc504",
    paragraphs:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    university: "Centro Universitário de João Pessoa",
  },
  {
    company: "Ntags",
    hexColor: "#5b0fa8",
    paragraphs:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    university: "University of Texas Health Center at Houston",
  },
  {
    company: "Buzzdog",
    hexColor: "#920156",
    paragraphs:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    university: "Perm State Academy of Agriculture",
  },
  {
    company: "Leenti",
    hexColor: "#9573dc",
    paragraphs:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    university: "Adygeja State University",
  },
  {
    company: "Browseblab",
    hexColor: "#d5c2f7",
    paragraphs:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    university: "Kurashiki Sakuyo University",
  },
  {
    company: "Meejo",
    hexColor: "#663028",
    paragraphs:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    university: "Carroll College Helena",
  },
  {
    company: "Aimbu",
    hexColor: "#ddb95d",
    paragraphs:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    university: "Academy of Economics in Cracow",
  },
  {
    company: "Tagchat",
    hexColor: "#281457",
    paragraphs:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    university: "University of Novi Sad",
  },
  {
    company: "Twinder",
    hexColor: "#f2676c",
    paragraphs:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    university: "People's University of Bangladesh",
  },
  {
    company: "Trilia",
    hexColor: "#782c11",
    paragraphs:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    university: "Nayanova University",
  },
  {
    company: "Brainbox",
    hexColor: "#8b8c60",
    paragraphs:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    university: "University of East Anglia",
  },
  {
    company: "Yabox",
    hexColor: "#d45385",
    paragraphs:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    university:
      "Ecole Nationale Supérieure de Biologie Appliquée à la Nutrition et à l'Alementation",
  },
  {
    company: "Yombu",
    hexColor: "#86c004",
    paragraphs:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    university: "Tsinghua University",
  },
  {
    company: "Quinu",
    hexColor: "#e28561",
    paragraphs:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    university: "Yeungnam University",
  },
  {
    company: "Abata",
    hexColor: "#909c82",
    paragraphs: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    university: "Universidad Católica del Norte",
  },
  {
    company: "Feednation",
    hexColor: "#671e08",
    paragraphs:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    university: "Zambian Open University",
  },
  {
    company: "Zoonder",
    hexColor: "#ea5740",
    paragraphs:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    university: 'Music Academy "Karol Lipinski" in Wroclaw',
  },
  {
    company: "Topicstorm",
    hexColor: "#b46b6e",
    paragraphs:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    university: "Université d'Alger",
  },
  {
    company: "Cogibox",
    hexColor: "#9810d3",
    paragraphs:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    university:
      "American Film Institute Center for Advanced Film and Television Studies",
  },
  {
    company: "Topicblab",
    hexColor: "#2d58f3",
    paragraphs:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    university: "Espam Formation University",
  },
  {
    company: "Oyoyo",
    hexColor: "#7a3875",
    paragraphs:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    university: "Research College of Nursing - Rockhurst University",
  },
  {
    company: "Gigabox",
    hexColor: "#25e878",
    paragraphs:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    university: "Zaman University",
  },
  {
    company: "Nlounge",
    hexColor: "#8548c5",
    paragraphs:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    university: "Texas A&M University - Texarkana",
  },
  {
    company: "Eadel",
    hexColor: "#e43e38",
    paragraphs:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    university: "Universidad Valle del Momboy",
  },
  {
    company: "Twitternation",
    hexColor: "#700d71",
    paragraphs:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    university: "COMSATS Institute of Information Technology, Attock",
  },
  {
    company: "Twitternation",
    hexColor: "#3b1017",
    paragraphs:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    university: "University of Education",
  },
  {
    company: "Dablist",
    hexColor: "#7b722b",
    paragraphs:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    university: "University of Somalia",
  },
  {
    company: "Edgewire",
    hexColor: "#029a99",
    paragraphs:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    university: "University College of Applied Sciences",
  },
  {
    company: "Dabvine",
    hexColor: "#997394",
    paragraphs:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    university: "Taipei Medical College",
  },
  {
    company: "Podcat",
    hexColor: "#82533b",
    paragraphs:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    university: "Second University of Naples",
  },
  {
    company: "Realpoint",
    hexColor: "#3858e9",
    paragraphs:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    university: "University of Amsterdam",
  },
  {
    company: "Zazio",
    hexColor: "#9de488",
    paragraphs:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    university: "Fukushima University",
  },
  {
    company: "Quimba",
    hexColor: "#322a1a",
    paragraphs:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    university: "European Regional Educational Academy of Armenia",
  },
  {
    company: "Jabbercube",
    hexColor: "#9d7c88",
    paragraphs:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    university:
      'University for Information Science and Technology  "St. Paul The Apostle" ',
  },
  {
    company: "Twinte",
    hexColor: "#2d2155",
    paragraphs:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    university: "Universität für Musik und darstellende Kunst  Wien",
  },
  {
    company: "Gabcube",
    hexColor: "#c1dd22",
    paragraphs:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    university: "University of Lahore",
  },
  {
    company: "Dabfeed",
    hexColor: "#e55143",
    paragraphs:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    university: "Tama Art University",
  },
  {
    company: "Skinix",
    hexColor: "#6184d3",
    paragraphs:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    university: "Asia Pacific Institute of Information Technology (APIIT)",
  },
  {
    company: "Divanoodle",
    hexColor: "#c6ed8e",
    paragraphs:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    university: "Charisma University",
  },
  {
    company: "Riffwire",
    hexColor: "#7e7225",
    paragraphs:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    university: "Ain Shams University",
  },
  {
    company: "Oyondu",
    hexColor: "#29099b",
    paragraphs:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    university: "University of Technology Jamaica",
  },
  {
    company: "Demizz",
    hexColor: "#c997e9",
    paragraphs:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    university: "St. Cloud State University",
  },
  {
    company: "Oodoo",
    hexColor: "#04d904",
    paragraphs:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    university: "Bayerische Julius-Maximilians-Universität Würzburg",
  },
  {
    company: "Dynazzy",
    hexColor: "#6431c0",
    paragraphs:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    university: "Karwan Institute of Higher Education",
  },
  {
    company: "Trunyx",
    hexColor: "#0a3a82",
    paragraphs:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    university: "Duquesne University",
  },
  {
    company: "Twinder",
    hexColor: "#18db4c",
    paragraphs: "In congue. Etiam justo. Etiam pretium iaculis justo.",
    university: "Bangladesh University of Business & Technology",
  },
  {
    company: "Zoomzone",
    hexColor: "#2ac4ea",
    paragraphs:
      "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    university: "Nagoya Gakuin University",
  },
  {
    company: "Eayo",
    hexColor: "#22e595",
    paragraphs:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    university: "Golden Gate University",
  },
  {
    company: "Zava",
    hexColor: "#f4f0ad",
    paragraphs:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    university: "Bridgewater State College",
  },
  {
    company: "Linklinks",
    hexColor: "#ba160b",
    paragraphs:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    university: "IT University of Copenhagen",
  },
  {
    company: "Vidoo",
    hexColor: "#33086b",
    paragraphs:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    university: "Universidad Obrera de Mexico",
  },
  {
    company: "Topicblab",
    hexColor: "#0c9c8d",
    paragraphs:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    university: "Tokyo Metropolitan Institute of Technology",
  },
  {
    company: "Feedmix",
    hexColor: "#b16772",
    paragraphs:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    university: "Mukogawa Women's University",
  },
  {
    company: "Agivu",
    hexColor: "#5bdf27",
    paragraphs:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    university: "Université Jean Moulin (Lyon III)",
  },
  {
    company: "Zooveo",
    hexColor: "#5064f0",
    paragraphs:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    university: "New England Conservatory of Music",
  },
  {
    company: "Jaxworks",
    hexColor: "#fd0ce4",
    paragraphs:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    university: "Hope College",
  },
  {
    company: "Devbug",
    hexColor: "#36a4ea",
    paragraphs:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    university: "NGO Vladikavkaz Institute of Economics, Management, and Law",
  },
  {
    company: "Pixoboo",
    hexColor: "#a0391d",
    paragraphs: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    university: "Université d'Abomey-Calavi (UAC)",
  },
  {
    company: "Realmix",
    hexColor: "#169219",
    paragraphs:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    university: "Taipei Physical Education College",
  },
  {
    company: "Linklinks",
    hexColor: "#48baf7",
    paragraphs:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    university: "Bahcesehir University",
  },
  {
    company: "Omba",
    hexColor: "#924ee3",
    paragraphs:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    university: "Applied Science University",
  },
  {
    company: "Voonte",
    hexColor: "#caa381",
    paragraphs:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    university: "Kyrgyz State Technical University",
  },
  {
    company: "Skyble",
    hexColor: "#cf876c",
    paragraphs:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    university: "Pratt Institute",
  },
  {
    company: "Mydeo",
    hexColor: "#fdece1",
    paragraphs:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    university: "Imam Khomeini International University",
  },
  {
    company: "Feedspan",
    hexColor: "#84dc0d",
    paragraphs:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    university: "Tongji Medical University",
  },
  {
    company: "Bubblemix",
    hexColor: "#607ec8",
    paragraphs:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    university: "The Global College Lahore",
  },
  {
    company: "Lajo",
    hexColor: "#16c4d5",
    paragraphs:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    university: "Universidad Champagnat",
  },
  {
    company: "Kazio",
    hexColor: "#f32bb8",
    paragraphs:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    university: "Polish-Japanese Institute of Information Technology in Warsaw",
  },
  {
    company: "Pixope",
    hexColor: "#ad5199",
    paragraphs:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    university:
      "Kamalolmolk Art & Architecture Higher Education Institute of Noshahr",
  },
  {
    company: "Agimba",
    hexColor: "#5f548a",
    paragraphs:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    university: "Ecole Française d'Electronique et d'Informatique",
  },
  {
    company: "Jabbersphere",
    hexColor: "#29124b",
    paragraphs:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    university: "Hogeschool Rotterdam",
  },
  {
    company: "Leenti",
    hexColor: "#fd6f41",
    paragraphs: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    university: "Finance Academy",
  },
  {
    company: "Jaloo",
    hexColor: "#af2d78",
    paragraphs:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    university: "Université de Bamako",
  },
  {
    company: "Thoughtblab",
    hexColor: "#4f8c5c",
    paragraphs:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    university: "Louisiana State University at Eunice",
  },
  {
    company: "Katz",
    hexColor: "#b5e7b3",
    paragraphs:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    university: "Mazandaran University of Iran",
  },
  {
    company: "Youfeed",
    hexColor: "#785382",
    paragraphs:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
    university: "University of Queensland",
  },
  {
    company: "Browsebug",
    hexColor: "#5134e4",
    paragraphs:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    university: "University of Wollongong - Dubai Campus",
  },
  {
    company: "Roombo",
    hexColor: "#2bae05",
    paragraphs:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    university: "Islamic Azad University, Janah",
  },
  {
    company: "Yotz",
    hexColor: "#5f46b4",
    paragraphs:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    university: "College of Mount St. Joseph",
  },
  {
    company: "Skibox",
    hexColor: "#b1a2a8",
    paragraphs:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    university: "Eastern University of Sri Lanka",
  },
  {
    company: "Agivu",
    hexColor: "#69724b",
    paragraphs:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    university: "Willamette University",
  },
  {
    company: "Realcube",
    hexColor: "#01a112",
    paragraphs:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    university: "Fachhochschule Lausitz",
  },
  {
    company: "Kamba",
    hexColor: "#185488",
    paragraphs:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    university: "University of Belgrade",
  },
  {
    company: "Dynabox",
    hexColor: "#af89cc",
    paragraphs:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    university: "Université du Sud, Toulon et Var",
  },
  {
    company: "Tambee",
    hexColor: "#bcd4ab",
    paragraphs:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    university: "University of Michigan - Ann Arbor",
  },
  {
    company: "Mydeo",
    hexColor: "#b7e340",
    paragraphs:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    university: "Lithunian Veterinary Academy",
  },
  {
    company: "Leenti",
    hexColor: "#9dcb21",
    paragraphs:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    university: "Universität der Bundeswehr München",
  },
  {
    company: "Eazzy",
    hexColor: "#d1d765",
    paragraphs:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    university: "Universitas Komputer Indonesia",
  },
  {
    company: "Buzzshare",
    hexColor: "#b5281a",
    paragraphs:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    university: "Southwestern University",
  },
  {
    company: "Skyble",
    hexColor: "#595db9",
    paragraphs:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    university: "Islamic Azad University, Ardabil",
  },
  {
    company: "Quatz",
    hexColor: "#218297",
    paragraphs:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    university: "Université Hassan II - Mohammadia",
  },
  {
    company: "Skiptube",
    hexColor: "#3202ab",
    paragraphs:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    university: "Regis College",
  },
  {
    company: "Skyvu",
    hexColor: "#404d86",
    paragraphs:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    university: "University of Regina",
  },
  {
    company: "Twitterlist",
    hexColor: "#4f5e7e",
    paragraphs:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    university: "University of Stellenbosch",
  },
  {
    company: "Dynava",
    hexColor: "#4aee83",
    paragraphs:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    university: "Université de Bamenda",
  },
  {
    company: "Centimia",
    hexColor: "#14fcaf",
    paragraphs:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    university: "National University of Uzbekistan",
  },
  {
    company: "Youspan",
    hexColor: "#55ad01",
    paragraphs:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    university: "Islamia University of Bahawalpur",
  },
  {
    company: "Fivespan",
    hexColor: "#f97dde",
    paragraphs:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    university: "Netaji Subhas Inst of Technology",
  },
  {
    company: "Jamia",
    hexColor: "#ba51bc",
    paragraphs:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    university: "University Tun Abdul Razak",
  },
  {
    company: "Jabbersphere",
    hexColor: "#44aebb",
    paragraphs:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    university: "Tiffin University Prague",
  },
  {
    company: "Ntag",
    hexColor: "#7778b6",
    paragraphs:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    university: "University of Hydraulic Electric Engineering",
  },
  {
    company: "Twitterbeat",
    hexColor: "#3d695d",
    paragraphs:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    university: "University of Pune",
  },
  {
    company: "Riffpath",
    hexColor: "#a97aac",
    paragraphs:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    university: "Hanseo University",
  },
  {
    company: "Innotype",
    hexColor: "#cc024b",
    paragraphs:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    university: "Hemwati Nandan Bahuguna Garhwal University",
  },
  {
    company: "Babblestorm",
    hexColor: "#65618c",
    paragraphs:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    university: "Osaka University of Education",
  },
  {
    company: "Innotype",
    hexColor: "#af75a6",
    paragraphs:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    university: "Madawalabu University",
  },
  {
    company: "Kwinu",
    hexColor: "#24111d",
    paragraphs:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    university: "Saint Mary's University",
  },
  {
    company: "Topicstorm",
    hexColor: "#dfa16d",
    paragraphs:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    university: "Budapest Buddhist University",
  },
  {
    company: "Jabbertype",
    hexColor: "#c90833",
    paragraphs:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    university:
      "Ho Chi Minh City University of Foreign Languages and Information Technology",
  },
  {
    company: "Jayo",
    hexColor: "#cce733",
    paragraphs:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    university: "New England College of Optometry",
  },
  {
    company: "Topdrive",
    hexColor: "#9e46e0",
    paragraphs:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    university: "National Defense University",
  },
  {
    company: "Fanoodle",
    hexColor: "#791bc0",
    paragraphs:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    university: "Universidad de Guadalajara",
  },
  {
    company: "Yodel",
    hexColor: "#39b14f",
    paragraphs:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
    university: "Clemson University",
  },
  {
    company: "Voonder",
    hexColor: "#7647ba",
    paragraphs:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
    university: "Universidad Bolivariana",
  },
  {
    company: "Twinder",
    hexColor: "#8c34b8",
    paragraphs:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    university: "College of Idaho",
  },
  {
    company: "Topicshots",
    hexColor: "#db6083",
    paragraphs:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    university: "Akita University",
  },
  {
    company: "Topiczoom",
    hexColor: "#0fec40",
    paragraphs:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    university: "University of International Business",
  },
  {
    company: "Plajo",
    hexColor: "#38e165",
    paragraphs:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    university: "Brussels Management School (ICHEC)",
  },
  {
    company: "Aibox",
    hexColor: "#f33585",
    paragraphs:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    university: "Kigali Institute of Science & Technology",
  },
  {
    company: "Voolia",
    hexColor: "#7d19a1",
    paragraphs:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    university: "Islamic Azad University, Dehaghan",
  },
  {
    company: "Demimbu",
    hexColor: "#614333",
    paragraphs:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    university: "Kotelawala Defence University",
  },
  {
    company: "Zava",
    hexColor: "#41b750",
    paragraphs:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    university: "St. Petersburg State Agrarian University",
  },
  {
    company: "Wikido",
    hexColor: "#fed554",
    paragraphs:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    university: "Instituto Universitario Nacional del Arte",
  },
  {
    company: "Demizz",
    hexColor: "#2cdc8e",
    paragraphs:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    university: "Keller Graduate School of Management",
  },
  {
    company: "Twimbo",
    hexColor: "#6f1c92",
    paragraphs:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    university: "Amity University",
  },
  {
    company: "Linklinks",
    hexColor: "#06fccd",
    paragraphs:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    university: "Universiti Tunku Abdul Rahman",
  },
  {
    company: "Livefish",
    hexColor: "#b42393",
    paragraphs:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    university: "Kamakura Women's College",
  },
  {
    company: "Riffpath",
    hexColor: "#08bda2",
    paragraphs:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    university: "Escuela Militar de Ingeniería",
  },
  {
    company: "Jayo",
    hexColor: "#232155",
    paragraphs:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    university: "Canadian College of Business & Computers",
  },
  {
    company: "Gabspot",
    hexColor: "#403281",
    paragraphs:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    university: "Fontys University of Applied Sciences",
  },
  {
    company: "Voonix",
    hexColor: "#c0166c",
    paragraphs:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    university: "Fachhochschule Ludwigshafen, Hochschule für Wirtschaft",
  },
  {
    company: "Realcube",
    hexColor: "#432a0b",
    paragraphs:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    university: "University of the Philippines Mindanao",
  },
  {
    company: "Eabox",
    hexColor: "#f8a28e",
    paragraphs:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    university: "Ningbo University",
  },
  {
    company: "Jabberbean",
    hexColor: "#9a8f5e",
    paragraphs:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    university: "Hope Africa University",
  },
  {
    company: "Fiveclub",
    hexColor: "#8d80c2",
    paragraphs:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    university: "Oklahoma State University - Oklahoma City",
  },
  {
    company: "Twitterlist",
    hexColor: "#0b70f4",
    paragraphs:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    university: "Okinawa Prefectural University of Fine Arts",
  },
  {
    company: "Zoonoodle",
    hexColor: "#303efd",
    paragraphs:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    university: "Utsunomiya University",
  },
  {
    company: "Skipstorm",
    hexColor: "#bda63d",
    paragraphs:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    university: "Vanderbilt University",
  },
  {
    company: "Oyoba",
    hexColor: "#33c4e3",
    paragraphs:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    university: "Universidade Federal de Sergipe",
  },
  {
    company: "Twitterlist",
    hexColor: "#28a1bc",
    paragraphs:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    university: "City University of New York (CUNY) System",
  },
  {
    company: "Bluejam",
    hexColor: "#3c3791",
    paragraphs:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    university: "Universidade Santa Úrsula",
  },
  {
    company: "Lazz",
    hexColor: "#f28b81",
    paragraphs:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    university: "Royal Danish Academy of Fine Arts, School of Architecture",
  },
  {
    company: "Quatz",
    hexColor: "#1c555b",
    paragraphs:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    university: "College in Sládkovičovo",
  },
  {
    company: "Browsezoom",
    hexColor: "#c96c11",
    paragraphs:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    university: "Qafqaz University",
  },
  {
    company: "Topicshots",
    hexColor: "#574cc0",
    paragraphs:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    university: "Amman Arab University for Higher Studies",
  },
  {
    company: "Kaymbo",
    hexColor: "#1560c3",
    paragraphs:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    university: "Montclair State University",
  },
  {
    company: "Eire",
    hexColor: "#32d02e",
    paragraphs:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    university: "Faculdade Jaguariúna",
  },
  {
    company: "Thoughtstorm",
    hexColor: "#c8fae0",
    paragraphs:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    university: "Silesian Technical University of Gliwice",
  },
  {
    company: "Brainlounge",
    hexColor: "#63c835",
    paragraphs:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    university: "Shanghai Ocean University",
  },
  {
    company: "Oodoo",
    hexColor: "#39337d",
    paragraphs:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    university: "Kobe Shinwa Women's University",
  },
  {
    company: "Fiveclub",
    hexColor: "#c06e90",
    paragraphs:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    university: 'University of Elbasan "Aleksander Xhuvani"',
  },
  {
    company: "Blogtag",
    hexColor: "#325ffe",
    paragraphs:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    university: "Pontificia Universidad Catolica de Puerto Rico",
  },
  {
    company: "Tazzy",
    hexColor: "#355958",
    paragraphs:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    university: "Inner Mongolia University",
  },
  {
    company: "Gigazoom",
    hexColor: "#021ff9",
    paragraphs:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    university: "Ecole Mohammadia d'Ingénieurs",
  },
  {
    company: "Topicshots",
    hexColor: "#b19551",
    paragraphs:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    university: "Dixie College",
  },
  {
    company: "Meetz",
    hexColor: "#3494bd",
    paragraphs:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    university: "Hunan Normal University",
  },
  {
    company: "Riffpedia",
    hexColor: "#0ea1ff",
    paragraphs:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    university: "Anhui University of Finance and Economics",
  },
  {
    company: "Quatz",
    hexColor: "#10634b",
    paragraphs:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    university: "The Art Institutes International Portland",
  },
  {
    company: "Aimbu",
    hexColor: "#e24748",
    paragraphs:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    university: "National Hsin-Chu Teachers College",
  },
  {
    company: "Browsebug",
    hexColor: "#4bf756",
    paragraphs:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    university: "Skyline University College, Sharjah",
  },
  {
    company: "Realcube",
    hexColor: "#ea79a5",
    paragraphs:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    university: "Universidad del Cauca",
  },
  {
    company: "Thoughtsphere",
    hexColor: "#cac4d9",
    paragraphs:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    university: "Petroleum University of Technology",
  },
  {
    company: "Meemm",
    hexColor: "#e8a767",
    paragraphs:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    university: "Merlimau Polytechnic",
  },
  {
    company: "Gabtype",
    hexColor: "#215e77",
    paragraphs:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    university: "Police Academy",
  },
  {
    company: "Agivu",
    hexColor: "#944a9f",
    paragraphs:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    university: "Faculdades Integradas do Brasil - UNIBRASIL",
  },
  {
    company: "Photofeed",
    hexColor: "#283f92",
    paragraphs:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    university: "Technical University of Mombasa",
  },
  {
    company: "Yakidoo",
    hexColor: "#a2edef",
    paragraphs:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    university: "Firat (Euphrates) University",
  },
  {
    company: "Avaveo",
    hexColor: "#256c54",
    paragraphs:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    university: "Karel De Grote Hogeschool",
  },
  {
    company: "Vitz",
    hexColor: "#4f6fbb",
    paragraphs:
      "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    university: "Universidad de Aquino Bolivia",
  },
  {
    company: "Realcube",
    hexColor: "#0259f0",
    paragraphs:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    university: "German Jordanian University",
  },
  {
    company: "Katz",
    hexColor: "#ebb26b",
    paragraphs:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    university: "Kyoto Prefectural University",
  },
  {
    company: "Quinu",
    hexColor: "#897100",
    paragraphs:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    university: "Osaka Dental University",
  },
  {
    company: "Tagfeed",
    hexColor: "#874fdd",
    paragraphs:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    university: "University of Switzerland",
  },
  {
    company: "Meemm",
    hexColor: "#ead4b1",
    paragraphs:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    university: "Columbia Southern University",
  },
  {
    company: "Midel",
    hexColor: "#728a38",
    paragraphs:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    university: "Bangladesh University of Professionals",
  },
  {
    company: "Tazzy",
    hexColor: "#8482f8",
    paragraphs:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    university: "Odessa State Medical University",
  },
  {
    company: "Meejo",
    hexColor: "#a1bd10",
    paragraphs:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    university: "University of Westminster",
  },
  {
    company: "Gabspot",
    hexColor: "#a3abfc",
    paragraphs:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    university: "Institute of Teachers Education, Batu Lintang",
  },
  {
    company: "Kanoodle",
    hexColor: "#4974cd",
    paragraphs:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    university: "University of Wisconsin - La Crosse",
  },
  {
    company: "Quimm",
    hexColor: "#f93085",
    paragraphs:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    university: "Punjab Agricultural University",
  },
  {
    company: "Mydo",
    hexColor: "#e05442",
    paragraphs:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    university: "Nortre Dame Seishin University",
  },
  {
    company: "Zooveo",
    hexColor: "#f20085",
    paragraphs:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    university:
      "École Nationale Supérieure d'Ingénieurs de Constructions Aéronautiques",
  },
  {
    company: "Vinte",
    hexColor: "#e283a0",
    paragraphs:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    university: "Universidad Mesoamericana de San Agustín",
  },
  {
    company: "Ozu",
    hexColor: "#0bda91",
    paragraphs:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    university: "Osaka Dental University",
  },
  {
    company: "Pixonyx",
    hexColor: "#899aed",
    paragraphs:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    university: "Jones College",
  },
  {
    company: "Dabvine",
    hexColor: "#3cd4ac",
    paragraphs:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    university: "Universidad Autónoma de Veracruz Villa Rica",
  },
  {
    company: "Agimba",
    hexColor: "#9a6d14",
    paragraphs:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    university: "Hebei Medical University",
  },
  {
    company: "Skajo",
    hexColor: "#18ee69",
    paragraphs:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    university: "Universidade do Grande Rio",
  },
  {
    company: "Quatz",
    hexColor: "#712a76",
    paragraphs:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    university: "Ohio University - Zanesville",
  },
  {
    company: "Youspan",
    hexColor: "#f3dcfe",
    paragraphs:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    university: "Shiraz Payamnoor University",
  },
  {
    company: "Quamba",
    hexColor: "#7bd401",
    paragraphs:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    university: "Universidad de San Andres",
  },
  {
    company: "Kayveo",
    hexColor: "#140a99",
    paragraphs:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    university: "Clarke College",
  },
  {
    company: "Browsebug",
    hexColor: "#b8eab6",
    paragraphs:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    university: "Katholische Stiftungsfachhochschule München",
  },
  {
    company: "Tekfly",
    hexColor: "#3d5c52",
    paragraphs:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    university: "University of Bari",
  },
  {
    company: "Bubblemix",
    hexColor: "#74f82e",
    paragraphs:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    university: "Ecole Nationale Supérieure de Chimie de Paris",
  },
  {
    company: "Yamia",
    hexColor: "#8462ae",
    paragraphs:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    university: "Sultan Haji Ahmad Shah Polytechnic",
  },
  {
    company: "Digitube",
    hexColor: "#9621a5",
    paragraphs:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    university:
      "St. Petersburg State Academy for Engineering Economics (ENGECON)",
  },
  {
    company: "Meevee",
    hexColor: "#88db23",
    paragraphs:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    university: "Kostanai State University",
  },
  {
    company: "Mynte",
    hexColor: "#de9ace",
    paragraphs:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    university: "Universidad Peruana Union",
  },
  {
    company: "Ailane",
    hexColor: "#6d8de4",
    paragraphs:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    university: "University of the Visual & Performing Arts",
  },
  {
    company: "Abata",
    hexColor: "#23185d",
    paragraphs:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    university: "Sauder School of Business",
  },
  {
    company: "Agivu",
    hexColor: "#c3461d",
    paragraphs:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    university: "Universidad de Quintana Roo",
  },
  {
    company: "Latz",
    hexColor: "#6c21ea",
    paragraphs:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    university: "Ural State Academy of Mining and Geology",
  },
  {
    company: "Quinu",
    hexColor: "#ac451f",
    paragraphs:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    university: "Al-hikmah University",
  },
  {
    company: "Ooba",
    hexColor: "#b30d95",
    paragraphs:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    university: "Matej Bel University in Banská Bystrica",
  },
  {
    company: "Photobug",
    hexColor: "#65a5b5",
    paragraphs:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    university: "Oklahoma Christian University",
  },
  {
    company: "Lajo",
    hexColor: "#2c377e",
    paragraphs:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    university: "Universidade Estadual Sudoeste da Bahia",
  },
  {
    company: "Gabtype",
    hexColor: "#4385e2",
    paragraphs:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    university: "Australian Lutheran College",
  },
  {
    company: "Shuffledrive",
    hexColor: "#5ebda0",
    paragraphs:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    university: "Ross University, School of Medicine",
  },
  {
    company: "Kazu",
    hexColor: "#711ab5",
    paragraphs:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    university: "Fomic Polytechnic",
  },
  {
    company: "Tazz",
    hexColor: "#90d937",
    paragraphs:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    university: "United States Air Force Academy",
  },
  {
    company: "Realblab",
    hexColor: "#6ffaa7",
    paragraphs:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    university: "Suwon Catholic University",
  },
  {
    company: "Browsetype",
    hexColor: "#7743ac",
    paragraphs:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    university: "British Institute in Paris, University of London",
  },
  {
    company: "Meedoo",
    hexColor: "#79c31b",
    paragraphs:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    university: "Syracuse University",
  },
  {
    company: "Yamia",
    hexColor: "#9af8c2",
    paragraphs:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    university: "Anna Maria College",
  },
  {
    company: "Riffwire",
    hexColor: "#33895c",
    paragraphs:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    university: "Rasmussen College",
  },
  {
    company: "Realbuzz",
    hexColor: "#c51ab2",
    paragraphs:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    university: "Tokyo University of Foreign Studies",
  },
  {
    company: "Youspan",
    hexColor: "#6b4a70",
    paragraphs:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    university: "University of Tennessee - Knoxville",
  },
  {
    company: "Riffwire",
    hexColor: "#1370d6",
    paragraphs:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    university: "Canadian College of Business & Computers",
  },
  {
    company: "Thoughtblab",
    hexColor: "#647074",
    paragraphs:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    university: "Hyogo University of Education",
  },
  {
    company: "Lajo",
    hexColor: "#d57ce2",
    paragraphs:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    university: "St. Luke' s College of Nursing",
  },
  {
    company: "Photobug",
    hexColor: "#1d6380",
    paragraphs:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    university: "Ural State Forestry Technical Academy",
  },
  {
    company: "Rhyloo",
    hexColor: "#219a26",
    paragraphs:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    university: "Chubu University",
  },
  {
    company: "Bubblemix",
    hexColor: "#449574",
    paragraphs:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    university: "Fachhochschulstudiengänge Hagenberg",
  },
  {
    company: "Skinder",
    hexColor: "#913e50",
    paragraphs:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    university: "Wesley College Mississippi",
  },
  {
    company: "Brainlounge",
    hexColor: "#c8f235",
    paragraphs:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    university: "Jilin Agricultural University",
  },
  {
    company: "Skiba",
    hexColor: "#1d7aba",
    paragraphs:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    university: "Southwest University",
  },
  {
    company: "Minyx",
    hexColor: "#0a59d8",
    paragraphs:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    university: "Seoul Women's University",
  },
  {
    company: "Youspan",
    hexColor: "#e2d970",
    paragraphs:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    university: "East Kazakstan State Technical University",
  },
  {
    company: "Vitz",
    hexColor: "#182f72",
    paragraphs:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    university: "University of East London",
  },
  {
    company: "Skyndu",
    hexColor: "#6ef88f",
    paragraphs: "In congue. Etiam justo. Etiam pretium iaculis justo.",
    university: "Ohio University",
  },
  {
    company: "Twinder",
    hexColor: "#c99d4b",
    paragraphs:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    university: "The American College",
  },
  {
    company: "Flashset",
    hexColor: "#9c2448",
    paragraphs:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    university: "Universitas Ibn Khaldun Bogor",
  },
  {
    company: "Wordify",
    hexColor: "#0fff67",
    paragraphs:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    university: "Ecole Nationale Supérieure de Chimie de Clermont-Ferrand",
  },
  {
    company: "Feedmix",
    hexColor: "#db89ba",
    paragraphs:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    university: "Université Denis Diderot (Paris VII)",
  },
  {
    company: "Teklist",
    hexColor: "#194f43",
    paragraphs:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    university: "University of Islamic Studies",
  },
  {
    company: "Thoughtbeat",
    hexColor: "#09355d",
    paragraphs:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    university: "Rezekne Higher School",
  },
  {
    company: "Skinix",
    hexColor: "#f1ec80",
    paragraphs:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    university: "Lithunian Institute of Physical Education",
  },
  {
    company: "Twitterworks",
    hexColor: "#da12ee",
    paragraphs:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    university: "Collège Boréal",
  },
  {
    company: "Jaxbean",
    hexColor: "#abad01",
    paragraphs:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    university: "Hiroshima Institute of Technology",
  },
  {
    company: "Yombu",
    hexColor: "#9b7c7e",
    paragraphs:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    university: "Universidad Empresarial",
  },
  {
    company: "Wordware",
    hexColor: "#49d1f4",
    paragraphs: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    university: "Ivanovo State Academy of Medicine",
  },
  {
    company: "Mita",
    hexColor: "#2d36ea",
    paragraphs:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    university: "Fatih University",
  },
  {
    company: "Avavee",
    hexColor: "#f3b15c",
    paragraphs:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    university: "Tallinn University of Technology",
  },
  {
    company: "Gigaclub",
    hexColor: "#0e141d",
    paragraphs:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    university: "Kyoto Seika University",
  },
  {
    company: "Eidel",
    hexColor: "#8c0464",
    paragraphs:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    university: "Allama Iqbal Open University",
  },
  {
    company: "Youbridge",
    hexColor: "#78551e",
    paragraphs:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    university: "Universidad Popular Autonóma del Estado de Puebla",
  },
  {
    company: "Twitterlist",
    hexColor: "#5f8f7a",
    paragraphs:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    university: "Universidade do Amazonas",
  },
  {
    company: "Topicshots",
    hexColor: "#004215",
    paragraphs:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    university: "Drew University",
  },
  {
    company: "Voomm",
    hexColor: "#b97a8a",
    paragraphs:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    university: "Universidad Hispanoamericana",
  },
  {
    company: "Devshare",
    hexColor: "#f7341c",
    paragraphs:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    university: "Mendel University of Agriculture and Forestry",
  },
  {
    company: "Yadel",
    hexColor: "#37fab3",
    paragraphs:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    university: "Nippon Sport Science University",
  },
  {
    company: "Tagopia",
    hexColor: "#8e51d1",
    paragraphs:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    university: "Takoradi Polytechnic ",
  },
  {
    company: "Zoonder",
    hexColor: "#1330ed",
    paragraphs:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    university: "Universidad de Puerto Rico, Rio Pedras",
  },
  {
    company: "Yambee",
    hexColor: "#51c3c6",
    paragraphs:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    university: "Madhya Pradesh Bhoj (Open) University",
  },
  {
    company: "Fiveclub",
    hexColor: "#3959e3",
    paragraphs:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    university: "Staatlich anerkannte Fachhochschule für Kunsttherapie",
  },
  {
    company: "Latz",
    hexColor: "#b4a210",
    paragraphs:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    university: "University of Portharcourt",
  },
  {
    company: "Oodoo",
    hexColor: "#540e63",
    paragraphs:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    university: "Universidad Don Vasco",
  },
  {
    company: "Bubblemix",
    hexColor: "#f17ff2",
    paragraphs:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    university: "Cornish College of the Arts",
  },
  {
    company: "Skilith",
    hexColor: "#785f49",
    paragraphs:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    university:
      "Ecole Nationale Supérieure d'Agronomie et des Industries Alimentaires",
  },
  {
    company: "Twitterlist",
    hexColor: "#4024c0",
    paragraphs:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    university: "Mansoura University",
  },
  {
    company: "Izio",
    hexColor: "#e36813",
    paragraphs:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    university: "Albany College of Pharmacy",
  },
  {
    company: "Tagfeed",
    hexColor: "#87d676",
    paragraphs:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    university: "Universidad Finis Terrae",
  },
  {
    company: "Twitterlist",
    hexColor: "#e8bc45",
    paragraphs:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    university: "Finance Academy",
  },
  {
    company: "Katz",
    hexColor: "#3abb79",
    paragraphs:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    university: "Georgia School of Professional Psychology",
  },
  {
    company: "Twitterworks",
    hexColor: "#c434f2",
    paragraphs:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    university: "Universidad Empresarial",
  },
  {
    company: "Blogtags",
    hexColor: "#23c158",
    paragraphs:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    university: "St. Louis Christian College",
  },
  {
    company: "Twitterbridge",
    hexColor: "#e9b18a",
    paragraphs:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    university: "Universidad del Mayab",
  },
  {
    company: "Reallinks",
    hexColor: "#7b0ff2",
    paragraphs:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    university: "İstanbul Şehir University",
  },
  {
    company: "Demizz",
    hexColor: "#a50ba3",
    paragraphs:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    university: "Gujarat University Ahmedabad",
  },
  {
    company: "Kazio",
    hexColor: "#9a88c0",
    paragraphs:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    university: "Royal Melbourne Institute of Technology",
  },
  {
    company: "Jaxworks",
    hexColor: "#6cc243",
    paragraphs:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    university: "University of Pittsburgh",
  },
  {
    company: "Dabshots",
    hexColor: "#10d4c6",
    paragraphs:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    university: "United Arab Emirates University",
  },
  {
    company: "Jayo",
    hexColor: "#876a01",
    paragraphs:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    university: "University of California, Hastings College of Law",
  },
  {
    company: "Pixoboo",
    hexColor: "#db7d7d",
    paragraphs:
      "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    university: "Sichuan International Studies University",
  },
  {
    company: "Avaveo",
    hexColor: "#5f2803",
    paragraphs:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    university: "Private Hanseuniversität",
  },
  {
    company: "Feedmix",
    hexColor: "#f184a5",
    paragraphs:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    university: "Fukuoka Institute of Technology",
  },
  {
    company: "Zazio",
    hexColor: "#895e63",
    paragraphs:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    university: "Beijing University of Science and Technology",
  },
  {
    company: "Wikido",
    hexColor: "#f959b6",
    paragraphs:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    university: "Institute of Teachers Education, Darul Aman",
  },
  {
    company: "Gabspot",
    hexColor: "#819565",
    paragraphs:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    university: "Merkur Internationale FH Karlsruhe",
  },
  {
    company: "Zoomdog",
    hexColor: "#e3ec5a",
    paragraphs:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    university: "Pacific Northwest College of Art",
  },
  {
    company: "Wordify",
    hexColor: "#41f3f8",
    paragraphs:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    university:
      "Institute of Management & Enteurpreneurship of South East Europe",
  },
  {
    company: "Yombu",
    hexColor: "#fcbdb8",
    paragraphs:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    university: "University of Technology - Iraq",
  },
  {
    company: "Yamia",
    hexColor: "#60a416",
    paragraphs:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    university: "Kenya Methodist University",
  },
  {
    company: "Rhycero",
    hexColor: "#48d70f",
    paragraphs:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    university: "University College of Kristianstad",
  },
  {
    company: "Topiclounge",
    hexColor: "#309c6e",
    paragraphs:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    university: "Tbilisi Teaching University",
  },
  {
    company: "Jaxbean",
    hexColor: "#eebb09",
    paragraphs:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    university: "Aomori University of Health and Welfare",
  },
  {
    company: "Brainbox",
    hexColor: "#999b84",
    paragraphs:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    university: "Fine Arts Academy in Katowice",
  },
  {
    company: "Jamia",
    hexColor: "#b43b2b",
    paragraphs:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    university: 'University of Mining and Geology "St. Ivan Rils"',
  },
  {
    company: "Brightbean",
    hexColor: "#4750e7",
    paragraphs:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    university: "University of Texas at Dallas",
  },
  {
    company: "Blogtag",
    hexColor: "#fddb0b",
    paragraphs:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    university: "Universidad Bernardo O'Higgins",
  },
  {
    company: "Realblab",
    hexColor: "#eb6bcb",
    paragraphs:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    university: "Kanpur University",
  },
  {
    company: "Skipstorm",
    hexColor: "#7c4567",
    paragraphs:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    university: "Universidade Federal de Alagoas",
  },
  {
    company: "Realmix",
    hexColor: "#4ab341",
    paragraphs:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    university: "University of Maiduguri",
  },
  {
    company: "Dabvine",
    hexColor: "#f1945f",
    paragraphs:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    university: "Universite Amadou Hampaté Ba",
  },
  {
    company: "Fanoodle",
    hexColor: "#25ef6f",
    paragraphs:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    university: "Sur University College",
  },
  {
    company: "Npath",
    hexColor: "#dfc6a7",
    paragraphs:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    university: "University of Commerce Luigi Bocconi",
  },
  {
    company: "Jaxspan",
    hexColor: "#14e199",
    paragraphs:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    university: "Kyorin University",
  },
  {
    company: "Tazz",
    hexColor: "#9a3e7b",
    paragraphs:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    university: "Limestone College",
  },
  {
    company: "Tazz",
    hexColor: "#5c8f88",
    paragraphs:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    university: "Northern Institute of Technology Management (NIT)",
  },
  {
    company: "Skynoodle",
    hexColor: "#64d5f4",
    paragraphs:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    university: "Universidade Paulista",
  },
  {
    company: "Bluezoom",
    hexColor: "#890798",
    paragraphs:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    university: "Chulalongkorn University",
  },
  {
    company: "Agimba",
    hexColor: "#085bc4",
    paragraphs:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    university: "Universidad Autónoma de Madrid",
  },
  {
    company: "Zoomlounge",
    hexColor: "#cfcb0e",
    paragraphs:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    university: "Instituto Superior de Relações Internacionais (ISRI) ",
  },
  {
    company: "Thoughtbeat",
    hexColor: "#32ea9e",
    paragraphs:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    university: "Jahrom University of Medical Sciences",
  },
  {
    company: "Vinder",
    hexColor: "#2786e8",
    paragraphs:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    university: "Universidad Nacional Andrés Bello",
  },
  {
    company: "Kare",
    hexColor: "#14aa26",
    paragraphs:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    university:
      "Makhanlal Chaturvedi National University of Journalism and Communication",
  },
  {
    company: "Yambee",
    hexColor: "#64d79e",
    paragraphs:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    university: "Athens School of Fine Arts",
  },
  {
    company: "Voolith",
    hexColor: "#bea92f",
    paragraphs:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    university: "Universidad Central",
  },
  {
    company: "Skyvu",
    hexColor: "#91c589",
    paragraphs:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    university: "Pacific Adventist University",
  },
  {
    company: "Skyndu",
    hexColor: "#aff079",
    paragraphs:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    university: "Central Institute of Fisheries Education",
  },
  {
    company: "Tagopia",
    hexColor: "#ae277e",
    paragraphs:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    university: "Moscow State Institute of Steel and Alloys",
  },
  {
    company: "Voolia",
    hexColor: "#709c56",
    paragraphs:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    university: "Université de Bamako",
  },
  {
    company: "Skyvu",
    hexColor: "#4bcc32",
    paragraphs:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    university: "Universidade Federal do Paraná",
  },
  {
    company: "Geba",
    hexColor: "#ba6953",
    paragraphs:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    university: "Benson Idahosa University",
  },
  {
    company: "Abatz",
    hexColor: "#3755ff",
    paragraphs:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    university: "Xiangtan University",
  },
  {
    company: "Kazu",
    hexColor: "#5dfc1d",
    paragraphs:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    university: "Ludong University",
  },
  {
    company: "Bluejam",
    hexColor: "#242d11",
    paragraphs:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    university: "Beijing University of Aeronautics and Astronautics",
  },
  {
    company: "Demivee",
    hexColor: "#a24c6d",
    paragraphs:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    university: "Technological University (Maubin)",
  },
  {
    company: "Thoughtsphere",
    hexColor: "#2d7e54",
    paragraphs:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    university: "Roskilde University",
  },
  {
    company: "Jaxnation",
    hexColor: "#ae0b97",
    paragraphs:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    university: "Islamic Azad University, Boukan",
  },
  {
    company: "Zoomdog",
    hexColor: "#3d7aa4",
    paragraphs:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    university: "Cabrini College",
  },
  {
    company: "Quinu",
    hexColor: "#2c1173",
    paragraphs:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    university: "State University of New York at Albany",
  },
  {
    company: "Jaxworks",
    hexColor: "#c61172",
    paragraphs:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    university: "Sugino Women's College",
  },
  {
    company: "Blogtag",
    hexColor: "#ad1db3",
    paragraphs:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    university: "Universidad del Valle del Cauca",
  },
  {
    company: "Topicware",
    hexColor: "#ac15d9",
    paragraphs:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    university: "Drexel University",
  },
  {
    company: "Zoonder",
    hexColor: "#f841a2",
    paragraphs:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    university: "Universidad Internacional del Ecuador",
  },
  {
    company: "Youspan",
    hexColor: "#aa4437",
    paragraphs:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    university: "Universidade Vale do Rio dos Sinos",
  },
  {
    company: "Livetube",
    hexColor: "#4f809a",
    paragraphs:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    university: "Seattle University",
  },
  {
    company: "Quatz",
    hexColor: "#dc9365",
    paragraphs:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    university: "Botswana Accountancy College",
  },
  {
    company: "Voonyx",
    hexColor: "#35d0d9",
    paragraphs:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    university: "Indiana University - Northwest",
  },
  {
    company: "Yozio",
    hexColor: "#c1ed22",
    paragraphs:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    university: "Suzuka International University",
  },
  {
    company: "Feedbug",
    hexColor: "#acdb62",
    paragraphs:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    university: "Logan College of Chiropractic",
  },
  {
    company: "Katz",
    hexColor: "#936019",
    paragraphs:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
    university: "Institute of Teachers Education, Raja Melewar",
  },
  {
    company: "Kanoodle",
    hexColor: "#3845ab",
    paragraphs:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    university: "Islamic Azad University, Ahar",
  },
  {
    company: "Flipopia",
    hexColor: "#16838f",
    paragraphs:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    university: "Multnomah Bible College",
  },
  {
    company: "Divape",
    hexColor: "#9d1eee",
    paragraphs:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    university: "Kobe University of Mercantile Marine",
  },
  {
    company: "Devshare",
    hexColor: "#743e5d",
    paragraphs:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    university: "West Virginia University",
  },
  {
    company: "Yoveo",
    hexColor: "#037efd",
    paragraphs:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    university: " Akanu Ibiam Federal Polytechnic, Unwana",
  },
  {
    company: "Photolist",
    hexColor: "#2e642f",
    paragraphs:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    university: "Universidad de Oriente",
  },
  {
    company: "Flashdog",
    hexColor: "#fda00b",
    paragraphs:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    university: "Hokkaido University",
  },
  {
    company: "Zoozzy",
    hexColor: "#769c3e",
    paragraphs:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    university: "Al Yarmouk University College",
  },
  {
    company: "Kwideo",
    hexColor: "#09c7ef",
    paragraphs:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    university: "Sang Ji University",
  },
  {
    company: "Wikivu",
    hexColor: "#3034fe",
    paragraphs:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    university: "Benha University",
  },
  {
    company: "Gabvine",
    hexColor: "#ec645e",
    paragraphs:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    university: "Colorado State University-Pueblo",
  },
  {
    company: "Dabvine",
    hexColor: "#2f077c",
    paragraphs: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    university: "Université de Nice-Sophia Antipolis",
  },
  {
    company: "Viva",
    hexColor: "#634051",
    paragraphs:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    university: "Government College University Faisalabad",
  },
  {
    company: "Centidel",
    hexColor: "#941f84",
    paragraphs:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    university: "Universidad Salesiana",
  },
  {
    company: "Riffpedia",
    hexColor: "#3264ac",
    paragraphs:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    university: "Jaypee Institute of Information Technology",
  },
  {
    company: "Fliptune",
    hexColor: "#4cf2c8",
    paragraphs:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    university: "Kaplan University",
  },
  {
    company: "Camimbo",
    hexColor: "#dfefe5",
    paragraphs:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    university: "Kerala University of Fisheries and Ocean Sciences",
  },
  {
    company: "Fatz",
    hexColor: "#dfb300",
    paragraphs:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    university: "Novosibirsk State Academy of Economics and Mangement",
  },
  {
    company: "Kwilith",
    hexColor: "#94885f",
    paragraphs:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    university: "Mother Teresa Women's University",
  },
  {
    company: "Feedbug",
    hexColor: "#d89543",
    paragraphs:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    university: "Mount St. Mary College",
  },
  {
    company: "Quinu",
    hexColor: "#71c715",
    paragraphs:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    university: "Anhui University",
  },
  {
    company: "Brightbean",
    hexColor: "#b66de6",
    paragraphs:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    university: "Medical Academy in Gdansk",
  },
  {
    company: "Demimbu",
    hexColor: "#7f0dd7",
    paragraphs:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    university: "Ho Chi Minh City University of Natural Sciences",
  },
  {
    company: "Oyondu",
    hexColor: "#c21c34",
    paragraphs:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    university: "Gardner Webb University",
  },
  {
    company: "Agivu",
    hexColor: "#8f14c1",
    paragraphs:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    university: "Medical Academy of Latvia",
  },
  {
    company: "Skipstorm",
    hexColor: "#b72a90",
    paragraphs:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    university: "Northwestern College Iowa",
  },
  {
    company: "Mydeo",
    hexColor: "#1da0ec",
    paragraphs:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    university: "College of St. Mary",
  },
  {
    company: "Roombo",
    hexColor: "#7282bf",
    paragraphs:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    university: "Universidad EAFIT",
  },
  {
    company: "Voonix",
    hexColor: "#b02a7d",
    paragraphs:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    university: "Technische Universität Carolo-Wilhelmina Braunschweig",
  },
  {
    company: "Yodel",
    hexColor: "#17d9a9",
    paragraphs:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    university: "Far Eastern State University",
  },
  {
    company: "Dablist",
    hexColor: "#6d47ee",
    paragraphs:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    university: "York University",
  },
  {
    company: "Eamia",
    hexColor: "#3c5458",
    paragraphs:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    university: "Knowledge College for Science and Technology",
  },
  {
    company: "Gigashots",
    hexColor: "#b2f913",
    paragraphs:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    university: "Universidad Argentina de la Empresa",
  },
  {
    company: "Feedfire",
    hexColor: "#007a55",
    paragraphs:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    university: "Universidade Federal do Pará",
  },
  {
    company: "Photobug",
    hexColor: "#188f96",
    paragraphs:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    university: "Illinois State University",
  },
  {
    company: "Jayo",
    hexColor: "#cd8e0d",
    paragraphs:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    university: "Universidade Gregorio Semedo",
  },
  {
    company: "Yotz",
    hexColor: "#b93916",
    paragraphs:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    university:
      "Institut Supérieur de Commerce et d'Administration des Entreprises",
  },
  {
    company: "Zoomcast",
    hexColor: "#89108f",
    paragraphs:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    university: "Stetson University",
  },
  {
    company: "Browsebug",
    hexColor: "#ea3a87",
    paragraphs:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    university: "International Medical & Technological University",
  },
  {
    company: "Abatz",
    hexColor: "#3a9dfb",
    paragraphs:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    university: "Kigali Independent University",
  },
  {
    company: "Camido",
    hexColor: "#ec7b87",
    paragraphs:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    university: "University of Medicine and Pharmacology of Oradea",
  },
  {
    company: "Meetz",
    hexColor: "#c00bb6",
    paragraphs:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    university: "Poltava National Technical University",
  },
  {
    company: "Wordify",
    hexColor: "#4c65a7",
    paragraphs:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    university: "Polytechnic of Namibia",
  },
  {
    company: "Brightdog",
    hexColor: "#0afe79",
    paragraphs:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    university: "Kennesaw State University",
  },
  {
    company: "Demivee",
    hexColor: "#506498",
    paragraphs:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    university: "Miami University of Ohio - Middletown",
  },
  {
    company: "Zoonoodle",
    hexColor: "#06daf7",
    paragraphs:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    university: "Posts & Telecommunications Institute of Technology",
  },
  {
    company: "Ainyx",
    hexColor: "#10bac2",
    paragraphs:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    university: "Universidad de Cuautitlan Izcalli",
  },
  {
    company: "Skinder",
    hexColor: "#465530",
    paragraphs:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    university: "Universidad Nacional del Centro del Perú",
  },
  {
    company: "Topicshots",
    hexColor: "#fa80c8",
    paragraphs:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    university: "Nagano University",
  },
  {
    company: "Roombo",
    hexColor: "#699b14",
    paragraphs:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    university: 'Universidad Tecnologica "Vicente Perez Rosales"',
  },
  {
    company: "Bluejam",
    hexColor: "#ce6194",
    paragraphs:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    university: "Ummah University",
  },
  {
    company: "Blognation",
    hexColor: "#76bd77",
    paragraphs:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    university: "Amoud University",
  },
  {
    company: "Eayo",
    hexColor: "#cf3f09",
    paragraphs:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    university: "State University of West Georgia",
  },
  {
    company: "Quaxo",
    hexColor: "#4f5768",
    paragraphs:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    university: "Instituto Tecnológico Metropolitano",
  },
  {
    company: "Edgeblab",
    hexColor: "#5a289d",
    paragraphs:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    university: "University of Technical Education Ho Chi Minh City",
  },
  {
    company: "Wikizz",
    hexColor: "#46ecf5",
    paragraphs:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    university: "Hainan University",
  },
  {
    company: "Centidel",
    hexColor: "#cc0745",
    paragraphs:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    university: "Ho Chi Minh City University of Economics",
  },
  {
    company: "Tagpad",
    hexColor: "#35d61b",
    paragraphs:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    university: 'Universitatea de Vest "Vasile Goldi&#351;" ',
  },
  {
    company: "Oyoloo",
    hexColor: "#109de1",
    paragraphs:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    university: "Indian Institute of Technology, Delhi",
  },
  {
    company: "Vitz",
    hexColor: "#4fd61a",
    paragraphs:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    university: "Ocean University of China",
  },
  {
    company: "Flashspan",
    hexColor: "#4619f7",
    paragraphs:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    university: "Macau Polytechnic Institute",
  },
  {
    company: "Babbleopia",
    hexColor: "#6b97f7",
    paragraphs:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    university: "Sakushin Gakuin University",
  },
  {
    company: "Blogtags",
    hexColor: "#d02fb7",
    paragraphs:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    university: "University of Science, Arts and Technology",
  },
  {
    company: "Gabtype",
    hexColor: "#af8862",
    paragraphs:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    university: "The Robert Gordon University",
  },
  {
    company: "Jetwire",
    hexColor: "#b32380",
    paragraphs:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    university: "Université d'Antananarivo",
  },
  {
    company: "Kazio",
    hexColor: "#00e142",
    paragraphs:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    university: "Gunma University",
  },
  {
    company: "Photofeed",
    hexColor: "#e7d8b1",
    paragraphs:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    university: "Cheju National University",
  },
  {
    company: "Fiveclub",
    hexColor: "#0a275e",
    paragraphs:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    university: "University of Kirkuk",
  },
  {
    company: "Thoughtbridge",
    hexColor: "#ad4e16",
    paragraphs:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    university: "Institute of Teachers Education, Islamic Education",
  },
  {
    company: "Avavee",
    hexColor: "#093219",
    paragraphs:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    university:
      "Ecole Supérieure Internationale d'Administration des Entreprises",
  },
  {
    company: "Wordware",
    hexColor: "#4f8d2d",
    paragraphs:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    university: "Lahti Polytechnic",
  },
  {
    company: "Lajo",
    hexColor: "#a9da36",
    paragraphs:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    university: "Universidad de Morón",
  },
  {
    company: "Twitternation",
    hexColor: "#52df82",
    paragraphs:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    university: "University of Waterloo",
  },
  {
    company: "Vinte",
    hexColor: "#9de5bd",
    paragraphs:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    university: "Boise State University",
  },
  {
    company: "Vitz",
    hexColor: "#da225c",
    paragraphs:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    university: "Université Libre de Bruxelles",
  },
  {
    company: "Quatz",
    hexColor: "#81f8c4",
    paragraphs:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    university: "Universidad Andina del Cusco",
  },
  {
    company: "Edgewire",
    hexColor: "#73d109",
    paragraphs:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    university: "American University of Paris",
  },
  {
    company: "Leexo",
    hexColor: "#ed9bdc",
    paragraphs:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    university: "Fachhochschule Worms",
  },
  {
    company: "Brainverse",
    hexColor: "#437e9e",
    paragraphs:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    university: "Nepal Sanskrit University",
  },
  {
    company: "Twitternation",
    hexColor: "#7deb76",
    paragraphs:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    university: "Hokkaido Tokai University",
  },
  {
    company: "Linkbuzz",
    hexColor: "#fa1562",
    paragraphs:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    university: "Kiev National Economic University Named after Vadym Hetman",
  },
  {
    company: "Kazu",
    hexColor: "#d2e46b",
    paragraphs:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    university: "Pontificia Universidad Catolica de Chile",
  },
  {
    company: "Realpoint",
    hexColor: "#4b34ff",
    paragraphs:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    university: "Belarusian-Russian University",
  },
  {
    company: "Voonix",
    hexColor: "#882465",
    paragraphs:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    university: "Universidade Federal de Juiz de Fora",
  },
  {
    company: "Yozio",
    hexColor: "#a7175a",
    paragraphs:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    university: "St. John's & St. Mary's Institute of Technology",
  },
  {
    company: "Centidel",
    hexColor: "#617af6",
    paragraphs:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    university: "Avondale College",
  },
  {
    company: "Lajo",
    hexColor: "#9ac2e6",
    paragraphs:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    university: "University College of Arts, Crafts and Design",
  },
  {
    company: "Jayo",
    hexColor: "#5fa431",
    paragraphs:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    university: "Sage Graduate School",
  },
  {
    company: "Yacero",
    hexColor: "#56c120",
    paragraphs:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    university: "San Beda College",
  },
  {
    company: "Aimbo",
    hexColor: "#824c6e",
    paragraphs:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    university: "Nippon Institute of Technology",
  },
  {
    company: "Skiba",
    hexColor: "#95be4a",
    paragraphs:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    university: "Institute of Teachers Education, Kent",
  },
  {
    company: "Centizu",
    hexColor: "#92d269",
    paragraphs:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    university: "Presidency University",
  },
  {
    company: "Brainsphere",
    hexColor: "#b4eb23",
    paragraphs:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    university: "Kazakh British Technical University",
  },
  {
    company: "Thoughtbeat",
    hexColor: "#ac8018",
    paragraphs:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    university: "Svey Reong University",
  },
  {
    company: "Zooveo",
    hexColor: "#c2c9d5",
    paragraphs:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    university: "University of Louisville",
  },
  {
    company: "Skippad",
    hexColor: "#c618cf",
    paragraphs:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    university: "National College of Art and Design",
  },
  {
    company: "Skaboo",
    hexColor: "#8c374a",
    paragraphs:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    university: "Yaroslavl State Medical Academy",
  },
  {
    company: "Blogspan",
    hexColor: "#eddd86",
    paragraphs:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    university:
      "École nationale d'administration publique, Université du Québec",
  },
  {
    company: "Gabtype",
    hexColor: "#a03e81",
    paragraphs:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    university: "Hamdard University",
  },
  {
    company: "Ntags",
    hexColor: "#fcd465",
    paragraphs:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    university: "Universidad Politecnica de Nicaragua",
  },
  {
    company: "Jabbertype",
    hexColor: "#14cda5",
    paragraphs:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    university: "Regent College",
  },
  {
    company: "Meemm",
    hexColor: "#fc6d2a",
    paragraphs:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    university: "Shanghai Sanda University",
  },
  {
    company: "Quatz",
    hexColor: "#124c86",
    paragraphs:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    university: "Universidad de Puerto Rico, Carolina",
  },
  {
    company: "Jaxworks",
    hexColor: "#a0c911",
    paragraphs:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    university: "University of San Jose Recoletos",
  },
  {
    company: "Chatterbridge",
    hexColor: "#89aab1",
    paragraphs:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    university: "Nebraska Christian College",
  },
  {
    company: "Eazzy",
    hexColor: "#f3dcc2",
    paragraphs:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    university: "St. Petersburg State University of Engineering and Economics",
  },
  {
    company: "Gigashots",
    hexColor: "#8fa4d9",
    paragraphs:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    university: "Bayerische Julius-Maximilians-Universität Würzburg",
  },
  {
    company: "Yodel",
    hexColor: "#ad6f7d",
    paragraphs:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    university: "Brandeis University",
  },
  {
    company: "Kwinu",
    hexColor: "#4beef4",
    paragraphs:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    university: "Penang International Dental College",
  },
  {
    company: "Wikibox",
    hexColor: "#1ed269",
    paragraphs:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    university:
      "Nordakademie, Staatlich anerkannte private Fachhochschule mit dualen Studiengängen",
  },
  {
    company: "Abatz",
    hexColor: "#54de8c",
    paragraphs:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    university: "Georg-Simon-Ohm-Fachhochschule Nürnberg",
  },
  {
    company: "Livepath",
    hexColor: "#22d17d",
    paragraphs:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    university: "Thomas More College of Liberal Arts",
  },
  {
    company: "Latz",
    hexColor: "#9f1a70",
    paragraphs: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    university: "University of Kragujevac",
  },
  {
    company: "Kwinu",
    hexColor: "#cad464",
    paragraphs:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    university: "Palm Beach Atlantic University",
  },
  {
    company: "Jayo",
    hexColor: "#f47507",
    paragraphs:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    university:
      "Ecole Nationale Supérieure en Electrotechnique, Electronique, Informatique et Hydraulique de Toulouse",
  },
  {
    company: "Jabberstorm",
    hexColor: "#2ad64b",
    paragraphs:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    university: "University of Athens",
  },
  {
    company: "Latz",
    hexColor: "#9f1eba",
    paragraphs:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    university: "Université Charles-de-Gaulle (Lille III)",
  },
  {
    company: "Zoonder",
    hexColor: "#ea009d",
    paragraphs:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    university: "West Virginia School of Osteopathic Medicine",
  },
  {
    company: "Leexo",
    hexColor: "#59f190",
    paragraphs:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    university: "Faculté Universitaire des Sciences Agronomiques de Gembloux",
  },
  {
    company: "Feedfish",
    hexColor: "#53898f",
    paragraphs:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    university: "Instituto Universitario CEMA",
  },
  {
    company: "Kamba",
    hexColor: "#941009",
    paragraphs:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    university: "Aligarh Muslim University",
  },
  {
    company: "Feedspan",
    hexColor: "#fd3a9b",
    paragraphs:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    university: "Freie Universität Berlin",
  },
  {
    company: "Brightdog",
    hexColor: "#5eb0a0",
    paragraphs:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    university: "Florida Metropolitan University, Tampa College",
  },
  {
    company: "Realpoint",
    hexColor: "#81296c",
    paragraphs:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    university: "Brno University of Technology",
  },
  {
    company: "Bluezoom",
    hexColor: "#eee4aa",
    paragraphs:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    university: "London Institute of Management and Technology",
  },
  {
    company: "Voonix",
    hexColor: "#3c43d6",
    paragraphs:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    university: "Soutsaka Institute of management and Technology",
  },
  {
    company: "Zava",
    hexColor: "#921b72",
    paragraphs:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    university: "Avicenna International College",
  },
  {
    company: "Tagtune",
    hexColor: "#c0ac1a",
    paragraphs:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    university: "Sulaimani Polytechnic University",
  },
  {
    company: "Avamm",
    hexColor: "#7dac74",
    paragraphs:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    university: "Shahjalal University of Science and Technology",
  },
  {
    company: "Aimbu",
    hexColor: "#ac5c6b",
    paragraphs:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    university: "Ecole Supérieure de Commerce de Brest",
  },
  {
    company: "Yotz",
    hexColor: "#e5d6bb",
    paragraphs:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    university: "American University of Middle East",
  },
  {
    company: "JumpXS",
    hexColor: "#fff9bd",
    paragraphs:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    university: "International School of Management ISM Dortmund",
  },
  {
    company: "Linkbuzz",
    hexColor: "#2fa5b1",
    paragraphs:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    university: "Crichton College",
  },
  {
    company: "Skiba",
    hexColor: "#c226ea",
    paragraphs:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    university: "Xihua University",
  },
  {
    company: "Janyx",
    hexColor: "#65984f",
    paragraphs:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    university: "GC University",
  },
  {
    company: "Kamba",
    hexColor: "#d6b45b",
    paragraphs:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    university: "St. Petersburg State Electrotechnical University",
  },
  {
    company: "Thoughtmix",
    hexColor: "#db03c1",
    paragraphs:
      "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    university: "Adventist University of the Philippines",
  },
  {
    company: "Voomm",
    hexColor: "#902d42",
    paragraphs:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    university: "University of South Carolina - Aiken",
  },
  {
    company: "Jetwire",
    hexColor: "#930a1b",
    paragraphs:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    university: "University of Insurance and Banking in Warsaw",
  },
  {
    company: "Buzzdog",
    hexColor: "#9e92b2",
    paragraphs:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    university: "Yunnan University",
  },
  {
    company: "Devcast",
    hexColor: "#718db4",
    paragraphs:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    university: "Leiden University",
  },
  {
    company: "Aimbo",
    hexColor: "#bc5bb5",
    paragraphs:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    university: "University of Peshawar",
  },
  {
    company: "Jabberstorm",
    hexColor: "#e36076",
    paragraphs:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    university: "St. Louis University",
  },
  {
    company: "Gabcube",
    hexColor: "#bf7d80",
    paragraphs:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    university:
      "Schiller International University, American College of Switzerland",
  },
  {
    company: "Vitz",
    hexColor: "#cf5d14",
    paragraphs: "Fusce consequat. Nulla nisl. Nunc nisl.",
    university: "Universidad Pedagógica Experimental Libertador",
  },
  {
    company: "Yakidoo",
    hexColor: "#d260cc",
    paragraphs:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    university: "AISECT University",
  },
  {
    company: "Gabspot",
    hexColor: "#43e3a6",
    paragraphs:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    university: "University of Sarajevo",
  },
  {
    company: "Feednation",
    hexColor: "#799267",
    paragraphs:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    university: "Northwest College of Art",
  },
  {
    company: "Plambee",
    hexColor: "#cb8d4b",
    paragraphs:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    university: "Zaman University",
  },
  {
    company: "Leenti",
    hexColor: "#63ea68",
    paragraphs:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    university: "East Delta University",
  },
  {
    company: "Babbleopia",
    hexColor: "#9928c1",
    paragraphs:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    university: "Johnson County Community College",
  },
  {
    company: "Centimia",
    hexColor: "#0fc550",
    paragraphs:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    university: "The College of New Jersey",
  },
  {
    company: "Topicware",
    hexColor: "#9353e4",
    paragraphs:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    university: "Bennett College",
  },
  {
    company: "Aibox",
    hexColor: "#e86e8b",
    paragraphs:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    university: "Indian Statistical Institute",
  },
  {
    company: "Wikivu",
    hexColor: "#fb97ea",
    paragraphs:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    university: "DeVry Institute of Technology, Columbus",
  },
  {
    company: "Snaptags",
    hexColor: "#c9e3fe",
    paragraphs:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    university: "Saint Paul University",
  },
  {
    company: "Ainyx",
    hexColor: "#721b41",
    paragraphs:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    university: "University of Goroka",
  },
  {
    company: "Bubblebox",
    hexColor: "#40f168",
    paragraphs:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    university: "School of Education Pisa",
  },
  {
    company: "Gigazoom",
    hexColor: "#4d7baf",
    paragraphs:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    university: "American Academy of Nutrition",
  },
  {
    company: "Realbridge",
    hexColor: "#5ea974",
    paragraphs:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    university: "Ama International University",
  },
  {
    company: "Pixope",
    hexColor: "#a1f042",
    paragraphs:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    university: "Universitas Merdeka Madiun",
  },
  {
    company: "Thoughtworks",
    hexColor: "#39cd35",
    paragraphs:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    university: "Technikum Wien",
  },
  {
    company: "Flashpoint",
    hexColor: "#df653b",
    paragraphs:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    university: "University of Dammam",
  },
  {
    company: "Lazzy",
    hexColor: "#2f9bd7",
    paragraphs:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    university: "University of Ostrava",
  },
  {
    company: "Jayo",
    hexColor: "#1425a1",
    paragraphs:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    university: "Koc University",
  },
  {
    company: "Eazzy",
    hexColor: "#65b9c9",
    paragraphs:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    university: "Politeknik Pos Indonesia",
  },
  {
    company: "Vimbo",
    hexColor: "#70f82f",
    paragraphs:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    university: "Khalifa University of Science, Technology and Research",
  },
  {
    company: "Oba",
    hexColor: "#089b17",
    paragraphs:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    university: "Asia Europe University",
  },
  {
    company: "Skipstorm",
    hexColor: "#a42b5f",
    paragraphs:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    university: "Immanuel Kant State University of Russia",
  },
  {
    company: "Feedfish",
    hexColor: "#a56f69",
    paragraphs:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    university: "Mount Mary College",
  },
  {
    company: "Abatz",
    hexColor: "#7b5707",
    paragraphs:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    university: "Escola Superior de Hotelaria e Turismo do Estoril",
  },
  {
    company: "Cogilith",
    hexColor: "#415f2f",
    paragraphs:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    university: "Kalamazoo College",
  },
  {
    company: "Podcat",
    hexColor: "#d0b7e8",
    paragraphs:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    university: "Sunmoon University",
  },
  {
    company: "Tagcat",
    hexColor: "#d62069",
    paragraphs:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    university: "Johnson & Wales University",
  },
  {
    company: "Yacero",
    hexColor: "#3bc17d",
    paragraphs:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    university: "Emeishan Buddhist College",
  },
  {
    company: "Kwimbee",
    hexColor: "#b59a20",
    paragraphs:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    university: "Universidad Andina Nestor Caceares Velasquez",
  },
  {
    company: "Demizz",
    hexColor: "#2ff681",
    paragraphs:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    university: "Centre National d'Etudes Agronomiques des Régions Chaudes",
  },
  {
    company: "Devpulse",
    hexColor: "#960fbd",
    paragraphs:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    university: "Kure University",
  },
  {
    company: "Pixoboo",
    hexColor: "#c67f39",
    paragraphs:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    university: "State University of New York at Oswego",
  },
  {
    company: "Topiczoom",
    hexColor: "#bcca02",
    paragraphs:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    university: "Drew University",
  },
  {
    company: "BlogXS",
    hexColor: "#c133c0",
    paragraphs:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    university: "Universidad Particular de Chiclayo",
  },
  {
    company: "Feedmix",
    hexColor: "#d5fc88",
    paragraphs:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    university: "Toho Gakuen School of Music",
  },
  {
    company: "Youspan",
    hexColor: "#341b95",
    paragraphs:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    university: "Universidad Americana",
  },
  {
    company: "Centidel",
    hexColor: "#6533d6",
    paragraphs:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    university: "Kwame Nkrumah University of Science and Technology",
  },
  {
    company: "Photobug",
    hexColor: "#a070d0",
    paragraphs:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    university: "National College of Art and Design",
  },
  {
    company: "Meemm",
    hexColor: "#cfccda",
    paragraphs:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    university: "Izhevsk State Technical University",
  },
  {
    company: "Youtags",
    hexColor: "#93547e",
    paragraphs:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    university: "Tougaloo College",
  },
  {
    company: "Kazu",
    hexColor: "#64c195",
    paragraphs:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    university: 'Universidad Técnica "Federico Santa María"',
  },
  {
    company: "Dynabox",
    hexColor: "#638a71",
    paragraphs:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    university: "Ecole Nationale Supérieure de Physique de Strasbourg",
  },
  {
    company: "Twitterbridge",
    hexColor: "#d1d150",
    paragraphs:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    university: "Baker College of Muskegon",
  },
  {
    company: "Topdrive",
    hexColor: "#991d4e",
    paragraphs:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    university: "Yorker International University, Athens",
  },
  {
    company: "Babblestorm",
    hexColor: "#b58b6a",
    paragraphs:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    university: "University Institute of Naval Studies",
  },
  {
    company: "Quamba",
    hexColor: "#028642",
    paragraphs:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    university: "John Paul the Great Catholic University",
  },
  {
    company: "Eimbee",
    hexColor: "#71fcc9",
    paragraphs:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    university: "Tianjin University of Technology",
  },
  {
    company: "Skaboo",
    hexColor: "#da5c3c",
    paragraphs:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    university: "National University of Science and Technology",
  },
  {
    company: "Skajo",
    hexColor: "#d338d8",
    paragraphs:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    university: "Université des Sciences et Technologies de Lille (Lille I)",
  },
  {
    company: "Camimbo",
    hexColor: "#35fce5",
    paragraphs:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    university: "The Corcoran College of Art",
  },
  {
    company: "Skinte",
    hexColor: "#802c8c",
    paragraphs:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    university: "Liceo de Cagayan University",
  },
  {
    company: "Muxo",
    hexColor: "#d865f9",
    paragraphs:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    university: "Bangladesh University of Professionals",
  },
  {
    company: "Avamba",
    hexColor: "#7c95ef",
    paragraphs:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    university: "Al-Yamamah College",
  },
  {
    company: "Gabvine",
    hexColor: "#46cda6",
    paragraphs:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    university: "Universidad Alfonso X El Sabio",
  },
  {
    company: "Dynazzy",
    hexColor: "#2eba10",
    paragraphs:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    university: "Hokkaigakuen University",
  },
  {
    company: "Skippad",
    hexColor: "#c3f57a",
    paragraphs:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    university: "Abilene Christian University",
  },
  {
    company: "Zoomdog",
    hexColor: "#b39d10",
    paragraphs:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    university: "Universidad Veritas",
  },
  {
    company: "Vinte",
    hexColor: "#29941d",
    paragraphs:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    university: "Universidad CES",
  },
  {
    company: "Tagcat",
    hexColor: "#a4c15b",
    paragraphs: "Fusce consequat. Nulla nisl. Nunc nisl.",
    university: "College of Mount St. Joseph",
  },
  {
    company: "Jamia",
    hexColor: "#40cde5",
    paragraphs:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    university: "Universidad Nacional de Cajamarca",
  },
  {
    company: "Einti",
    hexColor: "#518120",
    paragraphs:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    university: "Université de Corse Pascal Paoli",
  },
  {
    company: "Quatz",
    hexColor: "#40fa83",
    paragraphs:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    university: "Fukuoka University",
  },
  {
    company: "Jabberstorm",
    hexColor: "#7b58d4",
    paragraphs:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    university: "Concordia College, St. Paul",
  },
  {
    company: "Blogtag",
    hexColor: "#f073bc",
    paragraphs:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    university: "Humber College",
  },
  {
    company: "Abata",
    hexColor: "#e8ed0b",
    paragraphs:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    university: "Ramkhamhaeng University",
  },
  {
    company: "Thoughtmix",
    hexColor: "#7d4867",
    paragraphs:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    university: "Annamalai University",
  },
  {
    company: "Thoughtbeat",
    hexColor: "#5e998e",
    paragraphs:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    university: "Faisalabad Institute of Textile and Fashion Design",
  },
  {
    company: "Quinu",
    hexColor: "#3af133",
    paragraphs:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    university: "College of Nursing and Allied Health Scinces",
  },
  {
    company: "Gabtype",
    hexColor: "#a1e78d",
    paragraphs:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    university: "Ecole Nationale Supérieure de Chimie de Clermont-Ferrand",
  },
  {
    company: "Skiptube",
    hexColor: "#e6fdd7",
    paragraphs:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    university: "Haverford College",
  },
  {
    company: "Geba",
    hexColor: "#bf355b",
    paragraphs:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    university: "Abylai Khan University",
  },
  {
    company: "Yacero",
    hexColor: "#6ac132",
    paragraphs:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    university: "Pomona College",
  },
  {
    company: "Thoughtmix",
    hexColor: "#f44a55",
    paragraphs:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    university: "Berne University",
  },
  {
    company: "Youopia",
    hexColor: "#58a4c3",
    paragraphs:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    university: "Nova Southeastern University",
  },
  {
    company: "Eidel",
    hexColor: "#d3040e",
    paragraphs:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    university: "United States International University",
  },
  {
    company: "Layo",
    hexColor: "#cf89d1",
    paragraphs:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    university: "Iact College",
  },
  {
    company: "Zoomlounge",
    hexColor: "#c8b045",
    paragraphs:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    university: "Kobe University of Mercantile Marine",
  },
  {
    company: "Skalith",
    hexColor: "#8de119",
    paragraphs:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    university: "Nagoya Institute of Technology",
  },
  {
    company: "Realfire",
    hexColor: "#201eef",
    paragraphs:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    university: "Kharkiv National University of Economics",
  },
  {
    company: "Rhycero",
    hexColor: "#09b247",
    paragraphs:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    university: "Near East School of Theology",
  },
  {
    company: "Eamia",
    hexColor: "#2c4265",
    paragraphs:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    university: "International School of Management",
  },
  {
    company: "Chatterbridge",
    hexColor: "#557873",
    paragraphs:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    university: "Korea National University of Arts",
  },
  {
    company: "Leexo",
    hexColor: "#ddaf47",
    paragraphs:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    university: "University of Targu Jiu",
  },
  {
    company: "Eazzy",
    hexColor: "#7c4646",
    paragraphs:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    university: "Darul Quran Islamic College University",
  },
  {
    company: "Mydo",
    hexColor: "#6bc481",
    paragraphs:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    university: "Northeast Agricultural University",
  },
  {
    company: "Geba",
    hexColor: "#388242",
    paragraphs:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    university: "Centro Universitário Monte Serrat",
  },
  {
    company: "Skalith",
    hexColor: "#af30eb",
    paragraphs:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    university: "Hyrcania Institute of Higher Education",
  },
  {
    company: "Oloo",
    hexColor: "#5ff5b9",
    paragraphs:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    university: "Universidad Amazonica de Pando",
  },
  {
    company: "Skajo",
    hexColor: "#c4ce97",
    paragraphs:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    university: "University of California, Santa Barbara",
  },
  {
    company: "Bluezoom",
    hexColor: "#38c630",
    paragraphs:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    university: "Tyumen State University",
  },
  {
    company: "Tagpad",
    hexColor: "#0e61a8",
    paragraphs:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    university: "Iwaki Meisei University",
  },
  {
    company: "Flashdog",
    hexColor: "#f89b97",
    paragraphs:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    university: "Waynesburg College",
  },
  {
    company: "Fadeo",
    hexColor: "#b2ade6",
    paragraphs:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    university: "Minnesota School of Professional Psychology",
  },
  {
    company: "Pixonyx",
    hexColor: "#271669",
    paragraphs:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    university: "Fitchburg State College",
  },
  {
    company: "Quimba",
    hexColor: "#e11927",
    paragraphs:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    university: "Phillips Graduate Institute",
  },
  {
    company: "Brainsphere",
    hexColor: "#14cf00",
    paragraphs:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    university: "Huaihua Radio and Television University",
  },
  {
    company: "Vimbo",
    hexColor: "#97e54d",
    paragraphs: "Fusce consequat. Nulla nisl. Nunc nisl.",
    university: "University of Kelaniya",
  },
  {
    company: "Thoughtworks",
    hexColor: "#3c6030",
    paragraphs:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    university: "Thomas A. Edison State College",
  },
  {
    company: "Kazio",
    hexColor: "#1bddd5",
    paragraphs:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    university: "Université Claude Bernard (Lyon I)",
  },
  {
    company: "Snaptags",
    hexColor: "#4dfd68",
    paragraphs:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    university: "Mahasarakham University",
  },
  {
    company: "Edgewire",
    hexColor: "#ea788b",
    paragraphs:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    university: "Girne American University",
  },
  {
    company: "Abatz",
    hexColor: "#61bc97",
    paragraphs:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    university: "Shiga University of Medical Science",
  },
  {
    company: "Leenti",
    hexColor: "#7ff2f9",
    paragraphs:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    university: "Massachusetts College of Liberal Arts",
  },
  {
    company: "Devcast",
    hexColor: "#edea44",
    paragraphs:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    university: "Loyola College in Maryland",
  },
  {
    company: "Fivechat",
    hexColor: "#187323",
    paragraphs:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    university:
      "Ecole Nationale Supérieure de Chimie et de Physique de Bordeaux",
  },
  {
    company: "Youspan",
    hexColor: "#3c6fe4",
    paragraphs:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    university: "Greenford International University",
  },
  {
    company: "Realmix",
    hexColor: "#aeea2f",
    paragraphs:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    university: "Ecole Nationale des Travaux Publics de l'Etat",
  },
  {
    company: "Twimm",
    hexColor: "#54fc13",
    paragraphs:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    university: "Universidad Católica del Norte",
  },
  {
    company: "Zava",
    hexColor: "#d98770",
    paragraphs:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    university: "CCS Haryana Agricultural University",
  },
  {
    company: "Quimba",
    hexColor: "#677fe3",
    paragraphs:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    university: "Premier University",
  },
  {
    company: "Aivee",
    hexColor: "#d18853",
    paragraphs:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    university: "Universidad de Panamá",
  },
  {
    company: "Topiclounge",
    hexColor: "#de998d",
    paragraphs:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    university: "Université de Limoges",
  },
  {
    company: "Edgepulse",
    hexColor: "#940c68",
    paragraphs:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    university: "Universidad San Marcos",
  },
  {
    company: "Einti",
    hexColor: "#5ed824",
    paragraphs:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    university: "Grodno State University Yanka Kupaly",
  },
  {
    company: "Trilith",
    hexColor: "#75666c",
    paragraphs:
      "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    university: "Centre Universitaire de Jijel",
  },
  {
    company: "Zoomdog",
    hexColor: "#59aafe",
    paragraphs:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    university: "Universidad Nacional de Salta",
  },
  {
    company: "Aimbu",
    hexColor: "#8ec08e",
    paragraphs:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    university: "Augustana Hochschule Neuendettelsau",
  },
  {
    company: "Wordware",
    hexColor: "#871eeb",
    paragraphs:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    university: "University of Puget Sound",
  },
  {
    company: "Voolith",
    hexColor: "#83cacf",
    paragraphs:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    university: "Coastal Carolina University",
  },
  {
    company: "Devbug",
    hexColor: "#cd32c3",
    paragraphs:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    university: "University of Wroclaw",
  },
  {
    company: "Digitube",
    hexColor: "#e8e26a",
    paragraphs:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    university: "Gubkin Russian State University of Oil and Gas",
  },
  {
    company: "Tanoodle",
    hexColor: "#42a265",
    paragraphs:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    university: "Aegean University",
  },
  {
    company: "Trilith",
    hexColor: "#b97d8c",
    paragraphs:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    university: "Al Ghurair University",
  },
  {
    company: "Thoughtmix",
    hexColor: "#410cc6",
    paragraphs:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    university: "Arkansas State University",
  },
  {
    company: "Shufflester",
    hexColor: "#103a58",
    paragraphs:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    university: 'University Center "César Ritz"',
  },
  {
    company: "Flashpoint",
    hexColor: "#95bf28",
    paragraphs:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    university: "Universidade Federal da Bahia",
  },
  {
    company: "Trunyx",
    hexColor: "#8a1ef1",
    paragraphs:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    university: "Universitas Islam Sumatera Utara",
  },
  {
    company: "Yabox",
    hexColor: "#d79693",
    paragraphs:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    university: "Royal Free Hospital School of Medicine, University of London",
  },
  {
    company: "Plajo",
    hexColor: "#794d79",
    paragraphs:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    university: "Yugra State University",
  },
  {
    company: "Kanoodle",
    hexColor: "#8a8857",
    paragraphs:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    university: "University of Medicine and Pharmacy of Bucharest",
  },
  {
    company: "LiveZ",
    hexColor: "#df3a8c",
    paragraphs:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    university: "Al-Wataniya Private University",
  },
  {
    company: "Livetube",
    hexColor: "#76c761",
    paragraphs:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    university: "Qingdao University of Science and Technology",
  },
  {
    company: "Eire",
    hexColor: "#c23e71",
    paragraphs:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    university: "Universitas Mataram",
  },
  {
    company: "Riffwire",
    hexColor: "#db5c17",
    paragraphs:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    university: "Libera Università degli Studi di Scienze Umane e Tecnologiche",
  },
  {
    company: "Myworks",
    hexColor: "#c0d777",
    paragraphs:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    university: "University of Sargodha",
  },
  {
    company: "Divanoodle",
    hexColor: "#af2157",
    paragraphs: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    university: "Toyama Prefectural University",
  },
  {
    company: "Browsetype",
    hexColor: "#f22680",
    paragraphs:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    university: "Universidad Nueva San Salvador",
  },
  {
    company: "Kare",
    hexColor: "#ec4b1b",
    paragraphs:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    university: "University of Mysore",
  },
  {
    company: "InnoZ",
    hexColor: "#1d7065",
    paragraphs:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    university: "Universidad de Tarapacá",
  },
  {
    company: "Quamba",
    hexColor: "#349104",
    paragraphs:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    university: "Al-Ahliyya Amman University",
  },
  {
    company: "Jamia",
    hexColor: "#5882cb",
    paragraphs:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    university: "California State University, Fullerton",
  },
  {
    company: "Trunyx",
    hexColor: "#eda397",
    paragraphs:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    university: "Paris-Sorbonne University Abu Dhabi",
  },
  {
    company: "Devshare",
    hexColor: "#69a946",
    paragraphs:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    university: "Brescia University",
  },
  {
    company: "Skynoodle",
    hexColor: "#39bc31",
    paragraphs:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    university: "San Jose Christian College",
  },
  {
    company: "Livetube",
    hexColor: "#8cfecf",
    paragraphs:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    university:
      "Virginia Polytechnic Institute and State University (Virginia Tech)",
  },
  {
    company: "Abata",
    hexColor: "#10df38",
    paragraphs:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    university: "Husson College",
  },
  {
    company: "Twitterbridge",
    hexColor: "#a65629",
    paragraphs:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    university: "Universitas Sebelas Maret",
  },
  {
    company: "Realpoint",
    hexColor: "#4d8ed0",
    paragraphs:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    university: "Perm State University",
  },
  {
    company: "Skibox",
    hexColor: "#d91803",
    paragraphs:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    university: "Rajasthan Technical University",
  },
  {
    company: "Livefish",
    hexColor: "#182ef3",
    paragraphs:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    university: "Omsk State Transport University",
  },
  {
    company: "Gabtune",
    hexColor: "#c1fb25",
    paragraphs:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    university: "University of Ottawa",
  },
  {
    company: "Topicshots",
    hexColor: "#10a7e3",
    paragraphs:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    university: "Ruprecht-Karls-Universität Heidelberg",
  },
  {
    company: "Lazz",
    hexColor: "#bee344",
    paragraphs:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    university: "Arak University",
  },
  {
    company: "Feednation",
    hexColor: "#3b62db",
    paragraphs:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    university: "Minhaj University Lahore",
  },
  {
    company: "Fivebridge",
    hexColor: "#903d7a",
    paragraphs:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    university: "Yorker International University, Athens",
  },
  {
    company: "Realbridge",
    hexColor: "#6a5aa6",
    paragraphs:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    university: "Ibaraki University",
  },
  {
    company: "Yakidoo",
    hexColor: "#fe8b25",
    paragraphs:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    university: "Ross University Caribbean School of Veterinary Medicine",
  },
  {
    company: "Wordware",
    hexColor: "#836724",
    paragraphs:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    university: "University of Medicine and Pharmacy of Cluj-Napoca",
  },
  {
    company: "Aimbo",
    hexColor: "#9275ac",
    paragraphs:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    university: "Free University (Virginia Theological University)",
  },
  {
    company: "Skalith",
    hexColor: "#c03090",
    paragraphs:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    university: "Taiyuan University of Technology",
  },
  {
    company: "Zoombox",
    hexColor: "#135651",
    paragraphs:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    university: "University of Agriculture Faisalabad",
  },
  {
    company: "Tazz",
    hexColor: "#5ffc6a",
    paragraphs:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    university: "Qinghai University",
  },
  {
    company: "Wikibox",
    hexColor: "#a589d1",
    paragraphs:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    university: "West Virginia State College",
  },
  {
    company: "Eazzy",
    hexColor: "#d8f34e",
    paragraphs:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    university: "Shantou University",
  },
  {
    company: "BlogXS",
    hexColor: "#8d950a",
    paragraphs:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    university: "Mount Olive College",
  },
  {
    company: "Flashset",
    hexColor: "#7a0abb",
    paragraphs:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    university: "Universidad Autónoma Gabriel René Moreno",
  },
  {
    company: "Dabfeed",
    hexColor: "#26cb9c",
    paragraphs:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    university: "University of Turin",
  },
  {
    company: "Yata",
    hexColor: "#16503a",
    paragraphs:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    university: "Liaocheng Teachers University",
  },
  {
    company: "Pixoboo",
    hexColor: "#609a1e",
    paragraphs:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    university: "Institute of Teachers Education, Islamic Education",
  },
  {
    company: "Blogpad",
    hexColor: "#5957c3",
    paragraphs:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    university: "Universidad Especializada de Las Americas",
  },
  {
    company: "Photobug",
    hexColor: "#2a2088",
    paragraphs:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    university: "Universidad Centroamericana",
  },
  {
    company: "Zoozzy",
    hexColor: "#9f6a7b",
    paragraphs:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    university: "Technical University of Iasi",
  },
  {
    company: "Gigashots",
    hexColor: "#0ff5ef",
    paragraphs:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    university: "Palmer College of Chiropractic",
  },
  {
    company: "Skimia",
    hexColor: "#c95bbe",
    paragraphs:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    university:
      'University for Information Science and Technology  "St. Paul The Apostle" ',
  },
  {
    company: "Realfire",
    hexColor: "#793ff8",
    paragraphs:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    university: "Shizuoka Sangyo University",
  },
  {
    company: "Trudeo",
    hexColor: "#0700c9",
    paragraphs:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    university: "Vikrama Simhapuri University",
  },
  {
    company: "Zoombeat",
    hexColor: "#f2bd2f",
    paragraphs:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    university: "Universidad Los Andes",
  },
  {
    company: "Browseblab",
    hexColor: "#350172",
    paragraphs:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    university: "St. Marianna University School of Medicine",
  },
  {
    company: "Edgewire",
    hexColor: "#7bafa4",
    paragraphs:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    university: 'Universidad Nacional Experimental "Francisco de Miranda"',
  },
  {
    company: "Realpoint",
    hexColor: "#1f4338",
    paragraphs: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    university: "Bindura University of Science Education",
  },
  {
    company: "Twinder",
    hexColor: "#18ce91",
    paragraphs: "Fusce consequat. Nulla nisl. Nunc nisl.",
    university: "Universidad de Ciencias de la Informatica",
  },
  {
    company: "Lajo",
    hexColor: "#dee7cd",
    paragraphs:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    university: "Université de Liège",
  },
  {
    company: "Browsezoom",
    hexColor: "#fed0e4",
    paragraphs:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    university: "College of the Ozarks",
  },
  {
    company: "Wordify",
    hexColor: "#220a49",
    paragraphs:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    university: "Institut Prima Bestari - Pine Academy ",
  },
  {
    company: "Youspan",
    hexColor: "#a82291",
    paragraphs:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    university: "Institute of Germanic Studies, University of London",
  },
  {
    company: "Oyondu",
    hexColor: "#47e3d2",
    paragraphs:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    university: "Rheinische Friedrich-Wilhelms Universität Bonn",
  },
  {
    company: "Oyonder",
    hexColor: "#39ef06",
    paragraphs:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    university: "Moldova Cooperative Trade University",
  },
  {
    company: "Trudoo",
    hexColor: "#88095e",
    paragraphs:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    university: "Universidad Tecnológica de los Andes de Apurímac",
  },
  {
    company: "Aibox",
    hexColor: "#83280b",
    paragraphs:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    university: "Université de Fianarantsoa",
  },
  {
    company: "Skibox",
    hexColor: "#dd2478",
    paragraphs:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    university: "Metropolitan University",
  },
  {
    company: "Twitterlist",
    hexColor: "#b857b0",
    paragraphs:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    university: "Taylor University, Fort Wayne Campus",
  },
  {
    company: "Kanoodle",
    hexColor: "#637e18",
    paragraphs:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    university: "Louisiana State University Health Sciences Center New Orleans",
  },
  {
    company: "Oyoba",
    hexColor: "#8b21bf",
    paragraphs:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    university: "Syrian Virtual University",
  },
  {
    company: "Trupe",
    hexColor: "#46ffad",
    paragraphs:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    university: "Queen Arwa University",
  },
  {
    company: "Babbleblab",
    hexColor: "#486a24",
    paragraphs:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    university: "Araullo University",
  },
  {
    company: "Kimia",
    hexColor: "#1fdac6",
    paragraphs:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    university: "Pontificio Ateneo Antonianum",
  },
  {
    company: "Shufflebeat",
    hexColor: "#25f16a",
    paragraphs:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    university: "High Institute for Banking & Financial Studies",
  },
  {
    company: "Babblestorm",
    hexColor: "#3047de",
    paragraphs:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    university: "College of William and Mary",
  },
  {
    company: "LiveZ",
    hexColor: "#13ac01",
    paragraphs:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    university: "Université de Marne la Vallée",
  },
  {
    company: "Vidoo",
    hexColor: "#750045",
    paragraphs:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    university: "Universidad de Comunicación Avanzada",
  },
  {
    company: "Zava",
    hexColor: "#b78cf8",
    paragraphs:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    university: "Ilsa Independent College",
  },
  {
    company: "Skimia",
    hexColor: "#682179",
    paragraphs:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    university: "Shaheed Beheshti University",
  },
  {
    company: "Agimba",
    hexColor: "#348092",
    paragraphs:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    university: "Universidad Autónoma Metropolitana - Iztapalapa",
  },
  {
    company: "Kazu",
    hexColor: "#514038",
    paragraphs:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    university: "Arab Academy for Science & Technology",
  },
  {
    company: "Yamia",
    hexColor: "#b69676",
    paragraphs:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    university: "Universidade de Brasília",
  },
  {
    company: "Mudo",
    hexColor: "#86c702",
    paragraphs:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    university: "Near East School of Theology",
  },
  {
    company: "Mybuzz",
    hexColor: "#8515a0",
    paragraphs:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    university: "Universidad del Azuay",
  },
  {
    company: "Plambee",
    hexColor: "#d3f4bf",
    paragraphs:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    university: "Concordia University College of Alberta",
  },
  {
    company: "Abata",
    hexColor: "#3bcb19",
    paragraphs:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    university: "University of Michigan - Dearborn",
  },
  {
    company: "Teklist",
    hexColor: "#1ce1d1",
    paragraphs:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    university: "Moscow State University of Ecological Engineering",
  },
  {
    company: "Linkbuzz",
    hexColor: "#2f28f1",
    paragraphs:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    university: "University of Portharcourt",
  },
  {
    company: "Quatz",
    hexColor: "#280ea0",
    paragraphs:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    university: "Goddard College",
  },
  {
    company: "Mydo",
    hexColor: "#939728",
    paragraphs:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    university: "Christian Brothers University",
  },
  {
    company: "Meedoo",
    hexColor: "#dfa611",
    paragraphs:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    university: "Tainan National College of the Arts",
  },
  {
    company: "Yakidoo",
    hexColor: "#3ce5f5",
    paragraphs:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    university: "Floret Global University",
  },
  {
    company: "Mynte",
    hexColor: "#1704aa",
    paragraphs:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    university: "Universidad La Republica",
  },
  {
    company: "Meembee",
    hexColor: "#aa3b5f",
    paragraphs:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    university: "Togliatti State University",
  },
  {
    company: "Youspan",
    hexColor: "#0676fc",
    paragraphs:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    university: "Southampton Solent University",
  },
  {
    company: "Gabvine",
    hexColor: "#40f244",
    paragraphs:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    university: "Nanjing University of Science and Technology",
  },
  {
    company: "Yakitri",
    hexColor: "#09cd74",
    paragraphs:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    university: "University of Otago",
  },
  {
    company: "Topicware",
    hexColor: "#b9dea6",
    paragraphs:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    university: "Glendale University College of Law",
  },
  {
    company: "Reallinks",
    hexColor: "#314129",
    paragraphs:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    university: "Kobe Gakuin University",
  },
  {
    company: "Riffwire",
    hexColor: "#1c4bfa",
    paragraphs:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    university: "Universidad Cardenal Herrera-CEU",
  },
  {
    company: "Edgeblab",
    hexColor: "#1e98e9",
    paragraphs:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    university: "Yokkaichi University",
  },
  {
    company: "Omba",
    hexColor: "#605b56",
    paragraphs:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    university: "Takoradi Polytechnic ",
  },
  {
    company: "Blogtag",
    hexColor: "#fd98be",
    paragraphs:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    university: "Universitat de Lleida",
  },
  {
    company: "Voonix",
    hexColor: "#ce1933",
    paragraphs:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    university: "Tashkent Automobile and Roads Institute",
  },
  {
    company: "Linkbuzz",
    hexColor: "#304d84",
    paragraphs:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    university: "Pomona College",
  },
  {
    company: "Quimba",
    hexColor: "#624a7a",
    paragraphs:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    university: "Kotelawala Defence University",
  },
  {
    company: "Thoughtbridge",
    hexColor: "#686660",
    paragraphs:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    university: "Universidad Nacional Experimental Romulo Gallegos",
  },
  {
    company: "Chatterbridge",
    hexColor: "#d8cf5d",
    paragraphs:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    university: "Darul Ulum Islamic College",
  },
  {
    company: "Topicblab",
    hexColor: "#37381c",
    paragraphs:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    university: "Universidad Autónoma de Bucaramanga",
  },
  {
    company: "Eamia",
    hexColor: "#2921b2",
    paragraphs:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    university: "University of Medicine and Pharmacy of Timisoara",
  },
  {
    company: "Ntag",
    hexColor: "#2cf356",
    paragraphs:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    university: "Universidad Nacional de Santiago del Estero",
  },
  {
    company: "Youspan",
    hexColor: "#263072",
    paragraphs:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    university: "International University of Travnik",
  },
  {
    company: "Browsezoom",
    hexColor: "#e84590",
    paragraphs:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    university: "Hochschule für Jüdische Studien Heidelberg",
  },
  {
    company: "Cogibox",
    hexColor: "#f3f465",
    paragraphs:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    university: "Universidad Autónoma de Aguascalientes",
  },
  {
    company: "Topicstorm",
    hexColor: "#fcca5e",
    paragraphs:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    university: "B. S. Abdur Rahman University",
  },
  {
    company: "Viva",
    hexColor: "#b489a8",
    paragraphs:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    university: "Global University",
  },
  {
    company: "Skimia",
    hexColor: "#4e4ea0",
    paragraphs:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    university: "Universitas Katolik Indonesia Atma Jaya",
  },
  {
    company: "Tazzy",
    hexColor: "#869874",
    paragraphs:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    university: "Pontificia Universidad Catolica de Chile",
  },
  {
    company: "Yamia",
    hexColor: "#215d79",
    paragraphs:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    university: "Baltimore Hebrew University",
  },
  {
    company: "Snaptags",
    hexColor: "#e59706",
    paragraphs:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    university: "Darul Naim College of Technology",
  },
];

// 프롭프트로 유저에게 grid 갯수 입력받기 -->

// section style - display: grid; grid-tamplate-columns: ;
// dispaly: flex; justify-content - center
// align-items: center
// padding: 100px

// h3 - company

// span - university
// p - paragraphs

const quantity = prompt("grid 갯수를 입력해주세요.");

const newSection = document.createElement("section");
newSection.style.display = "grid";
newSection.style.gridTemplateColumns = `repeat(${quantity}, 1fr)`;
document.body.appendChild(newSection);

data.forEach((v) => {
  const newArticle = document.createElement("article");
  newArticle.style.display = "flex";
  newArticle.style.flexDirection = "column";
  newArticle.style.justifyContent = "center";
  newArticle.style.alignItems = "center";
  newArticle.style.padding = "100px";

  const newh3 = document.createElement("h3");
  newh3.innerText = v.company;
  newh3.style.color = v.hexColor;

  const newspan = document.createElement("span");
  newspan.innerText = v.univercity;

  const newp = document.createElement("p");
  newp.innerText = v.paragraphs;

  newSection.appendChild(newArticle);
  newArticle.appendChild(newh3);
  newArticle.appendChild(newspan);
  newArticle.appendChild(newp);
});
