import React, {useContext, useEffect, useState} from 'react';
import StyledReactSelect from '../StyledReactSelect/StyledReactSelect';
import TypeContext from "../../context";
import DivisionSelector from "../DivisionSelector/DivisionSelector";
import {getData, getItem} from "../../helpers/helpers";

function WorkSelector({
                          divisions, initialValue, disabled, namePrefix, DivisionNamePrefix
                      }) {



    const type = useContext(TypeContext);
    const isDisplayForm = type === 'disp';
    const isEditForm = type === 'edit';
    const isNewForm = type === 'new';


    // const [state, setState] = useState({
    //     divisions: [],
    //     updivisions: [],
    //     selectedDivisions: [],
    //     selectedUpDivisions: [],
    //     selectedUpDivisionsNew: [],
    //     itemData: {
    //         divisions: [],
    //         updivisions: [],
    //     },
    //     itemUpData: {
    //         divisions: [],
    //         updivisions: [],
    //     },
    // });
    //
    // // аналог componentDidMount - получаем данные.
    // // обновляем стэйт.
    // // Зависимость от изменения значения переменной type;
    // useEffect(() => {
    //     if (isNewForm) {
    //         getData().then((data) => {
    //             setState((currentState) => ({
    //                 ...currentState,
    //                 updivisions: [...data.divisions]
    //             }));
    //         });
    //
    //     } else if (isEditForm || isDisplayForm) {
    //         Promise.all([getData(), getItem()]).then((data) => {
    //                 const itemUpDivisions = [...data[1].updivisions];
    //                 //console.log('itemUpDivisions',itemUpDivisions)
    //                 console.log('data',data)
    //                 setState((currentState) => ({
    //                     ...currentState,
    //                     divisions: [...data[0].divisions],
    //                     selectedUpDivisions: itemUpDivisions,
    //                     selectedUpDivisionsNew: [],
    //                     itemUpData: itemUpDivisions,
    //                 }));
    //             }
    //         );
    //     }
    // }, [isDisplayForm, isEditForm, isNewForm, type]);



    const initialWorks = initialValue && initialValue.divisions ? initialValue.divisions : [];
    const [selectedWorks, changeSelectedWorks] = useState(
        initialWorks.length > 0 ? initialWorks : [],
    );

    //console.log('selectedWorks',selectedWorks)
    //console.log('changeSelectedWorks',changeSelectedWorks)



    const pickWorkHandler = (option) => {
        console.log('option',option)



        let alloption =[...selectedWorks, option];
        //console.log("pickWorkHandler->alloption",alloption);
        changeSelectedWorks(alloption);
       // console.log("pickWorkHandler->selectedWorks",selectedWorks);
        //changeSelectedWorks([...selectedWorks, option]);
    };

    const removeWorkHandler = (id) => {
        const newSelectedWorks = id === null
            ? []
            : selectedWorks.filter((work) => Number(work.id) !== Number(id));
        changeSelectedWorks(newSelectedWorks);
    };

    const changeWorks = (selectedValues, evtData) => {
        const { action } = evtData;
        let option;

        switch (action) {
            case 'select-option':
                option = evtData.option;
                console.log('evtData.option',evtData.option)
                pickWorkHandler(option);
                option.options = option.works
                option.works = []
                break;
            case 'remove-value':
            case 'pop-value':
                option = evtData.removedValue;
                removeWorkHandler(option.id);
                break;
            case 'clear':
                removeWorkHandler(null);
                break;
            default:
                throw new Error('Unhandled react select action type.');
        }
    };

    const removeWork = (id) => {
        changeSelectedWorks([...selectedWorks.filter((work) => Number(work.id) !== Number(id))]);
    };



    // const arrayIdSelectNew = [];
    // for (let i = 0; i < state.selectedDivisionsNew.length; i++) {
    //     if (!arrayIdSelectNew.includes(state.selectedDivisionsNew[i].id))
    //         arrayIdSelectNew.push(state.selectedDivisionsNew[i].id)
    // }
    // console.log('arrayIdSelectNew',arrayIdSelectNew)



    console.log('selectedWorks',selectedWorks);

    const divisionSelectorsConts = selectedWorks.map((selectorDivision) => {

        const divisionValue = selectedWorks.find((item) => item.id === selectorDivision.id);
        const {id, title} = divisionValue;
        let {works} = divisionValue;
        let {options} = divisionValue.options
        console.log('divisionValue.options',divisionValue.options)


        const initialValueDiv = isDisplayForm || isEditForm
            ? selectedWorks.find((item) => item.id === selectorDivision.id)
            : divisionValue.options;


        console.log('selectedWorks',selectedWorks);



        //selectedWorks[0].option = selectedWorks[0].works


        // if (arrayIdSelectNew.includes(selectorDivision.id)) {
        //     if (initialValue !== undefined) {
        //         initialValue.works = []
        //     }
        // }
        console.log('initialValueDiv',initialValueDiv)
        const namePrefix = `division-${id}`;

        if (initialValueDiv) {
            // Если есть начальное значение, значит это форма просмотра\редактирования. Значит:
            // мержим работы между уже выбранными в ведомости и оставшимися не выбранными,
            // чтобы предотвратить коллизию айдишников и
            // позволить выбрать(добавить) ранее не выбранные работы.
            const notSelectedWorks = works.filter((works) => {
                const idx = initialValueDiv.works.findIndex((initWork) => Number(initWork.id) === Number(works.id));
                return idx === -1;

            });

            works = [...notSelectedWorks, ...initialValueDiv.works];
            //console.log("UpWorkSelector->works",works);
            //console.log("UpWorkSelector->initialValueDiv",initialValueDiv);
            //initialValueDiv.works = [];
        }

        return <DivisionSelector
            removeDivisionHandler={removeWork}
            title={title}
            divisionId={id}
            key={id}
            works={works}
            initialValue={initialValueDiv}
            namePrefix={namePrefix}
            disabled={isDisplayForm}
            DivisionNamePrefix={DivisionNamePrefix}
        />;
    });

    const getOptionLabel = (option) => option.title;
    const getOptionValue = (option) => option.id;


    const selectedDivisionsTitles = selectedWorks.map((selectedDiv) => <input type="hidden"
                                                                                        name={`divisionTitle-${selectedDiv.id}`}
                                                                                        value={selectedDiv.title}
                                                                                        key={selectedDiv.id}/>);

    return (
        <>
            <StyledReactSelect
                asHeader
                options={divisions}
                value={selectedWorks}
                isMulti
                getOptionLabel={getOptionLabel}
                getOptionValue={getOptionValue}
                onChange={changeWorks}
                isDisabled={disabled}
                placeholder="Начните ввод или выберите мышкой..."
                noOptionsMessage={() => <span>Доступных для выбора работ нет.</span>}
            />
            {divisionSelectorsConts}
            {/*{selectedDivisionsTitles}*/}
            {/*<WorkTable*/}
            {/*    works={selectedWorks}*/}
            {/*    disabled={disabled}*/}
            {/*    removeHandler={removeWork}*/}
            {/*    namePrefix={namePrefix}*/}
            {/*    DivisionNamePrefix={DivisionNamePrefix}*/}
            {/*/>*/}
        </>
    );
}

export default WorkSelector;
