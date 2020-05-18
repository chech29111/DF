import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Section from '../DefectiveForm/Section/Section';
import UpWorkSelector from '../UpWorkSelector/UpWorkSelector';


function UpDivisionSelector({
                              divisionId,
                              title,
                                divisions,
                              initialValue,
                              disabled,
                              removeDivisionHandler,
                                DivisionNamePrefix,
                          }) {
    const removeDivisionSelector = () => {
        removeDivisionHandler(divisionId);
    };

    return (
        <>

            {!disabled && (
                <ButtonToolbar>
                    <Button
                        type="button"
                        variant={null}
                        onClick={removeDivisionSelector}
                        size="sm"
                        className="close ml-auto"
                        aria-label="Удалить раздел"
                        title="Удалить раздел"
                    >
                        &times;
                    </Button>
                </ButtonToolbar>
            )}
            <Section title={`Добавление работ для ${title}`}>
                <UpWorkSelector
                    divisions={divisions}
                    initialValue={initialValue}
                    disabled={disabled}
                    DivisionNamePrefix={DivisionNamePrefix}
                />
            </Section>
        </>
    );
}

export default UpDivisionSelector;
