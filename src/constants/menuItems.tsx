import { Link } from "react-router-dom";
import { HomeOutlined, ProductOutlined, MenuOutlined, AppstoreOutlined, BorderOutlined} from '@ant-design/icons';
import { HandPlatter, ShoppingBag } from "lucide-react";
export const menuItems = [
  {
    key: '/',
    icon: <HomeOutlined />,
    label: <Link to={'/'} >Dashboard</Link>,
  },
  {
    key: '/orders',
    icon: <ProductOutlined />,
    label: <Link to={'/orders'} >ordres</Link>,
  },
  {
    key: '/meals',
    icon: <HandPlatter size={18} strokeWidth={1.5} />,
    label: <Link to={'/meals'}>Meals</Link>
  },
  {
    key: '/categories',
    icon: <HandPlatter size={18} strokeWidth={1.5} />,
    label: <Link to={'/categories'}>Categories</Link>
  },
  {
    key: '/tables',
    icon: <HandPlatter size={18} strokeWidth={1.5} />,
    label: <Link to={'/tables'}>Tables</Link>
  }
]