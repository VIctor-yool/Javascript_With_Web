const data = [
  {
    color: "#953107",
    avatar: "https://robohash.org/autemtotamest.png?size=50x50&set=set1",
    name: "Pearla Offer",
    university: "Universidad Diego Portales",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    email: "poffer0@wordpress.org",
  },
  {
    color: "#6914c4",
    avatar:
      "https://robohash.org/repellendusaccusamusplaceat.png?size=50x50&set=set1",
    name: "Hieronymus Wisam",
    university: "Huazhong Agricultural University",
    sentences:
      "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    email: "hwisam1@bigcartel.com",
  },
  {
    color: "#b3ef10",
    avatar: "https://robohash.org/inadipiscivoluptates.png?size=50x50&set=set1",
    name: "Clive Northbridge",
    university: "Cyprus University of Technology",
    sentences:
      "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    email: "cnorthbridge2@weebly.com",
  },
  {
    color: "#54e1cc",
    avatar: "https://robohash.org/idreprehenderitenim.png?size=50x50&set=set1",
    name: "Blakeley Tremeer",
    university: "Medical Academy in Lodz",
    sentences:
      "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    email: "btremeer3@dailymotion.com",
  },
  {
    color: "#78470a",
    avatar: "https://robohash.org/doloremvoluptatemest.png?size=50x50&set=set1",
    name: "Maddy Sheara",
    university: "Universität der Bundeswehr München",
    sentences: "Quisque ut erat.",
    email: "msheara4@time.com",
  },
  {
    color: "#f9e50f",
    avatar: "https://robohash.org/etaddoloribus.png?size=50x50&set=set1",
    name: "Konstanze Corradetti",
    university: "Nagoya Women's University",
    sentences:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
    email: "kcorradetti5@macromedia.com",
  },
  {
    color: "#d2e8fd",
    avatar: "https://robohash.org/magnammollitiaest.png?size=50x50&set=set1",
    name: "Jane Anslow",
    university: "Universidad Católica de Cuyo",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
    email: "janslow6@amazon.co.uk",
  },
  {
    color: "#1f9788",
    avatar: "https://robohash.org/quamautodit.png?size=50x50&set=set1",
    name: "Deeann Naper",
    university: "Islamic Azad University, Maybod",
    sentences:
      "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
    email: "dnaper7@youtu.be",
  },
  {
    color: "#5518d8",
    avatar: "https://robohash.org/quasisuntculpa.png?size=50x50&set=set1",
    name: "Eudora Wheble",
    university: "Central Institute of Higher Tibetan Studies",
    sentences:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    email: "ewheble8@delicious.com",
  },
  {
    color: "#4c7a02",
    avatar: "https://robohash.org/rerumteneturut.png?size=50x50&set=set1",
    name: "Sammy Germaine",
    university: "University of Mumbai",
    sentences:
      "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    email: "sgermaine9@telegraph.co.uk",
  },
  {
    color: "#f76319",
    avatar: "https://robohash.org/rematsed.png?size=50x50&set=set1",
    name: "Danila Redpath",
    university: "Novosibirsk State Medical Academy",
    sentences:
      "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    email: "dredpatha@bbb.org",
  },
  {
    color: "#beec9a",
    avatar: "https://robohash.org/veronequesequi.png?size=50x50&set=set1",
    name: "Terrel Cocozza",
    university: "West Coast University",
    sentences:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
    email: "tcocozzab@wp.com",
  },
  {
    color: "#7eb6d1",
    avatar: "https://robohash.org/consequuntursedvel.png?size=50x50&set=set1",
    name: "Corry Faughnan",
    university: "Grenoble Ecole de Management",
    sentences: "Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
    email: "cfaughnanc@sphinn.com",
  },
  {
    color: "#59a6e7",
    avatar:
      "https://robohash.org/velitperferendismagnam.png?size=50x50&set=set1",
    name: "Edgar Simukov",
    university: "American International University - Bangladesh",
    sentences:
      "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    email: "esimukovd@elpais.com",
  },
  {
    color: "#2d08fe",
    avatar: "https://robohash.org/asperioresenimet.png?size=50x50&set=set1",
    name: "Eden McKimm",
    university:
      "Kazakhstan Institute of Management, Economics, and Strategic Research",
    sentences:
      "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    email: "emckimme@ehow.com",
  },
  {
    color: "#e022c4",
    avatar: "https://robohash.org/eumrepellendusvelit.png?size=50x50&set=set1",
    name: "Valdemar Elis",
    university: "National Ilan University",
    sentences:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    email: "velisf@washingtonpost.com",
  },
  {
    color: "#33a094",
    avatar: "https://robohash.org/fugaexpeditaet.png?size=50x50&set=set1",
    name: "Wells Nel",
    university: " Université de Nouakchott",
    sentences:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
    email: "wnelg@cbslocal.com",
  },
  {
    color: "#b17386",
    avatar:
      "https://robohash.org/aspernaturnisivoluptate.png?size=50x50&set=set1",
    name: "Denyse Wylie",
    university: 'University of Mining and Geology "St. Ivan Rils"',
    sentences:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    email: "dwylieh@php.net",
  },
  {
    color: "#f536aa",
    avatar: "https://robohash.org/avoluptatemfacilis.png?size=50x50&set=set1",
    name: "Marietta Browne",
    university: "Fachhochschule Deggendorf",
    sentences:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
    email: "mbrownei@wikimedia.org",
  },
  {
    color: "#78f4be",
    avatar:
      "https://robohash.org/suscipitanimilaboriosam.png?size=50x50&set=set1",
    name: "Delores Falk",
    university: "Sampurnanand Sanskrit University",
    sentences:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
    email: "dfalkj@zdnet.com",
  },
  {
    color: "#83a875",
    avatar:
      "https://robohash.org/eosreprehenderitdolores.png?size=50x50&set=set1",
    name: "Lexi Jollands",
    university: "Hunan Agricultural University",
    sentences:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    email: "ljollandsk@bloglines.com",
  },
  {
    color: "#c1996e",
    avatar: "https://robohash.org/expeditaetnon.png?size=50x50&set=set1",
    name: "Fey Lewis",
    university: "University of Swaziland",
    sentences:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    email: "flewisl@smh.com.au",
  },
  {
    color: "#515391",
    avatar: "https://robohash.org/velitomniset.png?size=50x50&set=set1",
    name: "Georgiana Balchin",
    university: "City University of New York, Hunter College",
    sentences:
      "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    email: "gbalchinm@a8.net",
  },
  {
    color: "#0d35f1",
    avatar: "https://robohash.org/officiaestaut.png?size=50x50&set=set1",
    name: "Gauthier Caldron",
    university: "Kyushu University",
    sentences:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    email: "gcaldronn@fema.gov",
  },
  {
    color: "#d8e2b2",
    avatar: "https://robohash.org/etvoluptateet.png?size=50x50&set=set1",
    name: "Linette Merman",
    university: "University of Genoa",
    sentences:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
    email: "lmermano@eepurl.com",
  },
  {
    color: "#08bd2d",
    avatar: "https://robohash.org/etvoluptatemcumque.png?size=50x50&set=set1",
    name: "Issy Yakovliv",
    university: "Tabor College",
    sentences: "Cras non velit nec nisi vulputate nonummy.",
    email: "iyakovlivp@hexun.com",
  },
  {
    color: "#caedf6",
    avatar: "https://robohash.org/quaesitet.png?size=50x50&set=set1",
    name: "Marga Russel",
    university: "Universidad Santa Maria Caracas",
    sentences:
      "Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    email: "mrusselq@geocities.jp",
  },
  {
    color: "#a1ec98",
    avatar: "https://robohash.org/quilaboriosamcum.png?size=50x50&set=set1",
    name: "Rice Blacket",
    university: "Indiana University - Southeast",
    sentences:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
    email: "rblacketr@webnode.com",
  },
  {
    color: "#ce13a5",
    avatar: "https://robohash.org/etquoslaudantium.png?size=50x50&set=set1",
    name: "Patti Schuler",
    university: "LSB College",
    sentences:
      "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    email: "pschulers@admin.ch",
  },
  {
    color: "#a472ba",
    avatar: "https://robohash.org/autiustonon.png?size=50x50&set=set1",
    name: "Cosette Boulde",
    university: "Yazd Medical University",
    sentences:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
    email: "cbouldet@deliciousdays.com",
  },
  {
    color: "#caef37",
    avatar:
      "https://robohash.org/doloremmolestiaeimpedit.png?size=50x50&set=set1",
    name: "Claiborne Rugge",
    university: "Sichuan University",
    sentences:
      "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    email: "cruggeu@guardian.co.uk",
  },
  {
    color: "#8fe959",
    avatar: "https://robohash.org/eautdicta.png?size=50x50&set=set1",
    name: "Nessi Kohtler",
    university: "Universidad Madero",
    sentences:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    email: "nkohtlerv@weather.com",
  },
  {
    color: "#6ba204",
    avatar: "https://robohash.org/atarchitectoquia.png?size=50x50&set=set1",
    name: "Trudey Turland",
    university: "University of San Jose Recoletos",
    sentences:
      "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    email: "tturlandw@pcworld.com",
  },
  {
    color: "#e084a3",
    avatar: "https://robohash.org/voluptatemminusqui.png?size=50x50&set=set1",
    name: "Sansone Evelyn",
    university: "Lulea University of Technology",
    sentences:
      "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    email: "sevelynx@chicagotribune.com",
  },
  {
    color: "#c2bb46",
    avatar: "https://robohash.org/repellateumeos.png?size=50x50&set=set1",
    name: "Hilary Bullant",
    university: "York University",
    sentences:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    email: "hbullanty@addthis.com",
  },
  {
    color: "#15f401",
    avatar: "https://robohash.org/cumestipsum.png?size=50x50&set=set1",
    name: "Randal Kemsley",
    university: "Chongqing Technology and Business University",
    sentences: "Integer non velit.",
    email: "rkemsleyz@springer.com",
  },
  {
    color: "#07675f",
    avatar: "https://robohash.org/rerumminimaest.png?size=50x50&set=set1",
    name: "Thornie Arnot",
    university: "Karachi Medical and Dental College",
    sentences:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    email: "tarnot10@whitehouse.gov",
  },
  {
    color: "#5280a8",
    avatar: "https://robohash.org/etiuredolores.png?size=50x50&set=set1",
    name: "Haily Foulds",
    university: "Hagerstown Community College",
    sentences:
      "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
    email: "hfoulds11@cnn.com",
  },
  {
    color: "#c80847",
    avatar: "https://robohash.org/etvoluptasautem.png?size=50x50&set=set1",
    name: "Gerick Bradman",
    university: "Ecole Nationale Supérieure Agronomique de Toulouse",
    sentences: "Phasellus in felis.",
    email: "gbradman12@freewebs.com",
  },
  {
    color: "#a3b608",
    avatar: "https://robohash.org/eumquisquamest.png?size=50x50&set=set1",
    name: "Willie Poultney",
    university: "Grand Valley State University",
    sentences:
      "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    email: "wpoultney13@multiply.com",
  },
  {
    color: "#76b2ea",
    avatar: "https://robohash.org/quiaetlaudantium.png?size=50x50&set=set1",
    name: "Effie Hanhart",
    university: "Universidade de Franca",
    sentences:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    email: "ehanhart14@mlb.com",
  },
  {
    color: "#6b3f86",
    avatar: "https://robohash.org/pariaturomnisin.png?size=50x50&set=set1",
    name: "Benedicta Dewett",
    university: "Universidad Nacional de La Pampa",
    sentences: "Etiam vel augue. Vestibulum rutrum rutrum neque.",
    email: "bdewett15@mtv.com",
  },
  {
    color: "#2d6a0f",
    avatar: "https://robohash.org/itaqueundemagnam.png?size=50x50&set=set1",
    name: "Leisha Menauteau",
    university: "Université Mohammed Ier",
    sentences:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    email: "lmenauteau16@youtube.com",
  },
  {
    color: "#6c6c2f",
    avatar: "https://robohash.org/quimagnipariatur.png?size=50x50&set=set1",
    name: "Teodoro Benion",
    university: "Dickinson State University",
    sentences:
      "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    email: "tbenion17@squidoo.com",
  },
  {
    color: "#20dea4",
    avatar: "https://robohash.org/eligendiaeius.png?size=50x50&set=set1",
    name: "Ermina Coulson",
    university: "American Military University",
    sentences:
      "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
    email: "ecoulson18@usgs.gov",
  },
  {
    color: "#c27f4a",
    avatar: "https://robohash.org/inventoresintminus.png?size=50x50&set=set1",
    name: "Warde Gibbens",
    university: "University of Asia and the Pacific",
    sentences:
      "Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    email: "wgibbens19@nifty.com",
  },
  {
    color: "#12ab3b",
    avatar:
      "https://robohash.org/doloribusquodconsectetur.png?size=50x50&set=set1",
    name: "Gwenore Sails",
    university: "Mogilev State University A.A. Kuleshov",
    sentences:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    email: "gsails1a@blogspot.com",
  },
  {
    color: "#2f0f1c",
    avatar: "https://robohash.org/undererumnostrum.png?size=50x50&set=set1",
    name: "Tawnya Tremellier",
    university: "Arid Agriculture University",
    sentences:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    email: "ttremellier1b@state.gov",
  },
  {
    color: "#83c260",
    avatar: "https://robohash.org/adutqui.png?size=50x50&set=set1",
    name: "Vanya Youd",
    university: "John Marshall Law School",
    sentences:
      "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    email: "vyoud1c@cpanel.net",
  },
  {
    color: "#2b8d63",
    avatar:
      "https://robohash.org/dolorumvoluptatemexercitationem.png?size=50x50&set=set1",
    name: "Boniface Clacson",
    university: "Ural State Academy of Railway Transport",
    sentences:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    email: "bclacson1d@loc.gov",
  },
  {
    color: "#34d43c",
    avatar:
      "https://robohash.org/cupiditatealiasquibusdam.png?size=50x50&set=set1",
    name: "Tiebout Allchorne",
    university: "New College of Florida",
    sentences:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    email: "tallchorne1e@ihg.com",
  },
  {
    color: "#68fc5c",
    avatar: "https://robohash.org/estitaqueenim.png?size=50x50&set=set1",
    name: "Sabine Rickertsen",
    university: "Universitas Tadulako",
    sentences:
      "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    email: "srickertsen1f@reverbnation.com",
  },
  {
    color: "#b9ad9e",
    avatar: "https://robohash.org/etvelrerum.png?size=50x50&set=set1",
    name: "Eustace Chazelle",
    university: "Dav University",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
    email: "echazelle1g@earthlink.net",
  },
  {
    color: "#e28315",
    avatar: "https://robohash.org/sapienteinporro.png?size=50x50&set=set1",
    name: "Arleyne Kassman",
    university: "Najran University",
    sentences:
      "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    email: "akassman1h@fema.gov",
  },
  {
    color: "#b86f54",
    avatar: "https://robohash.org/similiquequiex.png?size=50x50&set=set1",
    name: "Marni Daftor",
    university: "Universidad de Guanajuato",
    sentences:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    email: "mdaftor1i@ebay.co.uk",
  },
  {
    color: "#20d880",
    avatar: "https://robohash.org/estistefacere.png?size=50x50&set=set1",
    name: "Joly Codner",
    university: "Sebha University",
    sentences:
      "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    email: "jcodner1j@ovh.net",
  },
  {
    color: "#dec3bf",
    avatar: "https://robohash.org/sedvelitdolores.png?size=50x50&set=set1",
    name: "Alyosha Comelli",
    university: "Centenary College of Louisiana",
    sentences:
      "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    email: "acomelli1k@twitter.com",
  },
  {
    color: "#c71eb5",
    avatar: "https://robohash.org/dolorequisab.png?size=50x50&set=set1",
    name: "Caryn Pealing",
    university: "Evangelische Hochschule für Soziale Arbeit Dresden (FH)",
    sentences:
      "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    email: "cpealing1l@arizona.edu",
  },
  {
    color: "#61fd78",
    avatar:
      "https://robohash.org/molestiaevoluptatumodit.png?size=50x50&set=set1",
    name: "Byran Dhillon",
    university: "University of Berne",
    sentences:
      "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
    email: "bdhillon1m@themeforest.net",
  },
  {
    color: "#1d0588",
    avatar: "https://robohash.org/quietconsequatur.png?size=50x50&set=set1",
    name: "Kristien Scemp",
    university: "Arizona State University",
    sentences:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    email: "kscemp1n@lulu.com",
  },
  {
    color: "#77dde3",
    avatar: "https://robohash.org/quiaporroet.png?size=50x50&set=set1",
    name: "Darline Vorley",
    university: "Université de Nice-Sophia Antipolis",
    sentences:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    email: "dvorley1o@deliciousdays.com",
  },
  {
    color: "#4a93fe",
    avatar: "https://robohash.org/eumutaccusantium.png?size=50x50&set=set1",
    name: "Bearnard Swallwell",
    university: "Beijing University of Posts and Telecommunications",
    sentences:
      "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    email: "bswallwell1p@japanpost.jp",
  },
  {
    color: "#6f52cb",
    avatar:
      "https://robohash.org/assumendapraesentiumeos.png?size=50x50&set=set1",
    name: "Sadie Robertot",
    university: "Caleb University",
    sentences:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
    email: "srobertot1q@omniture.com",
  },
  {
    color: "#203051",
    avatar: "https://robohash.org/dolorumsintquod.png?size=50x50&set=set1",
    name: "Fairlie Bantham",
    university: "Vladimir State University",
    sentences:
      "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    email: "fbantham1r@networksolutions.com",
  },
  {
    color: "#01ad3d",
    avatar: "https://robohash.org/impeditaperiamquo.png?size=50x50&set=set1",
    name: "Ketti Olkowicz",
    university: "Khurasan University",
    sentences:
      "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    email: "kolkowicz1s@hubpages.com",
  },
  {
    color: "#0c2fb2",
    avatar: "https://robohash.org/molestiaeeumquidem.png?size=50x50&set=set1",
    name: "Nedda Checci",
    university: "University of Petrosani",
    sentences: "Proin risus. Praesent lectus.",
    email: "nchecci1t@printfriendly.com",
  },
  {
    color: "#21f58b",
    avatar: "https://robohash.org/eteaquequi.png?size=50x50&set=set1",
    name: "Maia Tockell",
    university: "Al-Bukhari International University",
    sentences:
      "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    email: "mtockell1u@addtoany.com",
  },
  {
    color: "#31c77f",
    avatar: "https://robohash.org/sintquismolestiae.png?size=50x50&set=set1",
    name: "Fredericka Badam",
    university: "Université de Mostaganem",
    sentences:
      "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    email: "fbadam1v@mlb.com",
  },
  {
    color: "#785c6f",
    avatar: "https://robohash.org/inventorequiaeius.png?size=50x50&set=set1",
    name: "Dolph Asaaf",
    university:
      "Ecole Nationale de la Statistique et de l'Administration Economique",
    sentences:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
    email: "dasaaf1w@sohu.com",
  },
  {
    color: "#7b63fe",
    avatar: "https://robohash.org/quosvitaeducimus.png?size=50x50&set=set1",
    name: "Waite Munden",
    university: "Technical University of Civil Engineering Bucharest",
    sentences:
      "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    email: "wmunden1x@addthis.com",
  },
  {
    color: "#0619f6",
    avatar: "https://robohash.org/liberosedet.png?size=50x50&set=set1",
    name: "Cullie Mackley",
    university: "European International University",
    sentences:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
    email: "cmackley1y@pbs.org",
  },
  {
    color: "#440087",
    avatar:
      "https://robohash.org/occaecatieaquevoluptas.png?size=50x50&set=set1",
    name: "Libbie Murrells",
    university: "Samara State Technical University",
    sentences:
      "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
    email: "lmurrells1z@chronoengine.com",
  },
  {
    color: "#e245c8",
    avatar: "https://robohash.org/quiaminusiste.png?size=50x50&set=set1",
    name: "Julee Bittlestone",
    university: "October 6 university",
    sentences:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    email: "jbittlestone20@fastcompany.com",
  },
  {
    color: "#c7013f",
    avatar: "https://robohash.org/quideseruntquis.png?size=50x50&set=set1",
    name: "Edythe Horrigan",
    university: "Chongqing University of Communications",
    sentences:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    email: "ehorrigan21@spotify.com",
  },
  {
    color: "#810487",
    avatar: "https://robohash.org/voluptatematet.png?size=50x50&set=set1",
    name: "Patsy Koppen",
    university: "Jeonju University",
    sentences: "Nullam sit amet turpis elementum ligula vehicula consequat.",
    email: "pkoppen22@java.com",
  },
  {
    color: "#d6be72",
    avatar: "https://robohash.org/etvoluptatemcorporis.png?size=50x50&set=set1",
    name: "Mozelle Lavielle",
    university: "Gandhara Institute of Medical Sciences",
    sentences:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    email: "mlavielle23@hugedomains.com",
  },
  {
    color: "#496350",
    avatar: "https://robohash.org/etoptiout.png?size=50x50&set=set1",
    name: "Sidney Kellard",
    university: "University of Mosul",
    sentences:
      "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    email: "skellard24@google.com.hk",
  },
  {
    color: "#253b6f",
    avatar:
      "https://robohash.org/praesentiumfugadolores.png?size=50x50&set=set1",
    name: "Elmer Corrison",
    university: "University of the Ozarks",
    sentences:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    email: "ecorrison25@columbia.edu",
  },
  {
    color: "#670dd5",
    avatar: "https://robohash.org/utsedsaepe.png?size=50x50&set=set1",
    name: "Priscella Thunderman",
    university: "Bashkir State Medical University",
    sentences:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    email: "pthunderman26@va.gov",
  },
  {
    color: "#9d3a6f",
    avatar: "https://robohash.org/nonofficiadeleniti.png?size=50x50&set=set1",
    name: "Mavra Costello",
    university: "Lebanese American University",
    sentences:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
    email: "mcostello27@hugedomains.com",
  },
  {
    color: "#aa481c",
    avatar: "https://robohash.org/voluptasquiet.png?size=50x50&set=set1",
    name: "Sue MacArte",
    university: "Tamagawa University",
    sentences:
      "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
    email: "smacarte28@com.com",
  },
  {
    color: "#d29f4c",
    avatar: "https://robohash.org/acumqueut.png?size=50x50&set=set1",
    name: "Kele Georgievski",
    university: "University of Wisconsin - Milwaukee",
    sentences:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
    email: "kgeorgievski29@ustream.tv",
  },
  {
    color: "#778c7e",
    avatar:
      "https://robohash.org/facerearchitectonihil.png?size=50x50&set=set1",
    name: "Ingelbert Warboy",
    university: "Hanoi University of Mining and Geology",
    sentences:
      "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
    email: "iwarboy2a@nsw.gov.au",
  },
  {
    color: "#3cbf99",
    avatar: "https://robohash.org/voluptasquiaaut.png?size=50x50&set=set1",
    name: "Turner Mcasparan",
    university: "Ilam University",
    sentences:
      "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    email: "tmcasparan2b@weibo.com",
  },
  {
    color: "#b027f7",
    avatar: "https://robohash.org/liberoeosdolorem.png?size=50x50&set=set1",
    name: "Hanni Skacel",
    university: "Latvian Academy of Music",
    sentences:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    email: "hskacel2c@mozilla.org",
  },
  {
    color: "#93d866",
    avatar: "https://robohash.org/molestiaeoptiodolor.png?size=50x50&set=set1",
    name: "Daryl Cobbold",
    university: "Design Institute of San Diego",
    sentences:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    email: "dcobbold2d@opera.com",
  },
  {
    color: "#f82c2f",
    avatar:
      "https://robohash.org/repudiandaeteneturvoluptas.png?size=50x50&set=set1",
    name: "Dory Shynn",
    university: "University of La Verne",
    sentences:
      "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    email: "dshynn2e@sphinn.com",
  },
  {
    color: "#7eea6c",
    avatar: "https://robohash.org/fugaremvel.png?size=50x50&set=set1",
    name: "Elbertine Despenser",
    university: "Dr. YS Parmar University of Horticulture and Forestry",
    sentences:
      "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    email: "edespenser2f@cam.ac.uk",
  },
  {
    color: "#8bbaad",
    avatar: "https://robohash.org/namabdelectus.png?size=50x50&set=set1",
    name: "Halimeda Skarman",
    university: "Universität Graz",
    sentences:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
    email: "hskarman2g@flickr.com",
  },
  {
    color: "#951ef0",
    avatar: "https://robohash.org/nonveroconsequatur.png?size=50x50&set=set1",
    name: "Ingra Fynan",
    university: "Islamic Azad University, Maybod",
    sentences:
      "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    email: "ifynan2h@fema.gov",
  },
  {
    color: "#d67fcb",
    avatar: "https://robohash.org/temporearatione.png?size=50x50&set=set1",
    name: "Abbie Sagg",
    university: "Estonian Business School",
    sentences:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.",
    email: "asagg2i@epa.gov",
  },
  {
    color: "#c4e53a",
    avatar:
      "https://robohash.org/facilismollitiarecusandae.png?size=50x50&set=set1",
    name: "Gretta Corradetti",
    university: "College of St. Benedict and St. John's University",
    sentences:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    email: "gcorradetti2j@joomla.org",
  },
  {
    color: "#a3e1aa",
    avatar: "https://robohash.org/praesentiumautemeum.png?size=50x50&set=set1",
    name: "Joshuah Laddle",
    university: "Institut Sains dan Teknologi Al Kamal",
    sentences:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    email: "jladdle2k@furl.net",
  },
  {
    color: "#4bfa85",
    avatar: "https://robohash.org/etsuscipiteius.png?size=50x50&set=set1",
    name: "Myrna O'Curneen",
    university: "Massachusetts Maritime Academy",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    email: "mocurneen2l@ebay.com",
  },
  {
    color: "#4b6227",
    avatar: "https://robohash.org/quiamagnamut.png?size=50x50&set=set1",
    name: "Abby Braun",
    university: "Karnataka State Open University",
    sentences:
      "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
    email: "abraun2m@reuters.com",
  },
  {
    color: "#0518de",
    avatar: "https://robohash.org/ipsumetperspiciatis.png?size=50x50&set=set1",
    name: "Monica Regina",
    university: "Universidad Nuestra Senora de La Paz",
    sentences:
      "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    email: "mregina2n@nytimes.com",
  },
  {
    color: "#ffe41f",
    avatar:
      "https://robohash.org/voluptatemmolestiaevoluptatem.png?size=50x50&set=set1",
    name: "Ninette Meltetal",
    university: "Université Paris-Sorbonne (Paris IV)",
    sentences:
      "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    email: "nmeltetal2o@rediff.com",
  },
  {
    color: "#f9db19",
    avatar: "https://robohash.org/veliteaquasi.png?size=50x50&set=set1",
    name: "Dane Hekkert",
    university: "Astrakhan State University",
    sentences:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    email: "dhekkert2p@unicef.org",
  },
  {
    color: "#905fc8",
    avatar: "https://robohash.org/molestiasautalias.png?size=50x50&set=set1",
    name: "Cole Doylend",
    university: "Arkansas Tech University",
    sentences:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    email: "cdoylend2q@studiopress.com",
  },
  {
    color: "#070c67",
    avatar:
      "https://robohash.org/nisiaspernaturfacilis.png?size=50x50&set=set1",
    name: "Liliane Valler",
    university: "Williams College",
    sentences:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    email: "lvaller2r@cmu.edu",
  },
  {
    color: "#7daf27",
    avatar:
      "https://robohash.org/inconsequaturrepudiandae.png?size=50x50&set=set1",
    name: "Claudell Worland",
    university: "University of Fribourg",
    sentences:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    email: "cworland2s@amazon.de",
  },
  {
    color: "#bb9632",
    avatar:
      "https://robohash.org/asperioresconsequunturdeleniti.png?size=50x50&set=set1",
    name: "Sherill Buckam",
    university: "Hebrew University of Jerusalem",
    sentences:
      "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    email: "sbuckam2t@sun.com",
  },
  {
    color: "#5c98df",
    avatar:
      "https://robohash.org/exercitationemillumet.png?size=50x50&set=set1",
    name: "Rebekkah Carnson",
    university: "Mahatma Gandhi University, Kerala",
    sentences:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    email: "rcarnson2u@si.edu",
  },
  {
    color: "#8a2b89",
    avatar:
      "https://robohash.org/distinctiofugiatrerum.png?size=50x50&set=set1",
    name: "Martica Maffiotti",
    university: "University of Applied Sciences of Moldova",
    sentences:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    email: "mmaffiotti2v@sogou.com",
  },
  {
    color: "#421a58",
    avatar:
      "https://robohash.org/dolorevoluptasdolorem.png?size=50x50&set=set1",
    name: "Doti Topham",
    university: "Purdue University North Central",
    sentences:
      "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    email: "dtopham2w@163.com",
  },
  {
    color: "#083994",
    avatar:
      "https://robohash.org/rerumlaboriosamaspernatur.png?size=50x50&set=set1",
    name: "Isabella MacAiline",
    university: "Punjab Agricultural University",
    sentences:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    email: "imacailine2x@nymag.com",
  },
  {
    color: "#859f0b",
    avatar: "https://robohash.org/culpanondeleniti.png?size=50x50&set=set1",
    name: "Arty Warlawe",
    university: "Barat College",
    sentences:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
    email: "awarlawe2y@apple.com",
  },
  {
    color: "#29dcef",
    avatar:
      "https://robohash.org/aspernaturrerumexcepturi.png?size=50x50&set=set1",
    name: "Vale Northin",
    university: "University of Science and Technology Sana'a",
    sentences:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    email: "vnorthin2z@spiegel.de",
  },
  {
    color: "#ad0ddb",
    avatar:
      "https://robohash.org/voluptatemveritatisaut.png?size=50x50&set=set1",
    name: "Billy Rookes",
    university: "Union Theological Seminary (UTS)",
    sentences:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    email: "brookes30@linkedin.com",
  },
  {
    color: "#a41add",
    avatar: "https://robohash.org/doloresoditamet.png?size=50x50&set=set1",
    name: "Thayne Bassom",
    university: "Neelain University",
    sentences:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    email: "tbassom31@npr.org",
  },
  {
    color: "#66a702",
    avatar:
      "https://robohash.org/repellendusdolorquidem.png?size=50x50&set=set1",
    name: "Milena Dybell",
    university: "University of Mississippi Medical Center",
    sentences:
      "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    email: "mdybell32@newsvine.com",
  },
  {
    color: "#928ba9",
    avatar:
      "https://robohash.org/deleniticonsequunturquis.png?size=50x50&set=set1",
    name: "Chaunce Eschalette",
    university: "Faculdades Integradas UPIS",
    sentences:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
    email: "ceschalette33@cbslocal.com",
  },
  {
    color: "#045c75",
    avatar: "https://robohash.org/officiaetdeserunt.png?size=50x50&set=set1",
    name: "Darcey Mitchener",
    university: "RCSI-Medical University of Bahrain",
    sentences:
      "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    email: "dmitchener34@elegantthemes.com",
  },
  {
    color: "#eb0a54",
    avatar: "https://robohash.org/fuganihilvoluptas.png?size=50x50&set=set1",
    name: "Raynor Tolomio",
    university: "University of Cagayan Valley",
    sentences:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
    email: "rtolomio35@economist.com",
  },
  {
    color: "#0c13d7",
    avatar:
      "https://robohash.org/voluptasomnisoccaecati.png?size=50x50&set=set1",
    name: "Rolf Greenhead",
    university: "IE University",
    sentences:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    email: "rgreenhead36@howstuffworks.com",
  },
  {
    color: "#4b9dee",
    avatar: "https://robohash.org/modiutlibero.png?size=50x50&set=set1",
    name: "Budd Fierro",
    university: "Tongmyung University of Information Technology",
    sentences: "Donec semper sapien a libero.",
    email: "bfierro37@fotki.com",
  },
  {
    color: "#7284bc",
    avatar: "https://robohash.org/doloremqueestodit.png?size=50x50&set=set1",
    name: "Carmelita Chainey",
    university: "St. Leo College",
    sentences:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    email: "cchainey38@chicagotribune.com",
  },
  {
    color: "#d13651",
    avatar:
      "https://robohash.org/consequaturfugitvoluptatem.png?size=50x50&set=set1",
    name: "Algernon Redshaw",
    university: "Instituto Universitario de Estudios Navales y Marítimos",
    sentences:
      "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
    email: "aredshaw39@rakuten.co.jp",
  },
  {
    color: "#ddf69f",
    avatar: "https://robohash.org/modiadsed.png?size=50x50&set=set1",
    name: "Kaine Treppas",
    university: "University of Florida",
    sentences:
      "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
    email: "ktreppas3a@tmall.com",
  },
  {
    color: "#25a2ca",
    avatar: "https://robohash.org/eumidaspernatur.png?size=50x50&set=set1",
    name: "Ennis Bulstrode",
    university: "Assam Agricultural University",
    sentences:
      "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
    email: "ebulstrode3b@vkontakte.ru",
  },
  {
    color: "#489803",
    avatar:
      "https://robohash.org/sitarchitectotemporibus.png?size=50x50&set=set1",
    name: "Andrew Begley",
    university: "Susquehanna University",
    sentences:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    email: "abegley3c@simplemachines.org",
  },
  {
    color: "#015c76",
    avatar: "https://robohash.org/quisquamsitexplicabo.png?size=50x50&set=set1",
    name: "Berri Sutch",
    university: "Brigham Young University",
    sentences: "Curabitur convallis.",
    email: "bsutch3d@trellian.com",
  },
  {
    color: "#055a90",
    avatar:
      "https://robohash.org/abofficiisrepudiandae.png?size=50x50&set=set1",
    name: "Tiffy Sharpous",
    university: "Pedagogical University of Czestochowa",
    sentences: "In blandit ultrices enim.",
    email: "tsharpous3e@narod.ru",
  },
  {
    color: "#dd7248",
    avatar: "https://robohash.org/occaecatinatusest.png?size=50x50&set=set1",
    name: "Paige de Merida",
    university: "International Institute for Population Sciences",
    sentences:
      "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    email: "pde3f@dedecms.com",
  },
  {
    color: "#72603d",
    avatar: "https://robohash.org/beataeipsamsequi.png?size=50x50&set=set1",
    name: "Lidia Lindbergh",
    university: "University of Phoenix",
    sentences: "Morbi a ipsum. Integer a nibh.",
    email: "llindbergh3g@paginegialle.it",
  },
  {
    color: "#923c05",
    avatar: "https://robohash.org/quasiautqui.png?size=50x50&set=set1",
    name: "Manuel Charrisson",
    university: "University of Performing Arts in Bratislava",
    sentences:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
    email: "mcharrisson3h@jimdo.com",
  },
  {
    color: "#123f35",
    avatar: "https://robohash.org/quiainciduntipsam.png?size=50x50&set=set1",
    name: "Barnett Bolino",
    university: "Feati University",
    sentences:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    email: "bbolino3i@sciencedaily.com",
  },
  {
    color: "#041f48",
    avatar:
      "https://robohash.org/optiomolestiaeofficiis.png?size=50x50&set=set1",
    name: "Bel Aldrin",
    university: "Universidad del Norte",
    sentences:
      "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    email: "baldrin3j@wired.com",
  },
  {
    color: "#c895ed",
    avatar: "https://robohash.org/utarchitectoeveniet.png?size=50x50&set=set1",
    name: "Gabriele Dolton",
    university: "Universidade Federal de Mato Grosso do Sul",
    sentences:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    email: "gdolton3k@usatoday.com",
  },
  {
    color: "#6f44ec",
    avatar: "https://robohash.org/laboriosamoditomnis.png?size=50x50&set=set1",
    name: "Nye Radmer",
    university: "Northwest Nazarene University",
    sentences:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    email: "nradmer3l@sun.com",
  },
  {
    color: "#0a9c74",
    avatar: "https://robohash.org/quamvoluptaset.png?size=50x50&set=set1",
    name: "Kellen Kobsch",
    university: "Universidad del Zulia",
    sentences:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    email: "kkobsch3m@hao123.com",
  },
  {
    color: "#467bab",
    avatar:
      "https://robohash.org/voluptatemdolorcorporis.png?size=50x50&set=set1",
    name: "Sonni Mimmack",
    university: "Jodhpur National University",
    sentences:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    email: "smimmack3n@yolasite.com",
  },
  {
    color: "#e383ed",
    avatar:
      "https://robohash.org/voluptatemullamdeserunt.png?size=50x50&set=set1",
    name: "Elvira Dreigher",
    university: "Cosmopolitan University",
    sentences:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
    email: "edreigher3o@tripod.com",
  },
  {
    color: "#a91d35",
    avatar: "https://robohash.org/istequoreiciendis.png?size=50x50&set=set1",
    name: "Britt Pettifor",
    university: "School of Economic Sciences",
    sentences:
      "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    email: "bpettifor3p@umn.edu",
  },
  {
    color: "#3cf0a8",
    avatar: "https://robohash.org/odioeumnihil.png?size=50x50&set=set1",
    name: "Armando Tevlin",
    university: "Dr. Hari Singh Gour University, formerly University of Sagar",
    sentences:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    email: "atevlin3q@virginia.edu",
  },
  {
    color: "#97b728",
    avatar: "https://robohash.org/magnametdolorem.png?size=50x50&set=set1",
    name: "Hercules Barkly",
    university: "State University of New York College at Geneseo",
    sentences:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    email: "hbarkly3r@friendfeed.com",
  },
  {
    color: "#3ea279",
    avatar: "https://robohash.org/quifacilisrerum.png?size=50x50&set=set1",
    name: "Catharina Benyon",
    university: "Dong Eui University",
    sentences:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    email: "cbenyon3s@barnesandnoble.com",
  },
  {
    color: "#f27f80",
    avatar: "https://robohash.org/pariaturautemdolorem.png?size=50x50&set=set1",
    name: "Laura Clayill",
    university: "Anambra State University of Science and Technology",
    sentences: "Suspendisse ornare consequat lectus.",
    email: "lclayill3t@bravesites.com",
  },
  {
    color: "#933f2b",
    avatar: "https://robohash.org/modievenietet.png?size=50x50&set=set1",
    name: "Dru Scobbie",
    university: "Lincoln University",
    sentences:
      "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    email: "dscobbie3u@miibeian.gov.cn",
  },
  {
    color: "#4922c5",
    avatar:
      "https://robohash.org/placeatetvoluptatibus.png?size=50x50&set=set1",
    name: "Worthington Dickman",
    university: "Tottori University of Environmental Studies",
    sentences:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
    email: "wdickman3v@yandex.ru",
  },
  {
    color: "#29b467",
    avatar:
      "https://robohash.org/debitisomnislaboriosam.png?size=50x50&set=set1",
    name: "Cyb Doddrell",
    university: "Escuela Politécnica del Ejercito",
    sentences:
      "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    email: "cdoddrell3w@wiley.com",
  },
  {
    color: "#f814bf",
    avatar:
      "https://robohash.org/voluptatemdignissimosaperiam.png?size=50x50&set=set1",
    name: "Lorilyn Sinkins",
    university: "Federal University of Petroleum Resources",
    sentences:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    email: "lsinkins3x@cnn.com",
  },
  {
    color: "#dd975f",
    avatar: "https://robohash.org/sedquilaborum.png?size=50x50&set=set1",
    name: "Beatriz Mattessen",
    university: "Rostov State Medical University",
    sentences:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    email: "bmattessen3y@cafepress.com",
  },
  {
    color: "#39b7a1",
    avatar: "https://robohash.org/similiqueetveniam.png?size=50x50&set=set1",
    name: "Boy Skea",
    university: 'Bourgas University "Prof. Assen Zlatarov"',
    sentences:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    email: "bskea3z@tumblr.com",
  },
  {
    color: "#f6724e",
    avatar: "https://robohash.org/fugitquiquisquam.png?size=50x50&set=set1",
    name: "Everard Dymock",
    university: "Iraq University College",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.",
    email: "edymock40@cafepress.com",
  },
  {
    color: "#746be7",
    avatar:
      "https://robohash.org/voluptatemquamdelectus.png?size=50x50&set=set1",
    name: "Tybalt Sapir",
    university: "University of Minnesota - Duluth",
    sentences:
      "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    email: "tsapir41@photobucket.com",
  },
  {
    color: "#ba8809",
    avatar: "https://robohash.org/dolormagniest.png?size=50x50&set=set1",
    name: "Murry Stubley",
    university: "Sharif University of Technology",
    sentences:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
    email: "mstubley42@telegraph.co.uk",
  },
  {
    color: "#ccc14a",
    avatar:
      "https://robohash.org/quiarepudiandaeducimus.png?size=50x50&set=set1",
    name: "Kylynn Pavy",
    university: "French University in Armenia (UFAR)",
    sentences:
      "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    email: "kpavy43@wisc.edu",
  },
  {
    color: "#9338b9",
    avatar: "https://robohash.org/enimadipisciquia.png?size=50x50&set=set1",
    name: "Sampson Wem",
    university: "Central South Forestry University",
    sentences: "Duis ac nibh.",
    email: "swem44@dagondesign.com",
  },
  {
    color: "#97440f",
    avatar:
      "https://robohash.org/fugiatvoluptatemconsequatur.png?size=50x50&set=set1",
    name: "Ruth Blaske",
    university: "Universidad Autónoma de Chiapas",
    sentences:
      "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    email: "rblaske45@google.nl",
  },
  {
    color: "#5bbf34",
    avatar: "https://robohash.org/iderroripsam.png?size=50x50&set=set1",
    name: "Garvy Kirkam",
    university: "Universidad del Tolima",
    sentences:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    email: "gkirkam46@aol.com",
  },
  {
    color: "#2b7f27",
    avatar: "https://robohash.org/velvoluptaseum.png?size=50x50&set=set1",
    name: "Joela Ivoshin",
    university: "Wright Institute",
    sentences:
      "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    email: "jivoshin47@rakuten.co.jp",
  },
  {
    color: "#88b67c",
    avatar:
      "https://robohash.org/expeditaquisquamvoluptatem.png?size=50x50&set=set1",
    name: "Clemence Lyndon",
    university: "Tuva State University",
    sentences:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    email: "clyndon48@state.tx.us",
  },
  {
    color: "#d5f662",
    avatar: "https://robohash.org/fugaadfacilis.png?size=50x50&set=set1",
    name: "Todd Langman",
    university:
      "Ho Chi Minh City University of Foreign Languages and Information Technology",
    sentences: "Nunc rhoncus dui vel sem.",
    email: "tlangman49@bluehost.com",
  },
  {
    color: "#54a3e9",
    avatar: "https://robohash.org/estquascumque.png?size=50x50&set=set1",
    name: "Vassili Bissex",
    university: "University of Technology Sydney",
    sentences:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    email: "vbissex4a@walmart.com",
  },
  {
    color: "#8f1108",
    avatar: "https://robohash.org/rerumdebitisratione.png?size=50x50&set=set1",
    name: "Minnaminnie Gatlin",
    university: "Coleman College",
    sentences:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    email: "mgatlin4b@last.fm",
  },
  {
    color: "#4ef4c1",
    avatar: "https://robohash.org/nullasuscipitet.png?size=50x50&set=set1",
    name: "Deedee Deboick",
    university: "Dominican School of Philosophy and Theology",
    sentences:
      "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    email: "ddeboick4c@php.net",
  },
  {
    color: "#565396",
    avatar: "https://robohash.org/quaeestnon.png?size=50x50&set=set1",
    name: "Adiana Knapper",
    university: "Pennsylvania Academy of the Fine Arts",
    sentences:
      "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
    email: "aknapper4d@statcounter.com",
  },
  {
    color: "#bb41d5",
    avatar:
      "https://robohash.org/consequaturnondebitis.png?size=50x50&set=set1",
    name: "Dallas Hince",
    university: "Drexel University",
    sentences:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    email: "dhince4e@earthlink.net",
  },
  {
    color: "#40995c",
    avatar: "https://robohash.org/fugiataliasvelit.png?size=50x50&set=set1",
    name: "Carolann Tommaseo",
    university: "University of South Asia",
    sentences: "Duis mattis egestas metus. Aenean fermentum.",
    email: "ctommaseo4f@telegraph.co.uk",
  },
  {
    color: "#db1bc3",
    avatar: "https://robohash.org/estquisconsequuntur.png?size=50x50&set=set1",
    name: "Clemmy Gozard",
    university: "Thammasat University",
    sentences:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    email: "cgozard4g@people.com.cn",
  },
  {
    color: "#5a94c3",
    avatar:
      "https://robohash.org/fugaaspernaturdolores.png?size=50x50&set=set1",
    name: "Flem MacKilroe",
    university: "University of New Caledonia",
    sentences:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    email: "fmackilroe4h@mail.ru",
  },
  {
    color: "#d2040d",
    avatar: "https://robohash.org/sedfugiataut.png?size=50x50&set=set1",
    name: "Edyth Rodenborch",
    university: "National University of Theater and Film Arts",
    sentences:
      "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "erodenborch4i@t-online.de",
  },
  {
    color: "#6f0509",
    avatar: "https://robohash.org/rerumutat.png?size=50x50&set=set1",
    name: "Magdalene Sallinger",
    university: "Taipei Medical College",
    sentences: "Pellentesque viverra pede ac diam.",
    email: "msallinger4j@de.vu",
  },
  {
    color: "#21f4e9",
    avatar: "https://robohash.org/estcumullam.png?size=50x50&set=set1",
    name: "Currie Woolstenholmes",
    university: "University of Suceava",
    sentences:
      "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    email: "cwoolstenholmes4k@indiegogo.com",
  },
  {
    color: "#d06731",
    avatar: "https://robohash.org/quiaeiuscorrupti.png?size=50x50&set=set1",
    name: "Demetri Stuckow",
    university: "American University",
    sentences:
      "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    email: "dstuckow4l@homestead.com",
  },
  {
    color: "#02b164",
    avatar: "https://robohash.org/inrepudiandaequi.png?size=50x50&set=set1",
    name: "Liuka Bris",
    university: "Konan University",
    sentences:
      "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    email: "lbris4m@usatoday.com",
  },
  {
    color: "#9e9706",
    avatar: "https://robohash.org/minimavelitfacilis.png?size=50x50&set=set1",
    name: "Dalston Hartell",
    university: "Télé-université, Université du Québec",
    sentences: "Aliquam erat volutpat. In congue.",
    email: "dhartell4n@bing.com",
  },
  {
    color: "#e845c7",
    avatar:
      "https://robohash.org/facilisaperiamblanditiis.png?size=50x50&set=set1",
    name: "Indira Gatesman",
    university: "Poltava University of Consumer Cooperatives in Ukraine",
    sentences:
      "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    email: "igatesman4o@ebay.co.uk",
  },
  {
    color: "#d38c1d",
    avatar: "https://robohash.org/sitexpeditaplaceat.png?size=50x50&set=set1",
    name: "Adamo Duns",
    university: "Shanghai Ocean University",
    sentences: "Nullam molestie nibh in lectus.",
    email: "aduns4p@hc360.com",
  },
  {
    color: "#dc0b58",
    avatar: "https://robohash.org/deseruntipsamvel.png?size=50x50&set=set1",
    name: "Reinhold Urwen",
    university: "Asian Management Institute",
    sentences:
      "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
    email: "rurwen4q@guardian.co.uk",
  },
  {
    color: "#f8f0e8",
    avatar:
      "https://robohash.org/nullaprovidentdignissimos.png?size=50x50&set=set1",
    name: "Tessi Cardall",
    university: "Universidad Abierta Interamericana",
    sentences:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    email: "tcardall4r@huffingtonpost.com",
  },
  {
    color: "#c68786",
    avatar: "https://robohash.org/etnonea.png?size=50x50&set=set1",
    name: "Ignace Pedrick",
    university: "Dow University of Health Sciences",
    sentences:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    email: "ipedrick4s@flickr.com",
  },
  {
    color: "#94e239",
    avatar: "https://robohash.org/nihilexlaudantium.png?size=50x50&set=set1",
    name: "Hammad McElvogue",
    university: "University Malaysia Pahang",
    sentences:
      "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    email: "hmcelvogue4t@usgs.gov",
  },
  {
    color: "#474039",
    avatar: "https://robohash.org/expeditalaborumquos.png?size=50x50&set=set1",
    name: "Hedwig Lawling",
    university: "Tomakomai Komazawa University",
    sentences:
      "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
    email: "hlawling4u@cnn.com",
  },
  {
    color: "#9c465b",
    avatar: "https://robohash.org/omnisdolorumvel.png?size=50x50&set=set1",
    name: "Amalee Francioli",
    university: "Universidade Atlântica",
    sentences: "Praesent blandit. Nam nulla.",
    email: "afrancioli4v@hao123.com",
  },
  {
    color: "#b1b8bf",
    avatar: "https://robohash.org/asperioresquitotam.png?size=50x50&set=set1",
    name: "Babita Camocke",
    university:
      "University of Lower Silesia of the Association for the Advancement of Education in Wroclaw.",
    sentences:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
    email: "bcamocke4w@php.net",
  },
  {
    color: "#4d4ab0",
    avatar: "https://robohash.org/rerumnonqui.png?size=50x50&set=set1",
    name: "Drake Mughal",
    university: "Toccoa Falls College",
    sentences: "Morbi a ipsum. Integer a nibh. In quis justo.",
    email: "dmughal4x@amazon.co.uk",
  },
  {
    color: "#bdb493",
    avatar:
      "https://robohash.org/recusandaeeiusmollitia.png?size=50x50&set=set1",
    name: "Keelby Domniney",
    university: "Utrecht University",
    sentences:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    email: "kdomniney4y@jiathis.com",
  },
  {
    color: "#9b4f85",
    avatar: "https://robohash.org/temporibusfugiatet.png?size=50x50&set=set1",
    name: "Fabe Eite",
    university: "Mongolian University of Science and Technology",
    sentences:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "feite4z@networksolutions.com",
  },
  {
    color: "#361c4b",
    avatar: "https://robohash.org/utvoluptatemdolor.png?size=50x50&set=set1",
    name: "Stesha Tilbury",
    university: "Jeonju University",
    sentences:
      "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    email: "stilbury50@bloomberg.com",
  },
  {
    color: "#e04fc2",
    avatar: "https://robohash.org/maximeverodolorem.png?size=50x50&set=set1",
    name: "Welbie Senyard",
    university: "East Carolina University",
    sentences:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    email: "wsenyard51@virginia.edu",
  },
  {
    color: "#62f9eb",
    avatar: "https://robohash.org/nihildolorplaceat.png?size=50x50&set=set1",
    name: "Guinna Blonden",
    university: "De La Salle University",
    sentences:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    email: "gblonden52@cmu.edu",
  },
  {
    color: "#cbee1d",
    avatar: "https://robohash.org/quissintaccusamus.png?size=50x50&set=set1",
    name: "Chuck Gaddesby",
    university: "Al-Eman University",
    sentences:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    email: "cgaddesby53@wordpress.com",
  },
  {
    color: "#bd93f6",
    avatar:
      "https://robohash.org/veniametreprehenderit.png?size=50x50&set=set1",
    name: "Carline Rossoni",
    university: "Universidad Central de Bayamón",
    sentences:
      "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    email: "crossoni54@networkadvertising.org",
  },
  {
    color: "#ad78c2",
    avatar: "https://robohash.org/delenitiquiaut.png?size=50x50&set=set1",
    name: "Livvyy Desborough",
    university: "Vikrama Simhapuri University",
    sentences: "Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    email: "ldesborough55@bandcamp.com",
  },
  {
    color: "#9af107",
    avatar: "https://robohash.org/estquiaunde.png?size=50x50&set=set1",
    name: "Bunny Brinkley",
    university: "United Medical and Dental Schools, University of London",
    sentences:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
    email: "bbrinkley56@mail.ru",
  },
  {
    color: "#3057d6",
    avatar: "https://robohash.org/aspernaturethic.png?size=50x50&set=set1",
    name: "Teriann Upchurch",
    university: "Universitas Slamet Riyadi Surakarta",
    sentences:
      "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
    email: "tupchurch57@example.com",
  },
  {
    color: "#228c1a",
    avatar: "https://robohash.org/essenobisaut.png?size=50x50&set=set1",
    name: "Elfie Dismore",
    university: "St. Mary's University of Minnesota",
    sentences: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    email: "edismore58@baidu.com",
  },
  {
    color: "#570bd3",
    avatar: "https://robohash.org/officiistemporeut.png?size=50x50&set=set1",
    name: "Brenda Sneath",
    university: "Brunswick Community College",
    sentences:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    email: "bsneath59@indiegogo.com",
  },
  {
    color: "#6f5032",
    avatar: "https://robohash.org/idmolestiaequae.png?size=50x50&set=set1",
    name: "Coral Samsin",
    university: "Seowon University",
    sentences:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    email: "csamsin5a@google.fr",
  },
  {
    color: "#fb6499",
    avatar:
      "https://robohash.org/providentdelectusmaiores.png?size=50x50&set=set1",
    name: "Hettie Ricciardello",
    university: "Tokai University",
    sentences:
      "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    email: "hricciardello5b@smh.com.au",
  },
  {
    color: "#d2c03a",
    avatar: "https://robohash.org/etvelnon.png?size=50x50&set=set1",
    name: "Dani Watling",
    university: "International School of Management in Prešov",
    sentences:
      "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    email: "dwatling5c@ibm.com",
  },
  {
    color: "#b31b18",
    avatar: "https://robohash.org/dolorummaioresnon.png?size=50x50&set=set1",
    name: "Malachi Carneck",
    university: "Universidade Federal da Paraíba",
    sentences:
      "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    email: "mcarneck5d@yandex.ru",
  },
  {
    color: "#100ca3",
    avatar: "https://robohash.org/etlaborequi.png?size=50x50&set=set1",
    name: "Augie Laville",
    university: "Karlshochschule International University",
    sentences:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
    email: "alaville5e@goo.gl",
  },
  {
    color: "#faad15",
    avatar: "https://robohash.org/harumteneturunde.png?size=50x50&set=set1",
    name: "Bambie Aarons",
    university: "University of Economics Varna",
    sentences:
      "Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    email: "baarons5f@noaa.gov",
  },
  {
    color: "#2a15a0",
    avatar: "https://robohash.org/utnequeomnis.png?size=50x50&set=set1",
    name: "Rand McCurdy",
    university: "Pädagogische Hochschule Karlsruhe",
    sentences:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    email: "rmccurdy5g@zimbio.com",
  },
  {
    color: "#21836d",
    avatar:
      "https://robohash.org/assumendaquidignissimos.png?size=50x50&set=set1",
    name: "Luz Rubinov",
    university: "Dallas Christian College",
    sentences:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    email: "lrubinov5h@ibm.com",
  },
  {
    color: "#24e68e",
    avatar:
      "https://robohash.org/perspiciatisplaceatomnis.png?size=50x50&set=set1",
    name: "Jacobo Andryunin",
    university: "College of Mount St. Joseph",
    sentences: "Maecenas rhoncus aliquam lacus.",
    email: "jandryunin5i@com.com",
  },
  {
    color: "#d9205f",
    avatar: "https://robohash.org/doloridet.png?size=50x50&set=set1",
    name: "Latashia Du Hamel",
    university: "Rose-Hulman Institute of Technology",
    sentences:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    email: "ldu5j@wiley.com",
  },
  {
    color: "#c68104",
    avatar: "https://robohash.org/aperiamdictaet.png?size=50x50&set=set1",
    name: "Arther Klement",
    university: "St. Bonaventure University",
    sentences:
      "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    email: "aklement5k@yolasite.com",
  },
  {
    color: "#f6e2c2",
    avatar: "https://robohash.org/quissitaut.png?size=50x50&set=set1",
    name: "Darell Brogini",
    university: "Universidade do Sagrado Coração",
    sentences:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
    email: "dbrogini5l@yale.edu",
  },
  {
    color: "#6a2250",
    avatar: "https://robohash.org/beataesolutaquis.png?size=50x50&set=set1",
    name: "Maegan McMillan",
    university: "IntelliTec College - Grand Junction",
    sentences: "Suspendisse potenti.",
    email: "mmcmillan5m@facebook.com",
  },
  {
    color: "#49f542",
    avatar: "https://robohash.org/sintesteum.png?size=50x50&set=set1",
    name: "Maren Eyden",
    university: "Shanghai International Studies University",
    sentences:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    email: "meyden5n@delicious.com",
  },
  {
    color: "#7ebeaa",
    avatar: "https://robohash.org/pariaturquiquasi.png?size=50x50&set=set1",
    name: "Conn Follin",
    university: "Norway's Information Technology University College",
    sentences:
      "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    email: "cfollin5o@purevolume.com",
  },
  {
    color: "#0c3057",
    avatar: "https://robohash.org/eveniettemporaquia.png?size=50x50&set=set1",
    name: "Anne-marie Hutchin",
    university: "Shahrood University of Technology",
    sentences:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
    email: "ahutchin5p@scribd.com",
  },
  {
    color: "#dd75c5",
    avatar: "https://robohash.org/ipsameumporro.png?size=50x50&set=set1",
    name: "Astrix Ireland",
    university: "Atlanta Christian College",
    sentences: "Aenean sit amet justo. Morbi ut odio.",
    email: "aireland5q@1688.com",
  },
  {
    color: "#e4df4d",
    avatar:
      "https://robohash.org/consequaturvoluptatemsed.png?size=50x50&set=set1",
    name: "Phyllida Guirardin",
    university: "University of Limerick",
    sentences:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    email: "pguirardin5r@miitbeian.gov.cn",
  },
  {
    color: "#3e5e0a",
    avatar: "https://robohash.org/nonutpossimus.png?size=50x50&set=set1",
    name: "Emmaline Bowmer",
    university: "Lincoln University Pennsylvania",
    sentences:
      "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
    email: "ebowmer5s@youtube.com",
  },
  {
    color: "#244fbb",
    avatar: "https://robohash.org/occaecatiexpeditanon.png?size=50x50&set=set1",
    name: "Tandie Caddens",
    university: "Technische Universität Hamburg-Harburg",
    sentences:
      "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    email: "tcaddens5t@soup.io",
  },
  {
    color: "#bfa3e0",
    avatar: "https://robohash.org/quiadoloremmaiores.png?size=50x50&set=set1",
    name: "Laurel Ferens",
    university: "Universidad de La Amazonia",
    sentences: "Nulla justo.",
    email: "lferens5u@tripadvisor.com",
  },
  {
    color: "#7156a5",
    avatar: "https://robohash.org/quosintfacere.png?size=50x50&set=set1",
    name: "Carleen McPhelimy",
    university: "Indian Veterinary Research Institute",
    sentences:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
    email: "cmcphelimy5v@google.com.br",
  },
  {
    color: "#1a4d80",
    avatar: "https://robohash.org/sapienteutin.png?size=50x50&set=set1",
    name: "Anna-maria Josifovic",
    university: "Universidad Pablo de Olavide",
    sentences:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    email: "ajosifovic5w@google.com",
  },
  {
    color: "#7983e5",
    avatar:
      "https://robohash.org/quiacupiditateoccaecati.png?size=50x50&set=set1",
    name: "Eli Fenemore",
    university: "Ternopil Academy of National Economy",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
    email: "efenemore5x@xrea.com",
  },
  {
    color: "#50d989",
    avatar:
      "https://robohash.org/reprehenderitestanimi.png?size=50x50&set=set1",
    name: "Benetta Bartunek",
    university: "Universidad Nacional de Jujuy",
    sentences:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    email: "bbartunek5y@cloudflare.com",
  },
  {
    color: "#5a8251",
    avatar: "https://robohash.org/rerumidsequi.png?size=50x50&set=set1",
    name: "Jolee Joubert",
    university: "Kyoto Gakuen University",
    sentences:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
    email: "jjoubert5z@soup.io",
  },
  {
    color: "#32a923",
    avatar: "https://robohash.org/sitmaioreslaudantium.png?size=50x50&set=set1",
    name: "Joshuah Weatherhogg",
    university: "Belarussian National Technical University",
    sentences:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    email: "jweatherhogg60@yellowbook.com",
  },
  {
    color: "#932b9a",
    avatar: "https://robohash.org/nullacommodieveniet.png?size=50x50&set=set1",
    name: "Geno Josiah",
    university: "Agnes Scott College",
    sentences:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    email: "gjosiah61@comsenz.com",
  },
  {
    color: "#d27621",
    avatar:
      "https://robohash.org/accusantiumdelectusquia.png?size=50x50&set=set1",
    name: "Marge Allaway",
    university: "Universitas Simalungun",
    sentences:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    email: "mallaway62@indiatimes.com",
  },
  {
    color: "#baffcd",
    avatar: "https://robohash.org/eteumculpa.png?size=50x50&set=set1",
    name: "Haywood Meacher",
    university: "Regis College",
    sentences:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
    email: "hmeacher63@sciencedaily.com",
  },
  {
    color: "#0bdfce",
    avatar: "https://robohash.org/nullavelunde.png?size=50x50&set=set1",
    name: "Tommy Mewes",
    university: "Thainguyen University of Agriculture and Forestry",
    sentences:
      "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    email: "tmewes64@yellowbook.com",
  },
  {
    color: "#75f475",
    avatar: "https://robohash.org/utabcorporis.png?size=50x50&set=set1",
    name: "Westbrooke Willson",
    university: "University of Wisconsin - La Crosse",
    sentences:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    email: "wwillson65@opensource.org",
  },
  {
    color: "#c60dfd",
    avatar: "https://robohash.org/quiaaccusantiumsit.png?size=50x50&set=set1",
    name: "Terrell Crambie",
    university:
      "Institut d'Agriculture, de Technologie et d'Education de Kibungo",
    sentences:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    email: "tcrambie66@meetup.com",
  },
  {
    color: "#61a4f7",
    avatar: "https://robohash.org/facilisquismolestiae.png?size=50x50&set=set1",
    name: "Nikolaus Zottoli",
    university: "Faculdade Jaguariúna",
    sentences:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    email: "nzottoli67@blogspot.com",
  },
  {
    color: "#5edd1c",
    avatar: "https://robohash.org/nesciuntadignissimos.png?size=50x50&set=set1",
    name: "Burgess Moorcraft",
    university: "Circleville Bible College",
    sentences:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    email: "bmoorcraft68@home.pl",
  },
  {
    color: "#cbbc18",
    avatar:
      "https://robohash.org/suntvoluptatestenetur.png?size=50x50&set=set1",
    name: "Mil Josey",
    university: "Islamic Azad University, Yazd",
    sentences:
      "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    email: "mjosey69@goo.gl",
  },
  {
    color: "#752fef",
    avatar: "https://robohash.org/quiaautest.png?size=50x50&set=set1",
    name: "Orrin Casol",
    university: "University of Paisley",
    sentences:
      "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    email: "ocasol6a@reverbnation.com",
  },
  {
    color: "#4cce75",
    avatar: "https://robohash.org/porrositveritatis.png?size=50x50&set=set1",
    name: "Ursola Speechley",
    university: "King Mongkut's University of Technology North Bangkok",
    sentences:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    email: "uspeechley6b@tumblr.com",
  },
  {
    color: "#d78cef",
    avatar: "https://robohash.org/dignissimosetmodi.png?size=50x50&set=set1",
    name: "Dwight Joselovitch",
    university: "Divine Word University",
    sentences:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    email: "djoselovitch6c@jimdo.com",
  },
  {
    color: "#378f6c",
    avatar: "https://robohash.org/delenitialiasid.png?size=50x50&set=set1",
    name: "Emelen Tupman",
    university: "Kharkiv State Medical University",
    sentences:
      "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    email: "etupman6d@parallels.com",
  },
  {
    color: "#9b9629",
    avatar: "https://robohash.org/doloribusseddolorum.png?size=50x50&set=set1",
    name: "Min Gress",
    university: "Instituto Tecnológico de Morelia",
    sentences:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
    email: "mgress6e@tinyurl.com",
  },
  {
    color: "#3ea889",
    avatar:
      "https://robohash.org/consecteturquisquamdelectus.png?size=50x50&set=set1",
    name: "Beckie Benz",
    university: "Northface University",
    sentences:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    email: "bbenz6f@nps.gov",
  },
  {
    color: "#ff82f1",
    avatar: "https://robohash.org/corporisducimusquia.png?size=50x50&set=set1",
    name: "Emalee McNamee",
    university: "Universidad Autónoma de Occidente",
    sentences:
      "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    email: "emcnamee6g@jalbum.net",
  },
  {
    color: "#ddef3c",
    avatar: "https://robohash.org/voluptasaperiameaque.png?size=50x50&set=set1",
    name: "Julietta Ipsgrave",
    university: "Universidade Federal do Acre",
    sentences: "Nullam varius.",
    email: "jipsgrave6h@oaic.gov.au",
  },
  {
    color: "#9e9e83",
    avatar: "https://robohash.org/ablaudantiumsit.png?size=50x50&set=set1",
    name: "Corilla Crichton",
    university: "Madhya Pradesh Bhoj (Open) University",
    sentences:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    email: "ccrichton6i@baidu.com",
  },
  {
    color: "#e02591",
    avatar: "https://robohash.org/sapientealiasquia.png?size=50x50&set=set1",
    name: "Joana Lifton",
    university: "Salve Regina University",
    sentences:
      "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    email: "jlifton6j@answers.com",
  },
  {
    color: "#c4912e",
    avatar: "https://robohash.org/corporisutcommodi.png?size=50x50&set=set1",
    name: "Callie Whatson",
    university: "Taibah University",
    sentences:
      "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "cwhatson6k@columbia.edu",
  },
  {
    color: "#dce130",
    avatar: "https://robohash.org/teneturvoluptasenim.png?size=50x50&set=set1",
    name: "Ranee Largan",
    university: "Chinese University of Hong Kong",
    sentences:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    email: "rlargan6l@newyorker.com",
  },
  {
    color: "#328775",
    avatar: "https://robohash.org/aspernaturestanimi.png?size=50x50&set=set1",
    name: "Tonya McGraith",
    university: "Semnan University of Medical Sciences",
    sentences:
      "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    email: "tmcgraith6m@jiathis.com",
  },
  {
    color: "#a4db97",
    avatar: "https://robohash.org/veniametnobis.png?size=50x50&set=set1",
    name: "Nichole Laurant",
    university: "University of the Air",
    sentences:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    email: "nlaurant6n@cdbaby.com",
  },
  {
    color: "#ee947f",
    avatar:
      "https://robohash.org/ipsamdolorumexplicabo.png?size=50x50&set=set1",
    name: "Zilvia Trahmel",
    university: "China youth college for political science",
    sentences: "Nulla justo.",
    email: "ztrahmel6o@ezinearticles.com",
  },
  {
    color: "#9c3b9b",
    avatar: "https://robohash.org/doloresofficiisaut.png?size=50x50&set=set1",
    name: "Janek Alenichicov",
    university: "Georgia State University",
    sentences:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    email: "jalenichicov6p@hhs.gov",
  },
  {
    color: "#46f9c4",
    avatar: "https://robohash.org/autemnullaad.png?size=50x50&set=set1",
    name: "Lorna Edmondson",
    university: "Institute of Teachers Education, Kota Bharu",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    email: "ledmondson6q@vistaprint.com",
  },
  {
    color: "#8194f3",
    avatar: "https://robohash.org/quiaquisoluta.png?size=50x50&set=set1",
    name: "Bird Gidden",
    university: "Samchok National University",
    sentences:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    email: "bgidden6r@webeden.co.uk",
  },
  {
    color: "#2ed180",
    avatar: "https://robohash.org/nemoeanobis.png?size=50x50&set=set1",
    name: "Emlyn Peachment",
    university: "Hogeschool van Amsterdam",
    sentences:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
    email: "epeachment6s@hostgator.com",
  },
  {
    color: "#8aa2c2",
    avatar:
      "https://robohash.org/sedvoluptatemofficiis.png?size=50x50&set=set1",
    name: "Bette-ann Redington",
    university: "Agricultural University of Poznan",
    sentences:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
    email: "bredington6t@1und1.de",
  },
  {
    color: "#1dee37",
    avatar:
      "https://robohash.org/eligendiearumblanditiis.png?size=50x50&set=set1",
    name: "Rutter Malim",
    university: "Valley Forge Christian College",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
    email: "rmalim6u@upenn.edu",
  },
  {
    color: "#188e50",
    avatar: "https://robohash.org/nihilutqui.png?size=50x50&set=set1",
    name: "Lucienne Duffett",
    university: "Universität Flensburg",
    sentences:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
    email: "lduffett6v@usatoday.com",
  },
  {
    color: "#4895ba",
    avatar:
      "https://robohash.org/consequaturexcepturimaiores.png?size=50x50&set=set1",
    name: "Bogart Algate",
    university: "Nisho Gakusha University",
    sentences:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    email: "balgate6w@amazon.co.uk",
  },
  {
    color: "#9f038a",
    avatar: "https://robohash.org/sitetlaborum.png?size=50x50&set=set1",
    name: "Kalli McComiskie",
    university: "Southern Taiwan University of Technology",
    sentences:
      "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
    email: "kmccomiskie6x@storify.com",
  },
  {
    color: "#1cc802",
    avatar:
      "https://robohash.org/etreprehenderitdignissimos.png?size=50x50&set=set1",
    name: "Kim Pyvis",
    university: "St. Petersburg College",
    sentences:
      "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
    email: "kpyvis6y@wisc.edu",
  },
  {
    color: "#05890d",
    avatar: "https://robohash.org/illumducimusminima.png?size=50x50&set=set1",
    name: "Jemima Nell",
    university: "Philippine Military Academy",
    sentences:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
    email: "jnell6z@ibm.com",
  },
  {
    color: "#5698a6",
    avatar: "https://robohash.org/ametreprehenderitsit.png?size=50x50&set=set1",
    name: "Lazaro Lindborg",
    university: "University of La Verne",
    sentences:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    email: "llindborg70@smugmug.com",
  },
  {
    color: "#c952c6",
    avatar: "https://robohash.org/afugiatnostrum.png?size=50x50&set=set1",
    name: "Gennifer Huffa",
    university: "Westsächsische Hochschule Zwickau (FH)",
    sentences:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    email: "ghuffa71@tripadvisor.com",
  },
  {
    color: "#4c8f14",
    avatar: "https://robohash.org/odioinmolestiae.png?size=50x50&set=set1",
    name: "Dollie Fahrenbach",
    university: "Ecole Nationale Supérieure de Chimie de Lille",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
    email: "dfahrenbach72@ifeng.com",
  },
  {
    color: "#ddd8f7",
    avatar: "https://robohash.org/adipisciquocumque.png?size=50x50&set=set1",
    name: "Bella Hannay",
    university: "Technological University (Taunggyi)",
    sentences:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    email: "bhannay73@rakuten.co.jp",
  },
  {
    color: "#0b976b",
    avatar: "https://robohash.org/aquasad.png?size=50x50&set=set1",
    name: "Robby Espadas",
    university: "Centro Universitario Ixtlahuaca",
    sentences:
      "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    email: "respadas74@myspace.com",
  },
  {
    color: "#8d3ff3",
    avatar: "https://robohash.org/quiutvoluptas.png?size=50x50&set=set1",
    name: "Wandie Jacklin",
    university: "Beijing Sport University",
    sentences:
      "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    email: "wjacklin75@oakley.com",
  },
  {
    color: "#916870",
    avatar:
      "https://robohash.org/rerumdoloribusperspiciatis.png?size=50x50&set=set1",
    name: "Brenna Vicary",
    university: "Open International University for Alternative Medicines",
    sentences:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    email: "bvicary76@qq.com",
  },
  {
    color: "#b5c598",
    avatar: "https://robohash.org/quialiasofficiis.png?size=50x50&set=set1",
    name: "Linell Renzullo",
    university: "Shizuoka University",
    sentences:
      "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    email: "lrenzullo77@example.com",
  },
  {
    color: "#6b4cae",
    avatar: "https://robohash.org/enimaliquiddebitis.png?size=50x50&set=set1",
    name: "Reid Salasar",
    university: "Louisiana College",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    email: "rsalasar78@moonfruit.com",
  },
  {
    color: "#1998e5",
    avatar: "https://robohash.org/cumquesitsuscipit.png?size=50x50&set=set1",
    name: "Skelly Hearnshaw",
    university: "Instituto Tecnológico de Sonora",
    sentences:
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    email: "shearnshaw79@tuttocitta.it",
  },
  {
    color: "#7a76b7",
    avatar: "https://robohash.org/laborumeumut.png?size=50x50&set=set1",
    name: "Marysa O'Connell",
    university: "Aquinas College",
    sentences:
      "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    email: "moconnell7a@oaic.gov.au",
  },
  {
    color: "#b2bdf7",
    avatar: "https://robohash.org/porronamhic.png?size=50x50&set=set1",
    name: "Heddi Rozea",
    university: "Embry Riddle Aeronautical University, Prescott",
    sentences:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.",
    email: "hrozea7b@g.co",
  },
  {
    color: "#8eba54",
    avatar:
      "https://robohash.org/etperferendisvoluptate.png?size=50x50&set=set1",
    name: "Isidor Milsap",
    university: "Université de Technologie de Troyes",
    sentences:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    email: "imilsap7c@npr.org",
  },
  {
    color: "#40421f",
    avatar:
      "https://robohash.org/accusamusrepellenduspossimus.png?size=50x50&set=set1",
    name: "Johnette Raffon",
    university: "University of Nebraska Medical Center",
    sentences:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    email: "jraffon7d@stumbleupon.com",
  },
  {
    color: "#de04c9",
    avatar: "https://robohash.org/estquosoptio.png?size=50x50&set=set1",
    name: "Merle McKeown",
    university: "University of Wroclaw",
    sentences:
      "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    email: "mmckeown7e@photobucket.com",
  },
  {
    color: "#af5068",
    avatar:
      "https://robohash.org/rationeatquevoluptate.png?size=50x50&set=set1",
    name: "Ellette Mowlam",
    university: "Sherman College of Straight Chiropractic",
    sentences:
      "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    email: "emowlam7f@cbsnews.com",
  },
  {
    color: "#707f36",
    avatar:
      "https://robohash.org/occaecaticonsecteturquod.png?size=50x50&set=set1",
    name: "Duke Rubinow",
    university: "Wuhan Technical University of Surveying and Mapping",
    sentences: "In hac habitasse platea dictumst.",
    email: "drubinow7g@timesonline.co.uk",
  },
  {
    color: "#fa2ee2",
    avatar: "https://robohash.org/rerumquisat.png?size=50x50&set=set1",
    name: "Valida Skarin",
    university: "American World University",
    sentences:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    email: "vskarin7h@reference.com",
  },
  {
    color: "#389c15",
    avatar: "https://robohash.org/sitdoloreprovident.png?size=50x50&set=set1",
    name: "Caspar O'Mannion",
    university: "Meisei University",
    sentences:
      "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    email: "comannion7i@booking.com",
  },
  {
    color: "#3782fc",
    avatar: "https://robohash.org/autemesta.png?size=50x50&set=set1",
    name: "Crystie Keller",
    university: "International University of Kagoshima",
    sentences:
      "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    email: "ckeller7j@odnoklassniki.ru",
  },
  {
    color: "#99221d",
    avatar: "https://robohash.org/rerumquiafuga.png?size=50x50&set=set1",
    name: "Kerrin Ramirez",
    university: "Merkur Internationale FH Karlsruhe",
    sentences:
      "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    email: "kramirez7k@illinois.edu",
  },
  {
    color: "#990e8e",
    avatar: "https://robohash.org/nullasintnisi.png?size=50x50&set=set1",
    name: "Alicia Grunguer",
    university: "Universidad de Manizales",
    sentences:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    email: "agrunguer7l@reverbnation.com",
  },
  {
    color: "#2faae3",
    avatar: "https://robohash.org/etreiciendisiusto.png?size=50x50&set=set1",
    name: "Mort Benoit",
    university: "Zambian Open University",
    sentences:
      "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.",
    email: "mbenoit7m@wsj.com",
  },
  {
    color: "#471149",
    avatar:
      "https://robohash.org/doloremquerepellendusillum.png?size=50x50&set=set1",
    name: "Trixi Basham",
    university: "Université de Sétif",
    sentences:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    email: "tbasham7n@un.org",
  },
  {
    color: "#53c6c6",
    avatar:
      "https://robohash.org/voluptatemdelenitiest.png?size=50x50&set=set1",
    name: "Gertrudis Hempel",
    university: "Newberry College",
    sentences:
      "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    email: "ghempel7o@wikia.com",
  },
  {
    color: "#54cab5",
    avatar: "https://robohash.org/quohicodit.png?size=50x50&set=set1",
    name: "Spense Burridge",
    university: "Université de Ziguinchor",
    sentences:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
    email: "sburridge7p@sourceforge.net",
  },
  {
    color: "#3a4021",
    avatar: "https://robohash.org/porroquiaofficia.png?size=50x50&set=set1",
    name: "Lavina Petruszka",
    university: "Rasmussen College, Minnesota Campuses",
    sentences:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
    email: "lpetruszka7q@squarespace.com",
  },
  {
    color: "#9f3ea5",
    avatar: "https://robohash.org/autemquodqui.png?size=50x50&set=set1",
    name: "Eward Smitheman",
    university: "Fayoum University",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    email: "esmitheman7r@hao123.com",
  },
  {
    color: "#3970fd",
    avatar: "https://robohash.org/omnisnemocum.png?size=50x50&set=set1",
    name: "Kristal Garie",
    university:
      "St. Elizabeth’s College of Health and Social Sciences in Bratislava",
    sentences:
      "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    email: "kgarie7s@gravatar.com",
  },
  {
    color: "#ed406b",
    avatar: "https://robohash.org/cumnatuset.png?size=50x50&set=set1",
    name: "Maryjo Micklewright",
    university: "University of Colorado at Denver",
    sentences:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    email: "mmicklewright7t@tuttocitta.it",
  },
  {
    color: "#0f2801",
    avatar:
      "https://robohash.org/laudantiumpraesentiumquia.png?size=50x50&set=set1",
    name: "Lorain Ipsly",
    university: "Universidad Carlos III de Madrid",
    sentences:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
    email: "lipsly7u@studiopress.com",
  },
  {
    color: "#d5d083",
    avatar: "https://robohash.org/autatquequo.png?size=50x50&set=set1",
    name: "Leopold Bertot",
    university: "Friedrich-Alexander Universität Erlangen-Nürnberg",
    sentences:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    email: "lbertot7v@vkontakte.ru",
  },
  {
    color: "#910dac",
    avatar: "https://robohash.org/estomniscorrupti.png?size=50x50&set=set1",
    name: "Adoree Keelin",
    university: "Shendi University",
    sentences:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
    email: "akeelin7w@cnn.com",
  },
  {
    color: "#29f40f",
    avatar:
      "https://robohash.org/molestiaeatexercitationem.png?size=50x50&set=set1",
    name: "Zora Ragsdall",
    university: "Berklee College of Music",
    sentences:
      "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    email: "zragsdall7x@wordpress.com",
  },
  {
    color: "#16632a",
    avatar: "https://robohash.org/utmagniin.png?size=50x50&set=set1",
    name: "Hulda Landsman",
    university: "College of the Atlantic",
    sentences:
      "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    email: "hlandsman7y@google.com.au",
  },
  {
    color: "#1f7d09",
    avatar: "https://robohash.org/quoquidemasperiores.png?size=50x50&set=set1",
    name: "Jamill Hysom",
    university: "East-Siberian State University",
    sentences: "Vivamus vestibulum sagittis sapien.",
    email: "jhysom7z@columbia.edu",
  },
  {
    color: "#16024d",
    avatar:
      "https://robohash.org/molestiaefugaoccaecati.png?size=50x50&set=set1",
    name: "Page Cluett",
    university: "Guilan University",
    sentences: "Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    email: "pcluett80@feedburner.com",
  },
  {
    color: "#750ea4",
    avatar: "https://robohash.org/utundeeum.png?size=50x50&set=set1",
    name: "Jacob Henken",
    university: "University of Lusaka",
    sentences:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    email: "jhenken81@slideshare.net",
  },
  {
    color: "#32d253",
    avatar: "https://robohash.org/totamquiset.png?size=50x50&set=set1",
    name: "Templeton Lissemore",
    university: "Central Baptist College",
    sentences:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
    email: "tlissemore82@dailymotion.com",
  },
  {
    color: "#b435a1",
    avatar: "https://robohash.org/nullavoluptaseaque.png?size=50x50&set=set1",
    name: "Winna Marzele",
    university: "Armenian State Agrarian University",
    sentences: "Quisque ut erat. Curabitur gravida nisi at nibh.",
    email: "wmarzele83@economist.com",
  },
  {
    color: "#2c4dd7",
    avatar: "https://robohash.org/providentquianam.png?size=50x50&set=set1",
    name: "Moise Overnell",
    university: "University of Montevallo",
    sentences: "Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    email: "movernell84@ftc.gov",
  },
  {
    color: "#e24f9e",
    avatar:
      "https://robohash.org/aliquidrecusandaeatque.png?size=50x50&set=set1",
    name: "Jabez Marwood",
    university: "Northern State Medical University",
    sentences:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    email: "jmarwood85@ameblo.jp",
  },
  {
    color: "#667bef",
    avatar: "https://robohash.org/quasetrerum.png?size=50x50&set=set1",
    name: "Nonna Drinkall",
    university: "Yamanashi University",
    sentences:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    email: "ndrinkall86@flavors.me",
  },
  {
    color: "#5b2825",
    avatar: "https://robohash.org/etdelenitiin.png?size=50x50&set=set1",
    name: "Allene Sandal",
    university: "Yerevan State University",
    sentences:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    email: "asandal87@sohu.com",
  },
  {
    color: "#a1762b",
    avatar: "https://robohash.org/maximeutanimi.png?size=50x50&set=set1",
    name: "Chris Squire",
    university: "Athabasca University",
    sentences:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    email: "csquire88@addthis.com",
  },
  {
    color: "#f35be0",
    avatar: "https://robohash.org/optioquodconsequatur.png?size=50x50&set=set1",
    name: "Wayland Clemenson",
    university: "Philosophisch-Theologische Hochschule SVD Sankt Augustin",
    sentences:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    email: "wclemenson89@wufoo.com",
  },
  {
    color: "#12208c",
    avatar: "https://robohash.org/officiadolorevel.png?size=50x50&set=set1",
    name: "Ted Dron",
    university: "Instituto Mauá de Tecnologia",
    sentences:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    email: "tdron8a@ed.gov",
  },
  {
    color: "#49f720",
    avatar: "https://robohash.org/impeditnondolores.png?size=50x50&set=set1",
    name: "Alyss Chesshyre",
    university: "Université Vincennes Saint-Denis (Paris VIII)",
    sentences:
      "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    email: "achesshyre8b@wikipedia.org",
  },
  {
    color: "#b23772",
    avatar: "https://robohash.org/oditquiautem.png?size=50x50&set=set1",
    name: "Cly Laundon",
    university: "Kiev National University of Construction and Architecture",
    sentences:
      "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    email: "claundon8c@shutterfly.com",
  },
  {
    color: "#5e201e",
    avatar: "https://robohash.org/fugiatdolornon.png?size=50x50&set=set1",
    name: "Evy Shopcott",
    university: "Zawiya University",
    sentences:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    email: "eshopcott8d@spiegel.de",
  },
  {
    color: "#29a955",
    avatar: "https://robohash.org/harummollitiaaut.png?size=50x50&set=set1",
    name: "Oralia Deery",
    university: "National Dong Hwa University",
    sentences:
      "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
    email: "odeery8e@amazon.com",
  },
  {
    color: "#a91b31",
    avatar: "https://robohash.org/nobisconsequaturquae.png?size=50x50&set=set1",
    name: "Stephenie Wasselin",
    university: "Université Robert Schuman (Strasbourg III)",
    sentences:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    email: "swasselin8f@mapy.cz",
  },
  {
    color: "#02529b",
    avatar: "https://robohash.org/quiaundeveritatis.png?size=50x50&set=set1",
    name: "Trey Domoney",
    university: "Universidade Católica de Goiás",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
    email: "tdomoney8g@archive.org",
  },
  {
    color: "#44c0c4",
    avatar:
      "https://robohash.org/temporavoluptatemsaepe.png?size=50x50&set=set1",
    name: "Humberto Wickham",
    university: "Jimei University",
    sentences:
      "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
    email: "hwickham8h@unblog.fr",
  },
  {
    color: "#b181ed",
    avatar: "https://robohash.org/nesciuntnihilqui.png?size=50x50&set=set1",
    name: "Tomaso McKimmey",
    university: "Universidad Nacional Abierta",
    sentences:
      "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    email: "tmckimmey8i@free.fr",
  },
  {
    color: "#a102c6",
    avatar: "https://robohash.org/temporeeiusatque.png?size=50x50&set=set1",
    name: "Hattie Synnott",
    university: "University of North Carolina at Asheville",
    sentences:
      "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    email: "hsynnott8j@microsoft.com",
  },
  {
    color: "#af8bce",
    avatar:
      "https://robohash.org/repellendusidvoluptas.png?size=50x50&set=set1",
    name: "Ivan Tuckley",
    university: "Saint George's Hospital Medical School, University of London",
    sentences:
      "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    email: "ituckley8k@state.gov",
  },
  {
    color: "#0fe29e",
    avatar:
      "https://robohash.org/quaeratvoluptatibusvoluptas.png?size=50x50&set=set1",
    name: "Eldredge Maier",
    university: "Oregon Graduate Institute of Science and Technology",
    sentences:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
    email: "emaier8l@simplemachines.org",
  },
  {
    color: "#eb70e8",
    avatar: "https://robohash.org/velitetsint.png?size=50x50&set=set1",
    name: "Elnore Pettyfar",
    university: "Szent István University",
    sentences:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    email: "epettyfar8m@google.com.hk",
  },
  {
    color: "#f2e9c1",
    avatar: "https://robohash.org/illomaximepariatur.png?size=50x50&set=set1",
    name: "Larissa Cutbush",
    university: "Wuxi University of Light Industry",
    sentences:
      "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
    email: "lcutbush8n@lulu.com",
  },
  {
    color: "#fe2d0a",
    avatar: "https://robohash.org/idnostrumtemporibus.png?size=50x50&set=set1",
    name: "Davey Perrottet",
    university: "South China University",
    sentences:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
    email: "dperrottet8o@opera.com",
  },
  {
    color: "#f5ce96",
    avatar: "https://robohash.org/isteconsequaturnihil.png?size=50x50&set=set1",
    name: "Almire Marriner",
    university: "Ardabil University of Medical Sciences",
    sentences:
      "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    email: "amarriner8p@aol.com",
  },
  {
    color: "#b281ed",
    avatar: "https://robohash.org/delenitisiteius.png?size=50x50&set=set1",
    name: "Edgar Nolan",
    university: "Sinai University",
    sentences:
      "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    email: "enolan8q@mlb.com",
  },
  {
    color: "#f346b6",
    avatar: "https://robohash.org/atqueautemveritatis.png?size=50x50&set=set1",
    name: "Lemuel Secker",
    university: "Anna University",
    sentences:
      "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    email: "lsecker8r@theglobeandmail.com",
  },
  {
    color: "#a0a8d9",
    avatar: "https://robohash.org/etquaeratillum.png?size=50x50&set=set1",
    name: "Molly Proudlock",
    university: "Université de Liège",
    sentences:
      "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "mproudlock8s@surveymonkey.com",
  },
  {
    color: "#456b63",
    avatar: "https://robohash.org/ipsamharumvoluptates.png?size=50x50&set=set1",
    name: "Margie Zwicker",
    university: "Al Maarif University College",
    sentences:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    email: "mzwicker8t@gizmodo.com",
  },
  {
    color: "#9ce0cf",
    avatar: "https://robohash.org/similiquebeataequia.png?size=50x50&set=set1",
    name: "Hali Docherty",
    university: "Universidad Atlantida Argentina",
    sentences:
      "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    email: "hdocherty8u@de.vu",
  },
  {
    color: "#5cc1f1",
    avatar: "https://robohash.org/velitvelvoluptatem.png?size=50x50&set=set1",
    name: "Paige Cossam",
    university: "Hamamatsu University School of Medicine",
    sentences:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    email: "pcossam8v@boston.com",
  },
  {
    color: "#26ba13",
    avatar:
      "https://robohash.org/evenietblanditiisiure.png?size=50x50&set=set1",
    name: "Arni Brickwood",
    university: "Art University",
    sentences:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    email: "abrickwood8w@si.edu",
  },
  {
    color: "#fd09ee",
    avatar: "https://robohash.org/accusamusvelitmagni.png?size=50x50&set=set1",
    name: "Debbi Imrie",
    university: "Kaduna State University",
    sentences:
      "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    email: "dimrie8x@usnews.com",
  },
  {
    color: "#fcde08",
    avatar: "https://robohash.org/eaquoarchitecto.png?size=50x50&set=set1",
    name: "Esmeralda Mellon",
    university: "Amman University",
    sentences:
      "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    email: "emellon8y@independent.co.uk",
  },
  {
    color: "#2d8455",
    avatar: "https://robohash.org/natussedtempore.png?size=50x50&set=set1",
    name: "Olly Livett",
    university: "University of Commerce Luigi Bocconi",
    sentences:
      "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    email: "olivett8z@china.com.cn",
  },
  {
    color: "#fed9fb",
    avatar: "https://robohash.org/excepturiveroat.png?size=50x50&set=set1",
    name: "Tabbatha Lillistone",
    university: "Universidade de Passo Fundo",
    sentences:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    email: "tlillistone90@twitpic.com",
  },
  {
    color: "#e6cb1a",
    avatar: "https://robohash.org/enimnoniure.png?size=50x50&set=set1",
    name: "Gabriella Oaker",
    university: "Clarion University",
    sentences:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    email: "goaker91@chronoengine.com",
  },
  {
    color: "#d18a02",
    avatar:
      "https://robohash.org/utmolestiaeperspiciatis.png?size=50x50&set=set1",
    name: "Finlay Whittlesey",
    university: "Lagos State University",
    sentences:
      "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    email: "fwhittlesey92@themeforest.net",
  },
  {
    color: "#d5b021",
    avatar: "https://robohash.org/sintcummolestiae.png?size=50x50&set=set1",
    name: "Fernandina Marklund",
    university: "Hawaii Pacific University",
    sentences:
      "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    email: "fmarklund93@ustream.tv",
  },
  {
    color: "#17dbad",
    avatar: "https://robohash.org/enimquiimpedit.png?size=50x50&set=set1",
    name: "Olin Dives",
    university: "Saratov State University",
    sentences:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.",
    email: "odives94@163.com",
  },
  {
    color: "#7a69aa",
    avatar: "https://robohash.org/dolorequiaaperiam.png?size=50x50&set=set1",
    name: "Alexi Caygill",
    university: "University of Technology Jamaica",
    sentences:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    email: "acaygill95@wp.com",
  },
  {
    color: "#233196",
    avatar: "https://robohash.org/insitaspernatur.png?size=50x50&set=set1",
    name: "Manuel Sprules",
    university: "Indiana Institute of Technologyy",
    sentences:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.",
    email: "msprules96@macromedia.com",
  },
  {
    color: "#59e416",
    avatar:
      "https://robohash.org/quisassumendatemporibus.png?size=50x50&set=set1",
    name: "Leticia Bergeon",
    university: "Hampshire College",
    sentences:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
    email: "lbergeon97@sohu.com",
  },
  {
    color: "#fb07dd",
    avatar: "https://robohash.org/velitnobislibero.png?size=50x50&set=set1",
    name: "Muffin Roxby",
    university: "Abasyn University Peshawar",
    sentences:
      "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    email: "mroxby98@theguardian.com",
  },
  {
    color: "#296323",
    avatar: "https://robohash.org/nemoenimducimus.png?size=50x50&set=set1",
    name: "Maia Richings",
    university: "Mount Sinai School of Medicine",
    sentences:
      "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    email: "mrichings99@pbs.org",
  },
  {
    color: "#be43a7",
    avatar: "https://robohash.org/rationequosaut.png?size=50x50&set=set1",
    name: "Kakalina Baise",
    university: "East Tennessee State University",
    sentences:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    email: "kbaise9a@wikispaces.com",
  },
  {
    color: "#fcf345",
    avatar: "https://robohash.org/vitaeautipsam.png?size=50x50&set=set1",
    name: "Darb Curuclis",
    university: "Dominican University",
    sentences:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    email: "dcuruclis9b@ebay.co.uk",
  },
  {
    color: "#dcd3cb",
    avatar: "https://robohash.org/harumsuntitaque.png?size=50x50&set=set1",
    name: "Kim Davenall",
    university: "Yarmouk Private University ",
    sentences:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
    email: "kdavenall9c@gizmodo.com",
  },
  {
    color: "#1a9198",
    avatar: "https://robohash.org/nonrepellenduseius.png?size=50x50&set=set1",
    name: "Karin Mellon",
    university: "University of Jordan",
    sentences:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    email: "kmellon9d@1und1.de",
  },
  {
    color: "#5c577a",
    avatar: "https://robohash.org/quovoluptatumiure.png?size=50x50&set=set1",
    name: "Wally Tordoff",
    university: "Agricultural University of Wroclaw",
    sentences:
      "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    email: "wtordoff9e@stumbleupon.com",
  },
  {
    color: "#cb6132",
    avatar: "https://robohash.org/quiaautquidem.png?size=50x50&set=set1",
    name: "Madelyn Wycliff",
    university: "University of Nevada - Las Vegas",
    sentences:
      "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    email: "mwycliff9f@google.it",
  },
  {
    color: "#1627bc",
    avatar: "https://robohash.org/placeatnumquamsint.png?size=50x50&set=set1",
    name: "Giff MacManus",
    university: "College of Nursing and Allied Health Scinces",
    sentences:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    email: "gmacmanus9g@hostgator.com",
  },
  {
    color: "#f33b76",
    avatar: "https://robohash.org/etnullavoluptas.png?size=50x50&set=set1",
    name: "Robby Gaine of England",
    university: "Macon State College",
    sentences:
      "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
    email: "rgaine9h@dmoz.org",
  },
  {
    color: "#bb5915",
    avatar: "https://robohash.org/eligendiessenulla.png?size=50x50&set=set1",
    name: "Neill Cornelis",
    university: "College of St. Mary",
    sentences:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
    email: "ncornelis9i@wufoo.com",
  },
  {
    color: "#9ede75",
    avatar: "https://robohash.org/nihilfugitvoluptas.png?size=50x50&set=set1",
    name: "Cordy Lambertz",
    university: "Yerevan State University",
    sentences:
      "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    email: "clambertz9j@uol.com.br",
  },
  {
    color: "#d5282d",
    avatar: "https://robohash.org/possimuseaeius.png?size=50x50&set=set1",
    name: "Jarid Stonier",
    university: "Bashkir State Medical University",
    sentences:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    email: "jstonier9k@cdc.gov",
  },
  {
    color: "#016f86",
    avatar: "https://robohash.org/ametrepellendusomnis.png?size=50x50&set=set1",
    name: "Brant Giddy",
    university: "Dire Dawa University",
    sentences:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    email: "bgiddy9l@wufoo.com",
  },
  {
    color: "#baef05",
    avatar: "https://robohash.org/explicabonemout.png?size=50x50&set=set1",
    name: "Chandler Gibbie",
    university: "Mahatma Gandhi Kashi Vidyapith ",
    sentences:
      "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    email: "cgibbie9m@tinypic.com",
  },
  {
    color: "#0a9a40",
    avatar: "https://robohash.org/earumnullarepellat.png?size=50x50&set=set1",
    name: "Nikolas Scholtz",
    university: "Northeast Forest University",
    sentences:
      "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    email: "nscholtz9n@people.com.cn",
  },
  {
    color: "#46d4ff",
    avatar: "https://robohash.org/adipiscinamet.png?size=50x50&set=set1",
    name: "Brodie Lorenz",
    university: "Universitas Madura",
    sentences:
      "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    email: "blorenz9o@e-recht24.de",
  },
  {
    color: "#740beb",
    avatar:
      "https://robohash.org/fugiatoptiorepellendus.png?size=50x50&set=set1",
    name: "Harrie Ching",
    university: "Davis and Elkins College",
    sentences:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    email: "hching9p@geocities.jp",
  },
  {
    color: "#5ff4a4",
    avatar:
      "https://robohash.org/beataesimiliqueconsequuntur.png?size=50x50&set=set1",
    name: "Vina Szreter",
    university: "Christian Brothers University",
    sentences: "Praesent blandit.",
    email: "vszreter9q@wikispaces.com",
  },
  {
    color: "#228ed2",
    avatar: "https://robohash.org/auteamolestiae.png?size=50x50&set=set1",
    name: "Raquel Penny",
    university: "University of Gdansk",
    sentences:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    email: "rpenny9r@ted.com",
  },
  {
    color: "#f87f93",
    avatar: "https://robohash.org/hicestratione.png?size=50x50&set=set1",
    name: "Brew Meddings",
    university: "Fourah Bay College, University of Sierra Leone",
    sentences:
      "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
    email: "bmeddings9s@gmpg.org",
  },
  {
    color: "#c48af3",
    avatar:
      "https://robohash.org/debitisinciduntplaceat.png?size=50x50&set=set1",
    name: "Paula Munnion",
    university: "Jain University, Centre for Management Studies",
    sentences: "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    email: "pmunnion9t@businesswire.com",
  },
  {
    color: "#927e0d",
    avatar: "https://robohash.org/sitarchitectoimpedit.png?size=50x50&set=set1",
    name: "Webb Higgonet",
    university: "Indiana University (System)",
    sentences:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    email: "whiggonet9u@timesonline.co.uk",
  },
  {
    color: "#4bf4f9",
    avatar: "https://robohash.org/quiminusvoluptatem.png?size=50x50&set=set1",
    name: "Shalna Lampe",
    university: "Sevastopol National Technical University",
    sentences: "Sed ante. Vivamus tortor.",
    email: "slampe9v@exblog.jp",
  },
  {
    color: "#1a9287",
    avatar: "https://robohash.org/nequeevenietad.png?size=50x50&set=set1",
    name: "Brena Dever",
    university: "Texila American University",
    sentences:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
    email: "bdever9w@usgs.gov",
  },
  {
    color: "#930ba0",
    avatar: "https://robohash.org/hicrerumrepellendus.png?size=50x50&set=set1",
    name: "Chloris Parsons",
    university: "Minnesota School of Professional Psychology",
    sentences:
      "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
    email: "cparsons9x@privacy.gov.au",
  },
  {
    color: "#a0a215",
    avatar: "https://robohash.org/quirepellendusearum.png?size=50x50&set=set1",
    name: "Maire Ludlem",
    university: "St. Michael's College",
    sentences:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    email: "mludlem9y@soup.io",
  },
  {
    color: "#be42f0",
    avatar: "https://robohash.org/ipsumtemporabeatae.png?size=50x50&set=set1",
    name: "Keith Stoney",
    university: "Western International University",
    sentences: "Donec ut mauris eget massa tempor convallis.",
    email: "kstoney9z@slate.com",
  },
  {
    color: "#b8295e",
    avatar: "https://robohash.org/exquiporro.png?size=50x50&set=set1",
    name: "Ertha Cattel",
    university: "Reformed Church University",
    sentences:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
    email: "ecattela0@addtoany.com",
  },
  {
    color: "#a62aa4",
    avatar:
      "https://robohash.org/officiaperferendisblanditiis.png?size=50x50&set=set1",
    name: "Darcy Corkill",
    university: "Université Shalom de Bunia",
    sentences: "Sed vel enim sit amet nunc viverra dapibus.",
    email: "dcorkilla1@51.la",
  },
  {
    color: "#897705",
    avatar: "https://robohash.org/adsedvero.png?size=50x50&set=set1",
    name: "Laraine Waszkiewicz",
    university: "Universidad Bellas Artes",
    sentences:
      "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    email: "lwaszkiewicza2@independent.co.uk",
  },
  {
    color: "#afbb81",
    avatar: "https://robohash.org/utremeum.png?size=50x50&set=set1",
    name: "Antonetta Warcop",
    university: "Vali-e-Asr University",
    sentences:
      "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    email: "awarcopa3@nbcnews.com",
  },
  {
    color: "#cf6a9c",
    avatar: "https://robohash.org/harumquislibero.png?size=50x50&set=set1",
    name: "Kris Neale",
    university: "Technological University (Hmawbi)",
    sentences:
      "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    email: "knealea4@hubpages.com",
  },
  {
    color: "#703ae3",
    avatar:
      "https://robohash.org/laborummagnivoluptatibus.png?size=50x50&set=set1",
    name: "Linn Danne",
    university: "The Tulane University of New Orleans",
    sentences:
      "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
    email: "ldannea5@printfriendly.com",
  },
  {
    color: "#6911cb",
    avatar: "https://robohash.org/repudiandaequiveniam.png?size=50x50&set=set1",
    name: "Jeannine Bridel",
    university: "Sullivan College",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    email: "jbridela6@xinhuanet.com",
  },
  {
    color: "#27e07f",
    avatar: "https://robohash.org/temporedolorenam.png?size=50x50&set=set1",
    name: "Merline Sabin",
    university: "National University of Kaohsiung",
    sentences: "Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    email: "msabina7@spiegel.de",
  },
  {
    color: "#2e347e",
    avatar:
      "https://robohash.org/facereinventoredolores.png?size=50x50&set=set1",
    name: "Marijn Simchenko",
    university: "Universität Erfurt",
    sentences:
      "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
    email: "msimchenkoa8@edublogs.org",
  },
  {
    color: "#b66115",
    avatar: "https://robohash.org/esseased.png?size=50x50&set=set1",
    name: "Kendricks Amerighi",
    university: "Université du Centre, Sousse",
    sentences:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
    email: "kamerighia9@jigsy.com",
  },
  {
    color: "#a8eaa5",
    avatar:
      "https://robohash.org/doloribusquidemquaerat.png?size=50x50&set=set1",
    name: "Marilyn Firby",
    university: "Wilbur Wright College",
    sentences:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
    email: "mfirbyaa@1688.com",
  },
  {
    color: "#6728cc",
    avatar: "https://robohash.org/corporisenimomnis.png?size=50x50&set=set1",
    name: "Ilene Croser",
    university: "Université de la Méditerranée (Aix Marseille II)",
    sentences:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
    email: "icroserab@craigslist.org",
  },
  {
    color: "#0d6940",
    avatar:
      "https://robohash.org/fugitnecessitatibusquo.png?size=50x50&set=set1",
    name: "Darrell Amburgy",
    university: "Chalmers University of Technology",
    sentences:
      "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    email: "damburgyac@sogou.com",
  },
  {
    color: "#d5b083",
    avatar: "https://robohash.org/dolornostrumquo.png?size=50x50&set=set1",
    name: "Alfreda Reymers",
    university: "Krirk University",
    sentences: "In eleifend quam a odio.",
    email: "areymersad@myspace.com",
  },
  {
    color: "#d1eb22",
    avatar: "https://robohash.org/modiestculpa.png?size=50x50&set=set1",
    name: "Kanya Docharty",
    university: "Adamson University",
    sentences:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    email: "kdochartyae@taobao.com",
  },
  {
    color: "#8d57cc",
    avatar: "https://robohash.org/quinonnecessitatibus.png?size=50x50&set=set1",
    name: "Heda Lamburn",
    university: "Nanchang University",
    sentences:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    email: "hlamburnaf@dagondesign.com",
  },
  {
    color: "#ba5a9c",
    avatar: "https://robohash.org/providentexfugit.png?size=50x50&set=set1",
    name: "Obed Cadogan",
    university: "Whitworth College",
    sentences:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    email: "ocadoganag@facebook.com",
  },
  {
    color: "#eedcd4",
    avatar: "https://robohash.org/laboriosammagnisaepe.png?size=50x50&set=set1",
    name: "Jereme Geyton",
    university: "Technical University of Gabrovo",
    sentences: "Donec posuere metus vitae ipsum. Aliquam non mauris.",
    email: "jgeytonah@marketwatch.com",
  },
  {
    color: "#2f6b1a",
    avatar:
      "https://robohash.org/nostrumenimperspiciatis.png?size=50x50&set=set1",
    name: "Ivar Bofield",
    university: "Qauid-e-Awam University of Engineering Sciences & Technology",
    sentences:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    email: "ibofieldai@delicious.com",
  },
  {
    color: "#5a8cab",
    avatar:
      "https://robohash.org/reprehenderitperspiciatistempore.png?size=50x50&set=set1",
    name: "Barnie Bowhay",
    university: "International University of Sarajevo",
    sentences:
      "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    email: "bbowhayaj@comsenz.com",
  },
  {
    color: "#10b5bd",
    avatar: "https://robohash.org/repudiandaeutquos.png?size=50x50&set=set1",
    name: "Imojean Osselton",
    university: "Fukushima University",
    sentences:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
    email: "iosseltonak@ezinearticles.com",
  },
  {
    color: "#f25b06",
    avatar: "https://robohash.org/cumrerumdolores.png?size=50x50&set=set1",
    name: "Julie Casford",
    university: "Pontificia Universidad Católica del Ecuador",
    sentences: "Duis consequat dui nec nisi volutpat eleifend.",
    email: "jcasfordal@i2i.jp",
  },
  {
    color: "#c18313",
    avatar: "https://robohash.org/repellatestquisquam.png?size=50x50&set=set1",
    name: "Delcina Huskisson",
    university: "University of Waikato",
    sentences:
      "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    email: "dhuskissonam@paypal.com",
  },
  {
    color: "#6ccca4",
    avatar: "https://robohash.org/etestomnis.png?size=50x50&set=set1",
    name: "Tiphanie Ielden",
    university: "University of Fine Arts Belgrade",
    sentences:
      "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    email: "tieldenan@gnu.org",
  },
  {
    color: "#371f70",
    avatar:
      "https://robohash.org/reiciendisaliquidvoluptates.png?size=50x50&set=set1",
    name: "Bev Peller",
    university: "Université Kasdi Merbah Ouargla",
    sentences: "Pellentesque at nulla.",
    email: "bpellerao@phpbb.com",
  },
  {
    color: "#754f0b",
    avatar: "https://robohash.org/estidrem.png?size=50x50&set=set1",
    name: "Brnaby Shellcross",
    university: "Bergen University College",
    sentences:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
    email: "bshellcrossap@plala.or.jp",
  },
  {
    color: "#38bf7a",
    avatar: "https://robohash.org/quasipossimusporro.png?size=50x50&set=set1",
    name: "Phylis Sears",
    university: "International Turkmen Turkish University",
    sentences:
      "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    email: "psearsaq@wp.com",
  },
  {
    color: "#2ce0fe",
    avatar: "https://robohash.org/delenitidoloresipsum.png?size=50x50&set=set1",
    name: "Bradly Choppin",
    university: "Instituto Tecnológico de Aeronáutica",
    sentences:
      "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    email: "bchoppinar@livejournal.com",
  },
  {
    color: "#c4b0f1",
    avatar: "https://robohash.org/quisculpanon.png?size=50x50&set=set1",
    name: "Daphene Undy",
    university: "Komazawa University",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.",
    email: "dundyas@scribd.com",
  },
  {
    color: "#591ddc",
    avatar: "https://robohash.org/sinthicquas.png?size=50x50&set=set1",
    name: "Kane Hewson",
    university: "American International University West Africa",
    sentences:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    email: "khewsonat@msn.com",
  },
  {
    color: "#5b1b98",
    avatar: "https://robohash.org/magnameoseius.png?size=50x50&set=set1",
    name: "Margret Goodanew",
    university: "Voronezh State Medical Academy",
    sentences:
      "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    email: "mgoodanewau@opera.com",
  },
  {
    color: "#1d0193",
    avatar:
      "https://robohash.org/voluptatibusquosconsequatur.png?size=50x50&set=set1",
    name: "Kristoforo McCrainor",
    university: "Unitomo Surabaya",
    sentences:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    email: "kmccrainorav@mapquest.com",
  },
  {
    color: "#3bcdee",
    avatar: "https://robohash.org/autemoditvoluptatem.png?size=50x50&set=set1",
    name: "Bonny Zima",
    university: "National University of Laos",
    sentences:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    email: "bzimaaw@amazon.de",
  },
  {
    color: "#9b4c21",
    avatar: "https://robohash.org/nonetrem.png?size=50x50&set=set1",
    name: "Myrta McGinlay",
    university: "Universidad Nacional de San Luis",
    sentences: "Curabitur in libero ut massa volutpat convallis.",
    email: "mmcginlayax@ox.ac.uk",
  },
  {
    color: "#dc12ff",
    avatar:
      "https://robohash.org/velpraesentiumfacilis.png?size=50x50&set=set1",
    name: "Lynnelle Braxay",
    university: "Benedictine College",
    sentences: "Nunc purus. Phasellus in felis.",
    email: "lbraxayay@imageshack.us",
  },
  {
    color: "#e87d8c",
    avatar: "https://robohash.org/quonisiperferendis.png?size=50x50&set=set1",
    name: "Lemar Salway",
    university: "Universitas Negeri Padang",
    sentences:
      "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    email: "lsalwayaz@taobao.com",
  },
  {
    color: "#0e2979",
    avatar: "https://robohash.org/doloribusidnisi.png?size=50x50&set=set1",
    name: "Kari Ainslie",
    university: "Hallym University",
    sentences:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "kainslieb0@skyrock.com",
  },
  {
    color: "#850922",
    avatar: "https://robohash.org/velitdoloremitaque.png?size=50x50&set=set1",
    name: "Shaina Robbins",
    university: "Southern Illinois University at Carbondale",
    sentences:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
    email: "srobbinsb1@wikimedia.org",
  },
  {
    color: "#bbecd5",
    avatar: "https://robohash.org/isteautemveritatis.png?size=50x50&set=set1",
    name: "Wain Tarling",
    university: "Darul Ulum Islamic College",
    sentences:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    email: "wtarlingb2@twitter.com",
  },
  {
    color: "#cd71b5",
    avatar:
      "https://robohash.org/beataeofficiisdolores.png?size=50x50&set=set1",
    name: "Godfree Ruddoch",
    university: "Universidad Bolivariana de Venezuela",
    sentences:
      "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    email: "gruddochb3@soundcloud.com",
  },
  {
    color: "#859354",
    avatar: "https://robohash.org/adfaceremagnam.png?size=50x50&set=set1",
    name: "Doro Hubbins",
    university: "Istituto Universitario di Studi Superiori",
    sentences:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
    email: "dhubbinsb4@epa.gov",
  },
  {
    color: "#a43b55",
    avatar: "https://robohash.org/quiaveritatisex.png?size=50x50&set=set1",
    name: "Elyssa Mordon",
    university: "Azabu University",
    sentences: "Donec semper sapien a libero.",
    email: "emordonb5@slideshare.net",
  },
  {
    color: "#a57156",
    avatar: "https://robohash.org/delenitiquidemoptio.png?size=50x50&set=set1",
    name: "Maurizia Larkworthy",
    university: "Indiana University-Purdue University at Columbus",
    sentences:
      "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    email: "mlarkworthyb6@edublogs.org",
  },
  {
    color: "#796372",
    avatar: "https://robohash.org/doloremvelqui.png?size=50x50&set=set1",
    name: "Jobyna Oultram",
    university: "Florida Atlantic University",
    sentences:
      "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
    email: "joultramb7@businesswire.com",
  },
  {
    color: "#ee6e1d",
    avatar: "https://robohash.org/nisinonminus.png?size=50x50&set=set1",
    name: "Hastings Vel",
    university: "University of East London",
    sentences:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    email: "hvelb8@flickr.com",
  },
  {
    color: "#6a8585",
    avatar: "https://robohash.org/eosinexcepturi.png?size=50x50&set=set1",
    name: "Rutledge Tille",
    university:
      "University of Applied Sciences Solothurn Northwestern Switzerland",
    sentences:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    email: "rtilleb9@shareasale.com",
  },
  {
    color: "#3dd128",
    avatar: "https://robohash.org/teneturmagniet.png?size=50x50&set=set1",
    name: "Codie Settle",
    university: "Université de Toulouse",
    sentences:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    email: "csettleba@bandcamp.com",
  },
  {
    color: "#da6e66",
    avatar: "https://robohash.org/nesciuntofficiaenim.png?size=50x50&set=set1",
    name: "Glendon Hackelton",
    university: "Laurus Technical Institute",
    sentences:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    email: "ghackeltonbb@stumbleupon.com",
  },
  {
    color: "#d651f1",
    avatar: "https://robohash.org/itaquepariaturneque.png?size=50x50&set=set1",
    name: "Lief McVity",
    university: "Wakkanai Hokusei Gakuen University",
    sentences:
      "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    email: "lmcvitybc@ed.gov",
  },
  {
    color: "#61899b",
    avatar: "https://robohash.org/temporibusquivelit.png?size=50x50&set=set1",
    name: "Anabella Frostdyke",
    university: "Brussels School of International Studies",
    sentences:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
    email: "afrostdykebd@goo.ne.jp",
  },
  {
    color: "#5b360e",
    avatar:
      "https://robohash.org/earumcommodiexcepturi.png?size=50x50&set=set1",
    name: "Melonie Turbitt",
    university: "Université Moulay Ismail Meknès",
    sentences:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    email: "mturbittbe@4shared.com",
  },
  {
    color: "#2939cd",
    avatar: "https://robohash.org/dolorerrormolestiae.png?size=50x50&set=set1",
    name: "Evelyn Overbury",
    university: "Hiroshima Bunkyo Women's University",
    sentences: "Nulla justo.",
    email: "eoverburybf@goo.ne.jp",
  },
  {
    color: "#db810e",
    avatar: "https://robohash.org/utsedlaudantium.png?size=50x50&set=set1",
    name: "Ronica Greenly",
    university: "Vinayaka Mission's Research Foundation-Deemed University",
    sentences:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    email: "rgreenlybg@reuters.com",
  },
  {
    color: "#be6548",
    avatar:
      "https://robohash.org/officiadolorumdoloribus.png?size=50x50&set=set1",
    name: "Alyda Larroway",
    university: "Sojourner-Douglass College",
    sentences:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
    email: "alarrowaybh@bravesites.com",
  },
  {
    color: "#3b0e64",
    avatar:
      "https://robohash.org/reprehenderitquibusdamoptio.png?size=50x50&set=set1",
    name: "Bernardina Dzenisenka",
    university: 'Shoumen University "Konstantin Preslavski"',
    sentences:
      "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    email: "bdzenisenkabi@google.fr",
  },
  {
    color: "#567cf0",
    avatar: "https://robohash.org/suntfacereiste.png?size=50x50&set=set1",
    name: "Terrance Henlon",
    university: "University of Lecce",
    sentences: "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    email: "thenlonbj@twitter.com",
  },
  {
    color: "#506a9e",
    avatar:
      "https://robohash.org/ametquidemrepudiandae.png?size=50x50&set=set1",
    name: "Zacherie Durnall",
    university: "NAES College",
    sentences:
      "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
    email: "zdurnallbk@wikimedia.org",
  },
  {
    color: "#e6e605",
    avatar: "https://robohash.org/etomnisvoluptates.png?size=50x50&set=set1",
    name: "Currey Conradie",
    university: "Russell Berrie Nanotechnology Institute",
    sentences:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    email: "cconradiebl@techcrunch.com",
  },
  {
    color: "#91d2be",
    avatar:
      "https://robohash.org/autperspiciatissoluta.png?size=50x50&set=set1",
    name: "Lanita Anderton",
    university: "Universitas Ibn Chaldun Jakarta",
    sentences: "Aliquam non mauris. Morbi non lectus.",
    email: "landertonbm@about.me",
  },
  {
    color: "#5098cf",
    avatar: "https://robohash.org/ametexcepturiculpa.png?size=50x50&set=set1",
    name: "Robinett Skrine",
    university: "Islamic Azad University, Shabestar",
    sentences:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
    email: "rskrinebn@infoseek.co.jp",
  },
  {
    color: "#7813e2",
    avatar: "https://robohash.org/noneaqueamet.png?size=50x50&set=set1",
    name: "Alethea Berthon",
    university: "Pontifícia Universidade Católica de Minas Gerais",
    sentences:
      "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    email: "aberthonbo@vkontakte.ru",
  },
  {
    color: "#e11cec",
    avatar:
      "https://robohash.org/doloresconsequaturhic.png?size=50x50&set=set1",
    name: "Cammy Fincken",
    university: "University of Ghana",
    sentences:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    email: "cfinckenbp@imdb.com",
  },
  {
    color: "#20a672",
    avatar:
      "https://robohash.org/utvoluptasperferendis.png?size=50x50&set=set1",
    name: "Christine Kilroy",
    university: "Voronezh State University",
    sentences: "Phasellus sit amet erat.",
    email: "ckilroybq@paypal.com",
  },
  {
    color: "#018bae",
    avatar:
      "https://robohash.org/ducimusmodivoluptatum.png?size=50x50&set=set1",
    name: "Tailor Brusby",
    university: "Ariel University Center of Samaria",
    sentences:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
    email: "tbrusbybr@usgs.gov",
  },
  {
    color: "#6e2e18",
    avatar: "https://robohash.org/nonquasiveritatis.png?size=50x50&set=set1",
    name: "Maighdiln Courtney",
    university: "University of South Carolina - Salkehatchie",
    sentences:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    email: "mcourtneybs@howstuffworks.com",
  },
  {
    color: "#a450ea",
    avatar:
      "https://robohash.org/architectopariaturvoluptate.png?size=50x50&set=set1",
    name: "Dorey Veysey",
    university: "Universidad Norbert Wiener",
    sentences:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    email: "dveyseybt@shinystat.com",
  },
  {
    color: "#fa1584",
    avatar: "https://robohash.org/idsitsaepe.png?size=50x50&set=set1",
    name: "Salomon McKitterick",
    university: "The Rockefeller University",
    sentences:
      "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    email: "smckitterickbu@liveinternet.ru",
  },
  {
    color: "#3341d9",
    avatar:
      "https://robohash.org/consequaturautemquibusdam.png?size=50x50&set=set1",
    name: "Rickie Ferrieres",
    university: "University of Nevada - Reno",
    sentences:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    email: "rferrieresbv@senate.gov",
  },
  {
    color: "#05c1bf",
    avatar: "https://robohash.org/molestiassedsequi.png?size=50x50&set=set1",
    name: "Paulita MacNish",
    university: "Universiti Tunku Abdul Rahman",
    sentences:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    email: "pmacnishbw@blogs.com",
  },
  {
    color: "#f21216",
    avatar: "https://robohash.org/atvelitaperiam.png?size=50x50&set=set1",
    name: "Farleigh Babe",
    university: "Fachhochschule Eberswalde",
    sentences:
      "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
    email: "fbabebx@google.pl",
  },
  {
    color: "#4a3329",
    avatar: "https://robohash.org/odiofacereodit.png?size=50x50&set=set1",
    name: "Elfreda Sayle",
    university: "Osaka University of Education",
    sentences:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
    email: "esayleby@cafepress.com",
  },
  {
    color: "#f6484d",
    avatar: "https://robohash.org/utquianisi.png?size=50x50&set=set1",
    name: "Gardy McSparran",
    university: "National Fisheries University",
    sentences:
      "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    email: "gmcsparranbz@tuttocitta.it",
  },
  {
    color: "#68c6bc",
    avatar: "https://robohash.org/enimquasqui.png?size=50x50&set=set1",
    name: "Hedy Greenhouse",
    university: "Baskent University",
    sentences:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    email: "hgreenhousec0@springer.com",
  },
  {
    color: "#2af04a",
    avatar: "https://robohash.org/oditquismaiores.png?size=50x50&set=set1",
    name: "Emlyn Kinleyside",
    university: "Universiti Industri Selangor",
    sentences:
      "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "ekinleysidec1@topsy.com",
  },
  {
    color: "#7f8ab9",
    avatar: "https://robohash.org/areprehenderitfacere.png?size=50x50&set=set1",
    name: "Marcel Logan",
    university: "University Marien Ngouabi Brazzaville",
    sentences:
      "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
    email: "mloganc2@sogou.com",
  },
  {
    color: "#a9938e",
    avatar:
      "https://robohash.org/accusamusquisimilique.png?size=50x50&set=set1",
    name: "Masha Jewsbury",
    university: "Ho Chi Minh City University of Pedagogics",
    sentences:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    email: "mjewsburyc3@de.vu",
  },
  {
    color: "#0063a0",
    avatar: "https://robohash.org/quaeomnisodio.png?size=50x50&set=set1",
    name: "Ree Rivelon",
    university: "University of Wisconsin - Madison",
    sentences:
      "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
    email: "rrivelonc4@spotify.com",
  },
  {
    color: "#ad28b9",
    avatar:
      "https://robohash.org/placeatexercitationemvero.png?size=50x50&set=set1",
    name: "Chrotoem Shawcroft",
    university: "Dominica State College",
    sentences:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
    email: "cshawcroftc5@sun.com",
  },
  {
    color: "#b87edb",
    avatar: "https://robohash.org/eosperspiciatisut.png?size=50x50&set=set1",
    name: "Aili Kik",
    university: "Segi University College",
    sentences:
      "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
    email: "akikc6@simplemachines.org",
  },
  {
    color: "#164097",
    avatar: "https://robohash.org/rerumautea.png?size=50x50&set=set1",
    name: "Nonie Poncet",
    university: "Universidad de Tarapacá",
    sentences:
      "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    email: "nponcetc7@addtoany.com",
  },
  {
    color: "#1ab40b",
    avatar: "https://robohash.org/debitisilloharum.png?size=50x50&set=set1",
    name: "Reamonn Lailey",
    university: "George Mason University",
    sentences:
      "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    email: "rlaileyc8@prlog.org",
  },
  {
    color: "#04a4c2",
    avatar: "https://robohash.org/facilisestet.png?size=50x50&set=set1",
    name: "Carmelle Vane",
    university: "Atlantic Union College",
    sentences: "Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    email: "cvanec9@google.co.uk",
  },
  {
    color: "#79d2de",
    avatar: "https://robohash.org/estdebitisquas.png?size=50x50&set=set1",
    name: "Kristien Di Franceschi",
    university: "Bangladesh University of Business & Technology",
    sentences:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    email: "kdica@home.pl",
  },
  {
    color: "#128616",
    avatar: "https://robohash.org/ipsumquamatque.png?size=50x50&set=set1",
    name: "Jaquenetta Le Page",
    university: "Eckerd College",
    sentences:
      "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.",
    email: "jlecb@si.edu",
  },
  {
    color: "#e891ea",
    avatar: "https://robohash.org/etquisquamvoluptatem.png?size=50x50&set=set1",
    name: "Rudiger Weekly",
    university: "Universiti Sultan Zainal Abidin",
    sentences:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    email: "rweeklycc@howstuffworks.com",
  },
  {
    color: "#c405c0",
    avatar: "https://robohash.org/corporisquinumquam.png?size=50x50&set=set1",
    name: "Gaynor Jansie",
    university: "Washington University in St. Louis",
    sentences:
      "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    email: "gjansiecd@123-reg.co.uk",
  },
  {
    color: "#740cf5",
    avatar: "https://robohash.org/facereteneturaliquam.png?size=50x50&set=set1",
    name: "Rina Mullord",
    university: "Firat (Euphrates) University",
    sentences:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    email: "rmullordce@t-online.de",
  },
  {
    color: "#e9ffb9",
    avatar: "https://robohash.org/etiurequia.png?size=50x50&set=set1",
    name: "Eryn Hayhow",
    university: "Wah Medical College",
    sentences:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    email: "ehayhowcf@wired.com",
  },
  {
    color: "#a6809a",
    avatar: "https://robohash.org/voluptatumautnisi.png?size=50x50&set=set1",
    name: "Ciro Daburn",
    university: "Perlis Islamic Higher Learning Institute",
    sentences:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    email: "cdaburncg@scientificamerican.com",
  },
  {
    color: "#49a2fb",
    avatar:
      "https://robohash.org/perspiciatisdoloremlibero.png?size=50x50&set=set1",
    name: "Ephrem Dunsire",
    university: "Chung Shan Medical and Dental College",
    sentences:
      "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
    email: "edunsirech@nih.gov",
  },
  {
    color: "#d3f216",
    avatar:
      "https://robohash.org/etasperioresdoloribus.png?size=50x50&set=set1",
    name: "Arnoldo Hillin",
    university: "University of Toronto, Mississauga",
    sentences:
      "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    email: "ahillinci@buzzfeed.com",
  },
  {
    color: "#316da6",
    avatar:
      "https://robohash.org/doloribusquasconsequatur.png?size=50x50&set=set1",
    name: "Annmarie Halt",
    university: "Universidad Autónoma Juan Misael Saracho",
    sentences:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    email: "ahaltcj@ask.com",
  },
  {
    color: "#521971",
    avatar: "https://robohash.org/quietaut.png?size=50x50&set=set1",
    name: "Bevvy Fanthome",
    university: "New York School of Interior Design",
    sentences:
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
    email: "bfanthomeck@bloomberg.com",
  },
  {
    color: "#eedfe2",
    avatar: "https://robohash.org/estminimaassumenda.png?size=50x50&set=set1",
    name: "Vivianne Mattheus",
    university: "Huazhong University of Science and Technology",
    sentences:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    email: "vmattheuscl@princeton.edu",
  },
  {
    color: "#cde45c",
    avatar: "https://robohash.org/quodsuntad.png?size=50x50&set=set1",
    name: "Phillis Durgan",
    university: "International Hotel Management Institute",
    sentences:
      "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    email: "pdurgancm@jimdo.com",
  },
  {
    color: "#e90ebe",
    avatar: "https://robohash.org/suntevenietea.png?size=50x50&set=set1",
    name: "Iggy Comino",
    university: "International University of Novi Pazar",
    sentences:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
    email: "icominocn@php.net",
  },
  {
    color: "#3f6804",
    avatar: "https://robohash.org/exullamvoluptatum.png?size=50x50&set=set1",
    name: "Sharla Mirralls",
    university: "James Cook University of North Queensland",
    sentences:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    email: "smirrallsco@miibeian.gov.cn",
  },
  {
    color: "#d7b966",
    avatar: "https://robohash.org/officiisevenietet.png?size=50x50&set=set1",
    name: "Wrennie Matthews",
    university: "Northface University",
    sentences:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    email: "wmatthewscp@issuu.com",
  },
  {
    color: "#a324a5",
    avatar: "https://robohash.org/eumilloassumenda.png?size=50x50&set=set1",
    name: "Kerwin Eadmeads",
    university: "Medical Academy in Bialystok",
    sentences:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
    email: "keadmeadscq@weebly.com",
  },
  {
    color: "#c91e70",
    avatar:
      "https://robohash.org/consequaturmagnameveniet.png?size=50x50&set=set1",
    name: "Melloney Martinho",
    university: "Northface University",
    sentences:
      "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    email: "mmartinhocr@icio.us",
  },
  {
    color: "#321a09",
    avatar: "https://robohash.org/sedquostempora.png?size=50x50&set=set1",
    name: "Jarrad Cowley",
    university: "Nakamura Gakuen University",
    sentences: "Cras in purus eu magna vulputate luctus.",
    email: "jcowleycs@hibu.com",
  },
  {
    color: "#50f764",
    avatar:
      "https://robohash.org/reprehenderitautoccaecati.png?size=50x50&set=set1",
    name: "Bernadine Barnwille",
    university: "Moscow P. I. Tchaikovsky Conservatory",
    sentences:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    email: "bbarnwillect@mac.com",
  },
  {
    color: "#1777db",
    avatar:
      "https://robohash.org/harumlaborelaboriosam.png?size=50x50&set=set1",
    name: "Cherice MacNucator",
    university: "Université de Savoie",
    sentences:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
    email: "cmacnucatorcu@auda.org.au",
  },
  {
    color: "#88e794",
    avatar: "https://robohash.org/quiasedipsa.png?size=50x50&set=set1",
    name: "Modesta Shortt",
    university: "University of Santo Tomas",
    sentences: "Praesent lectus.",
    email: "mshorttcv@ox.ac.uk",
  },
  {
    color: "#7ffb24",
    avatar: "https://robohash.org/nihilvelitqui.png?size=50x50&set=set1",
    name: "Janet Orthmann",
    university: "The School of the Art Institute of Chicago",
    sentences: "Aliquam non mauris.",
    email: "jorthmanncw@gnu.org",
  },
  {
    color: "#b23702",
    avatar:
      "https://robohash.org/fugitadipiscideserunt.png?size=50x50&set=set1",
    name: "Derril Budik",
    university: "St. Petersburg Institute of Sales Management and Economics",
    sentences:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
    email: "dbudikcx@theatlantic.com",
  },
  {
    color: "#da8cd1",
    avatar: "https://robohash.org/rationequieius.png?size=50x50&set=set1",
    name: "Liv Gartland",
    university: "Humboldt State University",
    sentences:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    email: "lgartlandcy@fastcompany.com",
  },
  {
    color: "#88fa9b",
    avatar: "https://robohash.org/inevenietcommodi.png?size=50x50&set=set1",
    name: "Giffard Widmoor",
    university: "National Institute of Technology, Jamshedpur",
    sentences:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
    email: "gwidmoorcz@taobao.com",
  },
  {
    color: "#03e099",
    avatar:
      "https://robohash.org/blanditiisautemconsectetur.png?size=50x50&set=set1",
    name: "Moira Waggitt",
    university: "University of Dohuk (Kurdistan Region)",
    sentences:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    email: "mwaggittd0@loc.gov",
  },
  {
    color: "#c8a96f",
    avatar: "https://robohash.org/vitaeharumet.png?size=50x50&set=set1",
    name: "Morgan Gaudon",
    university: "Cogswell Polytechnical College",
    sentences:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    email: "mgaudond1@upenn.edu",
  },
  {
    color: "#26a3c8",
    avatar: "https://robohash.org/idarchitectosit.png?size=50x50&set=set1",
    name: "Reggy Jantot",
    university: "Ruprecht-Karls-Universität Heidelberg",
    sentences:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    email: "rjantotd2@ucoz.com",
  },
  {
    color: "#d28a7e",
    avatar: "https://robohash.org/sitoptiopossimus.png?size=50x50&set=set1",
    name: "Smith Crocumbe",
    university: "Darul Takzim Institute of Technology",
    sentences: "Pellentesque ultrices mattis odio. Donec vitae nisi.",
    email: "scrocumbed3@hc360.com",
  },
  {
    color: "#a694f2",
    avatar: "https://robohash.org/utvoluptasaliquid.png?size=50x50&set=set1",
    name: "Garv Bradder",
    university: "Indian University",
    sentences:
      "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    email: "gbradderd4@springer.com",
  },
  {
    color: "#56af1f",
    avatar: "https://robohash.org/corporisidmollitia.png?size=50x50&set=set1",
    name: "Norri Normand",
    university: "Mansfield University of Pennsylvania",
    sentences:
      "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    email: "nnormandd5@upenn.edu",
  },
  {
    color: "#062768",
    avatar: "https://robohash.org/nequealiasminima.png?size=50x50&set=set1",
    name: "Chicky Filtness",
    university: "University of Art and Design Helsinki",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    email: "cfiltnessd6@dedecms.com",
  },
  {
    color: "#a1cffd",
    avatar:
      "https://robohash.org/officiaatqueconsequuntur.png?size=50x50&set=set1",
    name: "Donella Garlett",
    university: "University of North Carolina at Pembroke",
    sentences:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    email: "dgarlettd7@cdbaby.com",
  },
  {
    color: "#3e65c5",
    avatar: "https://robohash.org/utremest.png?size=50x50&set=set1",
    name: "Silas Andrick",
    university: "Fisher College",
    sentences:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    email: "sandrickd8@meetup.com",
  },
  {
    color: "#e6f31b",
    avatar:
      "https://robohash.org/idperferendisreiciendis.png?size=50x50&set=set1",
    name: "Trixi Gummoe",
    university: "Universidade Castelo Branco",
    sentences:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
    email: "tgummoed9@360.cn",
  },
  {
    color: "#f229d5",
    avatar: "https://robohash.org/etautrepellat.png?size=50x50&set=set1",
    name: "Roseline Trenaman",
    university: "University of Grigol Robakidze",
    sentences:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    email: "rtrenamanda@prlog.org",
  },
  {
    color: "#997bdb",
    avatar: "https://robohash.org/autquonihil.png?size=50x50&set=set1",
    name: "Wyn Lumby",
    university: "Université de Corse Pascal Paoli",
    sentences: "Nulla ac enim.",
    email: "wlumbydb@is.gd",
  },
  {
    color: "#dbd3ad",
    avatar:
      "https://robohash.org/eumexercitationemperferendis.png?size=50x50&set=set1",
    name: "Lonnie Raine",
    university: 'Music Academy "Felix Nowowiejski" in Bydgoszcz',
    sentences:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    email: "lrainedc@bigcartel.com",
  },
  {
    color: "#d7f1e4",
    avatar: "https://robohash.org/velconsequaturharum.png?size=50x50&set=set1",
    name: "Hyacintha Connelly",
    university: "Islamic Azad University, Najaf Abad",
    sentences:
      "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
    email: "hconnellydd@mozilla.org",
  },
  {
    color: "#f0516c",
    avatar: "https://robohash.org/estnoneaque.png?size=50x50&set=set1",
    name: "Milo Crawley",
    university: "Tianjin Polytechnic University",
    sentences:
      "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    email: "mcrawleyde@blogtalkradio.com",
  },
  {
    color: "#869c52",
    avatar: "https://robohash.org/impeditsitet.png?size=50x50&set=set1",
    name: "Leigh Halfhyde",
    university: "Universitas Nasional Jakarta",
    sentences: "Duis at velit eu est congue elementum.",
    email: "lhalfhydedf@topsy.com",
  },
  {
    color: "#346128",
    avatar: "https://robohash.org/sapienteestab.png?size=50x50&set=set1",
    name: "Sheridan O'Dreain",
    university: "Universidad de La Amazonia",
    sentences:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    email: "sodreaindg@oracle.com",
  },
  {
    color: "#fb8149",
    avatar: "https://robohash.org/quirepudiandaenon.png?size=50x50&set=set1",
    name: "Cherey Ravenhills",
    university: "East China Jiao Tong University",
    sentences:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    email: "cravenhillsdh@nymag.com",
  },
  {
    color: "#45a991",
    avatar: "https://robohash.org/estconsequaturea.png?size=50x50&set=set1",
    name: "Elvis Prium",
    university: "Darul Hikmah Islamic College",
    sentences:
      "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.",
    email: "epriumdi@jimdo.com",
  },
  {
    color: "#e3472d",
    avatar: "https://robohash.org/similiqueautneque.png?size=50x50&set=set1",
    name: "Jannel Le Friec",
    university: "Suranaree University of Technology",
    sentences:
      "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
    email: "jledj@themeforest.net",
  },
  {
    color: "#80e79c",
    avatar:
      "https://robohash.org/possimusquisexcepturi.png?size=50x50&set=set1",
    name: "Rozalin Alishoner",
    university: "American Military University",
    sentences:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
    email: "ralishonerdk@kickstarter.com",
  },
  {
    color: "#38c10f",
    avatar: "https://robohash.org/culpaasperioresnon.png?size=50x50&set=set1",
    name: "Ivan Ravelus",
    university: "University of South Carolina - Beaufort",
    sentences:
      "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    email: "iravelusdl@samsung.com",
  },
  {
    color: "#265ea8",
    avatar: "https://robohash.org/etfugaexercitationem.png?size=50x50&set=set1",
    name: "Beverlie Meekins",
    university: "Instituto Politécnico de Beja",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    email: "bmeekinsdm@microsoft.com",
  },
  {
    color: "#9224db",
    avatar: "https://robohash.org/omnisaliasmagnam.png?size=50x50&set=set1",
    name: "Abbe Brotherick",
    university: "Université de Fianarantsoa",
    sentences:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    email: "abrotherickdn@acquirethisname.com",
  },
  {
    color: "#ee0fe8",
    avatar: "https://robohash.org/adenimdolores.png?size=50x50&set=set1",
    name: "Ivor Fazan",
    university: "Universidad Evangélica de El Salvador",
    sentences:
      "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    email: "ifazando@tmall.com",
  },
  {
    color: "#ea06c5",
    avatar: "https://robohash.org/maximequianesciunt.png?size=50x50&set=set1",
    name: "Magnum Leving",
    university: "Universidade Federal de Sergipe",
    sentences:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    email: "mlevingdp@jimdo.com",
  },
  {
    color: "#bccae2",
    avatar: "https://robohash.org/inciduntmagnamrerum.png?size=50x50&set=set1",
    name: "Mitchell Cowx",
    university: "National Chung Cheng University",
    sentences:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
    email: "mcowxdq@harvard.edu",
  },
  {
    color: "#c81e86",
    avatar: "https://robohash.org/etnobissit.png?size=50x50&set=set1",
    name: "Cordell Shakelade",
    university: "Fachhochschule Kärnten",
    sentences:
      "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
    email: "cshakeladedr@reuters.com",
  },
  {
    color: "#90ceaf",
    avatar:
      "https://robohash.org/nonconsecteturnesciunt.png?size=50x50&set=set1",
    name: "Conroy Kennington",
    university: "Centre Universitaire de Tebessa",
    sentences:
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    email: "ckenningtonds@earthlink.net",
  },
  {
    color: "#02709f",
    avatar: "https://robohash.org/oditdelectuseos.png?size=50x50&set=set1",
    name: "Rosabella Frigout",
    university: "Shiga University of Medical Science",
    sentences:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    email: "rfrigoutdt@npr.org",
  },
  {
    color: "#f8861f",
    avatar: "https://robohash.org/estutnulla.png?size=50x50&set=set1",
    name: "Kevon Pickburn",
    university: "University of Pretoria",
    sentences:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    email: "kpickburndu@tinyurl.com",
  },
  {
    color: "#9970e4",
    avatar:
      "https://robohash.org/blanditiismodicupiditate.png?size=50x50&set=set1",
    name: "Anitra Paule",
    university: "Fundación Universitaria del Area Andina. Sede Pereira",
    sentences:
      "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
    email: "apauledv@merriam-webster.com",
  },
  {
    color: "#285022",
    avatar:
      "https://robohash.org/exercitationemaliasat.png?size=50x50&set=set1",
    name: "Stella Swift",
    university: "Kyrgyz State Technical University",
    sentences:
      "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    email: "sswiftdw@virginia.edu",
  },
  {
    color: "#6b325b",
    avatar: "https://robohash.org/providentatquequasi.png?size=50x50&set=set1",
    name: "Hayes Fishlock",
    university: "Acharya Ranga Agricultural University",
    sentences:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    email: "hfishlockdx@msn.com",
  },
  {
    color: "#409eb7",
    avatar: "https://robohash.org/eanequealiquam.png?size=50x50&set=set1",
    name: "Donica Smitherham",
    university: "Yantai Education Institute & Yantai Television University",
    sentences:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
    email: "dsmitherhamdy@yandex.ru",
  },
  {
    color: "#2318da",
    avatar: "https://robohash.org/maioresiustoillum.png?size=50x50&set=set1",
    name: "Casi Humpatch",
    university: "Soonchunhyang University",
    sentences: "Morbi porttitor lorem id ligula.",
    email: "chumpatchdz@businessweek.com",
  },
  {
    color: "#b0e82c",
    avatar: "https://robohash.org/nemoquiadolores.png?size=50x50&set=set1",
    name: "Catlin Stode",
    university: "University of Sint Eustatius School of Medicine",
    sentences:
      "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    email: "cstodee0@vk.com",
  },
  {
    color: "#5cfb9f",
    avatar:
      "https://robohash.org/laborumvoluptatesipsam.png?size=50x50&set=set1",
    name: "Anstice Burgane",
    university: "University of Dallas",
    sentences:
      "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    email: "aburganee1@home.pl",
  },
  {
    color: "#362fa9",
    avatar: "https://robohash.org/delenitiautemaperiam.png?size=50x50&set=set1",
    name: "Eberto McCole",
    university: "Babes-Bolyai University of Cluj-Napoca",
    sentences:
      "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    email: "emccolee2@i2i.jp",
  },
  {
    color: "#f8ea14",
    avatar: "https://robohash.org/iustoassumendaquod.png?size=50x50&set=set1",
    name: "Carlie Clemens",
    university: "Instituto Tecnológico de Buenos Aires",
    sentences:
      "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    email: "cclemense3@vk.com",
  },
  {
    color: "#48fc13",
    avatar: "https://robohash.org/eosquiaut.png?size=50x50&set=set1",
    name: "Robbert Wyvill",
    university: "Menoufia University",
    sentences:
      "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    email: "rwyville4@wufoo.com",
  },
  {
    color: "#ff178d",
    avatar: "https://robohash.org/quiquiaut.png?size=50x50&set=set1",
    name: "Theobald McCarty",
    university: "University of Virginia, College at Wise",
    sentences: "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    email: "tmccartye5@php.net",
  },
  {
    color: "#c945f6",
    avatar: "https://robohash.org/quiapariaturiusto.png?size=50x50&set=set1",
    name: "Tonye Cordey",
    university: "Mount St. Mary's College California",
    sentences:
      "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    email: "tcordeye6@google.co.uk",
  },
  {
    color: "#20cca9",
    avatar: "https://robohash.org/suntautnatus.png?size=50x50&set=set1",
    name: "Dagmar Fullerlove",
    university: "St. Clair College",
    sentences:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    email: "dfullerlovee7@163.com",
  },
  {
    color: "#f36195",
    avatar:
      "https://robohash.org/dignissimosoccaecatiadipisci.png?size=50x50&set=set1",
    name: "Tressa Guillot",
    university: "Islamic Azad University, Sanandaj",
    sentences:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    email: "tguillote8@nytimes.com",
  },
  {
    color: "#e30920",
    avatar: "https://robohash.org/laboriosameumlaborum.png?size=50x50&set=set1",
    name: "Son Saile",
    university: "AgroParisTech",
    sentences:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    email: "ssailee9@biglobe.ne.jp",
  },
  {
    color: "#c0bbf4",
    avatar: "https://robohash.org/estvoluptasdolore.png?size=50x50&set=set1",
    name: "Shantee Speek",
    university: "Universidad Católica Boliviana, Santa Cruz",
    sentences: "In sagittis dui vel nisl.",
    email: "sspeekea@redcross.org",
  },
  {
    color: "#b8a1ec",
    avatar:
      "https://robohash.org/doloremquevoluptatemlibero.png?size=50x50&set=set1",
    name: "Alfy Krochmann",
    university: "Frostburg State University",
    sentences:
      "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    email: "akrochmanneb@apple.com",
  },
  {
    color: "#395ba0",
    avatar:
      "https://robohash.org/voluptatibusvoluptatestempora.png?size=50x50&set=set1",
    name: "Sandy Crayker",
    university: "St. Anthony College of Nursing",
    sentences:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
    email: "scraykerec@opera.com",
  },
  {
    color: "#20c132",
    avatar: "https://robohash.org/possimusnostrumfugit.png?size=50x50&set=set1",
    name: "Venita Sydes",
    university: "Baha'i Institute for Higher Education",
    sentences:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
    email: "vsydesed@123-reg.co.uk",
  },
  {
    color: "#35f437",
    avatar: "https://robohash.org/quosveniamdebitis.png?size=50x50&set=set1",
    name: "Kamilah Lavell",
    university: "International University of Africa (IUA)",
    sentences: "Nulla nisl.",
    email: "klavellee@furl.net",
  },
  {
    color: "#043a0a",
    avatar: "https://robohash.org/exercitationemutaut.png?size=50x50&set=set1",
    name: "Dalila Haps",
    university: "Universidad Americana",
    sentences:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    email: "dhapsef@globo.com",
  },
  {
    color: "#9e654b",
    avatar: "https://robohash.org/atutdolorum.png?size=50x50&set=set1",
    name: "Frederigo Baukham",
    university: "Ben-Gurion University of the Negev",
    sentences:
      "Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
    email: "fbaukhameg@who.int",
  },
  {
    color: "#38ff2f",
    avatar: "https://robohash.org/oditconsequaturquia.png?size=50x50&set=set1",
    name: "Imogen Howard - Gater",
    university: "Karatina University",
    sentences:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
    email: "ihowardeh@xing.com",
  },
  {
    color: "#88b333",
    avatar: "https://robohash.org/easuntaut.png?size=50x50&set=set1",
    name: "Joye Poundford",
    university: "Rani Durgavati University",
    sentences:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
    email: "jpoundfordei@sourceforge.net",
  },
  {
    color: "#274b79",
    avatar: "https://robohash.org/fugitdoloremomnis.png?size=50x50&set=set1",
    name: "Nikkie Joseph",
    university: "St. Vincent College",
    sentences:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
    email: "njosephej@amazon.com",
  },
  {
    color: "#969d14",
    avatar: "https://robohash.org/occaecatiutincidunt.png?size=50x50&set=set1",
    name: "Keri Bilney",
    university: "Oral Roberts University",
    sentences:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
    email: "kbilneyek@usatoday.com",
  },
  {
    color: "#a3040b",
    avatar: "https://robohash.org/pariaturetquis.png?size=50x50&set=set1",
    name: "Veronike Stutt",
    university: "International Tourism Institute",
    sentences:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    email: "vstuttel@cargocollective.com",
  },
  {
    color: "#61c442",
    avatar: "https://robohash.org/velitetblanditiis.png?size=50x50&set=set1",
    name: "Carita Bernardelli",
    university: "University of World Economy and Diplomacy",
    sentences: "Maecenas pulvinar lobortis est.",
    email: "cbernardelliem@wordpress.com",
  },
  {
    color: "#cb9260",
    avatar: "https://robohash.org/remrepudiandaevel.png?size=50x50&set=set1",
    name: "Anica Shirt",
    university: "Universidad de Cantabria",
    sentences:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    email: "ashirten@mysql.com",
  },
  {
    color: "#a1a1e7",
    avatar: "https://robohash.org/undevelomnis.png?size=50x50&set=set1",
    name: "Lani Wike",
    university: "Fachhochschule Bochum",
    sentences:
      "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
    email: "lwikeeo@ucoz.com",
  },
  {
    color: "#cf841b",
    avatar: "https://robohash.org/eosperspiciatisipsa.png?size=50x50&set=set1",
    name: "Kendra Dawnay",
    university: "University of Wisconsin - Whitewater",
    sentences:
      "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    email: "kdawnayep@lycos.com",
  },
  {
    color: "#7abd3d",
    avatar: "https://robohash.org/pariatursita.png?size=50x50&set=set1",
    name: "Konstantin Sneddon",
    university: "Fachhochschule Nordostniedersachsen",
    sentences: "Nullam sit amet turpis elementum ligula vehicula consequat.",
    email: "ksneddoneq@paginegialle.it",
  },
  {
    color: "#207fac",
    avatar:
      "https://robohash.org/accusantiumaspernaturvoluptas.png?size=50x50&set=set1",
    name: "Jaymie Ruggier",
    university: "Higher School of Economics",
    sentences:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
    email: "jruggierer@deviantart.com",
  },
  {
    color: "#685fe1",
    avatar:
      "https://robohash.org/eligendinamperspiciatis.png?size=50x50&set=set1",
    name: "Corabelle Perch",
    university: "Lamphun College of Agriculture and Technology",
    sentences:
      "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
    email: "cperches@hhs.gov",
  },
  {
    color: "#21aa31",
    avatar: "https://robohash.org/quibusdamquasvelit.png?size=50x50&set=set1",
    name: "Rochell Leband",
    university: "Ecole d'Architecture de Nancy",
    sentences:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    email: "rlebandet@guardian.co.uk",
  },
  {
    color: "#7e0be1",
    avatar: "https://robohash.org/nobisidquam.png?size=50x50&set=set1",
    name: "Gwenni Durden",
    university: "Institut National Polytechnique de Toulouse",
    sentences:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    email: "gdurdeneu@foxnews.com",
  },
  {
    color: "#63c93b",
    avatar: "https://robohash.org/explicaboveroet.png?size=50x50&set=set1",
    name: "Floris Wason",
    university: "St. Petersburg Institute of Arts and Restoration",
    sentences: "Nulla tempus.",
    email: "fwasonev@tamu.edu",
  },
  {
    color: "#9e3f14",
    avatar: "https://robohash.org/abeoslabore.png?size=50x50&set=set1",
    name: "Alidia Morales",
    university: "Omar Al-Mukhtar University",
    sentences:
      "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
    email: "amoralesew@xrea.com",
  },
  {
    color: "#e4dab2",
    avatar: "https://robohash.org/utcupiditatealiquid.png?size=50x50&set=set1",
    name: "Madison Scarisbrick",
    university: "Escola Superior de Artes e Design",
    sentences:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    email: "mscarisbrickex@flickr.com",
  },
  {
    color: "#7a2689",
    avatar: "https://robohash.org/earumvelvoluptas.png?size=50x50&set=set1",
    name: "Hanni Fugere",
    university: "University of Oulu",
    sentences:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    email: "hfugereey@wikipedia.org",
  },
  {
    color: "#6a1c9c",
    avatar: "https://robohash.org/velitrerumrepellat.png?size=50x50&set=set1",
    name: "Robenia Stebbins",
    university: "Iraq University College",
    sentences:
      "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
    email: "rstebbinsez@upenn.edu",
  },
  {
    color: "#1e02d8",
    avatar: "https://robohash.org/nesciuntodionulla.png?size=50x50&set=set1",
    name: "Carmine Decent",
    university: "Robert Morris College",
    sentences:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    email: "cdecentf0@tinyurl.com",
  },
  {
    color: "#bbee37",
    avatar: "https://robohash.org/consequaturautut.png?size=50x50&set=set1",
    name: "Bentley Glover",
    university: "Hartford College for Women",
    sentences:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    email: "bgloverf1@sun.com",
  },
  {
    color: "#77c455",
    avatar: "https://robohash.org/natusrerumad.png?size=50x50&set=set1",
    name: "Halimeda Duddle",
    university: "Megatrend University of Applied Sciences",
    sentences:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    email: "hduddlef2@elpais.com",
  },
  {
    color: "#070cd5",
    avatar: "https://robohash.org/cupiditatenoniure.png?size=50x50&set=set1",
    name: "Tansy Harbord",
    university: "Universidad Pedagogica Nacional",
    sentences:
      "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
    email: "tharbordf3@ted.com",
  },
  {
    color: "#2cb6fd",
    avatar: "https://robohash.org/utconsequunturrerum.png?size=50x50&set=set1",
    name: "Rustie Gisbourn",
    university: "Universidad Interamericana de Puerto Rico",
    sentences:
      "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
    email: "rgisbournf4@skyrock.com",
  },
  {
    color: "#fffe2f",
    avatar: "https://robohash.org/auttotampariatur.png?size=50x50&set=set1",
    name: "Jacynth Huckfield",
    university: "National University of Kaohsiung",
    sentences: "Aenean fermentum.",
    email: "jhuckfieldf5@redcross.org",
  },
  {
    color: "#dd4925",
    avatar: "https://robohash.org/distinctiodolorevel.png?size=50x50&set=set1",
    name: "Brittni Cordon",
    university: "Ruhr-Universität Bochum",
    sentences:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    email: "bcordonf6@yellowpages.com",
  },
  {
    color: "#7d74a5",
    avatar:
      "https://robohash.org/mollitiapariaturdolorem.png?size=50x50&set=set1",
    name: "Griffy Reckhouse",
    university: "Ecole Polytechnique Marseille",
    sentences: "Nunc purus.",
    email: "greckhousef7@walmart.com",
  },
  {
    color: "#ab448d",
    avatar: "https://robohash.org/fugaipsumomnis.png?size=50x50&set=set1",
    name: "Melessa Le Franc",
    university: "Shippensburg University of Pennsylvania",
    sentences:
      "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    email: "mlef8@flickr.com",
  },
  {
    color: "#7ed194",
    avatar: "https://robohash.org/nonmaximevoluptatum.png?size=50x50&set=set1",
    name: "Gardener Bonsul",
    university: "Elmergib University",
    sentences:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    email: "gbonsulf9@squarespace.com",
  },
  {
    color: "#a91a15",
    avatar:
      "https://robohash.org/necessitatibusenimnisi.png?size=50x50&set=set1",
    name: "Clio Luis",
    university: "Clearwater Christian College",
    sentences:
      "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
    email: "cluisfa@livejournal.com",
  },
  {
    color: "#151eaf",
    avatar: "https://robohash.org/velidveniam.png?size=50x50&set=set1",
    name: "Tuck Woodruff",
    university: "Oklahoma State University - Oklahoma City",
    sentences:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    email: "twoodrufffb@zimbio.com",
  },
  {
    color: "#76e737",
    avatar: "https://robohash.org/sedinveritatis.png?size=50x50&set=set1",
    name: "Evangelin Keenor",
    university: "Khabarovsk State University of Technology",
    sentences:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    email: "ekeenorfc@fema.gov",
  },
  {
    color: "#f817c3",
    avatar: "https://robohash.org/ducimusfacilissaepe.png?size=50x50&set=set1",
    name: "Phillip Romer",
    university:
      "Ecole Nationale Supérieure des Industries Textiles de Mulhouse",
    sentences:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    email: "promerfd@tripadvisor.com",
  },
  {
    color: "#a410ed",
    avatar: "https://robohash.org/etdoloressuscipit.png?size=50x50&set=set1",
    name: "Verile Riteley",
    university: "Tokyo Institute of Technology",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    email: "vriteleyfe@acquirethisname.com",
  },
  {
    color: "#b3912b",
    avatar:
      "https://robohash.org/iuremolestiasoccaecati.png?size=50x50&set=set1",
    name: "Jules Lashmar",
    university: "Okanagan University College",
    sentences:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    email: "jlashmarff@g.co",
  },
  {
    color: "#0ad83a",
    avatar:
      "https://robohash.org/impeditprovidentomnis.png?size=50x50&set=set1",
    name: "Catina Roseby",
    university: "University of Rhode Island",
    sentences:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    email: "crosebyfg@delicious.com",
  },
  {
    color: "#eb0570",
    avatar: "https://robohash.org/quibusdamnamaut.png?size=50x50&set=set1",
    name: "Maure Franies",
    university: "Istanbul University",
    sentences:
      "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
    email: "mfraniesfh@friendfeed.com",
  },
  {
    color: "#be502b",
    avatar:
      "https://robohash.org/expeditaperferendislaboriosam.png?size=50x50&set=set1",
    name: "Charley Crampsy",
    university: "Universidad de Iberoamérica",
    sentences: "Aliquam quis turpis eget elit sodales scelerisque.",
    email: "ccrampsyfi@naver.com",
  },
  {
    color: "#e04d49",
    avatar:
      "https://robohash.org/laboreperferendisipsam.png?size=50x50&set=set1",
    name: "Mariejeanne Milier",
    university: "Universidad del Valle de Guatemala",
    sentences:
      "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    email: "mmilierfj@instagram.com",
  },
  {
    color: "#3699f8",
    avatar: "https://robohash.org/exnatusporro.png?size=50x50&set=set1",
    name: "Malvin Steinor",
    university: "Burapha University",
    sentences:
      "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    email: "msteinorfk@mashable.com",
  },
  {
    color: "#62e3b1",
    avatar: "https://robohash.org/quasisaepesint.png?size=50x50&set=set1",
    name: "Addie Courtin",
    university: "Shridhar University",
    sentences:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    email: "acourtinfl@nifty.com",
  },
  {
    color: "#db3e0a",
    avatar: "https://robohash.org/delectussedqui.png?size=50x50&set=set1",
    name: "Erny Prothero",
    university: "Moscow Technical University of Informatics and Communication",
    sentences:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    email: "eprotherofm@google.com.br",
  },
  {
    color: "#68dc0a",
    avatar: "https://robohash.org/nihilmolestiasullam.png?size=50x50&set=set1",
    name: "Jacobo Highton",
    university: "Northwestern University In Qatar",
    sentences:
      "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    email: "jhightonfn@samsung.com",
  },
  {
    color: "#44b528",
    avatar:
      "https://robohash.org/consequaturomniserror.png?size=50x50&set=set1",
    name: "Melisande Guilayn",
    university: "Beijing Sport University",
    sentences: "Nulla mollis molestie lorem.",
    email: "mguilaynfo@so-net.ne.jp",
  },
  {
    color: "#69b81c",
    avatar:
      "https://robohash.org/exercitationemiustoatque.png?size=50x50&set=set1",
    name: "Yuri Vanichkin",
    university: "Pan African Christian University College",
    sentences:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    email: "yvanichkinfp@oracle.com",
  },
  {
    color: "#68b551",
    avatar: "https://robohash.org/laudantiumipsumqui.png?size=50x50&set=set1",
    name: "Blancha Boden",
    university: "Adrian College",
    sentences:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    email: "bbodenfq@last.fm",
  },
  {
    color: "#c38304",
    avatar: "https://robohash.org/estaspernaturnulla.png?size=50x50&set=set1",
    name: "Ricky Jaslem",
    university: "Gebze Institute of Technology",
    sentences:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    email: "rjaslemfr@nytimes.com",
  },
  {
    color: "#c2961a",
    avatar: "https://robohash.org/etconsecteturid.png?size=50x50&set=set1",
    name: "Travers Quarless",
    university: "Toyama University",
    sentences:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
    email: "tquarlessfs@mayoclinic.com",
  },
  {
    color: "#e9c8c1",
    avatar: "https://robohash.org/undeidet.png?size=50x50&set=set1",
    name: "Tammie Frapwell",
    university: 'Academy of Arts "George Enescu" Iasi',
    sentences: "Morbi a ipsum.",
    email: "tfrapwellft@hud.gov",
  },
  {
    color: "#9b3712",
    avatar: "https://robohash.org/dolorvelassumenda.png?size=50x50&set=set1",
    name: "Nedda Meade",
    university: "Hochschule Mittweida (FH)",
    sentences:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    email: "nmeadefu@edublogs.org",
  },
  {
    color: "#40cc83",
    avatar:
      "https://robohash.org/quasquidempraesentium.png?size=50x50&set=set1",
    name: "Amos Pilfold",
    university: "Universitas Mahendradatta",
    sentences:
      "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    email: "apilfoldfv@hostgator.com",
  },
  {
    color: "#59ba10",
    avatar: "https://robohash.org/autautdoloribus.png?size=50x50&set=set1",
    name: "Dannie Arbor",
    university: "University of Kerala",
    sentences:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    email: "darborfw@dmoz.org",
  },
  {
    color: "#3f62a3",
    avatar: "https://robohash.org/enimsapienteamet.png?size=50x50&set=set1",
    name: "Hilarius Minelli",
    university: "Ecole Nationale Supérieure des Mines de St-Etienne",
    sentences:
      "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "hminellifx@salon.com",
  },
  {
    color: "#da78cf",
    avatar: "https://robohash.org/eumconsequaturomnis.png?size=50x50&set=set1",
    name: "Donnell Izat",
    university: "Daffodil International University",
    sentences:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    email: "dizatfy@adobe.com",
  },
  {
    color: "#813dfb",
    avatar: "https://robohash.org/estdoloremdeserunt.png?size=50x50&set=set1",
    name: "Atalanta Hartzenberg",
    university: "Universitat de Lleida",
    sentences:
      "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    email: "ahartzenbergfz@blogtalkradio.com",
  },
  {
    color: "#ef6007",
    avatar: "https://robohash.org/omnissuscipittempore.png?size=50x50&set=set1",
    name: "Inessa Postle",
    university: "Felician College",
    sentences: "Ut at dolor quis odio consequat varius.",
    email: "ipostleg0@sina.com.cn",
  },
  {
    color: "#9714be",
    avatar: "https://robohash.org/eaquequaeratsed.png?size=50x50&set=set1",
    name: "Antonino Ajsik",
    university: "University of California, Santa Barbara",
    sentences:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    email: "aajsikg1@last.fm",
  },
  {
    color: "#d5d4af",
    avatar: "https://robohash.org/voluptatemipsavitae.png?size=50x50&set=set1",
    name: "Cheston Edelmann",
    university: "Universitas Muhammadiyah Yogyakarta",
    sentences:
      "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    email: "cedelmanng2@ted.com",
  },
  {
    color: "#c34d83",
    avatar: "https://robohash.org/voluptatesinqui.png?size=50x50&set=set1",
    name: "Blakeley Ort",
    university: "West Coast University (WCU)",
    sentences:
      "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    email: "bortg3@tmall.com",
  },
  {
    color: "#a3fc6d",
    avatar: "https://robohash.org/utetharum.png?size=50x50&set=set1",
    name: "Georgie de Courcey",
    university: "Matsuyama University",
    sentences: "Nulla ut erat id mauris vulputate elementum.",
    email: "gdeg4@reuters.com",
  },
  {
    color: "#e557dd",
    avatar: "https://robohash.org/natusquasiexcepturi.png?size=50x50&set=set1",
    name: "Talya Brouwer",
    university: "Texas Chiropractic College",
    sentences:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
    email: "tbrouwerg5@about.me",
  },
  {
    color: "#1a0b10",
    avatar: "https://robohash.org/esttemporibussit.png?size=50x50&set=set1",
    name: "Leonora Hartfleet",
    university: "Tashkent State Technical University",
    sentences:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
    email: "lhartfleetg6@ox.ac.uk",
  },
  {
    color: "#4a7e0e",
    avatar: "https://robohash.org/etutsit.png?size=50x50&set=set1",
    name: "Reube Tuckie",
    university: "Technological University (Myitkyina) ",
    sentences:
      "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
    email: "rtuckieg7@deviantart.com",
  },
  {
    color: "#c60ef4",
    avatar: "https://robohash.org/sapienteveltenetur.png?size=50x50&set=set1",
    name: "Duffie Scurr",
    university: "Royal Veterinary and Agricultural University",
    sentences:
      "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    email: "dscurrg8@twitpic.com",
  },
  {
    color: "#2ab7aa",
    avatar: "https://robohash.org/utetqui.png?size=50x50&set=set1",
    name: "Vickie Bushell",
    university: "University of Finance and Management in Bialystok",
    sentences:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    email: "vbushellg9@live.com",
  },
  {
    color: "#33fb02",
    avatar: "https://robohash.org/quasivoluptasea.png?size=50x50&set=set1",
    name: "Rice Skupinski",
    university: "University of Liberia",
    sentences:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    email: "rskupinskiga@google.ru",
  },
  {
    color: "#c9c513",
    avatar:
      "https://robohash.org/deleniticommodiconsequatur.png?size=50x50&set=set1",
    name: "Chelsea Morphey",
    university: "Allama Iqbal Open University",
    sentences:
      "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
    email: "cmorpheygb@soundcloud.com",
  },
  {
    color: "#2dd6dd",
    avatar:
      "https://robohash.org/estrepudiandaetemporibus.png?size=50x50&set=set1",
    name: "Roobbie Brou",
    university: "Ho Chi Minh City University of Pedagogics",
    sentences:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    email: "rbrougc@acquirethisname.com",
  },
  {
    color: "#7867d8",
    avatar: "https://robohash.org/veniamearumvelit.png?size=50x50&set=set1",
    name: "Ric Beyne",
    university: "Technical University of Sofia",
    sentences: "Donec vitae nisi.",
    email: "rbeynegd@booking.com",
  },
  {
    color: "#c3c3b0",
    avatar: "https://robohash.org/etdoloressapiente.png?size=50x50&set=set1",
    name: "Jemima Beek",
    university: "University of Maine (System)",
    sentences:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    email: "jbeekge@posterous.com",
  },
  {
    color: "#d7320e",
    avatar:
      "https://robohash.org/earumsedexercitationem.png?size=50x50&set=set1",
    name: "Willis Romanetti",
    university: "Agricultural University of Cracow",
    sentences:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
    email: "wromanettigf@slate.com",
  },
  {
    color: "#f9cbc9",
    avatar:
      "https://robohash.org/estasperiorespraesentium.png?size=50x50&set=set1",
    name: "Theodosia Comiam",
    university: "Indian Institute of Technology, Delhi",
    sentences: "Vestibulum ac est lacinia nisi venenatis tristique.",
    email: "tcomiamgg@creativecommons.org",
  },
  {
    color: "#d8112a",
    avatar: "https://robohash.org/nisietasperiores.png?size=50x50&set=set1",
    name: "Staford Magnus",
    university: "St. Xavier University",
    sentences:
      "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
    email: "smagnusgh@salon.com",
  },
  {
    color: "#7181b1",
    avatar: "https://robohash.org/maximeexplicabodolor.png?size=50x50&set=set1",
    name: "Ursala Demcik",
    university: "Fukuoka International University",
    sentences:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    email: "udemcikgi@smh.com.au",
  },
  {
    color: "#eead58",
    avatar: "https://robohash.org/faciliscumquealiquid.png?size=50x50&set=set1",
    name: "Federica Janouch",
    university: "Ecole Normale Supérieure de Paris",
    sentences:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
    email: "fjanouchgj@mlb.com",
  },
  {
    color: "#adc58d",
    avatar: "https://robohash.org/quamautipsa.png?size=50x50&set=set1",
    name: "Toni Whaplington",
    university: "Islamic Azad University, Fars Science & Research Branch",
    sentences:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
    email: "twhaplingtongk@php.net",
  },
  {
    color: "#fd027e",
    avatar: "https://robohash.org/idinciduntin.png?size=50x50&set=set1",
    name: "Tobe Weymont",
    university: "Assumption University",
    sentences:
      "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    email: "tweymontgl@free.fr",
  },
  {
    color: "#e2a6eb",
    avatar:
      "https://robohash.org/excepturiplaceatexpedita.png?size=50x50&set=set1",
    name: "Abey Mersey",
    university: "Atish Dipankar University",
    sentences:
      "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
    email: "amerseygm@redcross.org",
  },
  {
    color: "#223e74",
    avatar:
      "https://robohash.org/consecteturdebitisvoluptas.png?size=50x50&set=set1",
    name: "Beauregard Tunney",
    university: "Ozark Christian College",
    sentences:
      "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    email: "btunneygn@howstuffworks.com",
  },
  {
    color: "#1a56a7",
    avatar:
      "https://robohash.org/sapientenumquameveniet.png?size=50x50&set=set1",
    name: "Fax Ibanez",
    university: "Eastern Mennonite University",
    sentences:
      "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    email: "fibanezgo@bluehost.com",
  },
  {
    color: "#ed6dc2",
    avatar: "https://robohash.org/impeditsitcorrupti.png?size=50x50&set=set1",
    name: "Raynard Goldingay",
    university: "Tohoku University",
    sentences:
      "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    email: "rgoldingaygp@bloglines.com",
  },
  {
    color: "#d98fd3",
    avatar: "https://robohash.org/inatin.png?size=50x50&set=set1",
    name: "Hodge Durtnell",
    university: "Hiroshima University",
    sentences:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
    email: "hdurtnellgq@woothemes.com",
  },
  {
    color: "#7ff842",
    avatar: "https://robohash.org/nequeinveritatis.png?size=50x50&set=set1",
    name: "Donelle Chrstine",
    university: "University of Auckland",
    sentences:
      "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
    email: "dchrstinegr@epa.gov",
  },
  {
    color: "#5380a6",
    avatar: "https://robohash.org/velitdictanostrum.png?size=50x50&set=set1",
    name: "Josey Chifney",
    university: "Fachhochschule Pur",
    sentences: "Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
    email: "jchifneygs@japanpost.jp",
  },
  {
    color: "#e310e6",
    avatar:
      "https://robohash.org/estvoluptateconsequuntur.png?size=50x50&set=set1",
    name: "Gill Segge",
    university: "Istanbul University",
    sentences:
      "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    email: "gseggegt@tamu.edu",
  },
  {
    color: "#f3b3cb",
    avatar: "https://robohash.org/autmolestiaeea.png?size=50x50&set=set1",
    name: "Davine Benet",
    university: "Donau-Universität Krems",
    sentences:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    email: "dbenetgu@statcounter.com",
  },
  {
    color: "#c1a1bd",
    avatar:
      "https://robohash.org/debitisofficiisvoluptas.png?size=50x50&set=set1",
    name: "Dalton Hargrave",
    university: "Shantou University",
    sentences:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    email: "dhargravegv@kickstarter.com",
  },
  {
    color: "#572fcf",
    avatar: "https://robohash.org/sintrerumquos.png?size=50x50&set=set1",
    name: "Graig Clace",
    university: "Leiden University",
    sentences:
      "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
    email: "gclacegw@jugem.jp",
  },
  {
    color: "#bc3670",
    avatar: "https://robohash.org/molestiasquiquia.png?size=50x50&set=set1",
    name: "Hannah Calliss",
    university: "Sido Kanhu Murmu University",
    sentences:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    email: "hcallissgx@dot.gov",
  },
  {
    color: "#035d33",
    avatar: "https://robohash.org/doloremquemagnidicta.png?size=50x50&set=set1",
    name: "Rodi Croyden",
    university: 'Academy of Economics "Dimitur A. Tscenov"',
    sentences:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    email: "rcroydengy@domainmarket.com",
  },
  {
    color: "#d57030",
    avatar: "https://robohash.org/illumdolorsint.png?size=50x50&set=set1",
    name: "Estel Dimitrov",
    university: "Université Ibn Zohr Agadir",
    sentences:
      "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    email: "edimitrovgz@rambler.ru",
  },
  {
    color: "#3f4507",
    avatar: "https://robohash.org/eiusipsamoccaecati.png?size=50x50&set=set1",
    name: "Emmi Darrow",
    university: "Pädagogische Hochschule Schwäbisch Gmünd",
    sentences:
      "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
    email: "edarrowh0@house.gov",
  },
  {
    color: "#bbce95",
    avatar:
      "https://robohash.org/doloresquiareiciendis.png?size=50x50&set=set1",
    name: "Pauli Brayn",
    university: "Northland College",
    sentences: "Vivamus vel nulla eget eros elementum pellentesque.",
    email: "pbraynh1@cmu.edu",
  },
  {
    color: "#7b3d82",
    avatar: "https://robohash.org/dolorumeumnatus.png?size=50x50&set=set1",
    name: "Carolyn Boxe",
    university: "Universidad Santo Tomás",
    sentences:
      "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    email: "cboxeh2@army.mil",
  },
  {
    color: "#ee58cc",
    avatar:
      "https://robohash.org/perferendismolestiasid.png?size=50x50&set=set1",
    name: "Noelani Heinke",
    university: "Indiana University - Northwest",
    sentences:
      "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    email: "nheinkeh3@timesonline.co.uk",
  },
  {
    color: "#356f7a",
    avatar:
      "https://robohash.org/etaspernaturoccaecati.png?size=50x50&set=set1",
    name: "Vernor Knighton",
    university: "Shizuoka University",
    sentences:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
    email: "vknightonh4@google.com",
  },
  {
    color: "#ee4490",
    avatar: "https://robohash.org/laborequasifacilis.png?size=50x50&set=set1",
    name: "Abbi Matis",
    university: "McNeese State University",
    sentences:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    email: "amatish5@eventbrite.com",
  },
  {
    color: "#492ccb",
    avatar: "https://robohash.org/atconsecteturet.png?size=50x50&set=set1",
    name: "Lura Toop",
    university: "Concordia University, Irvine",
    sentences:
      "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    email: "ltooph6@oaic.gov.au",
  },
  {
    color: "#a430ec",
    avatar: "https://robohash.org/ducimustemporeomnis.png?size=50x50&set=set1",
    name: "Stanislaus Towsie",
    university: 'University "Petre Andrei" Iasi',
    sentences: "Donec posuere metus vitae ipsum.",
    email: "stowsieh7@illinois.edu",
  },
  {
    color: "#145934",
    avatar:
      "https://robohash.org/atblanditiisconsequatur.png?size=50x50&set=set1",
    name: "Llywellyn Tait",
    university: "Universidad Tecnológica San Antonio de Machala",
    sentences: "Suspendisse potenti.",
    email: "ltaith8@earthlink.net",
  },
  {
    color: "#dd4497",
    avatar: "https://robohash.org/nihilplaceatet.png?size=50x50&set=set1",
    name: "Rosella Bichard",
    university: "Technological University (Myeik)",
    sentences:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
    email: "rbichardh9@imageshack.us",
  },
  {
    color: "#e0ad7e",
    avatar: "https://robohash.org/minusarchitectosed.png?size=50x50&set=set1",
    name: "Sabina Andress",
    university: "Utkal University",
    sentences:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    email: "sandressha@washington.edu",
  },
  {
    color: "#e1247a",
    avatar: "https://robohash.org/isteetquo.png?size=50x50&set=set1",
    name: "Wallie Grinikhinov",
    university: "Papua New Guinea University of Technology",
    sentences: "Integer tincidunt ante vel ipsum.",
    email: "wgrinikhinovhb@paginegialle.it",
  },
  {
    color: "#df39b8",
    avatar:
      "https://robohash.org/aliquidmolestiaslaudantium.png?size=50x50&set=set1",
    name: "Myca Andreia",
    university: "Universidad de Granma",
    sentences:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    email: "mandreiahc@hao123.com",
  },
  {
    color: "#5cf6e9",
    avatar:
      "https://robohash.org/doloresaperiamdoloremque.png?size=50x50&set=set1",
    name: "Hannah Mowles",
    university: "Universitas Udayana",
    sentences:
      "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
    email: "hmowleshd@npr.org",
  },
  {
    color: "#bec30a",
    avatar: "https://robohash.org/iddoloribusut.png?size=50x50&set=set1",
    name: "Aarika Turley",
    university: "Police Academy in Bratislava",
    sentences: "Aenean lectus. Pellentesque eget nunc.",
    email: "aturleyhe@cbslocal.com",
  },
  {
    color: "#ee2570",
    avatar: "https://robohash.org/molestiasistefugit.png?size=50x50&set=set1",
    name: "Harlene Mouland",
    university: "Université Rennes II - Haute-Bretagne",
    sentences:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    email: "hmoulandhf@state.tx.us",
  },
  {
    color: "#3432c1",
    avatar: "https://robohash.org/repellatetnatus.png?size=50x50&set=set1",
    name: "Ilysa Calkin",
    university: "State University of New York College at Oneonta",
    sentences:
      "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    email: "icalkinhg@naver.com",
  },
  {
    color: "#f9337d",
    avatar:
      "https://robohash.org/consequunturaccusamusdeleniti.png?size=50x50&set=set1",
    name: "Juanita Scramage",
    university: "Birjand University",
    sentences:
      "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
    email: "jscramagehh@foxnews.com",
  },
  {
    color: "#464074",
    avatar: "https://robohash.org/accusantiumsedquia.png?size=50x50&set=set1",
    name: "Blake Balbeck",
    university: "Universidade Regional Integrada do Alto Uruguai e das Missões",
    sentences:
      "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
    email: "bbalbeckhi@ed.gov",
  },
  {
    color: "#9dd6a8",
    avatar: "https://robohash.org/mollitiaerrorlabore.png?size=50x50&set=set1",
    name: "Donavon Wyles",
    university: "Escuela Superior de Gestion Comercial y Marketing (ESIC)",
    sentences:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    email: "dwyleshj@hud.gov",
  },
  {
    color: "#909265",
    avatar:
      "https://robohash.org/voluptatibusminimalaboriosam.png?size=50x50&set=set1",
    name: "Janean Martinon",
    university:
      "International Institute for Geo - Information Science and Earth Observation",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
    email: "jmartinonhk@domainmarket.com",
  },
  {
    color: "#aec25f",
    avatar: "https://robohash.org/voluptatesfugiatin.png?size=50x50&set=set1",
    name: "Martina Giovanetti",
    university: "Deaconess College of Nursing",
    sentences:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
    email: "mgiovanettihl@tinyurl.com",
  },
  {
    color: "#35c92a",
    avatar: "https://robohash.org/recusandaesintvel.png?size=50x50&set=set1",
    name: "Trix Bemlott",
    university: "Universidad Autónoma de Entre Ríos",
    sentences:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
    email: "tbemlotthm@bizjournals.com",
  },
  {
    color: "#fbd1d3",
    avatar:
      "https://robohash.org/exercitationemtemporibusvoluptates.png?size=50x50&set=set1",
    name: "Chelsae Connal",
    university: "2nd Military Medical University",
    sentences:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    email: "cconnalhn@ezinearticles.com",
  },
  {
    color: "#863afb",
    avatar: "https://robohash.org/autemmagniinventore.png?size=50x50&set=set1",
    name: "Rodrick Crosfield",
    university: "Universitas Amir Hamzah",
    sentences:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    email: "rcrosfieldho@t-online.de",
  },
  {
    color: "#034d0e",
    avatar: "https://robohash.org/corporisnatusquam.png?size=50x50&set=set1",
    name: "Jocko Buard",
    university: "Willamette University",
    sentences:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    email: "jbuardhp@diigo.com",
  },
  {
    color: "#b22eb6",
    avatar: "https://robohash.org/teneturofficiacum.png?size=50x50&set=set1",
    name: "Garvin Mervyn",
    university: "Université de Skikda",
    sentences:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    email: "gmervynhq@opera.com",
  },
  {
    color: "#b74add",
    avatar: "https://robohash.org/quietab.png?size=50x50&set=set1",
    name: "Irving Tink",
    university: "Universidad Academia de Humanismo Cristiano",
    sentences:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.",
    email: "itinkhr@cnbc.com",
  },
  {
    color: "#82cad8",
    avatar: "https://robohash.org/laborumsitut.png?size=50x50&set=set1",
    name: "Adriena Mac Giolla Pheadair",
    university: "Henderson State Univerisity",
    sentences:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    email: "amachs@pagesperso-orange.fr",
  },
  {
    color: "#1c4ce4",
    avatar: "https://robohash.org/omnisporronon.png?size=50x50&set=set1",
    name: "Patsy Patise",
    university: "National Chiayi University",
    sentences:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    email: "ppatiseht@hao123.com",
  },
  {
    color: "#748e58",
    avatar: "https://robohash.org/abnesciuntplaceat.png?size=50x50&set=set1",
    name: "Nicolle Corselles",
    university: "National American University, Roseville",
    sentences:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    email: "ncorselleshu@odnoklassniki.ru",
  },
  {
    color: "#b0172f",
    avatar: "https://robohash.org/velexpeditaex.png?size=50x50&set=set1",
    name: "Kerstin Turner",
    university: "Hiroshima University",
    sentences:
      "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    email: "kturnerhv@virginia.edu",
  },
  {
    color: "#bcb201",
    avatar: "https://robohash.org/inaliaslaborum.png?size=50x50&set=set1",
    name: "Bonnibelle Klaesson",
    university: "Lappeenranta University of Technology",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
    email: "bklaessonhw@umn.edu",
  },
  {
    color: "#ae9e89",
    avatar: "https://robohash.org/dolorembeataevero.png?size=50x50&set=set1",
    name: "Gardy Kerner",
    university: "University of Hail",
    sentences: "Integer tincidunt ante vel ipsum.",
    email: "gkernerhx@posterous.com",
  },
  {
    color: "#0fecee",
    avatar: "https://robohash.org/eumseddebitis.png?size=50x50&set=set1",
    name: "Corabella McCoole",
    university: "Alderson Broaddus College",
    sentences:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    email: "cmccoolehy@posterous.com",
  },
  {
    color: "#957e9a",
    avatar:
      "https://robohash.org/autrepellendussimilique.png?size=50x50&set=set1",
    name: "Wendeline McNutt",
    university: "Sungshin Women's University",
    sentences:
      "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    email: "wmcnutthz@sogou.com",
  },
  {
    color: "#96f946",
    avatar: "https://robohash.org/veloditnon.png?size=50x50&set=set1",
    name: "Lesli Cicchetto",
    university: "Islamic Azad University, Shahryar",
    sentences: "Cras pellentesque volutpat dui.",
    email: "lcicchettoi0@samsung.com",
  },
  {
    color: "#88afb0",
    avatar: "https://robohash.org/dolorquissint.png?size=50x50&set=set1",
    name: "Adam Rosedale",
    university: "Leyte Normal University",
    sentences:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
    email: "arosedalei1@dailymotion.com",
  },
  {
    color: "#03bcd8",
    avatar: "https://robohash.org/quitotamneque.png?size=50x50&set=set1",
    name: "Jo-anne Vynarde",
    university: "Voronezh State Agricultural University",
    sentences:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
    email: "jvynardei2@issuu.com",
  },
  {
    color: "#34f4ea",
    avatar: "https://robohash.org/corruptidolorenihil.png?size=50x50&set=set1",
    name: "Collie Aleksic",
    university: "West Virginia School of Osteopathic Medicine",
    sentences:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
    email: "caleksici3@123-reg.co.uk",
  },
  {
    color: "#e81580",
    avatar: "https://robohash.org/isteipsumofficiis.png?size=50x50&set=set1",
    name: "Jade Cade",
    university:
      "Balochistan University of Information Technology & Management Sciences ",
    sentences: "Morbi non lectus.",
    email: "jcadei4@51.la",
  },
  {
    color: "#2a642c",
    avatar:
      "https://robohash.org/quiconsequaturvoluptas.png?size=50x50&set=set1",
    name: "Dacy Feasby",
    university: 'Universidad Centroamericana "José Simeón Canas"',
    sentences: "Curabitur in libero ut massa volutpat convallis.",
    email: "dfeasbyi5@ebay.co.uk",
  },
  {
    color: "#5e024e",
    avatar: "https://robohash.org/omnisenimnam.png?size=50x50&set=set1",
    name: "Ettie Clemont",
    university: "Fisher College",
    sentences: "Aenean sit amet justo.",
    email: "eclemonti6@purevolume.com",
  },
  {
    color: "#1f67a8",
    avatar: "https://robohash.org/minusdolornon.png?size=50x50&set=set1",
    name: "Darnall Greally",
    university: "Riara University School of Business and Law",
    sentences:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    email: "dgreallyi7@miitbeian.gov.cn",
  },
  {
    color: "#708bfd",
    avatar: "https://robohash.org/magnametqui.png?size=50x50&set=set1",
    name: "Heath Tirkin",
    university: "Kenya Methodist University",
    sentences:
      "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    email: "htirkini8@cocolog-nifty.com",
  },
  {
    color: "#247f07",
    avatar: "https://robohash.org/dignissimosutaperiam.png?size=50x50&set=set1",
    name: "Daune Momford",
    university: "Hachinohe Institute of Technology",
    sentences:
      "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    email: "dmomfordi9@delicious.com",
  },
  {
    color: "#77ffb5",
    avatar: "https://robohash.org/aliasrerumnumquam.png?size=50x50&set=set1",
    name: "Cissy Carlisi",
    university: "Toho Gakuen School of Music",
    sentences:
      "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
    email: "ccarlisiia@bigcartel.com",
  },
  {
    color: "#0a9321",
    avatar:
      "https://robohash.org/eosrecusandaeaccusantium.png?size=50x50&set=set1",
    name: "Tull Albone",
    university: "Universitas Komputer Indonesia",
    sentences:
      "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    email: "talboneib@twitter.com",
  },
  {
    color: "#093ce2",
    avatar: "https://robohash.org/etdoloremipsa.png?size=50x50&set=set1",
    name: "Morrie Menendes",
    university: "Kabul Education University",
    sentences:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    email: "mmenendesic@wunderground.com",
  },
  {
    color: "#c51ebc",
    avatar: "https://robohash.org/quonostrumearum.png?size=50x50&set=set1",
    name: "Laraine Habershaw",
    university: "Oriental University",
    sentences:
      "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    email: "lhabershawid@seesaa.net",
  },
  {
    color: "#136abb",
    avatar: "https://robohash.org/maximehicinventore.png?size=50x50&set=set1",
    name: "Berna Cordeau]",
    university: "University of Wah",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    email: "bcordeauie@examiner.com",
  },
  {
    color: "#d1785e",
    avatar: "https://robohash.org/possimusquiut.png?size=50x50&set=set1",
    name: "Ainslee Swapp",
    university: "Universidad Nacional de Formosa",
    sentences:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    email: "aswappif@oracle.com",
  },
  {
    color: "#e528c6",
    avatar: "https://robohash.org/veniamsedenim.png?size=50x50&set=set1",
    name: "Terry Carette",
    university: "University of Liberia",
    sentences:
      "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    email: "tcaretteig@zimbio.com",
  },
  {
    color: "#c1fd20",
    avatar: "https://robohash.org/hicinciduntut.png?size=50x50&set=set1",
    name: "Cami Fidoe",
    university: "Nova Scotia College of Art and Design",
    sentences:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
    email: "cfidoeih@kickstarter.com",
  },
  {
    color: "#fbe534",
    avatar: "https://robohash.org/omnisitaquedolorem.png?size=50x50&set=set1",
    name: "Chen Rosevear",
    university: "Governors State University",
    sentences:
      "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    email: "crosevearii@accuweather.com",
  },
  {
    color: "#20c6d0",
    avatar: "https://robohash.org/corporisutnam.png?size=50x50&set=set1",
    name: "Jannel Grafhom",
    university:
      "Hochschule Wismar, Fachhochschule für Technik, Wirtschaft und Gestaltung",
    sentences:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
    email: "jgrafhomij@umn.edu",
  },
  {
    color: "#a00e35",
    avatar: "https://robohash.org/eosnamneque.png?size=50x50&set=set1",
    name: "Blinnie Leivers",
    university: "Athenaeum of Ohio",
    sentences: "Aenean auctor gravida sem.",
    email: "bleiversik@constantcontact.com",
  },
  {
    color: "#53bf9b",
    avatar:
      "https://robohash.org/sednecessitatibusporro.png?size=50x50&set=set1",
    name: "Fianna Hutcheon",
    university: "Detroit College of Business - Warren",
    sentences:
      "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    email: "fhutcheonil@360.cn",
  },
  {
    color: "#67506c",
    avatar: "https://robohash.org/nequeutperferendis.png?size=50x50&set=set1",
    name: "Netty Northall",
    university: "Harbin Medical University",
    sentences:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    email: "nnorthallim@domainmarket.com",
  },
  {
    color: "#193032",
    avatar: "https://robohash.org/maiorescumqueullam.png?size=50x50&set=set1",
    name: "Felic O'Cosgra",
    university: "Institute of Teachers Education, Ipoh",
    sentences:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    email: "focosgrain@kickstarter.com",
  },
  {
    color: "#80c3b3",
    avatar: "https://robohash.org/omniscorruptierror.png?size=50x50&set=set1",
    name: "Doyle Hodgin",
    university: "Universitas Gajayana Malang",
    sentences:
      "Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    email: "dhodginio@aol.com",
  },
  {
    color: "#0bfe2a",
    avatar:
      "https://robohash.org/doloresplaceatcorporis.png?size=50x50&set=set1",
    name: "Jesse Tomaszynski",
    university: "Gomal University",
    sentences:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    email: "jtomaszynskiip@topsy.com",
  },
  {
    color: "#4bf7bc",
    avatar:
      "https://robohash.org/quasiasperioresdignissimos.png?size=50x50&set=set1",
    name: "Garland Skym",
    university: "Universidade Bandeirante de São Paulo",
    sentences: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    email: "gskymiq@epa.gov",
  },
  {
    color: "#e51d2b",
    avatar:
      "https://robohash.org/voluptatemmolestiaequis.png?size=50x50&set=set1",
    name: "Evie Ebbins",
    university: "Brooks Institute of Photography",
    sentences:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
    email: "eebbinsir@github.com",
  },
  {
    color: "#27dab2",
    avatar: "https://robohash.org/doloresnonlaboriosam.png?size=50x50&set=set1",
    name: "Izzy Dillintone",
    university: "Kebbi State University of Science and Technology",
    sentences:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    email: "idillintoneis@businessinsider.com",
  },
  {
    color: "#6045a9",
    avatar: "https://robohash.org/etconsequaturut.png?size=50x50&set=set1",
    name: "Marta Prozescky",
    university: "Southern Polytechnic State Univerisity",
    sentences: "Aenean fermentum.",
    email: "mprozesckyit@weebly.com",
  },
  {
    color: "#fca4ea",
    avatar: "https://robohash.org/nonsimiliqueeum.png?size=50x50&set=set1",
    name: "Zelig Dani",
    university: "St. Francis Xavier University",
    sentences:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    email: "zdaniiu@shutterfly.com",
  },
  {
    color: "#390a60",
    avatar:
      "https://robohash.org/repellendusaperiamdignissimos.png?size=50x50&set=set1",
    name: "Adrian Kendell",
    university: "International University of Engineering, Moscow",
    sentences:
      "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    email: "akendelliv@blinklist.com",
  },
  {
    color: "#57eb5e",
    avatar:
      "https://robohash.org/repellendusnisiadipisci.png?size=50x50&set=set1",
    name: "Oran Burcher",
    university: "Davenport College of Business, Kalamazoo",
    sentences:
      "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    email: "oburcheriw@mysql.com",
  },
  {
    color: "#ed979c",
    avatar: "https://robohash.org/sapientequisnam.png?size=50x50&set=set1",
    name: "Fidelity Volkers",
    university: "Melaka City Polytechnic",
    sentences:
      "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    email: "fvolkersix@ifeng.com",
  },
  {
    color: "#9eea10",
    avatar:
      "https://robohash.org/autdignissimosnesciunt.png?size=50x50&set=set1",
    name: "Lyn Mannooch",
    university: "State University of New York at Binghamton",
    sentences:
      "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    email: "lmannoochiy@canalblog.com",
  },
  {
    color: "#289f53",
    avatar:
      "https://robohash.org/blanditiisquivoluptates.png?size=50x50&set=set1",
    name: "Oralle Smitheman",
    university: 'Academy of Economics "Dimitur A. Tscenov"',
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    email: "osmithemaniz@xinhuanet.com",
  },
  {
    color: "#27b962",
    avatar: "https://robohash.org/omnisillumut.png?size=50x50&set=set1",
    name: "Les Olyunin",
    university: "Universidade Vale do Rio Doce",
    sentences:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
    email: "lolyuninj0@hugedomains.com",
  },
  {
    color: "#4a5192",
    avatar: "https://robohash.org/modivelomnis.png?size=50x50&set=set1",
    name: "Cindelyn Pisculli",
    university: "Universitas Sriwijaya",
    sentences:
      "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
    email: "cpiscullij1@quantcast.com",
  },
  {
    color: "#94fb3e",
    avatar: "https://robohash.org/ametquipossimus.png?size=50x50&set=set1",
    name: "Chrissie Broschke",
    university: "Mindanao State University - Iligan Institute of Technology",
    sentences: "Vivamus in felis eu sapien cursus vestibulum.",
    email: "cbroschkej2@parallels.com",
  },
  {
    color: "#3ba6af",
    avatar: "https://robohash.org/minusiureest.png?size=50x50&set=set1",
    name: "Letti Rintoul",
    university: "International Business School Kelajak ILMI",
    sentences:
      "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    email: "lrintoulj3@bbb.org",
  },
  {
    color: "#d8fbbf",
    avatar: "https://robohash.org/rerumcumblanditiis.png?size=50x50&set=set1",
    name: "Loy Ketch",
    university: "Miyagi Gakuin Women's College",
    sentences: "In eleifend quam a odio. In hac habitasse platea dictumst.",
    email: "lketchj4@about.com",
  },
  {
    color: "#94f0f1",
    avatar: "https://robohash.org/atquiaquos.png?size=50x50&set=set1",
    name: "Lyon Pedrick",
    university: "Universidad de Santiago de Chile",
    sentences:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    email: "lpedrickj5@va.gov",
  },
  {
    color: "#0e78c5",
    avatar: "https://robohash.org/voluptasistefacere.png?size=50x50&set=set1",
    name: "Jeffie Babidge",
    university: "Marathwada Agricultural University",
    sentences: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
    email: "jbabidgej6@si.edu",
  },
  {
    color: "#bc8cd0",
    avatar: "https://robohash.org/abestsed.png?size=50x50&set=set1",
    name: "Zara Calliss",
    university: "Erskine College",
    sentences:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    email: "zcallissj7@tmall.com",
  },
  {
    color: "#089e2d",
    avatar: "https://robohash.org/quisquamquomaxime.png?size=50x50&set=set1",
    name: "Tybi Mangeot",
    university: "Universitas Slamet Riyadi Surakarta",
    sentences:
      "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    email: "tmangeotj8@archive.org",
  },
  {
    color: "#7fd753",
    avatar: "https://robohash.org/etomnissit.png?size=50x50&set=set1",
    name: "Henriette Spoerl",
    university: "University of Oxford",
    sentences:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    email: "hspoerlj9@naver.com",
  },
  {
    color: "#06b3b1",
    avatar: "https://robohash.org/etautemut.png?size=50x50&set=set1",
    name: "Chase Loveridge",
    university: "University of Leeds",
    sentences:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    email: "cloveridgeja@statcounter.com",
  },
  {
    color: "#5bb54f",
    avatar: "https://robohash.org/velnonnesciunt.png?size=50x50&set=set1",
    name: "Mora Plet",
    university: "Universidad Externado de Colombia",
    sentences:
      "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    email: "mpletjb@ftc.gov",
  },
  {
    color: "#efef0d",
    avatar:
      "https://robohash.org/consequunturrecusandaevoluptatem.png?size=50x50&set=set1",
    name: "Alfredo Durtnal",
    university: "European University",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    email: "adurtnaljc@gov.uk",
  },
  {
    color: "#340778",
    avatar: "https://robohash.org/seditaquedoloribus.png?size=50x50&set=set1",
    name: "Darn Colombier",
    university: "Universidad Católica de Manizales",
    sentences:
      "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    email: "dcolombierjd@hud.gov",
  },
  {
    color: "#de4d88",
    avatar:
      "https://robohash.org/consequunturinventorenumquam.png?size=50x50&set=set1",
    name: "Tammara Bettison",
    university: "California College for Health Sciences",
    sentences: "Donec posuere metus vitae ipsum. Aliquam non mauris.",
    email: "tbettisonje@linkedin.com",
  },
  {
    color: "#68b6d3",
    avatar: "https://robohash.org/voluptatemsedquo.png?size=50x50&set=set1",
    name: "Clary Seden",
    university: "Institute of Teachers Education, Batu Lintang",
    sentences:
      "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    email: "csedenjf@loc.gov",
  },
  {
    color: "#92eee8",
    avatar: "https://robohash.org/quietsit.png?size=50x50&set=set1",
    name: "Hillie Shorten",
    university: "Saga University",
    sentences:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
    email: "hshortenjg@ucoz.ru",
  },
  {
    color: "#1cfabc",
    avatar:
      "https://robohash.org/possimusmolestiasomnis.png?size=50x50&set=set1",
    name: "Daloris Simone",
    university: "Instituto Tecnológico de León",
    sentences:
      "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    email: "dsimonejh@guardian.co.uk",
  },
  {
    color: "#841a4e",
    avatar:
      "https://robohash.org/doloremquecorporisodio.png?size=50x50&set=set1",
    name: "Xenia Jaray",
    university: "Universidade Federal do Rio Grande do Sul",
    sentences:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    email: "xjarayji@walmart.com",
  },
  {
    color: "#038c88",
    avatar: "https://robohash.org/vitaealiquamsed.png?size=50x50&set=set1",
    name: "Charline Goodayle",
    university: "University of Montenegro",
    sentences:
      "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    email: "cgoodaylejj@berkeley.edu",
  },
  {
    color: "#dd962d",
    avatar: "https://robohash.org/quiaautsed.png?size=50x50&set=set1",
    name: "Franky Rotter",
    university: "Mordovian State University",
    sentences: "Nulla tempus.",
    email: "frotterjk@yellowbook.com",
  },
  {
    color: "#dbbcd7",
    avatar: "https://robohash.org/quaeeapariatur.png?size=50x50&set=set1",
    name: "Roda Auchinleck",
    university: "Technological Education Institute of Kozani",
    sentences:
      "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    email: "rauchinleckjl@unicef.org",
  },
  {
    color: "#4dad80",
    avatar: "https://robohash.org/quiaquodcupiditate.png?size=50x50&set=set1",
    name: "Gloriana Colloby",
    university: "Yarmouk University",
    sentences:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    email: "gcollobyjm@dion.ne.jp",
  },
  {
    color: "#45226b",
    avatar:
      "https://robohash.org/voluptateasperioressint.png?size=50x50&set=set1",
    name: "Raine Slaney",
    university: "Quest University",
    sentences: "Pellentesque eget nunc.",
    email: "rslaneyjn@google.com.au",
  },
  {
    color: "#5125f9",
    avatar: "https://robohash.org/maximenihilcumque.png?size=50x50&set=set1",
    name: "Enrichetta Comoletti",
    university: "Dokkyo University",
    sentences:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
    email: "ecomolettijo@rediff.com",
  },
  {
    color: "#251e6d",
    avatar: "https://robohash.org/dolorsitblanditiis.png?size=50x50&set=set1",
    name: "Windham Restieaux",
    university: "Wheaton College Massachusetts",
    sentences:
      "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
    email: "wrestieauxjp@businessinsider.com",
  },
  {
    color: "#6d151c",
    avatar: "https://robohash.org/dolornihilaut.png?size=50x50&set=set1",
    name: "Dorotea Corpe",
    university: "Cedar Crest College",
    sentences:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
    email: "dcorpejq@addtoany.com",
  },
  {
    color: "#1aa636",
    avatar:
      "https://robohash.org/dignissimosquidemalias.png?size=50x50&set=set1",
    name: "Lev Arling",
    university: "Universidad de Congreso",
    sentences: "Duis ac nibh.",
    email: "larlingjr@ucsd.edu",
  },
  {
    color: "#da4d05",
    avatar: "https://robohash.org/mollitiautomnis.png?size=50x50&set=set1",
    name: "Gabie Pruvost",
    university: "Universidad NUR",
    sentences:
      "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    email: "gpruvostjs@baidu.com",
  },
  {
    color: "#9ab655",
    avatar: "https://robohash.org/quoomnisut.png?size=50x50&set=set1",
    name: "Dave Grene",
    university: "Constantin Brancoveanu University Pitesti",
    sentences: "Donec dapibus.",
    email: "dgrenejt@tripadvisor.com",
  },
  {
    color: "#1344dc",
    avatar: "https://robohash.org/etnisiamet.png?size=50x50&set=set1",
    name: "Fidelity Moyser",
    university: "University of Abertay Dundee",
    sentences:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    email: "fmoyserju@1688.com",
  },
  {
    color: "#8348bf",
    avatar:
      "https://robohash.org/perspiciatiscorporiset.png?size=50x50&set=set1",
    name: "Brenda Duffill",
    university: "Neijiang Teacher University",
    sentences:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
    email: "bduffilljv@umich.edu",
  },
  {
    color: "#60f1b6",
    avatar: "https://robohash.org/asperioresidid.png?size=50x50&set=set1",
    name: "Emmye Heijne",
    university: "Western International University",
    sentences:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    email: "eheijnejw@discovery.com",
  },
  {
    color: "#76d48f",
    avatar:
      "https://robohash.org/laborumvoluptatemdebitis.png?size=50x50&set=set1",
    name: "Shena Dicky",
    university: "Thomas More College",
    sentences:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    email: "sdickyjx@1und1.de",
  },
  {
    color: "#973c15",
    avatar:
      "https://robohash.org/etconsequaturoccaecati.png?size=50x50&set=set1",
    name: "Kayne Verlander",
    university: "Royal Academy of Music",
    sentences:
      "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    email: "kverlanderjy@list-manage.com",
  },
  {
    color: "#7d56b5",
    avatar:
      "https://robohash.org/mollitiadoloresaliquam.png?size=50x50&set=set1",
    name: "Alan Santos",
    university: "Université de Perpignan",
    sentences:
      "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    email: "asantosjz@oakley.com",
  },
  {
    color: "#6a0883",
    avatar: "https://robohash.org/harumofficiisaut.png?size=50x50&set=set1",
    name: "Luis Loney",
    university: "Hope International University",
    sentences:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
    email: "lloneyk0@addthis.com",
  },
  {
    color: "#05b057",
    avatar: "https://robohash.org/repellendusetsed.png?size=50x50&set=set1",
    name: "Dorita Greeno",
    university: "The Manchester Metropolitan University",
    sentences: "Suspendisse potenti.",
    email: "dgreenok1@artisteer.com",
  },
  {
    color: "#7f3c88",
    avatar:
      "https://robohash.org/delenitiquisquamlibero.png?size=50x50&set=set1",
    name: "Ketty Troak",
    university: "New England Institute of Technology",
    sentences:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    email: "ktroakk2@wired.com",
  },
  {
    color: "#3cfe18",
    avatar: "https://robohash.org/etminimaiure.png?size=50x50&set=set1",
    name: "Kerrin Upwood",
    university: "Fachhochschule Erfurt",
    sentences:
      "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    email: "kupwoodk3@cbslocal.com",
  },
  {
    color: "#0254e6",
    avatar:
      "https://robohash.org/numquamperferendisexcepturi.png?size=50x50&set=set1",
    name: "Raynard Pavek",
    university: "University of Salford",
    sentences:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    email: "rpavekk4@purevolume.com",
  },
  {
    color: "#ab1169",
    avatar: "https://robohash.org/consequaturetet.png?size=50x50&set=set1",
    name: "Benjamin Jirsa",
    university: "Southern Denmark Business School",
    sentences: "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    email: "bjirsak5@sitemeter.com",
  },
  {
    color: "#612cfb",
    avatar: "https://robohash.org/doloresearumipsa.png?size=50x50&set=set1",
    name: "Kial Plaice",
    university: "Addis Ababa University",
    sentences:
      "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    email: "kplaicek6@twitpic.com",
  },
  {
    color: "#3141b8",
    avatar: "https://robohash.org/estaccusantiumfugiat.png?size=50x50&set=set1",
    name: "Willetta O' Mullane",
    university: "Global Open University , Nagaland",
    sentences:
      "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    email: "wok7@feedburner.com",
  },
  {
    color: "#b6ae1f",
    avatar:
      "https://robohash.org/necessitatibusvoluptatumnam.png?size=50x50&set=set1",
    name: "Octavia Caulier",
    university: "California State University, Hayward",
    sentences:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    email: "ocaulierk8@about.com",
  },
  {
    color: "#e5c560",
    avatar:
      "https://robohash.org/omnisrepellatlaboriosam.png?size=50x50&set=set1",
    name: "Carmita Ghiroldi",
    university: "Istanbul Ticaret University",
    sentences:
      "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    email: "cghiroldik9@mediafire.com",
  },
  {
    color: "#635124",
    avatar:
      "https://robohash.org/explicaboaspernaturiure.png?size=50x50&set=set1",
    name: "Kean Jennins",
    university: "Our Lady of Fatima University",
    sentences:
      "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    email: "kjenninska@instagram.com",
  },
  {
    color: "#f27bfb",
    avatar: "https://robohash.org/omniscuminventore.png?size=50x50&set=set1",
    name: "Jewell Laven",
    university: "Fachhochschule Würzburg - Schweinfurt",
    sentences:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
    email: "jlavenkb@bandcamp.com",
  },
  {
    color: "#c3bed2",
    avatar: "https://robohash.org/fugiattemporanam.png?size=50x50&set=set1",
    name: "Mace Coleby",
    university: "Universidad del Istmo",
    sentences: "Pellentesque at nulla. Suspendisse potenti.",
    email: "mcolebykc@cafepress.com",
  },
  {
    color: "#f2e721",
    avatar: "https://robohash.org/quissedplaceat.png?size=50x50&set=set1",
    name: "Boris Cranke",
    university: "Marathwada Agricultural University",
    sentences:
      "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    email: "bcrankekd@mashable.com",
  },
  {
    color: "#b0cf5e",
    avatar: "https://robohash.org/voluptateseafacilis.png?size=50x50&set=set1",
    name: "Elladine Goodlip",
    university:
      "State University of New York College of Technology at Farmingdale",
    sentences:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    email: "egoodlipke@mac.com",
  },
  {
    color: "#e53f3d",
    avatar: "https://robohash.org/quasianimiesse.png?size=50x50&set=set1",
    name: "Sammy Cleverly",
    university: "York College Nebraska",
    sentences:
      "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
    email: "scleverlykf@gov.uk",
  },
  {
    color: "#c44fe7",
    avatar:
      "https://robohash.org/perferendisipsumplaceat.png?size=50x50&set=set1",
    name: "Ogden French",
    university: "Dalian Polytechnic University",
    sentences:
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    email: "ofrenchkg@thetimes.co.uk",
  },
  {
    color: "#088e73",
    avatar:
      "https://robohash.org/reiciendisquamperferendis.png?size=50x50&set=set1",
    name: "Coralie Blasing",
    university: "Moscow State Institute of Steel and Alloys",
    sentences:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    email: "cblasingkh@dailymotion.com",
  },
  {
    color: "#a5ab06",
    avatar: "https://robohash.org/earumofficiaut.png?size=50x50&set=set1",
    name: "Angie Piddington",
    university: "Grace University",
    sentences:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    email: "apiddingtonki@jigsy.com",
  },
  {
    color: "#abb8c0",
    avatar: "https://robohash.org/etquieum.png?size=50x50&set=set1",
    name: "Clarette Starmont",
    university: "Jiangxi University of Finance and Economics",
    sentences:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.",
    email: "cstarmontkj@simplemachines.org",
  },
  {
    color: "#335152",
    avatar: "https://robohash.org/evenietetquam.png?size=50x50&set=set1",
    name: "Birk Lusher",
    university: "Institut Catholique de Paris",
    sentences:
      "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    email: "blusherkk@vk.com",
  },
  {
    color: "#bc7e95",
    avatar: "https://robohash.org/quinequeamet.png?size=50x50&set=set1",
    name: "Morley Lightowler",
    university: "Chengdu University of Technology",
    sentences:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    email: "mlightowlerkl@devhub.com",
  },
  {
    color: "#b14559",
    avatar: "https://robohash.org/asperioresnisiut.png?size=50x50&set=set1",
    name: "Maryanne Fleming",
    university: "Emeq Yizrael College",
    sentences:
      "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    email: "mflemingkm@wiley.com",
  },
  {
    color: "#7c455d",
    avatar:
      "https://robohash.org/velitevenietmolestias.png?size=50x50&set=set1",
    name: "Afton Lampard",
    university: "Maxim Gorky Institute of Literature",
    sentences:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    email: "alampardkn@edublogs.org",
  },
  {
    color: "#698774",
    avatar: "https://robohash.org/autaliquamexpedita.png?size=50x50&set=set1",
    name: "Cale O'Sharkey",
    university: "Universidad de Antioquia",
    sentences:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    email: "cosharkeyko@opensource.org",
  },
  {
    color: "#4512b2",
    avatar: "https://robohash.org/nametsint.png?size=50x50&set=set1",
    name: "Eve Vermer",
    university: "Université Catholique de l' Ouest",
    sentences:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    email: "evermerkp@sogou.com",
  },
  {
    color: "#dbdd59",
    avatar: "https://robohash.org/laborumomnisquia.png?size=50x50&set=set1",
    name: "Dorelle Hulland",
    university: "Aarhus University",
    sentences:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
    email: "dhullandkq@soup.io",
  },
  {
    color: "#c3e61b",
    avatar: "https://robohash.org/solutablanditiisest.png?size=50x50&set=set1",
    name: "Enrico Dadswell",
    university: "Graduate Theological Union",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    email: "edadswellkr@rediff.com",
  },
  {
    color: "#3ac15e",
    avatar: "https://robohash.org/idomnissoluta.png?size=50x50&set=set1",
    name: "Dominick Hulburd",
    university: "Ganja State University ",
    sentences:
      "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
    email: "dhulburdks@rambler.ru",
  },
  {
    color: "#707fa1",
    avatar: "https://robohash.org/consequaturtotamquos.png?size=50x50&set=set1",
    name: "Kassia Tomkin",
    university: "College of Science, Baghdad University",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.",
    email: "ktomkinkt@abc.net.au",
  },
  {
    color: "#5e99f2",
    avatar: "https://robohash.org/impedithiclibero.png?size=50x50&set=set1",
    name: "Aguste Prentice",
    university: "Kuban State University of Technology",
    sentences:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    email: "aprenticeku@washington.edu",
  },
  {
    color: "#3d636a",
    avatar:
      "https://robohash.org/quiaconsequunturexplicabo.png?size=50x50&set=set1",
    name: "Eba Gainsford",
    university: "Carl von Ossietzky Universität Oldenburg",
    sentences:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
    email: "egainsfordkv@weather.com",
  },
  {
    color: "#721016",
    avatar:
      "https://robohash.org/enimpraesentiumasperiores.png?size=50x50&set=set1",
    name: "Lyn MacPaden",
    university: "Seowon University",
    sentences:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    email: "lmacpadenkw@phoca.cz",
  },
  {
    color: "#c2ed26",
    avatar:
      "https://robohash.org/doloressequiasperiores.png?size=50x50&set=set1",
    name: "Vicky Borles",
    university: "Graduate Theological Union",
    sentences:
      "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
    email: "vborleskx@wufoo.com",
  },
  {
    color: "#0ee506",
    avatar: "https://robohash.org/perferendisinnam.png?size=50x50&set=set1",
    name: "Patty Torald",
    university: "University of Medicine and Pharmacy of Timisoara",
    sentences:
      "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    email: "ptoraldky@admin.ch",
  },
  {
    color: "#0cac23",
    avatar: "https://robohash.org/porropraesentiumex.png?size=50x50&set=set1",
    name: "Pincas Phelps",
    university: "Mongolian State University of Arts and Culture",
    sentences:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    email: "pphelpskz@nbcnews.com",
  },
  {
    color: "#c71a4d",
    avatar: "https://robohash.org/itaqueeumquo.png?size=50x50&set=set1",
    name: "Cordell Nicklen",
    university: "Ohio University",
    sentences:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    email: "cnicklenl0@omniture.com",
  },
  {
    color: "#2ddffe",
    avatar: "https://robohash.org/rerumquosfacere.png?size=50x50&set=set1",
    name: "Boonie Vakhlov",
    university: "University of the Faroe Islands",
    sentences:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    email: "bvakhlovl1@kickstarter.com",
  },
  {
    color: "#0d6b49",
    avatar:
      "https://robohash.org/eligendivoluptatestotam.png?size=50x50&set=set1",
    name: "Anya Lambshine",
    university: "King Saud bin Abdulaziz University for Health Sciences ",
    sentences:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    email: "alambshinel2@alibaba.com",
  },
  {
    color: "#cd9408",
    avatar:
      "https://robohash.org/dignissimosnumquammaiores.png?size=50x50&set=set1",
    name: "Shelley Pavinese",
    university: "College of DuPage",
    sentences:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    email: "spavinesel3@abc.net.au",
  },
  {
    color: "#28aefd",
    avatar: "https://robohash.org/placeatestfugiat.png?size=50x50&set=set1",
    name: "Aubrie Kiff",
    university: "Université Gaston Berger Saint-Louis",
    sentences:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
    email: "akiffl4@dion.ne.jp",
  },
  {
    color: "#98e1a0",
    avatar: "https://robohash.org/quissolutaincidunt.png?size=50x50&set=set1",
    name: "Tristam Huitson",
    university: "Islamic University of Rotterdam",
    sentences:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    email: "thuitsonl5@prlog.org",
  },
  {
    color: "#f51a62",
    avatar:
      "https://robohash.org/evenietinciduntrepellendus.png?size=50x50&set=set1",
    name: "Truman Shieber",
    university: "University of Pisa",
    sentences:
      "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
    email: "tshieberl6@seattletimes.com",
  },
  {
    color: "#6da612",
    avatar: "https://robohash.org/abnullamolestiae.png?size=50x50&set=set1",
    name: "Truman Saenz",
    university: "Marymount Manhattan College",
    sentences:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    email: "tsaenzl7@example.com",
  },
  {
    color: "#d1eb00",
    avatar: "https://robohash.org/nonvoluptatumet.png?size=50x50&set=set1",
    name: "Kerrill Olyff",
    university: "Universidad Nacional José Faustino Sánchez Carrión",
    sentences:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
    email: "kolyffl8@smh.com.au",
  },
  {
    color: "#aa6c3a",
    avatar: "https://robohash.org/doloribusquobeatae.png?size=50x50&set=set1",
    name: "Craig Jopson",
    university: "Escola Nautica Infante D. Henrique",
    sentences:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    email: "cjopsonl9@homestead.com",
  },
  {
    color: "#1d0a99",
    avatar: "https://robohash.org/eiusasperioresenim.png?size=50x50&set=set1",
    name: "Chalmers Ravenhills",
    university: "Indian Institute of Science",
    sentences:
      "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    email: "cravenhillsla@foxnews.com",
  },
  {
    color: "#b4ef1c",
    avatar:
      "https://robohash.org/maioresrepudiandaeasperiores.png?size=50x50&set=set1",
    name: "Wyatan Gerge",
    university: "Hadhramout University of Science and Technology ",
    sentences:
      "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    email: "wgergelb@over-blog.com",
  },
  {
    color: "#fc5910",
    avatar: "https://robohash.org/nesciuntnullanatus.png?size=50x50&set=set1",
    name: "Maurizio Ubsdall",
    university: "Emeishan Buddhist College",
    sentences: "In sagittis dui vel nisl.",
    email: "mubsdalllc@prweb.com",
  },
  {
    color: "#f94478",
    avatar: "https://robohash.org/ipsumrationeet.png?size=50x50&set=set1",
    name: "Mitchel Dummett",
    university: "Obafemi Awolowo University Ile-Ife",
    sentences:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    email: "mdummettld@chron.com",
  },
  {
    color: "#c58cba",
    avatar: "https://robohash.org/veldolorumquae.png?size=50x50&set=set1",
    name: "Abie Ibell",
    university: "Masinde Muliro University of Science and Technology",
    sentences:
      "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    email: "aibellle@army.mil",
  },
  {
    color: "#aab2db",
    avatar: "https://robohash.org/quiasitautem.png?size=50x50&set=set1",
    name: "Zitella Keeffe",
    university: "University of Joensuu",
    sentences:
      "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
    email: "zkeeffelf@ovh.net",
  },
  {
    color: "#516543",
    avatar: "https://robohash.org/doloresomnisincidunt.png?size=50x50&set=set1",
    name: "Keefe Mouan",
    university: "Lakeland College",
    sentences:
      "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    email: "kmouanlg@hud.gov",
  },
  {
    color: "#5cdd09",
    avatar: "https://robohash.org/consecteturvitaeut.png?size=50x50&set=set1",
    name: "Roxie Finlry",
    university: "University of Madras",
    sentences:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
    email: "rfinlrylh@comcast.net",
  },
  {
    color: "#1c3a6a",
    avatar:
      "https://robohash.org/voluptatescorruptidelectus.png?size=50x50&set=set1",
    name: "Armstrong Geere",
    university: "University of Central Missouri",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    email: "ageereli@fotki.com",
  },
  {
    color: "#2c4384",
    avatar: "https://robohash.org/velattotam.png?size=50x50&set=set1",
    name: "Babs Loughlan",
    university: "Universidad Ricardo Palma",
    sentences:
      "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    email: "bloughlanlj@angelfire.com",
  },
  {
    color: "#46046b",
    avatar: "https://robohash.org/estaliquiderror.png?size=50x50&set=set1",
    name: "John Lethibridge",
    university: "Institute of Teachers Education, Keningau",
    sentences:
      "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    email: "jlethibridgelk@ucla.edu",
  },
  {
    color: "#3fc609",
    avatar: "https://robohash.org/inilloamet.png?size=50x50&set=set1",
    name: "Tris Jiroutek",
    university: "Södertörn University College",
    sentences:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    email: "tjiroutekll@woothemes.com",
  },
  {
    color: "#4eee66",
    avatar:
      "https://robohash.org/nisivoluptatemincidunt.png?size=50x50&set=set1",
    name: "Thurstan Foden",
    university: "Virginia Union University",
    sentences:
      "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
    email: "tfodenlm@discuz.net",
  },
  {
    color: "#b7f327",
    avatar: "https://robohash.org/estistevoluptatum.png?size=50x50&set=set1",
    name: "Drusy Jewers",
    university: "Pakistan Virtual University",
    sentences:
      "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    email: "djewersln@ask.com",
  },
  {
    color: "#baeda4",
    avatar: "https://robohash.org/nullanemoamet.png?size=50x50&set=set1",
    name: "Doe Cuttler",
    university: "Worcester State College",
    sentences:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
    email: "dcuttlerlo@nyu.edu",
  },
  {
    color: "#4199be",
    avatar: "https://robohash.org/saepemolestiaeet.png?size=50x50&set=set1",
    name: "Grange Romao",
    university: "Benedict College",
    sentences:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    email: "gromaolp@psu.edu",
  },
  {
    color: "#3fdc82",
    avatar: "https://robohash.org/illoeanam.png?size=50x50&set=set1",
    name: "Ethe Cornwall",
    university: "Université du Québec en Outaouais",
    sentences:
      "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    email: "ecornwalllq@usa.gov",
  },
  {
    color: "#df3a8f",
    avatar:
      "https://robohash.org/architectoeaqueadipisci.png?size=50x50&set=set1",
    name: "Tillie Grewer",
    university: "National University of Ireland, Maynooth",
    sentences:
      "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    email: "tgrewerlr@wordpress.com",
  },
  {
    color: "#f3789c",
    avatar:
      "https://robohash.org/quasiaccusantiumlibero.png?size=50x50&set=set1",
    name: "Morgun Triggs",
    university: " Technological University (Yangon)",
    sentences:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
    email: "mtriggsls@issuu.com",
  },
  {
    color: "#4f04df",
    avatar: "https://robohash.org/minimadolornisi.png?size=50x50&set=set1",
    name: "Kelly Swenson",
    university: "University of Bologna",
    sentences:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
    email: "kswensonlt@goo.gl",
  },
  {
    color: "#581df3",
    avatar: "https://robohash.org/minusutitaque.png?size=50x50&set=set1",
    name: "Grace Cropton",
    university: "London School of Jewish Studies",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    email: "gcroptonlu@economist.com",
  },
  {
    color: "#4a8ee7",
    avatar: "https://robohash.org/autundeporro.png?size=50x50&set=set1",
    name: "Salim Asel",
    university: "Iact College",
    sentences:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    email: "sasellv@utexas.edu",
  },
  {
    color: "#a62677",
    avatar: "https://robohash.org/modiquaevoluptatem.png?size=50x50&set=set1",
    name: "Clareta Murfett",
    university: "National Tsinghua University",
    sentences:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    email: "cmurfettlw@hugedomains.com",
  },
  {
    color: "#07beff",
    avatar: "https://robohash.org/eosconsecteturut.png?size=50x50&set=set1",
    name: "Georgianne Madgwich",
    university: "University of Northern Iowa",
    sentences:
      "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    email: "gmadgwichlx@myspace.com",
  },
  {
    color: "#b58285",
    avatar:
      "https://robohash.org/accusamusconsequaturamet.png?size=50x50&set=set1",
    name: "Ford Domel",
    university: "Lyndon State College",
    sentences:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    email: "fdomelly@moonfruit.com",
  },
  {
    color: "#4ac2ce",
    avatar: "https://robohash.org/ipsavelut.png?size=50x50&set=set1",
    name: "Edlin Keme",
    university: "University of Eastern Philippines",
    sentences:
      "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
    email: "ekemelz@wikia.com",
  },
  {
    color: "#ef1f0d",
    avatar: "https://robohash.org/quisdignissimosnobis.png?size=50x50&set=set1",
    name: "Gasper Regenhardt",
    university: "Waynesburg College",
    sentences:
      "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    email: "gregenhardtm0@accuweather.com",
  },
  {
    color: "#6a04da",
    avatar: "https://robohash.org/ametfugiatvel.png?size=50x50&set=set1",
    name: "Mallory Ravel",
    university: "University of Ottawa",
    sentences:
      "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
    email: "mravelm1@jigsy.com",
  },
  {
    color: "#75953f",
    avatar: "https://robohash.org/velitodiototam.png?size=50x50&set=set1",
    name: "Gena Hedgeman",
    university: "Universidade Estadual de Londrina",
    sentences: "Fusce consequat. Nulla nisl.",
    email: "ghedgemanm2@cnet.com",
  },
  {
    color: "#4e0244",
    avatar: "https://robohash.org/autfugitmolestiae.png?size=50x50&set=set1",
    name: "Mitchel Petrou",
    university: "University of Maine (System)",
    sentences:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    email: "mpetroum3@hexun.com",
  },
  {
    color: "#af09f3",
    avatar: "https://robohash.org/culpadoloremullam.png?size=50x50&set=set1",
    name: "Alick Jonk",
    university: "Concord College",
    sentences:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    email: "ajonkm4@engadget.com",
  },
  {
    color: "#1e7a05",
    avatar: "https://robohash.org/abmolestiaeodio.png?size=50x50&set=set1",
    name: "Fair Naughton",
    university: "Escuela de Administración de Negocios",
    sentences:
      "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    email: "fnaughtonm5@time.com",
  },
  {
    color: "#016afc",
    avatar: "https://robohash.org/minimaeumad.png?size=50x50&set=set1",
    name: "Gerick Antic",
    university: "Pratt Institute",
    sentences: "Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    email: "ganticm6@patch.com",
  },
  {
    color: "#9a5da3",
    avatar:
      "https://robohash.org/facilisquamdistinctio.png?size=50x50&set=set1",
    name: "Noel Gindghill",
    university: "Arts, Sciences and Technology University",
    sentences:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    email: "ngindghillm7@addthis.com",
  },
  {
    color: "#89a53f",
    avatar: "https://robohash.org/quisquamquistotam.png?size=50x50&set=set1",
    name: "Kass Mathelin",
    university: "Université Joseph Fourier (Grenoble I)",
    sentences:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    email: "kmathelinm8@shop-pro.jp",
  },
  {
    color: "#2f601a",
    avatar: "https://robohash.org/etistesed.png?size=50x50&set=set1",
    name: "Timmie McClurg",
    university: "Tshwane University of Technology",
    sentences:
      "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
    email: "tmcclurgm9@angelfire.com",
  },
  {
    color: "#d868ae",
    avatar: "https://robohash.org/rationerecusandaevel.png?size=50x50&set=set1",
    name: "Vanya Claasen",
    university: "Universitas Bengkulu",
    sentences:
      "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
    email: "vclaasenma@purevolume.com",
  },
  {
    color: "#4f317d",
    avatar: "https://robohash.org/numquamabvoluptas.png?size=50x50&set=set1",
    name: "Devin Maybury",
    university: "Universidad de La Amazonia",
    sentences:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    email: "dmayburymb@nba.com",
  },
  {
    color: "#6c0290",
    avatar:
      "https://robohash.org/remculpaexercitationem.png?size=50x50&set=set1",
    name: "Julius Dempster",
    university: "Ho Chi Minh City Open University",
    sentences: "Duis bibendum.",
    email: "jdempstermc@netlog.com",
  },
  {
    color: "#50ddec",
    avatar: "https://robohash.org/quiaquivoluptatem.png?size=50x50&set=set1",
    name: "Edmon Willows",
    university: "Purdue University Calumet",
    sentences:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    email: "ewillowsmd@berkeley.edu",
  },
  {
    color: "#68f350",
    avatar: "https://robohash.org/ducimusiustolibero.png?size=50x50&set=set1",
    name: "Wynnie Bardnam",
    university: "Université Panthéon-Sorbonne (Paris I)",
    sentences:
      "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    email: "wbardnamme@nymag.com",
  },
  {
    color: "#2075e7",
    avatar: "https://robohash.org/uteaquevoluptas.png?size=50x50&set=set1",
    name: "Roddy Alesio",
    university: 'Pedagogical State University "Ion Creanga"',
    sentences:
      "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    email: "ralesiomf@nationalgeographic.com",
  },
  {
    color: "#00369f",
    avatar: "https://robohash.org/numquamvelitquas.png?size=50x50&set=set1",
    name: "Ian Whittle",
    university: "City University of New York, Brooklyn College",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
    email: "iwhittlemg@ted.com",
  },
  {
    color: "#b931da",
    avatar: "https://robohash.org/odiosita.png?size=50x50&set=set1",
    name: "Rufe Dhenin",
    university: "Technological University (Pinlon)",
    sentences:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    email: "rdheninmh@slideshare.net",
  },
  {
    color: "#3adc00",
    avatar:
      "https://robohash.org/accusantiumquasiblanditiis.png?size=50x50&set=set1",
    name: "Orelie O'Boyle",
    university: "Centro Universitário de Araraquara",
    sentences:
      "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    email: "ooboylemi@topsy.com",
  },
  {
    color: "#10bbc8",
    avatar: "https://robohash.org/officiissimiliqueaut.png?size=50x50&set=set1",
    name: "Gillan Swain",
    university: "Umm Al-Qura University",
    sentences:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    email: "gswainmj@ycombinator.com",
  },
  {
    color: "#ddd26c",
    avatar: "https://robohash.org/corporisquodpossimus.png?size=50x50&set=set1",
    name: "Nelli Grimwood",
    university: "Florida Metropolitan University, Tampa College",
    sentences:
      "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    email: "ngrimwoodmk@g.co",
  },
  {
    color: "#1a61e0",
    avatar:
      "https://robohash.org/temporibusvoluptatumlibero.png?size=50x50&set=set1",
    name: "Gustaf Parsall",
    university: "Université de Marne la Vallée",
    sentences:
      "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    email: "gparsallml@kickstarter.com",
  },
  {
    color: "#b0b03b",
    avatar: "https://robohash.org/evenietsitlibero.png?size=50x50&set=set1",
    name: "Elliott Clewett",
    university: "University of Texas at Dallas",
    sentences: "Morbi a ipsum.",
    email: "eclewettmm@deliciousdays.com",
  },
  {
    color: "#fc4c47",
    avatar:
      "https://robohash.org/sequivoluptatemquidem.png?size=50x50&set=set1",
    name: "Lucille Guyan",
    university: "Fachhochschule Schwäbisch Hall, Hochschule für Gestaltung",
    sentences:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    email: "lguyanmn@upenn.edu",
  },
  {
    color: "#9a1cb2",
    avatar: "https://robohash.org/beataequaeratfuga.png?size=50x50&set=set1",
    name: "Drusie Gambie",
    university: "Fundación Universitaria Luis Amigó",
    sentences:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
    email: "dgambiemo@earthlink.net",
  },
  {
    color: "#399f14",
    avatar: "https://robohash.org/earumcumqueomnis.png?size=50x50&set=set1",
    name: "Vicky Courson",
    university: "Okinawa University",
    sentences:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    email: "vcoursonmp@homestead.com",
  },
  {
    color: "#1f7b5a",
    avatar: "https://robohash.org/dictaremquidem.png?size=50x50&set=set1",
    name: "Quinn McCrudden",
    university: "Universidade Federal de Ouro Preto",
    sentences:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    email: "qmccruddenmq@theatlantic.com",
  },
  {
    color: "#9ba088",
    avatar: "https://robohash.org/etsuntvelit.png?size=50x50&set=set1",
    name: "Merrilee Oade",
    university: "Wadi International University",
    sentences:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    email: "moademr@cafepress.com",
  },
  {
    color: "#7bf730",
    avatar: "https://robohash.org/eosadipisciiusto.png?size=50x50&set=set1",
    name: "Bond McKinna",
    university: "Kagoshima Women's College",
    sentences:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    email: "bmckinnams@gnu.org",
  },
  {
    color: "#286263",
    avatar:
      "https://robohash.org/dictavoluptatemaspernatur.png?size=50x50&set=set1",
    name: "Farand Hruska",
    university: "Motilal Nehru National Institute Of Technology",
    sentences:
      "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    email: "fhruskamt@abc.net.au",
  },
  {
    color: "#f3f317",
    avatar: "https://robohash.org/doloremnatusest.png?size=50x50&set=set1",
    name: "Karon Pechacek",
    university: "Université Stendhal (Grenoble III)",
    sentences:
      "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
    email: "kpechacekmu@nasa.gov",
  },
  {
    color: "#5a5f3f",
    avatar: "https://robohash.org/autdoloribusamet.png?size=50x50&set=set1",
    name: "Cinda McCrea",
    university: "Universidad Privada Juan Mejía Baca",
    sentences:
      "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
    email: "cmccreamv@un.org",
  },
  {
    color: "#9a6c05",
    avatar:
      "https://robohash.org/harumperferendiscommodi.png?size=50x50&set=set1",
    name: "Dion Jills",
    university: "Ulsan University",
    sentences:
      "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
    email: "djillsmw@prlog.org",
  },
  {
    color: "#b0ae25",
    avatar: "https://robohash.org/molestiasremet.png?size=50x50&set=set1",
    name: "Glad Ottey",
    university: "Universität Hildesheim",
    sentences:
      "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    email: "gotteymx@ebay.co.uk",
  },
  {
    color: "#034d98",
    avatar: "https://robohash.org/voluptatemetad.png?size=50x50&set=set1",
    name: "Carce Colbeck",
    university: "Gifu Shotoku Gakuen University",
    sentences:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.",
    email: "ccolbeckmy@ox.ac.uk",
  },
  {
    color: "#7fcb32",
    avatar:
      "https://robohash.org/similiqueitaquedolorem.png?size=50x50&set=set1",
    name: "Queenie Gullyes",
    university: "University of Nicosia",
    sentences:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
    email: "qgullyesmz@usatoday.com",
  },
  {
    color: "#1f7b98",
    avatar: "https://robohash.org/etundeearum.png?size=50x50&set=set1",
    name: "Ado Serraillier",
    university: "Institut Supérieur Agricole de Beauvais",
    sentences: "Aliquam non mauris.",
    email: "aserrailliern0@accuweather.com",
  },
  {
    color: "#29487b",
    avatar: "https://robohash.org/eaquinemo.png?size=50x50&set=set1",
    name: "Gail Umpleby",
    university: "Laikipia University",
    sentences:
      "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    email: "gumplebyn1@sciencedirect.com",
  },
  {
    color: "#f2a6a4",
    avatar: "https://robohash.org/deseruntsaepevelit.png?size=50x50&set=set1",
    name: "Gweneth Kenwell",
    university: "Eichi University",
    sentences:
      "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
    email: "gkenwelln2@springer.com",
  },
  {
    color: "#42ba5f",
    avatar: "https://robohash.org/providentundevel.png?size=50x50&set=set1",
    name: "Lizabeth Mingus",
    university: "Bulacan State University",
    sentences:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    email: "lmingusn3@networksolutions.com",
  },
  {
    color: "#60e63d",
    avatar: "https://robohash.org/eligendiquisratione.png?size=50x50&set=set1",
    name: "Eamon Belward",
    university: "East Delta University",
    sentences:
      "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    email: "ebelwardn4@mashable.com",
  },
  {
    color: "#b6794c",
    avatar: "https://robohash.org/voluptassintquidem.png?size=50x50&set=set1",
    name: "Lexi Tregea",
    university: "University of Lagos",
    sentences:
      "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    email: "ltregean5@mozilla.org",
  },
  {
    color: "#57fbab",
    avatar:
      "https://robohash.org/laudantiumconsecteturdelectus.png?size=50x50&set=set1",
    name: "Joella Buck",
    university: "Seiwa College",
    sentences:
      "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
    email: "jbuckn6@cnet.com",
  },
  {
    color: "#ed5aac",
    avatar:
      "https://robohash.org/quidemvitaeconsequatur.png?size=50x50&set=set1",
    name: "Evie Wimpeney",
    university: "Universidad Libre de Colombia",
    sentences:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    email: "ewimpeneyn7@barnesandnoble.com",
  },
  {
    color: "#a32092",
    avatar: "https://robohash.org/illumnatussit.png?size=50x50&set=set1",
    name: "Arabelle Bentall",
    university: "Kun Shan University",
    sentences:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    email: "abentalln8@youtube.com",
  },
  {
    color: "#d3687a",
    avatar:
      "https://robohash.org/inventorevoluptatemerror.png?size=50x50&set=set1",
    name: "Dynah Spalton",
    university: "Fiji National University ",
    sentences:
      "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
    email: "dspaltonn9@moonfruit.com",
  },
  {
    color: "#22f12b",
    avatar: "https://robohash.org/molestiaererumeum.png?size=50x50&set=set1",
    name: "Rica Canedo",
    university: "College of St. Joseph",
    sentences:
      "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
    email: "rcanedona@army.mil",
  },
  {
    color: "#e79c3c",
    avatar: "https://robohash.org/nullamaximeeaque.png?size=50x50&set=set1",
    name: "Cleopatra Korba",
    university: "Dawood College of Engineering and Technology",
    sentences:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
    email: "ckorbanb@dell.com",
  },
  {
    color: "#ade343",
    avatar:
      "https://robohash.org/blanditiisabaccusantium.png?size=50x50&set=set1",
    name: "Parsifal Simkin",
    university: 'University Center "César Ritz"',
    sentences:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    email: "psimkinnc@ebay.co.uk",
  },
  {
    color: "#c8e7a8",
    avatar: "https://robohash.org/sitrecusandaemagni.png?size=50x50&set=set1",
    name: "Pam Wrightam",
    university: "MGH Institute of Health Professions",
    sentences:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
    email: "pwrightamnd@omniture.com",
  },
  {
    color: "#d07dd6",
    avatar:
      "https://robohash.org/etcupiditateprovident.png?size=50x50&set=set1",
    name: "Dolorita Culcheth",
    university: "Sekolah Tinggi Akuntansi Negara (STAN)",
    sentences:
      "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
    email: "dculchethne@acquirethisname.com",
  },
  {
    color: "#65fc0c",
    avatar: "https://robohash.org/quamaspernaturomnis.png?size=50x50&set=set1",
    name: "Benedict Reddel",
    university: "Hafencity Universität Hamburg",
    sentences:
      "Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    email: "breddelnf@artisteer.com",
  },
  {
    color: "#9e0cc2",
    avatar: "https://robohash.org/quilaboredolorem.png?size=50x50&set=set1",
    name: "Rudolph Zeal",
    university: "Universitas Gunadarma",
    sentences:
      "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
    email: "rzealng@cafepress.com",
  },
  {
    color: "#af4219",
    avatar:
      "https://robohash.org/doloresenimconsequatur.png?size=50x50&set=set1",
    name: "Sauncho Pavluk",
    university: "Ufa State Petroleum Technological University",
    sentences:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    email: "spavluknh@bravesites.com",
  },
  {
    color: "#2a80a2",
    avatar: "https://robohash.org/estautemlaudantium.png?size=50x50&set=set1",
    name: "Verna Testro",
    university: "Oakland University",
    sentences:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
    email: "vtestroni@acquirethisname.com",
  },
  {
    color: "#adadd8",
    avatar:
      "https://robohash.org/placeataliquamconsequuntur.png?size=50x50&set=set1",
    name: "Phaidra Oleksiak",
    university: "Belmont Abbey College",
    sentences:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    email: "poleksiaknj@unblog.fr",
  },
  {
    color: "#041a1c",
    avatar: "https://robohash.org/ututodio.png?size=50x50&set=set1",
    name: "Jacinthe Rackstraw",
    university: "Muthesius-Hochschule, Fachhochschule für Kunst und Gestaltung",
    sentences:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
    email: "jrackstrawnk@archive.org",
  },
  {
    color: "#4fe46c",
    avatar: "https://robohash.org/temporamolestiaseum.png?size=50x50&set=set1",
    name: "Alon Gerretsen",
    university: "Shanghai University of Engineering Science",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    email: "agerretsennl@examiner.com",
  },
  {
    color: "#25a661",
    avatar:
      "https://robohash.org/necessitatibusrepudiandaeeveniet.png?size=50x50&set=set1",
    name: "Gideon Fishpond",
    university: "University of Peshawar",
    sentences: "Integer ac neque.",
    email: "gfishpondnm@howstuffworks.com",
  },
  {
    color: "#913698",
    avatar: "https://robohash.org/quidoloresdolor.png?size=50x50&set=set1",
    name: "Chester Canas",
    university: "Politeknik Negeri Jakarta",
    sentences:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    email: "ccanasnn@parallels.com",
  },
  {
    color: "#df3247",
    avatar:
      "https://robohash.org/necessitatibusiderror.png?size=50x50&set=set1",
    name: "Joline O'Brollachain",
    university: "Ningxia Medical College",
    sentences:
      "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
    email: "jobrollachainno@tinypic.com",
  },
  {
    color: "#3a5382",
    avatar:
      "https://robohash.org/voluptatumveritatistenetur.png?size=50x50&set=set1",
    name: "Bank Edden",
    university: "Zhejiang University of Technology",
    sentences:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    email: "beddennp@github.io",
  },
  {
    color: "#f57f63",
    avatar: "https://robohash.org/quoquaevoluptates.png?size=50x50&set=set1",
    name: "Neddie Dunklee",
    university: "University of Sydney",
    sentences:
      "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    email: "ndunkleenq@shareasale.com",
  },
  {
    color: "#d1b2b5",
    avatar: "https://robohash.org/veritatisetiusto.png?size=50x50&set=set1",
    name: "Salmon Aldhous",
    university: "Universidad de Occidente",
    sentences:
      "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    email: "saldhousnr@alexa.com",
  },
  {
    color: "#e55bc1",
    avatar: "https://robohash.org/remutqui.png?size=50x50&set=set1",
    name: "Darrick McCawley",
    university: "Quest University",
    sentences:
      "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    email: "dmccawleyns@youtu.be",
  },
  {
    color: "#e32f9f",
    avatar: "https://robohash.org/eumetdolorem.png?size=50x50&set=set1",
    name: "Maribel Whaymand",
    university: "University of Agriculture and Veterinary Medicine Cluj-Napoca",
    sentences:
      "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    email: "mwhaymandnt@upenn.edu",
  },
  {
    color: "#e9b744",
    avatar:
      "https://robohash.org/impeditaspernaturcumque.png?size=50x50&set=set1",
    name: "Rooney Jeffrey",
    university: "İstanbul Şehir University",
    sentences:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
    email: "rjeffreynu@odnoklassniki.ru",
  },
  {
    color: "#137b4a",
    avatar:
      "https://robohash.org/voluptatumaliquamconsequatur.png?size=50x50&set=set1",
    name: "Rivalee Banbrigge",
    university: "St. Petersburg State Conservatory",
    sentences:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    email: "rbanbriggenv@washington.edu",
  },
  {
    color: "#5533ad",
    avatar: "https://robohash.org/quisedducimus.png?size=50x50&set=set1",
    name: "Ileane Banane",
    university: "Maejo University",
    sentences:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
    email: "ibananenw@salon.com",
  },
  {
    color: "#9c39b7",
    avatar: "https://robohash.org/rerumaliquidaut.png?size=50x50&set=set1",
    name: "Booth Rottenbury",
    university: "Jiaying University",
    sentences: "Quisque id justo sit amet sapien dignissim vestibulum.",
    email: "brottenburynx@google.com",
  },
  {
    color: "#31c6f3",
    avatar: "https://robohash.org/quiquinatus.png?size=50x50&set=set1",
    name: "Jacky Mueller",
    university: "School of Finance and Banking",
    sentences:
      "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    email: "jmuellerny@ameblo.jp",
  },
  {
    color: "#33fc21",
    avatar: "https://robohash.org/officiaautet.png?size=50x50&set=set1",
    name: "Alley Mundie",
    university: "Technical Institute of Dubnica in Dubnica nad Váhom",
    sentences:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    email: "amundienz@prnewswire.com",
  },
  {
    color: "#5f2bf6",
    avatar: "https://robohash.org/quiquoeos.png?size=50x50&set=set1",
    name: "Diandra Killford",
    university: "Kashan University",
    sentences: "Vestibulum rutrum rutrum neque.",
    email: "dkillfordo0@timesonline.co.uk",
  },
  {
    color: "#c3f296",
    avatar: "https://robohash.org/omnisodioid.png?size=50x50&set=set1",
    name: "Dimitry Wellbeloved",
    university: "Minia University",
    sentences:
      "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    email: "dwellbelovedo1@china.com.cn",
  },
  {
    color: "#f00955",
    avatar: "https://robohash.org/veniamsintquae.png?size=50x50&set=set1",
    name: "Jyoti Jeffcock",
    university: "Universitas Muria Kudus",
    sentences:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    email: "jjeffcocko2@home.pl",
  },
  {
    color: "#72a9d8",
    avatar: "https://robohash.org/doloremofficiavitae.png?size=50x50&set=set1",
    name: "Frederic Casse",
    university: "Universidade de Fortaleza",
    sentences:
      "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    email: "fcasseo3@seattletimes.com",
  },
  {
    color: "#b8c6cd",
    avatar: "https://robohash.org/odiovelitvoluptatem.png?size=50x50&set=set1",
    name: "Barbara Udden",
    university: "Universität Erfurt",
    sentences: "Pellentesque viverra pede ac diam.",
    email: "buddeno4@guardian.co.uk",
  },
  {
    color: "#6ff46a",
    avatar: "https://robohash.org/maioresestvoluptas.png?size=50x50&set=set1",
    name: "Gunter Durston",
    university: "Tunku Abdul Rahman Chinese College",
    sentences:
      "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    email: "gdurstono5@earthlink.net",
  },
  {
    color: "#66b6f5",
    avatar: "https://robohash.org/evenietullamneque.png?size=50x50&set=set1",
    name: "Anthia Skittrall",
    university: "Shawnee State University",
    sentences:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    email: "askittrallo6@unesco.org",
  },
  {
    color: "#1c76bf",
    avatar:
      "https://robohash.org/dolorempraesentiumexpedita.png?size=50x50&set=set1",
    name: "Arly Whate",
    university: "Mills Grae University",
    sentences:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    email: "awhateo7@pbs.org",
  },
  {
    color: "#966697",
    avatar:
      "https://robohash.org/doloremsunttemporibus.png?size=50x50&set=set1",
    name: "Riva Bernade",
    university: "Weizmann Institute of Science",
    sentences:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
    email: "rbernadeo8@xrea.com",
  },
  {
    color: "#bf0061",
    avatar: "https://robohash.org/doloreundeatque.png?size=50x50&set=set1",
    name: "Rad Mc Menamin",
    university: "Schiller International University, Strasbourg",
    sentences:
      "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    email: "rmco9@pinterest.com",
  },
  {
    color: "#9529cc",
    avatar: "https://robohash.org/utetoptio.png?size=50x50&set=set1",
    name: "Laurene Todhunter",
    university: "Trinity Bible College",
    sentences: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    email: "ltodhunteroa@1688.com",
  },
  {
    color: "#2a6763",
    avatar: "https://robohash.org/autcorruptirepellat.png?size=50x50&set=set1",
    name: "Saundra Maccaig",
    university: "University of the Virgin Islands",
    sentences:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    email: "smaccaigob@jugem.jp",
  },
  {
    color: "#77f7a8",
    avatar:
      "https://robohash.org/oditlaboriosammolestias.png?size=50x50&set=set1",
    name: "Stewart Bonwick",
    university: "Tomas Bata University in Zlin",
    sentences:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    email: "sbonwickoc@google.it",
  },
  {
    color: "#d8106d",
    avatar: "https://robohash.org/quosisteconsequatur.png?size=50x50&set=set1",
    name: "Daven Keiling",
    university: "Universidad Nacional de La Rioja",
    sentences: "Mauris ullamcorper purus sit amet nulla.",
    email: "dkeilingod@usda.gov",
  },
  {
    color: "#a33b4f",
    avatar: "https://robohash.org/quasiatquerecusandae.png?size=50x50&set=set1",
    name: "Janene Paniman",
    university: "Manonmaniam Sundaranar University",
    sentences:
      "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    email: "jpanimanoe@blogs.com",
  },
  {
    color: "#0d05cb",
    avatar: "https://robohash.org/aliquamblanditiisnon.png?size=50x50&set=set1",
    name: "Rosella de Broke",
    university: "Nanjing Union Theological Seminary",
    sentences:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    email: "rdeof@photobucket.com",
  },
  {
    color: "#7e0315",
    avatar: "https://robohash.org/animiametsed.png?size=50x50&set=set1",
    name: "Silvanus Sergant",
    university: "Faculdades Integradas Curitiba",
    sentences:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    email: "ssergantog@salon.com",
  },
  {
    color: "#48ecad",
    avatar:
      "https://robohash.org/corruptirepellenduspariatur.png?size=50x50&set=set1",
    name: "Symon Rioch",
    university: "Southern University Bangladesh",
    sentences:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    email: "sriochoh@pinterest.com",
  },
  {
    color: "#66fdd9",
    avatar: "https://robohash.org/quihicamet.png?size=50x50&set=set1",
    name: "Franni Aiken",
    university: "Hachinohe University",
    sentences:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
    email: "faikenoi@mapy.cz",
  },
  {
    color: "#fc5852",
    avatar: "https://robohash.org/omnisquiperspiciatis.png?size=50x50&set=set1",
    name: "Genvieve Daville",
    university: "Universidade de Tocantins",
    sentences: "Curabitur gravida nisi at nibh.",
    email: "gdavilleoj@businessinsider.com",
  },
  {
    color: "#76d0ab",
    avatar: "https://robohash.org/nequeveropossimus.png?size=50x50&set=set1",
    name: "Karl Dunge",
    university: "Georgia Southern University",
    sentences:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    email: "kdungeok@europa.eu",
  },
  {
    color: "#3980ef",
    avatar: "https://robohash.org/mollitiaetdeserunt.png?size=50x50&set=set1",
    name: "Marjory Osgorby",
    university: "Tokai Women's College",
    sentences:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
    email: "mosgorbyol@naver.com",
  },
  {
    color: "#7aa13b",
    avatar:
      "https://robohash.org/nobisfacereblanditiis.png?size=50x50&set=set1",
    name: "Mar Geaves",
    university: "Humphreys College",
    sentences:
      "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "mgeavesom@liveinternet.ru",
  },
  {
    color: "#f2c7e0",
    avatar: "https://robohash.org/solutaatquemagnam.png?size=50x50&set=set1",
    name: "Ricard Bernolet",
    university: "Wartburg College",
    sentences:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    email: "rbernoleton@nationalgeographic.com",
  },
  {
    color: "#211445",
    avatar:
      "https://robohash.org/dignissimostotamreprehenderit.png?size=50x50&set=set1",
    name: "Darrel Gainsbury",
    university: "Ecole Supérieure d'Electricité",
    sentences:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    email: "dgainsburyoo@prweb.com",
  },
  {
    color: "#c8e17e",
    avatar:
      "https://robohash.org/consecteturquiaexpedita.png?size=50x50&set=set1",
    name: "Merrielle Maillard",
    university: "Tabor College",
    sentences:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    email: "mmaillardop@sina.com.cn",
  },
  {
    color: "#df2994",
    avatar: "https://robohash.org/remautdoloribus.png?size=50x50&set=set1",
    name: "Flint Cashell",
    university: "Lithunian Academy of Music and Theatre",
    sentences:
      "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    email: "fcashelloq@de.vu",
  },
  {
    color: "#5df858",
    avatar: "https://robohash.org/sintquodnihil.png?size=50x50&set=set1",
    name: "Margarete Mussett",
    university: "Umea University",
    sentences:
      "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.",
    email: "mmussettor@tinyurl.com",
  },
  {
    color: "#9a61a7",
    avatar: "https://robohash.org/eligendietblanditiis.png?size=50x50&set=set1",
    name: "Annadiane Cakebread",
    university: "Islamic Azad University, Garmsar",
    sentences:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    email: "acakebreados@ovh.net",
  },
  {
    color: "#48334a",
    avatar: "https://robohash.org/saepeexcepturivitae.png?size=50x50&set=set1",
    name: "Kellsie Cartwight",
    university: "Dongguk University",
    sentences:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    email: "kcartwightot@posterous.com",
  },
  {
    color: "#0f3ba1",
    avatar: "https://robohash.org/eosaspernaturnumquam.png?size=50x50&set=set1",
    name: "Jami Joddins",
    university: "ITT Technical Institute West Covina",
    sentences:
      "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    email: "jjoddinsou@va.gov",
  },
  {
    color: "#827b55",
    avatar: "https://robohash.org/utdolorpossimus.png?size=50x50&set=set1",
    name: "Isabel McEniry",
    university: "St. John's College New Mexico",
    sentences:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
    email: "imceniryov@e-recht24.de",
  },
  {
    color: "#ba5acc",
    avatar: "https://robohash.org/maximequosed.png?size=50x50&set=set1",
    name: "Hedy Pepperill",
    university: "Jinan University",
    sentences:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    email: "hpepperillow@diigo.com",
  },
  {
    color: "#e45d29",
    avatar:
      "https://robohash.org/laudantiumitaqueoptio.png?size=50x50&set=set1",
    name: "Arlene Juszczyk",
    university: "American InterContinental University - London",
    sentences:
      "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    email: "ajuszczykox@creativecommons.org",
  },
  {
    color: "#cfc1f4",
    avatar: "https://robohash.org/sintveritatiset.png?size=50x50&set=set1",
    name: "Othello Nice",
    university: "University of Florida",
    sentences:
      "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
    email: "oniceoy@ycombinator.com",
  },
  {
    color: "#6b57b1",
    avatar:
      "https://robohash.org/doloresfacilisdeleniti.png?size=50x50&set=set1",
    name: "Kathrine Thumnel",
    university: "Universidad Técnica de Cotopaxi",
    sentences: "Nulla nisl. Nunc nisl.",
    email: "kthumneloz@over-blog.com",
  },
  {
    color: "#61ef59",
    avatar: "https://robohash.org/quidemutet.png?size=50x50&set=set1",
    name: "Allegra Monan",
    university: "Medical Academy Ludwik Rydygier in Bydgoszcz",
    sentences:
      "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    email: "amonanp0@quantcast.com",
  },
  {
    color: "#bb1f25",
    avatar:
      "https://robohash.org/fugiatvelitaspernatur.png?size=50x50&set=set1",
    name: "Tait Deeley",
    university: "Hofstra University",
    sentences:
      "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    email: "tdeeleyp1@engadget.com",
  },
  {
    color: "#0148ef",
    avatar: "https://robohash.org/natusporrovitae.png?size=50x50&set=set1",
    name: "Arni Macewan",
    university: "Kagoshima University",
    sentences:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    email: "amacewanp2@imdb.com",
  },
  {
    color: "#4f4d4c",
    avatar: "https://robohash.org/utquisqui.png?size=50x50&set=set1",
    name: "Olympe Arnely",
    university: "Dixie College",
    sentences:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
    email: "oarnelyp3@twitter.com",
  },
  {
    color: "#2d47bd",
    avatar: "https://robohash.org/autfugitprovident.png?size=50x50&set=set1",
    name: "Patten Neames",
    university: "Mashhad University of Medical Sciences",
    sentences: "Vestibulum rutrum rutrum neque.",
    email: "pneamesp4@desdev.cn",
  },
  {
    color: "#0679ff",
    avatar: "https://robohash.org/suscipitveniamrem.png?size=50x50&set=set1",
    name: "Shirlee Vela",
    university: "Technological Education Institute of Lamia",
    sentences:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    email: "svelap5@deliciousdays.com",
  },
  {
    color: "#fbe0ae",
    avatar: "https://robohash.org/nondebitisut.png?size=50x50&set=set1",
    name: "Alie Fitzer",
    university: "Honam University",
    sentences:
      "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    email: "afitzerp6@yellowbook.com",
  },
  {
    color: "#223b60",
    avatar: "https://robohash.org/officiisquinon.png?size=50x50&set=set1",
    name: "Afton Bednell",
    university: "Universidad de La Guajira",
    sentences:
      "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    email: "abednellp7@sohu.com",
  },
  {
    color: "#5905f7",
    avatar: "https://robohash.org/eosidnihil.png?size=50x50&set=set1",
    name: "Patty Mussared",
    university: "University of the East, Coloocan",
    sentences:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
    email: "pmussaredp8@cloudflare.com",
  },
  {
    color: "#6f43a0",
    avatar: "https://robohash.org/etundeearum.png?size=50x50&set=set1",
    name: "Homer Lutty",
    university: "Universidad Privada Boliviana",
    sentences:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    email: "hluttyp9@tinypic.com",
  },
  {
    color: "#5ad039",
    avatar: "https://robohash.org/nequeetex.png?size=50x50&set=set1",
    name: "Riannon Curnow",
    university: "Universitas Islam Sultan Agung",
    sentences:
      "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
    email: "rcurnowpa@mysql.com",
  },
  {
    color: "#c3e81f",
    avatar: "https://robohash.org/utconsequaturrerum.png?size=50x50&set=set1",
    name: "Townie Redler",
    university: "Leeds Metropolitan University",
    sentences:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    email: "tredlerpb@salon.com",
  },
  {
    color: "#042db6",
    avatar:
      "https://robohash.org/facererepudiandaequam.png?size=50x50&set=set1",
    name: "Jerri Odams",
    university: "Imam Sadiq University",
    sentences:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    email: "jodamspc@globo.com",
  },
  {
    color: "#61ae9f",
    avatar: "https://robohash.org/consecteturvelnon.png?size=50x50&set=set1",
    name: "Laetitia Berrington",
    university: "Kalinga University",
    sentences:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
    email: "lberringtonpd@amazon.co.jp",
  },
  {
    color: "#2f35d0",
    avatar:
      "https://robohash.org/velitaspernaturexcepturi.png?size=50x50&set=set1",
    name: "Eduard Blois",
    university: "Troy University, Dothan",
    sentences:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    email: "ebloispe@pbs.org",
  },
  {
    color: "#6e7284",
    avatar: "https://robohash.org/recusandaeautunde.png?size=50x50&set=set1",
    name: "Yoshiko Balmadier",
    university: "Sichuan University",
    sentences:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    email: "ybalmadierpf@photobucket.com",
  },
  {
    color: "#726405",
    avatar: "https://robohash.org/omnisearumhic.png?size=50x50&set=set1",
    name: "Bard Tamburi",
    university:
      "Philosophisch-Theologische Hochschule der Salesianer Don Boscos",
    sentences:
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    email: "btamburipg@surveymonkey.com",
  },
  {
    color: "#c46c00",
    avatar:
      "https://robohash.org/voluptatemquilaboriosam.png?size=50x50&set=set1",
    name: "Fleur Stroton",
    university: 'Free University "Maria Santissima Assunta"',
    sentences:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    email: "fstrotonph@msu.edu",
  },
  {
    color: "#645827",
    avatar: "https://robohash.org/sintrepudiandaeet.png?size=50x50&set=set1",
    name: "Helge Wigg",
    university: "New England School of Law",
    sentences:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    email: "hwiggpi@reddit.com",
  },
  {
    color: "#dbe19f",
    avatar: "https://robohash.org/ullamsuscipitfugiat.png?size=50x50&set=set1",
    name: "Vincents Ineson",
    university: "Quinnipiac College",
    sentences:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    email: "vinesonpj@naver.com",
  },
  {
    color: "#821e66",
    avatar: "https://robohash.org/inciduntquiharum.png?size=50x50&set=set1",
    name: "Ty Rubenchik",
    university: "Tshwane University of Technology",
    sentences:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    email: "trubenchikpk@scribd.com",
  },
  {
    color: "#3b5491",
    avatar: "https://robohash.org/totamquomaxime.png?size=50x50&set=set1",
    name: "Josias Leatherborrow",
    university: "Beijing Polytechnic University",
    sentences:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
    email: "jleatherborrowpl@twitpic.com",
  },
  {
    color: "#5b8af4",
    avatar: "https://robohash.org/rerumetaccusamus.png?size=50x50&set=set1",
    name: "Israel Orrick",
    university: "Odessa National I.I. Mecnikov University",
    sentences:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    email: "iorrickpm@tripadvisor.com",
  },
  {
    color: "#272cf4",
    avatar:
      "https://robohash.org/exercitationemettenetur.png?size=50x50&set=set1",
    name: "Andrey Aldwich",
    university: "Universidad Nacional de Guinea Ecuatorial",
    sentences:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    email: "aaldwichpn@chicagotribune.com",
  },
  {
    color: "#30620f",
    avatar: "https://robohash.org/ipsamquibusdamlibero.png?size=50x50&set=set1",
    name: "Regina Raw",
    university: "Pädagogische Hochschule Schwäbisch Gmünd",
    sentences:
      "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    email: "rrawpo@prnewswire.com",
  },
  {
    color: "#9d57f5",
    avatar: "https://robohash.org/veroetconsectetur.png?size=50x50&set=set1",
    name: "Vivianne Pellew",
    university: "Benguet State University",
    sentences:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    email: "vpellewpp@disqus.com",
  },
  {
    color: "#04a1e8",
    avatar: "https://robohash.org/etetea.png?size=50x50&set=set1",
    name: "Reed Syvret",
    university: "Jacksonville State University",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    email: "rsyvretpq@icio.us",
  },
  {
    color: "#71aa84",
    avatar: "https://robohash.org/omnisutitaque.png?size=50x50&set=set1",
    name: "Jim Boise",
    university: "Loughborough University",
    sentences:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
    email: "jboisepr@apache.org",
  },
  {
    color: "#8f6398",
    avatar: "https://robohash.org/animisaepeet.png?size=50x50&set=set1",
    name: "Priscilla McLenahan",
    university: "All Nations University College",
    sentences:
      "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
    email: "pmclenahanps@wiley.com",
  },
  {
    color: "#f5881e",
    avatar: "https://robohash.org/adipisciipsaut.png?size=50x50&set=set1",
    name: "Lynn Willson",
    university: "Antioch New England Graduate School",
    sentences:
      "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    email: "lwillsonpt@t.co",
  },
  {
    color: "#8c42d0",
    avatar: "https://robohash.org/autematsed.png?size=50x50&set=set1",
    name: "Shea Rice",
    university: "Thomas More College",
    sentences:
      "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    email: "sricepu@army.mil",
  },
  {
    color: "#059288",
    avatar:
      "https://robohash.org/repellatadipiscialiquid.png?size=50x50&set=set1",
    name: "Ellyn Hamblyn",
    university: "Illinois Wesleyan University",
    sentences:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    email: "ehamblynpv@disqus.com",
  },
  {
    color: "#ca3a83",
    avatar: "https://robohash.org/nullaveroquae.png?size=50x50&set=set1",
    name: "Leanor Drover",
    university: "Central China Normal University",
    sentences: "Integer non velit.",
    email: "ldroverpw@unicef.org",
  },
  {
    color: "#7c133e",
    avatar: "https://robohash.org/voluptatesquodet.png?size=50x50&set=set1",
    name: "Samson McCaskill",
    university: "Fudan University",
    sentences:
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    email: "smccaskillpx@un.org",
  },
  {
    color: "#8ee91f",
    avatar: "https://robohash.org/magnierrorsequi.png?size=50x50&set=set1",
    name: "Gianna Podd",
    university: "University of Health Sciences Antigua",
    sentences:
      "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    email: "gpoddpy@ehow.com",
  },
  {
    color: "#cd3388",
    avatar: "https://robohash.org/suntdolorestotam.png?size=50x50&set=set1",
    name: "Rudolph Drains",
    university: "St.Cyril and Methodius University",
    sentences:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    email: "rdrainspz@spotify.com",
  },
  {
    color: "#c5d3fe",
    avatar: "https://robohash.org/utautsit.png?size=50x50&set=set1",
    name: "Ty Tamburi",
    university: "Academia de Studii Economice din Bucuresti",
    sentences:
      "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
    email: "ttamburiq0@networksolutions.com",
  },
  {
    color: "#ad674c",
    avatar: "https://robohash.org/etnonet.png?size=50x50&set=set1",
    name: "Lexy Conor",
    university: "University of Benghazi",
    sentences:
      "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    email: "lconorq1@usatoday.com",
  },
  {
    color: "#14069a",
    avatar:
      "https://robohash.org/consequaturquisquamaccusamus.png?size=50x50&set=set1",
    name: "Vonni Cottesford",
    university: "Ural State Academy of Architecture and Arts",
    sentences:
      "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    email: "vcottesfordq2@wikimedia.org",
  },
  {
    color: "#19e8d9",
    avatar: "https://robohash.org/doloranimiiure.png?size=50x50&set=set1",
    name: "Urban Willis",
    university: "Instituto Politécnico do Cávado e do Ave",
    sentences:
      "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
    email: "uwillisq3@irs.gov",
  },
  {
    color: "#9530aa",
    avatar: "https://robohash.org/etnullacorrupti.png?size=50x50&set=set1",
    name: "Ramona Rickford",
    university: "Universidad Centro Occidental Lisandro Alvarado",
    sentences: "Nam dui.",
    email: "rrickfordq4@creativecommons.org",
  },
  {
    color: "#72c568",
    avatar: "https://robohash.org/blanditiisfugiatvero.png?size=50x50&set=set1",
    name: "Leese Pryell",
    university: "Kyoto University of Education",
    sentences:
      "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
    email: "lpryellq5@bandcamp.com",
  },
  {
    color: "#3fed2c",
    avatar: "https://robohash.org/sitconsequatureius.png?size=50x50&set=set1",
    name: "Nonie Odby",
    university: "Western Washington University",
    sentences:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    email: "nodbyq6@reddit.com",
  },
  {
    color: "#38995a",
    avatar: "https://robohash.org/quiaremquae.png?size=50x50&set=set1",
    name: "Danell Mitchard",
    university: "Kitami Institute of Technology",
    sentences:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    email: "dmitchardq7@myspace.com",
  },
  {
    color: "#35f5fd",
    avatar: "https://robohash.org/abnonquaerat.png?size=50x50&set=set1",
    name: "Robenia Lavies",
    university: "Ecole Nationale Supérieure du Pétrole et des Monteurs",
    sentences:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    email: "rlaviesq8@marriott.com",
  },
  {
    color: "#ea8bcf",
    avatar: "https://robohash.org/quoaperiamtotam.png?size=50x50&set=set1",
    name: "Shanon Fullerd",
    university: "College of Technology at Kharj",
    sentences:
      "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "sfullerdq9@aol.com",
  },
  {
    color: "#6f9d18",
    avatar: "https://robohash.org/ametmodifugit.png?size=50x50&set=set1",
    name: "Ignatius Recke",
    university: "Pontifcia Università Gregoriana",
    sentences:
      "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    email: "ireckeqa@illinois.edu",
  },
  {
    color: "#bfb91b",
    avatar:
      "https://robohash.org/laborumexcepturialiquam.png?size=50x50&set=set1",
    name: "Dale Dwyr",
    university: "American University in Bulgaria",
    sentences:
      "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    email: "ddwyrqb@behance.net",
  },
  {
    color: "#0bb2bd",
    avatar: "https://robohash.org/placeatrerumeligendi.png?size=50x50&set=set1",
    name: "Welby Strood",
    university: "University of Maryland University College",
    sentences:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    email: "wstroodqc@twitter.com",
  },
  {
    color: "#652f01",
    avatar: "https://robohash.org/ullamquodvero.png?size=50x50&set=set1",
    name: "Constanta Korba",
    university: "University of Nicosia",
    sentences:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    email: "ckorbaqd@bing.com",
  },
  {
    color: "#c0a7ff",
    avatar: "https://robohash.org/oditoccaecatiaut.png?size=50x50&set=set1",
    name: "Opaline Jonson",
    university:
      "Sarhad University of Science & Information Technology, Peshawar ",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    email: "ojonsonqe@blinklist.com",
  },
  {
    color: "#8649b3",
    avatar: "https://robohash.org/etevenietnihil.png?size=50x50&set=set1",
    name: "Charlie Stangroom",
    university: "Canadian College of Business & Computers",
    sentences:
      "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    email: "cstangroomqf@networkadvertising.org",
  },
  {
    color: "#3e9f75",
    avatar: "https://robohash.org/quiaidqui.png?size=50x50&set=set1",
    name: "Conant Vinson",
    university: "Moraine Valley Community College",
    sentences:
      "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    email: "cvinsonqg@yolasite.com",
  },
  {
    color: "#aa41f1",
    avatar:
      "https://robohash.org/molestiaeofficiisnihil.png?size=50x50&set=set1",
    name: "Susi Crowcher",
    university: "King Abdul Aziz University",
    sentences:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
    email: "scrowcherqh@cyberchimps.com",
  },
  {
    color: "#73051b",
    avatar: "https://robohash.org/adipiscivitaeaut.png?size=50x50&set=set1",
    name: "Dona MacDermand",
    university: "DePauw University",
    sentences:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    email: "dmacdermandqi@amazon.com",
  },
  {
    color: "#6fddc1",
    avatar: "https://robohash.org/etauttenetur.png?size=50x50&set=set1",
    name: "Caprice Toomey",
    university: "Moscow State University of Commerce",
    sentences:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
    email: "ctoomeyqj@tamu.edu",
  },
  {
    color: "#859e92",
    avatar:
      "https://robohash.org/recusandaesintpraesentium.png?size=50x50&set=set1",
    name: "Eleen Noblett",
    university: "Indian Statistical Institute",
    sentences:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    email: "enoblettqk@kickstarter.com",
  },
  {
    color: "#d889e7",
    avatar:
      "https://robohash.org/blanditiisnemodistinctio.png?size=50x50&set=set1",
    name: "Franky Endersby",
    university: "Dakota Wesleyan University",
    sentences:
      "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    email: "fendersbyql@webeden.co.uk",
  },
  {
    color: "#e04ce4",
    avatar: "https://robohash.org/dolorettotam.png?size=50x50&set=set1",
    name: "Mora Coxwell",
    university: "Politeknik Negeri Pontianak",
    sentences:
      "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    email: "mcoxwellqm@nydailynews.com",
  },
  {
    color: "#72f566",
    avatar: "https://robohash.org/remtemporefugiat.png?size=50x50&set=set1",
    name: "Gert Shemilt",
    university: "University of Pennsylvania",
    sentences:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
    email: "gshemiltqn@yolasite.com",
  },
  {
    color: "#36bf9a",
    avatar: "https://robohash.org/fuganumquamullam.png?size=50x50&set=set1",
    name: "Gabriellia Rupel",
    university: "Ohio University - Chillicothe",
    sentences:
      "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
    email: "grupelqo@hao123.com",
  },
  {
    color: "#da26b5",
    avatar: "https://robohash.org/necessitatibusautut.png?size=50x50&set=set1",
    name: "Candra Bothen",
    university: "Islamic Azad University, Maybod",
    sentences:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    email: "cbothenqp@ftc.gov",
  },
  {
    color: "#01d852",
    avatar: "https://robohash.org/etquidemnemo.png?size=50x50&set=set1",
    name: "Cheston Chenery",
    university: "Universidad Cristóbal Colón",
    sentences: "Suspendisse ornare consequat lectus.",
    email: "ccheneryqq@google.com.br",
  },
  {
    color: "#42e669",
    avatar: "https://robohash.org/utdictanatus.png?size=50x50&set=set1",
    name: "Inness Osment",
    university: "McNeese State University",
    sentences:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    email: "iosmentqr@delicious.com",
  },
  {
    color: "#3e89de",
    avatar:
      "https://robohash.org/veritatisvelitvoluptas.png?size=50x50&set=set1",
    name: "Crosby Rathbourne",
    university: "University of Health Sciences",
    sentences:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
    email: "crathbourneqs@japanpost.jp",
  },
  {
    color: "#5f608d",
    avatar:
      "https://robohash.org/nostrumvoluptatibusrepellat.png?size=50x50&set=set1",
    name: "Danica Legier",
    university: "Universitas Mahasaraswati Denpasar",
    sentences:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    email: "dlegierqt@naver.com",
  },
  {
    color: "#5a9d39",
    avatar:
      "https://robohash.org/etvoluptatibusofficiis.png?size=50x50&set=set1",
    name: "Holden La Padula",
    university: "Universidad Autónoma de Centro América",
    sentences:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
    email: "hlaqu@ifeng.com",
  },
  {
    color: "#b947f9",
    avatar:
      "https://robohash.org/pariaturveritatislabore.png?size=50x50&set=set1",
    name: "Lauretta Kleeborn",
    university: "Universitas 17 Agustus 1945 Semarang",
    sentences:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    email: "lkleebornqv@answers.com",
  },
  {
    color: "#8e2453",
    avatar: "https://robohash.org/modivoluptasodio.png?size=50x50&set=set1",
    name: "Oliy Obin",
    university: "College of Science, Baghdad University",
    sentences:
      "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    email: "oobinqw@eventbrite.com",
  },
  {
    color: "#8a0e02",
    avatar: "https://robohash.org/veritatisoccaecatiet.png?size=50x50&set=set1",
    name: "Zacharie Buddle",
    university: "Sadat Academy for Management Sciences",
    sentences:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
    email: "zbuddleqx@wikipedia.org",
  },
  {
    color: "#afe4e1",
    avatar: "https://robohash.org/undesitvoluptas.png?size=50x50&set=set1",
    name: "Hayley Latimer",
    university: "Sunrise University Alwar",
    sentences:
      "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
    email: "hlatimerqy@histats.com",
  },
  {
    color: "#b8efb9",
    avatar: "https://robohash.org/quisquiat.png?size=50x50&set=set1",
    name: "Charissa Durrance",
    university: "Indian Law Institue",
    sentences:
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    email: "cdurranceqz@nba.com",
  },
  {
    color: "#6f2651",
    avatar: "https://robohash.org/aperiamomnisut.png?size=50x50&set=set1",
    name: "Gerek Rumbold",
    university: "Multimedia University",
    sentences: "Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    email: "grumboldr0@eventbrite.com",
  },
  {
    color: "#dfe9ce",
    avatar: "https://robohash.org/quidemhicasperiores.png?size=50x50&set=set1",
    name: "Rene Patrickson",
    university: "Slovak Medical University",
    sentences: "Nulla tellus.",
    email: "rpatricksonr1@bigcartel.com",
  },
  {
    color: "#55900a",
    avatar: "https://robohash.org/estaperiamad.png?size=50x50&set=set1",
    name: "Traci Aizkovitch",
    university: "Instituto Tecnologico de Minatitlan",
    sentences:
      "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    email: "taizkovitchr2@reference.com",
  },
  {
    color: "#db8982",
    avatar:
      "https://robohash.org/quamreprehenderitbeatae.png?size=50x50&set=set1",
    name: "Carmon Tomasello",
    university: "Technical University of Poznan",
    sentences:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    email: "ctomasellor3@wsj.com",
  },
  {
    color: "#2244f8",
    avatar: "https://robohash.org/utsaepeenim.png?size=50x50&set=set1",
    name: "Amandi Pedri",
    university: "Universitat de Lleida",
    sentences:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    email: "apedrir4@imgur.com",
  },
  {
    color: "#da54c6",
    avatar:
      "https://robohash.org/accusantiumeaquesoluta.png?size=50x50&set=set1",
    name: "Allys Feast",
    university: "Ohio University - Lancaster",
    sentences:
      "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    email: "afeastr5@berkeley.edu",
  },
  {
    color: "#a06e78",
    avatar: "https://robohash.org/utmolestiaeut.png?size=50x50&set=set1",
    name: "Tiffie Rogeon",
    university: "Instituto Superior de Ciências Empresariais e de Turismo",
    sentences:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
    email: "trogeonr6@harvard.edu",
  },
  {
    color: "#c29cc8",
    avatar: "https://robohash.org/suscipitminusrerum.png?size=50x50&set=set1",
    name: "Dal Bernadot",
    university: "Universiti Malaysia Sabah",
    sentences:
      "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    email: "dbernadotr7@php.net",
  },
  {
    color: "#eafd54",
    avatar:
      "https://robohash.org/perspiciatisoptioasperiores.png?size=50x50&set=set1",
    name: "Waiter Bogey",
    university:
      "Ecole Nationale de la Statistique et de l'Administration Economique",
    sentences:
      "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    email: "wbogeyr8@spiegel.de",
  },
  {
    color: "#2cc41e",
    avatar:
      "https://robohash.org/earumitaquerepellendus.png?size=50x50&set=set1",
    name: "Osbourne Howroyd",
    university: "University of Andorra",
    sentences:
      "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    email: "ohowroydr9@businessinsider.com",
  },
  {
    color: "#a81825",
    avatar:
      "https://robohash.org/harumiustoconsequatur.png?size=50x50&set=set1",
    name: "Sauncho Syer",
    university: "Henderson State Univerisity",
    sentences:
      "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    email: "ssyerra@utexas.edu",
  },
  {
    color: "#622d3c",
    avatar: "https://robohash.org/sunteligendisit.png?size=50x50&set=set1",
    name: "Mendel Sember",
    university: "Kiev Slavonic University",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    email: "msemberrb@about.me",
  },
  {
    color: "#0e41f3",
    avatar: "https://robohash.org/eumquiomnis.png?size=50x50&set=set1",
    name: "Davey Ryland",
    university: "Build Bright University",
    sentences: "Aenean sit amet justo. Morbi ut odio.",
    email: "drylandrc@sourceforge.net",
  },
  {
    color: "#468571",
    avatar: "https://robohash.org/earumdelenitiducimus.png?size=50x50&set=set1",
    name: "Kathrine Blakden",
    university: "Hamdan Bin Mohammed e-University",
    sentences:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    email: "kblakdenrd@desdev.cn",
  },
  {
    color: "#ac870f",
    avatar: "https://robohash.org/excepturiquodsint.png?size=50x50&set=set1",
    name: "Chloe Huebner",
    university: "University of Fort Hare",
    sentences:
      "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
    email: "chuebnerre@icio.us",
  },
  {
    color: "#8ebb45",
    avatar: "https://robohash.org/magniquidemet.png?size=50x50&set=set1",
    name: "Isabella Chue",
    university: "Georgetown College",
    sentences:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    email: "ichuerf@squarespace.com",
  },
  {
    color: "#56b358",
    avatar:
      "https://robohash.org/utexplicaborepudiandae.png?size=50x50&set=set1",
    name: "Leigha Callaby",
    university: "Universidad Antonio de Nebrija",
    sentences:
      "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    email: "lcallabyrg@soup.io",
  },
  {
    color: "#1dd323",
    avatar: "https://robohash.org/doloribusquidemharum.png?size=50x50&set=set1",
    name: "Bekki Sedgefield",
    university: "Universidade Autónoma de Lisboa Luís de Camoes",
    sentences: "Nam tristique tortor eu pede.",
    email: "bsedgefieldrh@cafepress.com",
  },
  {
    color: "#3178cb",
    avatar: "https://robohash.org/uteaqueaccusantium.png?size=50x50&set=set1",
    name: "Milli Bryan",
    university: "Himeji Dokkyo University",
    sentences:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    email: "mbryanri@histats.com",
  },
  {
    color: "#b57e07",
    avatar: "https://robohash.org/quiscorporiset.png?size=50x50&set=set1",
    name: "Denyse Daoust",
    university: "Universidad de Castilla La Mancha",
    sentences: "Aenean auctor gravida sem.",
    email: "ddaoustrj@clickbank.net",
  },
  {
    color: "#a7d341",
    avatar: "https://robohash.org/ettemporevoluptatem.png?size=50x50&set=set1",
    name: "Alexio Stubley",
    university: "Universidad del Noroeste",
    sentences:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    email: "astubleyrk@huffingtonpost.com",
  },
  {
    color: "#d74cd3",
    avatar: "https://robohash.org/eaqueculpanemo.png?size=50x50&set=set1",
    name: "Irwin Gentric",
    university: "NHL University of Applied Sciences",
    sentences: "Nunc rhoncus dui vel sem.",
    email: "igentricrl@cornell.edu",
  },
  {
    color: "#25b2a2",
    avatar: "https://robohash.org/voluptatemutut.png?size=50x50&set=set1",
    name: "Ianthe Dadge",
    university: "Oregon Health Sciences University",
    sentences: "Nulla ac enim.",
    email: "idadgerm@yellowpages.com",
  },
  {
    color: "#c0d523",
    avatar:
      "https://robohash.org/reprehenderitfugitillum.png?size=50x50&set=set1",
    name: "Enrico Brede",
    university: "Thomas A. Edison State College",
    sentences:
      "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    email: "ebredern@ox.ac.uk",
  },
  {
    color: "#9ef93a",
    avatar: "https://robohash.org/excepturiullamut.png?size=50x50&set=set1",
    name: "Archer Fairbank",
    university: "North Central College",
    sentences:
      "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    email: "afairbankro@purevolume.com",
  },
  {
    color: "#34e9d4",
    avatar:
      "https://robohash.org/voluptatempariaturquod.png?size=50x50&set=set1",
    name: "Moyra Powley",
    university: "Abdus Salam international centre for theoretical physics",
    sentences:
      "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    email: "mpowleyrp@tumblr.com",
  },
  {
    color: "#411731",
    avatar: "https://robohash.org/rerumeacumque.png?size=50x50&set=set1",
    name: "Jake McGarrahan",
    university: "Western Governors University",
    sentences:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    email: "jmcgarrahanrq@nationalgeographic.com",
  },
  {
    color: "#8d57a6",
    avatar: "https://robohash.org/minimaeumnihil.png?size=50x50&set=set1",
    name: "Gerda Troy",
    university: "University of Lausanne",
    sentences:
      "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    email: "gtroyrr@bbb.org",
  },
];

const newSection = document.createElement("section");
newSection.style.display = "grid";
newSection.style.gridTemplateColumns = `repeat(4, 1fr)`;
document.body.appendChild(newSection);

data.forEach((v) => {
  const newArticle = document.createElement("article");
  newArticle.style.width = "200px";
  newArticle.style.height = "400px";
  newArticle.style.display = "flex";
  newArticle.style.flexDirection = "column";
  newArticle.style.justifyContent = "center";
  newArticle.style.alignItems = "center";
  newArticle.style.padding = "100px";
  newArticle.style.border = "1px solid black";
  newArticle.style.borderRadius = "10px";

  newSection.appendChild(newArticle);

  const newAvatar = document.createElement("img");
  newAvatar.src = v.avatar;
  newAvatar.style.width = "100px";
  newAvatar.style.height = "100px";
  newAvatar.style.border = `1px solid ${v.color}`;
  newAvatar.style.borderRadius = "50%";
  newArticle.appendChild(newAvatar);

  const newH3 = document.createElement("h3");
  newH3.innerText = v.name;
  newArticle.appendChild(newH3);

  const newSpan = document.createElement("span");
  newSpan.innerText = v.university;
  newArticle.appendChild(newSpan);

  const newP = document.createElement("p");
  newP.innerText = v.sentences;
  newP.style.fontSize = "10px";
  newArticle.appendChild(newP);

  const newEmail = document.createElement("button");
  newEmail.innerText = v.email;
  newEmail.style.padding = "10px";
  newEmail.style.backgroundColor = v.color;
  newArticle.appendChild(newEmail);
});
