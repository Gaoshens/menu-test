import { useState, useEffect } from 'react';

import { Button, Menu } from 'antd';
import './App.css';
import { menuItems } from './utils/mock';

function App() {
  let cacheMemuItems = sessionStorage.getItem('menuItems'); // 菜单的缓存
  let [menuList, setMenuList] = useState(cacheMemuItems ? JSON.parse(cacheMemuItems) : menuItems);
  let [inputValue, setInputValue] = useState(''); // 输入框的状态
  let [currentMenuItem, setCurrentMenuItem] = useState(''); // 当前被点击的菜单

  useEffect(() => {
    sessionStorage.setItem('menuItems', JSON.stringify(menuList));
  }, [menuList]);

  const handleMenuItemClick = e => {
    const keyPaths = e.keyPath.reverse();
    // 获取点击的当前项
    let currentItem = keyPaths.reduce((prev, curr) => {
      return (prev?.children || menuList).find(menu => menu.key === curr);
    }, null);
    setCurrentMenuItem(currentItem); // 保存当前菜单项
    setInputValue(currentItem.label); // 文字渲染到输入框
  };

  // 点击菜单
  const handleClick = () => {
    currentMenuItem.label = inputValue; // 更改当前菜单项的label
    setMenuList([...menuList]); // 重新渲染
  };

  // 更改输入框中的内容
  const munuTextInput = e => {
    setInputValue(e.target.value);
  };
  return (
    <div className="App">
      <header className="layout-header">
        <span className="logo-text">react</span>
      </header>
      <div className="layout-sider">
        <div className="layout-sider-left">
          <Menu items={menuList} theme="dark" mode="inline" onClick={handleMenuItemClick} />
        </div>
        <div className="layout-sider-content">
          <div>
            <input type="text" defaultValue={inputValue} value={inputValue} onInput={e => munuTextInput(e)} />
            <Button onClick={handleClick}>保存</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
