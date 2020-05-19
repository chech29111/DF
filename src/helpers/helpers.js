import {
    BASE_URL, DEFECTIVE_LISTS_GUID, WORKS_LIST_GUID, ORGUNITS_LIST_GUID, WORK_CONDITIONS_LIST_GUID,
} from '../consts';

// eslint-disable-next-line
//export const getItemID = () => GetUrlKeyValue('ID');
// eslint-disable-next-line
export const getItemID = () => (window.location.href.indexOf('localhost') !== -1 ? 4 : GetUrlKeyValue('ID'));


/**
 * @description Группирует работы по разделу, так как нельзя сгруппировать их сразу во время запроса
 * @author Vadim Gorbenko <gorbenkovv@nipigas.ru>
 * @param {JSON} data - ответ от шарика с ключём d и массивом results внутри.
 * @returns {Object}
 */
const _offlineSavedItem = {
        "updivisions": [{
            "id": 3,
            "title": "Внутренняя отделка помещений",
            "divisions": [
                {"id": 2,
                    "title": "Отопление",
                    "works": [
                        {"id": "2",
                            "title": "Отопление",
                            "count":"888",
                            "fldMTP":"offline",
                            "fldNote": "offline Item"}]}]
        }, {
            "id": 1,
            "title": "Кровельные работы",
            "divisions": [
                {"id": 4,
                    "title": "Погрузка и вывоз мусора",
                    "works": [
                        {"id": "10",
                            "title": "Мусорная работа",
                            "fldMTP":"offline",
                            "fldNote":"offline Item",
                            "count":"999"}]
            }]
        }]
    };
/*
const objDivisions = {
    "divisions": [{
        "id": 2,
        "title": "Отопление",
        "works": [{"id": "2", "title": "Отопление"}]
    }, {"id": 4, "title": "Погрузка и вывоз мусора", "works": [{"id": "10", "title": "Мусорная работа"}]}]
    };
*/
const _offlineAllWorks = {
    "d": {
        "results": [
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(1)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(1)",
                    "etag": 4,
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "c676ea75-966e-4973-bac6-ac96cc97086c",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "ad84822c-6b5b-424c-8db6-536f600fe683",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Демонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "38d8306c-2b8d-4778-8d6d-7581459ec4b8",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 1,
                "Title": "Демонтаж электроразеток",
                "fldMTP": "В дальнейшем не используется",
                "fldNote": "offline works",
                "fldDivisionId": 1,
                "fldUpDivisionId": 3,
                "ID": 1
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(2)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(2)",
                    "etag": 4,
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "27e4c593-042c-4bed-b7ad-0db70570c6cd",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "19626c72-dbb9-4512-ae18-c29a795d65ab",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Демонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "0ed3b993-509f-41c6-9105-055df4ed6370",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 2,
                "Title": "Демонтаж электровыключателей",
                "fldMTP": "В дальнейшем не используется",
                "fldNote": "offline works",
                "fldDivisionId": 1,
                "fldUpDivisionId": 3,
                "ID": 2
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(3)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(3)",
                    "etag": 4,
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "d9179c27-c7a2-41b8-9270-fd34a275e0f0",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м.п."
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "9d3f984c-bdaa-4d2a-91ab-f954b4263869",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Демонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "cccfb774-fd28-4148-8abf-8d509c52b1a7",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 4,
                    "Title": "Полы бетонные "
                },
                "Id": 3,
                "Title": "Демонтаж кабель каналов (размер)",
                "fldMTP": "В дальнейшем не используется",
                "fldNote": "offline works",
                "fldDivisionId": 1,
                "fldUpDivisionId": 4,
                "ID": 3
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(4)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(4)",
                    "etag": 2,
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "f3516486-2252-4a8d-a431-9ab50343f48c",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "7a438134-2cbb-4ebc-9449-8b50ecfbad8b",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 2,
                    "Title": "Отопление"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "2e1444ca-bdc9-44d3-bf5f-2b5b44844169",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 4,
                "Title": "Установка радиаторов: с установкой кранов воздушных (воздухоотводчиков) и кранов проходных",
                "fldMTP": "Алюминиевые с полимерным покрытием Extra Therm 500, Nova Florida 10 секций-1 шт., кран шаровой Itar 20мм -1 шт.Краны воздушные для радиаторов диаметром 20 мм - 1 шт; комплект терморегулятора Danfoss прямой, однотрубная система Ду 20, RA-G/RA 2940 - 1 комп.кронштейн - 2 шт.",
                "fldNote": "offline works",
                "fldDivisionId": 2,
                "fldUpDivisionId": 3,
                "ID": 4
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(5)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(5)",
                    "etag": 3,
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "83ef313c-9194-47fa-8096-6fd26739c690",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "d702eaf0-2e7f-4ecc-8a59-566e63e0ed12",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 2,
                    "Title": "Отопление"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "50ffed89-3a85-4f96-a16e-9ffb69982f8e",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 5,
                "Title": "Окраска трубопроводов отопления стальных за 2 раза.",
                "fldMTP": "Эмаль (термоэмаль) для радиаторов алкид белая п/мат. Лакра",
                "fldNote": "offline works",
                "fldDivisionId": 2,
                "fldUpDivisionId": 3,
                "ID": 5
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(6)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(6)",
                    "etag": 2,
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "f2c11070-2b21-4690-921a-28d5d3e01014",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м.п."
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "4c012cc3-0f9c-4c66-8539-873284452e67",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 2,
                    "Title": "Отопление"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "9ba7be9e-7654-4380-8938-3111e59bdb64",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 6,
                "Title": "Прокладка трубопроводов отопления из ПП, диам…..мм.",
                "fldMTP": "Трубы ПП диаметром 32мм,Крепления для полипропиленовых труб -Клипсы (….шт, вентиль полипропиленовый(ДУ 25/32/40/50мм)- шт, Фланцевые бурты (втулки)-Ду 40/50мм - шт, Крестовина полипропиленовая- ДУ 20/25/32, Соединительные муфты ППР- ДУ 20/25/32, Переходные муфты ППР -ДУ 20/25/32,Переходные тройники- 20x25x20мм/25x20x20мм/32x20x20мм/ 32x25x25мм,Угольники под 45 градусов - ДУ 20/25/32,Угольники 90° - ДУ 20/25/32, Угольники переходные 90° (Вн/Вн и Вн/Нр) - 25-20/32-20/32-25, Установочные угольники с креплением на стену - 20-1/",
                "fldNote": "offline works",
                "fldDivisionId": 2,
                "fldUpDivisionId": 3,
                "ID": 6
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(7)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(7)",
                    "etag": 5,
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "03312738-3b0e-4494-9fb2-70b4c056acf2",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "1b278873-0c64-46bc-abf3-380baf449f1f",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Электромонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "af5b8340-b8b5-4c28-ab5b-7ae64e22bc88",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 2,
                    "Title": "Ремонт кровли из профлиста"
                },
                "Id": 7,
                "Title": "Прокладка кабеля по стене за ГВЛ в гофротрубе.",
                "fldMTP": "двух постовых с заземлением",
                "fldNote": "offline works",
                "fldDivisionId": 3,
                "fldUpDivisionId": 2,
                "ID": 7
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(8)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(8)",
                    "etag": 4,
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "3fdae338-9849-4f4d-a3f5-8331716a934a",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "f38a394b-d6eb-40d6-8568-7112c409ba23",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Электромонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "170fdb16-bf3d-4b48-b026-dcbc4134ba24",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 2,
                    "Title": "Ремонт кровли из профлиста"
                },
                "Id": 8,
                "Title": "Установка розеток, при скрытой/ открытой проводке IP20.",
                "fldMTP": "Коробка распределительная TYCO 67040 наружная (для открытого монтажа) 85х85x40мм, IP54 (серая)",
                "fldNote": "offline works",
                "fldDivisionId": 3,
                "fldUpDivisionId": 2,
                "ID": 8
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(9)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(9)",
                    "etag": 2,
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {"__deferred": {"uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(9)/fldUnits"}},
                "fldDivision": {
                    "__metadata": {
                        "id": "b462e665-8f15-480a-9518-9de1bb1aa5e1",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Электромонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "a5b5950b-9a14-4422-a762-637104e95695",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Кровельные работы "
                },
                "Id": 9,
                "Title": "Монтаж распределительных коробок",
                "fldMTP": null,
                "fldNote": "offline works",
                "fldDivisionId": 3,
                "fldUpDivisionId": 1,
                "ID": 9
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(10)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(10)",
                    "etag": 2,
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {"__deferred": {"uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(10)/fldUnits"}},
                "fldDivision": {
                    "__metadata": {
                        "id": "93fc4cf6-5f03-4b78-bc4b-adf88a24914e",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 4,
                    "Title": "Погрузка и вывоз мусора"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "74022560-4c06-4e66-8c78-f102fb0120d6",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Кровельные работы "
                },
                "Id": 10,
                "Title": "Погрузочные работы при автомобильных перевозках: мусора строительного с погрузкой механизированным способом",
                "fldMTP": null,
                "fldNote": "offline works",
                "fldDivisionId": 4,
                "fldUpDivisionId": 1,
                "ID": 10
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(11)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(11)",
                    "etag": 3,
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "d57313a1-9056-47c7-99cd-32f4903f1b5b",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "86bba005-fb9b-4008-ac90-5787b7e75c92",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Демонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "9c13d00f-f3f5-4e2a-9dc9-a7f2a27cfe36",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 4,
                    "Title": "Полы бетонные "
                },
                "Id": 11,
                "Title": "Монтаж противопожарных дверей.",
                "fldMTP": "В дальнейшем не используется",
                "fldNote": "offline works",
                "fldDivisionId": 1,
                "fldUpDivisionId": 4,
                "ID": 11
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(12)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(12)",
                    "etag": 2,
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "a93a166e-531f-481d-b90f-ba5a624fbc3d",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "кг"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "3f8a83fc-62af-4eb0-8d4f-42b0fe592aa1",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 7,
                    "Title": "New"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "ca44bdb8-1459-4350-9a98-a7f421a95c36",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Кровельные работы "
                },
                "Id": 12,
                "Title": "тест",
                "fldMTP": "тест",
                "fldNote": "offline works",
                "fldDivisionId": 7,
                "fldUpDivisionId": 1,
                "ID": 12
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(13)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(13)",
                    "etag": 2,
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {"__deferred": {"uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(13)/fldUnits"}},
                "fldDivision": {
                    "__metadata": {
                        "id": "e039832f-d1ae-4ef5-a251-bc2244ddbe4d",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 7,
                    "Title": "New"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "a85fe412-fe4d-4c36-833b-da20eb2249ae",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 4,
                    "Title": "Полы бетонные "
                },
                "Id": 13,
                "Title": "тест",
                "fldMTP": null,
                "fldNote": "offline works",
                "fldDivisionId": 7,
                "fldUpDivisionId": 4,
                "ID": 13
            }
        ]
    }
};

function parseItemWork(dataItem) {
    return {
        id: dataItem.Id,
        title: dataItem.Title,
        units: dataItem.fldUnits ? dataItem.fldUnits.Title : '',
        mtp: dataItem.fldMTP,
        note: dataItem.fldNote,
    };
}

function parseDivisionItem(dataItem) {
    return {
        id: dataItem.fldDivision.Id,
        typeId: dataItem.fldUpDivision.Id,
        typeTitle: dataItem.fldUpDivision.Title,
        title: dataItem.fldDivision.Title,
        works: [parseItemWork(dataItem)],

    };
}

function parseUpDivisionItem(dataItem) {
    //console.log(dataItem)
    return {
        id: dataItem.fldUpDivision.Id,
        title: dataItem.fldUpDivision.Title,
        divisions: [parseDivisionItem(dataItem)]
    };
}

function groupByDivisionId(data) {
    const arrayUpDivisions = [];

    // console.log("groupByDivisionId",data);

    data.d.results.forEach((dataItem) => {
        const upDivisionIndex = arrayUpDivisions.findIndex((item) => item.id === dataItem.fldUpDivisionId);
        if (upDivisionIndex === -1) {
            const updivision = parseUpDivisionItem(dataItem);
            arrayUpDivisions.push(updivision);
        }
        else {
            const divisionIndex = arrayUpDivisions[upDivisionIndex].divisions.findIndex((item) => item.id === dataItem.fldDivisionId);
            if (divisionIndex === -1) {
                const division = parseDivisionItem(dataItem);
                arrayUpDivisions[upDivisionIndex].divisions.push(division);
            }
            else {
                const work = parseItemWork(dataItem);
                arrayUpDivisions[upDivisionIndex].divisions[divisionIndex].works.push(work);
            }
        }
    });

    // console.log("groupByDivisionId",arrayUpDivisions);

    return { updivisions: arrayUpDivisions};
}


function createGroupItem(label, value) {
    return {
        label,
        value,
    };
}

function createGroup(groupLabel, optionLabel, optionValue) {
    return {
        label: groupLabel,
        options: [
            createGroupItem(optionLabel, optionValue),
        ],
    };
}

/// Формирует группированный список options из данных ?
function groupBy(data, groupByField, optionLabelField, optionValueField) {
    const groupedData = [];
    data.d.results.forEach((dataItem) => {
        const groupLabel = dataItem[groupByField];
        const optionLabel = dataItem[optionLabelField];
        const optionValue = dataItem[optionValueField];
        const groupIdx = groupedData.findIndex((grpItem) => grpItem.label === groupLabel);
        if (groupIdx === -1) {
            const group = createGroup(groupLabel, optionLabel, optionValue);
            groupedData.push(group);
        } else {
            const groupItem = createGroupItem(optionLabel, optionValue);
            groupedData[groupIdx].options.push(groupItem);
        }
    });
    return groupedData;
}

/**
 * @description Получение дайджеста для выполнения Post запросов.
 * @author Vadim Gorbenko <gorbenkovv@nipigas.ru>
 * @returns {Promise} - который резолвится в строку дайджест формы.
 */
function getDigest() {
    return fetch(`${BASE_URL}_api/contextInfo`,
        {
            method: 'POST',
            headers: {
                accept: 'application/json;odata=verbose',
            },
        })
        .then((response) => response.json())
        .then((data) => data.d.GetContextWebInformation.FormDigestValue);
}

// получение производств из сответствующего списка
export const getOrgunits = () => fetch(`${BASE_URL}_api/web/lists(guid'${ORGUNITS_LIST_GUID}')/items?$Select=Id,Title,fldApprove/Title,fldConfirm/Title&$expand=fldApprove,fldConfirm`,
    {
        method: 'GET',
        headers: {
            accept: 'application/json;odata=verbose',
        },
    })
    .then((response) => response.json(), console.warn);

// получение условий стеснённости из сответствующего списка
export const getConditions = () => fetch(`${BASE_URL}_api/web/lists(guid'${WORK_CONDITIONS_LIST_GUID}')/items?$Select=Id,fldTitle,fldType`,
    {
        method: 'GET',
        headers: {
            accept: 'application/json;odata=verbose',
        },
    })
    .then((response) => response.json(), console.warn)
    .then((jsonData) => groupBy(jsonData, 'fldType', 'fldTitle', 'Id'), console.warn)
    .catch((err) => {
        // console.log("ERR->getConditions",err);
        return [createGroup("emptyGroup","emptyLabel","emptyValue")];
    })

// получение списка работ
export const getData = () => fetch(`${BASE_URL}_api/web/lists(guid'${WORKS_LIST_GUID}')/items?$Select=Id,fldDivisionId,fldUpDivisionId,fldUpDivision/Id,fldUpDivision/Title,fldDivision/Id,fldDivision/Title,Title,fldUnits/Title,fldMTP,fldNote&$expand=fldDivision,fldUpDivision,fldUnits`,
    {
        method: 'GET',
        headers: {
            accept: 'application/json;odata=verbose',
        },
    })
    .then((response) => response.json())
    .then(groupByDivisionId)
    .catch((err) => {
        // если нет шарика то берем из переменной фэйк
        // console.log("ERR",err);
        return groupByDivisionId(_offlineAllWorks);
    });

// получение данных элемента
export const getItem = () => {
    const itemID = getItemID();
    const url = `${BASE_URL}_api/web/lists(guid'${DEFECTIVE_LISTS_GUID}')/items(${itemID})?$Select=ListDataJSON`;
    return fetch(url,
        {
            method: 'GET',
            headers: {
                accept: 'application/json;odata=verbose',
            },
        })
        .then((response) =>  response.json())
        .then((jsonData) => JSON.parse(jsonData.d.ListDataJSON))
        .catch((err) => {
            // console.log("ERR->getItem",err);
            return _offlineSavedItem;
        })

};

/*
export const getItemDivisions = () => {
    const itemID = getItemID();
    const url = `${BASE_URL}_api/web/lists(guid'${DEFECTIVE_LISTS_GUID}')/items(${itemID})?$Select=ListDataJSON`;
    return fetch(url,
        {
            method: 'GET',
            headers: {
                accept: 'application/json;odata=verbose',
            },
        })
        .then((response) => response.json())
        .then((jsonData) => JSON.parse(jsonData.d.ListDataJSON))
        .catch(() => {
            return objDivisions;
        })

};
*/

// получение данных для Header компонента
export const getItemHeaderData = () => {
    const itemID = getItemID();
    const url = `${BASE_URL}_api/web/lists(guid'${DEFECTIVE_LISTS_GUID}')/items(${itemID})?$Select=Title,fldOrgunitId,fldWorkConditionId`;

    return fetch(url,
        {
            method: 'GET',
            headers: {
                accept: 'application/json;odata=verbose',
            },
        })
        .then((response) => response.json(), console.warn);
};

// Сохранение элемента при создании\изменении
export const saveItem = (jsonData, isUpdate) => getDigest().then((digest) => {
    const itemID = getItemID();
    // Отключен линтинг т.к. ломается подсветка скобок в vs code при вложенных шаблонных строках;
    // eslint-disable-next-line prefer-template
    const url = `${BASE_URL}_api/web/lists(guid'${DEFECTIVE_LISTS_GUID}')/items${isUpdate ? '(' + itemID + ')' : ''}`;
    const data = JSON.stringify({
        __metadata: {type: 'SP.Data.DefectiveListsListItem'},
        ListDataJSON: JSON.stringify(jsonData.ListDataJSON),
        Title: jsonData.title,
        fldOrgunitId: Number(jsonData.orgunit),
        fldWorkConditionId: Number(jsonData.condition),
    });
    const headers = {
        'Content-Type': 'application/json;odata=verbose',
        accept: 'application/json;odata=verbose',
        'X-RequestDigest': digest,
    };

    if (isUpdate) {
        headers['X-HTTP-Method'] = 'MERGE';
        headers['IF-MATCH'] = '*';
    }

    return fetch(url, {
        method: 'POST',
        headers,
        body: data,
    })
        .then(
            () => {
                window.location = `${BASE_URL}Lists/DefectiveLists/AllItems.aspx`;
            },
            () => {
                alert('Во время сохранения произошла ошибка. Попробуйте снова.');
            },
        );
});
