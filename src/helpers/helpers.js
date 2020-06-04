import {
    BASE_URL, DEFECTIVE_LISTS_GUID, WORKS_LIST_GUID, ORGUNITS_LIST_GUID, WORK_CONDITIONS_LIST_GUID,
} from '../consts';

// eslint-disable-next-line
export const getItemID = () => GetUrlKeyValue('ID');
// eslint-disable-next-line
//export const getItemID = () => (window.location.href.indexOf('localhost') !== -1 ? 63 : GetUrlKeyValue('ID'));


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
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(15)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(15)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "d73470e5-194b-4df3-ba73-5f6af3ce04d4",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "d906aaad-5dc1-475a-abc0-ac68cd121c85",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Демонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "004c29d0-bdbb-41c2-90ea-73b56b83e386",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Кровельные работы "
                },
                "Id": 15,
                "Title": "Демонтаж кровельного покрытия из наплавляемых материалов в 2слоя ",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 1,
                "fldUpDivisionId": 1,
                "ID": 15
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(16)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(16)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "790a5c0c-cd4a-43b6-927d-92c3f59d931b",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м.п."
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "b96dc36a-b316-4889-8f28-4195857ab5f1",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Демонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "46b2b5de-9fd9-490f-9b4b-4b529ec8fe3e",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Кровельные работы "
                },
                "Id": 16,
                "Title": "Демонтаж примыканий из наплавляемых материалов",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 1,
                "fldUpDivisionId": 1,
                "ID": 16
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(17)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(17)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "33d65462-41ef-4631-8685-7b9f6ddb8793",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "212a9f82-7e9e-480c-8fc2-4249bd6b1b24",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Демонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "154f48c8-2952-4f99-8d2a-fee03637003e",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Кровельные работы "
                },
                "Id": 17,
                "Title": "Демонтаж цементной стяжки толщ.30мм",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 1,
                "fldUpDivisionId": 1,
                "ID": 17
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(18)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(18)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "c725f8f2-cb84-409f-be8e-49f55e414576",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "9c6ed7ed-adac-4f57-aaf9-358cf8f81d54",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Демонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "57c3d1ce-5a73-4329-b880-7a89d4b80692",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Кровельные работы "
                },
                "Id": 18,
                "Title": "Демонтаж отливов из оцинкованной стали",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 1,
                "fldUpDivisionId": 1,
                "ID": 18
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(19)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(19)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "6630b1d6-6948-4ae7-9b89-48570c62eb73",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м.п/м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "2dc62914-091c-45d0-ac0b-f158303bf218",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Демонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "b71f3c5c-fcb4-44f7-983b-383965c9e0a4",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Кровельные работы "
                },
                "Id": 19,
                "Title": "Демонтаж оцинкованного папапета шириной 500мм",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 1,
                "fldUpDivisionId": 1,
                "ID": 19
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(20)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(20)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "22895a33-b12e-4698-8d5f-372864c39b37",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "b5e2b192-3408-4dc8-b17f-9e79ef800bb9",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Демонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "abad0cbd-8bb4-4555-a6d3-fcce3a447051",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Кровельные работы "
                },
                "Id": 20,
                "Title": "Очистка металлического ограждения, металоконструкций кровли вручную",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 1,
                "fldUpDivisionId": 1,
                "ID": 20
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(21)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(21)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "ca11cf46-8761-4d23-8924-00f1a47ac8f7",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "d59f414d-b665-4b89-bb75-f60e065a909a",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Демонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "07d6638c-175e-4a90-b2a4-a36219382c75",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Кровельные работы "
                },
                "Id": 21,
                "Title": "Демонтаж утеплителя (Пенопласт) толщиной 150 мм",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 1,
                "fldUpDivisionId": 1,
                "ID": 21
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(22)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(22)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "db6ea5b2-a77d-44a5-93ce-17cacef04aa3",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "6eeaf2b8-c9c7-442f-b0a4-bb6fdd668551",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Демонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "02337167-6472-42b9-a446-f079b415f399",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Кровельные работы "
                },
                "Id": 22,
                "Title": "Демонтаж воронок водосточных",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 1,
                "fldUpDivisionId": 1,
                "ID": 22
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(23)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(23)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "dd805444-2b6c-418d-8170-b734863277c3",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "6302eaf5-1a6f-4ced-9516-5062a39c743b",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "291a3aa9-6cb0-4333-a370-c3eecf2df097",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Кровельные работы "
                },
                "Id": 23,
                "Title": "Устройство водосточных воронок чугунных.",
                "fldMTP": "Воронка ТехноНИКОЛЬ ремонтная 90х240  , Мастика гидроизоляционная ТЕХНОНИКОЛЬ №24 МГТН - 2кг",
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 1,
                "ID": 23
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(24)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(24)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__deferred": {
                        "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(24)/fldUnits"
                    }
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "4815133d-cf86-4cb4-be4a-bcabeb57f7ba",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "eb496a85-1ca6-4571-80fa-d98a308f3397",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Кровельные работы "
                },
                "Id": 24,
                "Title": "Устройство пароизоляции 1 слой",
                "fldMTP": "технониколь бикрост ТКП",
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 1,
                "ID": 24
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(25)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(25)",
                    "etag": "\"2\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__deferred": {
                        "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(25)/fldUnits"
                    }
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "836980d9-7ae0-41b8-9e40-c876ae771b86",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "71ba4075-0fe8-4cc7-9e64-b61834d6e7bd",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Кровельные работы "
                },
                "Id": 25,
                "Title": "Устройство утеплителя толщиной 50мм на битумной мастике в 2 слоя.",
                "fldMTP": "Пеноплэкс К (кровля) толщина 50мм, (расход 1.03)  Мастика приклеивающая ТЕХНОНИКОЛЬ №27, расход 0,6кг/м2",
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 1,
                "ID": 25
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(26)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(26)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "ebd4ede0-5df5-42e2-912c-9b86867ff726",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "855c487e-4c3a-4f30-a276-06e775a222de",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "95a3eb4e-930d-4dba-ade7-a94ccfb6f8bd",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Кровельные работы "
                },
                "Id": 26,
                "Title": "Устройство стяжки из керамзитобетона, толщиной 80мм",
                "fldMTP": "Керамзитобетон М150",
                "fldNote": "Подача раствора бетононасосом",
                "fldDivisionId": 6,
                "fldUpDivisionId": 1,
                "ID": 26
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(27)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(27)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "bf9284cd-727b-498a-a0d6-02edff8df47b",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "f4c345f7-ddd8-4ae6-8fbd-214a46979f0e",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "11014e40-42c8-4658-a2d5-022e606f2264",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Кровельные работы "
                },
                "Id": 27,
                "Title": "Устройство выравнивающих цементных стяжек тол.30мм",
                "fldMTP": "Раствор готовый цементный марки 100",
                "fldNote": "Подача раствора бетононасосом",
                "fldDivisionId": 6,
                "fldUpDivisionId": 1,
                "ID": 27
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(28)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(28)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "192593b4-ac35-41df-89ba-893d4f2905f2",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "fa5fbcee-4673-437e-a804-1a858ed0787d",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "d09deeaf-7c18-4a0d-a123-31287898c778",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Кровельные работы "
                },
                "Id": 28,
                "Title": "Грунтовка цементной стяжки праймером битумным    за 1 раз",
                "fldMTP": "Праймер битумный ТЕХНОНИКОЛЬ",
                "fldNote": "расход 0,25кг/м2",
                "fldDivisionId": 6,
                "fldUpDivisionId": 1,
                "ID": 28
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(29)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(29)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "a981a3bd-1f70-4ed5-8322-c4cf004b41bb",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "5724d7cf-0a0f-4d69-bbd3-3d88ced3af06",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "259ad7eb-2bcc-47bf-a3cf-cc4b22bb99a2",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Кровельные работы "
                },
                "Id": 29,
                "Title": "Устройство кровли из наплавляемых материаловнижний нижний слой",
                "fldMTP": "\"унифлекс ЭПП\"- нижний слой",
                "fldNote": "Красх.-1,16",
                "fldDivisionId": 6,
                "fldUpDivisionId": 1,
                "ID": 29
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(30)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(30)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "15920906-ac1f-4a59-9d68-d4aa078ff24b",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м.п."
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "15252dda-ed39-409c-8022-375c6df16a17",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "1f981258-1fe8-4571-a02d-f053649691f6",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Кровельные работы "
                },
                "Id": 30,
                "Title": "Устройство кровли из наплавляемых верхний слой",
                "fldMTP": "\"Унифлекс ЭКП \" - верхний слой",
                "fldNote": "Красх.-1,14  ",
                "fldDivisionId": 6,
                "fldUpDivisionId": 1,
                "ID": 30
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(31)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(31)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "db9e8edc-cd7a-40d9-8b7e-9f4075dbf751",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "07675bfc-a1d3-4059-9511-851ee7bb1856",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "1383904e-7518-4d14-a89c-47d91b8ec9be",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Кровельные работы "
                },
                "Id": 31,
                "Title": "Огрунтовка праймером примыканий к парапету",
                "fldMTP": "Праймер битумный ТЕХНОНИКОЛЬ",
                "fldNote": "расход 0,25кг/м2",
                "fldDivisionId": 6,
                "fldUpDivisionId": 1,
                "ID": 31
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(32)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(32)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "f358bfd6-5976-4dc4-a74a-c05fc436637f",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м.п/м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "4fde78e2-94c2-4fe2-aeaf-62e51afd299b",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "28386736-dffc-44cb-8992-7617de17e58c",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Кровельные работы "
                },
                "Id": 32,
                "Title": "Усройство примыканий к парапету, высотой до 400 мм наплавляемым материалом в два слоя с наплавлением на парапет шириной 500 мм, нижний слой",
                "fldMTP": "\"унифлекс ЭПП\"- нижний слой, Красх.-1,16, (0,4+0,5+0,15)х84х1.16=102,31м2",
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 1,
                "ID": 32
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(33)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(33)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "9dc98c38-f5d9-4fb0-a3c9-62c1dcca8ec2",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м.п/м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "ce15e2e3-17fd-4ae4-86e8-d734dcdfccb6",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "1beb96cf-0d10-4bde-b51c-3fdedc935d20",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Кровельные работы "
                },
                "Id": 33,
                "Title": "Усройство примыканий к парапету, высотой до 400 мм наплавляемым материалом в два слоя с наплавлением на парапет шириной 500 мм верхний слой",
                "fldMTP": "Унифлекс ЭКП  - верхний слой , Красх.-1,14, (0,4+0,5+0,15)х84х1,14=100,54м2; Мастика гидроизоляционная ТЕХНОНИКОЛЬ №24 МГТН-  расход 1кг/м2- 84кг (для промазки верхней кромки примыкания) , развернутая высота необходимого материала  поверхности с учетом нахлеста гориз.поверхности кровли с наклонной поверхностью бортика- 400мм+500мм+150мм-одно место.",
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 1,
                "ID": 33
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(34)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(34)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "573e22f4-15c8-490b-9216-b626e15bd228",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "69d81564-1734-4526-b5b0-4360d39d5971",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "825c1e0b-0991-4c04-84c8-0b28918047ec",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Кровельные работы "
                },
                "Id": 34,
                "Title": "Огрунтовка металлического ограждения, конструкций кровли вручную ",
                "fldMTP": "Грунтовка ГФ-021",
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 1,
                "ID": 34
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(35)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(35)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "d9f77afc-de5c-4317-95d4-695424accc24",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "46dd4257-d3b7-4dfc-99dd-450b10835ac6",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "ef650a9d-b25b-4974-bcc2-8cd88a5107cb",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Кровельные работы "
                },
                "Id": 35,
                "Title": "Окраска металлического ограждения, конструкций кровли вручную в 2 слоя ",
                "fldMTP": "КО-174, 0,2кг/м2",
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 1,
                "ID": 35
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(36)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(36)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "7e25acff-008e-43b8-8e9a-bb7dbf1e3832",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "95d5972c-fb43-4d6d-ae33-9148584fb7af",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "ef3ca32e-f50d-436f-9bd2-e276186a383a",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Кровельные работы "
                },
                "Id": 36,
                "Title": "Устройство мелких покрытий (брандмауэры, парапеты, свесы) из листовой оцинкованной стали толщ. 0.7мм",
                "fldMTP": "Сталь листовая оцинкованная толщиной 0.7мм",
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 1,
                "ID": 36
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(37)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(37)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "a18f4d5b-a53f-4654-ab4e-b0abe8d90598",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "тн"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "f410c8ee-b907-4ad5-86e1-db204cc7f362",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "42907dd0-ee6d-4289-a139-21038a15fe83",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Кровельные работы "
                },
                "Id": 37,
                "Title": "Погрузка при автомобильных перевозках мусора строительного с погрузкой вручную",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 1,
                "ID": 37
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(38)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(38)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "698ca43e-10e5-4393-830a-c39127ef285e",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "тн"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "eb3a6247-3b39-458a-9cca-19dd0816f8e5",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "f1deba57-9e8f-4860-9bcf-b7fa0f7bf427",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Кровельные работы "
                },
                "Id": 38,
                "Title": "Перевозка груза Iкласса автомобилями бортовыми грузоподъемностью до 5тн на расстояние до 35км",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 1,
                "ID": 38
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(39)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(39)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "8bb703b0-3223-4ad4-ace3-5a7ddca95e04",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "b65ff85a-676b-4f07-b045-15c76f79803a",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Демонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "fa8addc3-a3a9-4f73-95b3-ce656ef14cbc",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 2,
                    "Title": "Ремонт кровли из профлиста"
                },
                "Id": 39,
                "Title": "Демонтаж кровельного  покрытия из профилиста",
                "fldMTP": "В дальнейшем не используется",
                "fldNote": null,
                "fldDivisionId": 1,
                "fldUpDivisionId": 2,
                "ID": 39
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(40)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(40)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "651b8ed5-4b60-4b95-add5-d55cb3968dee",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "2f9c579a-5f6c-4cdb-b33d-102ef6b2aad2",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Демонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "572a0e25-346b-4b3d-bd77-f00393080d11",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 2,
                    "Title": "Ремонт кровли из профлиста"
                },
                "Id": 40,
                "Title": "Демонтаж  листов из оцинкованой стали",
                "fldMTP": "В дальнейшем не используется",
                "fldNote": null,
                "fldDivisionId": 1,
                "fldUpDivisionId": 2,
                "ID": 40
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(41)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(41)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "bdeb32e7-d576-4529-bf81-1c2fd55df524",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "48ca9d97-db99-4720-8513-27d096c0c3e6",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 13,
                    "Title": "Общестроительные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "ce90bf74-3f69-47b8-a4fd-a6126d21a024",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 2,
                    "Title": "Ремонт кровли из профлиста"
                },
                "Id": 41,
                "Title": "Монтаж листа оцинкованного",
                "fldMTP": "Сталь листовая оцинкованная толщиной 0.7 мм",
                "fldNote": null,
                "fldDivisionId": 13,
                "fldUpDivisionId": 2,
                "ID": 41
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(42)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(42)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "a8843d9a-fa06-4b6a-85de-735ed84bddc4",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "5d0a4859-7a61-4a73-ad86-a1158cec38eb",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 13,
                    "Title": "Общестроительные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "c6a824d8-cc8f-4f4e-874a-529cdadb013f",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 2,
                    "Title": "Ремонт кровли из профлиста"
                },
                "Id": 42,
                "Title": "Устройство примыкания из наплавляемых материалов в 1 слой высотой 500мм.",
                "fldMTP": "Кровельный материал Унифлекс ЭПП                                                    Нахлест на стену 500 мм , нахлест по кровле 1500 мм",
                "fldNote": null,
                "fldDivisionId": 13,
                "fldUpDivisionId": 2,
                "ID": 42
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(43)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(43)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "5c46cd6a-a3bc-4db2-a071-affea6bc23bd",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "7b5f9e0f-930a-4369-81a5-f07324c38084",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 13,
                    "Title": "Общестроительные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "253beee5-ed5e-4994-ae36-1d21b64a5e4e",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 2,
                    "Title": "Ремонт кровли из профлиста"
                },
                "Id": 43,
                "Title": "Монтаж кровельного профилированного листа",
                "fldMTP": "Профилированный лист оцинкованный Н 75-750-0,7.Саморез кровельный 60*4,8 - ??? шт",
                "fldNote": null,
                "fldDivisionId": 13,
                "fldUpDivisionId": 2,
                "ID": 43
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(44)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(44)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "430b8378-3381-454a-bd65-d4aa096ea840",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "388f3cd1-f1fc-4ab6-a7ae-d3fcf96e9767",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 13,
                    "Title": "Общестроительные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "58c4c92f-5be2-4677-a0bf-f88164cc19d8",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 2,
                    "Title": "Ремонт кровли из профлиста"
                },
                "Id": 44,
                "Title": "Устройство примыкания из наплавляемых материалов с нахлёстом на горизонтальную и вертикальную поверхность ",
                "fldMTP": "Мастика гидроизоляционная ТЕХНОНИКОЛЬ №24(для промазки верхней кромки примыкания). МГТН \"унифлекс ЭПП\"- нижний слой, Красх.-1,16 . (0,5+1.5)х22х1,16=51.04.м2                                                                                                          500мм+1500мм-одно место.",
                "fldNote": null,
                "fldDivisionId": 13,
                "fldUpDivisionId": 2,
                "ID": 44
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(45)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(45)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "90701612-257c-4790-bc3b-b0f6a9e1f155",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м.п."
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "c5ee334b-50d1-40f7-a9f6-7f11250bf2a2",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 13,
                    "Title": "Общестроительные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "525de737-edca-40a5-8811-df0d9db8bcba",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 2,
                    "Title": "Ремонт кровли из профлиста"
                },
                "Id": 45,
                "Title": "Монтаж прижимной планки  шириной 50 мм.",
                "fldMTP": "Сталь полосовая, марка стали: Ст3сп шириной 50мм толщиной 4-5 мм 0,13кг/м.п., дюбель-гвоздь 8х60-??шт.",
                "fldNote": null,
                "fldDivisionId": 13,
                "fldUpDivisionId": 2,
                "ID": 45
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(46)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(46)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "07c9cc60-bbe2-4e84-89dd-5f2ea140e02a",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "2b48c064-dd62-49d3-8d42-c9f26ac8d553",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Демонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "6f390ef3-6f2a-44ba-8894-91fb5051c07a",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 46,
                "Title": "Демонтаж дверного блока деревянного ",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 1,
                "fldUpDivisionId": 3,
                "ID": 46
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(47)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(47)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "31bca129-22d7-4d75-8cea-03d8456b4b83",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "743281b6-0f4a-4992-afd2-b3e8cbe4748d",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Демонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "1d906ab0-0beb-4230-970f-92055e995857",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 47,
                "Title": "Разборка деревянных заполнений проемов оконных с подоконными досками",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 1,
                "fldUpDivisionId": 3,
                "ID": 47
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(48)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(48)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "42a2da30-fccf-4fe3-8fe2-0edcf12edd65",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "bbb2806b-6ebc-4a44-a672-f5f5955c3da6",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Демонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "2dfc026c-ade0-4e81-9bef-d48a00e3ed92",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 48,
                "Title": "Демонтаж подвесного потолка \"Армстронг\"",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 1,
                "fldUpDivisionId": 3,
                "ID": 48
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(49)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(49)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "ccd9fe1c-d7f4-41eb-9288-fa179678c66d",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "36b0c694-90fb-4281-a570-cf9f44e42bac",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Демонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "7fe5843f-546f-4fa8-b34a-a146c214e793",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 49,
                "Title": "Демонтаж плинтуса ПВХ",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 1,
                "fldUpDivisionId": 3,
                "ID": 49
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(50)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(50)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "c1e9837a-4e7c-4ddf-bab6-881fbc212cef",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "051e41bd-afac-413e-aa8b-2695ef9833c6",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Демонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "41cdaf44-f707-463d-adbe-2c283aab973a",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 50,
                "Title": "Снятие старых обоев со стен",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 1,
                "fldUpDivisionId": 3,
                "ID": 50
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(51)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(51)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "ac24b2b7-8e5a-473a-99e8-64a85a526810",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "d71ce5ea-dd20-4725-ab3c-fc4a0b010838",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Демонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "c4b762ab-d69c-45b6-b419-cc69a5cc07f1",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 51,
                "Title": "Разборка покрытий полов из ламината",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 1,
                "fldUpDivisionId": 3,
                "ID": 51
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(52)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(52)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "b58204f2-c7d4-4d39-8c49-81a57aa2f566",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "4349ff37-0ea5-4e42-a11c-3fd5e2c916e0",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Демонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "50ec3f8e-5968-417e-a470-df4e3102a4de",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 52,
                "Title": "Разборка покрытий полов из линолеума ",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 1,
                "fldUpDivisionId": 3,
                "ID": 52
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(53)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(53)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "aceba640-49ce-43cf-a6d2-8d01231e0005",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "8429480a-352f-403c-ad63-ed17f00ae470",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Демонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "0fdf6ff8-11bc-4367-9bde-e17a75701b19",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 53,
                "Title": "Демонтаж цементной стяжки  толщ.50мм",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 1,
                "fldUpDivisionId": 3,
                "ID": 53
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(54)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(54)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "d4fe699f-4bc8-46bb-9436-cd58d32982c3",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "a5f4af23-4716-4224-afab-2bb738cba61d",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "81a52a7a-2506-401a-8b54-b0ed21f87cf9",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 54,
                "Title": "Установка дверного блока ПВХ ",
                "fldMTP": "Дверной блок ПВХ",
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 3,
                "ID": 54
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(55)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(55)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "e1eb73ed-7fa4-4ca2-a72b-bb7ba56d59a3",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "f9c31cf3-3539-448e-91f1-56a4eaca4698",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "2863557c-9b7d-451a-b573-3b7cdce9f45c",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 55,
                "Title": "Устройство наличника ПВХ шириной 80мм ",
                "fldMTP": "Наличник ПВХ шириной 80мм",
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 3,
                "ID": 55
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(56)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(56)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "b372f23f-097d-47a6-a606-7e622c8665c7",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "ca23ed45-b65c-4c06-80d3-3be007fcc0b4",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "966b497c-32be-4cb3-84ea-bd8583fa4f9b",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 56,
                "Title": "Облицовка дверных и оконных откосов сэндвич панеляими Т10мм",
                "fldMTP": "Сэндвич-панели толщ.10мм",
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 3,
                "ID": 56
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(57)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(57)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "31b94497-b34a-4802-bcfd-2744cda4c3b6",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "77a5ecc4-2eac-498b-a40e-211485448a7c",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "a5a21d87-e622-4286-9d10-1fae1c9754a4",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 57,
                "Title": "Установка в жилых и общественных зданиях оконных блоков из ПВХ профилей поворотных ( 3-х створчатых, откидных, поворотно-откидных) с москитными сетками",
                "fldMTP": "Блок оконный пластиковый … створчатый. С поворотными створками. Двухкамерными стеклопакетами 32мм до 2м2",
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 3,
                "ID": 57
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(58)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(58)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "9fdc1f3c-56f0-48cc-bfce-91fc53921c4e",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м.п."
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "d7e5aa3a-5e47-4ba7-91ba-49d36a6ff10a",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "9e57d966-a0b8-4890-ae41-eaeb2e6ed9ab",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 58,
                "Title": "Установка подоконной доски ПВХ шириной 500мм ",
                "fldMTP": "Подоконная доска ПВХ шириной 500мм",
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 3,
                "ID": 58
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(59)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(59)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "9de751c7-b643-4a17-b99d-e47df2e79c95",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "d3494c73-2688-4796-89da-9cd158b2b447",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "144eb0a5-20c7-49ca-b28f-bbcc3e0adbc3",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 59,
                "Title": "Облицовка дверных и оконных откосов сэндвич панелями Т10мм",
                "fldMTP": "Сэндвич-панели толщ.10мм",
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 3,
                "ID": 59
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(60)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(60)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "99677ec1-24ec-43ba-8551-e3a0e3c27a29",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "33a41aa7-8f1d-4af1-a8fc-a695db795379",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "316821f6-781c-42f3-b3d2-200bf156e421",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 60,
                "Title": "Грунтовка откосов  наружних бетон контактом за 1 раз",
                "fldMTP": "Грунтовка бетон контакт",
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 3,
                "ID": 60
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(61)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(61)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "e56b4367-82d9-401d-9234-23dd4b0c9a41",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "0ddd585d-5b64-4ebf-80c2-9b14eaa24ce7",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "84a1da5c-6032-450e-994b-bd3915099644",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 61,
                "Title": "Штукатурка откосов цементно-песчаным раствором ",
                "fldMTP": "Раствор готовый отделочный цементно-известковый",
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 3,
                "ID": 61
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(62)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(62)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "a339dba9-d1c7-4aa7-8748-b155db2d3981",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "8f3f9cef-9696-41d8-87ce-a22da638cf7c",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "8d51c290-23a3-48ab-a6c2-71b063eafa55",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 62,
                "Title": "Грунтовка откосов  наружних грунтовкой глубокого проникновения Оптимист для наружных работ за 1 раз",
                "fldMTP": "Грунтовка для наружных работ Оптимист",
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 3,
                "ID": 62
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(63)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(63)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "fd4130fb-de93-4775-820a-4e94ec46fe9d",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "2ac18386-78bd-4b27-8fec-85449e38cf6e",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "2b549346-0f5e-4fca-9f25-27b2db2097e7",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 63,
                "Title": "Шпаклевка откосов за 2 раза",
                "fldMTP": "Шпатлевка",
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 3,
                "ID": 63
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(64)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(64)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "bac28c28-6250-41eb-a43c-2216a3205c74",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "f8e0151c-ca5d-4b0e-bc32-b5835de016ae",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "aafa90af-0eeb-4446-93e8-0e435e2c36c1",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 64,
                "Title": "Окраска откосов водоэмульсионными составами Тиккурила для наружных работ за 2 раза ",
                "fldMTP": "Краска Тиккурила водоэмульсионная для наружных работ",
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 3,
                "ID": 64
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(65)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(65)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "048cbd2a-8dab-4e2b-90b0-9c8e5425667e",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "5460ab26-ace9-438d-9d94-8c08f969bfcb",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "e621c337-c952-44a7-af5c-c360ec4481eb",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 65,
                "Title": "Устройство мелких  покрытий (отливов) из оцинкованной стали с полимерным покрытием Т 0.5мм",
                "fldMTP": "Водоотлив оконный шириной планки 250мм из оцинкованной стали с полимерным покрытием",
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 3,
                "ID": 65
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(66)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(66)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "0c31eebd-0dae-4ab1-b3cb-b82716af63b5",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "f340a79a-0df4-4d08-8b26-328cd36d0f80",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 14,
                    "Title": "Стены"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "5c5b74df-03ff-4cb2-abf2-31790c02855e",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 66,
                "Title": "Грунтовка стен  бетон контактом за 1 раз",
                "fldMTP": "Грунтовка бетон контакт",
                "fldNote": null,
                "fldDivisionId": 14,
                "fldUpDivisionId": 3,
                "ID": 66
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(67)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(67)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "77a66f2e-05b7-4d18-8253-3d76c634af63",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "8142eff9-5c73-42c4-8d43-29b87d9aa2c9",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 14,
                    "Title": "Стены"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "67e5043a-d57a-494b-a787-cb97912dfb73",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 67,
                "Title": "Выравнивание стен сухой смесью Ветонит толщ. 5мм",
                "fldMTP": "Сухая смесь Ветонит",
                "fldNote": null,
                "fldDivisionId": 14,
                "fldUpDivisionId": 3,
                "ID": 67
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(68)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(68)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "8e298ff8-3177-4b2c-b0d0-28ffb49172f8",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "d00116a6-666f-405a-a08a-e40ff371ebfe",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 14,
                    "Title": "Стены"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "7ebbadf0-74d5-4785-8af7-78a7fc9aadfb",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 68,
                "Title": "Грунтовка стен грунтовкой глубокого проникновения Оптимист за 1 раз",
                "fldMTP": "Грунтовка для внутренних работ Оптимист",
                "fldNote": null,
                "fldDivisionId": 14,
                "fldUpDivisionId": 3,
                "ID": 68
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(69)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(69)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "d594e72f-dfb7-4c34-b200-4142215cc252",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "e65c7615-a925-443a-a994-af7a309246a4",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 14,
                    "Title": "Стены"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "e079d746-a26b-4ce5-a3f0-b06c806eaf90",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 69,
                "Title": "Шпаклевка стен за 2 раза ",
                "fldMTP": "Шпатлевка для внутренних работ",
                "fldNote": null,
                "fldDivisionId": 14,
                "fldUpDivisionId": 3,
                "ID": 69
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(70)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(70)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "84b129c0-de38-4ba0-804e-5b7caf58a1d1",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "72ce9cb3-5df6-44d6-a8be-0dfce0921a4b",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 14,
                    "Title": "Стены"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "139a6928-5233-48d9-8b2b-721a4a10d113",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 70,
                "Title": "Оклейка стен обоями под окраску ",
                "fldMTP": "Обои флизилиновые под окраску",
                "fldNote": null,
                "fldDivisionId": 14,
                "fldUpDivisionId": 3,
                "ID": 70
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(71)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(71)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__deferred": {
                        "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(71)/fldUnits"
                    }
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "9144d250-3eaf-4167-a408-d562117da2ec",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 14,
                    "Title": "Стены"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "f8e98a90-c4a9-4eaf-ae89-0d78dcaaed3e",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 71,
                "Title": "Оклейка стен обоями под окраску ",
                "fldMTP": "Стеклохолст Паутинка",
                "fldNote": null,
                "fldDivisionId": 14,
                "fldUpDivisionId": 3,
                "ID": 71
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(72)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(72)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "32f20afd-6bdc-4a29-8cba-a7371b191087",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "40c7badf-c621-4898-b60d-eb1cb2829e4c",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 14,
                    "Title": "Стены"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "9f6c3161-40e6-43ea-acbb-2462251896cd",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 72,
                "Title": "Окраска стен водоэмульсионными составами Тиккурила за 2 раза Ral 9003",
                "fldMTP": "Водоэмульсионная краска Тиккурила Ral 9003",
                "fldNote": null,
                "fldDivisionId": 14,
                "fldUpDivisionId": 3,
                "ID": 72
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(73)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(73)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "fabd94fe-a10f-45da-8d17-1dbd94306647",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "8eddca9b-cf56-4223-9b11-121e6d81b1af",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 15,
                    "Title": "ГКЛ стены под окраску"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "d4a6a5a9-c9be-4d65-bdb6-8d8745eebbf5",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 73,
                "Title": "Облицовка стен по системе \"КНАУФ\" по одинорному металлическому каркасу из ПН и ПС профилей гипсокартонными листами в один слой",
                "fldMTP": "ВГКЛ-12.5мм",
                "fldNote": null,
                "fldDivisionId": 15,
                "fldUpDivisionId": 3,
                "ID": 73
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(74)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(74)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "baeccc8b-c0ca-401d-9810-4592c832fd44",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "dbd19a5d-3825-4485-8ab5-ac03e5f6caa9",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 15,
                    "Title": "ГКЛ стены под окраску"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "bee8f202-e56c-431a-aa7a-67637c570269",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 74,
                "Title": "Шпаклевка стен за 2 раза",
                "fldMTP": "Шпатлевка для внутренних работ ",
                "fldNote": null,
                "fldDivisionId": 15,
                "fldUpDivisionId": 3,
                "ID": 74
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(75)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(75)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "97c90f0b-77c3-488d-bc0c-929e353dcc77",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "ec79b358-c141-4892-bc2b-4d29ef5b7903",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 15,
                    "Title": "ГКЛ стены под окраску"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "f971624a-57d3-4028-8a54-452e826a6a88",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 75,
                "Title": "Окраска стен водоэмульсионными составами за 2 раза",
                "fldMTP": "Матовая водно-дисперсионная краска ТЭКС интерьерная",
                "fldNote": null,
                "fldDivisionId": 15,
                "fldUpDivisionId": 3,
                "ID": 75
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(76)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(76)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "6d07799e-25a2-4d83-ae41-ad1bb83fe388",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "fc922704-0084-4e70-9769-f0fa20742431",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 15,
                    "Title": "ГКЛ стены под окраску"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "0d0f34a2-471f-4c0e-a8e6-8585aecc5c9a",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 76,
                "Title": "Окраска стен водоэмульсионными составами за 2 раза",
                "fldMTP": "Матовая водно-дисперсионная краска Butterfly Деруфа",
                "fldNote": null,
                "fldDivisionId": 15,
                "fldUpDivisionId": 3,
                "ID": 76
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(77)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(77)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "1d524a98-0672-49a0-a2fe-1b2f18b0c17f",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "a6e4666e-bca6-4c28-ac53-65b75fc1919e",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 15,
                    "Title": "ГКЛ стены под окраску"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "b4790985-bc60-42de-9b01-18cad16e2e7d",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 77,
                "Title": "Окраска стен водоэмульсионными составами за 2 раза ",
                "fldMTP": "Матовая водно-дисперсионная краска Butterfly Деруфа",
                "fldNote": null,
                "fldDivisionId": 15,
                "fldUpDivisionId": 3,
                "ID": 77
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(78)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(78)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "4464e4b4-0ba0-44ad-bddd-cbed7a7fe902",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "f7ff76a2-af13-49d4-833d-47e1699f0a62",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 15,
                    "Title": "ГКЛ стены под окраску"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "48605284-ef35-4e89-b4e4-cdb25596ff43",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 78,
                "Title": "Устройство радиаторной решетки 1200*600",
                "fldMTP": "Радиаторная решетка 600х1200",
                "fldNote": null,
                "fldDivisionId": 15,
                "fldUpDivisionId": 3,
                "ID": 78
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(79)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(79)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "6f35a3f9-befa-44ef-bbe9-1ab58477ae9b",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "6bc5f535-6c96-4f6b-8f82-71707fa46eb6",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 15,
                    "Title": "ГКЛ стены под окраску"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "079f2fe4-3dce-4f6f-be51-11cd2c89d3d0",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 79,
                "Title": "Облицовка стен по системе \"КНАУФ\" по одинорному металлическому каркасу из ПН и ПС профилей гипсокартонными листами в один слой ",
                "fldMTP": "ВГКЛ-12.5мм",
                "fldNote": null,
                "fldDivisionId": 15,
                "fldUpDivisionId": 3,
                "ID": 79
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(80)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(80)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "91b2ed57-e48f-4aab-b62f-25f31c34de6b",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "21faaab6-e774-4b54-bdf7-c0096357a234",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 15,
                    "Title": "ГКЛ стены под окраску"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "0981bc0f-6eb9-4166-bb3e-e9ae353cb90a",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 80,
                "Title": "Шпаклевка стен за 2 раза",
                "fldMTP": "Шпатлевка для внутренних работ",
                "fldNote": null,
                "fldDivisionId": 15,
                "fldUpDivisionId": 3,
                "ID": 80
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(81)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(81)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "ae753996-ce8c-4ed9-a4ce-4c24152a7814",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "ddda90ca-8803-4531-96a9-538ee5392edb",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 15,
                    "Title": "ГКЛ стены под окраску"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "ef9ce02b-1d27-473f-96e0-a3da987b5a6a",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 81,
                "Title": "Оклейка стен флизилиновыми обоями под окраску",
                "fldMTP": "Обои флизилиновые под окраску",
                "fldNote": null,
                "fldDivisionId": 15,
                "fldUpDivisionId": 3,
                "ID": 81
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(82)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(82)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "d66900d6-23b8-47c7-be48-133ade3e6559",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "8a285018-3dd1-4dae-a325-002f1d2d754c",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 15,
                    "Title": "ГКЛ стены под окраску"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "78be67d0-9002-402e-b929-f357992e83ca",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 82,
                "Title": "Окраска стен водоэмульсионными составами Тиккурила за 2 раза Ral 9003",
                "fldMTP": "Водоэмульсионная краска Тиккурила Ral 9003",
                "fldNote": null,
                "fldDivisionId": 15,
                "fldUpDivisionId": 3,
                "ID": 82
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(83)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(83)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "795d8ca3-4824-4edb-9657-f4197ecefdc6",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "717b92c2-21d6-4876-b3bb-e2d59c834b98",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 15,
                    "Title": "ГКЛ стены под окраску"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "d73a4c69-ce6c-46bb-b972-b0e8f6b85e92",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 83,
                "Title": "Устройство радиаторной решетки 1200*600",
                "fldMTP": "Радиаторная решетка 600х1200",
                "fldNote": null,
                "fldDivisionId": 15,
                "fldUpDivisionId": 3,
                "ID": 83
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(84)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(84)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "9ee8f2bb-9f0f-4804-b6c9-a7c7b53e1ca5",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "05d36bea-bdea-4104-8705-87a0fa77e943",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 16,
                    "Title": "Потолок"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "f1170219-d31e-464d-b05c-ff0b30056eb3",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 84,
                "Title": "Устройство подвесного потолка \"Армстронг\" 600*600  по каркасу из оцинкованного профиля",
                "fldMTP": "Панели потолочные с коплекттующими: \"Армстронг\"",
                "fldNote": null,
                "fldDivisionId": 16,
                "fldUpDivisionId": 3,
                "ID": 84
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(85)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(85)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "5eda1b5e-f7a0-45c8-940a-54b8dc177a00",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "bfc8bc5b-b122-4e27-82db-c044eab31c3e",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 17,
                    "Title": "Полы (линолеум)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "65a59e02-b28c-4924-94a9-631261de3d91",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 85,
                "Title": "Устройство цементной стяжки толщ.50мм",
                "fldMTP": "Раствор готовый цементный марки 150",
                "fldNote": null,
                "fldDivisionId": 17,
                "fldUpDivisionId": 3,
                "ID": 85
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(86)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(86)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "4101c3fb-fe16-4fac-b874-57e69b81b765",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "89d05818-7d99-4d7a-bd32-c83e59f50216",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 17,
                    "Title": "Полы (линолеум)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "5225fcd9-6f94-40b7-8456-61ba3ef5d069",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 86,
                "Title": "Грунтовка цементной стяжки грунтовкой глубокого проникновения за 1 раз",
                "fldMTP": "Грунтовка для внутренних работ Оптимист ",
                "fldNote": null,
                "fldDivisionId": 17,
                "fldUpDivisionId": 3,
                "ID": 86
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(87)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(87)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "4ecd6a1b-0cbf-427b-9173-cf6cb469b5af",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "b3620531-d460-488c-9c23-63ba425015a0",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 17,
                    "Title": "Полы (линолеум)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "f399567c-29e4-4fd5-a9b0-b98af5c3cfb0",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 87,
                "Title": "Устройство покрытий пола из линолеума Tarket",
                "fldMTP": "Линолеум  коммерческий Tarket",
                "fldNote": null,
                "fldDivisionId": 17,
                "fldUpDivisionId": 3,
                "ID": 87
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(88)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(88)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "662b1b65-f7c2-4a7b-892b-f8b7118f1616",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м.п."
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "72c1ac97-fb38-44bd-8ce3-ca4039e5d559",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 17,
                    "Title": "Полы (линолеум)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "dc18785b-6298-4b9f-8057-414f83563aff",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 88,
                "Title": "Устройство плинтусов ПВХ на самонарезающих винтах",
                "fldMTP": "Плинтус ПВХ",
                "fldNote": null,
                "fldDivisionId": 17,
                "fldUpDivisionId": 3,
                "ID": 88
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(89)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(89)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "95685727-154a-4531-a4ce-67308c431405",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "тн"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "4acefaaf-562f-4665-8fc8-2349c247373c",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 17,
                    "Title": "Полы (линолеум)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "7112fad0-8be6-4f53-92b2-890cea1ca2f7",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 89,
                "Title": "Погрузка при автомобильных перевозках мусора строительного с погрузкой вручную",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 17,
                "fldUpDivisionId": 3,
                "ID": 89
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(90)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(90)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "14df939e-863d-493f-99b1-dc7ed9fe0e78",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "тн"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "e67be83c-aa88-4c0d-bcb9-1a232293d867",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 17,
                    "Title": "Полы (линолеум)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "e5571ca1-8d0c-4337-982b-933c5ccb82ae",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 90,
                "Title": "Перевозка груза Iкласса автомобилями бортовыми грузоподъемностью до 5тн на расстояние 18км",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 17,
                "fldUpDivisionId": 3,
                "ID": 90
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(91)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(91)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "6fe9f2ab-621c-4744-a777-69529b819929",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "f3532720-fd07-414d-bab6-f99209be0ebc",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 18,
                    "Title": "Полы (ламинат)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "dd370fd6-1c93-4a0e-9c4f-1664292c2c63",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 91,
                "Title": "Устройство цементной стяжки толщ.50мм",
                "fldMTP": "Раствор готовый цементный марки 150",
                "fldNote": null,
                "fldDivisionId": 18,
                "fldUpDivisionId": 3,
                "ID": 91
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(92)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(92)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "54b41f85-013e-474a-8834-37eb16a1825b",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "c086dcc7-c552-4470-90b8-d6e484f667e7",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 18,
                    "Title": "Полы (ламинат)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "5f0122a9-d9d2-47ed-8418-a16b7ee48808",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 92,
                "Title": "Грунтовка цементной стяжки грунтовкой глубокого проникновения за 1 раз",
                "fldMTP": "Грунтовка глубокого проникновения Ceresit СТ17",
                "fldNote": null,
                "fldDivisionId": 18,
                "fldUpDivisionId": 3,
                "ID": 92
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(93)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(93)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "c7238094-9e88-412f-96bd-aabf95a4636a",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "d8db8cee-4065-4790-9719-4fc051ee08cd",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 18,
                    "Title": "Полы (ламинат)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "756d7e81-326b-4e16-bb37-4a9bab1763f7",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 93,
                "Title": "Устройство покрытий пола из ламината кл.34 серого цвета",
                "fldMTP": "Подложка толщина 3 мм, ламинат серого цвета, кл.34, толщ. 8 мм",
                "fldNote": null,
                "fldDivisionId": 18,
                "fldUpDivisionId": 3,
                "ID": 93
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(94)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(94)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "185113d6-2935-485c-8934-95bb7f4ec48f",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м.п."
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "527003f1-1525-45af-8621-ca252f0a46a5",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 18,
                    "Title": "Полы (ламинат)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "d7b4ee34-b254-471a-8a13-343161065690",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 94,
                "Title": "Устройство плинтусов ПВХ на самонарезающих винтах",
                "fldMTP": "Плинтус ПВХ",
                "fldNote": null,
                "fldDivisionId": 18,
                "fldUpDivisionId": 3,
                "ID": 94
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(95)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(95)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "4287ef07-ed7a-4475-a10a-42d03fed4a20",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "тн"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "326a937c-dc19-4158-bb2e-863573668c24",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 18,
                    "Title": "Полы (ламинат)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "b97f3ec9-7dae-4803-b62b-058fef8349e9",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 95,
                "Title": "Погрузка при автомобильных перевозках мусора строительного с погрузкой вручную",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 18,
                "fldUpDivisionId": 3,
                "ID": 95
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(96)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(96)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "1122b9c9-a7b7-4887-bfde-fccb77909286",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "тн"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "3c1054b5-551f-47ac-ae32-15ad2a5a645c",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 18,
                    "Title": "Полы (ламинат)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "ca5bbb21-285d-478f-9391-4b72a11461fd",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 96,
                "Title": "Перевозка груза Iкласса автомобилями бортовыми грузоподъемностью до 5тн на расстояние 18км",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 18,
                "fldUpDivisionId": 3,
                "ID": 96
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(97)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(97)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "1649111f-b4c3-4194-884f-e7dade64358f",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "0b329112-e1a6-4e23-81fa-4399089a36d6",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 19,
                    "Title": "Полы (керамогранит)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "0ac807de-6f34-45f7-a347-60c1800019ab",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 97,
                "Title": "Устройство цементной стяжки толщ.50мм",
                "fldMTP": "Раствор готовый цементный марки 150",
                "fldNote": null,
                "fldDivisionId": 19,
                "fldUpDivisionId": 3,
                "ID": 97
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(98)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(98)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "5e273302-bf12-465b-b615-7ea64b07631d",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "92c9df61-0f53-4e4a-a44b-f67db8177608",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 19,
                    "Title": "Полы (керамогранит)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "b6b1922d-3af0-43f4-b164-1f604f68a810",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 98,
                "Title": "Грунтовка цементной стяжки грунтовкой глубокого проникновения за 1 раз",
                "fldMTP": "Грунтовка глубокого проникновения Ceresit СТ17",
                "fldNote": null,
                "fldDivisionId": 19,
                "fldUpDivisionId": 3,
                "ID": 98
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(99)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(99)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "bc0dcd04-8759-446b-a72f-ea3f55be5b4d",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "ddaa79fa-aa24-4f65-a608-66fc45dbaf87",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 19,
                    "Title": "Полы (керамогранит)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "2e359025-212b-465a-8d9a-d4e640989a60",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 99,
                "Title": "Устройство покрытий пола из керамогранита серого цвета Ral 7012",
                "fldMTP": "Керамогранит 600*600 серого цвета Ral7012",
                "fldNote": null,
                "fldDivisionId": 19,
                "fldUpDivisionId": 3,
                "ID": 99
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(100)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(100)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "2cf65e36-6ddd-43a0-a9f0-05122a480907",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "тн"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "51aba226-311b-4af1-94fb-8eefbea1eb18",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 19,
                    "Title": "Полы (керамогранит)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "907af603-e2be-4d43-bc06-d9671b24d3a5",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 100,
                "Title": "Погрузка при автомобильных перевозках мусора строительного с погрузкой вручную",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 19,
                "fldUpDivisionId": 3,
                "ID": 100
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(101)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(101)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "2e207fbc-9cf1-4e3d-9232-0a7712e40295",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "тн"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "394ae094-2c92-446d-b639-313492eb4026",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 19,
                    "Title": "Полы (керамогранит)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "5c598ff7-4490-4277-b0ea-99b82245b853",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 3,
                    "Title": "Внутренняя отделка помещений"
                },
                "Id": 101,
                "Title": "Перевозка груза Iкласса автомобилями бортовыми грузоподъемностью до 5тн на расстояние 18км",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 19,
                "fldUpDivisionId": 3,
                "ID": 101
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(102)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(102)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "4bf0415f-9c55-4b85-ab28-7df3163301d6",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м.п."
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "538560ff-57f7-48d5-a521-d8d630ab99b4",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 20,
                    "Title": "Полы бетонные"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "756f4e2d-ad28-48b4-aa89-90073861e877",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 4,
                    "Title": "Полы бетонные "
                },
                "Id": 102,
                "Title": "Нарезка швов",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 20,
                "fldUpDivisionId": 4,
                "ID": 102
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(103)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(103)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "76b922c6-0d1a-4524-9627-d0a62856d31e",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "ef68e960-7c62-4543-9de7-2b4dffc824b9",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 20,
                    "Title": "Полы бетонные"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "bc1d691b-1bcb-4269-826a-b3ff01a9f46f",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 4,
                    "Title": "Полы бетонные "
                },
                "Id": 103,
                "Title": "Демонтаж бетонного покрытия пола толщ.100мм",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 20,
                "fldUpDivisionId": 4,
                "ID": 103
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(104)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(104)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "9f9b2913-91c7-49a5-a8f2-9278b12197a2",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м3"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "b0f53cbf-2d4c-49c5-a340-78897e8b5af0",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 20,
                    "Title": "Полы бетонные"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "8f9ffb6f-d7be-487c-9956-b47df5237c61",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 4,
                    "Title": "Полы бетонные "
                },
                "Id": 104,
                "Title": "Устройство бетонных полов толщ.100 мм В 20 (М250)",
                "fldMTP": "Бетон тяжелый. крупность заполнителя 10 мм, кл.В20 (М250)",
                "fldNote": null,
                "fldDivisionId": 20,
                "fldUpDivisionId": 4,
                "ID": 104
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(105)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(105)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "6853ac86-4a20-41dc-9caf-11840d3e8f5f",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "тн"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "4ca0ee62-2bf7-4286-8a27-1d0e9282e181",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 20,
                    "Title": "Полы бетонные"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "48302ffd-e5f9-4c30-be52-e34f21b33156",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 4,
                    "Title": "Полы бетонные "
                },
                "Id": 105,
                "Title": "Погрузка при автомобильных перевозках мусора строительного с погрузкой вручную",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 20,
                "fldUpDivisionId": 4,
                "ID": 105
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(106)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(106)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "243a31da-02e6-4bc5-99ce-96968815bd4e",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "тн"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "1ffd70a0-2092-4577-978d-9e390fb9b9ea",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 20,
                    "Title": "Полы бетонные"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "9779c71a-ffc3-4449-bc36-bc5af224a998",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 4,
                    "Title": "Полы бетонные "
                },
                "Id": 106,
                "Title": "Перевозка груза Iкласса автомобилями бортовыми грузоподъемностью до 5тн на расстояние 18км",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 20,
                "fldUpDivisionId": 4,
                "ID": 106
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(107)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(107)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "5174bc0f-5289-4939-9f12-480020d0cec5",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м.п."
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "bbb29692-8239-4974-b80e-cdfaaec25a70",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Демонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "e43b06cb-7575-444f-b3ef-496da3c46ccc",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 5,
                    "Title": "Электромонтажные работы"
                },
                "Id": 107,
                "Title": "Демонтаж кабеля освещения/силового",
                "fldMTP": "В дальнейшем не используется",
                "fldNote": null,
                "fldDivisionId": 1,
                "fldUpDivisionId": 5,
                "ID": 107
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(108)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(108)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "edaec03d-9d5d-4030-bbc0-1e900288eefa",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "e78b2032-548b-44b3-a9d7-9506ba3e7f59",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Демонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "8b78c9e7-a2fd-40a5-b551-5b5cdd048b34",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 5,
                    "Title": "Электромонтажные работы"
                },
                "Id": 108,
                "Title": "Демонтаж  распределительных коробок по стенам (указать размер)",
                "fldMTP": "В дальнейшем не используется",
                "fldNote": null,
                "fldDivisionId": 1,
                "fldUpDivisionId": 5,
                "ID": 108
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(109)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(109)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "3fb1dce7-5136-4e59-80b7-58a8742638c1",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м.п."
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "dc2ccc98-bb9d-4d27-ae35-e464b4aeeb49",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Демонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "7769cc57-0332-4f5e-b1b5-fa815d0f4cf4",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 5,
                    "Title": "Электромонтажные работы"
                },
                "Id": 109,
                "Title": "Демонтаж кабель каналов (размер)",
                "fldMTP": "В дальнейшем не используется",
                "fldNote": null,
                "fldDivisionId": 1,
                "fldUpDivisionId": 5,
                "ID": 109
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(110)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(110)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "4f481430-253d-4a0f-99d7-9165acd1f0cc",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м.п."
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "aae176fc-ff90-4008-92df-1572f569d2fb",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Демонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "6e0d5a37-b5e5-48b0-861d-832bfca8bc4a",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 5,
                    "Title": "Электромонтажные работы"
                },
                "Id": 110,
                "Title": "Демонтаж светильников люминесцентных",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 1,
                "fldUpDivisionId": 5,
                "ID": 110
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(111)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(111)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "78131fd3-0c2f-4f4a-a697-b7b09fcc9d44",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "4d1811e3-6cb4-4d4d-b37d-9f2d28884ef9",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Демонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "35800728-3369-4478-9d69-4ff39bb962ed",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 5,
                    "Title": "Электромонтажные работы"
                },
                "Id": 111,
                "Title": "Демонтаж электроразеток",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 1,
                "fldUpDivisionId": 5,
                "ID": 111
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(112)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(112)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "db15715b-759d-4087-906c-4da837848fae",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "1c01d2bc-44bd-477e-892a-16cf0dd08e0d",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Демонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "47332f50-14d1-4ca1-b674-f387a0d6879c",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 5,
                    "Title": "Электромонтажные работы"
                },
                "Id": 112,
                "Title": "Демонтаж электровыключателей",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 1,
                "fldUpDivisionId": 5,
                "ID": 112
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(113)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(113)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "c4715aef-645e-4397-8db0-b9ad5ccd0831",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "374c6931-be34-41bd-909b-50c5acefb5a8",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Демонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "10bba3d1-0c71-49ef-af86-cbdc9e8bdeeb",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 5,
                    "Title": "Электромонтажные работы"
                },
                "Id": 113,
                "Title": "Демонтаж дымовых  датчиков пожарной сигнализации и кабеля",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 1,
                "fldUpDivisionId": 5,
                "ID": 113
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(114)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(114)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "601ca3f7-eaca-4028-ac5d-e8b3fda0654d",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "418e218e-1aa9-488a-b146-9f498c865813",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Демонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "03fad715-142a-40d9-980a-370536ee8a35",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 5,
                    "Title": "Электромонтажные работы"
                },
                "Id": 114,
                "Title": "Демонтаж настенных светильников с лампой накаливания",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 1,
                "fldUpDivisionId": 5,
                "ID": 114
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(115)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(115)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "1f74e965-0c90-4b29-878f-e2ca34b235da",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "eb34328e-8d73-43d0-b238-f7d0f1d21190",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Демонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "14fec071-b1a0-4c7f-b0e8-e09ee80f299a",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 5,
                    "Title": "Электромонтажные работы"
                },
                "Id": 115,
                "Title": "Демонтаж светильников светодиодных",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 1,
                "fldUpDivisionId": 5,
                "ID": 115
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(116)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(116)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "21dc705c-4a09-4a11-bbaa-c55c1ce4b9a3",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "589bf731-a038-4d3a-b932-3bb3bb0a27ab",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Демонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "39548b55-e61e-44b7-b0a8-f0bed8dcd7dc",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 5,
                    "Title": "Электромонтажные работы"
                },
                "Id": 116,
                "Title": "Демонтаж светильников с лампами накаливания",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 1,
                "fldUpDivisionId": 5,
                "ID": 116
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(117)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(117)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "e5f0aed5-e3c9-4f8e-a16e-5bec8f33b7ea",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "кг"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "e5e6befa-5486-4c28-8d81-59f422240ef7",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Демонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "0347d572-8fb3-4072-ac37-a4912dca368b",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 5,
                    "Title": "Электромонтажные работы"
                },
                "Id": 117,
                "Title": "Демонтаж регистров отопления чугунных до (указать вес) кг",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 1,
                "fldUpDivisionId": 5,
                "ID": 117
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(118)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(118)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "dfb5de59-d3d5-4394-9b40-e33d2da3b3a8",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м.п."
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "c4593faa-ad7e-4bf7-a85b-d13d803c5365",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Демонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "37d813a4-dcb7-483f-a27e-cdde761e4f99",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 5,
                    "Title": "Электромонтажные работы"
                },
                "Id": 118,
                "Title": "Демонтаж труб отопления стальных на сварке",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 1,
                "fldUpDivisionId": 5,
                "ID": 118
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(119)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(119)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "c2a64a41-815d-4a2f-b0cb-1c88b94138a2",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "33e970f0-0ba3-47ff-ab2d-3823e1223a1a",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Демонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "401d4998-8208-42c4-8728-4c575786b57c",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 5,
                    "Title": "Электромонтажные работы"
                },
                "Id": 119,
                "Title": "Демонтаж пожарного табло с кабелем",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 1,
                "fldUpDivisionId": 5,
                "ID": 119
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(120)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(120)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "7f129691-5588-467d-9401-fefe0de5d90f",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м.п."
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "26f592b4-c250-40cf-b9c9-d1db993cea18",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Демонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "5e5793ba-d4fc-4de8-a79b-fe8cd08f43fb",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 5,
                    "Title": "Электромонтажные работы"
                },
                "Id": 120,
                "Title": "Демонтаж металлического лотка по стене (указать размер) мм",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 1,
                "fldUpDivisionId": 5,
                "ID": 120
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(121)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(121)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__deferred": {
                        "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(121)/fldUnits"
                    }
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "7d966255-30f2-40c3-b667-5ed796b81d79",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "234841ff-a5c7-4b3f-960e-dea873328ab5",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 5,
                    "Title": "Электромонтажные работы"
                },
                "Id": 121,
                "Title": "Прокладка кабеля освещения",
                "fldMTP": "Кабель силовой многожильный ВВГнг 2х1,5мм2/3х1,5мм2",
                "fldNote": "Кабель 1,02",
                "fldDivisionId": 6,
                "fldUpDivisionId": 5,
                "ID": 121
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(122)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(122)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "594b69cf-00ff-4624-8f7e-90952d95908f",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м.п."
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "93f47abb-d6c1-4bd1-acc2-51ad96b74ae4",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "9a4d570c-0043-48a3-be69-1c0ae2ee0b69",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 5,
                    "Title": "Электромонтажные работы"
                },
                "Id": 122,
                "Title": "Прокладка кабеля по стене за ГВЛ в гофротрубе",
                "fldMTP": "Кабель силовой многожильный ВВГнг 3х2,5мм2/3х1,5мм2\nТруба ПВХ гофрированные диаметром 20мм",
                "fldNote": "Кабель 1,02\nГофротруба 1,012",
                "fldDivisionId": 6,
                "fldUpDivisionId": 5,
                "ID": 122
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(123)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(123)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "978b9bde-86d8-4576-94d9-893b7714fff4",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м.п."
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "8fa325c0-a9b0-4fc8-b4e4-3ed3961c963e",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "b6940131-6b82-40f7-a65a-99f1b09702ed",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 5,
                    "Title": "Электромонтажные работы"
                },
                "Id": 123,
                "Title": "Прокладка кабеля по стене в кабель-канале",
                "fldMTP": "Кабель силовой многожильный ВВГнг 3х2,5мм2/3х1,5мм2\nКабель-канал ПВХ 20*10мм",
                "fldNote": "Кабель 1,02\nКабель-канал 1,02",
                "fldDivisionId": 6,
                "fldUpDivisionId": 5,
                "ID": 123
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(124)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(124)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "ff7bacb2-2a5e-4247-8b8e-732465f35299",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м.п."
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "d4ad1c44-6c25-4c43-8ba2-6beccb3fbc8b",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "2acc9556-849e-4540-8b69-b5905fbae4d2",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 5,
                    "Title": "Электромонтажные работы"
                },
                "Id": 124,
                "Title": "Прокладка кабеля по потолку в гофротрубе",
                "fldMTP": "Кабель силовой многожильный ВВГнг 3х2,5мм2/3х1,5мм2\nТруба ПВХ гофрированные диаметром 20мм",
                "fldNote": "Кабель 1,02\nГофротруба 1,012",
                "fldDivisionId": 6,
                "fldUpDivisionId": 5,
                "ID": 124
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(125)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(125)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "8ccf909a-8777-4f85-97e2-f5714b738060",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м.п."
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "b77708da-20a2-40c4-be76-017be91390a7",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "93d1134e-44cf-4e5c-a3f6-7dbf1439ff96",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 5,
                    "Title": "Электромонтажные работы"
                },
                "Id": 125,
                "Title": "Прокладка кабеля для пожарной сигнализации с монтажом датчиков",
                "fldMTP": "Кабель КСРВнг(А)-FRLS-2х2х0,8мм2\nИзвещатель пожарный дымовой ИПД-3.1М",
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 5,
                "ID": 125
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(126)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(126)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "e9f4d71b-520c-4c81-8268-1c49de77698f",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "fd8e2743-b71c-465b-b35e-be0563ebea4d",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "160d8113-c8c3-4c49-b9c7-d07055c6eb35",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 5,
                    "Title": "Электромонтажные работы"
                },
                "Id": 126,
                "Title": "Установка розеток, при скрытой/ открытой проводке IP20",
                "fldMTP": "двух постовых с заземлением ",
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 5,
                "ID": 126
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(127)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(127)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "919839b5-56be-447d-b191-6b2726cfa0f3",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "9a0a6fdd-e6a9-4193-8413-8002963c0a20",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "ee8972fb-dc08-4848-b35b-2e08b4a399f4",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 5,
                    "Title": "Электромонтажные работы"
                },
                "Id": 127,
                "Title": "Установка выключателей наружних при скрытой/открытой проводке IP20",
                "fldMTP": "двухклавишный",
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 5,
                "ID": 127
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(128)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(128)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "24a60564-daa7-46ea-8fc0-e4ec0d71e101",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "14aab128-0b42-4abd-bc62-8b1cdb53ff57",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "3145abd4-cb6b-4ee7-8cb2-9bacd08e220b",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 5,
                    "Title": "Электромонтажные работы"
                },
                "Id": 128,
                "Title": "Светильник потолочный или настенный с креплением винтами или болтами",
                "fldMTP": "Светильник Айсберг 72W, 8600LM, IP 65, 220V",
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 5,
                "ID": 128
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(129)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(129)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__deferred": {
                        "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(129)/fldUnits"
                    }
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "5258a43e-064d-4c8a-98c0-894c7e070021",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "44fd1c95-52f6-4087-867a-009be8ddeb54",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 5,
                    "Title": "Электромонтажные работы"
                },
                "Id": 129,
                "Title": "Монтаж распределительных коробок",
                "fldMTP": "Коробка распределительная TYCO 67040 наружная (для открытого монтажа) 85х85x40мм, IP54 (серая)",
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 5,
                "ID": 129
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(130)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(130)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "10b3a802-3a28-4e51-8e97-11eb3b25a9f1",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "кг"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "0c036bbb-33c8-4cbb-a0f2-70cff8406316",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Демонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "fbb5c4a1-c873-4ff8-ae85-d4cc89527ddd",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Отопление"
                },
                "Id": 130,
                "Title": "Демонтаж регистров отопления чугунных до (указать вес) кг",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 1,
                "fldUpDivisionId": 6,
                "ID": 130
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(131)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(131)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "d76b38b1-a2a6-4302-8c43-474b1cd8ecb9",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м.п."
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "ce9cdda7-d653-4e20-b94b-2449808cdce4",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 1,
                    "Title": "Демонтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "a082063e-0e24-4512-b26d-8f709c6abcf6",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Отопление"
                },
                "Id": 131,
                "Title": "Демонтаж труб отопления стальных на сварке",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 1,
                "fldUpDivisionId": 6,
                "ID": 131
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(132)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(132)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "29aff81c-4416-4716-854c-d6ddb9ac6612",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "00a7ae72-09b5-4537-8346-d525018646a5",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "6721d569-7e67-4ef6-8156-70246feed97e",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Отопление"
                },
                "Id": 132,
                "Title": "Установка радиаторов:  с установкой кранов воздушных (воздухоотводчиков) и  кранов проходных",
                "fldMTP": "Алюминиевые с полимерным покрытием Extra Therm 500, Nova Florida 10 секций-1 шт., кран шаровой Itar 20мм -1 шт.Краны воздушные для радиаторов диаметром 20 мм - 1 шт; комплект терморегулятора Danfoss прямой, однотрубная система Ду 20, RA-G/RA 2940 - 1 комп.кронштейн - 2 шт.",
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 6,
                "ID": 132
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(133)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(133)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "50fc9b08-1b3a-4c30-a972-24ac16d9ad50",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м.п."
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "042c7a57-4dc5-491a-ab4f-d9a5ef118c25",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "e75f6fab-8d96-47e7-ae66-5d92bbeb9c96",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Отопление"
                },
                "Id": 133,
                "Title": "Прокладка трубопроводов  отопления металлических, диам. 32 мм/Прокладка трубопроводов отопления из ПП",
                "fldMTP": "Трубы стальный неоцинкованные диаметром 32 мм/Трубы ПП диаметром 32мм",
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 6,
                "ID": 133
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(134)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(134)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "8559f226-b910-4816-914e-d8026ad3d825",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м.п."
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "24f4169d-e7a7-496a-80fc-70e173a77da8",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "71c57fe5-37e0-4aec-aa48-f9a2fcc80961",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Отопление"
                },
                "Id": 134,
                "Title": "Устройство байпаса из трубопровода диам. 25мм.",
                "fldMTP": "Трубы стальный неоцинкованные диаметром 32 мм/Трубы ПП диаметром 32мм",
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 6,
                "ID": 134
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(135)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(135)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "580c0e8d-3c29-461b-b5c1-d041a4016e4e",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м.п."
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "4b86419b-ca48-4323-a38d-f2d21a12107a",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "0b88882f-2f1e-418f-bb62-aa23813b3b04",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Отопление"
                },
                "Id": 135,
                "Title": "Окраска водогазопроводных труб за 2 раза неоцинкованных, ранее неокрашенных/ окрашенных",
                "fldMTP": "краска КО-174",
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 6,
                "ID": 135
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(136)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(136)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "ab476464-668a-43c1-aa94-3fb5881f15a4",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "9a0c6d24-8e15-43e9-b2d5-10a5e9c2237b",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "75c2cf2a-5346-4958-9d31-2bd68c3cbca2",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Отопление"
                },
                "Id": 136,
                "Title": "Окраска трубопроводов отопления стальных за 2 раза",
                "fldMTP": "Эмаль (термоэмаль) для радиаторов алкид белая п/мат. Лакра",
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 6,
                "ID": 136
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(137)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(137)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "ca6a8232-830d-484a-aae0-7040d18fd2be",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "287e19a0-5ea3-49aa-acab-e95fca3131b2",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "93c25d8a-48cc-4d8d-91ab-bbf994964d84",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Отопление"
                },
                "Id": 137,
                "Title": "Установка сант. лючка из ПВХ/Металлического",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 6,
                "ID": 137
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(138)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(138)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "55fa3cee-f366-4d77-8c65-42cd471404f0",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "20f5c9ef-19e0-4ccc-ae58-b6ab95f3dbc9",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "a1caef0b-3ee4-482e-a0e5-5f06d3b85dba",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Отопление"
                },
                "Id": 138,
                "Title": "Установка раковины",
                "fldMTP": "Умывальник с пьедесталом «SANITA Эталон», водосливная арматура",
                "fldNote": " 0,15кг/м2/1раз",
                "fldDivisionId": 6,
                "fldUpDivisionId": 6,
                "ID": 138
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(139)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(139)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "381a798e-57ed-4b62-b724-ce0ee2751fc7",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "db930d05-913a-4238-9ec1-6554c0ad9426",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "19e674c4-0f7b-4a3b-850a-3c712b604841",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Отопление"
                },
                "Id": 139,
                "Title": "Установка смесителей",
                "fldMTP": "Смеситель Сева Дуо VIDIMA (В9759АА), подводка 40см",
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 6,
                "ID": 139
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(140)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(140)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "95d0cc27-225d-4c94-b7fb-14103dc7f0a0",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "7c90e2f4-065f-4e3b-93e5-b23b5907010c",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "0b917a85-44da-4707-9df0-6c325e762f4b",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Отопление"
                },
                "Id": 140,
                "Title": "Установка смесителей для душа",
                "fldMTP": "Набор душевой VIDIMA СеваДжет ВА190АА",
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 6,
                "ID": 140
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(141)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(141)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "bc928e6a-ff11-4fc4-96e5-a4888b0e4f97",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "c479f60d-c24d-48d3-aa31-a67119a1e8c4",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "cb09300d-5622-4df2-8ebb-305eebf6fe37",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Отопление"
                },
                "Id": 141,
                "Title": "Установка унитаза с бочком",
                "fldMTP": "Унитаз-компакт «SANITA Эталон»",
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 6,
                "ID": 141
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(142)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(142)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "a39faa78-1010-4b0d-b710-b6e3332f530e",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "684797ad-26aa-4949-9a03-a401f25a89ff",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "8ec4a7a2-4d3f-4937-b601-1a70fd5fb44c",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 5,
                    "Title": "Электромонтажные работы"
                },
                "Id": 142,
                "Title": "Прокладка труб канализационных полиэтиленовых 50 мм",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 5,
                "ID": 142
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(143)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(143)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "9b94272e-ef71-4eca-99d3-a8818b50b023",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "425426c0-c3b1-49da-bba8-f4af241c1011",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "10069725-a254-45e0-b442-3ddf48245678",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Отопление"
                },
                "Id": 143,
                "Title": "Устройство трапа 250х250",
                "fldMTP": "Трап чугунный эмалированный с решеткой",
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 6,
                "ID": 143
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(144)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(144)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "25a46989-f8ad-43c4-98a7-178d5aee4fbb",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м.п."
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "ded51695-39c3-41fe-b1fb-ecd2ecae8d38",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "9835f40d-a372-47b5-8267-da5bf713685e",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Отопление"
                },
                "Id": 144,
                "Title": "Изоляция трубопроводов",
                "fldMTP": "Труба K-Flex ST (d=…), Скотч K-Flex ST ПВХ черный (38мм*25м)",
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 6,
                "ID": 144
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(145)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(145)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "5ac1c3c8-63d8-4980-9b5f-91db8ff1b0ac",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м.п."
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "f07b71b4-d990-4c5d-b93f-fbbc2daab9df",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Монтажные работы"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "d55107fd-da7a-4e6b-b4a8-53dacf25aa27",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 6,
                    "Title": "Отопление"
                },
                "Id": 145,
                "Title": "Прокладка трубопроводов отопления из ПП, диам…..мм",
                "fldMTP": "Трубы ПП диаметром 32мм,Крепления для полипропиленовых труб -Клипсы (….шт, вентиль полипропиленовый(ДУ 25/32/40/50мм)- шт, Фланцевые бурты (втулки)-Ду 40/50мм - шт, Крестовина полипропиленовая- ДУ 20/25/32, Соединительные муфты ППР- ДУ 20/25/32, Переходные муфты ППР -ДУ 20/25/32,Переходные тройники- 20x25x20мм/25x20x20мм/32x20x20мм/ 32x25x25мм,Угольники под 45 градусов - ДУ 20/25/32,Угольники 90° - ДУ 20/25/32, Угольники переходные 90° (Вн/Вн и Вн/Нр) - 25-20/32-20/32-25, Установочные угольники с креплением на стену - 20-1/2\"/25-1/2\"",
                "fldNote": null,
                "fldDivisionId": 6,
                "fldUpDivisionId": 6,
                "ID": 145
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(146)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(146)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "4c4cfd7c-de9c-4ec2-9db6-44947a0865f1",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м3"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "418fe0a2-4369-4e00-b8f0-01e17e8dca36",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 21,
                    "Title": "Ремонт дорожного покрытия (бетон)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "9a7b7fbf-a705-4a0f-9e40-1941496eaa40",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 7,
                    "Title": "Ремонт дорожного покрытия (бетон)"
                },
                "Id": 146,
                "Title": "Демонтаж бетонного покрытия отбойными молотками",
                "fldMTP": "Бой бетона",
                "fldNote": null,
                "fldDivisionId": 21,
                "fldUpDivisionId": 7,
                "ID": 146
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(147)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(147)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "d075f1c7-74ca-4f6c-a4a6-08befec8b1f3",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "44d070aa-37b9-4e40-af05-8c9fd7caebb9",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 21,
                    "Title": "Ремонт дорожного покрытия (бетон)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "092ce478-7114-40d3-af2f-84bfd9b7be67",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 7,
                    "Title": "Ремонт дорожного покрытия (бетон)"
                },
                "Id": 147,
                "Title": "Устройство армокаркаса с приваркой к существующему",
                "fldMTP": "Сетка Арматура Д14 яч.200*200",
                "fldNote": null,
                "fldDivisionId": 21,
                "fldUpDivisionId": 7,
                "ID": 147
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(148)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(148)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "e1dfa3a5-ef85-4788-a331-a661bc23de28",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "15b446e6-f181-42f6-9882-84cfd947e546",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 21,
                    "Title": "Ремонт дорожного покрытия (бетон)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "df59615f-bc96-480a-befc-35b33e202cf2",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 7,
                    "Title": "Ремонт дорожного покрытия (бетон)"
                },
                "Id": 148,
                "Title": "Устройство армокаркаса с приваркой к существующему",
                "fldMTP": "Электроды",
                "fldNote": null,
                "fldDivisionId": 21,
                "fldUpDivisionId": 7,
                "ID": 148
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(149)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(149)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "5795f3cc-789c-414c-b22e-77dcb7bb4a0f",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "65f4032e-ac4e-4763-866b-76c914b6bfba",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 21,
                    "Title": "Ремонт дорожного покрытия (бетон)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "3b568cf7-72e6-4098-9185-a52f73a407a0",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 7,
                    "Title": "Ремонт дорожного покрытия (бетон)"
                },
                "Id": 149,
                "Title": "Устройство опалубки",
                "fldMTP": "Материалы заказчика",
                "fldNote": null,
                "fldDivisionId": 21,
                "fldUpDivisionId": 7,
                "ID": 149
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(150)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(150)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "d357e17f-1bf8-45d0-9146-3373e264a2b9",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м3"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "27943c5f-e50c-473f-a4ba-6cf7a85264df",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 21,
                    "Title": "Ремонт дорожного покрытия (бетон)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "257922a5-567e-4802-a366-c295c0487768",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 7,
                    "Title": "Ремонт дорожного покрытия (бетон)"
                },
                "Id": 150,
                "Title": "Бетонирование бетонного покрытия",
                "fldMTP": "бетон В30 W6",
                "fldNote": null,
                "fldDivisionId": 21,
                "fldUpDivisionId": 7,
                "ID": 150
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(151)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(151)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "e2c5921f-1466-4fa1-9780-b23edba938fa",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "c7d8b859-e260-49c7-83d2-8b518e873aa9",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 21,
                    "Title": "Ремонт дорожного покрытия (бетон)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "c9c2803d-4c8c-44ce-b493-28bb283b48d6",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 7,
                    "Title": "Ремонт дорожного покрытия (бетон)"
                },
                "Id": 151,
                "Title": "Демонтаж опалубки",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 21,
                "fldUpDivisionId": 7,
                "ID": 151
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(152)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(152)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "8ba7b227-9d45-4555-b790-6955e0a7c1dc",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "4ebba320-7886-4c02-9351-bcc490390ddd",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 22,
                    "Title": "Кондиционирование"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "54af48ac-c77e-4b9a-90c3-6b7a44571b20",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 8,
                    "Title": "Кондиционирование"
                },
                "Id": 152,
                "Title": "Монтаж шкафа навесного",
                "fldMTP": "Бокс ЩРН-П-24 модуля навесной пластик IP41 IEK Артикул: MKP12-N-24-40-10",
                "fldNote": null,
                "fldDivisionId": 22,
                "fldUpDivisionId": 8,
                "ID": 152
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(153)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(153)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "419407e6-b987-476a-ab05-3c16378d74d2",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "041263a2-d188-4455-ba96-7cae4871acb9",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 22,
                    "Title": "Кондиционирование"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "aed232ea-cb3e-4fe3-ac1a-154567a788ee",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 8,
                    "Title": "Кондиционирование"
                },
                "Id": 153,
                "Title": "Монтаж шкафа навесного",
                "fldMTP": "Ограничитель на дин-рейку YXD10",
                "fldNote": null,
                "fldDivisionId": 22,
                "fldUpDivisionId": 8,
                "ID": 153
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(154)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(154)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "dd500fe6-f804-4bf7-aa40-d4838584f8f8",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "b55488c0-3af8-4f04-a780-4af43cec65ec",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 22,
                    "Title": "Кондиционирование"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "4bbe8597-d97c-411d-9cdf-571fcff325f0",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 8,
                    "Title": "Кондиционирование"
                },
                "Id": 154,
                "Title": "Установка автоматического выключателя 32 А",
                "fldMTP": "Автоматический выключатель ВА47-29 3Р С 32А  MVA20-3-032-C",
                "fldNote": null,
                "fldDivisionId": 22,
                "fldUpDivisionId": 8,
                "ID": 154
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(155)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(155)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "9dc08ece-0418-4872-8472-9c363c2226bb",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "34fcfa8d-3d0c-4e57-b150-0fd045e404ce",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 22,
                    "Title": "Кондиционирование"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "2f6f9f7e-5776-4b76-a506-fc5a92c2fff5",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 8,
                    "Title": "Кондиционирование"
                },
                "Id": 155,
                "Title": "Установка автоматического выключателя до 25А",
                "fldMTP": "Автоматический выключатель ВА47-29 1Р С 16А  MVA20-1-016-C",
                "fldNote": null,
                "fldDivisionId": 22,
                "fldUpDivisionId": 8,
                "ID": 155
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(156)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(156)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "b0109b27-36d7-4364-9a5b-067e4259d78c",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "2bd7272f-b778-4da4-b280-cf81d0e22816",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 22,
                    "Title": "Кондиционирование"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "d27796f2-19fc-4392-8bea-e8d6a2b59a5d",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 8,
                    "Title": "Кондиционирование"
                },
                "Id": 156,
                "Title": "Установка автоматического выключателя до 25А",
                "fldMTP": "Автоматический выключатель ВА47-29 1Р С 10А MVA20-1-010-C",
                "fldNote": null,
                "fldDivisionId": 22,
                "fldUpDivisionId": 8,
                "ID": 156
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(157)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(157)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "81fb8296-546b-4d18-8cd0-448922a4dafb",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "4cec3ecf-19bb-4797-82c8-5a3dd8b3cb8b",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 22,
                    "Title": "Кондиционирование"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "abacd857-c1fb-44a9-ad6c-af72409628c3",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 8,
                    "Title": "Кондиционирование"
                },
                "Id": 157,
                "Title": "Прокладка провода по панелям шкафа",
                "fldMTP": "Провод ПУГВ 1*6 белый",
                "fldNote": null,
                "fldDivisionId": 22,
                "fldUpDivisionId": 8,
                "ID": 157
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(158)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(158)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "166ef697-a2d7-4b10-b4ce-4e5580e0223a",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "43e20107-8349-44d8-b047-e316a4b0e093",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 22,
                    "Title": "Кондиционирование"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "0b78a9e7-05c2-4e04-8acc-8a5195bf2215",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 8,
                    "Title": "Кондиционирование"
                },
                "Id": 158,
                "Title": "Прокладка провода по панелям шкафа",
                "fldMTP": "Наконечник штыревой НШВИ 6,0 мм",
                "fldNote": null,
                "fldDivisionId": 22,
                "fldUpDivisionId": 8,
                "ID": 158
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(159)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(159)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "c7b63f7c-b3be-484b-abcc-21a4ab75037b",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "469caed1-9639-424c-a143-194872387aaf",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 22,
                    "Title": "Кондиционирование"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "7ff331f6-3293-4adc-98bb-4ce25851f369",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 8,
                    "Title": "Кондиционирование"
                },
                "Id": 159,
                "Title": "Прокладка провода по панелям шкафа",
                "fldMTP": "Бирка кабельная У-134 квадрат",
                "fldNote": null,
                "fldDivisionId": 22,
                "fldUpDivisionId": 8,
                "ID": 159
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(160)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(160)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "0936c45f-f9f9-4622-b868-0c65cce410d2",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "e49c1091-aa2d-4a43-9d7f-b2aedb9e6994",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 22,
                    "Title": "Кондиционирование"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "d0e59354-ead5-4c02-a6d5-171049c15498",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 8,
                    "Title": "Кондиционирование"
                },
                "Id": 160,
                "Title": "Установка соединительной шины",
                "fldMTP": "Шина соединительная 3Р 63А 12 модулей IEK  YNS21-3-063-22-12",
                "fldNote": null,
                "fldDivisionId": 22,
                "fldUpDivisionId": 8,
                "ID": 160
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(161)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(161)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "c0f56ec7-b73f-4a8c-8086-a2e8154c28d2",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "6f81863f-2039-4eb1-918a-03ac7647b5ae",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 22,
                    "Title": "Кондиционирование"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "08c8d2a2-f221-4b37-804c-3cb4be0ea78d",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 8,
                    "Title": "Кондиционирование"
                },
                "Id": 161,
                "Title": "Монтаж кабель-канала",
                "fldMTP": "01780 Кабель- канал 60х40 TA-GN IN-Liner",
                "fldNote": null,
                "fldDivisionId": 22,
                "fldUpDivisionId": 8,
                "ID": 161
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(162)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(162)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "9ab777e0-37ff-4175-9707-87dee4a90686",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "86591df4-c7e5-477e-86a4-9b892ec40f37",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 22,
                    "Title": "Кондиционирование"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "bd4f5430-b9bb-4e09-b042-b96f16d6b1c8",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 8,
                    "Title": "Кондиционирование"
                },
                "Id": 162,
                "Title": "Монтаж кабель-канала",
                "fldMTP": "01739 Угол плоский Г-образный 60x40 NPAN IN-Liner",
                "fldNote": null,
                "fldDivisionId": 22,
                "fldUpDivisionId": 8,
                "ID": 162
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(163)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(163)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "a809e2b5-b4e7-4b7e-8059-7f13d7da0d54",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "453c3288-e8d6-4c7b-a3fa-b8c7e0ae2952",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 22,
                    "Title": "Кондиционирование"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "6855a895-1af9-48e4-963d-386272cd2e5a",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 8,
                    "Title": "Кондиционирование"
                },
                "Id": 163,
                "Title": "Монтаж кабель-канала",
                "fldMTP": "00869 Заглушка для кабель-канала 60х40 торцевая LAN In-liner",
                "fldNote": null,
                "fldDivisionId": 22,
                "fldUpDivisionId": 8,
                "ID": 163
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(164)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(164)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "d8914eae-8507-4e6f-b1ee-4a56cfca9149",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "df25b307-1a0d-436e-9212-de0a73989751",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 22,
                    "Title": "Кондиционирование"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "c609cec7-39da-4f28-ba54-8b12974099c4",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 8,
                    "Title": "Кондиционирование"
                },
                "Id": 164,
                "Title": "Прокладка труб гофрированных",
                "fldMTP": "91925 Труба гофрированная ПВХ 25 мм с протяжкой легкая серая  ДКС",
                "fldNote": null,
                "fldDivisionId": 22,
                "fldUpDivisionId": 8,
                "ID": 164
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(165)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(165)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "d5b951d6-a4b4-432e-afbc-99cbde070af4",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "a8d755b8-65b9-4894-8a49-f8af6c2e393a",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 22,
                    "Title": "Кондиционирование"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "9e9a9f3e-91f4-4532-9f5c-02a1f9c02930",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 8,
                    "Title": "Кондиционирование"
                },
                "Id": 165,
                "Title": "Прокладка труб гофрированных",
                "fldMTP": "91920 Труба гофрированная ПВХ 20 мм с протяжкой легкая серая ДКС",
                "fldNote": null,
                "fldDivisionId": 22,
                "fldUpDivisionId": 8,
                "ID": 165
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(166)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(166)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "c3a9cfbc-5492-4dea-af26-355247655d49",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "c8a20076-ace7-4873-9c14-5044b30d2f0c",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 22,
                    "Title": "Кондиционирование"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "7368cb02-a98e-4b8d-be70-7205c43cab49",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 8,
                    "Title": "Кондиционирование"
                },
                "Id": 166,
                "Title": "Прокладка труб гофрированных",
                "fldMTP": "51025 Держатель с защелкой 25 мм для труб",
                "fldNote": null,
                "fldDivisionId": 22,
                "fldUpDivisionId": 8,
                "ID": 166
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(167)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(167)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "7311790f-b8e2-4495-962e-6d4d152cd218",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "8ba7a23f-413c-414b-8731-0aa6da297cd4",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 22,
                    "Title": "Кондиционирование"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "e040c4a5-ed85-403a-92e3-83f74d4ae523",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 8,
                    "Title": "Кондиционирование"
                },
                "Id": 167,
                "Title": "Прокладка труб гофрированных",
                "fldMTP": "51020 Держатель с защелкой 20 мм для труб",
                "fldNote": null,
                "fldDivisionId": 22,
                "fldUpDivisionId": 8,
                "ID": 167
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(168)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(168)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "6efcafa4-fe81-4069-8e59-920aa8c49a31",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "668ed583-c09a-4f86-b675-6ab6b3799898",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 22,
                    "Title": "Кондиционирование"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "8d61be88-acf8-4807-982d-312c5b0957d4",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 8,
                    "Title": "Кондиционирование"
                },
                "Id": 168,
                "Title": "Прокладка труб гофрированных",
                "fldMTP": "Дюбель универсальный 6*52",
                "fldNote": null,
                "fldDivisionId": 22,
                "fldUpDivisionId": 8,
                "ID": 168
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(169)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(169)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "0b0da1ea-707c-49ff-b7cb-b2c8dd506691",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "c7d3aec2-4e47-40eb-b781-8aba2d74e906",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 22,
                    "Title": "Кондиционирование"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "88d2c48b-6b90-45d1-ad44-5ea2e88c0fb9",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 8,
                    "Title": "Кондиционирование"
                },
                "Id": 169,
                "Title": "Прокладка труб гофрированных",
                "fldMTP": "Саморез универсальный потайной 4,5х50",
                "fldNote": null,
                "fldDivisionId": 22,
                "fldUpDivisionId": 8,
                "ID": 169
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(170)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(170)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "e961ae34-12f7-439c-8a6d-62fb33600ba1",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "25bf9c72-e792-452f-aada-3ae207523507",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 22,
                    "Title": "Кондиционирование"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "87763b5b-9b4b-4b2b-9fa3-950089e0be74",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 8,
                    "Title": "Кондиционирование"
                },
                "Id": 170,
                "Title": "Затягивание кабеля в кабель-канал",
                "fldMTP": "Кабель ВВГнг -LS 5*6 Кабэкс",
                "fldNote": null,
                "fldDivisionId": 22,
                "fldUpDivisionId": 8,
                "ID": 170
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(171)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(171)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "9d75dc8f-e51c-4d92-9e99-dc7971779d26",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "56c6b107-0b98-4f32-a97e-d4fbedc71b22",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 22,
                    "Title": "Кондиционирование"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "8fc2f4c5-ac5e-4c56-89fd-ee90b0c7053d",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 8,
                    "Title": "Кондиционирование"
                },
                "Id": 171,
                "Title": "Затягивание кабеля в кабель-канал",
                "fldMTP": "Кабель ВВГнг -LS 3*2,5 Кабэкс",
                "fldNote": null,
                "fldDivisionId": 22,
                "fldUpDivisionId": 8,
                "ID": 171
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(172)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(172)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "23eb5693-5183-4e72-a844-b07581a3977b",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "9e68867b-0f31-4912-b6d1-fec653d6b8ec",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 22,
                    "Title": "Кондиционирование"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "4b54f2d7-0d7e-44ce-abc0-a8ebc9526484",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 8,
                    "Title": "Кондиционирование"
                },
                "Id": 172,
                "Title": "Затягивание кабеля в гофру",
                "fldMTP": "Кабель ВВГнг -LS 5*6 Кабэкс",
                "fldNote": null,
                "fldDivisionId": 22,
                "fldUpDivisionId": 8,
                "ID": 172
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(173)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(173)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "f375e266-507b-4616-b48e-f7096e096e31",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "0f8ae162-904b-4003-9e76-fb3593a3c6ef",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 22,
                    "Title": "Кондиционирование"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "c0c9b7ee-ac0e-4982-a21e-4e1309bcc613",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 8,
                    "Title": "Кондиционирование"
                },
                "Id": 173,
                "Title": "Затягивание кабеля в гофру",
                "fldMTP": "Кабель ВВГнг -LS 3*2,5 Кабэкс",
                "fldNote": null,
                "fldDivisionId": 22,
                "fldUpDivisionId": 8,
                "ID": 173
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(174)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(174)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "cc8acb43-f42b-49e2-8873-7a45dd3bcaea",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "be4841dd-9869-485d-8d48-2c041447b5ea",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 22,
                    "Title": "Кондиционирование"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "3cbd83f2-17e4-4a85-9616-996b8ba974b9",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 8,
                    "Title": "Кондиционирование"
                },
                "Id": 174,
                "Title": "Разделка кабеля 5*6 мм2",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 22,
                "fldUpDivisionId": 8,
                "ID": 174
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(175)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(175)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "66d5c938-2a64-4988-84ca-866da720a553",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "2221ff9c-c09c-4911-b017-7f8b408e0289",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 22,
                    "Title": "Кондиционирование"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "87253fdd-e5e7-4056-b519-1cdafb0a3fcf",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 8,
                    "Title": "Кондиционирование"
                },
                "Id": 175,
                "Title": "Разделка кабеля 3*2,5 мм2",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 22,
                "fldUpDivisionId": 8,
                "ID": 175
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(176)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(176)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "cba5c329-b1e7-4010-8ab4-c0ca7f6460c3",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "8f4a59d4-7c84-48b4-a2a9-cf07224ebbc5",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 22,
                    "Title": "Кондиционирование"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "4444006f-c8ec-4ff9-a2da-a4ead854f5bd",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 8,
                    "Title": "Кондиционирование"
                },
                "Id": 176,
                "Title": "Разборка и обратная установка плит подвесного потолка",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 22,
                "fldUpDivisionId": 8,
                "ID": 176
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(177)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(177)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "035c2cc1-645d-4c3d-a64c-77df24a7445a",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "53f39462-6edd-4b1e-8de2-a5c9f3c64189",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 22,
                    "Title": "Кондиционирование"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "d1027513-d4d0-4bb5-bf77-47b4be744001",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 8,
                    "Title": "Кондиционирование"
                },
                "Id": 177,
                "Title": "Пробивка отверстий в кирпичных стенах, диаметр отверстия 25 мм",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 22,
                "fldUpDivisionId": 8,
                "ID": 177
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(178)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(178)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "8709efaf-391f-4cb5-a10a-27b0798fe5ce",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "f44b7e0f-1f00-4ad7-a66f-7b9d9dcb5de9",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 22,
                    "Title": "Кондиционирование"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "7d76f572-79cd-4f83-84c8-e0a932162dd1",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 8,
                    "Title": "Кондиционирование"
                },
                "Id": 178,
                "Title": "Установка гильз для прохода кабелей сквозь стены",
                "fldMTP": "63925 Труба гладкая жесткая ПВХ 25 мм легкая серая",
                "fldNote": null,
                "fldDivisionId": 22,
                "fldUpDivisionId": 8,
                "ID": 178
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(179)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(179)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "63533a6f-e181-4e16-9278-ad52432c09bf",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "8f972ca4-813d-486b-a450-d62560710149",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 22,
                    "Title": "Кондиционирование"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "abebb102-58b5-4756-8ecb-a10bef775822",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 8,
                    "Title": "Кондиционирование"
                },
                "Id": 179,
                "Title": "Герметизация проходов",
                "fldMTP": "Пена монтажная противопожарная 880 мл",
                "fldNote": null,
                "fldDivisionId": 22,
                "fldUpDivisionId": 8,
                "ID": 179
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(180)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(180)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "c2e5eeda-1d45-4998-b924-cbcf3c1da922",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "aae07a05-6c05-40b9-ae6d-3c1abac040c3",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 23,
                    "Title": "ПНР"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "a76d7235-8b73-4ce8-8a45-a3686d55be07",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 8,
                    "Title": "Кондиционирование"
                },
                "Id": 180,
                "Title": "Прогрузка автоматических выключателей",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 23,
                "fldUpDivisionId": 8,
                "ID": 180
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(181)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(181)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "a96c71f0-20d1-4b85-828b-b8148952f6dc",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "линия"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "2ea75f99-b1b7-4117-ade8-9c1cc3d0cac0",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 23,
                    "Title": "ПНР"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "dbb62d4c-5de2-4c81-90d8-40bddece8eb0",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 8,
                    "Title": "Кондиционирование"
                },
                "Id": 181,
                "Title": "Измерение сопротивления изоляции мегаомметром",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 23,
                "fldUpDivisionId": 8,
                "ID": 181
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(182)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(182)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "c8c6bdf4-5b11-4acf-b652-6ba21ec7299d",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "точек"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "120c2d87-ebd8-4c18-a3ac-83f6e7f0c719",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 23,
                    "Title": "ПНР"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "b5b9037a-29ee-4542-981c-4ca5f26fc823",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 8,
                    "Title": "Кондиционирование"
                },
                "Id": 182,
                "Title": "Проверка наличия цепи между заземлителем и заземленными элементами",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 23,
                "fldUpDivisionId": 8,
                "ID": 182
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(183)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(183)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "80cbb3a5-0a4e-41d8-abec-d1d2ab00c546",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "34773a36-b138-43ed-b028-06c0733f6755",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 24,
                    "Title": "Освещение (наружное)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "488992f4-0412-4f70-aa94-51d42554f88e",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 9,
                    "Title": "Освещение (наружное)"
                },
                "Id": 183,
                "Title": "Установка настенных светильников",
                "fldMTP": "Светильник C-lux 10 10 Вт IP65",
                "fldNote": null,
                "fldDivisionId": 24,
                "fldUpDivisionId": 9,
                "ID": 183
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(184)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(184)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "a38f7085-6b37-42aa-8be8-26baa311a0e8",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "a3f65c56-1c99-493b-9d35-277cd3c3efd1",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 24,
                    "Title": "Освещение (наружное)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "ab3803df-6c5c-4e89-9adc-66ef4b6a2b07",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 9,
                    "Title": "Освещение (наружное)"
                },
                "Id": 184,
                "Title": "Установка фотоэлементов",
                "fldMTP": "Датчик освещенности-фотоэлемент 10 А белый, SEN26/LXР02 артикул 22008",
                "fldNote": null,
                "fldDivisionId": 24,
                "fldUpDivisionId": 9,
                "ID": 184
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(185)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(185)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "7cd9d2ad-3b50-453d-8399-e206ce9139e3",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "11a29f1a-75e2-4781-b30f-7aa937e22947",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 24,
                    "Title": "Освещение (наружное)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "2f86fde1-133b-42a1-bd26-b66d3862e630",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 9,
                    "Title": "Освещение (наружное)"
                },
                "Id": 185,
                "Title": "Прокладка труб гофрированных",
                "fldMTP": "91920 Труба гофрированная ПВХ 20 мм с протяжкой легкая серая",
                "fldNote": null,
                "fldDivisionId": 24,
                "fldUpDivisionId": 9,
                "ID": 185
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(186)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(186)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "b460abf8-d58f-443b-838b-6a7404edcd75",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "2810602b-d693-4104-b742-a017af3c50da",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 24,
                    "Title": "Освещение (наружное)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "c534792a-bf45-4ec4-9434-954c981e4c5a",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 9,
                    "Title": "Освещение (наружное)"
                },
                "Id": 186,
                "Title": "Прокладка труб гофрированных",
                "fldMTP": "Саморез с прессшайбой сверло 4,2*19",
                "fldNote": null,
                "fldDivisionId": 24,
                "fldUpDivisionId": 9,
                "ID": 186
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(187)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(187)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "46d85000-7bbd-4f8b-8d07-079085f77bc2",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "83eb4672-151a-4ba4-8ac9-2495c20165b6",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 24,
                    "Title": "Освещение (наружное)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "f267c8dd-0360-4bea-969f-c0b63d27e98b",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 9,
                    "Title": "Освещение (наружное)"
                },
                "Id": 187,
                "Title": "Затягивание кабеля в гофротрубу",
                "fldMTP": "Кабель ВВГнг-LS 3*1,5",
                "fldNote": null,
                "fldDivisionId": 24,
                "fldUpDivisionId": 9,
                "ID": 187
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(188)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(188)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "a6bc9d91-53c5-4a0c-9be0-3ea9389eabb1",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "e390ad87-2b15-4cc2-9581-564452f1f831",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 24,
                    "Title": "Освещение (наружное)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "e10b58d6-cf82-45fb-9aa5-c2daa6875744",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 9,
                    "Title": "Освещение (наружное)"
                },
                "Id": 188,
                "Title": "Затягивание кабеля в гофротрубу",
                "fldMTP": "Держатель для кабеля 2,6х200 белый ДКС",
                "fldNote": null,
                "fldDivisionId": 24,
                "fldUpDivisionId": 9,
                "ID": 188
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(189)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(189)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "1c6e3daa-8db4-45bb-bee2-a8f7d9537a51",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "b7f6f7ec-86e8-4763-b5cd-9481314736bf",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 24,
                    "Title": "Освещение (наружное)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "2cbfb42b-8852-4bca-a49e-dec6eb07afa7",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 9,
                    "Title": "Освещение (наружное)"
                },
                "Id": 189,
                "Title": "Затягивание кабеля в гофротрубу",
                "fldMTP": "Бирка кабельная У-134 квадратная",
                "fldNote": null,
                "fldDivisionId": 24,
                "fldUpDivisionId": 9,
                "ID": 189
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(190)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(190)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "f3fc4e08-5ae0-4821-8484-d93be25e9aa7",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "3c50ecf4-bbb4-4d5f-bc85-1f8a0e234ca4",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 24,
                    "Title": "Освещение (наружное)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "fb94d25f-d263-4536-aa5a-27cfead31c85",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 9,
                    "Title": "Освещение (наружное)"
                },
                "Id": 190,
                "Title": "Установка распределительной коробки",
                "fldMTP": "Коробка распределительная 70х70х40мм IP55 серая IMT35090",
                "fldNote": null,
                "fldDivisionId": 24,
                "fldUpDivisionId": 9,
                "ID": 190
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(191)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(191)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "39473418-615a-4c65-85cb-7a9730ac183f",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "ee2de9dc-d17b-419f-8ff1-f4a797212b5b",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 24,
                    "Title": "Освещение (наружное)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "ae5ff143-fd1b-4fd3-bb43-b37aaff242dc",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 9,
                    "Title": "Освещение (наружное)"
                },
                "Id": 191,
                "Title": "Установка распределительной коробки",
                "fldMTP": "Клеммная колодка 16мм (30А) Navigator NTB-UPE-S12-30/WH",
                "fldNote": null,
                "fldDivisionId": 24,
                "fldUpDivisionId": 9,
                "ID": 191
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(192)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(192)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "112bcc64-1131-4dca-8fe2-6b506e67851b",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "846fba94-e724-4a7a-8db5-ec749143d008",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 24,
                    "Title": "Освещение (наружное)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "4b71a9db-b4a4-4889-aace-4d901fb65467",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 9,
                    "Title": "Освещение (наружное)"
                },
                "Id": 192,
                "Title": "Снятие и установка потолочной плитки",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 24,
                "fldUpDivisionId": 9,
                "ID": 192
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(193)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(193)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "10cc8c96-75c9-4bbe-8411-742177187f07",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "63339b72-7b0f-44f4-8a98-6a771227f4a8",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 24,
                    "Title": "Освещение (наружное)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "c215afdc-4f1d-46fc-adbf-d1a3d073dd3b",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 9,
                    "Title": "Освещение (наружное)"
                },
                "Id": 193,
                "Title": "Пробивка отверстий в кирпичных стенах, диаметр 25  мм",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 24,
                "fldUpDivisionId": 9,
                "ID": 193
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(194)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(194)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "55df136b-c2d6-44bc-b674-6432fe241eac",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "6fd6afa0-8fc8-457e-9875-1813fc29a941",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 24,
                    "Title": "Освещение (наружное)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "5de059fb-eb0d-47bd-abe7-c0ffd362bdd4",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 9,
                    "Title": "Освещение (наружное)"
                },
                "Id": 194,
                "Title": "Установка гильз",
                "fldMTP": "63920 Труба гладкая жесткая ПВХ 20 мм легкая серая",
                "fldNote": null,
                "fldDivisionId": 24,
                "fldUpDivisionId": 9,
                "ID": 194
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(195)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(195)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "84c482ee-3f64-4bb0-b296-be1bdd3ec40d",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "шт"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "3fa950bf-5d15-4a5f-99cd-7532aa87c958",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 24,
                    "Title": "Освещение (наружное)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "f3ec56c1-06b5-45e2-9a91-abad7d4cd5fb",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 9,
                    "Title": "Освещение (наружное)"
                },
                "Id": 195,
                "Title": "Герметизация отверстий",
                "fldMTP": "Пена монтажная противопожарная 880 мл",
                "fldNote": null,
                "fldDivisionId": 24,
                "fldUpDivisionId": 9,
                "ID": 195
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(196)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(196)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "1811c2e0-f1a5-4f4c-977d-c4f8e122ae9b",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "линия"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "33ba3dcf-62ad-43db-92bf-8647e5d34c1d",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 23,
                    "Title": "ПНР"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "fe0de2f2-36a5-44da-9347-5b5d2e5cf8f4",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 9,
                    "Title": "Освещение (наружное)"
                },
                "Id": 196,
                "Title": "Измерение сопротивления изоляции кабельных линий",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 23,
                "fldUpDivisionId": 9,
                "ID": 196
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(197)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(197)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "9a80580d-0dbe-4f01-8527-651370c049d3",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "2cc911db-f44a-4ae2-9b4a-f0f1073379ed",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 25,
                    "Title": "Окраска фасада"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "eb5e0e5e-7e02-4317-9f4c-c9cf46546f6f",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 10,
                    "Title": "Окраска фасада"
                },
                "Id": 197,
                "Title": "Устройство и разборка инвентарных лесов",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 25,
                "fldUpDivisionId": 10,
                "ID": 197
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(198)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(198)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "87ad8f52-48b8-467b-9ea0-427a871cca6b",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "f1111fe3-16f5-4f13-876e-678912f53fc3",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 25,
                    "Title": "Окраска фасада"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "a598cbae-96cc-43e0-a6be-c2b2a232933d",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 10,
                    "Title": "Окраска фасада"
                },
                "Id": 198,
                "Title": "Отбивка старой штукатурки откосов оконных и дверных",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 25,
                "fldUpDivisionId": 10,
                "ID": 198
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(199)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(199)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "0cb7d512-c9a4-4d80-9335-9134d2d93571",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "98fc41d5-1e26-46c8-b618-bc7fabaddc33",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 25,
                    "Title": "Окраска фасада"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "aab9db1d-343f-4ac9-a10a-5f3d0dd360fb",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 10,
                    "Title": "Окраска фасада"
                },
                "Id": 199,
                "Title": "Грунтовка откосов  бетон контактом за 1 раз",
                "fldMTP": "грунт бетон контакт",
                "fldNote": null,
                "fldDivisionId": 25,
                "fldUpDivisionId": 10,
                "ID": 199
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(200)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(200)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "d88d7b6c-ea89-48fd-9f43-78008e9554e5",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "4e5bed27-f732-4551-8118-6f3bd33c1074",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 25,
                    "Title": "Окраска фасада"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "422ea02b-a98e-455d-9c79-8035ea411a8f",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 10,
                    "Title": "Окраска фасада"
                },
                "Id": 200,
                "Title": "Очистка поверхности фасада от перхлорвиниловых и масляных красок",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 25,
                "fldUpDivisionId": 10,
                "ID": 200
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(201)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(201)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "1d8c487d-2240-4632-b3cd-ce49ca35f96c",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "38b6a08d-890e-4769-b433-d1b192ba4808",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 25,
                    "Title": "Окраска фасада"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "a8c58776-8a86-48bd-a5d0-dc4e4b86ea9a",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 10,
                    "Title": "Окраска фасада"
                },
                "Id": 201,
                "Title": "Отбивка штукатурки цоколя",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 25,
                "fldUpDivisionId": 10,
                "ID": 201
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(202)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(202)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__deferred": {
                        "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(202)/fldUnits"
                    }
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "2e8d41c2-ff40-449f-945b-ee1c0e808125",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 25,
                    "Title": "Окраска фасада"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "7bd3927c-13c7-4994-b4cb-148b7f2cd0d9",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 10,
                    "Title": "Окраска фасада"
                },
                "Id": 202,
                "Title": "Грунтовка поверхности цоколя бетон контактом за 1раз",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 25,
                "fldUpDivisionId": 10,
                "ID": 202
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(203)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(203)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "f5d65f3d-21ae-4042-8087-202264249f55",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "f398967d-294f-4b30-921c-23c83aa26a47",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 25,
                    "Title": "Окраска фасада"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "111945a9-2836-42b8-ab45-1a8581072200",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 10,
                    "Title": "Окраска фасада"
                },
                "Id": 203,
                "Title": "Штукатурка поверхности откосов оконных и дверных. цоколя  цементно-песчаным раствором ",
                "fldMTP": "раствор цеметный М100",
                "fldNote": null,
                "fldDivisionId": 25,
                "fldUpDivisionId": 10,
                "ID": 203
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(204)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(204)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "35d830a1-3463-4e8d-8192-6d5f6a76d27c",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "dea4f9f4-4701-4a2f-baa8-ae238e0a5ed5",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 25,
                    "Title": "Окраска фасада"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "9a27a161-d2ba-45e1-b608-52a5d8df922b",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 10,
                    "Title": "Окраска фасада"
                },
                "Id": 204,
                "Title": "Грунтовка откосов, поверхности фасада грунтовкой глубокого проникновения для наружных работ Оптимист за 1 раз",
                "fldMTP": "грунтовка глубокого проникновения",
                "fldNote": null,
                "fldDivisionId": 25,
                "fldUpDivisionId": 10,
                "ID": 204
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(205)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(205)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "5f273ced-da9f-4340-8a2c-21fdda02cc47",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "784a1d56-b874-4b38-b046-0871ddd19342",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 25,
                    "Title": "Окраска фасада"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "9bb70344-e627-4744-b9e1-07209c04db34",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 10,
                    "Title": "Окраска фасада"
                },
                "Id": 205,
                "Title": "Шпаклевка откосов оконных и дверных, цоколя за 2 раза",
                "fldMTP": "шпаклевка для наружных работ",
                "fldNote": null,
                "fldDivisionId": 25,
                "fldUpDivisionId": 10,
                "ID": 205
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(206)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(206)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "90bd7b24-5598-4410-8da3-ada6621d3ec9",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "33cd3fb5-625f-4b56-bd37-add7e12c3e7e",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 25,
                    "Title": "Окраска фасада"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "56cf9fe0-fa28-408b-b3a5-7a39cf64b162",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 10,
                    "Title": "Окраска фасада"
                },
                "Id": 206,
                "Title": "Окраска фасада акриловыми составами Тиккурила Ral 9010, Ral 5021",
                "fldMTP": "краска LUJA Тиккурила Ral 9010, Ral 5021",
                "fldNote": null,
                "fldDivisionId": 25,
                "fldUpDivisionId": 10,
                "ID": 206
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(207)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(207)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "728312a2-14c9-425c-8506-af38bc782f94",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "03a9af4a-d437-4bab-8aba-99fe77db5c02",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 25,
                    "Title": "Окраска фасада"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "6d5950a0-1c0a-480c-9b8f-572a86f2614d",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 10,
                    "Title": "Окраска фасада"
                },
                "Id": 207,
                "Title": "Окраска откосов акриловыми составами Тиккурила",
                "fldMTP": "краска LUJA Тиккурила",
                "fldNote": null,
                "fldDivisionId": 25,
                "fldUpDivisionId": 10,
                "ID": 207
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(208)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(208)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "90d3f4ae-d45e-486b-b83f-6015f72ae696",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "тн"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "509597d8-c480-40a0-adf8-81df243bcab7",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 25,
                    "Title": "Окраска фасада"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "a248b37c-5cd4-4e87-9227-4deb4bd128f2",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 10,
                    "Title": "Окраска фасада"
                },
                "Id": 208,
                "Title": "Погрузка при автомобильных перевозках мусора строительного с погрузкой ",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 25,
                "fldUpDivisionId": 10,
                "ID": 208
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(209)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(209)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "aa57c383-3482-45a7-b111-c5e02db335ff",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "тн"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "c004bd08-6d8b-44d4-be01-e39794b3bd4b",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 25,
                    "Title": "Окраска фасада"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "689d520d-c141-48ee-a615-10b75dd0736f",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 10,
                    "Title": "Окраска фасада"
                },
                "Id": 209,
                "Title": "Перевозка груза I класса автомобилями бортовыми грузоподъмностью до 5 тн на расстояние 18 км",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 25,
                "fldUpDivisionId": 10,
                "ID": 209
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(210)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(210)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "f349fb87-738d-448d-93ec-03acc76150f0",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "4f178ce4-0265-4852-804a-c9ae8649a783",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 26,
                    "Title": "Фасадные работы с применением декоративной штукатурки"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "04d7288e-c1bd-4c03-ac5d-4caa0258a6f4",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 11,
                    "Title": "Фасадные работы с применением декоративной штукатурки"
                },
                "Id": 210,
                "Title": "Устройство и разборка инвентарных лесов",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 26,
                "fldUpDivisionId": 11,
                "ID": 210
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(211)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(211)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "a82826cf-3528-448a-85d2-a39576f99104",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "b9eb6717-5701-44c9-8285-54ae0b251701",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 26,
                    "Title": "Фасадные работы с применением декоративной штукатурки"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "63147bb4-b459-4577-9958-1a9797666832",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 11,
                    "Title": "Фасадные работы с применением декоративной штукатурки"
                },
                "Id": 211,
                "Title": "Отбивка старой штукатурки откосов оконных и дверных",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 26,
                "fldUpDivisionId": 11,
                "ID": 211
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(212)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(212)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "f3dc2d1a-7aa7-43a5-8d76-0ae11614c76c",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "3c9992c3-9d1c-430b-9ad2-15ea1630ff8a",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 26,
                    "Title": "Фасадные работы с применением декоративной штукатурки"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "451e8665-1c6c-4afd-a016-1324d3f899fa",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 11,
                    "Title": "Фасадные работы с применением декоративной штукатурки"
                },
                "Id": 212,
                "Title": "Отбивка старой штукатурки поверхности стен фасада",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 26,
                "fldUpDivisionId": 11,
                "ID": 212
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(213)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(213)",
                    "etag": "\"2\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "316bf74e-6224-488d-bc9c-dc0cc72def8f",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "055d4918-9ca2-4288-b365-133ccba501f6",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 26,
                    "Title": "Фасадные работы с применением декоративной штукатурки"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "c0a86cde-7f32-49dd-9ea0-8613f14c312d",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 11,
                    "Title": "Фасадные работы с применением декоративной штукатурки"
                },
                "Id": 213,
                "Title": "Грунтовка откосов оконных и дверных бетон контактом за 1раз",
                "fldMTP": "грунт бетон контакт",
                "fldNote": null,
                "fldDivisionId": 26,
                "fldUpDivisionId": 11,
                "ID": 213
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(214)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(214)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "d6a74c88-26fd-4753-94c8-cde3727c44be",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "7f2c1ec1-185a-4da2-ad6c-8c57c2910bfd",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 26,
                    "Title": "Фасадные работы с применением декоративной штукатурки"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "f57f6c02-4400-46c2-8621-744fdf7b10fe",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 11,
                    "Title": "Фасадные работы с применением декоративной штукатурки"
                },
                "Id": 214,
                "Title": "Грунтовка поверхности стен фасада бетон контактом за 1раз",
                "fldMTP": "грунт бетон контакт",
                "fldNote": null,
                "fldDivisionId": 26,
                "fldUpDivisionId": 11,
                "ID": 214
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(215)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(215)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "8322fa03-50c6-4ec3-84af-8ed5c2039e1f",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "381637df-2663-48c6-a7b0-9f864ccdac39",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 26,
                    "Title": "Фасадные работы с применением декоративной штукатурки"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "43421b79-c515-4e81-9b67-1a6128479cfa",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 11,
                    "Title": "Фасадные работы с применением декоративной штукатурки"
                },
                "Id": 215,
                "Title": "Штукатурка откосов цементно- песчаным раствором",
                "fldMTP": "раствор цементный М100",
                "fldNote": null,
                "fldDivisionId": 26,
                "fldUpDivisionId": 11,
                "ID": 215
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(216)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(216)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "3c82f889-0c41-425c-878a-5c9e6bc074ff",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "37d2b5c3-55d6-481e-a43d-47619483b059",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 26,
                    "Title": "Фасадные работы с применением декоративной штукатурки"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "86155321-1cae-49be-aac8-1f4da9729381",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 11,
                    "Title": "Фасадные работы с применением декоративной штукатурки"
                },
                "Id": 216,
                "Title": "Устройство армируюжей сетки ПВХ 50х50",
                "fldMTP": "сетка ПВХ 50х50",
                "fldNote": null,
                "fldDivisionId": 26,
                "fldUpDivisionId": 11,
                "ID": 216
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(217)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(217)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "1d366523-da3c-49ed-8661-047193bfed14",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "8e446b60-d622-4890-8d2e-e1d3305cf211",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 26,
                    "Title": "Фасадные работы с применением декоративной штукатурки"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "35b55636-64d1-4be4-b01b-8db6c3c95226",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 11,
                    "Title": "Фасадные работы с применением декоративной штукатурки"
                },
                "Id": 217,
                "Title": "Нанесение декоративной штукатурки Короед",
                "fldMTP": "декоративная штукатурка Короед Ral 9010, Ral 5021",
                "fldNote": null,
                "fldDivisionId": 26,
                "fldUpDivisionId": 11,
                "ID": 217
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(218)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(218)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "84ed3e9e-e80d-408b-95d8-466bb122deea",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "тн"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "9d200b20-8c15-494e-b3c6-523c7f209d66",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 26,
                    "Title": "Фасадные работы с применением декоративной штукатурки"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "5af18871-f423-4c33-9457-38c7fc4d1e58",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 11,
                    "Title": "Фасадные работы с применением декоративной штукатурки"
                },
                "Id": 218,
                "Title": "Погрузкапри автомобильных перевозках мусора строительного с погрузкой",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 26,
                "fldUpDivisionId": 11,
                "ID": 218
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(219)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(219)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "7b560ff6-06a6-4962-9af7-9fec41774edb",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "тн"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "321eebf9-6fea-4f5e-aee4-0d84e401ae0f",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 26,
                    "Title": "Фасадные работы с применением декоративной штукатурки"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "845a05a2-fffb-4da9-9c91-3f13571babdd",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 11,
                    "Title": "Фасадные работы с применением декоративной штукатурки"
                },
                "Id": 219,
                "Title": "Перевозка груза I класса автомобилями бортовыми грузоподъмностью до 5 тн на расстояние 18 км",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 26,
                "fldUpDivisionId": 11,
                "ID": 219
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(220)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(220)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "fefb89d4-357c-4227-9eae-2912ba9803f0",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "310be750-904c-472a-a808-c1381c9e4762",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 27,
                    "Title": "Ямочный ремонт дорожного покрытия"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "cddd1c6b-e86d-46cc-bfbe-493907be0b90",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 12,
                    "Title": "Ямочный ремонт дорожного покрытия"
                },
                "Id": 220,
                "Title": "Ремонт ямочного покрытия дорог однослойного толщ. 70мм площадью ремонта до 5м2",
                "fldMTP": "асфальтобетонные смеси дорожные (холодный асфальт)",
                "fldNote": null,
                "fldDivisionId": 27,
                "fldUpDivisionId": 12,
                "ID": 220
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(221)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(221)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "f1f30505-6065-4488-bcba-1814d57e4ef5",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "тн"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "50009426-2af9-46a6-82ad-9724653cd64e",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 27,
                    "Title": "Ямочный ремонт дорожного покрытия"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "9960777f-34a9-48e9-b72b-4d517948a0b1",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 12,
                    "Title": "Ямочный ремонт дорожного покрытия"
                },
                "Id": 221,
                "Title": "Погрузка при автомобильных перевозках мусора строительного с погрузкой",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 27,
                "fldUpDivisionId": 12,
                "ID": 221
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(222)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(222)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "dd5d8205-32dd-4a84-b228-64c09ef71392",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "тн"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "cc118b17-6764-46a8-859f-5e69bffd2d4b",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 27,
                    "Title": "Ямочный ремонт дорожного покрытия"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "88919c97-411d-4aa1-b402-dc2df2f7d367",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 12,
                    "Title": "Ямочный ремонт дорожного покрытия"
                },
                "Id": 222,
                "Title": "Перевозка груза I класса автомобилями бортовыми грузоподъмностью до 5 тн на расстояние 18 км",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 27,
                "fldUpDivisionId": 12,
                "ID": 222
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(223)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(223)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "31cadc3a-2f89-45ab-9203-7bb6c39b4021",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м3"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "f570eb09-6c07-4857-8f5e-e8ff92411498",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 28,
                    "Title": "Устройство тротуара (тротуарная плитка)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "c251c2c0-62a9-4c3e-a483-19672cdb6375",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 13,
                    "Title": "Устройство тротуара (тротуарная плитка)"
                },
                "Id": 223,
                "Title": "Разборка грунта вручную",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 28,
                "fldUpDivisionId": 13,
                "ID": 223
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(224)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(224)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "08f32ae1-d336-4cc2-9b45-bb89ca388aa3",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м3"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "6aad9eb2-85ca-49e3-9aee-3da137110c37",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 28,
                    "Title": "Устройство тротуара (тротуарная плитка)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "abbba0cc-c70e-419a-91c2-34810b608180",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 13,
                    "Title": "Устройство тротуара (тротуарная плитка)"
                },
                "Id": 224,
                "Title": "Устройство подстилающих слоев оснований: из песка",
                "fldMTP": "песок  природный для строительных работ  средний",
                "fldNote": null,
                "fldDivisionId": 28,
                "fldUpDivisionId": 13,
                "ID": 224
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(225)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(225)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "38726984-9bbf-4e8a-be75-e283b6ee3304",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "566a28e5-84a9-4972-8ef8-d6437c4bda48",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 28,
                    "Title": "Устройство тротуара (тротуарная плитка)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "b81dc61e-32e1-4712-81f3-7a7b401c1850",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 13,
                    "Title": "Устройство тротуара (тротуарная плитка)"
                },
                "Id": 225,
                "Title": "Установка бортовых камней бетонных",
                "fldMTP": "поребрик тротуарный БР 100.20.8, бетон В22,5 (М300)",
                "fldNote": null,
                "fldDivisionId": 28,
                "fldUpDivisionId": 13,
                "ID": 225
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(226)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(226)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "b51f7bf3-9553-4684-b1be-850a60fc82ee",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "770e9481-7d70-4632-9e5d-7e0fa94d0a61",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 28,
                    "Title": "Устройство тротуара (тротуарная плитка)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "8204b67e-ba70-4c3d-9f02-cc8c497aaa09",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 13,
                    "Title": "Устройство тротуара (тротуарная плитка)"
                },
                "Id": 226,
                "Title": "Устройство покрытий из тротуарной",
                "fldMTP": "плитка тротуарная \"Брусчатка\" 60 мм",
                "fldNote": null,
                "fldDivisionId": 28,
                "fldUpDivisionId": 13,
                "ID": 226
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(227)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(227)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "205336d7-5af0-437b-8f0c-73686ff52081",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "тн"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "6c324d27-38d5-4632-90c1-57558c724c25",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 28,
                    "Title": "Устройство тротуара (тротуарная плитка)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "73e6a385-3bdc-46a7-80dc-ffb53bc8831c",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 13,
                    "Title": "Устройство тротуара (тротуарная плитка)"
                },
                "Id": 227,
                "Title": "Погрузка при автомобильных перевозках мусора строительного с погрузкой",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 28,
                "fldUpDivisionId": 13,
                "ID": 227
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(228)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(228)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "cb65e0f7-bf57-41f7-8416-a50cbdf60688",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "тн"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "9325ffaf-2762-4158-bffc-145c7f2c3f8d",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 28,
                    "Title": "Устройство тротуара (тротуарная плитка)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "53d38b5c-f6f2-4778-b4e6-6b499febf770",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 13,
                    "Title": "Устройство тротуара (тротуарная плитка)"
                },
                "Id": 228,
                "Title": "Перевозка груза I класса автомобилями бортовыми грузоподъмностью до 5 тн на расстояние 18 км",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 28,
                "fldUpDivisionId": 13,
                "ID": 228
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(229)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(229)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "3c5303ca-faa3-4714-b64b-b0d02699e9d0",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "5818041a-f2be-414a-8c94-4c8f7795c6a0",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 29,
                    "Title": "Восстановление тротуара (асфальтобетон)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "cb5dca9f-6037-4840-ac07-f5c36f75ee43",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 14,
                    "Title": "Восстановление тротуара (асфальтобетон)"
                },
                "Id": 229,
                "Title": "Разборка асфальтобетонных покрытий тротуаров толщ.40 мм",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 29,
                "fldUpDivisionId": 14,
                "ID": 229
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(230)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(230)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "a8d96f50-3806-4836-97ae-22cd5b572002",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м3"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "e48e7f41-3afa-4fb9-b7f9-5c5582e86c1a",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 29,
                    "Title": "Восстановление тротуара (асфальтобетон)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "2f41b418-8486-49e5-bc94-cd08bfeba448",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 14,
                    "Title": "Восстановление тротуара (асфальтобетон)"
                },
                "Id": 230,
                "Title": "Разборка покрытий и оснований щебеночных",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 29,
                "fldUpDivisionId": 14,
                "ID": 230
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(231)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(231)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "6d54b0e4-88ac-4d66-931b-cccc7c9daead",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м3"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "a8e57a25-0bed-4951-a59d-97b2cd800834",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 29,
                    "Title": "Восстановление тротуара (асфальтобетон)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "50de328b-7e68-422c-b7fd-6218e58e2580",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 14,
                    "Title": "Восстановление тротуара (асфальтобетон)"
                },
                "Id": 231,
                "Title": "Разборка подстилающих и выравнивающих слоев оснований из песка",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 29,
                "fldUpDivisionId": 14,
                "ID": 231
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(232)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(232)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "d2431234-5e19-4f2f-9fc8-0675b1ecad4a",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м.п."
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "1d3fb27b-2019-422b-86d2-9d212a1e8c4e",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 29,
                    "Title": "Восстановление тротуара (асфальтобетон)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "0e1f58de-2c92-49f7-9efb-abc9293c7bc7",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 14,
                    "Title": "Восстановление тротуара (асфальтобетон)"
                },
                "Id": 232,
                "Title": "Разборка бортовых камней на бетонном основании",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 29,
                "fldUpDivisionId": 14,
                "ID": 232
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(233)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(233)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "da65a6ea-609d-4237-b569-6cb78f28512b",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "e2d8319d-a15e-42de-bdc6-87eeaf11e267",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 29,
                    "Title": "Восстановление тротуара (асфальтобетон)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "8252fa70-0e13-4f59-a07c-3e589263f1cc",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 14,
                    "Title": "Восстановление тротуара (асфальтобетон)"
                },
                "Id": 233,
                "Title": "Планировка поверхности",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 29,
                "fldUpDivisionId": 14,
                "ID": 233
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(234)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(234)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "a676d01a-329b-4272-83ba-ba74ec7b10a9",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м3"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "bc0243dd-0ba3-4067-b920-0a018b01e3c3",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 29,
                    "Title": "Восстановление тротуара (асфальтобетон)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "6e96c959-8390-4464-9008-d013786f0bf2",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 14,
                    "Title": "Восстановление тротуара (асфальтобетон)"
                },
                "Id": 234,
                "Title": "Устройство подстилающих и выравнивающих слоев из песка",
                "fldMTP": "песок  природный для строительных работ  средний",
                "fldNote": null,
                "fldDivisionId": 29,
                "fldUpDivisionId": 14,
                "ID": 234
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(235)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(235)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "225ffc04-e5fc-4d29-9cf6-842fec376e9f",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "97f67dc7-f1c7-433c-a481-58591fe8c37d",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 29,
                    "Title": "Восстановление тротуара (асфальтобетон)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "0da47a93-223b-4221-a6dc-b30f38c812eb",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 14,
                    "Title": "Восстановление тротуара (асфальтобетон)"
                },
                "Id": 235,
                "Title": "Установка бортовых камней бетонных",
                "fldMTP": "поребрик тротуарный БР 100.20.8, бетон В22,5 (М300)",
                "fldNote": null,
                "fldDivisionId": 29,
                "fldUpDivisionId": 14,
                "ID": 235
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(236)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(236)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__deferred": {
                        "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(236)/fldUnits"
                    }
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "77803f03-8ecb-4059-84e9-e3f968e8ff05",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 29,
                    "Title": "Восстановление тротуара (асфальтобетон)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "704bfba4-b018-4a56-ae0c-f62f814514a4",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 14,
                    "Title": "Восстановление тротуара (асфальтобетон)"
                },
                "Id": 236,
                "Title": "Устройство щебеночного основания толщ.60мм",
                "fldMTP": "щебень из природного камня для строительных работ   М 600 фракция 5-10 мм",
                "fldNote": null,
                "fldDivisionId": 29,
                "fldUpDivisionId": 14,
                "ID": 236
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(237)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(237)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "d12a1579-8f42-4f93-8fd9-1023cf7a1360",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "тн"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "3f1212ce-ed40-4ad1-b5e3-f2e13e8e7989",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 29,
                    "Title": "Восстановление тротуара (асфальтобетон)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "6f63afe3-16a6-4274-a86c-aef2113fc589",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 14,
                    "Title": "Восстановление тротуара (асфальтобетон)"
                },
                "Id": 237,
                "Title": "Розлив вяжущих материалов",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 29,
                "fldUpDivisionId": 14,
                "ID": 237
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(238)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(238)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "94705fc1-8197-46b6-8000-c018bafdb515",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "fb76c812-45bf-41c3-b3c9-2253d181290b",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 29,
                    "Title": "Восстановление тротуара (асфальтобетон)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "8a1f1e02-e9ff-4a81-9c55-17a031a9aa6a",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 14,
                    "Title": "Восстановление тротуара (асфальтобетон)"
                },
                "Id": 238,
                "Title": "Устройство асфальтобетонных покрытий однослойных мелеозернистой асфальтобетонной смеси толщ. 40мм",
                "fldMTP": "асфальтобетонные смеси дорожные",
                "fldNote": null,
                "fldDivisionId": 29,
                "fldUpDivisionId": 14,
                "ID": 238
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(239)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(239)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "a0c16515-9e35-4717-bf43-66593b6b9316",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "тн"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "24c11ece-afd2-45c5-804a-4fc0c28440bc",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 29,
                    "Title": "Восстановление тротуара (асфальтобетон)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "dc8fd60a-df5a-4548-84ff-1e502639f5d6",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 14,
                    "Title": "Восстановление тротуара (асфальтобетон)"
                },
                "Id": 239,
                "Title": "Погрузка при автомобильных перевозках мусора строительного с погрузкой",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 29,
                "fldUpDivisionId": 14,
                "ID": 239
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(240)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(240)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "5238f1a1-d015-40b3-9d7d-731237e7bd1d",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "тн"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "2a505ed2-775f-4ea5-bd22-e45a16dedb50",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 29,
                    "Title": "Восстановление тротуара (асфальтобетон)"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "9043955f-d112-402d-ae3a-e02aa2d75eef",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 14,
                    "Title": "Восстановление тротуара (асфальтобетон)"
                },
                "Id": 240,
                "Title": "Перевозка груза I класса автомобилями бортовыми грузоподъмностью до 5 тн на расстояние 18 км",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 29,
                "fldUpDivisionId": 14,
                "ID": 240
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(241)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(241)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "1784e183-eafe-456e-9589-64994388c84a",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "7542e10d-c7c3-4f87-bd19-1ba3ae17496b",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 30,
                    "Title": "Ремонт автомобильной дороги"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "3ac298e2-e6d5-48fb-97ff-94b21e5a96ae",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 15,
                    "Title": "Ремонт автомобильной дороги"
                },
                "Id": 241,
                "Title": "Разборка покрытий и оснований асфальтобетонных толщ. 80мм",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 30,
                "fldUpDivisionId": 15,
                "ID": 241
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(242)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(242)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "59b0b1ed-0523-4fb4-a9bb-616f2a55f8be",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "45fefae1-9b7d-4812-bd7a-795615d0ff9c",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 30,
                    "Title": "Ремонт автомобильной дороги"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "7a367dff-72ba-4306-8827-c67ab12a8c57",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 15,
                    "Title": "Ремонт автомобильной дороги"
                },
                "Id": 242,
                "Title": "Разборка бортовых камней: на бетонном основании",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 30,
                "fldUpDivisionId": 15,
                "ID": 242
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(243)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(243)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "8a0697f2-cfb4-441e-b775-010154f59525",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "0c7d301d-1e59-4a33-95d7-6d21a5c41a8b",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 30,
                    "Title": "Ремонт автомобильной дороги"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "983519c4-7c10-4951-b7ec-e754543de7ba",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 15,
                    "Title": "Ремонт автомобильной дороги"
                },
                "Id": 243,
                "Title": "Установка бортовых камней бетонных",
                "fldMTP": "камни бортовые БР 100.30.15, бетон В30 (М 400)",
                "fldNote": null,
                "fldDivisionId": 30,
                "fldUpDivisionId": 15,
                "ID": 243
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(244)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(244)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "00d8ae16-5f25-4116-b39f-6f63a2ae263b",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "e2629466-e6cf-4460-ba18-13124720845b",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 30,
                    "Title": "Ремонт автомобильной дороги"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "db73e2e3-e2df-4472-9bf7-2d8225ba54f9",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 15,
                    "Title": "Ремонт автомобильной дороги"
                },
                "Id": 244,
                "Title": "Разборка подстилающих слоев из щебня толщ. 150 мм",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 30,
                "fldUpDivisionId": 15,
                "ID": 244
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(245)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(245)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "55407274-3104-4708-8922-da8051285972",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м3"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "8666c905-1362-478b-9c19-c6d3733a0a61",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 30,
                    "Title": "Ремонт автомобильной дороги"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "8a831f21-c1a5-4579-b1c8-8bb8b6cce2d6",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 15,
                    "Title": "Ремонт автомобильной дороги"
                },
                "Id": 245,
                "Title": "Устройство подстилающих и выравнивающих слоевоснований из шебня",
                "fldMTP": "щебень из природного камня для строительных работ марки 800 фракции 20-40 мм",
                "fldNote": null,
                "fldDivisionId": 30,
                "fldUpDivisionId": 15,
                "ID": 245
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(246)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(246)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "d0ad9a45-a5e4-40be-8d7b-65592ba7ddc4",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "c713f471-fc96-40bd-95e0-5c96e7680507",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 30,
                    "Title": "Ремонт автомобильной дороги"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "a2a153a5-2f1f-4a29-b683-936edbc5620e",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 15,
                    "Title": "Ремонт автомобильной дороги"
                },
                "Id": 246,
                "Title": "Устройство покрытий толщ. 40 мм из горячих асфальтобетонных смесей  плотных мелеозернистых",
                "fldMTP": "асфальтобетонные смеси дорожные",
                "fldNote": null,
                "fldDivisionId": 30,
                "fldUpDivisionId": 15,
                "ID": 246
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(247)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(247)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "c95e85a1-5625-4753-b000-41ef0117f333",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "5ab04cf4-09d1-4134-97bf-efed6d9cfff3",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 30,
                    "Title": "Ремонт автомобильной дороги"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "e35a682c-990f-4f6b-ad5f-15c6bc1e064f",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 15,
                    "Title": "Ремонт автомобильной дороги"
                },
                "Id": 247,
                "Title": "Устройство покрытий толщ. 40 мм из горячих асфальтобетонных смесей  плотных крупнозернистых ",
                "fldMTP": "асфальтобетонные смеси дорожные",
                "fldNote": null,
                "fldDivisionId": 30,
                "fldUpDivisionId": 15,
                "ID": 247
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(248)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(248)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "b5eb67ca-750d-4265-bd00-d5440ce952dd",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "тн"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "40c8c6b5-2fe0-48be-96fc-4f37abba47ea",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 30,
                    "Title": "Ремонт автомобильной дороги"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "ed02eb88-ceac-4dca-938a-82d2221e1bba",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 15,
                    "Title": "Ремонт автомобильной дороги"
                },
                "Id": 248,
                "Title": "Погрузка при автомобильных перевозках мусора строительного с погрузкой",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 30,
                "fldUpDivisionId": 15,
                "ID": 248
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(249)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(249)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "48d27888-b7b2-4cb7-8cd4-55bcef63bbd7",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "тн"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "40b0e349-1e05-4495-8264-e0ac79df01ea",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 30,
                    "Title": "Ремонт автомобильной дороги"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "0c37ab3e-b636-4a66-8bf7-ba3f855b9f3c",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 15,
                    "Title": "Ремонт автомобильной дороги"
                },
                "Id": 249,
                "Title": "Перевозка груза I класса автомобилями бортовыми грузоподъмностью до 5 тн на расстояние 18 км",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 30,
                "fldUpDivisionId": 15,
                "ID": 249
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(250)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(250)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "50f4bbcf-abba-49c5-891b-d597ab2c0df3",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "00c6b5ec-8386-43f7-af46-2c330e4304a3",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 31,
                    "Title": "Облицовка стен с утеплением"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "b6786263-5b2e-448c-8a25-b5768aaf203d",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 16,
                    "Title": "Облицовка стен (с утеплителем)"
                },
                "Id": 250,
                "Title": "Облицовка стен металлопрофилем оцинкованным с полимерным покрытием С8 Ral 9010, Ral 5021 по метал. каркасу с изоляцией",
                "fldMTP": "оцинкованный профлист с полимерным покрытием С8 Ral 9010, Ral 5021, минплита Технониколь толщ 50мм, пароизоляция",
                "fldNote": "При отсутствии необходимости в утеплении - минплита и пароизоляция исключаются",
                "fldDivisionId": 31,
                "fldUpDivisionId": 16,
                "ID": 250
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(251)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(251)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "c6dbb23b-e945-4bbe-b523-b662ad72b84d",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "b1633e15-b05b-4d1a-be27-c88a772b8ae1",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 31,
                    "Title": "Облицовка стен с утеплением"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "fb294825-0319-4767-8e31-75ec6cf2f20c",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 16,
                    "Title": "Облицовка стен (с утеплителем)"
                },
                "Id": 251,
                "Title": "Устройтство карнизных свесов из листовой оцинкованной стали с полимерным покрытием",
                "fldMTP": "оцинкованный профлист с полимерным покрытием толщ. 0.7мм Ral 5021",
                "fldNote": null,
                "fldDivisionId": 31,
                "fldUpDivisionId": 16,
                "ID": 251
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(252)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(252)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "fab93a7c-bbd6-4363-969e-7d928b6b65c8",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "9020636a-2b07-4b94-9530-c88d8ce9f24a",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 31,
                    "Title": "Облицовка стен с утеплением"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "93b60d13-30b6-403b-b2e8-b311705977ba",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 16,
                    "Title": "Облицовка стен (с утеплителем)"
                },
                "Id": 252,
                "Title": "Облицовка откосов оцинкованной сталью с полимерным покрытием толщ. 0.5мм",
                "fldMTP": "оцинкованный сталь с полимерным покрытием толщ. 0.5мм Ral 9010",
                "fldNote": null,
                "fldDivisionId": 31,
                "fldUpDivisionId": 16,
                "ID": 252
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(253)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(253)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "66e821a9-d421-4e69-98cb-e826c07bb84b",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "f79581c8-8d8f-4fbc-9f55-6cffa9daa9aa",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 31,
                    "Title": "Облицовка стен с утеплением"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "a25bd4ba-c3ae-4585-aa59-9155e9260a94",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 16,
                    "Title": "Облицовка стен (с утеплителем)"
                },
                "Id": 253,
                "Title": "Установка отливов из оцинкованной стали с полимерным покрытием",
                "fldMTP": "оцинкованный профлист с полимерным покрытием толщ. 0.7мм Ral 9010",
                "fldNote": null,
                "fldDivisionId": 31,
                "fldUpDivisionId": 16,
                "ID": 253
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(254)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(254)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "c31335b0-6b65-478d-b2be-6087b6a66d36",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "05475b03-a76f-41f2-9a31-f31a06ccc31b",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 31,
                    "Title": "Облицовка стен с утеплением"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "1ef96aee-e078-4a3f-bc58-f06daf0d787d",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 16,
                    "Title": "Облицовка стен (с утеплителем)"
                },
                "Id": 254,
                "Title": "Устройство примыканий из наплавляемых материало в 2 слоя",
                "fldMTP": "нижний слой - Изопласт ЭПП                \nверхний слой - Изопласт ЭКП",
                "fldNote": null,
                "fldDivisionId": 31,
                "fldUpDivisionId": 16,
                "ID": 254
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(255)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(255)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "eb082b9d-86c0-4137-9f7e-802983adae03",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "т"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "6af9786b-c3f7-4632-a9d9-17d74dd36e1e",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 31,
                    "Title": "Облицовка стен с утеплением"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "ad0968f1-6cac-406f-89b1-815df6d70a75",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 16,
                    "Title": "Облицовка стен (с утеплителем)"
                },
                "Id": 255,
                "Title": "Погрузка строительного мусора",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 31,
                "fldUpDivisionId": 16,
                "ID": 255
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(256)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(256)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "ebd1ca97-1989-48c1-9a1c-34c347583b29",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "т"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "9e5327d6-8c6b-47b4-847a-987267b504c1",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 31,
                    "Title": "Облицовка стен с утеплением"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "2a79aab0-508c-4a8f-99f7-b08b003ab218",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 16,
                    "Title": "Облицовка стен (с утеплителем)"
                },
                "Id": 256,
                "Title": "Вывоз строительного мусора",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 31,
                "fldUpDivisionId": 16,
                "ID": 256
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(257)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(257)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "eb467abd-2bdf-4f76-98fe-057c11488a05",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "ш.т/м.п"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "2e2ce3dc-d5c7-4c9a-bea8-c23cc3a9a3bc",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 32,
                    "Title": "Демонтаж здания методом обрушения"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "62c64a4a-4e1a-49d4-90fd-fb03be802c67",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 17,
                    "Title": "Демонтаж здания методом обрушения"
                },
                "Id": 257,
                "Title": "Демонтаж подкрановой балки с демонтажом эл.тельфером весом 1,1тн (грузоподъемность до 5тн) , который подлежит дальнейшему использованию, со снятием с места установки, необходимой (частичной) разборкой и консервированием с целью длительного  хранения",
                "fldMTP": "с применением подъёмного крана, вылет стрелы 25м",
                "fldNote": "??? маш.ч",
                "fldDivisionId": 32,
                "fldUpDivisionId": 17,
                "ID": 257
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(258)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(258)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "d8dacc9e-8ea0-4f1c-a697-f141ae839dfd",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "т.н/м.п"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "c84d881e-1252-4268-9e8b-345f0663fc72",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 32,
                    "Title": "Демонтаж здания методом обрушения"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "12f8e317-5425-4fd6-950e-7b39b90e219f",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 17,
                    "Title": "Демонтаж здания методом обрушения"
                },
                "Id": 258,
                "Title": "Демонтаж труб  (противопожарный трубопровод) (водогазопроводных ду 219мм)",
                "fldMTP": null,
                "fldNote": "металлолом",
                "fldDivisionId": 32,
                "fldUpDivisionId": 17,
                "ID": 258
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(259)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(259)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "a5f6bb92-b91c-441f-8305-7a189c7d207e",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м3"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "9ca2be44-7df3-4686-b3e5-ef46904e797a",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 32,
                    "Title": "Демонтаж здания методом обрушения"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "577e1be8-d15b-496f-b6d1-a41fef9b0684",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 17,
                    "Title": "Демонтаж здания методом обрушения"
                },
                "Id": 259,
                "Title": "Реальный объем строительного мусора, приготовленного к вывозу (в твердом теле)",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 32,
                "fldUpDivisionId": 17,
                "ID": 259
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(260)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(260)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "4b5eeb56-c253-465c-97c0-b9d6d7947583",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "т.н/м.п"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "20581c1b-c5da-4c18-aa03-87487d6a126e",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 32,
                    "Title": "Демонтаж здания методом обрушения"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "97d7e708-20af-45f3-8457-476dd62cd508",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 17,
                    "Title": "Демонтаж здания методом обрушения"
                },
                "Id": 260,
                "Title": "Демонтаж ж.б ограждения в комплекте с опорными стаканами",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 32,
                "fldUpDivisionId": 17,
                "ID": 260
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(261)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(261)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "2706db05-e1b2-4d51-acad-e5fb59f3bb9a",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2/м3"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "8d1ab279-1cbe-476d-bb6a-0a840da5528c",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 32,
                    "Title": "Демонтаж здания методом обрушения"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "734fd7d4-3449-4e29-9272-62432deb21f1",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 17,
                    "Title": "Демонтаж здания методом обрушения"
                },
                "Id": 261,
                "Title": "Демонтаж отдельно стоящего здания, на ж.б каркасе методом обрушения",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 32,
                "fldUpDivisionId": 17,
                "ID": 261
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(262)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(262)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "2cd18cb9-ac22-43cd-8d02-ae3e61a3055f",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "тн"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "f6aac50f-b7d2-47d9-921c-95173472add4",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 32,
                    "Title": "Демонтаж здания методом обрушения"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "eb69ab96-0b65-48d0-9a28-2836b27a9a1b",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 17,
                    "Title": "Демонтаж здания методом обрушения"
                },
                "Id": 262,
                "Title": "Погрузка экскаватором и вывоз строительного мусора автомобилями-самосвалами на расстояние 35км",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 32,
                "fldUpDivisionId": 17,
                "ID": 262
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(263)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(263)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "cee142d7-50b7-4941-b911-f415834072e6",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2/м3"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "a5a31f55-5691-44af-a3d3-63837bc4f488",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 32,
                    "Title": "Демонтаж здания методом обрушения"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "6fb6d0ba-380d-4f89-91ba-6efe77a815fc",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 17,
                    "Title": "Демонтаж здания методом обрушения"
                },
                "Id": 263,
                "Title": "Разработка грунта под устройство основания из цементо-бетонного покрытия Н=300мм по перриметру бетонной площадки",
                "fldMTP": "нижний слой - Изопласт ЭПП                 \nверхний слой - Изопласт ЭКП",
                "fldNote": null,
                "fldDivisionId": 32,
                "fldUpDivisionId": 17,
                "ID": 263
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(264)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(264)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "348d0934-458d-4d30-b953-03fecfa87e49",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2/м3"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "1e3c7271-5092-4134-9287-c4301b601080",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 32,
                    "Title": "Демонтаж здания методом обрушения"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "32c712a2-f2ff-49c6-9f25-d075288937f0",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 17,
                    "Title": "Демонтаж здания методом обрушения"
                },
                "Id": 264,
                "Title": "Устройство слоя из ГПС Н=150мм, с послойным уплотнением по перриметру бетонной площадки",
                "fldMTP": "гравийно песчанная смесь природная",
                "fldNote": null,
                "fldDivisionId": 32,
                "fldUpDivisionId": 17,
                "ID": 264
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(265)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(265)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "61c1b541-c1ac-46db-b6fb-e6c89faa1a6c",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "28952406-cbd8-443f-9af6-5df31c623a16",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 32,
                    "Title": "Демонтаж здания методом обрушения"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "bd3825dd-2148-4d5f-8f1e-ba1ecf3fc093",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 17,
                    "Title": "Демонтаж здания методом обрушения"
                },
                "Id": 265,
                "Title": "Устройство слоя из бетона, Н=150мм, армированный сеткой по перриметру бетонной площадки",
                "fldMTP": "Бетон тяжелый для дорожных и аэродромных покрытий и оснований, крупность заполнителя: 20 мм, класс В22,5 (300) -  ??? м3, арматурная сетка 150х150мм из горячекатанаой арматурной стали периодического профиля класса А-3, диаметром 10мм -????? тн",
                "fldNote": null,
                "fldDivisionId": 32,
                "fldUpDivisionId": 17,
                "ID": 265
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(266)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(266)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "a53ffeb3-180d-46dc-acaa-74555f1d35aa",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м.п."
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "9c6afe46-b5e5-4ea8-8e3f-2be14f1ebfa2",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 33,
                    "Title": "Демонтаж здания с поэлементной разборкой"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "64c6dcb7-1215-4279-bfa0-e0a70aec93b5",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 18,
                    "Title": "Демонтаж здания с поэлементной разборкой"
                },
                "Id": 266,
                "Title": "Устройство временного ограждения из профилированного листа на деревянном каркасе",
                "fldMTP": "профлист 1.1х1.15 С 21 -1000-0.5 (вес 4,9кг/1м2)  на саморезах 4,8х80мм -????шт, пиломатериал -???? м3",
                "fldNote": null,
                "fldDivisionId": 33,
                "fldUpDivisionId": 18,
                "ID": 266
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(267)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(267)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "5b0966ef-98db-4d33-b0b1-5a8d278afb25",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м3"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "bf6e77c8-84c3-4592-8303-02e3697c1568",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 33,
                    "Title": "Демонтаж здания с поэлементной разборкой"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "c4dcf92a-0230-41ca-8b8b-e7a3fcc56a11",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 18,
                    "Title": "Демонтаж здания с поэлементной разборкой"
                },
                "Id": 267,
                "Title": "Поэлементная разборка части панельного здания  (верхняя точка демонтажа 19.800м, до отметки 7.200м): демонтаж панелей стеновых 6000х1200-??шт (302.4м2)-???м3",
                "fldMTP": "с применением подъёмного крана, вылет стрелы 25м",
                "fldNote": "изделия из ж/б от поэлементной разборки перерабатывают  дробилкой бетонных отходов для перевозки автомобилями-самосвалами",
                "fldDivisionId": 33,
                "fldUpDivisionId": 18,
                "ID": 267
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(268)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(268)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "a6020c72-7da5-4da1-bf1e-cdeb7a3e9f3a",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м3"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "7173ff72-fb9c-4fe0-a256-f4f7a20588da",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 33,
                    "Title": "Демонтаж здания с поэлементной разборкой"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "3d7fc8c4-ab99-45b5-bb7e-dd7bb2a2254f",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 18,
                    "Title": "Демонтаж здания с поэлементной разборкой"
                },
                "Id": 268,
                "Title": "Поэлементная разборка части панельного здания  (верхняя точка демонтажа 19.800м, до отметки 7.200м): демонтаж панелей стеновых 6000х1800-???шт (162м2)-???м3",
                "fldMTP": "с применением подъёмного крана, вылет стрелы 25м",
                "fldNote": "изделия из ж/б от поэлементной разборки перерабатывают  дробилкой бетонных отходов для перевозки автомобилями-самосвалами",
                "fldDivisionId": 33,
                "fldUpDivisionId": 18,
                "ID": 268
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(269)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(269)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "27db1058-855d-472a-8a90-f914d810666f",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м3"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "292f1fa2-bae8-43e9-bad5-52df3eb3e227",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 33,
                    "Title": "Демонтаж здания с поэлементной разборкой"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "34d27670-fc39-4849-97ad-872f7001538d",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 18,
                    "Title": "Демонтаж здания с поэлементной разборкой"
                },
                "Id": 269,
                "Title": "Поэлементная разборка части панельного здания  (верхняя точка демонтажа 19.800м, до отметки 7.200м): демонтаж плит перекрытий ребристых 6580х1490-???шт (980м2)-???м3",
                "fldMTP": "с применением подъёмного крана, вылет стрелы 25м",
                "fldNote": "изделия из ж/б от поэлементной разборки перерабатывают  дробилкой бетонных отходов для перевозки автомобилями-самосвалами",
                "fldDivisionId": 33,
                "fldUpDivisionId": 18,
                "ID": 269
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(270)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(270)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "c572d88b-0f86-4e5e-9a2f-452033dc7768",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м3"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "9f7e99cd-118c-4fd1-be87-866644d8a50a",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 33,
                    "Title": "Демонтаж здания с поэлементной разборкой"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "7f22a73d-1a5e-4a9e-84df-74764067bbd1",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 18,
                    "Title": "Демонтаж здания с поэлементной разборкой"
                },
                "Id": 270,
                "Title": "Поэлементная разборка части панельного здания (верхняя точка демонтажа 19.800м, до отметки 7.200м): демонтаж колонн -???шт-???м3",
                "fldMTP": "с применением подъёмного крана, вылет стрелы 25м",
                "fldNote": "изделия из ж/б от поэлементной разборки перерабатывают  дробилкой бетонных отходов для перевозки автомобилями-самосвалами",
                "fldDivisionId": 33,
                "fldUpDivisionId": 18,
                "ID": 270
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(271)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(271)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "0fb5c786-6e6c-4acf-8f5a-abca663753a8",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м3"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "5675c0fa-00cc-400a-9286-baed6bf908db",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 33,
                    "Title": "Демонтаж здания с поэлементной разборкой"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "27c69b91-9598-4ae9-bc9c-18c6caf2e462",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 18,
                    "Title": "Демонтаж здания с поэлементной разборкой"
                },
                "Id": 271,
                "Title": "Поэлементная разборка части панельного здания (верхняя точка демонтажа 19.800м, до отметки 7.200м): демонтаж ригелей-??шт-????м3",
                "fldMTP": "с применением подъёмного крана, вылет стрелы 25м",
                "fldNote": null,
                "fldDivisionId": 33,
                "fldUpDivisionId": 18,
                "ID": 271
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(272)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(272)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "d0e74d0e-c5ee-48b7-9127-34d9f71e3162",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м3"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "dbe121b3-8bc1-454b-81f2-195bdb227206",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 33,
                    "Title": "Демонтаж здания с поэлементной разборкой"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "a00039c6-433e-4631-a636-edbc2cebc150",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 18,
                    "Title": "Демонтаж здания с поэлементной разборкой"
                },
                "Id": 272,
                "Title": "Поэлементная разборка части панельного здания (верхняя точка демонтажа 19.800м, до отметки 7.200м): демонтаж лестничных маршей 2750х1200-??шт-???м3",
                "fldMTP": "с применением подъёмного крана, вылет стрелы 25м",
                "fldNote": "изделия из ж/б от поэлементной разборки перерабатывают  дробилкой бетонных отходов для перевозки автомобилями-самосвалами",
                "fldDivisionId": 33,
                "fldUpDivisionId": 18,
                "ID": 272
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(273)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(273)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "c45a7d69-2a1a-482e-b60b-5780ba041d1d",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м3"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "7fc78e70-81f0-47e5-8573-98013c1b4afb",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 33,
                    "Title": "Демонтаж здания с поэлементной разборкой"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "7c947623-1d5e-4ef6-933d-fb76a8c730b6",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 18,
                    "Title": "Демонтаж здания с поэлементной разборкой"
                },
                "Id": 273,
                "Title": "Поэлементная разборка части панельного здания (верхняя точка демонтажа 19.800м, до отметки 7.200м): демонтаж лестничных площадок  -??шт -???м3 ",
                "fldMTP": "с применением подъёмного крана, вылет стрелы 25м",
                "fldNote": "изделия из ж/б от поэлементной разборки перерабатывают  дробилкой бетонных отходов для перевозки автомобилями-самосвалами",
                "fldDivisionId": 33,
                "fldUpDivisionId": 18,
                "ID": 273
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(274)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(274)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "804c0135-48ba-4ddc-b916-149b1d04dd26",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "ec3fc201-5cb6-4658-8d8c-7292d0ac8387",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 33,
                    "Title": "Демонтаж здания с поэлементной разборкой"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "d613c876-b24d-4fdb-9e37-e2c7d9cd681c",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 18,
                    "Title": "Демонтаж здания с поэлементной разборкой"
                },
                "Id": 274,
                "Title": "Демонтаж окон деревянных без подоконных досок",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 33,
                "fldUpDivisionId": 18,
                "ID": 274
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(275)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(275)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "5fa6f85b-5354-4224-bab3-55087b8d23c3",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "69472363-10e0-495b-a073-4b2bcc3791a2",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 33,
                    "Title": "Демонтаж здания с поэлементной разборкой"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "e3803854-f7bb-4108-beef-03ac54776e5e",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 18,
                    "Title": "Демонтаж здания с поэлементной разборкой"
                },
                "Id": 275,
                "Title": "Демонтаж окон ПВХ",
                "fldMTP": "глухих 1200х800 - ??шт;  блоки трехстворчатые с открывающейся створкой, в т.ч. при наличии створок глухого остекления -  ???м2",
                "fldNote": null,
                "fldDivisionId": 33,
                "fldUpDivisionId": 18,
                "ID": 275
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(276)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(276)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "65fb5bfc-dd74-4997-a285-9c51726b2009",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м3"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "858f61f3-d1ad-497d-9a40-dc4912fcbeca",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 33,
                    "Title": "Демонтаж здания с поэлементной разборкой"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "7e4aad16-fe53-471c-b039-3cd8a791b3ff",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 18,
                    "Title": "Демонтаж здания с поэлементной разборкой"
                },
                "Id": 276,
                "Title": "Демонтаж здания панельного не отапливаемого, нежилого разрушающим методом от отметки 7.200м с учетом фундаментов глубиной 500мм",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 33,
                "fldUpDivisionId": 18,
                "ID": 276
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(277)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(277)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "186bbf65-3f6c-4775-b0dd-1ee5b64ac006",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "ca5a1f31-54d6-4b8a-832b-f6304c9831a9",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 33,
                    "Title": "Демонтаж здания с поэлементной разборкой"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "eebe2330-36f9-4a9e-a7c4-8ac012760490",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 18,
                    "Title": "Демонтаж здания с поэлементной разборкой"
                },
                "Id": 277,
                "Title": "Устройство, планировка подстилающих слоев из песчанно-гравийной смеси толщиной 300мм",
                "fldMTP": "Смесь песчанно-гравийная природная-322,18м3",
                "fldNote": null,
                "fldDivisionId": 33,
                "fldUpDivisionId": 18,
                "ID": 277
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(278)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(278)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "9baf4e5e-e634-49b0-bbfe-0b3359729421",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "м2/м3"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "a6330a56-0d79-4f1f-a545-d1aec8fb9c4e",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 33,
                    "Title": "Демонтаж здания с поэлементной разборкой"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "309088a5-15f8-423e-9ca5-892862425e1c",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 18,
                    "Title": "Демонтаж здания с поэлементной разборкой"
                },
                "Id": 278,
                "Title": "Подготовка почвы для устройства партерного и обыкновенного газона (планировка грунта) с внесением растительной земли слоем 20 см механизированным способом",
                "fldMTP": null,
                "fldNote": "Группа грунтов II",
                "fldDivisionId": 33,
                "fldUpDivisionId": 18,
                "ID": 278
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(279)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(279)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "df4b043a-c1b8-43a5-a0e9-bc94989921f8",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "га"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "f0c8f201-c0ac-479c-976b-86323f4c1093",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 33,
                    "Title": "Демонтаж здания с поэлементной разборкой"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "f9789120-f38b-4282-b34c-e4b2e97930ae",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 18,
                    "Title": "Демонтаж здания с поэлементной разборкой"
                },
                "Id": 279,
                "Title": "Посев луговых газонов",
                "fldMTP": "Семена газонных трав (смесь)",
                "fldNote": null,
                "fldDivisionId": 33,
                "fldUpDivisionId": 18,
                "ID": 279
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(280)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(280)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "1a3baafb-2c3a-49a7-9ef6-bae77dbf60f5",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "тн"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "1a99e91b-991f-4e97-bacf-4c4982dca1f5",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 33,
                    "Title": "Демонтаж здания с поэлементной разборкой"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "a76a8eb2-52ea-43a0-af30-07fd34dbed41",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 18,
                    "Title": "Демонтаж здания с поэлементной разборкой"
                },
                "Id": 280,
                "Title": "Погрузочные работы при автомобильных перевозках: мусора строительного с погрузкой механизированным способом, эксковаторами емкостью ковша до 0,5м3",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 33,
                "fldUpDivisionId": 18,
                "ID": 280
            },
            {
                "__metadata": {
                    "id": "Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(281)",
                    "uri": "https://sharepoint/sites/constructing/_api/Web/Lists(guid'a02433e1-d969-4816-bbf3-e70fbf485600')/Items(281)",
                    "etag": "\"1\"",
                    "type": "SP.Data.WorksListItem"
                },
                "fldUnits": {
                    "__metadata": {
                        "id": "0f589c68-8543-42a2-b629-6fee105c8f8f",
                        "type": "SP.Data.WorkUnitsListItem"
                    },
                    "Title": "тн"
                },
                "fldDivision": {
                    "__metadata": {
                        "id": "197af749-8510-4427-acef-4ac2cb09f356",
                        "type": "SP.Data.DivisionsListItem"
                    },
                    "Id": 33,
                    "Title": "Демонтаж здания с поэлементной разборкой"
                },
                "fldUpDivision": {
                    "__metadata": {
                        "id": "9d811fb0-7ae1-493e-9bc0-f793f50dd0b6",
                        "type": "SP.Data.UpDivisionsListItem"
                    },
                    "Id": 18,
                    "Title": "Демонтаж здания с поэлементной разборкой"
                },
                "Id": 281,
                "Title": "Перевозка грузов автомобилями-самосвалами грузоподъемностью 10 т, работающих вне карьера, на расстояние: до 35 км I класс груза",
                "fldMTP": null,
                "fldNote": null,
                "fldDivisionId": 33,
                "fldUpDivisionId": 18,
                "ID": 281
            }
        ]
    }
}

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
export const getData = () => fetch(`${BASE_URL}_api/web/lists(guid'${WORKS_LIST_GUID}')/items?$Select=Id,fldDivisionId,fldUpDivisionId,fldUpDivision/Id,fldUpDivision/Title,fldDivision/Id,fldDivision/Title,Title,fldUnits/Title,fldMTP,fldNote&$expand=fldDivision,fldUpDivision,fldUnits&$top=1000`,
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
