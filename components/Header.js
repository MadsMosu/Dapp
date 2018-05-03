import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return(
    <Menu style={{marginTop: '20px'}}>
      <Link route="/">
        <a className="item">Samples</a>
      </Link>
      <Link route="/addBlood">
        <a className="item">Add Blood Sample</a>
      </Link>
      <Link route="/addCellTissue">
        <a className="item">Add Cell/Tissue Sample</a>
      </Link>
    </Menu>
  )
}