import './SidebarRow.css'
import { Avatar } from '@material-ui/core';

// pass a component as a props must be Capital First
export default function SidebarRow({ src, Icon, title }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  )
}