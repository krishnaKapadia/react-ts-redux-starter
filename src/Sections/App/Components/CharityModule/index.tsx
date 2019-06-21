import React, { FunctionComponent, useState } from 'react';
import { IoMdContacts, IoIosAddCircleOutline, IoIosInformationCircle } from 'react-icons/io';
import { FaRegHeart, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ICharity } from '../../Models';
import numeral from 'numeral';
import './style.css';
import Row from 'reactstrap/lib/Row';

type Props = {
  data: ICharity;
};

const CharityModule: FunctionComponent<Props> = ({ data }) => {
  // const [added, add] = useState(false);
  const { name, label, desc, donators, totalRaised, bannerUrl } = data;
  const linkOptions = {
    pathname: `/charities/${label}`,
    state: {
      ...data
    }
  };

  return (
    <Link className={"clickable"} to={linkOptions} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="charity-card">
          <div className="charity-card__header">
            <h2>SPCA NZ</h2>
          </div>

          <div className="charity-card__logo">
            <img src="https://drivewealth.imgix.net/symbols/fb.png?fit=fillmax&w=70&h=70" alt={`${name} banner image.`} />
          </div>

          <div className="charity-card__text">
            <p>Let's give them a better life!</p>
          </div>

          <Row className="charity-card__footer">
            <FaRegHeart className={"clickable"} size={32} color={"#ff9ff3"} />
            <div className={"icon-stacked"}>
              <FaUserCircle className={"clickable"} size={24} color={"#1dd1a1"} />
              <p style={{ color: '#1dd1a1', fontWeight: 600, fontSize: '12px' }}>1.5K</p>
            </div>
            <IoIosInformationCircle className={"clickable"} size={32} color={"#54a0ff"} />
          </Row>
      </div>
    </Link>
  );
};

export { CharityModule };


{/* <div className="charity-card charity-card--active">
  <Link className={"clickable"} to={linkOptions}>
    <div className="charity-card-header">
      <img src={bannerUrl} alt={`${name} banner image.`} />
    </div>

    <div className="charity-card-body">
      <div className={"charity-card-title"}>
        {name}
      </div>

      <div className="charity-card-description">
        <p>{desc}</p>
      </div>
    </div>
  </Link>

  <div className="charity-card-footer">
    <div className="charity-card-content">
      <div className="charity-card-item charity-card-item--green small">
        <IoMdContacts size={24} />
        <span>{donators}</span>
      </div>

      <div className="charity-card-item charity-card-item--green small">
        <div className="card-item-add">
          {
            added ?
              <IoIosCheckmarkCircle size={30} onClick={() => add(false)} /> :
              <IoIosAddCircleOutline size={30} onClick={() => add(true)} />
          }
        </div>
      </div>
    </div>
  </div>
</div> */}