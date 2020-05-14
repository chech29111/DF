import React, {useState, useEffect, useContext} from 'react';
import StyledReactSelect from '../StyledReactSelect/StyledReactSelect';
// import { CommonLoading } from 'react-loadingg';
import Loader from '../Loader/Loader';
import Section from '../DefectiveForm/Section/Section';
import DivisionSelector from '../DivisionSelector/DivisionSelector';
import UpDivisionSelector from '../UpDivisionSelector/UpDivisionSelector';

// import { getData, getItem } from '../../data';
import {getData, getItem} from '../../helpers/helpers';
import TypeContext from '../../context';

// import Export from '../Export/Export';

/**
 * TODO: Убрать дублирование кода при работе с onChange в react select тут и в workSelector.
 * Возможно reducer`ы решат вопрос. Или сделать отдельный компонент (типа Selector).
 */

function Divisions() {
    const type = useContext(TypeContext);
    const isDisplayForm = type === 'disp';
    const isEditForm = type === 'edit';
    const isNewForm = type === 'new';

    const [state, setState] = useState({
        divisions: [],
        updivisions: [],
        selectedDivisions: [],
        selectedUpDivisions: [],
        selectedUpDivisionsNew: [],
        itemData: {
            divisions: [],
            updivisions: [],
        },
        itemUpData: {
            divisions: [],
            updivisions: [],
        },
    });

    // аналог componentDidMount - получаем данные.
    // обновляем стэйт.
    // Зависимость от изменения значения переменной type;
    useEffect(() => {
        if (isNewForm) {
            getData().then((data) => {
                setState((currentState) => ({
                    ...currentState,
                    updivisions: [...data.updivisions]
                }));
            });

        } else if (isEditForm || isDisplayForm) {
            Promise.all([getData(), getItem()]).then((data) => {
                    const itemUpDivisions = [...data[1].updivisions];
                    //console.log('itemUpDivisions',itemUpDivisions)
                    //console.log('data',data)
                    setState((currentState) => ({
                        ...currentState,
                        updivisions: [...data[0].updivisions],
                        selectedUpDivisions: itemUpDivisions,
                        selectedUpDivisionsNew: [],
                        itemUpData: itemUpDivisions,
                    }));
                }
            );
        }
    }, [isDisplayForm, isEditForm, isNewForm, type]);

    /**
     * @description обработчик удаление раздела из ReactSelect.
     * @param {Number|Null} id - id раздела, который нужно удалить. null - удалить все.
     */




        // const pickDivisionHandler = (option) => {
        //   setState((currentState) => ({
        //     ...currentState,
        //     selectedDivisions: [...currentState.selectedDivisions, option],
        //   }));
        // };

    const removeUpDivisionHandler = (id) => {
        //console.log('remove')
            setState((currentState) => {
                const selectedUpDivisions = id === null
                    ? []
                    : currentState.selectedUpDivisions.filter((division) => division.id !== id);

                return {
                    ...currentState,
                    selectedUpDivisions,
                };
            });
        };
    //console.log('currentState',state)
    //
    // const removeDivisionHandler = () => {
    //
    //
    //         setState(() => ({
    //
    //             selectedUpDivisions divisions: [],
    //         }));
    //         //console.log('currentState.selectedUpDivisions',currentState.selectedUpDivisions[0].divisions)
    //
    // };

    const pickUpDivisionHandler = (option) => {
        setState((currentState) => {
                return {
                    ...currentState,
                    selectedUpDivisions: [...currentState.selectedUpDivisions, option],
                    selectedUpDivisionsNew: [...currentState.selectedUpDivisionsNew, option]
                }
            }
        );
    };

    // console.log('selectedUpDivisions',state.selectedUpDivisions)
    const getOptionLabel = (option) => option.title;
    const getOptionValue = (option) => option.id;

    // function onChangeReactSelect(selectedValues, evtData) {
    //   const { action } = evtData;
    //   let option;
    //   switch (action) {
    //     case 'select-option':
    //       option = evtData.option;
    //       pickDivisionHandler(option);
    //       break;
    //     case 'remove-value':
    //     case 'pop-value':
    //       option = evtData.removedValue;
    //       removeDivisionHandler(option.id);
    //       break;
    //     case 'clear':
    //       removeDivisionHandler(null);
    //       break;
    //     default:
    //       throw new Error('Unhandled react select action type.');
    //   }
    // }

    function onChangeUpReactSelect(selectedValues, evtData) {
        const {action} = evtData;
        let option;
        switch (action) {
            case 'select-option':
                option = evtData.option;
                //console.log(option)
                pickUpDivisionHandler(option);

                break;
            case 'remove-value':
            case 'pop-value':
                option = evtData.removedValue;
                removeUpDivisionHandler(option.id);
                break;
            case 'clear':
                removeUpDivisionHandler(null);
                break;
            default:
                throw new Error('Unhandled react select action type.');
        }
    }

    // Генерация контейнеров с выбором разделов
    // const divisionSelectorsConts = state.selectedDivisions.map((selectorDivision) => {
    //   const division = state.divisions.find((item) => item.id === selectorDivision.id);
    //   const { id, title } = division;
    //   let { works } = division;
    //   const initialValue = isDisplayForm || isEditForm
    //     ? state.itemData.find((item) => item.id === selectorDivision.id)
    //     : null;
    //   const namePrefix = `division-${id}`;
    //   if (initialValue) {
    //     // Если есть начальное значение, значит это форма просмотра\редактирования. Значит:
    //     // мержим работы между уже выбранными в ведомости и оставшимися не выбранными,
    //     // чтобы предотвратить коллизию айдишников и
    //     // позволить выбрать(добавить) ранее не выбранные работы.
    //     const notSelectedWorks = works.filter((work) => {
    //       const idx = initialValue.works.findIndex((initWork) => Number(initWork.id) === Number(work.id));
    //       return idx === -1;
    //     });
    //     works = [...notSelectedWorks, ...initialValue.works];
    //   }
    //   return <DivisionSelector
    //     removeDivisionHandler={removeDivisionHandler}
    //     title={title}
    //     divisionId={id}
    //     key={id}
    //     works={works}
    //     initialValue={initialValue}
    //     namePrefix={namePrefix}
    //     disabled={isDisplayForm}
    //   />;
    // });

    const arrayIdUpSelectNew = [];
    for (let i = 0; i < state.selectedUpDivisionsNew.length; i++) {
        if (!arrayIdUpSelectNew.includes(state.selectedUpDivisionsNew[i].id))
            arrayIdUpSelectNew.push(state.selectedUpDivisionsNew[i].id)
    }
    //console.log('arrayIdUpSelectNew',arrayIdUpSelectNew)



    const divisionUpSelectorsConts = state.selectedUpDivisions.map((selectorUpDivision) => {
         //console.log('selectorUpDivision',selectorUpDivision.id)
       //  console.log(selectorUpDivision.id)
       // console.log('array', arrayIdUpSelectNew)
       //  if (arrayIdUpSelectNew.includes(selectorUpDivision.id)){
       //      console.log('arrayIdUpSelectNew',arrayIdUpSelectNew)
       //      //delete arrayIdUpSelectNew[1];
       //      selectorUpDivision.id = Math.floor(Math.random() * (2000 - 1000)) + 1000;
       //
       //      console.log(selectorUpDivision.id);
       //     console.log('delete')
       //  }





        //const updivision = state.updivisions.find((item) => item.id === selectorUpDivision.id);



        const updivision = state.updivisions.find((item) => item.id === selectorUpDivision.id);
//console.log('updivision',updivision);



        const {id, title} = updivision;
        let {divisions} = updivision;
//console.log({divisions})




        const initialValue = isDisplayForm || isEditForm
            ? state.itemUpData.find((item) => item.id === selectorUpDivision.id)
            : state.divisions;
        //console.log('initialValue',initialValue)
        //console.log('initialValue',initialValue)
        //console.log('itemUpData',state.itemUpData)
        if (arrayIdUpSelectNew.includes(selectorUpDivision.id)) {
            if (initialValue !== undefined) {
                initialValue.divisions = []
            }

        }
        const DivisionNamePrefix = `updivision-${id}`;


        if (initialValue) {
            // Если есть начальное значение, значит это форма просмотра\редактирования. Значит:
            // мержим работы между уже выбранными в ведомости и оставшимися не выбранными,
            // чтобы предотвратить коллизию айдишников и
            // позволить выбрать(добавить) ранее не выбранные работы.
            const notSelectedWorks = divisions.filter((work) => {
                const idx = initialValue.divisions.findIndex((initDivisions) => Number(initDivisions.id) === Number(divisions.id));
                return idx === -1;
            });
            divisions = [...notSelectedWorks, ...initialValue.divisions];
            //console.log('divisions',divisions)

        }
        return <div><UpDivisionSelector
            removeDivisionHandler={removeUpDivisionHandler}
            title={title}
            divisionId={id}
            key={id}
            divisions={divisions}
            initialValue={initialValue}
            DivisionNamePrefix={DivisionNamePrefix}
            disabled={isDisplayForm}
        />

        </div>
    })


    // Генерация скрытых инпутов, содержаших значение названий выбранных разделов.
    // Используется при генерации объекта для отправки формы.

    const selectedUpDivisionsTitles = state.selectedUpDivisions.map((selectedDiv) => <input type="hidden"
                                                                                            name={`updivisionTitle-${selectedDiv.id}`}
                                                                                            value={selectedDiv.title}
                                                                                            key={selectedDiv.id}/>);


    return (
        <>
            {state.updivisions.length > 0 ? (
                <>
                    <Section title="Выбор типа">
                        <StyledReactSelect
                            isMulti
                            onChange={onChangeUpReactSelect}
                            value={state.selectedUpDivisions}
                            options={state.updivisions}
                            getOptionLabel={getOptionLabel}
                            getOptionValue={getOptionValue}
                            isDisabled={isDisplayForm}
                            placeholder="Начните ввод или выберите мышкой..."
                            noOptionsMessage={() => <span>Доступных для выбора разделов нет.</span>}
                        />


                        {divisionUpSelectorsConts}

                        {selectedUpDivisionsTitles}


                    </Section>
                </>
            ) : (
                <Loader/>
            )}
        </>
    );
}

export default Divisions;
