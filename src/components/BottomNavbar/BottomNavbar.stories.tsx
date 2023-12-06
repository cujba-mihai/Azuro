import { ComponentMeta, ComponentStoryObj } from '@storybook/react-native';
import { BottomNavbar } from './index';

const BottomNavbarMeta: ComponentMeta<typeof BottomNavbar> = {
    title: 'BottomNavbar',
    component: BottomNavbar,
    argTypes: {},
    args: {},
};

export default BottomNavbarMeta;

type BottomNavbarStory = ComponentStoryObj<typeof BottomNavbar>;

export const Basic: BottomNavbarStory = {};