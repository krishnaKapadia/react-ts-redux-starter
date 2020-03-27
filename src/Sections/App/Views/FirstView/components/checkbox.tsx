import React from 'react';
import './styling.css';

export class Checkbox extends React.Component<any, any> {


  render() {
    const { id, label, type, indeterminate, hasError, ...inputProps } = this.props;
    const checkboxClassname = `
      m-checkbox
      ${type === 'switch' && 'm-checkbox--switch'}
      ${hasError && 'm-checkbox--has-error'}
    `;

    const inputClassname = `
      m-checkbox__input
      ${type === 'switch' && 'm-checkbox--switch__input'}
      ${hasError && 'm-checkbox--has-error__input'}
    `;

    const labelClassname = `
      m-checkbox__label
      ${type === 'switch' && 'm-checkbox--switch__label'}
    `;

    return (
      <div className={checkboxClassname}>
        <input
          onClick={this.props.onClick}
          type="checkbox"
          className={inputClassname}
          id={id}
          {...inputProps}
        />
      </div>
    );
  }
}

// ReactDOM.render(
//   <div className="content">
//     <h1>
//       ReactJS <span>checkbox</span> component
//     </h1>
//     <Checkbox id="unchecked" label="Unchecked" />
//     <Checkbox id="checked" label="Checked" checked />
//     <Checkbox id="indeterminate" label="Indeterminate" indeterminate />
//     <Checkbox id="switch" label="Switch" type="switch" />
//     <Checkbox id="hasError" label="Has error" hasError />
//     <Checkbox id="disabled" label="Disabled" disabled />
//   </div>,
//   document.getElementById('container')
// );
