import React, {useContext, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import TypeContext from '../../context';
import {saveItem} from '../../helpers/helpers';

/**
 * TODO: Переписать DefectiveForm на классовый компонент, Divisions и Header,
 * чтобы все данные получалисьв в одном месте(DefectiveForm) и прокидывались компонентам вниз.
 *
 */

function DefectiveForm() {
    const type = useContext(TypeContext);
    const isEditForm = type === 'edit';
    const renderISOTime = (new Date()).toISOString();
    const [saving, changeSaving] = useState(false);


    /**
     * @description получаем значение элемента.
     * Если element - HTML коллекция, то возвращаем массив значений.
     * @param {HTMLElement|HTMLCollection} element
     * @return {String|String[]} - значение элемента или массив значений HTML коллекции.
     */
    const getElementValue = (element) => {

        let value;
        if (element instanceof HTMLCollection) {
            value = [...element].map((e) => e.value);
        } else {
            value = element.value;
        }
        return value;

    };

    /**
     * @description Формирование JSON`а на основе элементов формы для тела запроса
     * @param {HTMLCollection} formElements - Все элементы формы, элементы формы.
     * @return {Object} - объект для отправки данных формы в теле запроса.
     */

    const formToJSON = (formElements) => {
        const notForJSONFieldNames = ['copy'];
        const jsonFormValues = Object.create(null);
        jsonFormValues.orgunit = null;
        jsonFormValues.title = null;
        jsonFormValues.ListDataJSON = {updivisions: []};

        console.log('formElements',formElements[`divisionTitle-1`])
        // Имена элементов формы с фильтром НЕ ПУСТО и не copy, так как его значение сохранять не надо.
        const formElementsName = [...formElements]


            .map((element) => element.name)
            .filter((name) => !notForJSONFieldNames.includes(name) && name);

        // Уникальный набор имён элементов
        // Перебирая который, определяем как и куда сохранять значение элемента

        new Set(formElementsName)
            .forEach((name) => {
                // console.log('save - name',name);
                const element = formElements[name];
                const elementValue = getElementValue(element);

                if (name === 'orgunit') {
                    const orgunitTitle = element.options[element.selectedIndex].textContent;

                    jsonFormValues[name] = elementValue;

                    jsonFormValues.title = `ДФ-${orgunitTitle}-${renderISOTime}`;
                } else if (name === 'condition') {
                    jsonFormValues[name] = elementValue;
                }
                else if (name.startsWith('updivision-')){
                // else if (!(name.startsWith('divisionTitle') || name.startsWith('updivisionTitle'))) {
                    // Если не предыдущие условия не сработали, то это элемент выбора работы
                    const [, updivisionId, , divisionId, , workId, field] = name.split('-');
                    // console.log(name)

                    const upDivisionIndex = jsonFormValues.ListDataJSON.updivisions.findIndex((upDivision) => Number(upDivision.id) === Number(updivisionId));
                    //const divisionIndex = jsonFormValues.ListDataJSON.updivisions.divisions.findIndex((division) => Number(division.id) === Number(divisionId));
                    // Если тип ещё не запомнен, то создаём объект для типа
                    // Сразу добавляем текущий тип работы
                    // И запоминаем в массиве updivisions
                    //console.log('formElements',formElements)
                    if (upDivisionIndex === -1) {
                        const works = [
                            {
                                id: workId,
                                [field]: elementValue,
                            },
                        ];

                        let divisions;
                        if (formElements[`divisionTitle-${divisionId}`] instanceof HTMLCollection){
                            if (formElements[`divisionTitle-${divisionId}`].length === 1){
                                divisions = [
                                    {
                                        id: Number(divisionId),
                                        title: formElements[`divisionTitle-${divisionId}`].value,
                                        works: works,
                                    }
                                ];
                            }
                            else{
                                divisions = [
                                    {
                                        id: Number(divisionId),
                                        title: formElements[`divisionTitle-${divisionId}`][0].value,
                                        works: works,
                                    }
                                ];
                            }
                        }
                        else {
                            if (formElements[`divisionTitle-${divisionId}`].value !== ''){
                                divisions = [
                                    {
                                        id: Number(divisionId),
                                        title: formElements[`divisionTitle-${divisionId}`].value,
                                        works: works,
                                    }
                                ];
                            }
                            else{
                                divisions = [
                                    {
                                        id: Number(divisionId),
                                        title: formElements[`divisionTitle-${divisionId}`][0].value,
                                        works: works,
                                    }
                                ];
                            }
                        }

                            // const divisions = [
                            //     {
                            //         id: Number(divisionId),
                            //         title: formElements[`divisionTitle-${divisionId}`].length === 1 ? formElements[`divisionTitle-${divisionId}`].value : formElements[`divisionTitle-${divisionId}`][0].value,
                            //         works: works,
                            //     }
                            // ];


                        const updivision = {
                            id: Number(updivisionId),
                            title: formElements[`updivisionTitle-${updivisionId}`].value,
                            divisions: divisions,
                        };

                        console.log('save - updivision',updivision );
                        jsonFormValues.ListDataJSON.updivisions.push(updivision);
                    }
                    else {
                        //   // Иначе такой тип уже есть и нам нужно проделать то же самое с видом
                        //console.log('divisions', jsonFormValues.ListDataJSON.updivisions[upDivisionIndex].divisions)

                        const divisionIndex = jsonFormValues.ListDataJSON.updivisions[upDivisionIndex].divisions.findIndex((division) => Number(division.id) === Number(divisionId));
                        //console.log('где ищу:',jsonFormValues.ListDataJSON.updivisions[upDivisionIndex].divisions)
                        //console.log('divisionIndex',divisionIndex)
                        if (divisionIndex === -1) {
                            const works =  [
                                {
                                    id: workId,
                                    [field]: elementValue,
                                },
                            ];
                            let divisions;
                            if (formElements[`divisionTitle-${divisionId}`] instanceof HTMLCollection){
                                if (formElements[`divisionTitle-${divisionId}`].length === 1){
                                    divisions = [
                                        {
                                            id: Number(divisionId),
                                            title: formElements[`divisionTitle-${divisionId}`].value,
                                            works: works,
                                        }
                                    ];
                                }
                                else{
                                    divisions = [
                                        {
                                            id: Number(divisionId),
                                            title: formElements[`divisionTitle-${divisionId}`][0].value,
                                            works: works,
                                        }
                                    ];
                                }
                            }
                            else {
                                if (formElements[`divisionTitle-${divisionId}`].value !== ''){
                                    divisions = [
                                        {
                                            id: Number(divisionId),
                                            title: formElements[`divisionTitle-${divisionId}`].value,
                                            works: works,
                                        }
                                    ];
                                }
                                else{
                                    divisions = [
                                        {
                                            id: Number(divisionId),
                                            title: formElements[`divisionTitle-${divisionId}`][0].value,
                                            works: works,
                                        }
                                    ];
                                }
                            }

                            // const divisions = [{
                            //     id: Number(divisionId),
                            //     title: formElements[`divisionTitle-${divisionId}`].length === 1 ? formElements[`divisionTitle-${divisionId}`].value : formElements[`divisionTitle-${divisionId}`][0].value,
                            //     works: works,
                            // }];

                           // console.log('save - division',divisions)
                                jsonFormValues.ListDataJSON.updivisions[upDivisionIndex].divisions.push(divisions[0]);
                        } else {
                            // Иначе такая вид уже есть и нам нужно проделать то же самое с работой раздела
                            //console.log('find work',jsonFormValues.ListDataJSON.updivisions[upDivisionIndex].divisions[divisionIndex]);
                            const workIndex = jsonFormValues.ListDataJSON.updivisions[upDivisionIndex].divisions[divisionIndex].works.findIndex((work) => Number(work.id) === Number(workId));

                            if (workIndex === -1) {
                                const work = {
                                    id: workId,
                                    [field]: elementValue,
                                };

                               // console.log('save - works', work);
                                jsonFormValues.ListDataJSON.updivisions[upDivisionIndex].divisions[divisionIndex].works.push(work);
                            } else {
                                //console.log('update - works', field);
                                jsonFormValues.ListDataJSON.updivisions[upDivisionIndex].divisions[divisionIndex].works[workIndex][field] = elementValue;
                            }
                        }
                    }
                }
            });

        console.log('jsonFormValues', jsonFormValues)
        return jsonFormValues;
    };

    const formSubmitHandler = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const formElements = form.elements;
        const formDataJSON = formToJSON(formElements);
        let saveType = isEditForm;

        if (isEditForm && formElements.copy.checked) {
            saveType = false;
        }

        saveItem(formDataJSON, saveType);
        changeSaving(true);
    };

    return (
        <Form action="?" method="POST" onSubmit={formSubmitHandler}>
            <Header time={renderISOTime}/>
            <Body/>
            <Footer saving={saving}/>
        </Form>
    );
}

export default DefectiveForm;
