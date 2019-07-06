import React, { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import Row from 'reactstrap/lib/Row';
import { IoMdContacts, IoIosAddCircleOutline, IoIosInformationCircle } from 'react-icons/io';
import { FaRegHeart, FaUserCircle } from 'react-icons/fa';
import { ICharity } from '../../Models';
import './styles/style.css';
import posed from 'react-pose';

type Props = {
  data: ICharity;
  selectionHandler: (id: any) => void;
};

const CharityModule: FunctionComponent<Props> = ({ data, selectionHandler }) => {
  const [selected, select] = useState(false);
  const { _id, name, label, desc, donatorCount, logoUrl } = data;
  const linkOptions = {
    pathname: `/charities/${name}`,
    state: {
      ...data
    }
  };
  const HoverAnimation = posed.div({
    hoverable: true,
    init: {
      scale: 1,
      rotateZ: 0,
      boxShadow: '0px 0px 0px rgba(0,0,0,0)'
    },
    hover: {
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 0
      },
      scale: 1.1,
      // rotateZ: 5,
    },

  });


  return (
    <div className={`charity-card ${ selected ? "charity-card--selected" : ''}`} onClick={() => { 
        select(!selected);
        selectionHandler(_id.toString());
      }}>
        <div className="charity-card__header">
          <h2>{label}</h2>
        </div>

        <div className="charity-card__logo">
          {/* https://drivewealth.imgix.net/symbols/fb.png?fit=fillmax&w=70&h=70 */}
          <img src={logoUrl} alt={`${name} banner image.`} />
        </div>

        <div className="charity-card__text">
          <p>Let's give them a better life!</p>
        </div>

      <Row className="charity-card__footer">
        <HoverAnimation>
          <IoIosAddCircleOutline className={"clickable"} size={32} color={"#ff9ff3"} />
        </HoverAnimation>

        {
          donatorCount > 0 &&
          <div className={"icon-stacked"}>
            <FaUserCircle className={"clickable"} size={24} color={"#1dd1a1"} />
            <p style={{ color: '#1dd1a1', fontWeight: 600, fontSize: '12px' }}>1.5K</p>
          </div>
        }

        <HoverAnimation>
          <Link className={"clickable"} to={linkOptions} style={{ textDecoration: 'none', color: 'inherit' }}>
            <IoIosInformationCircle size={32} color={"#54a0ff"} />
          </Link>
        </HoverAnimation>
      </Row>
    </div>
  );
};

export { CharityModule };
