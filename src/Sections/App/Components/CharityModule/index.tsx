import React, { FunctionComponent, useState } from 'react';
import { IoMdContacts, IoIosAddCircleOutline, IoIosCheckmarkCircle } from 'react-icons/io';
import { FiDollarSign } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { ICharity } from '../../Models';
import numeral from 'numeral';
import './style.css';

type Props = {
  data: ICharity;
};

const formatPrice = (price: string) => {
  const length = price.split('').length;
  let format = 'a';
  
  if(length >= 4) {
    format = '0.0a';
  }
  if(length >= 5) {
    format = '00a';
  } 
  
  if(length >= 6) {
    format = '0.0a';
  }

  if(length >= 7) {
    format = '00a';
  }

  return numeral(price).format(format);
};

const CharityModule: FunctionComponent<Props> = ({ data }) => {
  const [added, add] = useState(false);
  const { name, label, desc, donators, totalRaised, bannerUrl } = data;
  const linkOptions = {
    pathname: `/charities/${label}`,
    state: {
      ...data
    }
  };

  return (
    <div className="charity-card charity-card--active">
      <Link className={"clickable"} to={linkOptions}>
        <div className="charity-card-header">
          <img src={bannerUrl} alt={`${name} banner image.`} />
        </div>

        <div className="charity-card-body">
          <div className={"charity-card-title"}>
            {name}
          </div>

          {/* 120 character limitation */}
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

          <div className="charity-card-item charity-card-item--green small small-width">
            <FiDollarSign size={24} />
            <span>{formatPrice(totalRaised)}</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export { CharityModule };