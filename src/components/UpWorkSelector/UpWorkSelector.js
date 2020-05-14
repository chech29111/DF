import React, {useContext, useEffect, useState} from 'react';
import StyledReactSelect from '../StyledReactSelect/StyledReactSelect';
import WorkTable from '../WorkTable/WorkTable';
import TypeContext from "../../context";
import {getData, getItem} from "../../helpers/helpers";
import DivisionSelector from "../DivisionSelector/DivisionSelector";

function WorkSelector({
                          divisions, initialValue, disabled, namePrefix, DivisionNamePrefix
                      }) {



    const type = useContext(TypeContext);
    const isDisplayForm = type === 'disp';
    const isEditForm = type === 'edit';
    const isNewForm = type === 'new';





    const initialWorks = initialValue && initialValue.divisions ? initialValue.divisions : [];
    const [selectedWorks, changeSelectedWorks] = useState(
        initialWorks.length > 0 ? initialWorks : [],
    );



    const pickWorkHandler = (option) => {

        changeSelectedWorks([...selectedWorks, option]);

    };
    const removeWorkHandler = (id) => {
        console.log('deleteALL');

        const newSelectedWorks = id === null
            ? []
            : selectedWorks.filter((work) => Number(work.id) !== Number(id));
        changeSelectedWorks(newSelectedWorks);
        console.log('selectedWorks',selectedWorks)
    };

    const changeWorks = (selectedValues, evtData) => {
        const { action } = evtData;
        let option;

        switch (action) {
            case 'select-option':
                option = evtData.option;
                pickWorkHandler(option);
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
        console.log('delete')
        changeSelectedWorks([...selectedWorks.filter((work) => Number(work.id) !== Number(id))]);

    };



    // const arrayIdSelectNew = [];
    // for (let i = 0; i < state.selectedDivisionsNew.length; i++) {
    //     if (!arrayIdSelectNew.includes(state.selectedDivisionsNew[i].id))
    //         arrayIdSelectNew.push(state.selectedDivisionsNew[i].id)
    // }
    //console.log('arrayIdSelectNew',arrayIdSelectNew)


    // Генерация контейнеров с выбором разделов

    const divisionSelectorsConts = selectedWorks.map((selectorDivision) => {


        const divisionValue = divisions.find((item) => item.id === selectorDivision.id);
        //console.log('=====================')

        // console.log('selectorDivision.id',selectorDivision.id)
        // console.log('divisionValue',divisionValue)

        //console.log('=======================')
        const {id, title} = divisionValue;
        let {works} = divisionValue;


        const initialValueDiv = isDisplayForm || isEditForm
            ? selectedWorks.find((item) => item.id === selectorDivision.id)
            : selectedWorks[selectorDivision.id];

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
            console.log('works',works);

            const notSelectedWorks = works.filter((works) => {
                const idx = initialValueDiv.works.findIndex((initWork) => Number(initWork.id) === Number(works.id));
                return idx === -1;

            });

            console.log('notSelectedWorks',notSelectedWorks)
            works = [...notSelectedWorks, ...initialValueDiv.works];



        }



        return <DivisionSelector
            removeDivisionHandler={removeWork}
            title={title}
            divisionId={id}
            key={id}
            works={works}
            initialValue={initialValue}
            namePrefix={namePrefix}
            disabled={isDisplayForm}
            DivisionNamePrefix={DivisionNamePrefix}
        />;

    });

    const getOptionLabel = (option) => option.title;
    const getOptionValue = (option) => option.id;


    // const selectedDivisionsTitles = state.selectedDivisions.map((selectedDiv) => <input type="hidden"
    //                                                                                     name={`divisionTitle-${selectedDiv.id}`}
    //                                                                                     value={selectedDiv.title}
    //                                                                                     key={selectedDiv.id}/>);

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
