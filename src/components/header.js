import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import Menu from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';

const menuAccount = (
  <Menu className="mt-n3 shadow-4 border-0">
    <MenuItem>フロート検索</MenuItem>
    <MenuItem>フロート履歴一覧</MenuItem>
    <MenuItem>発出済みアラート一覧</MenuItem>
    <MenuItem>ログアウト</MenuItem>
  </Menu>
);

const appTitle = 'フロート管理アプリ';

function Header() {
  return (
    <AppBar color="primary">
      <Toolbar>
        <h5 className="appbar-title d-none d-md-block">{appTitle}</h5>

        <div className="toolbar-input flex-grow-1 flex-md-grow-0 d-none d-md-block">
          <span className="icon">
            <SearchIcon />
          </span>
          <input type="text" className="has-icon" />
        </div>

        <div className="toolbar-input flex-grow-1 flex-md-grow-0 d-block d-sm-none">
          <span className="icon">
            <SearchIcon />
          </span>
          <input type="text" className="has-icon" />
        </div>

        <PersonIcon
          variant="icon"
          color="inherit"
          menu={menuAccount}
          align="start"
          className="d-none d-sm-block m-3"
        >
          <AccountCircle />
        </PersonIcon>

        <PersonIcon
          variant="icon"
          color="inherit"
          edge="end"
          menu={menuAccount}
          align="start"
          className="d-block d-sm-none m-3"
        >
          <AccountCircle />
        </PersonIcon>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
