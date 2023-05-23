import Wrapper from "../assets/wrappers/BigSidebar"
import { useAppContext } from "../context/context"
import NavLinks from "./NavLinks"
import Logo from "./Logo"

function BigSidebar() {
  const { showSidebar } = useAppContext()
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container" : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}
export default BigSidebar
