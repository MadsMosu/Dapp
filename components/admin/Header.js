import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../../routes';

export default () => {
  return(
    <Menu style={{marginTop: '20px'}}>
      <Link route="/admin">
        <a className="item">Employees</a>
      </Link>
      <Link route="/admin/add">
        <a className="item">Add Employee</a>
      </Link>
      <Link route="/admin/transfer">
        <a className="item">Transfer</a>
      </Link>
    </Menu>
  )
}
