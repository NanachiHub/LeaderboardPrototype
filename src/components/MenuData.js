import { CalculatorOutlined, HomeOutlined, QuestionCircleOutlined, UploadOutlined } from '@ant-design/icons';

const MenuData = [
  {
    label: 'Home',
    key: '/',
    icon: <HomeOutlined />,
  },
  {
    label: 'Leaderboard',
    key: '/leaderboard',
    icon: <CalculatorOutlined />,
  },
  {
    label: 'Submit',
    key: '/submit',
    icon: <UploadOutlined />,
    children: [
      {
        label: 'Row',
        key: '/row',
      },
      {
        label: 'Col',
        key: '/col',
      },
    ],
  },
  {
    label: 'About',
    key: '/about',
    icon: <QuestionCircleOutlined />,
  },
];

export default MenuData;