import * as React from "react"
import './Header.css'

let navMenu = [
    {
        content: 'aaa',
        link: '#',
        childList: [
            'a',
            'b',
            'c'
        ]
    },
    {
        content: 'bbb',
        link: '#'
    },
    {
        content: 'ccc',
        link: '#',
        childList: [
            'a',
            'b'
        ]
    },
]

function createMenu(menu){
    let menuElement = [];
    for(let i = 0; i < navMenu.length; i++){
        let listCompotent = <li><a href={navMenu[i].link}>{navMenu[i].content}</a></li>
        menuElement.push(listCompotent);
    }
    return menuElement;
}

const Header = () => {
    
    return (
        <div className='header'>
            <div className='container'>
                <img src="#"/>
                <ul className="navMenu">
                    {createMenu(navMenu)}                
                </ul>                            
            </div>
        </div>
    )
  }
  
  export default Header