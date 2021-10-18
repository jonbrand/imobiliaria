import { menuData } from "../../data/MenuData"
import { Button } from "../Button/styles"
import { BtnWrap, CloseIcon, DropdownContainer, DropdownLink, DropdownMenu, DropdownWrapper, Icon } from "./styles"

interface DropdownProps {
  isOpen: boolean;
  toggle: any;
}

export const Dropdown = ({ isOpen, toggle }: DropdownProps) => {
  return (
    <DropdownContainer isOpen={ isOpen } onClick={ toggle }>
      <Icon onClick={ toggle }>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((item, index) => (
            <DropdownLink to={item.link} key={index}>
              {item.title}
            </DropdownLink>
          ))}
        </DropdownMenu>
        <BtnWrap>
          <Button primary="true" round="true" big="true" to="/contact">
            Entre em contato!
          </Button>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  )
}