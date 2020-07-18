import { IStyle } from 'fela';
import { createComponent } from 'react-fela';

const StyledContainer = (): IStyle => ({
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
});

export const Container = createComponent(StyledContainer);


const StyledHeader = (): IStyle => ({
    color: '#FF6F91',
    padding: '24px',
    width: '100%',
    textAlign: 'left',
    fontFamily: 'Montserrat',
    fontSize: '1.4rem',
    fontWeight: 600
});

export const Header = createComponent(StyledHeader);

const StyledSection = ({ color }: { color?: string }): IStyle => ({
    backgroundColor: color!,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
});

export const Section = createComponent(StyledSection);

const StyledH1 = (): IStyle => ({
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Work Sans',
    fontSize: '1.50rem',
    fontWeight: 600
});
export const BigText = createComponent(StyledH1);


const StyledH4 = (): IStyle => ({
    fontWeight: 700
});
export const H4 = createComponent(StyledH4, 'h5');

const StyledH5 = (): IStyle => ({
    fontSize: '1.2rem',
    fontFamily: "Work Sans",
    fontWeight: 600
});
export const H5 = createComponent(StyledH5, 'p');

const StyledP = ({ lightWeight, dark }: { lightWeight?: boolean, dark?: boolean }): IStyle => ({
    fontSize: '1.0rem',
    fontFamily: "Work Sans",
    color: dark ? "000" : "#A9A9A9",
    fontWeight: lightWeight ? 300 : 400
});
export const P = createComponent(StyledP, 'p');

