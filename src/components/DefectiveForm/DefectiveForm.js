import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import TypeContext from '../../context';
import { saveItem } from '../../helpers/helpers';

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
      console.log('element',element)
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
    jsonFormValues.ListDataJSON = { updivisions: [] };
      console.log('formElements',formElements)


      // Имена элементов формы с фильтром НЕ ПУСТО и не copy, так как его значение сохранять не надо.
    const formElementsName = [...formElements]




      .map((element) => element.name)
      .filter((name) => !notForJSONFieldNames.includes(name) && name);

    // Уникальный набор имён элементов
    // Перебирая который, определяем как и куда сохранять значение элемента

    new Set(formElementsName)
      .forEach((name) => {
        const element = formElements[name];
        const elementValue = getElementValue(element);





        if (name === 'orgunit') {
          const orgunitTitle = element.options[element.selectedIndex].textContent;

          jsonFormValues[name] = elementValue;

          jsonFormValues.title = `ДФ-${orgunitTitle}-${renderISOTime}`;
        } else if (name === 'condition') {
          jsonFormValues[name] = elementValue;
        } else if (!name.startsWith('divisionTitle')) {
          // Если не предыдущие условия не сработали, то это элемент выбора работы
          const [, updivisionId, ,divisionId, , workId, field] = name.split('-');

          const divisionUpIdx = jsonFormValues.ListDataJSON.updivisions.findIndex((division) => Number(division.id) === Number(updivisionId));
          //const divisionIdx = jsonFormValues.ListDataJSON.updivisions.divisions.findIndex((division) => Number(division.id) === Number(divisionId));

            let divisions;
          let updivision;

          // Если раздел ещё не запомнен, то создаём объект для раздела
          // Сразу добавляем текущую работу
          // И запоминаем в массиве divisions
          if (divisionUpIdx === -1) {

              divisions = [
                  {
                      id: Number(divisionId),
                      title: formElements[`divisionTitle-${divisionId}`].value,
                      works: [
                          {
                              id: workId,
                              [field]: elementValue,
                          },
                      ],
                  }
                  ];
              updivision = {
                  id: Number(updivisionId),
                  title: formElements[`updivisionTitle-${updivisionId}`].value,
                  divisions: divisions,
              };


            jsonFormValues.ListDataJSON.updivisions.push(updivision);

          // } else {
          // //   // Иначе такая работа уже есть и нам нужно проделать то же самое с работой раздела
          //    divisions = jsonFormValues.ListDataJSON.updivisions[divisionUpIdx].divisions;
          //   const divisionIdx = divisions.findIndex((division) => division.id === divisionId);
          //
          //
          //     if (divisionIdx === -1) {
          //         divisions = [{
          //             id: Number(divisionId),
          //             title: formElements[`divisionTitle-${divisionId}`].value,
          //             works: [
          //                 {
          //                     id: workId,
          //                     [field]: elementValue,
          //                 },
          //             ],
          //         }];
          //         jsonFormValues.ListDataJSON.updivisions[divisionUpIdx].divisions.push(divisions);
              // } else {
              //     // Иначе такая работа уже есть и нам нужно проделать то же самое с работой раздела
              //     divisions = jsonFormValues.ListDataJSON.updivisions[divisionUpIdx].divisions[divisionIdx];
              //     console.log(jsonFormValues.ListDataJSON.updivisions[divisionUpIdx].divisions[divisionIdx])
              //     const workIdx = divisions.works.findIndex((work) => work.id === workId);
              //
              //     if (workIdx === -1) {
              //         const work = {
              //             id: workId,
              //             [field]: elementValue,
              //         };
              //         divisions.works.push(work);
              //     } else {
              //         divisions.works[workIdx][field] = elementValue;
              //     }
              }








          // }






        //
        // else {
        //         // Иначе такая работа уже есть и нам нужно проделать то же самое с работой раздела
        //         division = jsonFormValues.ListDataJSON.updivisions[divisionIdx];
        //         const workIdx = division.works.findIndex((work) => work.id === workId);
        //
        //         if (workIdx === -1) {
        //             const work = {
        //                 id: workId,
        //                 [field]: elementValue,
        //             };
        //             division.works.push(work);
        //         } else {
        //             division.works[workIdx][field] = elementValue;
        //         }
        //     }






        }
      });
    //return jsonFormValues;
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
      {/*{<Header time={renderISOTime}/>}*/}
      <Body />
      <Footer saving={saving}/>
    </Form>
  );
}

export default DefectiveForm;
