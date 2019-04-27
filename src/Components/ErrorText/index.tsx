import React, { FunctionComponent } from 'react';
import { FormText } from 'reactstrap';

type Props = {
    show: boolean;
    error: string;
    style?: object;
};

export const ErrorText: FunctionComponent<Props> = (props) => props.show ? (
    <FormText style={props.style}>
        <div style={{ color: '#d63031' }}>
            {props.error}
        </div>
    </FormText>
) : null;