import React, {useContext, useEffect, useState} from 'react';
import StyledReactSelect from '../StyledReactSelect/StyledReactSelect';
import TypeContext from "../../context";
import DivisionSelector from "../DivisionSelector/DivisionSelector";
import {getData, getItem} from "../../helpers/helpers";

function WorkSelector({
                          divisionsInUp, initialValue, disabled, namePrefix, DivisionNamePrefix
                      }) {

//console.log('divisionsInUp',divisionsInUp)

    const type = useContext(TypeContext);
    const isDisplayForm = type === 'disp';
    const isEditForm = type === 'edit';
    const isNewForm = type === 'new';



//console.log('initialValue',initialValue)

    const initialWorks = initialValue && initialValue.divisions ? initialValue.divisions : [];
    const [selectedWorks, changeSelectedWorks] = useState(
        initialWorks.length > 0 ? initialWorks : [],
    );

    //console.log('selectedWorks',selectedWorks)
    //console.log('changeSelectedWorks',changeSelectedWorks)



    const pickWorkHandler = (allWorks) => {

        changeSelectedWorks([...selectedWorks, allWorks]);


    };

    const removeWorkHandler = (id) => {
        const newSelectedWorks = id === null
            ? []
            : selectedWorks.filter((work) => Number(work.id) !== Number(id));
        changeSelectedWorks(newSelectedWorks);
        console.log('selectedWorks ->',selectedWorks)
    };

    const changeWorks = (selectedValues, evtData) => {
        const { action } = evtData;
        let allWorks;

        switch (action) {
            case 'select-option':

                allWorks = evtData.option;
                console.log('allWorks1.works',allWorks.works);
                if (allWorks.works.length !== 0){
                    console.log('v if')
                    allWorks.allWorks = allWorks.works;
                    console.log('allWorks.allWorks',allWorks.allWorks)
                    allWorks.works = []

                }
                else{
                    console.log('v else')
                    allWorks.works = allWorks.allWorks;
                    allWorks.works = []
                }


                console.log('allWorks2',allWorks);

                // if (selectedWorks.works === []){
                //     allWorks.allWorks = allWorks.allWorks
                // }
                // else{
                //     allWorks.allWorks = allWorks.works
                //     allWorks.works = []
                // }

                //console.log('evtData.option',evtData.option)
                pickWorkHandler(allWorks);


                break;
            case 'remove-value':
            case 'pop-value':
                allWorks = evtData.removedValue;
                removeWorkHandler(allWorks.id);
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


        //console.log('divisionValue.options',divisionValue.options)


        const initialValueDiv = isDisplayForm || isEditForm
            ? selectedWorks.find((item) => item.id === selectorDivision.id)
            : divisionValue;






        //selectedWorks[0].option = selectedWorks[0].works


        // if (arrayIdSelectNew.includes(selectorDivision.id)) {
        //     if (initialValue !== undefined) {
        //         initialValue.works = []
        //     }
        // }
        //console.log('initialValueDiv',initialValueDiv)
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
//console.log('notSelectedWorks',notSelectedWorks)
            works = [...notSelectedWorks, ...initialValueDiv.works];
            //console.log("UpWorkSelector->works",works);
            //console.log("UpWorkSelector->initialValueDiv",initialValueDiv);
            //initialValueDiv.works = [];
        }
        const optionWorks = divisionsInUp.find((item) => item.id === selectorDivision.id)
        if (!initialValueDiv.allWorks) {
            initialValueDiv.allWorks = optionWorks.works;
        }
        console.log('optionWorks',optionWorks)
        console.log('initialValueDiv',initialValueDiv)


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
                options={divisionsInUp}
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
