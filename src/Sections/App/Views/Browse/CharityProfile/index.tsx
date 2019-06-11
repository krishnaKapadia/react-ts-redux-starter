import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'reactstrap';
import './style/index.css';
import { ICharity } from '../../../Models';
import { CharityModule } from '../../../Components/CharityModule';

type Props = ICharity;

// Eventually this page would make a seperate request that gets the charity's information
// to reduce the load time of the initial browse page due to the response being smaller
// and the query being smaller.
export const CharityProfile: FunctionComponent<any> = (props) => {
  const { name, desc } = props.location.state;
  return (
    <div className="browseCharitiesContainer">
      <div className="container-header">
        <div className="container-header--title">
          <h2><Link to={'/charities'}>Charities</Link> > {name}</h2>
        </div>
      </div>

      <div className="container-body">
        
        <Card>
            
            <div className="charity-card-body">
              <div className={"charity-card-title"}>
                {name}
              </div>

              {/* 120 character limitation */}
              <div className="charity-card-description">
                <p>{desc}</p>
              </div>
            </div>
          </Card>
      </div>
    </div>
  );
}