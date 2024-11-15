const markersData = [
    /* 1 */
    {
        position: [53.85957716667719, 23.000246064261233],
        name: "BiaVita Polska S.A. Sanatorium Uzdrowiskowe Augustów",
        address: "Zdrojowa 3/5/7, 16-300 Augustów",
        phoneNumber: "87 643 28 71",
        link: "https://www.sanatorium.augustow.pl",
        image: "https://u.profitroom.pl/2018.sanatorium.augustow.pl/thumb/0x900/uploads/otoczenie/sanatorium_augustow_060.jpg",
        rating: 4.4
    },
    /* 2 */
    {
        position: [50.456561731384205, 20.721750649368953],
        name: "Uzdrowisko Busko-Zdrój S.A.",
        address: "Generała Feliksa Rzewuskiego 1, 28-100 Busko-Zdrój",
        phoneNumber: "41 370 32 00",
        link: "https://ubz.pl/pl",
        image: "https://ubz.pl/images/baner_strona_glowna/baner_4.jpg",
        rating: 4.3
    },
    /* 3 */
    {
        position: [52.881595912784405, 18.80069812459791],
        name: "Uzdrowisko Ciechocinek S.A.",
        address: "Tadeusza Kościuszki 10, 87-720 Ciechocinek",
        phoneNumber: "54 283 60 78",
        link: "https://www.uzdrowiskociechocinek.pl",
        image: "https://lh5.googleusercontent.com/p/AF1QipNeq0U_iCZADnbhMlVACysYY0FQD1ia8gNp9RLi=w408-h273-k-no",
        rating: 3.7
    },
    /* 4 */
    {
        position: [54.380792668707656, 16.31637692768549],
        name: "Dukat Medical SPA , Dąbki",
        address: "Wydmowa 9, 76-156 Dąbki",
        phoneNumber: "515 082 570",
        link: "https://uzdrowisko-dabki.info",
        image: "https://uzdrowisko-dabki.info/images/slider/slide-3.jpg",
        rating: 4.4
    },
    /* 5 */
    {
        position: [50.34547222025627, 16.888386934830336],
        name: "Uzdrowisko Lądek-Długopole S.A.",
        address: "Wolności 4, 57-540 Lądek-Zdrój",
        phoneNumber: "+48 74 811 54 74",
        link: "https://uzdrowisko-ladek.pl",
        image: "https://thumbs.hotelsystems.pl/uzdrwojciech/_thumb/1920x1080x85/banery/Galeria-www/zdrwojciech.jpg",
        rating: 4.4
    },
    /* 6 */
    {
        position: [50.404374357396094, 16.391036792983527],
        name: "Uzdrowisko Duszniki-Zdrój S.A.",
        address: "Zdrojowa 40, 57-340 Duszniki-Zdrój",
        phoneNumber: "(74) 86 80 217",
        link: "https://uzdrowiska-klodzkie.pl/uzdrowisko-duszniki-zdroj",
        image: "https://uzdrowiska-klodzkie.pl/img/files/06_%20Panorama%20Duszniki.jpg",
        rating: 4.4
    },
    /* 7 */
    {
        position: [49.937955371473215, 18.980860310025204],
        name: "Uzdrowisko Goczałkowice Zdrój S.A.",
        address: "Uzdrowiskowa 57, 43-230 Goczałkowice-Zdrój",
        phoneNumber: "32 449 20 20",
        link: "https://gozdroj.pl/",
        image: "https://i.domyseniora.pl/d9/11/36-gocza-kowice-zdr-j-uzdrowisko-gocza-kowice-zdr-j.jpg",
        rating: 4.1
    },
    /* 8 */
    {
        position: [54.33447200872696, 22.32225762814907],
        name: "Uzdrowisko Gołdap S.A.",
        address: "Wczasowa 7, 19-500 Gołdap",
        phoneNumber: "87 615 41 92",
        link: "https://uzdrowiskogoldap.pl",
        image: "https://lh5.googleusercontent.com/p/AF1QipP4OiV3OB7M3qN9K9Ld5JepTCzW5ZvaGykfGq65=w408-h306-k-no",
        rating: 3.8
    },
    /* 9 */
    {
        position: [50.19862556036759, 23.355717548132823],
        name: "Uzdrowisko Gołdap S.A.",
        address: "Sanatoryjna 3, 37-620 Horyniec-Zdrój",
        phoneNumber: "16 631 30 88",
        link: "https://uzdrowisko-horyniec.com.pl/",
        image: "https://lh5.googleusercontent.com/p/AF1QipP9YuppiLvvpeD0kt986c2ECmWWxSiF-c3sXw79=w408-h255-k-no",
        rating: 4.3
    },
    /* 10 */
    {
        position: [52.794673384579546, 18.245610105964033],
        name: "Uzdrowisko Inowrocław S.A.",
        address: "DW251, 88-100 Inowrocław",
        phoneNumber: "52 356 33 20",
        link: "https://www.solanki.pl",
        image: "https://lh5.googleusercontent.com/p/AF1QipP41eJmeyYV8kR4MwbljN93c78dAOTxBTI5qNfe=w426-h240-k-no",
        rating: 5.0
    },
    /* 11 */
    {
        position: [49.56155877046067, 21.78935002032433],
        name: "Uzdrowisko Iwonicz S.A.",
        address: "Aleja Teodora Torosiewicza 2, 38-440 Iwonicz-Zdrój",
        phoneNumber: "13 430 87 80",
        link: "https://uzdrowisko-iwonicz.com.pl/",
        image: "https://lh5.googleusercontent.com/p/AF1QipM9upbuueGUFfX7wM2JZCDbWwfXqED9PaYWXKHw=w408-h270-k-no",
        rating: 4.3
    },
    /* 12 */
    {
        position: [50.86796510848201, 15.681776062410512],
        name: "Uzdrowisko Cieplice (Stoczniowiec) S.A.",
        address: "Jagiellońska 2, 58-500 Jelenia Góra",
        phoneNumber: "75 755 10 54",
        link: "https://uzdrowisko-cieplice.pl/",
        image: "https://lh5.googleusercontent.com/p/AF1QipMDz2pSx55B5YaEIHNWF2qqcbZDEI_BzQ5V01Z6=w408-h315-k-no",
        rating: 4.3
    },
    /* 13 */
    {
        position: [53.97029640615874, 14.775247046746163],
        name: "Uzdrowisko Kamień Pomorski S.A.",
        address: "Szpitalna 14, 72-400 Kamień Pomorski",
        phoneNumber: "91 382 11 49",
        link: "https://uzdrowisko-kamienpomorski.pl",
        image: "https://lh5.googleusercontent.com/p/AF1QipM9MNlVy3v_Y6gzR9xCo8HVjMRDjIb3pL8X04vG=w426-h240-k-no",
        rating: 4.0
    },
    /* 14 */
    {
        position: [54.183072585321625, 15.572335220077823],
        name: "Uzdrowisko Kołobrzeg S.A.",
        address: "Ściegiennego 1, 78-100 Kołobrzeg",
        phoneNumber: "94 354 88 25",
        link: "https://uzdrowisko.kolobrzeg.pl/",
        image: "https://lh5.googleusercontent.com/p/AF1QipP1IbfGMUfeTlC4ZOgEjGe43kC_MndsopN7ir9O=w408-h306-k-no",
        rating: 4.2
    },
    /* 15 */
    {
        position: [52.0699826168831, 21.122462785021764],
        name: "Uzdrowisko Konstancin Zdrój S.A.",
        address: "Sue Ryder 1, 05-510 Konstancin-Jeziorna",
        phoneNumber: "22 484 28 63",
        link: "https://uzdrowisko-konstancin.pl/",
        image: "https://lh5.googleusercontent.com/p/AF1QipPxvxBlFEJpkwaJvicj2KOuz3NWxFnIFIONqnOy=w408-h272-k-no",
        rating: 3.1
    },
    /* 16 */
    {
        position: [49.99197691692691, 19.93460027008523],
        name: "Spas Krakow Swoszowice",
        address: "Kąpielowa 70, 30-698 Kraków",
        phoneNumber: "12 254 78 46",
        link: "https://uzdrowisko.krakow.pl/",
        image: "https://lh5.googleusercontent.com/p/AF1QipPaj0eKyEszcCof2EEl7-EnwWSlgTXtLLH9E3XT=w408-h273-k-no",
        rating: 4.0
    },
    /* 17 */
    {
        position: [50.55024839687155, 23.197467737046804],
        name: "Samodzielne Publiczne Sanatorium Rehabilitacyjne im. J. Korczaka. Rehabilitacja",
        address: "Sanatoryjna 1, 22-440 Krasnobród",
        phoneNumber: "84 660 71 02",
        link: "https://sanatorium-krasnobrod.pl/",
        image: "https://lh5.googleusercontent.com/p/AF1QipPYKh6XJJZQgR2sj9utGX3OAXG1Vn_EZbDZ1Tqw=w408-h306-k-no",
        rating: 3.6
    },
    /* 18 */
    {
        position: [49.41858892134801, 20.958491221635285],
        name: "New Spa House S.A.",
        address: "aleja Nowotarskiego 7, 33-380 Krynica-Zdrój",
        phoneNumber: "18 471 55 22",
        link: "https://uzdrowisko-krynica-zegiestow.pl/",
        image: "https://lh5.googleusercontent.com/p/AF1QipNr6jnbhSNuHgs56SYX38y3XFKaJVRHRtZ3w1qx=w408-h271-k-no",
        rating: 3.8
    },
    /* 19 */
    {
        position: [50.44278065719261, 16.246052181219795],
        name: "Sanatorium Polonia Kudowa-Zdrój",
        address: "Stanisława Moniuszki 2, 57-350 Kudowa-Zdrój",
        phoneNumber: "74 868 04 00",
        link: "https://uzdrowiska-klodzkie.pl/uzdrowisko-kudowa-zdroj",
        image: "https://lh5.googleusercontent.com/p/AF1QipPNt03HKoxhLqWmnc0gSHaS03Esr-8ZKT1u4Stv=w408-h306-k-no",
        rating: 3.8
    },
    /* 20 */
    {
        position: [50.41630058178405, 17.03055397764753],
        name: "Uzdrowisko Lądek - Zdrój S.A.",
        address: "plac Mariański 13, 57-540 Lądek-Zdrój",
        phoneNumber: "74 811 54 74",
        link: "https://uzdrowisko-ladek.pl/",
        image: "https://lh5.googleusercontent.com/p/AF1QipOqI_0JdVYMk93lGiSwu5t9jVXdp00H4jtjYiX5=w408-h306-k-no",
        rating: 4.5
    },
    /* 21 */
    {
        position: [49.34937247785556, 20.88908461184122],
        name: "Uzdrowisko Muszyna nad Popradem S.A.",
        address: "plac Mariański 13, 57-540 Lądek-Zdrój",
        phoneNumber: "18 471 42 05",
        link: "https://muszyna.pl/pl/1918/14/instytut-zdrowia-czlowieka-uzdrowisko-muszyna-nad-popradem.html",
        image: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=n8TV5wB3tc9tWIyLex3I3w&cb_client=search.gws-prod.gps&w=408&h=240&yaw=255.00168&pitch=0&thumbfov=100",
        rating: 5.0
    },
    /* 22 */
    {
        position: [51.28885925714562, 22.205786842645477],
        name: "Uzdrowisko Nałęczów S.A.",
        address: "Ignacego Paderewskiego 1, 24-140 Nałęczów",
        phoneNumber: "81 501 44 56",
        link: "https://uzdrowisko-naleczow.pl/",
        image: "https://lh5.googleusercontent.com/p/AF1QipPg5M91OTrfIuRfY8nvxC6OuWspIZoSfU2Rx-Ty=w408-h246-k-no",
        rating: 4.3
    },
    /* 23 */
    {
        position: [49.43391004778768, 20.712777556025657],
        name: "Sanatorium Uzdrowiskowe „Limba”",
        address: "Krynicka 3, 33-350 Piwniczna-Zdrój",
        phoneNumber: "18 446 42 23",
        link: "http://www.sanatoriumlimba.pl/",
        image: "https://lh5.googleusercontent.com/p/AF1QipOPVKkvkFr0VH8mNu78QnNE-eNEcIqep8RiEBgD=w408-h271-k-no",
        rating: 4.1
    },
    /* 24 */
    {
        position: [50.409520495773265, 16.512069200263717],
        name: "Sanatorium Wielka Pieniawa Polanica-Zdrój",
        address: "Parkowa 4, 57-320 Polanica-Zdrój",
        phoneNumber: "74 868 02 17",
        link: "https://uzdrowiska-klodzkie.pl/uzdrowisko-polanica-zdroj",
        image: "https://lh5.googleusercontent.com/p/AF1QipODagn8ieaMXZR4nMjJ8EWCsk-3WIhxXxFLhFEr=w408-h314-k-no",
        rating: 4.3
    },
    /* 25 */
    {
        position: [49.37312487356446, 22.43461912903735],
        name: "Dedal Sanatorium Uzdrowiskowe",
        address: "Zdrojowa 23, 38-610 Polańczyk",
        phoneNumber: "13 469 20 08",
        link: "https://www.sanatoria.com.pl/facility/sanatorium-uzdrowiskowe-dedal-polanczyk",
        image: "https://lh5.googleusercontent.com/p/AF1QipMcxbE0ktKnmkdvic5PQ2CNGQDrP9JLVLerqdbT=w408-h306-k-no",
        rating: 4.3
    },
    /* 26 */
    {
        position: [53.75854088518167, 16.091620637245608],
        name: "Uzdrowisko Połczyn - Zdrój , S. Gryf",
        address: "Solankowa 8, 78-320 Połczyn-Zdrój",
        phoneNumber: "94 366 20 19",
        link: "https://uzdrowisko-polczyn.pl/",
        image: "https://lh5.googleusercontent.com/p/AF1QipMwUdcsADu_7x9Wt3cQjzgKc7khW-cidb-ShAtH=w408-h408-k-no",
        rating: 4.2
    },
    /* 27 */
    {
        position: [49.60812887221142, 19.96718314439488],
        name: "Uzdrowisko-Rabka S.A.",
        address: "Orkana 49, 34-700 Rabka-Zdrój",
        phoneNumber: "18 267 60 20",
        link: "http://uzdrowisko-rabka.pl/obiekty.html",
        image: "https://lh5.googleusercontent.com/p/AF1QipP_oqWM26rgB91EgO2XAH4xqWRLzKRQ5CjnUDL5=w610-h240-k-no",
        rating: 3.9
    },
    /* 28 */
    {
        position: [49.52917028116541, 21.828711342539016],
        name: "Uzdrowisko Rymanów Zdrój",
        address: "DW887, 38-481",
        phoneNumber: "13 43 57 461",
        link: "https://uzdrowisko-rymanow.com.pl/",
        image: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=Fy7WaJsgKlL-QdGIADXs1w&cb_client=search.gws-prod.gps&w=408&h=240&yaw=332.6164&pitch=0&thumbfov=100",
        rating: 5.0
    },
    /* 29 */
    {
        position: [50.36716505060831, 20.887091991005136],
        name: "Uzdrowisko Solec-Zdrój",
        address: "1 Maja 1, 28-131 Solec-Zdrój",
        phoneNumber: "41 377 60 61",
        link: "https://www.uzdrowiskosolec.pl/",
        image: "https://lh5.googleusercontent.com/p/AF1QipOk_1xpmU9m8MPMs9xtF9vtrYihIze3ptOtGQ6N=w408-h544-k-no",
        rating: 4.3
    },
    /* 30 */
    {
        position: [54.448991356733025, 18.52485477039774],
        name: "Sanatorium Uzdrowiskowe „Leśnik”",
        address: "23 Marca 105, 81-820 Sopot",
        phoneNumber: "58 551 72 63",
        link: "https://www.lesnik.sanatoria.com.pl/",
        image: "https://lh5.googleusercontent.com/p/AF1QipMcELzOXzbhIjDVGriBRKBH7Ufg0hj6f4C9nb8a=w408-h724-k-no",
        rating: 3.6
    },
    /* 31 */
    {
        position: [53.2209323802191, 23.328342937904146],
        name: "Holmed Uzdrowisko - Rehabilitacja Uzdrowiskowa",
        address: "Uroczysko Pustelnia 1, 16-030 Supraśl",
        phoneNumber: "85 722 21 22",
        link: "https://www.holmeduzdrowisko.pl/",
        image: "https://lh5.googleusercontent.com/p/AF1QipOKmdI7i0GUMkrHsi8Fiil50zE5975CX5mQwhDe=w408-h271-k-no",
        rating: 4.2
    },
    /* 32 */
    {
        position: [49.42775782582063, 20.48685234540431],
        name: "Uzdrowisko Szczawnica S.A.",
        address: "Zdrojowa 26, 34-460 Szczawnica",
        phoneNumber: "18 540 04 20",
        link: "http://www.uzdrowiskoszczawnica.pl/pl/",
        image: "https://lh5.googleusercontent.com/p/AF1QipNs_44vXCigbgX8lZM9CowSJa_QnhIuceMxbfnb=w408-h272-k-no",
        rating: 4.4
    },
    /* 33 */
    {
        position: [50.80419731938347, 16.253719996585193],
        name: "Dom Zdrojowy Uzdrowisko Szczawno-Jedlina S.A.",
        address: "Kolejowa 14, 58-310 Szczawno-Zdrój",
        phoneNumber: "74 849 31 30",
        link: "https://szczawno-jedlina.pl/",
        image: "https://lh5.googleusercontent.com/p/AF1QipM0mzkvVNJcs2e8oe3dtOfwFRTOGOC5JanvJEf1=w445-h240-k-no",
        rating: 3.9
    },
    /* 34 */
    {
        position: [50.9063488851144, 15.334865913786198],
        name: "Dom Zdrojowy - Uzdrowisko Świeradów Zdrój",
        address: "3-go Maja 1, 59-850 Świeradów-Zdrój",
        phoneNumber: "75 782 05 00",
        link: "https://uzdrowisko-swieradow.pl",
        image: "https://lh5.googleusercontent.com/p/AF1QipOCrc8fdpw37huOlYA_p_HAini8kQIg6XsNcAhC=w408-h271-k-no",
        rating: 4.2
    },
    /* 35 */
    {
        position: [53.918793054898806, 14.248768588840118],
        name: "'Uzdrowisko Świnoujście' S.A Szpital Uzdrowiskowy Bałtyk",
        address: "Juliusza Słowackiego 23, 72-600 Świnoujście",
        phoneNumber: "91 321 23 11",
        link: "https://www.uzdrowisko.pl/",
        image: "https://lh5.googleusercontent.com/p/AF1QipN4uEtZ0MGp43i0LjIzmN10_Wwc10ZK_8sjnJrz=w408-h306-k-no",
        rating: 3.3
    },
    /* 36 */
    {
        position: [50.80269883539663, 16.2577722333597],
        name: "Uzdrowisko Szczawno - Jedlina S.A.",
        address: "Ignacego Potockiego 4, 58-310 Szczawno-Zdrój",
        phoneNumber: "74 849 31 35",
        link: "https://szczawno-jedlina.pl",
        image: "https://lh5.googleusercontent.com/p/AF1QipNiDno7IaJ55QpJ6IARHrVaxcgS8ft4NOEppfuB=w408-h306-k-no",
        rating: 4.5
    },
    /* 37 */
    {
        position: [50.01990976762307, 21.370865301557576],
        name: "Uzdrowisko Latoszyn",
        address: "Latoszyn 139A, 39-200 Latoszyn",
        phoneNumber: "14 627 92 80",
        link: "https://latoszynzdroj.com/",
        image: "https://lh5.googleusercontent.com/p/AF1QipPOwQnTHpihTRvHXfyK0eFgKkUF2Mik9b7pZeBT=w427-h240-k-no",
        rating: 4.6
    },
    /* 38 */
    {
        position: [51.97363180099614, 18.783716113851657],
        name: "Uzdrowisko Uniejow Park",
        address: "Zamkowa 7, 99-210 Uniejów",
        phoneNumber: "63 288 89 59",
        link: "http://www.izc.pl/uniejow.html",
        image: "https://lh5.googleusercontent.com/p/AF1QipM6RT4yrFuEzfL5sGAT-K-xuqTDgSriuiHBekZg=w408-h306-k-no",
        rating: 4.2
    },
    /* 39 */
    {
        position: [54.11456860004405, 20.581464116507945],
        name: "Uzdrowisko Lidzbark Warmiński",
        address: "11-100 Lidzbark Warmiński",
        phoneNumber: "89 767 85 00",
        link: "http://uzdrowiskolidzbarkwarminski.pl/",
        image: "https://lh5.googleusercontent.com/p/AF1QipMI1FOCHNfsqdoGOfoy6lcaawR2p160pCP16b6Z=w408-h306-k-no",
        rating: 4.7
    },
    /* 40 */
    {
        position: [54.584370342226094, 16.869590012618858],
        name: "Hotel Grand Lubicz - Uzdrowisko Ustka",
        address: "Wczasowa 4, 76-270 Ustka",
        phoneNumber: "59 841 82 00",
        link: "http://www.uzdrowisko-ustka.com.pl/",
        image: "https://lh5.googleusercontent.com/p/AF1QipM4eL8C6t7R7ObN6Dpcid7zjJvnZQ4FS_5c_x5s=w425-h240-k-no",
        rating: 4.7
    },
    /* 41 */
    {
        position: [49.7213854327442, 18.82574066768394],
        name: "Hospital and Sanatorium Równica",
        address: "Sanatoryjna 1, 43-450 Ustroń",
        phoneNumber: "33 854 54 54",
        link: "https://www.uzdrowisko-ustron.pl/",
        image: "https://lh5.googleusercontent.com/p/AF1QipNkNdJt3eGDowAknYEPmnFumflaj2au3Unfs_ri=w426-h240-k-no",
        rating: 3.8
    },
    /* 42 */
    {
        position: [49.62611086957322, 21.28493517191453],
        name: "OŚRODEK WCZASOWO-LECZNICZY W WAPIENNEM",
        address: "Wapienne 45, 38-307 Wapienne",
        phoneNumber: "18 351 81 63",
        link: "https://wapienne.pl/",
        image: "https://lh5.googleusercontent.com/p/AF1QipPk_F8ZCz30EjsuTwMf11Nuq-B8i0GGOdEc71It=w408-h261-k-no",
        rating: 4.5
    },
    /* 43 */
    {
        position: [52.65719599575784, 18.99000188320712],
        name: "Uzdrowisko Wieniec-Zdrój",
        address: "Brzozowa 1, 87-880 Wieniec-Zdrój",
        phoneNumber: "54 272 10 00",
        link: "https://uzdrowisko-wieniec.pl/",
        image: "https://lh5.googleusercontent.com/p/AF1QipNrL2k8MuzFP09go0fUAOKxoQ7jUVgVXUwwMD3j=w408-h550-k-no",
        rating: 4.2
    },
    /* 44 */
    {
        position: [49.44403691142454, 21.184096709995632],
        name: "Uzdrowisko Wysowa S.A.",
        address: "Wysowa-Zdrój 149, 38-316 Wysowa-Zdrój",
        phoneNumber: "18 353 20 01",
        link: "https://www.uzdrowisko-wysowa.pl/",
        image: "https://lh5.googleusercontent.com/p/AF1QipNvxcQX-jwiaEHvjCFgc1maU35cWBH0wfyIzxJ-=w408-h271-k-no",
        rating: 4.7
    },
    /* 45 */
    {
        position: [49.35238853117129, 20.80677672179728],
        name: "Uzdrowisko Żegiestów - Zdrój, Sanatorium VICTOR S.A.",
        address: "Żegiestów 24, 33-370",
        phoneNumber: "18 471 72 68",
        link: "https://www.uzdrowiskozegiestow.pl/",
        image: "https://lh5.googleusercontent.com/p/AF1QipP5IbZyjmq5zOqu7X_RtkD6YwrMl8Pdvck1-ci_=w408-h272-k-no",
        rating: 4.4
    },
    /* 46 */
    {
        position: [50.86701815344119, 15.680057372436597],
        name: "Uzdrowisko Cieplice (Stoczniowiec) S.A.",
        address: "Jagiellońska 2, 58-500 Jelenia Góra",
        phoneNumber: "75 755 10 54",
        link: "https://uzdrowisko-cieplice.pl/",
        image: "https://lh5.googleusercontent.com/p/AF1QipMDz2pSx55B5YaEIHNWF2qqcbZDEI_BzQ5V01Z6=w408-h315-k-no",
        rating: 4.3
    },
    /* 47 */
    {
        position: [50.685854351463014, 16.830616269593335],
        name: "Uzdrowisko Przerzeczyn-Zdrój",
        address: "Zdrojowa 32, 58-231 Przerzeczyn-Zdrój",
        phoneNumber: "74 837 50 50",
        link: "https://sanatoria.medme.pl/uzdrowisko/przerzeczyn-zdroj-sanatorium-przewodnik-po-uzdrowiskach",
        image: "https://lh5.googleusercontent.com/p/AF1QipNEjwFebp2-W5fQ0omSHxIkUrI2_g5doqcWYnVF=w408-h544-k-no",
        rating: 3.3
    },


];

export default markersData;