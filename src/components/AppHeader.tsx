import React, { JSX, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import classNames from 'classnames'

import {
  CContainer,
  CForm,
  CFormInput,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeader,
  CHeaderNav,
  CHeaderToggler,
  CInputGroup,
  CInputGroupText,
  useColorModes,
} from '@coreui/react-pro'
import {
  cilContrast,
  cilApplicationsSettings,
  cilMenu,
  cilMoon,
  cilSearch,
  cilSun,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import { useTypedSelector } from './../store'

import {
  AppHeaderDropdown,
  AppHeaderDropdownMssg,
  AppHeaderDropdownNotif,
  AppHeaderDropdownTasks,
} from './header/'

const AppHeader = (): JSX.Element => {
  const headerRef = useRef<HTMLDivElement>(null)
  const { colorMode, setColorMode } = useColorModes(
    'coreui-pro-next-js-admin-template-theme-modern',
  )
  const [currentTheme, setCurrentTheme] = useState<string>('light')

  useEffect(() => {
    if (colorMode) {
      setCurrentTheme(colorMode)
    }
  }, [colorMode])

  const dispatch = useDispatch()
  const sidebarShow = useTypedSelector((state) => state.sidebarShow)
  const asideShow = useTypedSelector((state) => state.asideShow)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      headerRef.current?.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0)
    })
  }, [])

  return (
    <CHeader position="sticky" className="mb-4 p-0" ref={headerRef}>
      <CContainer className="px-4" fluid>
        <CHeaderToggler
          className={classNames('d-lg-none', {
            'prevent-hide': !sidebarShow,
          })}
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          style={{ marginInlineStart: '-14px' }}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CForm className="d-none d-sm-flex">
          <CInputGroup>
            <CInputGroupText id="search-addon" className="bg-body-secondary border-0 px-1">
              <CIcon icon={cilSearch} size="lg" className="my-1 mx-2 text-body-secondary" />
            </CInputGroupText>
            <CFormInput
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              className="bg-body-secondary border-0"
            />
          </CInputGroup>
        </CForm>
        <CHeaderNav className="d-none d-md-flex ms-auto">
          <AppHeaderDropdownNotif />
          <AppHeaderDropdownTasks />
          <AppHeaderDropdownMssg />
        </CHeaderNav>
        <CHeaderNav className="ms-auto ms-md-0">
          <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
          </li>
          <CDropdown variant="nav-item" placement="bottom-end">
            <CDropdownToggle caret={false}>
              <CIcon
                icon={currentTheme === 'dark' ? cilMoon : currentTheme === 'auto' ? cilContrast : cilSun}
                size="lg"
                suppressHydrationWarning
              />
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem
                active={currentTheme === 'light'}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode('light')}
                suppressHydrationWarning
              >
                <CIcon className="me-2" icon={cilSun} size="lg" /> Light
              </CDropdownItem>
              <CDropdownItem
                active={currentTheme === 'dark'}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode('dark')}
                suppressHydrationWarning
              >
                <CIcon className="me-2" icon={cilMoon} size="lg" /> Dark
              </CDropdownItem>
              <CDropdownItem
                active={currentTheme === 'auto'}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode('auto')}
                suppressHydrationWarning
              >
                <CIcon className="me-2" icon={cilContrast} size="lg" /> Auto
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
          </li>
          <AppHeaderDropdown />
        </CHeaderNav>
        <CHeaderToggler
          onClick={() => dispatch({ type: 'set', asideShow: !asideShow })}
          style={{ marginInlineEnd: '-12px' }}
        >
          <CIcon icon={cilApplicationsSettings} size="lg" />
        </CHeaderToggler>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
