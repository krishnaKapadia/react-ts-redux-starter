import { IStyle } from "fela";
import { merge, reduce } from 'lodash';

// Applies conditional styling to a json object and returns it to be used by Fela
export function applyModifiers(...rules: [boolean, IStyle][]): (style: IStyle) => IStyle {
    return function addConditionalStyle(style: IStyle) {
        return reduce(
            rules, (modifiedStyle, [conditionStatus, conditionalStyle]) => {
                if (conditionStatus) {
                    return merge({ ...modifiedStyle }, { ...conditionalStyle });
                }
                return style;
            },
            style
        );
    };
}